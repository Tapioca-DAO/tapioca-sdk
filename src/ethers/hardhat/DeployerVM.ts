import { ContractFactory } from 'ethers';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { v4 as uuidv4 } from 'uuid';
import { TContract } from '../../shared';
import {
    TapiocaDeployer,
    TapiocaDeployer__factory,
    TapiocaMulticall,
    TapiocaMulticall__factory,
} from '../../typechain/tapioca-periphery';

//TODO: retrieve from tapioca-mocks or tapioca-periphery
import { TAPIOCA_PROJECTS_NAME } from '../../api/config';
import { getOverrideOptions } from '../../api/utils';
import {
    MultisigMock,
    MultisigMock__factory,
} from '../../typechain/tapioca-mocks';
import { IOwnable__factory } from '../../typechain/tapioca-periphery/factories/IOwnable';
import SUPPORTED_CHAINS from '../../SUPPORTED_CHAINS';

export interface IDependentOn {
    deploymentName: string;
    argPosition: number;
    keyName?: string;
}
export type TTapiocaDeployTaskArgs = {
    tag: string;
    load?: boolean;
    verify?: boolean;
};
export type TTapiocaDeployerVmPass<T> = {
    VM: DeployerVM;
    taskArgs: TTapiocaDeployTaskArgs & T;
    isTestnet: boolean;
    tapiocaMulticallAddr: string;
    chainInfo: (typeof SUPPORTED_CHAINS)[number];
};

interface IDeploymentQueue {
    deploymentName: string;
    contract: ContractFactory;
    args: unknown[];
    dependsOn?: IDependentOn[];
    meta?: any;
    runStaticSimulation?: boolean;
}

export interface TDeploymentVMContract extends TContract {
    meta: { args: unknown[]; salt: string; create2: true };
}

interface IConstructorOptions {
    bytecodeSizeLimit: number; // Limit of bytecode size for a single transaction, error happened on Arb Goerli with Alchemy RPC
    debugMode: boolean;
    globalWait?: number;
    tag?: string;
    multicall?: TapiocaMulticall;
    multisig?: MultisigMock;
    deployFreshContracts?: boolean; // If true, it will deploy the Multicall/Multisig contracts even if they are already deployed
    overrideOptions?: boolean;
}

export interface IDeployerVMAdd<T extends ContractFactory>
    extends IDeploymentQueue {
    contract: T;
    args: Parameters<T['deploy']>;
}

/**
 * Class to deploy contracts using the TapiocaDeployer & TapiocaMulticall to aggregate deployments in a single transaction.
 * @param hre HardhatRuntimeEnvironment instance of Hardhat.
 * @param options Options to use.
 * @param options.bytecodeSizeLimit Limit of bytecode size for a single transaction, if RPC provider is not able to handle it, error will be thrown.
 * @param options.tag Tag to use for the deployment. If not provided, 'default' will be used (Per SDK).
 *
 */
export class DeployerVM {
    private tapiocaDeployer?: TapiocaDeployer;
    private multicall?: TapiocaMulticall;
    private multisig?: MultisigMock;

    hre: HardhatRuntimeEnvironment;
    options: IConstructorOptions;

    /**
     * Queue of contracts to deploy
     * Runtime bound, equal to [] when creating a new instance of this class or after flushing the runtime.
     */
    private deploymentQueue: IDeploymentQueue[] = [];

    /**
     * Queue of contract to build. Used to build the bytecode for the TapiocaDeployer.
     * Runtime bound, equal to [] when creating a new instance of this class or after flushing the runtime.
     * This is a private queue used to build the calls to the multicall contract
     */
    private buildQueue: (IDeploymentQueue & {
        deterministicAddress: string;
        creationCode: string;
        salt: string;
        runStaticSimulations: boolean;
    })[] = [];

    /**
     * List of deployed contracts
     */
    private depList: TContract[] = [];

    /**
     * Flag to check if the deployment queue has been executed
     */
    private executed = false;

    constructor(hre: HardhatRuntimeEnvironment, options: IConstructorOptions) {
        this.hre = hre;
        this.options = options;
        this.options.globalWait = options.globalWait ?? 3;
    }

    /**
     * Static method to create a new instance of DeployerVM with the default settings.
     *
     * @param hre HardhatRuntimeEnvironment instance of Hardhat.
     * @param tag Tag to use for the deployment. If not provided, 'default' will be used (Per SDK).
     * @param debugMode If true, it will log errors and debug information.
     * @param bytecodeSizeLimit Limit of bytecode size for a single transaction, if RPC provider is not able to handle it, error will be thrown.
     * @returns Instance of DeployerVM
     */
    static loadVM(
        hre: HardhatRuntimeEnvironment,
        tag?: string,
        debugMode = true,
        bytecodeSizeLimit = 100_000,
    ) {
        const VM = new hre.SDK.DeployerVM(hre, {
            // Change this if you get bytecode size error / gas required exceeds allowance (550000000)/ anything related to bytecode size
            // Could be different by network/RPC provider
            bytecodeSizeLimit,
            debugMode,
            tag,
        });
        return VM;
    }

    /**
     * Static method to deploy contracts using the TapiocaDeployer & TapiocaMulticall to aggregate deployments in a single transaction.
     *
     * @param taskArgs Default task arguments for the deployment & task specific arguments.
     * @param hre HardhatRuntimeEnvironment instance of Hardhat.
     * @param vmContractLoader Hook to load contracts into the VM.
     * @param vmPostDeployment Hook to execute post deployment operations.
     * @param wait Number of blocks to wait for the transaction to be mined. Default: 0
     */
    static async tapiocaDeployTask<T>(
        taskArgs: TTapiocaDeployTaskArgs & T,
        hre: HardhatRuntimeEnvironment,
        vmContractLoader: (params: TTapiocaDeployerVmPass<T>) => Promise<void>,
        vmPostDeployment?: (params: TTapiocaDeployerVmPass<T>) => Promise<void>,
        wait = 3,
    ) {
        // Settings
        const { tag } = taskArgs;
        const VM = DeployerVM.loadVM(hre, tag);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const chainInfo = hre.SDK.utils.getChainBy(
            'chainId',
            hre.SDK.eChainId,
        )!;

        const isTestnet = !!chainInfo.tags.find((tag) => tag === 'testnet');
        const tapiocaMulticall = await VM.getMulticall();

        // Build contracts
        if (taskArgs.load) {
            console.log(`[+] Loading contracts from ${tag} deployment... 📡`);
            console.log(
                `\t[+] ${hre.SDK.db
                    .loadLocalDeployment(tag, hre.SDK.eChainId)
                    ?.contracts.map((e) => e.name)
                    .reduce((a, b) => `${a}, ${b}`)}`,
            );

            VM.load(
                hre.SDK.db.loadLocalDeployment(tag, hre.SDK.eChainId)
                    ?.contracts ?? [],
            );
        } else {
            await vmContractLoader({
                VM: VM as any,
                taskArgs: { ...taskArgs, tag },
                isTestnet,
                tapiocaMulticallAddr: tapiocaMulticall.address,
                chainInfo,
            });

            // Add and execute
            await VM.execute(wait);
            await VM.save();
        }

        if (taskArgs.verify) {
            await VM.verify();
        }

        if (vmPostDeployment) {
            vmPostDeployment({
                VM: VM as any,
                taskArgs: { ...taskArgs, tag },
                isTestnet,
                tapiocaMulticallAddr: tapiocaMulticall.address,
                chainInfo,
            });
        }

        console.log('[+] Stack deployed! 🎉');
    }

    // ***********
    // Getter
    // ***********

    /**
     * Returns the current state of deployment queue
     */
    getQueue() {
        return this.deploymentQueue;
    }

    /**
     * Returns the current state of the build queue
     */
    getBuildQueue() {
        return this.buildQueue;
    }

    /**
     * Return a list of deployed contracts
     */
    list(): TDeploymentVMContract[] {
        this.depList = this.buildQueue.map((contract) => ({
            name: contract.deploymentName,
            address: contract.deterministicAddress,
            meta: {
                ...contract.meta,
                args: contract.args,
                salt: contract.salt,
                create2: true,
            },
        }));
        return this.depList;
    }

    // ***********
    // Exec
    // ***********

    /**
     * Add a contract to the deployment queue
     */
    add<T extends ContractFactory>(contract: IDeployerVMAdd<T>) {
        // Validate contract dependencies
        contract.dependsOn?.forEach((dependency) => {
            if (
                dependency.argPosition &&
                dependency.argPosition >= contract.args.length
            ) {
                throw new Error(
                    `[-] Dependency for ${contract.deploymentName} argPosition is out of bounds`,
                );
            }
        });

        console.log(
            '\t[+] Adding contract to deployment queue: ',
            contract.deploymentName,
        );
        this.deploymentQueue.push(contract);
        return this;
    }

    /**
     * Execute the current build queue and deploy the contracts, using TapiocaMulticall to aggregate the calls.
     * @param wait Number of blocks to wait for the transaction to be mined. Default: 0
     */
    async execute(wait = this.options.globalWait ?? 3, runSimulations = true) {
        if (this.executed) {
            throw new Error('[-] Deployment queue has already been executed');
        }
        const calls = await this.getBuildCalls(runSimulations);

        console.log('[+] Executing deployment queue');
        if (calls.length > 1) {
            console.log(
                '[+] Call data size exceeded, batching calls into ',
                calls.length,
                ' transactions',
            );
        }

        this.multicall = await this.getMulticall();
        // Execute the calls
        try {
            for (const call of calls) {
                const tx = await this.multicall!.multicall(
                    call,
                    this.options.overrideOptions
                        ? getOverrideOptions(
                              String(this.hre.network.config.chainId),
                          )
                        : {},
                );
                console.log(`[+] Execution batch hash: ${tx.hash}`);
                await tx.wait(wait);
            }
        } catch (e) {
            if (this.options.debugMode) {
                console.log(`[-] Failed with error: ${e}`);
            } else {
                console.log(
                    '[-] Error while executing deployment queue, try changing the bytecodeSizeLimit',
                );
            }
        }

        this.executed = true;
        console.log('[+] Deployment queue executed');

        return this;
    }

    async executeMulticall(
        calls: TapiocaMulticall.CallStruct[],
        gasLimit = 2_000_000,
    ) {
        console.log('[+] Number of calls:', calls.length);
        await this.getMulticall(); // Ensure multicall is deployed
        try {
            const tx = await (
                await this.multicall!.multicall(calls)
            ).wait(this.options.globalWait ?? 3);
            console.log('[+] Multicall Tx: ', tx.transactionHash);
        } catch (e) {
            console.log('[-] Multicall failed');
            console.log('[+] Forcing execution with gas limit', gasLimit);
            const tx = await (
                await this.multicall!.multicall(calls, { gasLimit })
            ).wait(this.options.globalWait ?? 3);
            console.log('[+] Multicall Tx: ', tx.transactionHash);
        }
    }

    /**
     * Transfers ownership for a contract which inherits OZ Ownable
     * @param to The new owner address
     * @param target Target contract to apply the operation for
     * @param fromMultisig Needs to be true if the current owner is a multisig
     */
    async transferOwnership(
        to: string,
        target: TContract,
        fromMultisig?: boolean,
        fromMulticall?: boolean,
    ) {
        console.log(`\t[+] Transferring ownership to ${to}...`);

        // Get deployer deployment
        let deployment: TContract | undefined;
        try {
            deployment = this.hre.SDK.db.findLocalDeployment(
                String(this.hre.network.config.chainId),
                target.name,
                this.options.tag,
            );
        } catch (e) {
            if (this.options.debugMode) {
                console.log(`[-] Failed with error: ${e}`);
            }
        }

        if (!deployment) {
            //try global__db
            try {
                deployment = this.hre.SDK.db.findGlobalDeployment(
                    TAPIOCA_PROJECTS_NAME.Generic, //generic
                    String(this.hre.network.config.chainId),
                    target.name,
                    'default',
                );
            } catch (e) {
                if (this.options.debugMode) {
                    console.log(
                        `[-] Failed retrieving from global__db with error: ${e}`,
                    );
                }
            }
        }

        if (!deployment) {
            throw '[-] Deployment does not exist';
        }
        const signer = (await this.hre.ethers.getSigners())[0];

        const ownableContract = IOwnable__factory.connect(
            target.address,
            signer,
        );

        const calldata = ownableContract.interface.encodeFunctionData(
            'transferOwnership',
            [to],
        );

        if (fromMultisig) {
            console.log(
                '[+] Performing ownership transferal through the Multisig',
            );
            const from = await ownableContract.owner();
            await this.submitTransactionThroughMultisig(
                target.address,
                calldata,
                from,
            );
        } else if (fromMulticall) {
            console.log(
                '[+] Performing ownership transferal through the Multicall',
            );
            const calls: TapiocaMulticall.CallStruct[] = [];
            calls.push({
                target: target.address,
                callData: calldata,
                allowFailure: false,
            });
            const multicallTx = await (
                await this.getMulticall()
            ).multicall(calls);
            await multicallTx.wait(this.options.globalWait ?? 3);
        } else {
            console.log('[+] Performing ownership transferal directly');
            const tx = await ownableContract
                .connect(signer)
                .transferOwnership(to);
            await tx.wait(this.options.globalWait ?? 3);
        }

        console.log('[+] Ownership transferred\n');
    }

    /**
     * Transfers ownership for a contract which inherits OZ Ownable
     * @param multisigAddress The Multisig address
     * @param target Target contract to apply the operation for
     * @param calldata Transaction data
     */
    async submitTransactionThroughMultisig(
        target: string,
        calldata: string,
        multisigAddress?: string,
    ) {
        if (!multisigAddress) {
            const multisig = await this.getMultisig();
            console.log(`[+] Using Multisig ${multisig.address}`);
            multisigAddress = multisig.address;
        }

        const signer = (await this.hre.ethers.getSigners())[0];
        const multisig = MultisigMock__factory.connect(multisigAddress, signer);

        console.log('\n[+] Executing through Multisig');

        let tx = await multisig.submitTransaction(target, 0, calldata);
        await tx.wait(this.options.globalWait ?? 3);
        console.log('   [+] Transaction submitted through multisig: ', tx.hash);
        const txCount = await multisig.getTransactionCount();
        const lastTx = txCount.sub(1);
        tx = await multisig.confirmTransaction(lastTx);
        await tx.wait(this.options.globalWait ?? 3);
        console.log('   [+] Transaction confirmed: ', tx.hash);
        tx = await multisig.executeTransaction(lastTx);
        await tx.wait(this.options.globalWait ?? 3);
        console.log('   [+] Transaction executed: ', tx.hash);

        console.log('[+] Multisig execution finished \n');
    }

    /**
     * Save the deployments to the local database.
     */
    async save() {
        if (this.list().length === 0) {
            throw new Error('[-] No contract to save');
        }

        const dep = this.hre.SDK.db.buildLocalDeployment({
            chainId: String(this.hre.network.config.chainId),
            chainIdName: this.hre.network.name,
            lastBlockHeight: await this.hre.ethers.provider.getBlockNumber(),
            contracts: this.list(),
        });

        this.hre.SDK.db.saveLocally(dep, this.options.tag);
        console.log(
            '[+] Deployment saved for chainId: ',
            this.hre.network.name,
        );

        return this;
    }

    /**
     *
     * Verify the deployed contracts on Etherscan.
     */
    async verify() {
        console.log('[+] Verifying deployed contracts');
        type TVerificationObject = {
            contract?: string;
            address: string;
            constructorArguments: unknown[];
        };

        // We will batch the verification calls to avoid hitting the etherscan API rate limit, max 5 calls per second
        const verifyList: TVerificationObject[][] = [[]];

        let counter = 1;
        for (const contract of this.depList) {
            if (counter % 5 === 0) {
                verifyList.push([]);
            }

            verifyList[verifyList.length - 1].push({
                address: contract.address,
                constructorArguments: contract.meta.args,
            });
            counter++;
        }

        console.log(`[+] No. of batches to verify: ${verifyList.length}`);

        // Verify the contracts
        // TODO Is there a way to make it faster?
        for (const batch of verifyList) {
            try {
                await Promise.allSettled(
                    batch.map((contract) =>
                        this.hre.run('verify:verify', {
                            ...contract,
                            noCompile: true,
                        }),
                    ),
                );
            } catch (e: any) {
                console.log(`[-] ${e.message}`);
            }
        }
        console.log('[+] Verified all contracts');

        return this;
    }

    /**
     * Load already deployed contracts.
     * @param deps List of deployed contracts
     */
    load(deps: TContract[]) {
        this.executed = true;
        this.depList = deps;
        return this;
    }

    /**
     * Reset the deployment queue
     */
    flush() {
        this.deploymentQueue = [];
        this.buildQueue = [];
        this.executed = false;
        this.depList = [];
        return this;
    }

    // ***********
    // Getters
    // ***********
    /**
     * Retrieves the TapiocaMulticall contract
     * If the contract doesn't exist, it will be deployed and saved globally
     */
    getMulticall = async (): Promise<TapiocaMulticall> => {
        if (this.multicall) return this.multicall;

        const project = this.hre.userConfig.SDK.project;
        const _tag = this.options.tag ?? 'default';

        // Get deployer deployment
        let deployment: TContract | undefined;
        if (!this.options.deployFreshContracts) {
            try {
                deployment = this.hre.SDK.db.findGlobalDeployment(
                    project,
                    String(this.hre.network.config.chainId),
                    'TapiocaMulticall',
                    _tag,
                );
                if (deployment) {
                    console.log(
                        `\t[+] Using previous TapiocaMulticall deployment. at ${deployment.address}`,
                    );
                    const _multicall = TapiocaMulticall__factory.connect(
                        deployment.address,
                        (await this.hre.ethers.getSigners())[0],
                    );
                    this.multicall = _multicall;
                    const signer = (await this.hre.ethers.getSigners())[0];
                    if (
                        (await _multicall.owner()).toLowerCase() !==
                        signer.address.toLowerCase()
                    ) {
                        throw new Error(
                            '[-] Different owner, deploying new one.',
                        );
                    }
                }
            } catch (e) {
                console.log(
                    '\t\t[-] Failed retrieving TapiocaMulticall deployment',
                );
            }
        }

        // Deploy TapiocaMulticall if not deployed
        if (!deployment) {
            // Deploy TapiocaMulticall
            console.log('\t\t[+] Deploying TapiocaMulticall');

            const multicall = await new TapiocaMulticall__factory(
                (
                    await this.hre.ethers.getSigners()
                )[0],
            ).deploy(
                this.options.overrideOptions
                    ? getOverrideOptions(
                          String(this.hre.network.config.chainId),
                      )
                    : {},
            );

            await multicall.deployTransaction.wait(
                this.options.globalWait ?? 3,
            );
            // Save deployment

            const dep = this.hre.SDK.db.buildLocalDeployment({
                chainIdName: this.hre.network.name,
                lastBlockHeight:
                    await this.hre.ethers.provider.getBlockNumber(),
                chainId: String(this.hre.network.config.chainId),
                contracts: [
                    {
                        name: 'TapiocaMulticall',
                        address: multicall.address,
                        meta: {},
                    },
                ],
            });
            this.hre.SDK.db.saveGlobally(dep, project, _tag);
            console.log(`\t\t[+] Deployed at ${multicall.address}`);

            const _multicall = TapiocaMulticall__factory.connect(
                multicall.address,
                (await this.hre.ethers.getSigners())[0],
            );
            this.multicall = _multicall;
            return _multicall;
        }

        // Return Multicall
        return TapiocaMulticall__factory.connect(
            deployment.address,
            (await this.hre.ethers.getSigners())[0],
        );
    };

    private async getTapiocaDeployer(): Promise<TapiocaDeployer> {
        if (this.tapiocaDeployer) return this.tapiocaDeployer;

        const project = TAPIOCA_PROJECTS_NAME.Generic;
        const _tag = this.options.tag ?? 'default';

        // Get deployer deployment
        let deployment: TContract | undefined;
        if (!this.options.deployFreshContracts) {
            try {
                deployment = this.hre.SDK.db.findGlobalDeployment(
                    project,
                    this.hre.SDK.eChainId,
                    'TapiocaDeployer',
                    this.options.tag,
                );
                if (deployment) {
                    console.log(
                        `\t[+] Previous TapiocaDeployer deployment exists at ${deployment?.address}`,
                    );
                    const _tapiocaDeployer = TapiocaDeployer__factory.connect(
                        deployment.address,
                        (await this.hre.ethers.getSigners())[0],
                    );
                    this.tapiocaDeployer = _tapiocaDeployer;
                } else {
                    throw new Error('[-] No deployment found');
                }
            } catch (e) {
                console.log(
                    '\t\t[-] Failed retrieving TapiocaDeployer deployment',
                );
            }
        }

        // Deploy TapiocaDeployer if not deployed
        if (!deployment) {
            // Deploy TapiocaDeployer
            console.log('\t\t[+] Deploying TapiocaDeployer');
            const tapiocaDeployer = await new TapiocaDeployer__factory(
                (
                    await this.hre.ethers.getSigners()
                )[0],
            ).deploy(
                this.options.overrideOptions
                    ? getOverrideOptions(
                          String(this.hre.network.config.chainId),
                      )
                    : {},
            );

            await tapiocaDeployer.deployTransaction.wait(
                this.options.globalWait ?? 3,
            );

            // Save deployment
            const dep = this.hre.SDK.db.buildLocalDeployment({
                chainId: String(this.hre.network.config.chainId),
                chainIdName: this.hre.network.name,
                lastBlockHeight:
                    await this.hre.ethers.provider.getBlockNumber(),
                contracts: [
                    {
                        name: 'TapiocaDeployer',
                        address: tapiocaDeployer.address,
                        meta: {},
                    },
                ],
            });
            this.hre.SDK.db.saveGlobally(dep, project, _tag);
            console.log(`\t\t[+] Deployed at ${tapiocaDeployer.address}`);

            this.tapiocaDeployer = tapiocaDeployer;
            return tapiocaDeployer;
        }

        // Return TapiocaDeployer
        return TapiocaDeployer__factory.connect(
            deployment.address,
            (await this.hre.ethers.getSigners())[0],
        );
    }

    /**
     * Retrieves the MultisigMock contract
     * If the contract doesn't exist, it will be deployed and saved globally
     */
    getMultisig = async (): Promise<MultisigMock> => {
        if (this.multisig) return this.multisig;

        const project = TAPIOCA_PROJECTS_NAME.Generic;
        const _tag = this.options.tag ?? 'default';

        // Get deployer deployment
        let deployment: TContract | undefined;
        try {
            deployment = this.hre.SDK.db.findGlobalDeployment(
                project,
                String(this.hre.network.config.chainId),
                'MultisigMock',
                _tag,
            );
            console.log('[+] Previous MultisigMock deployment exists.');
            if (deployment) {
                const _multisig = MultisigMock__factory.connect(
                    deployment.address,
                    (await this.hre.ethers.getSigners())[0],
                );
                this.multisig = _multisig;
            }
        } catch (e) {
            if (this.options.debugMode) {
                console.log(
                    `[-] Failed retrieving MultisigMock deployemnt with error: ${e}`,
                );
            }
        }

        // Deploy TapiocaMulticall if not deployed
        if (!deployment) {
            // Deploy TapiocaMulticall
            console.log('[+] Deploying MultisigMock');
            const multisig = await new MultisigMock__factory(
                (
                    await this.hre.ethers.getSigners()
                )[0],
            ).deploy(1);

            await multisig.deployTransaction.wait(this.options.globalWait ?? 3);
            console.log('[+] Deployed');

            // Save deployment
            console.log('[+] Saving MultisigMock deployment');
            const dep = this.hre.SDK.db.buildLocalDeployment({
                chainId: String(this.hre.network.config.chainId),
                chainIdName: this.hre.network.name,
                lastBlockHeight:
                    await this.hre.ethers.provider.getBlockNumber(),
                contracts: [
                    {
                        name: 'MultisigMock',
                        address: multisig.address,
                        meta: {},
                    },
                ],
            });
            this.hre.SDK.db.saveGlobally(dep, project, _tag);
            console.log('[+] Saved');

            const _multisig = MultisigMock__factory.connect(
                multisig.address,
                (await this.hre.ethers.getSigners())[0],
            );
            this.multisig = _multisig;
            return _multisig;
        }

        // Return Multisig
        return MultisigMock__factory.connect(
            deployment.address,
            (await this.hre.ethers.getSigners())[0],
        );
    };

    // ***********
    // Utils
    // ***********
    private async getBuildCalls(
        runSimulations = true,
    ): Promise<TapiocaMulticall.CallStruct[][]> {
        console.log('\t[+] Populating build queue');
        await this.populateBuildQueue();
        if (runSimulations) {
            console.log('[+] Running static simulations');
            await this.runStaticSimulation();
        }
        console.log('[+] Building call queue');
        const tapiocaDeployer = await this.getTapiocaDeployer();
        // Build the calls
        let currentByteCodeSize = 0;
        let currentBatch = 0;
        const calls: TapiocaMulticall.CallStruct[][] = [[]];
        for (const build of this.buildQueue) {
            // We'll batch the calls to avoid hitting the gas limit
            const callData = this.buildDeployerCode(
                tapiocaDeployer,
                0,
                build.salt,
                build.creationCode,
                build.deploymentName,
            );
            // Check if we need to create a new batch
            if (
                currentByteCodeSize + callData.length >
                this.options.bytecodeSizeLimit
            ) {
                currentByteCodeSize = 0;
                currentBatch++;
                calls[currentBatch] = [];
            }

            currentByteCodeSize += callData.length;
            // Add creation code to the calls
            calls[currentBatch].push({
                target: tapiocaDeployer.address,
                allowFailure: false,
                callData,
            });
        }

        return calls;
    }

    /**
     * Build the bytecode for the TapiocaDeployer 'deploy' function
     */
    private buildDeployerCode(
        tapiocaDeployer: TapiocaDeployer,
        amount: number,
        salt: string,
        creationCode: string,
        contractName: string,
    ) {
        return tapiocaDeployer.interface.encodeFunctionData('deploy', [
            amount,
            salt,
            creationCode,
            contractName,
        ]);
    }

    // TODO - Check if it's deployed on the global deployment file, if not, ask to deploy it
    /**
     * Build the creation code for each contract in the queue. For each contract, we check if it has dependencies, and build them deterministically.
     */
    private async populateBuildQueue() {
        const tapiocaDeployer = await this.getTapiocaDeployer();

        for (const contract of this.deploymentQueue) {
            {
                // Build dependencies if any
                contract.dependsOn?.forEach((dependency) =>
                    this._handlePopulateBuildQueueDependentOn(
                        contract,
                        dependency as IDependentOn,
                    ),
                );

                // Build the creation code
                const creationCode =
                    contract.contract.bytecode +
                    contract.contract.interface
                        .encodeDeploy(contract.args)
                        .split('x')[1];

                const salt = this.genSalt();

                this.buildQueue.push({
                    ...contract,
                    deterministicAddress:
                        await this.computeDeterministicAddress(
                            tapiocaDeployer,
                            salt,
                            creationCode,
                        ),
                    creationCode,
                    salt,
                    runStaticSimulations: contract.runStaticSimulation ?? true,
                });
            }
        }
    }
    private _handlePopulateBuildQueueDependentOn(
        contract: IDeploymentQueue,
        dependency: IDependentOn,
    ) {
        // Find the dependency
        const deps = this.buildQueue.find(
            (e) => e.deploymentName === dependency.deploymentName,
        );
        // Throw if not found
        if (!deps) {
            const dependencyAddress = dependency.keyName
                ? (<any>contract.args[dependency.argPosition])[
                      dependency.keyName
                  ]
                : contract.args[dependency.argPosition];
            if (
                !dependencyAddress ||
                dependencyAddress == this.hre.ethers.constants.AddressZero
            ) {
                throw new Error(
                    `[-] Dependency ${dependency.deploymentName} not found for ${contract.deploymentName}}`,
                );
            } else {
                console.log(
                    `Dependency for ${dependency.deploymentName} already provided: ${dependencyAddress}`,
                );
            }
        } else {
            // Set the dependency address in the contract args
            if (!!dependency.keyName) {
                (<any>contract.args[dependency.argPosition])[
                    dependency.keyName
                ] = deps.deterministicAddress;
            } else {
                contract.args[dependency.argPosition] =
                    deps.deterministicAddress;
            }
        }
    }

    /**
     * Used to check for reverts
     */
    private async runStaticSimulation() {
        // Run asynchronously
        await Promise.all(
            this.buildQueue
                .filter((a) => a.runStaticSimulations)
                .map(async (e) => {
                    return (await this.getTapiocaDeployer()).callStatic.deploy(
                        0,
                        e.salt,
                        e.creationCode,
                        e.deploymentName,
                        this.options.overrideOptions
                            ? getOverrideOptions(
                                  String(this.hre.network.config.chainId),
                              )
                            : {},
                    );
                }),
        );
    }

    private computeDeterministicAddress(
        deployer: TapiocaDeployer,
        salt: string,
        bytecode: string,
    ) {
        return deployer.callStatic['computeAddress(bytes32,bytes32)'](
            salt,
            this.hre.ethers.utils.keccak256(bytecode),
        );
    }
    private genSalt() {
        return this.hre.ethers.utils.solidityKeccak256(['string'], [uuidv4()]);
    }
}

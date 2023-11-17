import { ContractFactory, ContractTransaction } from 'ethers';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { v4 as uuidv4 } from 'uuid';
import { TContract } from '../../shared';
import {
    TapiocaDeployer,
    TapiocaDeployer__factory,
} from '../../typechain/tapioca-periphery';
import {
    Multicall3,
    Multicall3__factory,
} from '../../typechain/tapioca-periphery';

//TODO: retrieve from tapioca-mocks or tapioca-periphery
import {
    MultisigMock,
    MultisigMock__factory,
} from '../../typechain/tapioca-mocks';
import { IOwnable__factory } from '../../typechain/tapioca-periphery/factories/IOwnable';
import { getOverrideOptions } from '../../api/utils';
import { TAPIOCA_PROJECTS_NAME } from '../../api/config';

export interface IDependentOn {
    deploymentName: string;
    argPosition: number;
}

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
    multicall?: Multicall3;
    multisig?: MultisigMock;
    overrideOptions?: boolean;
}

export interface IDeployerVMAdd<T extends ContractFactory>
    extends IDeploymentQueue {
    contract: T;
    args: Parameters<T['deploy']>;
}

// TODO - Ability to load already deployed contract (To verify?)
// TODO - Ability to add arbitrary calls in between deployments?
/**
 * Class to deploy contracts using the TapiocaDeployer & Multicall3 to aggregate deployments in a single transaction.
 * @param hre HardhatRuntimeEnvironment instance of Hardhat.
 * @param options Options to use.
 * @param options.bytecodeSizeLimit Limit of bytecode size for a single transaction, if RPC provider is not able to handle it, error will be thrown.
 * @param options.tag Tag to use for the deployment. If not provided, 'default' will be used (Per SDK).
 *
 */
export class DeployerVM {
    private tapiocaDeployer?: TapiocaDeployer;
    private multicall?: Multicall3;
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
        if (!this.executed) {
            throw new Error('[-] Deployment queue has not been executed yet');
        }
        if (this.depList.length === 0) {
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
        }

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
            if (dependency.argPosition >= contract.args.length) {
                throw new Error(
                    `[-] Dependency for ${contract.deploymentName} argPosition is out of bounds`,
                );
            }
        });

        console.log(
            '[+] Adding contract to deployment queue: ',
            contract.deploymentName,
        );
        this.deploymentQueue.push(contract);
        return this;
    }

    /**
     * Execute the current build queue and deploy the contracts, using Multicall3 to aggregate the calls.
     * @param wait Number of blocks to wait for the transaction to be mined. Default: 0
     */
    async execute(wait = this.options.globalWait ?? 0, runSimulations = true) {
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

        if (!this.multicall) {
            console.log('\n[+] Multicall3 not set');
            await this.getMulticall();
            console.log(
                `[+] Multicall3 deployed at: ${this.multicall.address}`,
            );
            console.log('\n');
        }

        // Execute the calls
        try {
            for (const call of calls) {
                const tx = await this.multicall.multicall(
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
        console.log(`[+] Transfering ownership to ${to}...`);

        // Get deployer deployment
        let deployment: TContract | undefined;
        try {
            deployment = this.hre.SDK.db.getLocalDeployment(
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
                deployment = this.hre.SDK.db.getGlobalDeployment(
                    TAPIOCA_PROJECTS_NAME.Generic, //generic
                    String(this.hre.network.config.chainId),
                    target.name,
                    'default',
                    this.hre.SDK.db.SUBREPO_GLOBAL_DB_PATH,
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
            const calls: Multicall3.CallStruct[] = [];
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
    save() {
        if (!this.executed) {
            throw new Error(
                '[-] Deployment queue has not been executed. Please call execute() before writing the deployment file',
            );
        }

        const dep = this.hre.SDK.db.buildLocalDeployment({
            chainId: String(this.hre.network.config.chainId),
            contracts: this.list(),
        });
        this.hre.SDK.db.saveLocally(dep, this.options.tag);
        console.log(
            '[+] Deployment saved for chainId: ',
            String(this.hre.network.config.chainId),
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
        for (const contract of this.list()) {
            if (counter % 5 === 0) {
                verifyList.push([]);
            }

            verifyList[verifyList.length - 1].push({
                //TODO for testing purpose, remove later
                ...(contract.name === 'YieldBoxMock'
                    ? {
                          contract:
                              'contracts/options/mocks/YieldBoxMock.sol:YieldBoxMock',
                      }
                    : {}),
                address: contract.address,
                constructorArguments: contract.meta.args,
            });
            counter++;
        }

        console.log(`[+] No. of batches to verify: ${verifyList.length}`);

        // Verify the contracts
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
                await new Promise((resolve) => setTimeout(resolve, 2000));
            } catch (e: any) {
                console.log(`[-] Failed to verify ${e.message}`);
            }
        }
        console.log('[+] Verified');

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
     * Retrieves the Multicall3 contract
     * If the contract doesn't exist, it will be deployed and saved globally
     */
    getMulticall = async (): Promise<Multicall3> => {
        if (this.multicall) return this.multicall;

        const project = TAPIOCA_PROJECTS_NAME.Generic;
        const _tag = this.options.tag ?? 'default';

        // Get deployer deployment
        let deployment: TContract | undefined;
        try {
            deployment = this.hre.SDK.db.getGlobalDeployment(
                project,
                String(this.hre.network.config.chainId),
                'Multicall3',
                _tag,
                this.hre.SDK.db.SUBREPO_GLOBAL_DB_PATH,
            );
            if (deployment) {
                console.log('[+] Previous Multicall3 deployment exists.');
                const _multicall = Multicall3__factory.connect(
                    deployment.address,
                    (await this.hre.ethers.getSigners())[0],
                );
                this.multicall = _multicall;
            }
        } catch (e) {
            if (this.options.debugMode) {
                console.log(
                    `[-] Failed retrieving Multicall3 deployment with error: ${e}`,
                );
            }
        }

        // Deploy Multicall3 if not deployed
        if (!deployment) {
            // Deploy Multicall3
            console.log('[+] Deploying Multicall3');

            const multicall = await new Multicall3__factory(
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
            console.log('[+] Deployed');

            // Save deployment
            console.log('[+] Saving Multicall3 deployment');
            const dep = this.hre.SDK.db.buildLocalDeployment({
                chainId: String(this.hre.network.config.chainId),
                contracts: [
                    {
                        name: 'Multicall3',
                        address: multicall.address,
                        meta: {},
                    },
                ],
            });
            this.hre.SDK.db.saveGlobally(dep, project, _tag);
            console.log('[+] Saved');

            const _multicall = Multicall3__factory.connect(
                multicall.address,
                (await this.hre.ethers.getSigners())[0],
            );
            this.multicall = _multicall;
            return _multicall;
        }

        // Return Multicall
        return Multicall3__factory.connect(
            deployment.address,
            (await this.hre.ethers.getSigners())[0],
        );
    };

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
            deployment = this.hre.SDK.db.getGlobalDeployment(
                project,
                String(this.hre.network.config.chainId),
                'MultisigMock',
                _tag,
                this.hre.SDK.db.SUBREPO_GLOBAL_DB_PATH,
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

        // Deploy Multicall3 if not deployed
        if (!deployment) {
            // Deploy Multicall3
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
    ): Promise<Multicall3.CallStruct[][]> {
        console.log('[+] Populating build queue');
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
        const calls: Multicall3.CallStruct[][] = [[]];
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
                contract.dependsOn?.forEach((dependency) => {
                    // Find the dependency
                    const deps = this.buildQueue.find(
                        (e) => e.deploymentName === dependency.deploymentName,
                    );
                    // Throw if not found
                    if (!deps) {
                        const dependencyAddress =
                            contract.args[dependency.argPosition];
                        if (
                            !dependencyAddress ||
                            dependencyAddress ==
                                this.hre.ethers.constants.AddressZero
                        ) {
                            throw new Error(
                                `[-] Dependency ${dependency.deploymentName} not found for ${contract.deploymentName}}`,
                            );
                        } else {
                            console.log(
                                `Dependency already provided: ${
                                    contract.args[dependency.argPosition]
                                }`,
                            );
                        }
                    } else {
                        // Set the dependency address in the contract args
                        contract.args[dependency.argPosition] =
                            deps.deterministicAddress;
                    }
                });

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

    /**
     * Used to check for reverts
     */
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

    private async getTapiocaDeployer(): Promise<TapiocaDeployer> {
        if (this.tapiocaDeployer) return this.tapiocaDeployer;

        // Get deployer deployment
        let deployment: TContract | undefined;
        try {
            deployment = this.hre.SDK.db.getLocalDeployment(
                String(this.hre.network.config.chainId),
                'TapiocaDeployer',
                this.options.tag,
            );
        } catch (e) {
            if (this.options.debugMode) {
                console.log(`[-] Failed with error: ${e}`);
            }
        }

        // Deploy TapiocaDeployer if not deployed
        if (!deployment) {
            // Deploy TapiocaDeployer

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
                contracts: [
                    {
                        name: 'TapiocaDeployer',
                        address: tapiocaDeployer.address,
                        meta: {},
                    },
                ],
            });
            this.hre.SDK.db.saveLocally(dep, this.options.tag);

            this.tapiocaDeployer = tapiocaDeployer;
            return tapiocaDeployer;
        }

        // Return TapiocaDeployer
        return TapiocaDeployer__factory.connect(
            deployment.address,
            (await this.hre.ethers.getSigners())[0],
        );
    }

    private genSalt() {
        return this.hre.ethers.utils.solidityKeccak256(['string'], [uuidv4()]);
    }
}

import { Contract } from 'ethers';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import inquirer from 'inquirer';
import { EChainID } from '../../api/config';
import { getSupportedChains } from '../../api/utils';
import { TContract, TLocalDeployment, TProjectCaller } from '../../shared';
import { TapiocaWrapper } from '../../typechain/TapiocaZ';
import { Multicall3 } from '../../typechain/utils/MultiCall';
import SUPPORTED_CHAINS from '../../SUPPORTED_CHAINS';

/**
 * Get a local contract
 *
 * @param hre Hardhat runtime environment
 * @param contractName Name of the contract to get
 * @param tag Tag of the contract to get, defaults to 'default'
 * @returns The ethers contract
 */
export const getLocalContract = async <T extends Contract>(
    hre: HardhatRuntimeEnvironment,
    contractName: string,
    tag?: string,
) => {
    const chainId = String(hre.network.config.chainId);
    const deployment = hre.SDK.db.getLocalDeployment(
        chainId,
        contractName,
        tag,
    );
    if (!deployment) {
        const availContract = hre.SDK.utils.getContractNamesForChain(
            chainId,
            hre.userConfig.SDK.project,
            { tag, type: 'local' },
        );
        throw new Error(
            `[-] SDK: Contract ${contractName} not found, available contracts: ${availContract}`,
        );
    }
    const contract = (await hre.ethers.getContractAt(
        deployment.name,
        deployment.address,
    )) as T;
    return { contract, deployment };
};

export const transformMulticallToTapiocaWrapper = (
    multicalls: Multicall3.Call3Struct[],
): TapiocaWrapper.ExecutionCallStruct[] => {
    return multicalls.map((m) => ({
        toft: m.target,
        bytecode: m.callData,
        revertOnFailure: m.allowFailure,
    }));
};

/**
 * Ask for a tag, if there is no tag, return undefined
 * @param hre Hardhat runtime environment
 * @param type Type of tag to ask for, local or global
 * @returns The tag or undefined
 */
export const askForTag = async (
    hre: HardhatRuntimeEnvironment,
    type: 'local' | 'global',
) => {
    const tags = Object.keys(
        (hre.SDK.db.readDeployment(type, {}) as TLocalDeployment) ?? {},
    );
    if (tags.length === 0) {
        return 'default';
    }
    const { tag } = await inquirer.prompt({
        type: 'list',
        name: 'tag',
        message: `Which ${type} tag to use?`,
        choices: [...tags, 'new'],
    });
    if (tag === 'new') {
        const { newTag } = await inquirer.prompt({
            type: 'input',
            name: 'newTag',
            message: 'Name of the new tag',
        });
        return newTag as string;
    }

    return tag as string;
};

/**
 * Ask for a project
 * @param hre Hardhat runtime environment
 * @returns The project
 */
export const askForProject = async (hre: HardhatRuntimeEnvironment) => {
    const choices = hre.SDK.config.TAPIOCA_PROJECTS;

    const { project } = await inquirer.prompt({
        type: 'list',
        name: 'project',
        message: 'Choose a project',
        choices,
    });
    return project as TProjectCaller;
};

/**
 * Ask for one or many deployment. Choose between local and global, and then ask for a project and a tag.
 * @param hre Hardhat runtime environment
 * @returns The project
 */
export const askForDeployment = async (
    hre: HardhatRuntimeEnvironment,
    type: 'local' | 'global',
    options?: {
        messageAll?: string;
        messageSpecific?: string;
    },
) => {
    const tag = await askForTag(hre, type);
    const project = await askForProject(hre);
    const { specific } = await inquirer.prompt({
        type: 'list',
        name: 'specific',
        message:
            options?.messageAll ?? 'Choose a specific contract deployment?',
        choices: ['All', 'Specific'],
    });

    const deployments = hre.SDK.db.readDeployment(type, {
        project,
        tag,
        chainId: String(hre.network.config.chainId),
    }) as TContract[];

    if (specific === 'Specific') {
        const choices = deployments.map((e) => e.name);

        const { contractName } = await inquirer.prompt({
            type: 'list',
            name: 'contractName',
            message: options?.messageSpecific ?? 'Choose a contract',
            choices,
        });

        return {
            deployments: [
                deployments.find((e) => e.name === contractName) as TContract,
            ],
            project,
            tag,
        };
    }

    return { deployments, project, tag };
};

/**
 * Ask for a chain
 * @returns The chain
 */
export const askForChain = async (message?: string) => {
    const supportedChains = getSupportedChains();
    const choices = supportedChains.map((e) => e.name);

    const { chain } = await inquirer.prompt({
        type: 'list',
        name: 'chain',
        message: message ?? 'Choose a chain',
        choices,
    });

    return supportedChains.find((e) => e.name === chain);
};

export const useNetwork = async (
    hre: HardhatRuntimeEnvironment,
    network: (typeof SUPPORTED_CHAINS)[number]['name'],
) => {
    const pk = process.env.PRIVATE_KEY;
    if (pk === undefined) throw new Error('[-] PRIVATE_KEY env var not set');
    const info = hre.config.networks?.[network];
    if (!info)
        throw new Error(`[-] Hardhat network config not found for ${network} `);

    const chain = hre.SDK.utils.getChainBy('name', network)!;
    const provider = new hre.ethers.providers.JsonRpcProvider(
        { url: chain.rpc.replace('<api_key>', process.env.ALCHEMY_API_KEY!) },
        { chainId: Number(chain.chainId), name: `rpc-${info.chainId}` },
    );

    return new hre.ethers.Wallet(pk, provider);
};

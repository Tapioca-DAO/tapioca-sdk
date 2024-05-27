import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { EChainID, TAPIOCA_PROJECTS_NAME } from '../api/config';
import { TContract } from '../shared';
import SUPPORTED_CHAINS from '../SUPPORTED_CHAINS';
import { ContractFactory } from 'ethers';
import { IDeployerVMAdd } from './hardhat/DeployerVM';

export function loadGlobalContract(
    hre: HardhatRuntimeEnvironment,
    repo: TAPIOCA_PROJECTS_NAME,
    chainId: EChainID,
    contractName: string,
    tag: string,
) {
    return checkExists(
        hre,
        hre.SDK.db.findGlobalDeployment(repo, chainId, contractName, tag),
        contractName,
        repo,
    );
}

export function loadLocalContract(
    hre: HardhatRuntimeEnvironment,
    chainId: EChainID,
    contractName: string,
    tag: string,
) {
    return checkExists(
        hre,
        hre.SDK.db.findLocalDeployment(chainId, contractName, tag),
        contractName,
        hre.SDK.chainInfo.name,
    );
}

export type TContractWithChainInfo = {
    deployment: TContract;
    chainInfo: (typeof SUPPORTED_CHAINS)[number];
};
export function loadLocalContractOnAllChains(
    hre: HardhatRuntimeEnvironment,
    contractName: string,
    tag: string,
    isTestnet: boolean,
): TContractWithChainInfo[] {
    const deployments: TContractWithChainInfo[] = [];
    // Get chains that are testnet or not
    const chains = SUPPORTED_CHAINS.filter((e) =>
        isTestnet
            ? !!e.tags.find((o) => o === 'testnet')
            : !e.tags.find((o) => o === 'testnet'),
    );

    for (const chainInfo of chains) {
        // Will throw if deployment not found on a chainId
        try {
            const deployment = hre.SDK.db.findLocalDeployment(
                chainInfo.chainId,
                contractName,
                tag,
            );
            if (deployment) {
                deployments.push({ deployment, chainInfo });
            }
        } catch (e) {}
    }
    return deployments;
}

export function isOnChain(
    hre: HardhatRuntimeEnvironment,
    chainId: EChainID,
): boolean {
    return hre.SDK.chainInfo.chainId === chainId;
}

export function checkExists<T>(
    hre: HardhatRuntimeEnvironment,
    value: T | undefined,
    name: string,
    repo: string,
): T {
    if (value === undefined) {
        throw new Error(
            `[-] No \`${name}\` found on \`${repo}\` for chain \`${hre.SDK.chainInfo.name}\``,
        );
    }
    return value;
}

export function getChainInfo(hre: HardhatRuntimeEnvironment) {
    return hre.SDK.utils.getChainBy('chainId', hre.SDK.eChainId);
}

type TFactory<T> = ContractFactory & T;
export const buildContractDep = <T>(
    params: IDeployerVMAdd<TFactory<T>>,
): IDeployerVMAdd<TFactory<T>> => {
    return params;
};

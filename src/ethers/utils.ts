import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { EChainID, TAPIOCA_PROJECTS_NAME } from '../api/config';
import { TContract } from '../shared';
import SUPPORTED_CHAINS from '../SUPPORTED_CHAINS';

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

export function loadLocalContractOnAllChains(
    hre: HardhatRuntimeEnvironment,
    contractName: string,
    tag: string,
    isTestnet: boolean,
): (TContract & { chainId: string })[] {
    const deployments: (TContract & { chainId: string })[] = [];
    // Get chains that are testnet or not
    const chainsIds = SUPPORTED_CHAINS.filter((e) =>
        isTestnet
            ? !!e.tags.find((o) => o === 'testnet')
            : !e.tags.find((o) => o === 'testnet'),
    ).map((e) => e.chainId);

    for (const chainId of chainsIds) {
        const deployment = hre.SDK.db.findLocalDeployment(
            chainId,
            contractName,
            tag,
        );
        if (deployment) {
            deployments.push({ ...deployment, chainId });
        }
    }
    return deployments;
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

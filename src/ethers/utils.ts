import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { EChainID, TAPIOCA_PROJECTS_NAME } from '../api/config';

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

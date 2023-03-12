import { Contract } from 'ethers';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

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
    const deployment = hre.SDK.db.getLocalDeployment(
        String(hre.network.config.chainId),
        contractName,
        tag,
    );
    const contract = (await hre.ethers.getContractAt(
        deployment.name,
        deployment.address,
    )) as T;
    return { contract, deployment };
};

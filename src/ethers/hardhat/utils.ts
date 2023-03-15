import { Contract } from 'ethers';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { TapiocaWrapper } from '../../typechain';
import { TapiocaWrapperInterface } from '../../typechain/TapiocaZ/TapiocaWrapper';
import { Multicall3 } from '../../typechain/utils/MultiCall';

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
    if (!deployment) {
        throw new Error(`[-] SDK: Contract ${contractName} not found`);
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

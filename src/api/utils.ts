import { ethers } from 'ethers';
import _find from 'lodash/find';
import { TContract, TLocalDeployment, TProjectCaller } from '../shared';
import SUPPORTED_CHAINS from '../SUPPORTED_CHAINS';
import { TapiocaOFT__factory } from '../typechain/tapiocaz';
import {
    EChainID,
    NETWORK_MAPPING_CHAIN_TO_LZ,
    PACKET_TYPES,
    TAPIOCA_PROJECTS,
    MAX_GAS_LIMITS,
} from './config';
import * as db from './db';

/**
 * A representation of an OFT contract
 */
export interface IOFTItem {
    address: string;
    chain: string;
    lzChain: string;
}

/**
 * Returns a list of supported LZ chain IDs
 **/
export const getLZChainIDs = () => SUPPORTED_CHAINS.map((e) => e.lzChainId);
/**
 * Returns a list of supported EVM chain IDs
 **/
export const getChainIDs = () => SUPPORTED_CHAINS.map((e) => e.chainId);

export type TGET_CHAIN_BY_FILTER = 'chainId' | 'lzChainId' | 'name';
/**
 * Returns a chain info for a given `chainId` or `lzChainId` or `name`.
 * @param getBy - The filter to use.
 * @param value - The value to filter by.
 **/
export const getChainBy = (
    getBy: TGET_CHAIN_BY_FILTER,
    value: keyof typeof SUPPORTED_CHAINS | string,
) => {
    return _find(SUPPORTED_CHAINS, (e) => e[getBy] === String(value));
};

/**
 * Returns the object containing the chain info.
 **/
export const getSupportedChains = () => SUPPORTED_CHAINS;

/**
 *
 * Returns A list of Tapioca projects
 */
export const getTapiocaProjects = () => TAPIOCA_PROJECTS;

/*
 ******************
 * Deployment
 ******************
 */

export const getOverrideOptions = (chainId: string) => {
    return {
        gasLimit: MAX_GAS_LIMITS[chainId] ?? undefined,
    };
};

/**
 * Returns a list of contract names
 * @param chainId The chain ID
 * @param project The project name
 * @param options The options
 * @param options.tag The tag to use
 * @param options.type The type of deployment to use
 */
export const getContractNamesForChain = (
    chainId: string,
    project: TProjectCaller,
    options: { tag?: string; type: 'local' | 'global' },
) => {
    const deployments =
        (db.readDeployment(options.type, {
            tag: options.tag,
            chainId,
            project,
        }) as TContract[]) ?? [];
    return deployments.map((e) => e.name);
};

/**
 * Filters deployments by a specific name and returns tasks' information
 **/
export const filterDeploymentsByVal = (
    deployments: TLocalDeployment,
    val: string,
) => {
    const result: IOFTItem[] = [];

    Object.values(deployments).forEach((contracts, index) => {
        const item = contracts.find(
            (a) => a.name.toLowerCase() == val.toLowerCase(),
        );
        if (item !== undefined) {
            const chain = Object.keys(deployments)[index] as EChainID;
            result.push({
                address: item.address,
                lzChain: NETWORK_MAPPING_CHAIN_TO_LZ[chain],
                chain: chain,
            });
        }
    });

    return result;
};

/**
 * Returns a list of OFTs together with their possible configurations
 * @param deployments The project deployments
 * @param startsWith Filter for deployment name
 * @param oftFactory __factory type of the contract for ABI retrieval
 **/
export const getTapiocaOFTEntities = (
    deployments: TLocalDeployment,
    startsWith: string,
    oftFactory: TapiocaOFT__factory,
) => {
    const [firstDeployment] = Object.values(deployments);
    const tOftEntries = firstDeployment.filter((item) =>
        item.name.startsWith(startsWith),
    );

    const tOfts: IOFTItem[][] = [];
    tOftEntries.forEach((tOftEntry) => {
        const toftArray: IOFTItem[] = filterDeploymentsByVal(
            deployments,
            tOftEntry.name,
        );
        tOfts.push(toftArray);
    });

    const items = [];
    for (let i = 0; i < tOfts.length; i++) {
        const toftArray = tOfts[i];

        for (let j = 0; j < toftArray.length; j++) {
            for (let k = 0; k < toftArray.length; k++) {
                if (j == k) continue;

                const trustedRemotePath = ethers.utils.solidityPack(
                    ['address', 'address'],
                    [toftArray[k].address, toftArray[j].address],
                );
                const trustedRemoteTx = oftFactory.interface.encodeFunctionData(
                    'setTrustedRemote',
                    [toftArray[k].lzChain, trustedRemotePath],
                );
                const customAdaptersTx =
                    oftFactory.interface.encodeFunctionData(
                        'setUseCustomAdapterParams',
                        [true],
                    );

                const packetTypesTxs = [];
                for (
                    let packetIndex = 0;
                    packetIndex < PACKET_TYPES.length;
                    packetIndex++
                ) {
                    const minDstTx = oftFactory.interface.encodeFunctionData(
                        'setMinDstGas',
                        [
                            toftArray[k].lzChain,
                            PACKET_TYPES[packetIndex],
                            200000,
                        ],
                    );
                    packetTypesTxs.push(minDstTx);
                }

                items.push({
                    trustedRemotePath: trustedRemotePath,
                    trustedRemoteTx: trustedRemoteTx,
                    customAdaptersTx: customAdaptersTx,
                    packetTypesTxs: packetTypesTxs,
                    srChain: toftArray[j].chain,
                    dstChain: toftArray[k].chain,
                    srcLzChain: toftArray[j].lzChain,
                    dstLzChain: toftArray[k].lzChain,
                    srcAddress: toftArray[j].address,
                    dstAddress: toftArray[k].address,
                });
            }
        }
    }
    return items;
};

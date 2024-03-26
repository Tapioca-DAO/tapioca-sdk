import { ethers } from 'ethers';
import _find from 'lodash/find';
import { TContract, TLocalDeployment, TProjectCaller } from '../shared';
import SUPPORTED_CHAINS from '../SUPPORTED_CHAINS';
import { TapiocaOFT__factory } from '../typechain/tapiocaz';
import {
    EChainID,
    NETWORK_MAPPING_CHAIN_TO_LZ,
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
    const chain = _find(SUPPORTED_CHAINS, (e) => e[getBy] === String(value));
    if (!chain) throw new Error(`[-] Chain not found for ${String(value)}`);
    return chain;
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

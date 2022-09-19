import fs from 'fs';
import _find from 'lodash/find';
import _merge from 'lodash/merge';
import SUPPORTED_CHAINS from '../SUPPORTED_CHAINS';
import { TProjectDeployment } from './exportSDK';

/**
 * Returns a list of supported LZ chain IDs
 **/
export const getLZChainIDs = () => SUPPORTED_CHAINS.map((e) => e.lzChainId);
/**
 * Returns a list of supported EVM chain IDs
 **/
export const getChainIDs = () => SUPPORTED_CHAINS.map((e) => e.chainId);

/**
 * Returns a chain info for a given `chainId` or `lzChainId` or `name`.
 * @param getBy - The filter to use.
 * @param value - The value to filter by.
 **/
export const getChainBy = (
    getBy: 'chainId' | 'lzChainId' | 'name',
    value: keyof typeof SUPPORTED_CHAINS | string,
) => {
    return _find(SUPPORTED_CHAINS, (e) => e[getBy] === value);
};

/**
 * Returns the object containing the chain info.
 **/
export const getSupportedChains = () => SUPPORTED_CHAINS;

/**
 * Relative to the Hardhat project root
 */
export const PROJECT_RELATIVE_DEPLOYMENT_PATH = './deployments.json';

export const saveDeploymentOnDisk = async (data: TProjectDeployment) => {
    // Read previous deployments
    let __deployments: TProjectDeployment | undefined;
    try {
        if (fs.existsSync(PROJECT_RELATIVE_DEPLOYMENT_PATH)) {
            __deployments = JSON.parse(
                fs.readFileSync(PROJECT_RELATIVE_DEPLOYMENT_PATH, 'utf-8'),
            );
        }
    } catch (e) {
        console.log(
            `[-] Can not read ${PROJECT_RELATIVE_DEPLOYMENT_PATH}, creating a new one.`,
        );
    }

    // If no deployment, create a new one for this project
    if (!__deployments) __deployments = {} as TProjectDeployment;

    // Merge prev and new deployments
    const deployments: TProjectDeployment = _merge(__deployments, data);
    return deployments;
};

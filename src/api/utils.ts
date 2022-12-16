import fs from 'fs';
import _find from 'lodash/find';
import _merge from 'lodash/merge';
import _mergeWith from 'lodash/mergeWith';
import _isArray from 'lodash/isArray';
import _unionBy from 'lodash/unionBy';
import {
    DEPLOYMENT_SDK_PATH,
    TContract,
    TProjectCaller,
    TProjectDeployment,
} from '../shared';
import SUPPORTED_CHAINS from '../SUPPORTED_CHAINS';

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

/**
 * Save a deployment on the Hardhat project root
 */
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
    else {
        // Save previous deployments in a backup file
        fs.writeFileSync(
            `${PROJECT_RELATIVE_DEPLOYMENT_PATH}.bak`,
            JSON.stringify(__deployments),
        );
    }

    // Merge prev and new deployments
    const deployments: TProjectDeployment = _mergeWith(
        __deployments,
        data,
        (a: any, b: any) => {
            if (_isArray(a)) {
                return _unionBy(a, b, (item: TContract) => item.address);
            }
            return _merge(a, b);
        },
    );
    fs.writeFileSync(
        PROJECT_RELATIVE_DEPLOYMENT_PATH,
        JSON.stringify(deployments),
    );
    return deployments;
};

/**
 * Returns the contract deployments of a project given a [chainId].
 * @param projectCaller The project caller
 * @param chainId The chain ID
 **/
export const getDeployment = (project: TProjectCaller, chainId: string) => {
    const deployments = JSON.parse(
        fs.readFileSync(DEPLOYMENT_SDK_PATH, 'utf-8'),
    );
    return deployments[project][chainId];
};

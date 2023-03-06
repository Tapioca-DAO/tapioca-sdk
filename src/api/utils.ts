import fs from 'fs';
import _find from 'lodash/find';
import _merge from 'lodash/merge';
import _mergeWith from 'lodash/mergeWith';
import _isArray from 'lodash/isArray';
import _unionBy from 'lodash/unionBy';
import {
    DEPLOYMENT_SDK_PATH,
    TContract,
    TDeployment,
    TProjectCaller,
    TProjectDeployment,
} from '../shared';
import SUPPORTED_CHAINS from '../SUPPORTED_CHAINS';
import { ethers } from 'ethers';

export interface IOftItem {
    address: string;
    chain: string;
    lzChain: string;
}

export interface INetworkMapping {
    [key: string]: string;
}

/**
 * Returns a mapping between chain id and LZ chain id
 **/
export const networkMapping: INetworkMapping = {
    '43113': '10106',
    '80001': '10109',
    '421613': '10143',
    '0xfa2': '10112',
    '4002': '10112',
};

/**
 * Returns a list of all available OFTs packet types Tapioca uses
 **/
export const packetTypes = [0, 1, 2, 770, 771, 772, 773];


/**
 * Filters deployments by a specific name and returns tasks' information
 **/
export const filterDeploymentsByVal = (
    deployments: TProjectDeployment,
    val: string,
) => {
    const result: IOftItem[] = [];

    Object.values(deployments).forEach((contracts, index) => {
        const item = contracts.find(
            (a) => a.name.toLowerCase() == val.toLowerCase(),
        );
        if (item !== undefined) {
            const chain: string = Object.keys(deployments)[index];
            result.push({
                address: item.address,
                lzChain: networkMapping[chain],
                chain: chain,
            });
        }
    });

    return result;
};

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
 * Reads deployments from disk
 */
export const readDeployments = () => {
    const __deployments: TProjectDeployment = JSON.parse(
        fs.readFileSync(PROJECT_RELATIVE_DEPLOYMENT_PATH, 'utf-8'),
    );
    return __deployments;
};

/**
 * Save a deployment on the Hardhat project root
 */
export const saveDeploymentOnDisk = (data: TProjectDeployment) => {
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
            JSON.stringify(__deployments, null, 4),
        );
    }

    // Merge prev and new deployments
    const deployments: TProjectDeployment = _mergeWith(
        __deployments,
        data,
        (a: any, b: any) => {
            if (!a) a = [];
            if (!b) b = [];

            if (_isArray(a)) {
                return _unionBy(a, b, (item: TContract) => item.address);
            }
            return _merge(a, b);
        },
    );
    fs.writeFileSync(
        PROJECT_RELATIVE_DEPLOYMENT_PATH,
        JSON.stringify(deployments, null, 4),
    );
    return deployments;
};

/**
 * Returns the contract deployments of a project given a [chainId].
 * @param projectCaller The project caller
 * @param chainId The chain ID
 **/
export const readSDKDeployments = (
    project: TProjectCaller,
    chainId: string,
) => {
    const deployments = JSON.parse(
        fs.readFileSync(DEPLOYMENT_SDK_PATH, 'utf-8'),
    );
    return (deployments as TDeployment)[project]?.[chainId];
};

/**
 * Returns the contract deployments of a project given a [chainId] and [project].
 * @param projectCaller The project caller
 * @param chainId The chain ID
 * @param local If true, read the local deployments file, if not read the SDK deployments file
 * @returns The contract deployments
 **/
export const getDeployments = (
    project: TProjectCaller,
    chainId: string,
    local: boolean,
) => {
    if (local) {
        return JSON.parse(
            fs.readFileSync(PROJECT_RELATIVE_DEPLOYMENT_PATH, 'utf8'),
        )[chainId] as TContract[];
    }
    return readSDKDeployments(project, chainId);
};

/**
 * Returns the contract deployment of a project given a [chainId] and a [contractName].
 * @param projectCaller The project caller
 * @param contractName The contract name
 * @param chainId The chain ID
 * @throws Error if contract not found
 * @returns The contract deployment
 **/
export const getDeployment = (
    project: TProjectCaller,
    contractName: string,
    chainId: string,
) => {
    let deployments: TContract[] = [];
    let deployment: TContract | undefined;
    try {
        deployments = getDeployments(project, chainId, true) ?? [];
        deployment = _find(deployments, { name: contractName });
        if (!deployment)
            throw new Error('No local deployments found, trying SDK...');
    } catch (e) {
        deployments = getDeployments(project, chainId, false) ?? [];
        deployment = _find(deployments, { name: contractName });
    }

    if (!deployment) {
        throw new Error('[-] Contract not found');
    }

    return deployment;
};

/**
 * Returns a list of OFTs together with their possible configurations
 * @param deployments The project deployments
 * @param startsWith Filter for deploment name
 * @param oftFactory __factory type of the contract for ABI retrieval
 **/
export const getTapiocaOftEnties = (
    deployments: TProjectDeployment,
    startsWith: string,
    oftFactory: any,
) => {
    const [firstDeployment] = Object.values(deployments);
    const tOftEntries = firstDeployment.filter((item) =>
        item.name.startsWith(startsWith),
    );

    const tOfts: IOftItem[][] = [];
    tOftEntries.forEach((tOftEntry) => {
        const toftArray: IOftItem[] = filterDeploymentsByVal(
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
                    packetIndex < packetTypes.length;
                    packetIndex++
                ) {
                    const minDstTx = oftFactory.interface.encodeFunctionData(
                        'setMinDstGas',
                        [
                            toftArray[k].lzChain,
                            packetTypes[packetIndex],
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

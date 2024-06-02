import deepmerge from 'deepmerge';
import FS from 'fs';
import _find from 'lodash/find';
import _unionBy from 'lodash/unionBy';
import {
    TChainIdDeployment,
    TContract,
    TGlobalDatabase,
    TGlobalDeployment,
    TLocalDatabase,
    TLocalDeployment,
    TProjectCaller,
} from '../shared';
import { getChainBy } from './utils';

// TODO - Add a way to overwrite previous deps when merging to not shuffle the order (to not scramble Git diffs)
/*
 ******************
 * CONSTANTS
 ******************
 */

// In the repo node module
// directory location should be root of the repo
export const GLOBAL_DB_PATH = './gitmodule/tapioca-sdk/src/global.db.json';

// Relative to the Hardhat project root
export const LOCAL_DB_PATH = './local.db.json';

/*
 ******************
 * READ OPERATIONS
 ******************
 */

/**
 * Read a deployment from the local database
 *
 * @param tag The tag to read the database under
 * @param chainId The chain ID to read the database under
 * @returns List of deployed contracts
 */
export const loadLocalDeployment = (tag: string, chainId: string) => {
    return readDeployment('local', { tag, chainId }) as
        | TChainIdDeployment
        | undefined;
};

/**
 * Read a deployment from the local database
 *
 * @param tag The tag to read the database under
 * @param chainId The chain ID to read the database under
 * @returns List of deployed contracts
 */
export const loadGlobalDeployment = (
    tag: string,
    project: TProjectCaller,
    chainId: string,
) => {
    return readDeployment('global', {
        tag,
        chainId,
        project,
    }) as TChainIdDeployment | undefined;
};

/**
 * Find a deployed contract on the local database
 * @param tag The tag to read the database under
 * @param chainId The chain ID to read the database under
 * @returns The contract
 */
export const findLocalDeployment = (
    chainId: string,
    contractName: string,
    tag: string,
) => {
    let deployments: TChainIdDeployment | undefined;
    try {
        deployments = readDeployment('local', {
            tag,
            chainId,
        }) as TChainIdDeployment | undefined;
        if (!deployments) throw new Error();
    } catch (e) {
        const chainInfo = getChainBy('chainId', chainId);
        throw new Error(
            `[-] No deployment found for chain ${chainInfo.name} chain ID ${chainInfo.chainId}. Trying to load local deployment ${contractName} with tag ${tag}`,
        );
    }

    const contract = _find(deployments.contracts, { name: contractName }) as
        | TContract
        | undefined;

    return contract;
};

/**
 * Find a deployed contract on the global database
 * @param tag The tag to read the database under
 * @param chainId The chain ID to read the database under
 * @returns The contract
 */
export const findGlobalDeployment = (
    project: TProjectCaller,
    chainId: string,
    contractName: string,
    tag: string,
) => {
    const deployments = readDeployment('global', {
        tag,
        project,
        chainId,
    }) as TChainIdDeployment | undefined;
    if (!deployments)
        throw new Error(
            `[-] Can not load global deployment ${contractName} with tag ${tag} and chainId ${chainId} for project ${project}`,
        );

    const contract = _find(deployments.contracts, { name: contractName }) as
        | TContract
        | undefined;

    return contract;
};
/*
 ******************
 * WRITE OPERATIONS
 ******************
 */

/**
 * Save a deployment on the Hardhat project root
 * @param data The deployment to save
 * @param tag The tag to save the deployment under
 */
export const saveLocally = (data: TLocalDeployment, tag: string) => {
    const db = readDB('local') ?? {};
    const prevDep = db[tag] || data; // Read previous deployments

    // Merge prev and new deployments
    const deployments = mergeDeployments(prevDep, data);

    const deploymentToSave = { ...db, [tag]: deployments };

    // Save the new deployment
    writeDB('local', sortJson(deploymentToSave), LOCAL_DB_PATH);
    return deployments;
};

export const saveBuildLocally = (
    options: {
        chainId: string;
        chainIdName: string;
        lastBlockHeight: number;
        contracts: TContract[];
    },
    tag: string,
) => {
    const data = buildLocalDeployment(options);
    const db = readDB('local') ?? {};
    const prevDep = db[tag] || data; // Read previous deployments

    // Merge prev and new deployments
    const deployments = mergeDeployments(prevDep, data);

    const deploymentToSave = { ...db, [tag]: deployments };

    // Save the new deployment
    writeDB('local', sortJson(deploymentToSave), LOCAL_DB_PATH);
    return deployments;
};

export const saveGlobally = (
    data: TLocalDeployment,
    project: TProjectCaller,
    tag: string,
) => {
    const db = readDB('global') ?? {};
    const prevDep: any = db[tag]?.[project] || data; // Read previous deployments

    // Merge prev and new deployments
    const deployments = mergeDeployments(prevDep, data);

    // Save the new deployment
    db[tag] = sortJson({ ...db[tag], [project]: sortJson(deployments) });
    writeDB('global', sortJson(db), GLOBAL_DB_PATH);
    return deployments;
};

export const saveBuildGlobally = (
    options: {
        chainId: string;
        chainIdName: string;
        lastBlockHeight: number;
        contracts: TContract[];
    },
    project: TProjectCaller,
    tag: string,
) => {
    const data = buildLocalDeployment(options);
    const db = readDB('global') ?? {};
    const prevDep: any = db[tag]?.[project] || data; // Read previous deployments

    // Merge prev and new deployments
    const deployments = mergeDeployments(prevDep, data);

    // Save the new deployment
    db[tag] = sortJson({ ...db[tag], [project]: sortJson(deployments) });
    writeDB('global', sortJson(db), GLOBAL_DB_PATH);
    return deployments;
};

/*
 ******************
 * UTILS
 ******************
 */

/**
 * Helper to build a local deployment object.
 *
 * @param options The options to build the local deployment
 * @param options.chainId The chain ID to save the deployment under
 * @param options.chainIdName The name of the chain ID
 * @param options.lastBlockHeight The last block height used for a deployment
 * @param options.contracts The contracts to save
 * @returns The local deployment
 */
export const buildLocalDeployment = (options: {
    chainId: string;
    chainIdName: string;
    lastBlockHeight: number;
    contracts: TContract[];
}): TLocalDeployment => {
    const { chainId, contracts, chainIdName, lastBlockHeight } = options;
    return {
        [chainId]: {
            name: chainIdName,
            lastBlockHeight,
            contracts,
        },
    };
};

/**
 * Helper to build a global deployment object.
 *
 * @param options The options to build the global deployment
 * @param options.project The project to save the deployment under
 * @param options.chainId The chain ID to save the deployment under
 * @param options.chainIdName The name of the chain ID
 * @param options.lastBlockHeight The last block height used for a deployment
 * @param options.contracts The contracts to save
 */
export const buildGlobalDeployment = (options: {
    project: TProjectCaller;
    chainId: string;
    chainIdName: string;
    lastBlockHeight: number;
    contracts: TContract[];
}): TGlobalDeployment => {
    const { project, chainId, contracts, chainIdName, lastBlockHeight } =
        options;
    return {
        [project]: {
            [chainId]: {
                name: chainIdName,
                lastBlockHeight,
                contracts,
            },
        },
    };
};

/**
 * Helper to build a local database object
 *
 * @param options The options to build the local database
 * @param options.tag The tag to save the database under
 * @param options.chainId The chain ID to save the database under
 * @param options.chainIdName The name of the chain ID
 * @param options.lastBlockHeight The last block height used for a deployment
 * @param options.contracts The contracts to save
 * @returns The local database
 */
export function buildLocalDatabase(options: {
    tag?: string;
    data: TLocalDeployment;
}): TLocalDatabase {
    const { tag, data } = options;
    return {
        [tag ?? 'default']: data,
    };
}

/**
 * Helper to build a global database object
 *
 * @param options The options to build the global database
 * @param options.tag The tag to save the database under
 * @param options.project The project to save the database under
 * @param options.chainId The chain ID to save the database under
 * @param options.contracts The contracts to save
 * @returns The global database
 */
export function buildGlobalDatabase(options: {
    tag?: string;
    data: TGlobalDeployment;
}): TGlobalDatabase {
    const { tag, data } = options;
    return {
        [tag ?? 'default']: data,
    };
}

/**
 * Read the local or global deployment and return a specific format
 * If no tag is provided, the whole database is returned
 * If no chainId is provided, the whole tag is returned
 * If global & no project is provided, the whole tag is returned
 */
export function readDeployment(
    type: 'local' | 'global',
    options: {
        tag?: string;
        chainId?: string;
        project?: TProjectCaller;
    },
) {
    const { tag, chainId, project } = options;
    if (type === 'local') {
        if (!tag) return readDB(type);
        if (!chainId) return readDB(type)?.[tag];

        return readDB(type)?.[tag][chainId];
    }

    if (!tag) return readDB(type);
    if (!project) return readDB(type)?.[tag];
    if (!chainId) return readDB(type)?.[tag][project];

    return readDB(type)?.[tag][project]?.[chainId];
}
/**
 * Merge 2 deployments. Preserve old deployments, but override if the new a contract deployment is more recent.
 * Output is sorted.
 *
 * @param newest The newest deployment
 * @param old The old deployment
 * @returns The merged deployment
 */
function mergeDeployments(newest: TLocalDeployment, old: TLocalDeployment) {
    // Customize the merge by checking the nested value
    return sortJson(
        deepmerge(old, newest, {
            arrayMerge: (dstArr, srcArr) => {
                if (!!dstArr[0]?.['name'] && !!srcArr[0]?.['name']) {
                    return _unionBy(dstArr, srcArr, 'name').sort(
                        (e) => e['name'],
                    );
                }
                return srcArr;
            },
        }),
    );
}

/**
 * Read the local or global database in its raw JSON form
 * @param type The type of database to read
 * @returns The database
 */
function readDB<A extends 'local' | 'global'>(type: A) {
    const path = type === 'local' ? LOCAL_DB_PATH : GLOBAL_DB_PATH;

    try {
        return JSON.parse(FS.readFileSync(path, 'utf8')) as A extends 'local'
            ? TLocalDatabase
            : TGlobalDatabase;
    } catch (e) {
        return undefined;
    }
}

/**
 * Save the local or global database in its raw JSON form
 * @param type The type of database to save
 * @param data The data to save
 */
function writeDB<A extends 'local' | 'global'>(
    type: A,
    data: A extends 'local' ? TLocalDatabase : TGlobalDatabase,
    customPath?: string,
) {
    const path = type === 'local' ? LOCAL_DB_PATH : GLOBAL_DB_PATH;
    FS.writeFileSync(`${customPath ?? path}`, JSON.stringify(data, null, 4), {
        flag: 'w',
    });
}

// Remove the unused sortJson function

// Fix the type error by adding an index signature to the obj variable
function sortJson<T extends object>(target: T) {
    return Object.keys(target)
        .sort()
        .reduce((obj, key) => {
            obj[key as keyof T] = target[key as keyof T];
            return obj;
        }, {} as T);
}

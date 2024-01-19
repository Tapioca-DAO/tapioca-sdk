import FS from 'fs';
import _find from 'lodash/find';
import _isArray from 'lodash/isArray';
import _merge from 'lodash/merge';
import _mergeWith from 'lodash/mergeWith';
import _unionBy from 'lodash/unionBy';
import _sortBy from 'lodash/sortBy';
import {
    TChainIdDeployment,
    TContract,
    TGlobalDatabase,
    TGlobalDeployment,
    TLocalDatabase,
    TLocalDeployment,
    TProjectCaller,
} from '../shared';

// TODO - Add a way to overwrite previous deps when merging to not shuffle the order (to not scramble Git diffs)
/*
 ******************
 * CONSTANTS
 ******************
 */

// In the repo node module
// directory location should be root of the repo
export const GLOBAL_DB_PATH = './lib/tapioca-sdk/src/global.db.json';
export const SUBREPO_GLOBAL_DB_PATH = './gitsub_tapioca-sdk/src/global.db.json';

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
    return (readDeployment('local', { tag, chainId }) as TContract[]) ?? [];
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
    return (
        (readDeployment('global', {
            tag,
            chainId,
            project,
            customPath: SUBREPO_GLOBAL_DB_PATH,
        }) as TContract[]) ?? []
    );
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
    tag = 'default',
) => {
    const deployments = readDeployment('local', {
        tag,
        chainId,
    }) as TChainIdDeployment | undefined;
    if (!deployments)
        throw new Error(
            `[-] Can not load local deployment with tag ${tag} and chainId ${chainId}`,
        );

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
    tag = 'default',
    customPath?: string,
) => {
    const deployments = readDeployment('global', {
        tag,
        project,
        chainId,
        customPath,
    }) as TChainIdDeployment | undefined;
    if (!deployments)
        throw new Error(
            `[-] Can not load global deployment with tag ${tag} and chainId ${chainId} for project ${project}`,
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
export const saveLocally = (data: TLocalDeployment, tag = 'default') => {
    const db = readDB('local') ?? {};
    const prevDep = db[tag] || {}; // Read previous deployments

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
    tag = 'default',
) => {
    const db = readDB('global', SUBREPO_GLOBAL_DB_PATH) ?? {};
    const prevDep: any = db[tag]?.[project]; // Read previous deployments

    // Create the project if it doesn't exist
    if (!prevDep) {
        if (!db[tag]) db[tag] = {};
        if (!db[tag][project]) db[tag][project] = {};
    }

    // Merge prev and new deployments
    const deployments = mergeDeployments(prevDep, data);

    // Save the new deployment
    db[tag][project] = deployments;
    writeDB('global', db, SUBREPO_GLOBAL_DB_PATH);
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
        customPath?: string;
    },
) {
    const { tag, chainId, project } = options;
    if (type === 'local') {
        if (!tag) return readDB(type, options.customPath);
        if (!chainId) return readDB(type, options.customPath)?.[tag];

        return readDB(type, options.customPath)?.[tag][chainId];
    }

    if (!tag) return readDB(type, options.customPath);
    if (!project) return readDB(type, options.customPath)?.[tag];
    if (!chainId) return readDB(type, options.customPath)?.[tag][project];

    return readDB(type, options.customPath)?.[tag][project]?.[chainId];
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
        _mergeWith(old, newest, (_old: any, _new: any) => {
            // If the value is an array, merge it by the name. It's like a TContract[]
            if (_isArray(_old)) {
                return _sortBy(
                    _unionBy(_new, _old, (item: TContract) => item.name),
                    'name',
                );
            }
            // Otherwise, just override the old value
            return _merge(_old, _new);
        }),
    );
}

/**
 * Read the local or global database in its raw JSON form
 * @param type The type of database to read
 * @returns The database
 */
function readDB<A extends 'local' | 'global'>(type: A, customPath?: string) {
    let path = LOCAL_DB_PATH;
    path = type === 'local' ? LOCAL_DB_PATH : GLOBAL_DB_PATH;
    if (customPath) {
        path = customPath;
    }

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
    FS.writeFileSync(`${customPath ?? path}`, JSON.stringify(data, null, 4));
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

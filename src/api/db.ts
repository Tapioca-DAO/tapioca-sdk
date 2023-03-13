import FS from 'fs';
import _find from 'lodash/find';
import _isArray from 'lodash/isArray';
import _merge from 'lodash/merge';
import _mergeWith from 'lodash/mergeWith';
import _unionBy from 'lodash/unionBy';
import {
    TContract,
    TGlobalDatabase,
    TLocalDatabase,
    TLocalDeployment,
    TProjectCaller,
} from '../shared';

/*
 ******************
 * CONSTANTS
 ******************
 */

// In the repo node module
export const GLOBAL_DB_PATH = './node_modules/tapioca-sdk/src/global__db';

// Relative to the Hardhat project root
export const LOCAL_DB_PATH = './local__db';

/*
 ******************
 * READ OPERATIONS
 ******************
 */

/**
 * Get a deployed contract on the local database
 * @param tag The tag to read the database under
 * @param chainId The chain ID to read the database under
 * @returns The contract
 */
export const getLocalDeployment = (
    chainId: string,
    contractName: string,
    tag = 'default',
) => {
    const deployments =
        readDeployment('local', {
            tag,
            chainId,
        }) ?? ([] as TContract[]);

    const contract = _find(deployments, { name: contractName }) as
        | TContract
        | undefined;

    return contract;
};

/**
 * Get a deployed contract on the global database
 * @param tag The tag to read the database under
 * @param chainId The chain ID to read the database under
 * @returns The contract
 */
export const getGlobalDeployment = (
    project: TProjectCaller,
    chainId: string,
    contractName: string,
    tag = 'default',
) => {
    const deployments = readDeployment('global', { tag, project, chainId });
    const contract = _find(deployments, { name: contractName }) as
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

    // Save previous deployments in a backup file
    if (db[tag]) writeDB('local', db, `${LOCAL_DB_PATH}.bak`);

    // Merge prev and new deployments
    const deployments = mergeDeployments(data, prevDep);

    // Save the new deployment
    writeDB('local', { ...db, [tag]: deployments }, LOCAL_DB_PATH);
    return deployments;
};

export const saveGlobally = (
    data: TLocalDeployment,
    project: TProjectCaller,
    tag = 'default',
) => {
    const db = readDB('global') ?? {};
    const prevDep = db[tag]?.[project] || {}; // Read previous deployments

    // Save previous deployments in a backup file
    if (db[tag]?.[project]) writeDB('global', db, `${GLOBAL_DB_PATH}.bak`);

    // Merge prev and new deployments
    const deployments = mergeDeployments(data, prevDep);

    // Save the new deployment
    writeDB(
        'global',
        { ...db, [tag]: { ...db[tag], ...deployments } },
        GLOBAL_DB_PATH,
    );
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
 * @param options.contracts The contracts to save
 */
export const buildLocalDeployment = (options: {
    chainId: string;
    contracts: TContract[];
}) => {
    const { chainId, contracts } = options;
    return {
        [chainId]: contracts,
    };
};

/**
 * Helper to build a global deployment object.
 *
 * @param options The options to build the global deployment
 * @param options.project The project to save the deployment under
 * @param options.chainId The chain ID to save the deployment under
 * @param options.contracts The contracts to save
 */
export const buildGlobalDeployment = (options: {
    project: TProjectCaller;
    chainId: string;
    contracts: TContract[];
}) => {
    const { project, chainId, contracts } = options;
    return {
        [project]: {
            [chainId]: contracts,
        },
    };
};

/**
 * Helper to build a local database object
 *
 * @param options The options to build the local database
 * @param options.tag The tag to save the database under
 * @param options.chainId The chain ID to save the database under
 * @param options.contracts The contracts to save
 * @returns The local database
 */
export function buildLocalDatabase(options: {
    tag?: string;
    chainId: string;
    contracts: TContract[];
}): TLocalDatabase {
    const { tag, chainId, contracts } = options;
    return {
        [tag ?? 'default']: {
            [chainId]: contracts,
        },
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
    project: TProjectCaller;
    chainId: string;
    contracts: TContract[];
}): TGlobalDatabase {
    const { tag, project, chainId, contracts } = options;
    return {
        [tag ?? 'default']: {
            [project]: {
                [chainId]: contracts,
            },
        },
    };
}

/**
 * Read the local or global deployment and return a specific format
 */
export function readDeployment(
    type: 'local' | 'global',
    options: { tag?: string; chainId?: string; project?: TProjectCaller },
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
 * merge 2 deployments, handles arrays
 * @param newest The newest deployment
 * @param old The old deployment
 * @returns The merged deployment
 */
function mergeDeployments(newest: TLocalDeployment, old: TLocalDeployment) {
    return _mergeWith(old, newest, (a: any, b: any) => {
        if (!a) a = [];
        if (!b) b = [];

        if (_isArray(a)) {
            return _unionBy(a, b, (item: TContract) => item.address);
        }
        return _merge(a, b);
    });
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
    FS.writeFileSync(`${customPath ?? path}`, JSON.stringify(data, null, 4));
}

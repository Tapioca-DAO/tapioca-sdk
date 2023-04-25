import FS from 'fs';
import _find from 'lodash/find';
import _isArray from 'lodash/isArray';
import _merge from 'lodash/merge';
import _mergeWith from 'lodash/mergeWith';
import _unionBy from 'lodash/unionBy';
import {
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
export const GLOBAL_DB_PATH = './node_modules/tapioca-sdk/src/global__db';
export const SUBREPO_GLOBAL_DB_PATH = './gitsub_tapioca-sdk/src/global__db';

// Relative to the Hardhat project root
export const LOCAL_DB_PATH = './local__db';

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
    customPath?: string,
) => {
    const deployments = readDeployment('global', {
        tag,
        project,
        chainId,
        customPath,
    });
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
    const db = readDB('global', SUBREPO_GLOBAL_DB_PATH) ?? {};
    const prevDep: any = db[tag]?.[project] || { [tag]: {} }; // Read previous deployments

    // Save previous deployments in a backup file
    if (db[tag]?.[project])
        writeDB('global', db, `${SUBREPO_GLOBAL_DB_PATH}.bak`);

    // Merge prev and new deployments
    const deployments = mergeDeployments(data, prevDep);

    // Save the new deployment
    db[tag][project] = deployments;
    writeDB('global', db, SUBREPO_GLOBAL_DB_PATH);
    return deployments;
};

/**
 * Save a list of contracts to the local database
 *
 * @param contracts List of contracts to save
 * @param chainId The chain ID to save the contracts under
 * @param tag The tag to save the contracts under, defaults to 'default'
 */
export const saveContracts = (
    contracts: TContract[],
    chainId: string,
    tag = 'default',
) => {
    saveLocally({ [chainId]: contracts }, tag);
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
}): TLocalDeployment => {
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
}): TGlobalDeployment => {
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
 * merge 2 deployments, handles arrays
 * @param newest The newest deployment
 * @param old The old deployment
 * @returns The merged deployment
 */
function mergeDeployments(newest: TLocalDeployment, old: TLocalDeployment) {
    return _mergeWith(old, newest, (_old: any, _new: any) => {
        if (!_old) _old = [];
        if (!_new) _new = [];

        if (_isArray(_old)) {
            return _unionBy(_new, _old, (item: TContract) => item.name);
        }
        return _merge(_old, _new);
    });
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

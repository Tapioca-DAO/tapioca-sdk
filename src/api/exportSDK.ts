import fs from 'fs';
import { glob, runTypeChain } from 'typechain';
import writeJsonFile from 'write-json-file';
import _merge from 'lodash/merge';
import { getLZChainIDs, getSupportedChains } from './utils';

// Helper types
type HLP_TLZChain = ReturnType<typeof getLZChainIDs>[number];
type HLP_TChainName = ReturnType<typeof getSupportedChains>[number]['name'];

const ADDRESSES = 'tapioca-sdk/src/ADDRESSES.json';

export type TContract = { name: string; address: string; meta: any };
export type TProjectDeployment = {
    [chainID in HLP_TLZChain]: TContract[];
};
export type TDeployment = {
    [project in HLP_TChainName]: {
        [chainID in HLP_TLZChain]: TContract[];
    };
};
export type TProjectCaller = 'TapiocaZ' | 'Tap-Token' | 'Tapioca-Bar';

/**
 *
 * @param params {Object} - Params object
 * @param params.projectCaller {TProjectCaller} - The name of the project that is calling the script. Should be the Github repo name (e.g. 'TapiocaZ')
 * @param params.contractNames {string[]} - Contract to include in the typing generation. Used to exclude external contracts and interfaces (e.g UniV2)
 * @param params.artifactPath {string} - Path to the artifacts folder
 * @param params.__deployments {?TDeployment} - The deployments to merge with the previous deployments
 */
export const run = async (params: {
    projectCaller: TProjectCaller;
    contractNames: string[];
    artifactPath: string;
    _deployments?: TProjectDeployment;
}) => {
    const { projectCaller, contractNames, artifactPath, _deployments } = params;
    if (_deployments) {
        const deployments = await mergeDeployments(projectCaller, _deployments);
        // Write merged deployments to file
        await writeJsonFile(ADDRESSES, deployments);
    }
    await generateTypings(projectCaller, artifactPath, contractNames);
};

const mergeDeployments = async (
    projectCaller: TProjectCaller,
    project_deployments: TProjectDeployment,
) => {
    // Read previous deployments
    let __deployments: TDeployment | undefined;
    try {
        __deployments = JSON.parse(fs.readFileSync(ADDRESSES, 'utf-8'));
    } catch (e) {
        console.log(`[-] Error reading ${ADDRESSES}`);
    }

    // If no deployment, create a new one for this project
    if (!__deployments) __deployments = {} as TDeployment;

    // Merge prev and new deployments
    const deployments: TDeployment = _merge(__deployments, {
        [projectCaller]: project_deployments,
    });
    return deployments;
};

const _parseFiles = (
    basePath: string,
    directoryPath: string,
    fileNames: string[],
) => {
    return glob(basePath, [`${directoryPath}/**/!(*.dbg).json`]).filter((e) =>
        fileNames.some((v) => e.split('/').slice(-1)[0] === v.concat('.json')),
    );
};
const generateTypings = async (
    projectCaller: TProjectCaller,
    artifactPath: string,
    contractNames: string[],
) => {
    const cwd = process.cwd();

    const allFiles = _parseFiles(cwd, artifactPath, contractNames);

    await runTypeChain({
        cwd,
        filesToProcess: allFiles,
        allFiles,
        outDir: `tapioca-sdk/src/typechain/${projectCaller}`,
        target: 'ethers-v5',
        flags: {
            alwaysGenerateOverloads: true,
            environment: 'hardhat',
            discriminateTypes: true,
        },
    });
};

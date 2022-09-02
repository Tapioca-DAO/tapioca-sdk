import fs from 'fs';
import { glob, runTypeChain } from 'typechain';
import writeJsonFile from 'write-json-file';
import _merge from 'lodash/merge';

const ADDRESSES = 'tapioca-sdk/src/ADDRESSES.json';

export type TContract = { name: string; address: string };
export type TDeployment = {
    [chainID: string]: {
        [project: string]: TContract[];
    };
};
export type TProjectCaller = 'TapiocaZ' | 'Tap-Token' | 'Tapioca-Bar';

/**
 *
 * @param parmas {Object} - Params object
 * @param parmas.projectCaller {TProjectCaller} - The name of the project that is calling the script. Should be the Github repo name (e.g. 'TapiocaZ')
 * @param parmas.contractNames {string[]} - Contract to include in the typing generation. Used to exclude external contracts and interfaces (e.g UniV2)
 * @param parmas.artifactPath {string} - Path to the artifacts folder
 * @param parmas.__deployments {?TDeployment} - The deployments to merge with the previous deployments
 */
export const run = async (params: {
    projectCaller: TProjectCaller;
    contractNames: string[];
    artifactPath: string;
    _deployments?: TDeployment;
}) => {
    const { projectCaller, contractNames, artifactPath, _deployments } = params;
    if (_deployments) await mergeDeployments(_deployments);
    await generateTypings(projectCaller, artifactPath, contractNames);
};

const mergeDeployments = async (_deployments: TDeployment) => {
    // Read previous deployments
    const __deployments: TDeployment = { prev: {} };
    try {
        __deployments.prev = JSON.parse(fs.readFileSync(ADDRESSES, 'utf-8'));
    } catch (e) {
        console.log(`[-] Error reading ${ADDRESSES}`);
    }

    // Merge prev and new deployments
    const deployments: TDeployment = _merge(__deployments.prev, _deployments);

    // Write merged deployments to file
    await writeJsonFile(ADDRESSES, deployments);
};

const generateTypings = async (
    projectCaller: TProjectCaller,
    artifactPath: string,
    contractNames: string[],
) => {
    const cwd = process.cwd();

    const allFiles = glob(cwd, [`${artifactPath}/**/!(*.dbg).json`]).filter(
        (e) =>
            contractNames.some(
                (v) => e.split('/').slice(-1)[0] === v.concat('.json'),
            ),
    );

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

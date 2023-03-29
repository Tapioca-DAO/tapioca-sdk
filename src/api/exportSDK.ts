import { glob, runTypeChain } from 'typechain';
import { TLocalDeployment, TProjectCaller } from '../shared';
import { saveGlobally } from './db';

/**
 * Export project local database and merge it with the global database, then generate typings
 *
 * @param params {Object} - Params object
 * @param params.projectCaller {TProjectCaller} - The name of the project that is calling the script. Should be the Github repo name (e.g. 'TapiocaZ')
 * @param params.contractNames {string[]} - Contract to include in the typing generation. Used to exclude external contracts and interfaces (e.g UniV2)
 * @param params.artifactPath {string} - Path to the artifacts folder
 * @param params.__deployments {?TGlobalDeployment} - The deployments to merge with the previous deployments
 */
export const run = async (params: {
    projectCaller: TProjectCaller;
    contractNames: string[];
    artifactPath: string;
    deployment?: { data: TLocalDeployment; tag?: string };
}) => {
    const { projectCaller, contractNames, artifactPath, deployment } = params;

    if (deployment?.data) {
        saveGlobally(deployment.data, projectCaller, deployment.tag);
    }

    await generateTypings(projectCaller, artifactPath, contractNames);
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

    await Promise.all(
        allFiles.map(async (file) =>
            runTypeChain({
                cwd,
                allFiles,
                filesToProcess: [file],
                outDir: `gitsub_tapioca-sdk/src/typechain/${projectCaller}`,
                target: 'ethers-v5',
                flags: {
                    alwaysGenerateOverloads: true,
                    environment: 'hardhat',
                    discriminateTypes: true,
                },
            }),
        ),
    );
};

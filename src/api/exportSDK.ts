import fs from 'fs-extra';
import { glob, runTypeChain } from 'typechain';
import { TLocalDeployment, TProjectCaller } from '../shared';
import { saveGlobally } from './db';

const sdkRootPath = 'gitmodule/tapioca-sdk';
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
    artifactToExport?: string[];
    deployment?: {
        data: TLocalDeployment;
        tag?: string;
    };
}) => {
    const {
        projectCaller,
        contractNames,
        artifactPath,
        deployment,
        artifactToExport,
    } = params;
    const cwd = process.cwd();

    if (artifactToExport?.length) {
        const artifactFiles = _parseFiles(cwd, artifactPath, artifactToExport);
        console.log('[+] Exporting artifacts for tapioca-sdk...');

        artifactFiles.forEach((file) => {
            fs.copySync(
                file,
                `${sdkRootPath}/src/artifacts/${projectCaller}/${
                    file.split('/').slice(-1)[0]
                }`,
                { overwrite: true },
            );
        });
    }

    console.log(
        '[+] Exporting typechain & deployment files for tapioca-sdk...',
    );

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
                outDir: `${sdkRootPath}/tapioca-sdk/src/typechain/${projectCaller}`,
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

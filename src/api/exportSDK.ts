import fs from 'fs-extra';
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
export const run = (params: {
    projectCaller: TProjectCaller;
    contractNames: string[];
    artifactPath: string;
    deployment?: { data: TLocalDeployment; tag?: string };
}) => {
    const { projectCaller, deployment } = params;

    if (deployment?.data) {
        saveGlobally(deployment.data, projectCaller, deployment.tag);
        console.log('\t[+] Deployments saved to tapioca-sdk');
    }

    moveTypings(projectCaller);
    console.log('[+] exportSDK done');
};

function moveTypings(projectCaller: string) {
    try {
        fs.copySync(
            './typechain',
            `./gitsub_tapioca-sdk/src/typechain/${projectCaller}`,
        );
        console.log('\t[+] Typechain moved to tapioca-sdk');
    } catch (err) {
        console.error(err);
    }
}

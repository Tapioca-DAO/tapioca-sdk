import * as dotenv from 'dotenv';
import fs from 'fs';

// Hardhat
import { TASK_COMPILE_GET_REMAPPINGS } from 'hardhat/builtin-tasks/task-names';
import { extendEnvironment, subtask } from 'hardhat/config';
import * as typechain from './typechain';

// Tapioca
import { EChainID } from './api/config';
import API from './api/index';
import './ethers'; // Extends HRE environment

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace NodeJS {
        interface ProcessEnv {
            ALCHEMY_API_KEY: string;
            SCAN_API_KEY: string;
            ENV: string;
            NETWORK: string; // For forking
        }
    }
}

/**
 * Load the env vars from the .env/<network>.env file
 */
export const loadEnv = (deleteTasks = true) => {
    const networkArg = process.argv.findIndex((c) => c === '--network');
    let networkName = 'localhost';

    if (networkArg !== -1) {
        networkName = process.argv[networkArg + 1]; // Get the network name
    } else if (process.env.NETWORK) {
        networkName = process.env.NETWORK;
        console.log(`[+] Using ${networkName} network fork on localhost.`);
    } else {
        console.log('[!] No network specified, using localhost as default.');
    }

    // dotenv loading can not load `export` env vars for some reasons
    const path = `.env/${networkName}.env`;

    if (fs.existsSync(path)) {
        dotenv.config({ path });
    } else {
        throw new Error(
            '[-] env vars not loaded, please specify a network with --network <network> and create its file in .env/<network>.env',
        );
    }

    // Check if the folder /gen/typechain exists, if not, create it. This is needed if the repo was freshly cloned.
    if (!fs.existsSync('./gen/typechain/index.ts')) {
        try {
            fs.mkdirSync('./gen/typechain', { recursive: true });
        } catch (e) {}
        fs.writeFileSync('./gen/typechain/index.ts', '');
    }

    // Solves the hardhat error [Error HH415: Two different source names]
    subtask(TASK_COMPILE_GET_REMAPPINGS).setAction(async (_, hre, runSuper) => {
        // Get the list of source paths that would normally be passed to the Solidity compiler
        const remappings = await runSuper();
        fs.cpSync('contracts/', 'gen/contracts/', { recursive: true });
        remappings[`${hre.config.SDK.project}/`] = 'gen/contracts/';
        return remappings;
    });

    // Check if scan key is set
    if (!process.env.SCAN_API_KEY) {
        throw new Error(
            '[-] SCAN_API_KEY is not set, please set it in .env/<network>.env',
        );
    }

    // Extend environment
    extendEnvironment((hre) => {
        hre.SDK.eChainId = String(hre.network.config.chainId) as EChainID;
    });

    if (deleteTasks) {
        extendEnvironment((hre) => {
            // remove hardhat core tasks
            delete hre.tasks['gas-reporter:merge'];
            delete hre.tasks['export-artifacts'];
            delete hre.tasks.coverage;
            delete hre.tasks.sourcify;
            delete hre.tasks.accounts;
            delete hre.tasks.flatten;
            delete hre.tasks.deploy;
            delete hre.tasks.export;
            delete hre.tasks.check;
            delete hre.tasks.node;
            delete hre.tasks.run;
        });
    }
};

export { TAP_TASK } from './ethers/hardhat/tasks';
export const SDK = { API, typechain };
export { API, typechain };
export default SDK;

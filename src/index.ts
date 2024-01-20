// API
import API from './api/index';

// Ethers
import './ethers';

// Types
import * as typechain from './typechain';

import * as dotenv from 'dotenv';
import fs from 'fs';

/**
 * Load the env vars from the .env/<network>.env file
 */
export const loadEnv = () => {
    const networkArg = process.argv.findIndex((c) => c === '--network');
    let networkName = 'localhost';

    if (networkArg !== -1) {
        networkName = process.argv[networkArg + 1]; // Get the network name
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
};

export const SDK = { API, typechain };
export { API, typechain };
export default SDK;

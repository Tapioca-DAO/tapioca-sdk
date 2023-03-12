import { extendEnvironment } from 'hardhat/config';
import 'hardhat/types/config';
import 'hardhat/types/runtime';

import * as exportSDK from '../../api/exportSDK';
import * as utils from '../../api/utils';
import * as db from '../../api/db';

const SDK = {
    exportSDK,
    utils,
    db,
} as const;

declare module 'hardhat/types/runtime' {
    interface HardhatRuntimeEnvironment {
        SDK: typeof SDK;
    }
}

extendEnvironment((hre) => {
    // copy reference of config.tracer to tracer
    hre.SDK = SDK;
});

import { extendEnvironment } from 'hardhat/config';
import 'hardhat/types/config';
import 'hardhat/types/runtime';
import '@nomicfoundation/hardhat-toolbox/src/index';

import * as exportSDK from '../../api/exportSDK';
import * as utils from '../../api/utils';
import * as db from '../../api/db';
import { TProjectCaller } from '../../shared';

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

declare module 'hardhat/types/config' {
    interface HardhatConfig {
        SDK: { project: TProjectCaller };
    }
}

extendEnvironment((hre) => {
    // copy reference of config.tracer to tracer
    hre.SDK = SDK;
});

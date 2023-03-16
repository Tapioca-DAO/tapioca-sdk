import { HardhatConfig, HardhatUserConfig } from 'hardhat/types';
import '@nomicfoundation/hardhat-toolbox/dist/src';
import { extendEnvironment } from 'hardhat/config';
import { extendConfig } from 'hardhat/config';
import 'hardhat/types/config';
import 'hardhat/types/runtime';

import * as exportSDK from '../../api/exportSDK';
import { TProjectCaller } from '../../shared';
import * as config from '../../api/config';
import { DeployerVM } from './DeployerVM';
import * as utils from '../../api/utils';
import * as hardhatUtils from './utils';
import * as db from '../../api/db';

const SDK = {
    hardhatUtils,
    DeployerVM,
    exportSDK,
    config,
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
    interface HardhatUserConfig {
        SDK: { project: TProjectCaller };
    }
}

extendEnvironment((hre) => {
    // copy reference of config.tracer to tracer
    hre.SDK = SDK;
    if (hre.network.name === 'hardhat') {
        console.error(
            '\x1b[31m',
            '/!\\ SDK: Currently in Hardhat local network, Tx might not automine and you might get stuck /!\\',
        );
    }
});

extendConfig(
    (config: HardhatConfig, userConfig: Readonly<HardhatUserConfig>) => {
        config.SDK.project = userConfig.SDK.project;
    },
);

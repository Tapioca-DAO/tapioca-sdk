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
            '/!\\ SDK: Currently in Hardhat local network /!\\',
            '\n Tx related to the SDK might get stuck if the local network does not automine',
            '\x1b[0m',
        );
    }
});

// Delete tasks
extendEnvironment((hre) => {
    // remove hardhat core tasks
    delete hre.tasks['gas-reporter:merge'];
    delete hre.tasks['export-artifacts'];
    delete hre.tasks['size-contracts'];
    delete hre.tasks['init-foundry'];
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

extendConfig(
    (config: HardhatConfig, userConfig: Readonly<HardhatUserConfig>) => {
        config.SDK.project = userConfig.SDK.project;
    },
);

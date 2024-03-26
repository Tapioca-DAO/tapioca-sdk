import {
    EthereumProvider,
    HardhatConfig,
    HardhatUserConfig,
} from 'hardhat/types';
import '@nomicfoundation/hardhat-toolbox/dist/src';
import { extendEnvironment } from 'hardhat/config';
import { extendConfig } from 'hardhat/config';
import 'hardhat/types/config';
import 'hardhat/types/runtime';
import { createProvider } from 'hardhat/internal/core/providers/construction';

import * as exportSDK from '../../api/exportSDK';
import { TProjectCaller } from '../../shared';
import * as config from '../../api/config';
import { DeployerVM } from './DeployerVM';
import * as utils from '../../api/utils';
import * as hardhatUtils from './utils';
import * as db from '../../api/db';
import SUPPORTED_CHAINS from '../../SUPPORTED_CHAINS';

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
        SDK: typeof SDK & {
            eChainId: config.EChainID;
            chainInfo: (typeof SUPPORTED_CHAINS)[number];
        };
        changeNetwork(newNetwork: string): Promise<void>;
        getProvider(newNetwork: string): Promise<EthereumProvider>;
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
    // @ts-ignore
    hre.SDK = SDK;
    hre.SDK.eChainId = String(hre.network.config.chainId) as config.EChainID;
    try {
        hre.SDK.chainInfo = hre.SDK.utils.getChainBy(
            'chainId',
            hre.SDK.eChainId,
        );
    } catch (e) {}

    if (hre.network.name === 'hardhat') {
        console.error(
            '\x1b[31m',
            '/!\\ SDK: Currently in Hardhat local network /!\\',
            '\n Tx related to the SDK might get stuck if the local network does not automine',
            '\x1b[0m',
        );
    }
});

extendConfig(
    (config: HardhatConfig, userConfig: Readonly<HardhatUserConfig>) => {
        config.SDK.project = userConfig.SDK.project;
    },
);

// Network switching
extendEnvironment((hre) => {
    // We add a field to the Hardhat Runtime Environment here.
    // We use lazyObject to avoid initializing things until they are actually
    // needed.
    const providers: { [name: string]: EthereumProvider } = {};

    hre.getProvider = async function getProvider(
        name: string,
    ): Promise<EthereumProvider> {
        if (!providers[name]) {
            providers[name] = await createProvider(
                this.config,
                name,
                this.artifacts,
            );
        }
        return providers[name];
    };

    hre.changeNetwork = async function changeNetwork(newNetwork: string) {
        if (!this.config.networks[newNetwork]) {
            throw new Error(
                `changeNetwork: Couldn't find network '${newNetwork}'`,
            );
        }

        if (!providers[this.network.name]) {
            providers[this.network.name] = this.network.provider;
        }

        this.network.name = newNetwork;
        this.network.config = this.config.networks[newNetwork];
        this.network.provider = await this.getProvider(newNetwork);

        if ((this as any).ethers) {
            const {
                EthersProviderWrapper,
                // eslint-disable-next-line @typescript-eslint/no-var-requires
            } = require('@nomiclabs/hardhat-ethers/internal/ethers-provider-wrapper');
            (this as any).ethers.provider = new EthersProviderWrapper(
                this.network.provider,
            );
        }
    };
});

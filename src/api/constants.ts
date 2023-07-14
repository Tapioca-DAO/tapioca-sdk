import { EChainID } from './config';

export const TAP_DISTRIBUTION: {
    [key in EChainID]?: {
        teamAddress: string;
        advisorAddress: string;
        daoAddress: string;
        otcAddress: string;
        seedAddress: string;
        lbpAddress: string;
        airdropAddress: string;
        earlySupportersAddress: string;
        supportersAddress: string;
    };
} = {
    // Mainnet
    [EChainID.MAINNET]: {
        teamAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        advisorAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        daoAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        otcAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        seedAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        lbpAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        airdropAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        earlySupportersAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        supportersAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
    },
    // Testnet
    [EChainID.ARBITRUM_GOERLI]: {
        teamAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        advisorAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        daoAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        otcAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        seedAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        lbpAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        airdropAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        earlySupportersAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        supportersAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
    },
    [EChainID.FUJI_AVALANCHE]: {
        teamAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        advisorAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        daoAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        otcAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        seedAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        lbpAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        airdropAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        earlySupportersAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        supportersAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
    },
    [EChainID.MUMBAI_POLYGON]: {
        teamAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        advisorAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        daoAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        otcAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        seedAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        lbpAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        airdropAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        earlySupportersAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        supportersAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
    },
    [EChainID.FANTOM_TESTNET]: {
        teamAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        advisorAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        daoAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        otcAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        seedAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        lbpAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        airdropAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        earlySupportersAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        supportersAddress: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
    },
};

export const STARGATE_ROUTERS: {
    [key in EChainID]?: {
        stargateChainId: string;
        router: string;
        routerETH: string;
    };
} = {
    // Mainnet
    [EChainID.MAINNET]: {
        stargateChainId: '101',
        routerETH: '0x150f94b44927f078737562f0fcf3c95c01cc2376',
        router: '0x8731d54E9D02c286767d56ac03e8037C07e01e98',
    },
    // Testnet
    [EChainID.GOERLI]: {
        stargateChainId: '10121',
        routerETH: '0xdb19Ad528F4649692B92586828346beF9e4a3532',
        router: '0x7612aE2a34E5A363E137De748801FB4c86499152',
    },
    [EChainID.ARBITRUM_GOERLI]: {
        stargateChainId: '10143',
        routerETH: '0x7612aE2a34E5A363E137De748801FB4c86499152',
        router: '0xb850873f4c993Ac2405A1AdD71F6ca5D4d4d6b4f',
    },
    [EChainID.FUJI_AVALANCHE]: {
        stargateChainId: '10106',
        routerETH: '0x7612aE2a34E5A363E137De748801FB4c86499152',
        router: '0xb850873f4c993Ac2405A1AdD71F6ca5D4d4d6b4f',
    },
    [EChainID.MUMBAI_POLYGON]: {
        stargateChainId: '10109',
        routerETH: '0x7612aE2a34E5A363E137De748801FB4c86499152',
        router: '0xb850873f4c993Ac2405A1AdD71F6ca5D4d4d6b4f',
    },
};

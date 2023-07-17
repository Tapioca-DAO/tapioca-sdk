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

export const UNISWAP_DEPLOYMENTS: {
    [key in EChainID]?: {
        v2Router: string;
        v2factory: string;
    };
} = {
    // Mainnet
    [EChainID.MAINNET]: {
        v2Router: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
        v2factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    },
    // Testnet
    [EChainID.GOERLI]: {
        v2Router: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
        v2factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    },
    [EChainID.ARBITRUM_GOERLI]: {
        v2Router: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
        v2factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    },
    [EChainID.FUJI_AVALANCHE]: {
        v2Router: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
        v2factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    },
    [EChainID.MUMBAI_POLYGON]: {
        v2Router: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
        v2factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    },
    [EChainID.FANTOM_TESTNET]: {
        v2Router: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
        v2factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    },
};

export const CURVE_DEPLOYMENTS: {
    [key in EChainID]?: {
        stablePool: string;
    };
} = {
    // Mainnet
    [EChainID.MAINNET]: {
        stablePool: '0x803147a1f65f9b838e7be39bac1a4f51e6d29a18',
    },
    // Testnet
    [EChainID.GOERLI]: {
        stablePool: '0x803147a1f65f9b838e7be39bac1a4f51e6d29a18',
    },
    [EChainID.ARBITRUM_GOERLI]: {
        stablePool: '0x803147a1f65f9b838e7be39bac1a4f51e6d29a18',
    },
    [EChainID.FUJI_AVALANCHE]: {
        stablePool: '0x803147a1f65f9b838e7be39bac1a4f51e6d29a18',
    },
    [EChainID.MUMBAI_POLYGON]: {
        stablePool: '0x803147a1f65f9b838e7be39bac1a4f51e6d29a18',
    },
    [EChainID.FANTOM_TESTNET]: {
        stablePool: '0x803147a1f65f9b838e7be39bac1a4f51e6d29a18',
    },
};

export const FEE_ADDRESSES: {
    [key in EChainID]?: {
        feeTo: string;
        feeCollector: string;
    };
} = {
    // Mainnet
    [EChainID.MAINNET]: {
        feeTo: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        feeCollector: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
    },
    // Testnet
    [EChainID.GOERLI]: {
        feeTo: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        feeCollector: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
    },
    [EChainID.ARBITRUM_GOERLI]: {
        feeTo: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        feeCollector: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
    },
    [EChainID.FUJI_AVALANCHE]: {
        feeTo: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        feeCollector: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
    },
    [EChainID.MUMBAI_POLYGON]: {
        feeTo: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        feeCollector: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
    },
    [EChainID.FANTOM_TESTNET]: {
        feeTo: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        feeCollector: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
    },
};

export const TOKENS_DEPLOYMENTS: {
    [key in EChainID]?: {
        weth: string;
    };
} = {
    // Mainnet
    [EChainID.MAINNET]: {
        weth: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
    },
    // Testnet
    [EChainID.GOERLI]: {
        weth: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
    },
    [EChainID.ARBITRUM_GOERLI]: {
        weth: '0xd428690148436dA9c7422698eEe15F51C8cec871',
    },
    [EChainID.FUJI_AVALANCHE]: {
        weth: '0x71E4364611BDCc8865c61f2e8F979644Ba0ec7f7',
    },
    [EChainID.MUMBAI_POLYGON]: {
        weth: '0x5d405f701fb11f749e2D8D5D73A70181Ef25d457',
    },
    [EChainID.FANTOM_TESTNET]: {
        weth: '0x95c7E83D6d44F3d81cb60FB4e5472dC5C0415571',
    },
};

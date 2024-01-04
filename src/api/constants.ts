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
    [EChainID.SEPOLIA]: {
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
    [EChainID.ARBITRUM_SEPOLIA]: {
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
    [EChainID.SEPOLIA]: {
        stargateChainId: '10143',
        routerETH: '0x7612aE2a34E5A363E137De748801FB4c86499152',
        router: '0xb850873f4c993Ac2405A1AdD71F6ca5D4d4d6b4f',
    },
    [EChainID.ARBITRUM_SEPOLIA]: {
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
        v3Router: string;
        v3Router02: string;
    };
} = {
    // Mainnet
    [EChainID.MAINNET]: {
        v2Router: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
        v2factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
        v3Router: '0xE592427A0AEce92De3Edee1F18E0157C05861564',
        v3Router02: '0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45',
    },
    // Testnet
    [EChainID.SEPOLIA]: {
        v2Router: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
        v2factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
        v3Router: '0xE592427A0AEce92De3Edee1F18E0157C05861564',
        v3Router02: '0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45',
    },
    [EChainID.ARBITRUM_SEPOLIA]: {
        v2Router: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
        v2factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
        v3Router: '0xE592427A0AEce92De3Edee1F18E0157C05861564',
        v3Router02: '0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45',
    },
    [EChainID.FUJI_AVALANCHE]: {
        v2Router: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
        v2factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
        v3Router: '0xE592427A0AEce92De3Edee1F18E0157C05861564',
        v3Router02: '0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45',
    },
    [EChainID.MUMBAI_POLYGON]: {
        v2Router: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
        v2factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
        v3Router: '0xE592427A0AEce92De3Edee1F18E0157C05861564',
        v3Router02: '0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45',
    },
    [EChainID.FANTOM_TESTNET]: {
        v2Router: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
        v2factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
        v3Router: '0xE592427A0AEce92De3Edee1F18E0157C05861564',
        v3Router02: '0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45',
    },
};

export const CURVE_DEPLOYMENTS: {
    [key in EChainID]?: {
        stablePool: string;
        tricryptoLiquidityPool: string;
        tricryptoGauge: string;
        tricryptoMinter: string;
        stEthPool: string;
    };
} = {
    // Mainnet
    [EChainID.MAINNET]: {
        stablePool: '0x803147a1f65f9b838e7be39bac1a4f51e6d29a18',
        tricryptoLiquidityPool: '0xD51a44d3FaE010294C616388b506AcdA1bfAAE46',
        tricryptoGauge: '0xDeFd8FdD20e0f34115C7018CCfb655796F6B2168',
        tricryptoMinter: '0xd061D61a4d941c39E5453435B6345Dc261C2fcE0',
        stEthPool: '0xdc24316b9ae028f1497c275eb9192a3ea0f67022',
    },
    // Testnet
    [EChainID.SEPOLIA]: {
        stablePool: '0x803147a1f65f9b838e7be39bac1a4f51e6d29a18',
        tricryptoLiquidityPool: '0xD51a44d3FaE010294C616388b506AcdA1bfAAE46',
        tricryptoGauge: '0xDeFd8FdD20e0f34115C7018CCfb655796F6B2168',
        tricryptoMinter: '0xd061D61a4d941c39E5453435B6345Dc261C2fcE0',
        stEthPool: '0xdc24316b9ae028f1497c275eb9192a3ea0f67022',
    },
    [EChainID.ARBITRUM_SEPOLIA]: {
        stablePool: '0x803147a1f65f9b838e7be39bac1a4f51e6d29a18',
        tricryptoLiquidityPool: '0xD51a44d3FaE010294C616388b506AcdA1bfAAE46',
        tricryptoGauge: '0xDeFd8FdD20e0f34115C7018CCfb655796F6B2168',
        tricryptoMinter: '0xd061D61a4d941c39E5453435B6345Dc261C2fcE0',
        stEthPool: '0xdc24316b9ae028f1497c275eb9192a3ea0f67022',
    },
    [EChainID.FUJI_AVALANCHE]: {
        stablePool: '0x803147a1f65f9b838e7be39bac1a4f51e6d29a18',
        tricryptoLiquidityPool: '0xD51a44d3FaE010294C616388b506AcdA1bfAAE46',
        tricryptoGauge: '0xDeFd8FdD20e0f34115C7018CCfb655796F6B2168',
        tricryptoMinter: '0xd061D61a4d941c39E5453435B6345Dc261C2fcE0',
        stEthPool: '0xdc24316b9ae028f1497c275eb9192a3ea0f67022',
    },
    [EChainID.MUMBAI_POLYGON]: {
        stablePool: '0x803147a1f65f9b838e7be39bac1a4f51e6d29a18',
        tricryptoLiquidityPool: '0xD51a44d3FaE010294C616388b506AcdA1bfAAE46',
        tricryptoGauge: '0xDeFd8FdD20e0f34115C7018CCfb655796F6B2168',
        tricryptoMinter: '0xd061D61a4d941c39E5453435B6345Dc261C2fcE0',
        stEthPool: '0xdc24316b9ae028f1497c275eb9192a3ea0f67022',
    },
    [EChainID.FANTOM_TESTNET]: {
        stablePool: '0x803147a1f65f9b838e7be39bac1a4f51e6d29a18',
        tricryptoLiquidityPool: '0xD51a44d3FaE010294C616388b506AcdA1bfAAE46',
        tricryptoGauge: '0xDeFd8FdD20e0f34115C7018CCfb655796F6B2168',
        tricryptoMinter: '0xd061D61a4d941c39E5453435B6345Dc261C2fcE0',
        stEthPool: '0xdc24316b9ae028f1497c275eb9192a3ea0f67022',
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
    [EChainID.SEPOLIA]: {
        feeTo: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        feeCollector: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
    },
    [EChainID.ARBITRUM_SEPOLIA]: {
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
        bal: string;
        ceth: string;
        wbtc: string;
        usdt: string;
    };
} = {
    // Mainnet
    [EChainID.MAINNET]: {
        weth: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        bal: '0xba100000625a3754423978a60c9317c58a424e3D',
        ceth: '0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5',
        wbtc: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
        usdt: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    },
    // Testnet
    [EChainID.SEPOLIA]: {
        weth: '0x40282d3Cf4890D9806BC1853e97a59C93D813653',
        bal: '0xba100000625a3754423978a60c9317c58a424e3D',
        ceth: '0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5',
        wbtc: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
        usdt: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    },
    [EChainID.ARBITRUM_SEPOLIA]: {
        weth: '0xd428690148436dA9c7422698eEe15F51C8cec871',
        bal: '0xba100000625a3754423978a60c9317c58a424e3D',
        ceth: '0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5',
        wbtc: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
        usdt: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    },
    [EChainID.FUJI_AVALANCHE]: {
        weth: '0x71E4364611BDCc8865c61f2e8F979644Ba0ec7f7',
        bal: '0xba100000625a3754423978a60c9317c58a424e3D',
        ceth: '0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5',
        wbtc: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
        usdt: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    },
    [EChainID.MUMBAI_POLYGON]: {
        weth: '0x5d405f701fb11f749e2D8D5D73A70181Ef25d457',
        bal: '0xba100000625a3754423978a60c9317c58a424e3D',
        ceth: '0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5',
        wbtc: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
        usdt: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    },
    [EChainID.FANTOM_TESTNET]: {
        weth: '0x95c7E83D6d44F3d81cb60FB4e5472dC5C0415571',
        bal: '0xba100000625a3754423978a60c9317c58a424e3D',
        ceth: '0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5',
        wbtc: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
        usdt: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    },
};

export const AAVE_DEPLOYMENTS: {
    [key in EChainID]?: {
        lendingPool: string;
        stkAave: string;
        receiptToken: string;
        incentivesController: string;
    };
} = {
    // Mainnet
    [EChainID.MAINNET]: {
        lendingPool: '0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9',
        stkAave: '0x4da27a545c0c5b758a6ba100e3a049001de870f5',
        receiptToken: '0x030ba81f1c18d280636f32af80b9aad02cf0854e',
        incentivesController: '0xd784927Ff2f95ba542BfC824c8a8a98F3495f6b5',
    },
};

export const BALANCER_DEPLOYMENTS: {
    [key in EChainID]?: {
        pool: string;
        balEthVault: string;
        balEthGauge: string;
        poolId: string;
    };
} = {
    // Mainnet
    [EChainID.MAINNET]: {
        pool: '0x5c6Ee304399DBdB9C8Ef030aB642B10820DB8F56',
        balEthVault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
        balEthGauge: '0xc128a9954e6c874ea3d62ce62b468ba073093f25',
        poolId: '0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',
    },
};

export const CONVEX_DEPLOYMENTS: {
    [key in EChainID]?: {
        booster: string;
        zap: string;
        trirryptoRewardPool: string;
    };
} = {
    // Mainnet
    [EChainID.MAINNET]: {
        booster: '0xF403C135812408BFbE8713b5A23a04b3D48AAE31',
        zap: '0xDd49A93FDcae579AE50B4b9923325e9e335ec82B',
        trirryptoRewardPool: '0x9D5C5E364D81DaB193b72db9E9BE9D8ee669B652',
    },
};

export const STARGET_DEPLOYMENTS: {
    [key in EChainID]?: {
        lpStaking: string;
        lpStakingPid: number;
        lpToken: string;
        univ3Pool: string;
    };
} = {
    // Mainnet
    [EChainID.MAINNET]: {
        lpStaking: '0xb0d502e938ed5f4df2e681fe6e419ff29631d62b',
        lpStakingPid: 2,
        lpToken: '0x101816545f6bd2b1076434b54383a1e633390a2e',
        univ3Pool: '0x6ce6d6d40a4c4088309293b0582372a2e6bb632e',
    },
};

export const YEARN_DEPLOYMENTS: {
    [key in EChainID]?: {
        ethVault: string;
    };
} = {
    // Mainnet
    [EChainID.MAINNET]: {
        ethVault: '0xa258C4606Ca8206D8aA700cE2143D7db854D168c',
    },
};

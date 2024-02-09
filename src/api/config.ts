/**
 * Map a Chain ID to an LZ Chain ID
 */
export type INetworkMappingChainToLZ = {
    [key in EChainID]: ELZChainID;
};

/**
 * Map an LZ Chain ID to a Chain ID
 */
export type INetworkMappingLZToChain = {
    [key in ELZChainID]: EChainID;
};

/**
 * OFT packet types
 */
export enum EPacketType {
    PT_SEND = 0,
    PT_SEND_AND_CALL = 1,

    //USDO
    PT_MARKET_MULTIHOP_BUY = 772,
    PT_MARKET_REMOVE_ASSET = 773,
    PT_YB_SEND_SGL_LEND_OR_REPAY = 774,
    PT_LEVERAGE_MARKET_UP = 775,

    //TOFT
    PT_YB_SEND_STRAT = 770,
    PT_YB_RETRIEVE_STRAT = 771,
    PT_MARKET_REMOVE_COLLATERAL = 772,
    PT_MARKET_MULTIHOP_SELL = 773,
    PT_YB_SEND_SGL_BORROW = 775,
    PT_LEVERAGE_MARKET_DOWN = 776,
    PT_SEND_FROM_PARAMS = 780,

    //COMMON
    PT_TAP_EXERCISE = 777,
    PT_TRIGGER_SEND_FROM = 778,
    PT_APPROVE = 779,

    // TapOFT
    PT_LOCK_TWTAP = 870,
    PT_UNLOCK_TWTAP = 871,
    PT_CLAIM_REWARDS = 872,
}

/**
 * Map a packet type to a minimum gas amount
 */
export const MIN_GAS_FOR_PACKET_TYPE = {
    [EPacketType.PT_SEND]: 200_000,
    [EPacketType.PT_SEND_AND_CALL]: 200_000,
    [EPacketType.PT_MARKET_MULTIHOP_BUY]: 200_000,
    [EPacketType.PT_MARKET_REMOVE_ASSET]: 200_000,
    [EPacketType.PT_YB_SEND_SGL_LEND_OR_REPAY]: 200_000,
    [EPacketType.PT_LEVERAGE_MARKET_UP]: 200_000,
    [EPacketType.PT_YB_SEND_STRAT]: 200_000,
    [EPacketType.PT_YB_RETRIEVE_STRAT]: 200_000,
    [EPacketType.PT_MARKET_REMOVE_COLLATERAL]: 200_000,
    [EPacketType.PT_MARKET_MULTIHOP_SELL]: 200_000,
    [EPacketType.PT_YB_SEND_SGL_BORROW]: 200_000,
    [EPacketType.PT_LEVERAGE_MARKET_DOWN]: 200_000,
    [EPacketType.PT_TAP_EXERCISE]: 200_000,
    [EPacketType.PT_TRIGGER_SEND_FROM]: 200_000,
    [EPacketType.PT_SEND_FROM_PARAMS]: 200_000,
    [EPacketType.PT_APPROVE]: 200_000,
    [EPacketType.PT_LOCK_TWTAP]: 550_000,
    [EPacketType.PT_UNLOCK_TWTAP]: 750_000,
    [EPacketType.PT_CLAIM_REWARDS]: 550_000,
};

/**
 * Tapioca supported chain IDs
 */
export enum EChainID {
    // Mainnets
    MAINNET = '1',
    ARBITRUM = '42161',
    OPTIMISM = '10',
    AVALANCHE = '43114',
    POLYGON = '137',
    FANTOM = '250',
    // Testnets
    SEPOLIA = '11155111',
    ARBITRUM_SEPOLIA = '421614',
    OPTIMISM_SEPOLIA = '11155420',
    FUJI_AVALANCHE = '43113',
    MUMBAI_POLYGON = '80001',
    FANTOM_TESTNET = '4002',
}

/**
 * Tapioca support LZ chain IDs
 */
export enum ELZChainID {
    // Mainnets
    MAINNET = '101',
    AVALANCHE = '106',
    POLYGON = '109',
    FANTOM = '112',
    ARBITRUM = '110',
    OPTIMISM = '111',
    // Testnets
    SEPOLIA = '40161',
    ARBITRUM_SEPOLIA = '40231',
    OPTIMISM_SEPOLIA = '40232',
    FUJI_AVALANCHE = '40106',
    MUMBAI_POLYGON = '40109',
    FANTOM_TESTNET = '40112',
}

/**
 * Returns max gas for chains
 **/
export const MAX_GAS_LIMITS = {
    [EChainID.ARBITRUM_SEPOLIA]: 40000000000,
};

export const USDO_PACKET_TYPES = [
    //USDO
    EPacketType.PT_SEND,
    EPacketType.PT_SEND_AND_CALL,
    EPacketType.PT_MARKET_MULTIHOP_BUY,
    EPacketType.PT_MARKET_REMOVE_ASSET,
    EPacketType.PT_YB_SEND_SGL_LEND_OR_REPAY,
    EPacketType.PT_LEVERAGE_MARKET_UP,
];
export const TOFT_PACKET_TYPES = [
    EPacketType.PT_SEND,
    EPacketType.PT_SEND_AND_CALL,
    EPacketType.PT_YB_SEND_STRAT,
    EPacketType.PT_YB_RETRIEVE_STRAT,
    EPacketType.PT_MARKET_REMOVE_COLLATERAL,
    EPacketType.PT_MARKET_MULTIHOP_SELL,
    EPacketType.PT_YB_SEND_SGL_BORROW,
    EPacketType.PT_LEVERAGE_MARKET_DOWN,
    EPacketType.PT_SEND_FROM_PARAMS,
];
export const ONFT_PACKET_TYPES = [EPacketType.PT_SEND_AND_CALL];
export const TAPOFT_PACKET_TYPES = [
    EPacketType.PT_SEND,
    EPacketType.PT_SEND_AND_CALL,
    EPacketType.PT_LOCK_TWTAP,
    EPacketType.PT_UNLOCK_TWTAP,
    EPacketType.PT_CLAIM_REWARDS,
];
export const COMMON_PACKET_TYPES = [
    EPacketType.PT_TAP_EXERCISE,
    EPacketType.PT_TRIGGER_SEND_FROM,
    EPacketType.PT_APPROVE,
];

/**
 * Returns a mapping between chain ID and LZ chain ID
 **/
export const NETWORK_MAPPING_CHAIN_TO_LZ: INetworkMappingChainToLZ = {
    // Mainnets
    [EChainID.MAINNET]: ELZChainID.MAINNET,
    [EChainID.AVALANCHE]: ELZChainID.AVALANCHE,
    [EChainID.POLYGON]: ELZChainID.POLYGON,
    [EChainID.FANTOM]: ELZChainID.FANTOM,
    [EChainID.ARBITRUM]: ELZChainID.ARBITRUM,
    [EChainID.OPTIMISM]: ELZChainID.OPTIMISM,
    // Testnets
    [EChainID.SEPOLIA]: ELZChainID.SEPOLIA,
    [EChainID.ARBITRUM_SEPOLIA]: ELZChainID.ARBITRUM_SEPOLIA,
    [EChainID.FUJI_AVALANCHE]: ELZChainID.FUJI_AVALANCHE,
    [EChainID.MUMBAI_POLYGON]: ELZChainID.MUMBAI_POLYGON,
    [EChainID.FANTOM_TESTNET]: ELZChainID.FANTOM_TESTNET,
    [EChainID.OPTIMISM_SEPOLIA]: ELZChainID.OPTIMISM_SEPOLIA,
};

//TODO: Deploy with CREATE2
export const MULTICALL_ADDRESSES = {
    // Testnets
    [EChainID.FUJI_AVALANCHE]: '0x7DaF5aae1A7d776Fe51Ef46374DbA3d428Ff3B08',
    [EChainID.MUMBAI_POLYGON]: '0x55561d2E9528D4561494454b0417e0A9629D2c8A',
    [EChainID.FANTOM_TESTNET]: '0x5c18545f83ae61cDd08d9eEFBe7EE3b7b154AC5d',
};

/**
 * Returns a mapping between LZ chain ID and chain ID
 **/
export const NETWORK_MAPPING_LZ_TO_CHAIN: INetworkMappingLZToChain = {
    // Mainnets
    [ELZChainID.MAINNET]: EChainID.MAINNET,
    [ELZChainID.ARBITRUM]: EChainID.ARBITRUM,
    [ELZChainID.OPTIMISM]: EChainID.OPTIMISM,
    [ELZChainID.AVALANCHE]: EChainID.AVALANCHE,
    [ELZChainID.POLYGON]: EChainID.POLYGON,
    [ELZChainID.FANTOM]: EChainID.FANTOM,
    // Testnets
    [ELZChainID.SEPOLIA]: EChainID.SEPOLIA,
    [ELZChainID.ARBITRUM_SEPOLIA]: EChainID.ARBITRUM_SEPOLIA,
    [ELZChainID.OPTIMISM_SEPOLIA]: EChainID.OPTIMISM_SEPOLIA,
    [ELZChainID.FUJI_AVALANCHE]: EChainID.FUJI_AVALANCHE,
    [ELZChainID.MUMBAI_POLYGON]: EChainID.MUMBAI_POLYGON,
    [ELZChainID.FANTOM_TESTNET]: EChainID.FANTOM_TESTNET,
};

export enum OFT_TOKEN_TYPES {
    TOFT = 0, //available on TapiocaZ repo
    MarketsProxy = 1, //available on Tapioca-bar repo
    USDO = 2, //available on Tapioca-bar repo
    TAP = 3, //available on tap-token repo
}

export enum TAPIOCA_PROJECTS_NAME {
    TapiocaZ = 'tapiocaz',
    TapToken = 'tap-token',
    TapiocaBar = 'tapioca-bar',
    Generic = 'generic',
    TapiocaPeriph = 'tapioca-periph',
    TapiocaMocks = 'tapioca-mocks',
    PCNFT = 'pcnft',
    TapiocaStrategies = 'tapioca-strategies',
    YieldBox = 'yieldbox',
}

export const TAPIOCA_PROJECTS = [
    'tapiocaz',
    'tap-token',
    'tapioca-bar',
    'generic',
    'tapioca-periphery',
    'tapioca-mocks',
    'pcnft',
    'tapioca-strategies',
    'yieldbox',
] as const;

export const MULTICALL_ADDRESS = '0xcA11bde05977b3631167028862bE2a173976CA11';

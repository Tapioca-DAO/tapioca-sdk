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
    PT_YB_SEND_STRAT = 770,
    PT_YB_RETRIEVE_STRAT = 771,
    PT_YB_DEPOSIT = 772,
    PT_YB_WITHDRAW = 773,
}

/**
 * Map a packet type to a minimum gas amount
 */
export const MIN_GAS_FOR_PACKET_TYPE = {
    [EPacketType.PT_SEND]: 200_000,
    [EPacketType.PT_SEND_AND_CALL]: 200_000,
    [EPacketType.PT_YB_SEND_STRAT]: 200_000,
    [EPacketType.PT_YB_RETRIEVE_STRAT]: 200_000,
    [EPacketType.PT_YB_DEPOSIT]: 200_000,
    [EPacketType.PT_YB_WITHDRAW]: 200_000,
};

/**
 * Tapioca supported chain IDs
 */
export enum EChainID {
    // Mainnets
    MAINNET = '1',
    BSC = '56',
    AVALANCHE = '43114',
    POLYGON = '137',
    FANTOM = '250',
    ARBITRUM = '42161',
    OPTIMISM = '10',
    HARMONY = '1666600000',
    // Testnets
    GOERLI = '5',
    BSC_TESTNET = '97',
    FUJI_AVALANCHE = '43113',
    MUMBAI_POLYGON = '80001',
    FANTOM_TESTNET = '4002',
    ARBITRUM_GOERLI = '421613',
    OPTIMISM_GOERLI = '420',
    HARMONY_TESTNET = '1666700000',
}

/**
 * Tapioca support LZ chain IDs
 */
export enum ELZChainID {
    // Mainnets
    MAINNET = '101',
    BSC = '102',
    AVALANCHE = '106',
    POLYGON = '109',
    FANTOM = '112',
    ARBITRUM = '110',
    OPTIMISM = '111',
    HARMONY = '116',
    // Testnets
    GOERLI = '10121',
    BSC_TESTNET = '10102',
    FUJI_AVALANCHE = '10106',
    MUMBAI_POLYGON = '10109',
    FANTOM_TESTNET = '10112',
    ARBITRUM_GOERLI = '10143',
    OPTIMISM_GOERLI = '10132',
    HARMONY_TESTNET = '10133',
}

/**
 * Returns a list of all available OFTs packet types Tapioca uses
 **/
export const PACKET_TYPES = [
    EPacketType.PT_SEND,
    EPacketType.PT_SEND_AND_CALL,
    EPacketType.PT_YB_SEND_STRAT,
    EPacketType.PT_YB_RETRIEVE_STRAT,
    EPacketType.PT_YB_DEPOSIT,
    EPacketType.PT_YB_WITHDRAW,
];

/**
 * Returns a mapping between chain ID and LZ chain ID
 **/
export const NETWORK_MAPPING_CHAIN_TO_LZ: INetworkMappingChainToLZ = {
    // Mainnets
    [EChainID.MAINNET]: ELZChainID.MAINNET,
    [EChainID.BSC]: ELZChainID.BSC,
    [EChainID.AVALANCHE]: ELZChainID.AVALANCHE,
    [EChainID.POLYGON]: ELZChainID.POLYGON,
    [EChainID.FANTOM]: ELZChainID.FANTOM,
    [EChainID.ARBITRUM]: ELZChainID.ARBITRUM,
    [EChainID.OPTIMISM]: ELZChainID.OPTIMISM,
    [EChainID.HARMONY]: ELZChainID.HARMONY,
    // Testnets
    [EChainID.GOERLI]: ELZChainID.GOERLI,
    [EChainID.BSC_TESTNET]: ELZChainID.BSC_TESTNET,
    [EChainID.FUJI_AVALANCHE]: ELZChainID.FUJI_AVALANCHE,
    [EChainID.MUMBAI_POLYGON]: ELZChainID.MUMBAI_POLYGON,
    [EChainID.FANTOM_TESTNET]: ELZChainID.FANTOM_TESTNET,
    [EChainID.ARBITRUM_GOERLI]: ELZChainID.ARBITRUM_GOERLI,
    [EChainID.OPTIMISM_GOERLI]: ELZChainID.OPTIMISM_GOERLI,
    [EChainID.HARMONY_TESTNET]: ELZChainID.HARMONY_TESTNET,
};

/**
 * Returns a mapping between LZ chain ID and chain ID
 **/
export const NETWORK_MAPPING_LZ_TO_CHAIN: INetworkMappingLZToChain = {
    // Mainnets
    [ELZChainID.MAINNET]: EChainID.MAINNET,
    [ELZChainID.BSC]: EChainID.BSC,
    [ELZChainID.AVALANCHE]: EChainID.AVALANCHE,
    [ELZChainID.POLYGON]: EChainID.POLYGON,
    [ELZChainID.FANTOM]: EChainID.FANTOM,
    [ELZChainID.ARBITRUM]: EChainID.ARBITRUM,
    [ELZChainID.OPTIMISM]: EChainID.OPTIMISM,
    [ELZChainID.HARMONY]: EChainID.HARMONY,
    // Testnets
    [ELZChainID.GOERLI]: EChainID.GOERLI,
    [ELZChainID.BSC_TESTNET]: EChainID.BSC_TESTNET,
    [ELZChainID.FUJI_AVALANCHE]: EChainID.FUJI_AVALANCHE,
    [ELZChainID.MUMBAI_POLYGON]: EChainID.MUMBAI_POLYGON,
    [ELZChainID.FANTOM_TESTNET]: EChainID.FANTOM_TESTNET,
    [ELZChainID.ARBITRUM_GOERLI]: EChainID.ARBITRUM_GOERLI,
    [ELZChainID.OPTIMISM_GOERLI]: EChainID.OPTIMISM_GOERLI,
    [ELZChainID.HARMONY_TESTNET]: EChainID.HARMONY_TESTNET,
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
}

export const TAPIOCA_PROJECTS = [
    'tapiocaz',
    'tap-token',
    'tapioca-bar',
] as const;

export const MULTICALL_ADDRESS = '0xcA11bde05977b3631167028862bE2a173976CA11';

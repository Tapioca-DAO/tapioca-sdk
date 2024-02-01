import { EChainID, NETWORK_MAPPING_CHAIN_TO_LZ } from './api/config';

const SUPPORTED_CHAINS = [
    // testnets
    {
        name: 'sepolia',
        address: '0x464570adA09869d8741132183721B4f0769a0287',
        chainId: EChainID.SEPOLIA,
        lzChainId: NETWORK_MAPPING_CHAIN_TO_LZ[EChainID.SEPOLIA],
        rpc: 'https://eth-sepolia.g.alchemy.com/v2/<api_key>',
        tags: ['testnet'],
    },
    {
        name: 'arbitrum_sepolia',
        address: '0x464570adA09869d8741132183721B4f0769a0287',
        chainId: EChainID.ARBITRUM_SEPOLIA,
        lzChainId: NETWORK_MAPPING_CHAIN_TO_LZ[EChainID.ARBITRUM_SEPOLIA],
        rpc: 'https://arb-sepolia.g.alchemy.com/v2/<api_key>',
        tags: ['testnet'],
    },
    {
        name: 'optimism_sepolia',
        address: '0x464570adA09869d8741132183721B4f0769a0287',
        chainId: EChainID.OPTIMISM_SEPOLIA,
        lzChainId: NETWORK_MAPPING_CHAIN_TO_LZ[EChainID.OPTIMISM_SEPOLIA],
        rpc: 'https://opt-sepolia.g.alchemy.com/v2/<api_key>',
        tags: ['testnet'],
    },
    {
        name: 'fuji_avalanche',
        address: '0x464570adA09869d8741132183721B4f0769a0287',
        chainId: EChainID.FUJI_AVALANCHE,
        lzChainId: NETWORK_MAPPING_CHAIN_TO_LZ[EChainID.FUJI_AVALANCHE],
        rpc: 'https://api.avax-test.network/ext/bc/C/rpc',
        tags: ['testnet'],
    },
    {
        name: 'mumbai',
        address: '0x464570adA09869d8741132183721B4f0769a0287',
        chainId: EChainID.MUMBAI_POLYGON,
        lzChainId: NETWORK_MAPPING_CHAIN_TO_LZ[EChainID.MUMBAI_POLYGON],
        rpc: 'https://polygon-mumbai.g.alchemy.com/v2/<api_key>',
        tags: ['testnet'],
    },
    {
        name: 'fantom_testnet',
        address: '0x464570adA09869d8741132183721B4f0769a0287',
        chainId: EChainID.FANTOM_TESTNET,
        lzChainId: NETWORK_MAPPING_CHAIN_TO_LZ[EChainID.FANTOM_TESTNET],
        rpc: 'https://rpc.testnet.fantom.network/',
        tags: ['testnet'],
    },

    // TODO use correct addresses when mainnet LZv2 is live.
    //mainnets
    {
        name: 'ethereum',
        address: '0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675',
        chainId: EChainID.MAINNET,
        lzChainId: NETWORK_MAPPING_CHAIN_TO_LZ[EChainID.MAINNET],
        rpc: 'https://eth-mainnet.g.alchemy.com/v2/<api_key>',
        tags: ['mainnet'],
    },
    {
        name: 'avalanche',
        address: '0x3c2269811836af69497E5F486A85D7316753cf62',
        chainId: EChainID.AVALANCHE,
        lzChainId: NETWORK_MAPPING_CHAIN_TO_LZ[EChainID.AVALANCHE],
        rpc: 'https://api.avax.network/ext/bc/C/rpc',
        tags: ['mainnet'],
    },
    {
        name: 'polygon',
        address: '0x3c2269811836af69497E5F486A85D7316753cf62',
        chainId: EChainID.POLYGON,
        lzChainId: NETWORK_MAPPING_CHAIN_TO_LZ[EChainID.POLYGON],
        rpc: 'https://polygon-mainnet.g.alchemy.com/v2/<api_key>',
        tags: ['mainnet'],
    },
    {
        name: 'arbitrum',
        address: '0x3c2269811836af69497E5F486A85D7316753cf62',
        chainId: EChainID.ARBITRUM,
        lzChainId: NETWORK_MAPPING_CHAIN_TO_LZ[EChainID.ARBITRUM],
        rpc: 'https://arb-mainnet.g.alchemy.com/v2/<api_key>',
        tags: ['mainnet'],
    },
    {
        name: 'optimism',
        address: '0x3c2269811836af69497E5F486A85D7316753cf62',
        chainId: EChainID.OPTIMISM,
        lzChainId: NETWORK_MAPPING_CHAIN_TO_LZ[EChainID.OPTIMISM],
        rpc: 'https://opt-mainnet.g.alchemy.com/v2/<api_key>',
        tags: ['mainnet'],
    },
    {
        name: 'fantom',
        address: '0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7',
        chainId: EChainID.FANTOM,
        lzChainId: NETWORK_MAPPING_CHAIN_TO_LZ[EChainID.FANTOM],
        rpc: 'https://rpc.ftm.tools/',
        tags: ['mainnet'],
    },
] as const;

export default SUPPORTED_CHAINS;

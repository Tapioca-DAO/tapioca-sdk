import { EChainID, NETWORK_MAPPING_CHAIN_TO_LZ } from './api/config';

const SUPPORTED_CHAINS = [
    // testnets
    {
        name: 'sepolia',
        address: '0x6EDCE65403992e310A62460808c4b910D972f10f',
        chainId: EChainID.SEPOLIA,
        lzChainId: NETWORK_MAPPING_CHAIN_TO_LZ[EChainID.SEPOLIA],
        rpc: 'https://eth-sepolia.g.alchemy.com/v2/<api_key>',
        tags: ['testnet'],
    },
    {
        name: 'arbitrum_sepolia',
        address: '0x6EDCE65403992e310A62460808c4b910D972f10f',
        chainId: EChainID.ARBITRUM_SEPOLIA,
        lzChainId: NETWORK_MAPPING_CHAIN_TO_LZ[EChainID.ARBITRUM_SEPOLIA],
        rpc: 'https://arb-sepolia.g.alchemy.com/v2/<api_key>',
        tags: ['testnet', 'host'],
    },
    {
        name: 'optimism_sepolia',
        address: '0x6EDCE65403992e310A62460808c4b910D972f10f',
        chainId: EChainID.OPTIMISM_SEPOLIA,
        lzChainId: NETWORK_MAPPING_CHAIN_TO_LZ[EChainID.OPTIMISM_SEPOLIA],
        rpc: 'https://opt-sepolia.g.alchemy.com/v2/<api_key>',
        tags: ['testnet', 'side'],
    },

    {
        name: 'berachain_testnet',
        address: '0x6EDCE65403992e310A62460808c4b910D972f10f',
        chainId: EChainID.BERACHAIN_TESTNET,
        lzChainId: NETWORK_MAPPING_CHAIN_TO_LZ[EChainID.BERACHAIN_TESTNET],
        rpc: 'https://rpc.ankr.com/berachain_testnet',
        tags: ['testnet', 'side'],
    },
    {
        name: 'base_sepolia',
        address: '0x6EDCE65403992e310A62460808c4b910D972f10f',
        chainId: EChainID.BASE_SEPOLIA,
        lzChainId: NETWORK_MAPPING_CHAIN_TO_LZ[EChainID.BASE_SEPOLIA],
        rpc: 'https://base-sepolia.g.alchemy.com/v2/<api_key>',
        tags: ['testnet', 'side'],
    },

    {
        name: 'fuji_avalanche',
        address: '0x6EDCE65403992e310A62460808c4b910D972f10f',
        chainId: EChainID.FUJI_AVALANCHE,
        lzChainId: NETWORK_MAPPING_CHAIN_TO_LZ[EChainID.FUJI_AVALANCHE],
        rpc: 'https://api.avax-test.network/ext/bc/C/rpc',
        tags: ['testnet', 'side'],
    },
    {
        name: 'mumbai',
        address: '0x6EDCE65403992e310A62460808c4b910D972f10f',
        chainId: EChainID.MUMBAI_POLYGON,
        lzChainId: NETWORK_MAPPING_CHAIN_TO_LZ[EChainID.MUMBAI_POLYGON],
        rpc: 'https://polygon-mumbai.g.alchemy.com/v2/<api_key>',
        tags: ['testnet'],
    },
    {
        name: 'fantom_testnet',
        address: '0x6EDCE65403992e310A62460808c4b910D972f10f',
        chainId: EChainID.FANTOM_TESTNET,
        lzChainId: NETWORK_MAPPING_CHAIN_TO_LZ[EChainID.FANTOM_TESTNET],
        rpc: 'https://rpc.testnet.fantom.network/',
        tags: ['testnet'],
    },

    // TODO use correct addresses when mainnet LZv2 is live.
    //mainnets
    {
        name: 'ethereum',
        address: '0x1a44076050125825900e736c501f859c50fE728c',
        chainId: EChainID.MAINNET,
        lzChainId: NETWORK_MAPPING_CHAIN_TO_LZ[EChainID.MAINNET],
        rpc: 'https://eth-mainnet.g.alchemy.com/v2/<api_key>',
        tags: ['mainnet', 'side'],
    },
    {
        name: 'ethereum_tenderly_fork',
        address: '0x1a44076050125825900e736c501f859c50fE728c',
        chainId: EChainID.MAINNET,
        lzChainId: NETWORK_MAPPING_CHAIN_TO_LZ[EChainID.MAINNET],
        rpc: 'https://virtual.arbitrum.rpc.tenderly.co/<api_key>',
        tags: ['mainnet', 'side'],
    },
    {
        name: 'avalanche',
        address: '0x1a44076050125825900e736c501f859c50fE728c',
        chainId: EChainID.AVALANCHE,
        lzChainId: NETWORK_MAPPING_CHAIN_TO_LZ[EChainID.AVALANCHE],
        rpc: 'https://api.avax.network/ext/bc/C/rpc',
        tags: ['mainnet', 'side'],
    },
    {
        name: 'polygon',
        address: '0x1a44076050125825900e736c501f859c50fE728c',
        chainId: EChainID.POLYGON,
        lzChainId: NETWORK_MAPPING_CHAIN_TO_LZ[EChainID.POLYGON],
        rpc: 'https://polygon-mainnet.g.alchemy.com/v2/<api_key>',
        tags: ['mainnet', 'side'],
    },
    {
        name: 'arbitrum',
        address: '0x1a44076050125825900e736c501f859c50fE728c',
        chainId: EChainID.ARBITRUM,
        lzChainId: NETWORK_MAPPING_CHAIN_TO_LZ[EChainID.ARBITRUM],
        rpc: 'https://arb-mainnet.g.alchemy.com/v2/<api_key>',
        tags: ['mainnet', 'host'],
    },
    {
        name: 'arbitrum_tenderly_fork',
        address: '0x1a44076050125825900e736c501f859c50fE728c',
        chainId: EChainID.ARBITRUM,
        lzChainId: NETWORK_MAPPING_CHAIN_TO_LZ[EChainID.ARBITRUM],
        rpc: 'https://virtual.arbitrum.rpc.tenderly.co/<api_key>',
        tags: ['mainnet', 'host'],
    },
    {
        name: 'optimism',
        address: '0x1a44076050125825900e736c501f859c50fE728c',
        chainId: EChainID.OPTIMISM,
        lzChainId: NETWORK_MAPPING_CHAIN_TO_LZ[EChainID.OPTIMISM],
        rpc: 'https://opt-mainnet.g.alchemy.com/v2/<api_key>',
        tags: ['mainnet', 'side'],
    },
    {
        name: 'fantom',
        address: '0x1a44076050125825900e736c501f859c50fE728c',
        chainId: EChainID.FANTOM,
        lzChainId: NETWORK_MAPPING_CHAIN_TO_LZ[EChainID.FANTOM],
        rpc: 'https://rpc.ftm.tools/',
        tags: ['mainnet', 'side'],
    },
] as const;

export default SUPPORTED_CHAINS;

export type TSupportedChain = {
    name: string;
    address: string;
    chainId: string;
    lzChainId: string;
};

const SUPPORTED_CHAINS: TSupportedChain[] = [
    {
        name: 'rinkeby',
        address: '0x79a63d6d8BBD5c6dfc774dA79bCcD948EAcb53FA',
        chainId: '4',
        lzChainId: '10001',
    },
    {
        name: 'mumbai',
        address: '0xf69186dfBa60DdB133E91E9A4B5673624293d8F8',
        chainId: '80001',
        lzChainId: '10009',
    },
];

export default SUPPORTED_CHAINS;

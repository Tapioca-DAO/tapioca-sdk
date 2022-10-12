const SUPPORTED_CHAINS = [
    {
        name: 'optimism',
        address: '0x3c2269811836af69497E5F486A85D7316753cf62',
        chainId: '10',
        lzChainId: '11',
    },
    {
        name: 'goerli',
        address: '0xbfD2135BFfbb0B5378b56643c2Df8a87552Bfa23',
        chainId: '5',
        lzChainId: '10121',
    },
    {
        name: 'mumbai',
        address: '0xf69186dfBa60DdB133E91E9A4B5673624293d8F8',
        chainId: '80001',
        lzChainId: '10009',
    },
] as const;

export default SUPPORTED_CHAINS;

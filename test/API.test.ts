import { expect } from 'chai';
import { getLZEndpointBy } from '../api/utils';

describe('API', () => {
    describe('utils', () => {
        const rinkebyInfo = {
            name: 'rinkeby',
            address: '0x79a63d6d8BBD5c6dfc774dA79bCcD948EAcb53FA',
            chainId: '4',
            lzChainId: '10001',
        };
        it('Should get the chain info for a given chain id', () => {
            const chainId = '4';
            const chainInfo = getLZEndpointBy('chainId', chainId);
            expect(chainInfo).to.to.deep.equal(rinkebyInfo);
        });
        it('Should get the chain info for a given lzChainId', () => {
            const lzChainId = '10001';
            const chainInfo = getLZEndpointBy('lzChainId', lzChainId);
            expect(chainInfo).to.to.deep.equal(rinkebyInfo);
        });
        it('Should get the chain info for a given chain name', () => {
            const chainName = 'rinkeby';
            const chainInfo = getLZEndpointBy('name', chainName);
            expect(chainInfo).to.to.deep.equal(rinkebyInfo);
        });
    });
});

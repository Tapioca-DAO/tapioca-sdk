import _find from 'lodash/find';
import LZ_ENDPOINTS from '../src/LZ_ENDPOINTS';

export const getLZEndpointBy = (
    getBy: 'chainId' | 'lzChainId' | 'name',
    value: keyof typeof LZ_ENDPOINTS | string,
) => {
    return _find(LZ_ENDPOINTS, (e) => e[getBy] === value);
};

export const getLZEndpoints = () => LZ_ENDPOINTS;

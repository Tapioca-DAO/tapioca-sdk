import _find from 'lodash/find';
import _pick from 'lodash/pick';
import SUPPORTED_CHAINS from '../SUPPORTED_CHAINS';

/**
 * Returns a list of supported LZ chain IDs
 **/
export const getLZChainIDs = () => _pick(SUPPORTED_CHAINS, ['lzChainId']);
/**
 * Returns a list of supported EVM chain IDs
 **/
export const getChainIDs = () => _pick(SUPPORTED_CHAINS, ['chainId']);

/**
 * Returns a chain info for a given `chainId` or `lzChainId` or `name`.
 * @param getBy - The filter to use.
 * @param value - The value to filter by.
 **/
export const getChainBy = (
    getBy: 'chainId' | 'lzChainId' | 'name',
    value: keyof typeof SUPPORTED_CHAINS | string,
) => {
    return _find(SUPPORTED_CHAINS, (e) => e[getBy] === value);
};

/**
 * Returns the object containing the chain info.
 **/
export const getLZChain = () => SUPPORTED_CHAINS;

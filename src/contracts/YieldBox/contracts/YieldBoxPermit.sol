// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./interfaces/IYieldBox.sol";

/**
 * Modification of the OpenZeppelin ERC20Permit contract to support ERC721 tokens.
 * OpenZeppelin Contracts (last updated v4.8.0) (token/ERC20/extensions/draft-ERC20Permit.sol).
 *
 * @dev Implementation of the ERC-4494 Permit extension allowing approvals to be made via signatures, as defined in
 * https://eips.ethereum.org/EIPS/eip-4494[EIP-4494].
 *
 * Adds the {permit} method, which can be used to change an account's ERC721 allowance (see {IERC721-allowance}) by
 * presenting a message signed by the account. By not relying on `{IERC721-approve}`, the token holder account doesn't
 * need to send a transaction, and thus is not required to hold Ether at all.
 */
abstract contract YieldBoxPermit is EIP712 {
    using Counters for Counters.Counter;

    mapping(address => Counters.Counter) private _nonces;

    bytes32 private constant _PERMIT_TYPEHASH =
        keccak256("Permit(address owner,address spender,uint256 assetId,uint256 nonce,uint256 deadline)");

    bytes32 private constant _PERMIT_ALL_TYPEHASH = keccak256("PermitAll(address owner,address spender,uint256 nonce,uint256 deadline)");

    /**
     * @dev Initializes the {EIP712} domain separator using the `name` parameter, and setting `version` to `"1"`.
     *
     * It's a good idea to use the same `name` that is defined as the ERC721 token name.
     */
    constructor(string memory name) EIP712(name, "1") {}

    function permit(address owner, address spender, uint256 assetId, uint256 deadline, uint8 v, bytes32 r, bytes32 s) public virtual {
        _permit(owner, spender, assetId, deadline, v, r, s, true);
    }

    function revoke(address owner, address spender, uint256 assetId, uint256 deadline, uint8 v, bytes32 r, bytes32 s) public virtual {
        _permit(owner, spender, assetId, deadline, v, r, s, false);
    }

    function _permit(address owner, address spender, uint256 assetId, uint256 deadline, uint8 v, bytes32 r, bytes32 s, bool state) private {
        require(block.timestamp <= deadline, "YieldBoxPermit: expired deadline");

        bytes32 structHash = keccak256(abi.encode(_PERMIT_TYPEHASH, owner, spender, assetId, _useNonce(owner), deadline));

        bytes32 hash = _hashTypedDataV4(structHash);

        address signer = ECDSA.recover(hash, v, r, s);
        require(signer == owner, "YieldBoxPermit: invalid signature");

        _setApprovalForAsset(owner, spender, assetId, state);
    }

    function _setApprovalForAsset(address owner, address spender, uint256 assetId, bool approved) internal virtual;

    function permitAll(address owner, address spender, uint256 deadline, uint8 v, bytes32 r, bytes32 s) public virtual {
        _permitAll(owner, spender, deadline, v, r, s, true);
    }

    function revokeAll(address owner, address spender, uint256 deadline, uint8 v, bytes32 r, bytes32 s) public virtual {
        _permitAll(owner, spender, deadline, v, r, s, false);
    }

    function _permitAll(address owner, address spender, uint256 deadline, uint8 v, bytes32 r, bytes32 s, bool state) private {
        require(block.timestamp <= deadline, "YieldBoxPermit: expired deadline");

        bytes32 structHash = keccak256(abi.encode(_PERMIT_ALL_TYPEHASH, owner, spender, _useNonce(owner), deadline));

        bytes32 hash = _hashTypedDataV4(structHash);

        address signer = ECDSA.recover(hash, v, r, s);
        require(signer == owner, "YieldBoxPermit: invalid signature");

        _setApprovalForAll(owner, spender, state);
    }

    function _setApprovalForAll(address _owner, address operator, bool approved) internal virtual;

    /**
     * @dev See {IERC20Permit-nonces}.
     */
    function nonces(address owner) public view virtual returns (uint256) {
        return _nonces[owner].current();
    }

    /**
     * @dev See {IERC20Permit-DOMAIN_SEPARATOR}.
     */
    // solhint-disable-next-line func-name-mixedcase
    function DOMAIN_SEPARATOR() external view returns (bytes32) {
        return _domainSeparatorV4();
    }

    /**
     * @dev "Consume a nonce": return the current value and increment.
     *
     */
    function _useNonce(address owner) internal virtual returns (uint256 current) {
        Counters.Counter storage nonce = _nonces[owner];
        current = nonce.current();
        nonce.increment();
    }
}

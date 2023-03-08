// SPDX-License-Identifier: UNLICENSED

// The YieldBox
// The original BentoBox is owned by the Sushi team to set strategies for each token. Abracadabra wanted different strategies, which led to
// them launching their own DegenBox. The YieldBox solves this by allowing an unlimited number of strategies for each token in a fully
// permissionless manner. The YieldBox has no owner and operates fully permissionless.

// Other improvements:
// Better system to make sure the token to share ratio doesn't reset.
// Full support for rebasing tokens.

// This contract stores funds, handles their transfers, approvals and strategies.

// Copyright (c) 2021, 2022 BoringCrypto - All rights reserved
// Twitter: @Boring_Crypto

// Since the contract is permissionless, only one deployment per chain is needed. If it's not yet deployed
// on a chain or if you want to make a derivative work, contact @BoringCrypto. The core of YieldBox is
// copyrighted. Most of the contracts that it builds on are open source though.

// BEWARE: Still under active development
// Security review not done yet

pragma solidity ^0.8.9;
pragma experimental ABIEncoderV2;
import "./interfaces/IWrappedNative.sol";
import "./interfaces/IStrategy.sol";
import "@boringcrypto/boring-solidity/contracts/interfaces/IERC721.sol";
import "@boringcrypto/boring-solidity/contracts/interfaces/IERC1155.sol";
import "@boringcrypto/boring-solidity/contracts/libraries/Base64.sol";
import "@boringcrypto/boring-solidity/contracts/Domain.sol";
import "./ERC721TokenReceiver.sol";
import "./ERC1155TokenReceiver.sol";
import "./ERC1155.sol";
import "@boringcrypto/boring-solidity/contracts/BoringBatchable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./AssetRegister.sol";
import "./NativeTokenFactory.sol";
import "./YieldBoxRebase.sol";
import "./YieldBoxURIBuilder.sol";
import "./YieldBoxPermit.sol";

// solhint-disable no-empty-blocks

/// @title YieldBox
/// @author BoringCrypto, Keno
/// @notice The YieldBox is a vault for tokens. The stored tokens can assigned to strategies.
/// Yield from this will go to the token depositors.
/// Any funds transfered directly onto the YieldBox will be lost, use the deposit function instead.
contract YieldBox is YieldBoxPermit, BoringBatchable, NativeTokenFactory, ERC721TokenReceiver, ERC1155TokenReceiver {
    // ******************* //
    // *** CONSTRUCTOR *** //
    // ******************* //
    using BoringAddress for address;
    using BoringERC20 for IERC20;
    using BoringERC20 for IWrappedNative;
    using YieldBoxRebase for uint256;

    // ************** //
    // *** EVENTS *** //
    // ************** //
    event Deposited(
        address indexed sender,
        address indexed from,
        address indexed to,
        uint256 assetId,
        uint256 amountIn,
        uint256 shareIn,
        uint256 amountOut,
        uint256 shareOut,
        bool isNFT
    );

    event Withdraw(
        address indexed sender,
        address indexed from,
        address indexed to,
        uint256 assetId,
        uint256 amountIn,
        uint256 shareIn,
        uint256 amountOut,
        uint256 shareOut
    );

    // ******************* //
    // *** CONSTRUCTOR *** //
    // ******************* //
    IWrappedNative public immutable wrappedNative;
    YieldBoxURIBuilder public immutable uriBuilder;

    constructor(IWrappedNative wrappedNative_, YieldBoxURIBuilder uriBuilder_) YieldBoxPermit("YieldBox") {
        wrappedNative = wrappedNative_;
        uriBuilder = uriBuilder_;
    }

    // ************************** //
    // *** INTERNAL FUNCTIONS *** //
    // ************************** //

    /// @dev Returns the total balance of `token` the strategy contract holds,
    /// plus the total amount this contract thinks the strategy holds.
    function _tokenBalanceOf(Asset storage asset) internal view returns (uint256 amount) {
        return asset.strategy.currentBalance();
    }

    // ************************ //
    // *** PUBLIC FUNCTIONS *** //
    // ************************ //

    /// @notice Deposit an amount of `token` represented in either `amount` or `share`.
    /// @param assetId The id of the asset.
    /// @param from which account to pull the tokens.
    /// @param to which account to push the tokens.
    /// @param amount Token amount in native representation to deposit.
    /// @param share Token amount represented in shares to deposit. Takes precedence over `amount`.
    /// @return amountOut The amount deposited.
    /// @return shareOut The deposited amount repesented in shares.
    function depositAsset(
        uint256 assetId,
        address from,
        address to,
        uint256 amount,
        uint256 share
    ) public allowed(from, assetId) returns (uint256 amountOut, uint256 shareOut) {
        // Checks
        Asset storage asset = assets[assetId];
        require(asset.tokenType != TokenType.Native && asset.tokenType != TokenType.ERC721, "YieldBox: can't deposit type");

        // Effects
        uint256 totalAmount = _tokenBalanceOf(asset);
        if (share == 0) {
            // value of the share may be lower than the amount due to rounding, that's ok
            share = amount._toShares(totalSupply[assetId], totalAmount, false);
        } else {
            // amount may be lower than the value of share due to rounding, in that case, add 1 to amount (Always round up)
            amount = share._toAmount(totalSupply[assetId], totalAmount, true);
        }

        _mint(to, assetId, share);

        // Interactions
        if (asset.tokenType == TokenType.ERC20) {
            // For ERC20 tokens, use the safe helper function to deal with broken ERC20 implementations. This actually calls transferFrom on the ERC20 contract.
            IERC20(asset.contractAddress).safeTransferFrom(from, address(asset.strategy), amount);
        } else {
            // ERC1155
            // When depositing yieldBox tokens into the yieldBox, things can be simplified
            if (asset.contractAddress == address(this)) {
                _transferSingle(from, address(asset.strategy), asset.tokenId, amount);
            } else {
                IERC1155(asset.contractAddress).safeTransferFrom(from, address(asset.strategy), asset.tokenId, amount, "");
            }
        }

        asset.strategy.deposited(amount);

        emit Deposited(msg.sender, from, to, assetId, amount, share, amountOut, shareOut, false);

        return (amount, share);
    }

    /// @notice Deposit an NFT asset
    /// @param assetId The id of the asset.
    /// @param from which account to pull the tokens.
    /// @param to which account to push the tokens.
    /// @return amountOut The amount deposited.
    /// @return shareOut The deposited amount repesented in shares.
    function depositNFTAsset(
        uint256 assetId,
        address from,
        address to
    ) public allowed(from, assetId) returns (uint256 amountOut, uint256 shareOut) {
        // Checks
        Asset storage asset = assets[assetId];
        require(asset.tokenType == TokenType.ERC721, "YieldBox: not ERC721");

        // Effects
        _mint(to, assetId, 1);

        // Interactions
        IERC721(asset.contractAddress).safeTransferFrom(from, address(asset.strategy), asset.tokenId);

        asset.strategy.deposited(1);

        emit Deposited(msg.sender, from, to, assetId, 1, 1, 1, 1, true);

        return (1, 1);
    }

    /// @notice Deposit ETH asset
    /// @param assetId The id of the asset.
    /// @param to which account to push the tokens.
    /// @param amount ETH amount to deposit.
    /// @return amountOut The amount deposited.
    /// @return shareOut The deposited amount repesented in shares.
    function depositETHAsset(
        uint256 assetId,
        address to,
        uint256 amount
    ) public payable returns (uint256 amountOut, uint256 shareOut) {
        // Checks
        Asset storage asset = assets[assetId];
        require(asset.tokenType == TokenType.ERC20 && asset.contractAddress == address(wrappedNative), "YieldBox: not wrappedNative");

        // Effects
        uint256 share = amount._toShares(totalSupply[assetId], _tokenBalanceOf(asset), false);

        _mint(to, assetId, share);

        // Interactions
        wrappedNative.deposit{ value: amount }();
        // Strategies always receive wrappedNative (supporting both wrapped and raw native tokens adds too much complexity)
        wrappedNative.safeTransfer(address(asset.strategy), amount);
        asset.strategy.deposited(amount);

        emit Deposited(msg.sender, msg.sender, to, assetId, amount, share, amountOut, shareOut, false);

        return (amount, share);
    }

    /// @notice Withdraws an amount of `token` from a user account.
    /// @param assetId The id of the asset.
    /// @param from which user to pull the tokens.
    /// @param to which user to push the tokens.
    /// @param amount of tokens. Either one of `amount` or `share` needs to be supplied.
    /// @param share Like above, but `share` takes precedence over `amount`.
    function withdraw(
        uint256 assetId,
        address from,
        address to,
        uint256 amount,
        uint256 share
    ) public allowed(from, assetId) returns (uint256 amountOut, uint256 shareOut) {
        // Checks
        Asset storage asset = assets[assetId];
        require(asset.tokenType != TokenType.Native, "YieldBox: can't withdraw Native");

        // Handle ERC721 separately
        if (asset.tokenType == TokenType.ERC721) {
            return _withdrawNFT(asset, assetId, from, to);
        }

        return _withdrawFungible(asset, assetId, from, to, amount, share);
    }

    /// @notice Handles burning and withdrawal of ERC20 and 1155 tokens.
    /// @param asset The asset to withdraw.
    /// @param assetId The id of the asset.
    /// @param from which user to pull the tokens.
    /// @param to which user to push the tokens.
    function _withdrawNFT(
        Asset storage asset,
        uint256 assetId,
        address from,
        address to
    ) internal returns (uint256 amountOut, uint256 shareOut) {
        _burn(from, assetId, 1);

        // Interactions
        asset.strategy.withdraw(to, 1);

        emit Withdraw(msg.sender, from, to, assetId, 1, 1, 1, 1);

        return (1, 1);
    }

    /// @notice Handles burning and withdrawal of ERC20 and 1155 tokens.
    /// @param asset The asset to withdraw.
    /// @param assetId The id of the asset.
    /// @param from which user to pull the tokens.
    /// @param to which user to push the tokens.
    /// @param amount of tokens. Either one of `amount` or `share` needs to be supplied.
    /// @param share Like above, but `share` takes precedence over `amount`.
    function _withdrawFungible(
        Asset storage asset,
        uint256 assetId,
        address from,
        address to,
        uint256 amount,
        uint256 share
    ) internal returns (uint256 amountOut, uint256 shareOut) {
        // Effects
        uint256 totalAmount = _tokenBalanceOf(asset);
        if (share == 0) {
            // value of the share paid could be lower than the amount paid due to rounding, in that case, add a share (Always round up)
            share = amount._toShares(totalSupply[assetId], totalAmount, true);
        } else {
            // amount may be lower than the value of share due to rounding, that's ok
            amount = share._toAmount(totalSupply[assetId], totalAmount, false);
        }

        _burn(from, assetId, share);

        // Interactions
        asset.strategy.withdraw(to, amount);

        emit Withdraw(msg.sender, from, to, assetId, amount, share, amountOut, shareOut);

        return (amount, share);
    }

    /// @notice Transfer shares from a user account to another one.
    /// @param from which user to pull the tokens.
    /// @param to which user to push the tokens.
    /// @param assetId The id of the asset.
    /// @param share The amount of `token` in shares.
    function transfer(
        address from,
        address to,
        uint256 assetId,
        uint256 share
    ) public allowed(from, assetId) {
        _transferSingle(from, to, assetId, share);
    }

    function batchTransfer(
        address from,
        address to,
        uint256[] calldata assetIds_,
        uint256[] calldata shares_
    ) public allowed(from, type(uint256).max) {
        _transferBatch(from, to, assetIds_, shares_);
    }

    /// @notice Transfer shares from a user account to multiple other ones.
    /// @param assetId The id of the asset.
    /// @param from which user to pull the tokens.
    /// @param tos The receivers of the tokens.
    /// @param shares The amount of `token` in shares for each receiver in `tos`.
    function transferMultiple(
        address from,
        address[] calldata tos,
        uint256 assetId,
        uint256[] calldata shares
    ) public allowed(from, type(uint256).max) {
        // Checks
        uint256 len = tos.length;
        for (uint256 i = 0; i < len; i++) {
            require(tos[i] != address(0), "YieldBox: to not set"); // To avoid a bad UI from burning funds
        }

        // Effects
        uint256 totalAmount;
        for (uint256 i = 0; i < len; i++) {
            address to = tos[i];
            uint256 share_ = shares[i];
            balanceOf[to][assetId] += share_;
            totalAmount += share_;
            emit TransferSingle(msg.sender, from, to, assetId, share_);
        }
        balanceOf[from][assetId] -= totalAmount;
    }

    /// @notice Update approval status for an operator
    /// @param operator The address approved to perform actions on your behalf
    /// @param approved True/False
    function setApprovalForAll(address operator, bool approved) external override {
        // Checks
        require(operator != address(0), "YieldBox: operator not set"); // Important for security
        require(operator != address(this), "YieldBox: can't approve yieldBox");

        // Effects
        _setApprovalForAll(msg.sender, operator, approved);
    }

    /// @notice Update approval status for an operator
    /// @param _owner The YieldBox account owner
    /// @param operator The address approved to perform actions on your behalf
    /// @param approved True/False
    function _setApprovalForAll(
        address _owner,
        address operator,
        bool approved
    ) internal override{
        isApprovedForAll[_owner][operator] = approved;
        emit ApprovalForAll(_owner, operator, approved);
    }

    /// @notice Update approval status for an operator and for a specific asset
    /// @param operator The address approved to perform actions on your behalf
    /// @param assetId The asset id  to update approval status for
    /// @param approved True/False
    function setApprovalForAsset(
        address operator,
        uint256 assetId,
        bool approved
    ) external override {
        // Checks
        require(operator != address(0), "YieldBox: operator not set"); // Important for security
        require(operator != address(this), "YieldBox: can't approve yieldBox");
        require(assetId < assetCount(), "YieldBox: asset not valid");

        // Effects
        _setApprovalForAsset(msg.sender, operator, assetId, approved);
    }

    /// @notice Update approval status for an operator and for a specific asset
    /// @param _owner The owner of the asset
    /// @param operator The address approved to perform actions on your behalf
    /// @param assetId The asset id  to update approval status for
    /// @param approved True/False
    function _setApprovalForAsset(
        address _owner,
        address operator,
        uint256 assetId,
        bool approved
    ) internal override {
        isApprovedForAsset[_owner][operator][assetId] = approved;
        emit ApprovalForAsset(_owner, operator, assetId, approved);
    }

    // This functionality has been split off into a separate contract. This is only a view function, so gas usage isn't a huge issue.
    // This keeps the YieldBox contract smaller, so it can be optimized more.
    function uri(uint256 assetId) external view override returns (string memory) {
        return uriBuilder.uri(assets[assetId], nativeTokens[assetId], totalSupply[assetId], owner[assetId]);
    }

    function name(uint256 assetId) external view returns (string memory) {
        return uriBuilder.name(assets[assetId], nativeTokens[assetId].name);
    }

    function symbol(uint256 assetId) external view returns (string memory) {
        return uriBuilder.symbol(assets[assetId], nativeTokens[assetId].symbol);
    }

    function decimals(uint256 assetId) external view returns (uint8) {
        return uriBuilder.decimals(assets[assetId], nativeTokens[assetId].decimals);
    }

    // Helper functions

    /// @notice Helper function to return totals for an asset
    /// @param assetId The regierestered asset id
    /// @return totalShare The total amount for asset represented in shares
    /// @return totalAmount The total amount for asset
    function assetTotals(uint256 assetId) external view returns (uint256 totalShare, uint256 totalAmount) {
        totalShare = totalSupply[assetId];
        totalAmount = _tokenBalanceOf(assets[assetId]);
    }

    /// @dev Helper function to represent an `amount` of `token` in shares.
    /// @param assetId The id of the asset.
    /// @param amount The `token` amount.
    /// @param roundUp If the result `share` should be rounded up.
    /// @return share The token amount represented in shares.
    function toShare(
        uint256 assetId,
        uint256 amount,
        bool roundUp
    ) external view returns (uint256 share) {
        if (assets[assetId].tokenType == TokenType.Native || assets[assetId].tokenType == TokenType.ERC721) {
            share = amount;
        } else {
            share = amount._toShares(totalSupply[assetId], _tokenBalanceOf(assets[assetId]), roundUp);
        }
    }

    /// @dev Helper function represent shares back into the `token` amount.
    /// @param assetId The id of the asset.
    /// @param share The amount of shares.
    /// @param roundUp If the result should be rounded up.
    /// @return amount The share amount back into native representation.
    function toAmount(
        uint256 assetId,
        uint256 share,
        bool roundUp
    ) external view returns (uint256 amount) {
        if (assets[assetId].tokenType == TokenType.Native || assets[assetId].tokenType == TokenType.ERC721) {
            amount = share;
        } else {
            amount = share._toAmount(totalSupply[assetId], _tokenBalanceOf(assets[assetId]), roundUp);
        }
    }

    /// @dev Helper function represent the balance in `token` amount for a `user` for an `asset`.
    /// @param user The `user` to get the amount for.
    /// @param assetId The id of the asset.
    function amountOf(address user, uint256 assetId) external view returns (uint256 amount) {
        if (assets[assetId].tokenType == TokenType.Native || assets[assetId].tokenType == TokenType.ERC721) {
            amount = balanceOf[user][assetId];
        } else {
            amount = balanceOf[user][assetId]._toAmount(totalSupply[assetId], _tokenBalanceOf(assets[assetId]), false);
        }
    }

    /// @notice Helper function to register & deposit an asset
    /// @param tokenType Registration token type.
    /// @param contractAddress Token address.
    /// @param strategy Asset's strategy address.
    /// @param tokenId Registration token id.
    /// @param from which user to pull the tokens.
    /// @param to which account to push the tokens.
    /// @param amount amount to deposit.
    /// @param share amount to deposit represented in shares.
    /// @return amountOut The amount deposited.
    /// @return shareOut The deposited amount repesented in shares.
    function deposit(
        TokenType tokenType,
        address contractAddress,
        IStrategy strategy,
        uint256 tokenId,
        address from,
        address to,
        uint256 amount,
        uint256 share
    ) public returns (uint256 amountOut, uint256 shareOut) {
        if (tokenType == TokenType.Native) {
            // If native token, register it as an ERC1155 asset (as that's what it is)
            return depositAsset(registerAsset(TokenType.ERC1155, address(this), strategy, tokenId), from, to, amount, share);
        } else {
            return depositAsset(registerAsset(tokenType, contractAddress, strategy, tokenId), from, to, amount, share);
        }
    }

    /// @notice Helper function to register & deposit ETH
    /// @param strategy Asset's strategy address.
    /// @param amount amount to deposit.
    /// @return amountOut The amount deposited.
    /// @return shareOut The deposited amount repesented in shares.
    function depositETH(
        IStrategy strategy,
        address to,
        uint256 amount
    ) public payable returns (uint256 amountOut, uint256 shareOut) {
        return depositETHAsset(registerAsset(TokenType.ERC20, address(wrappedNative), strategy, 0), to, amount);
    }
}

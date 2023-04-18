/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  SGLStorage,
  SGLStorageInterface,
} from "../../singularity/SGLStorage";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
    ],
    name: "NotApproved",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "ApprovalBorrow",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "old",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_new",
        type: "address",
      },
    ],
    name: "ConservatorUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "accruedAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feeFraction",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "rate",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "utilization",
        type: "uint256",
      },
    ],
    name: "LogAccrue",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "share",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fraction",
        type: "uint256",
      },
    ],
    name: "LogAddAsset",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "share",
        type: "uint256",
      },
    ],
    name: "LogAddCollateral",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
    ],
    name: "LogApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feeAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "part",
        type: "uint256",
      },
    ],
    name: "LogBorrow",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_oldVal",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_newVal",
        type: "uint256",
      },
    ],
    name: "LogBorrowCapUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    name: "LogExchangeRate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "share",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fraction",
        type: "uint256",
      },
    ],
    name: "LogRemoveAsset",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "share",
        type: "uint256",
      },
    ],
    name: "LogRemoveCollateral",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "part",
        type: "uint256",
      },
    ],
    name: "LogRepay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "feeTo",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feesEarnedFraction",
        type: "uint256",
      },
    ],
    name: "LogWithdrawFees",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "feeShares",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ethAmount",
        type: "uint256",
      },
    ],
    name: "LogYieldBoxFeesDeposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "oldState",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "newState",
        type: "bool",
      },
    ],
    name: "PausedUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "accrueInfo",
    outputs: [
      {
        internalType: "uint64",
        name: "interestPerSecond",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "lastAccrued",
        type: "uint64",
      },
      {
        internalType: "uint128",
        name: "feesEarnedFraction",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowanceBorrow",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approveBorrow",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "asset",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "assetId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "borrowOpeningFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "callerFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "closedCollateralizationRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "collateral",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "collateralId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "conservator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "exchangeRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidationBonusAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidationMultiplier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidationQueue",
    outputs: [
      {
        internalType: "contract ILiquidationQueue",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lqCollateralizationRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxLiquidatorReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minLiquidatorReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oracle",
    outputs: [
      {
        internalType: "contract IOracle",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oracleData",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "orderBookLiquidationMultiplier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "penrose",
    outputs: [
      {
        internalType: "contract IPenrose",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permitBorrow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "protocolFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalAsset",
    outputs: [
      {
        internalType: "uint128",
        name: "elastic",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "base",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalBorrow",
    outputs: [
      {
        internalType: "uint128",
        name: "elastic",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "base",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalBorrowCap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalCollateralShare",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "direct",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "renounce",
        type: "bool",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userBorrowPart",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userCollateralShare",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "yieldBox",
    outputs: [
      {
        internalType: "contract YieldBox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x61014080604052346101f857610014816101fd565b60138152602081017f546170696f63612053696e67756c6172697479000000000000000000000000008152602060405161004d816101fd565b6001815201603160f81b8152600160009233828060a01b03198554161784556040519433857f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a351902091208160e052610100938185524660a05260208101917f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f93848452604083015260608201524660808201523060a082015260a0815260c081019381851060018060401b038611176101e45750836040525190206080523060c0526101209081527f0bd4060688a1800ae986e4840aebc924bb40b5bf44de4583df2257220b54b77c6015557f7d1dc38e60930664f8cbf495da6556ca091d2f92d6550877750c049864b182306016556103e880601c556127109081601d556032601e556201b580601f556201f018602055620124f86021556161a860225560235580602455602555670de0b6b3a7640000602655611bef928361022f843960805183611830015260a051836118fc015260c05183611801015260e0518361187f015251826118a50152518161185c0152f35b634e487b7160e01b81526041600452602490fd5b600080fd5b604081019081106001600160401b0382111761021857604052565b634e487b7160e01b600052604160045260246000fdfe608060408181526004918236101561001657600080fd5b600092833560e01c918262a02a20146112645750816306fdde0314611135578163078dfbe714610fdc578163095ea7b314610fb257816318160ddd14610f905781631c9e379b14610f595781631da8bf1014610e9b5781631e7ce44814610e7d57816323b872dd14610cac57838263313ce56714610c0f5750816334d441d014610bf05781633644e51514610bcc57816338d52e0f14610ba45781633ba0b9a914610b8557816340626d8b14610b6657816344de240a14610b47578163473e3ce714610b2857816348e4163e14610af15781634d7f2a3414610ad25781634e71e0c814610a15578163529898f2146109f657816357935462146109d75781635c975abb146109b35781636c3d8b8f1461098b57816370a082311461095457816374645ff3146109165781637dc0d1d0146108ee5781637ecebe00146108b75781637fa0b84e146108865781638285ef401461084a5781638c5d0ed31461082b5781638da5cb5b14610805578163959916dc146107e657816395d89b41146106bc578163a9059cbb146105e0578163b0e21e8a146105c1578163b27c0e7414610585578163c23ea21f1461055d578163c9621f3b1461053e578163ce8849ed14610513578163d505accf14610377578163d8dfeb451461034f578163dd62ed3e1461030257508063de406577146102db578063e0996cb6146102bd578063e30c397814610296578063eec0f42e146102785763f9557ccb1461023657600080fd5b3461027457816003193601126102745760115490516fffffffffffffffffffffffffffffffff8216815260809190911c6020820152604090f35b0390f35b5080fd5b5034610274578160031936011261027457602090600d549051908152f35b50346102745781600319360112610274576020906001600160a01b03600154169051908152f35b50346102745781600319360112610274576020906025549051908152f35b50346102745781600319360112610274576020906001600160a01b03600954169051908152f35b90503461034b578160031936011261034b5760209282916103216112aa565b6103296112c5565b916001600160a01b038092168452865283832091168252845220549051908152f35b8280fd5b5050346102745781600319360112610274576020906001600160a01b03600b54169051908152f35b839150346102745761038836611323565b908397949796959642116104d0576001600160a01b039283871694858b5260066020528b8b2080549060001982146104bd57878b8f9294848f61045d999760016104659c9a980190558b86519460208601967f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9885288870152166060850152608084015260a083015260c082015260c081526104238161144a565b51902061042e6117f7565b915190602082019261190160f01b845260228301526042820152604281526104558161147c565b519020611768565b91909161164e565b160361047a575061047793945061159e565b80f35b606490602087519162461bcd60e51b8352820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152fd5b634e487b7160e01b8d526011895260248dfd5b895162461bcd60e51b8152602081870152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606490fd5b5050346102745781600319360112610274576020906001600160a01b03600f5460081c169051908152f35b5050346102745781600319360112610274576020906021549051908152f35b5050346102745781600319360112610274576020906001600160a01b03600a54169051908152f35b5050346102745781600319360112610274576060906007549080519167ffffffffffffffff808216845281831c16602084015260801c90820152f35b505034610274578160031936011261027457602090601d549051908152f35b5050346102745780600319360112610274576020916001600160a01b036106056112aa565b836024359384158015906106b1575b61064c575b505192835216907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef843392a35160018152f35b3381526003875281812054610663868210156114d6565b8484169086823303610678575b505050610619565b61068c91610687841515611522565b61156e565b33835260038952838320558152206106a5848254611591565b90558338808086610670565b508383163314610614565b8383346102745781600319360112610274576001600160a01b03926106e484600b54166119ef565b6106f185600c54166119ef565b94601a541693835163634ce26b60e11b815281816020978887830152818061071b60248201611372565b03915afa9182156107db5792602492610270969592856107a996926107b8575b5050855198899261746d60f01b8a85015261075f815180928c6022880191016112db565b8301602f60f81b602282015261077e825180938c6023850191016112db565b01602d60f81b602382015261079b825180938b88850191016112db565b0103908101875201856114b4565b519282849384528301906112fe565b6107d492503d8091833e6107cc81836114b4565b81019061193e565b898061073b565b8551903d90823e3d90fd5b505034610274578160031936011261027457602090601e549051908152f35b5050346102745781600319360112610274576001600160a01b0360209254169051908152f35b5050346102745781600319360112610274576020906023549051908152f35b50503461027457816003193601126102745760125490516fffffffffffffffffffffffffffffffff8216815260809190911c6020820152604090f35b5050346102745780600319360112610274576020906108b06108a66112aa565b60243590336115f6565b5160018152f35b50503461027457602036600319011261027457806020926001600160a01b036108de6112aa565b1681526006845220549051908152f35b5050346102745781600319360112610274576020906001600160a01b03601a54169051908152f35b5050346102745781600319360112610274578051610270916109428261093b81611372565b03836114b4565b519182916020835260208301906112fe565b50503461027457602036600319011261027457806020926001600160a01b0361097b6112aa565b1681526003845220549051908152f35b5050346102745781600319360112610274576020906001600160a01b03600854169051908152f35b50503461027457816003193601126102745760209060ff600f541690519015158152f35b5050346102745781600319360112610274576020906024549051908152f35b505034610274578160031936011261027457602090601f549051908152f35b9190503461034b578260031936011261034b57600154906001600160a01b039283831691823303610a8f5750508084549384167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08680a373ffffffffffffffffffffffffffffffffffffffff199283161783551660015580f35b906020606492519162461bcd60e51b8352820152602060248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152fd5b5050346102745781600319360112610274576020906022549051908152f35b50503461027457602036600319011261027457806020926001600160a01b03610b186112aa565b1681526018845220549051908152f35b5050346102745781600319360112610274576020906010549051908152f35b505034610274578160031936011261027457602090600e549051908152f35b5050346102745781600319360112610274576020906013549051908152f35b5050346102745781600319360112610274576020906019549051908152f35b5050346102745781600319360112610274576020906001600160a01b03600c54169051908152f35b505034610274578160031936011261027457602090610be96117f7565b9051908152f35b505034610274578160031936011261027457602090601c549051908152f35b91503461027457816003193601126102745781906001600160a01b03600c5416908451602081019163313ce56760e01b83528152610c4c81611498565b51915afa610c586119a0565b9080610ca1575b15610c925760208180518101031261034b57602001519160ff83168303610c8f575060ff602092915b5191168152f35b80fd5b506020915060ff601291610c88565b506020815114610c5f565b90503461034b57606036600319011261034b57610cc76112aa565b90610cd06112c5565b6044359182610d1d575b5060208095507fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9185519384526001600160a01b03809116941692a35160018152f35b6001600160a01b0380851690818852602090600382528789205490610d44878310156114d6565b851693848403610d58575b50505050610cda565b838a52808352888a20338b528352888a205460018101610dd3575b505097837fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef959360038a94610db28a60209e8f9a610687901515611522565b9285525283832055815220610dc8858254611591565b905591388080610d4f565b878110610e3a579360038a94610db28a60209e968f9a96610e16837fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9e9c61156e565b90878a528552898920338a52855289892055969e5050509450509395819550610d73565b895162461bcd60e51b8152808301859052601860248201527f45524332303a20616c6c6f77616e636520746f6f206c6f7700000000000000006044820152606490fd5b50503461027457816003193601126102745760209081549051908152f35b8391503461027457610eac36611323565b908397949796959642116104d0576001600160a01b039283871694858b5260066020528b8b2080549060001982146104bd57878b8f9294848f61045d99976001610f479c9a980190558b86519460208601967fe9685ff6d48c617fe4f692c50e602cce27cbad0290beb93cfa77eac43968d58c885288870152166060850152608084015260a083015260c082015260c081526104238161144a565b160361047a57506104779394506115f6565b50503461027457602036600319011261027457806020926001600160a01b03610f806112aa565b1681526017845220549051908152f35b50503461027457816003193601126102745760209060115460801c9051908152f35b5050346102745780600319360112610274576020906108b0610fd26112aa565b602435903361159e565b90503461034b57606036600319011261034b57610ff76112aa565b906024359283151584036111315760443592831515840361112d576001600160a01b03948587541633036110ea57859190156110d05716928315908115916110c8575b50156110855750508083549283167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a36001600160a01b03198092161782556001541660015580f35b906020606492519162461bcd60e51b8352820152601560248201527f4f776e61626c653a207a65726f206164647265737300000000000000000000006044820152fd5b90503861103a565b9350505050166001600160a01b0319600154161760015580f35b825162461bcd60e51b8152602081860181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606490fd5b8580fd5b8480fd5b9190503461034b578260031936011261034b576001600160a01b039261115e84600b5416611b8e565b9061116c85600c5416611b8e565b94601a5416818451809263355a219b60e21b825260208098830152818061119560248201611372565b03915afa91821561125957926107a9926036928561027097969261123e575b505084519788927f546170696f63612053696e67756c617269747920000000000000000000000000898501526111f3815180928b6034880191016112db565b8301602f60f81b6034820152611212825180938b6035850191016112db565b01602d60f81b603582015261122f825180938a87850191016112db565b010360168101875201856114b4565b61125292503d8091833e6107cc81836114b4565b38806111b4565b8451903d90823e3d90fd5b8490843461034b578060031936011261034b576020926112826112aa565b61128a6112c5565b6001600160a01b0391821683526005865283832091168252845220548152f35b600435906001600160a01b03821682036112c057565b600080fd5b602435906001600160a01b03821682036112c057565b60005b8381106112ee5750506000910152565b81810151838201526020016112de565b90602091611317815180928185528580860191016112db565b601f01601f1916010190565b60e09060031901126112c0576001600160a01b039060043582811681036112c0579160243590811681036112c05790604435906064359060843560ff811681036112c0579060a4359060c43590565b90600091601b549060019082821c91808416938415611440575b602094858510811461142a5784845290811561140d57506001146113b1575b50505050565b9293945090601b6000527f3ad8aa4f87544323a9d1e5dd902f40c356527a7955687113db5f9a85ad579dc192846000945b8386106113f95750505050010190388080806113ab565b8054858701830152940193859082016113e2565b60ff191685840152505090151560051b01019150388080806113ab565b634e487b7160e01b600052602260045260246000fd5b92607f169261138c565b60e0810190811067ffffffffffffffff82111761146657604052565b634e487b7160e01b600052604160045260246000fd5b6080810190811067ffffffffffffffff82111761146657604052565b6040810190811067ffffffffffffffff82111761146657604052565b90601f8019910116810190811067ffffffffffffffff82111761146657604052565b156114dd57565b60405162461bcd60e51b815260206004820152601660248201527f45524332303a2062616c616e636520746f6f206c6f77000000000000000000006044820152606490fd5b1561152957565b60405162461bcd60e51b815260206004820152601660248201527f45524332303a206e6f207a65726f2061646472657373000000000000000000006044820152606490fd5b9190820391821161157b57565b634e487b7160e01b600052601160045260246000fd5b9190820180921161157b57565b909160207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925916001600160a01b03809416938460005260048352604060002095169485600052825280604060002055604051908152a3565b909160207fe50de2333c10a9502fcb1d8ae13a51bbf423153dfc63c2b8997665b32154afc3916001600160a01b03809416938460005260058352604060002095169485600052825280604060002055604051908152a3565b6005811015611752578061165f5750565b600181036116ac5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606490fd5b600281036116f95760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b60031461170257565b60405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608490fd5b634e487b7160e01b600052602160045260246000fd5b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083116117eb5791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa156117de5781516001600160a01b038116156117d8579190565b50600190565b50604051903d90823e3d90fd5b50505050600090600390565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163014806118f9575b15611852577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f000000000000000000000000000000000000000000000000000000000000000082527f000000000000000000000000000000000000000000000000000000000000000060408201527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260a0815260c0810181811067ffffffffffffffff8211176114665760405251902090565b507f00000000000000000000000000000000000000000000000000000000000000004614611829565b67ffffffffffffffff811161146657601f01601f191660200190565b6020818303126112c05780519067ffffffffffffffff82116112c0570181601f820112156112c057805161197181611922565b9261197f60405194856114b4565b818452602082840101116112c05761199d91602080850191016112db565b90565b3d156119cb573d906119b182611922565b916119bf60405193846114b4565b82523d6000602084013e565b606090565b604051906119dd82611498565b60038252623f3f3f60e81b6020830152565b600080916040516001600160a01b0360208201916395d89b4160e01b835260048152611a1a81611498565b5192165afa611a276119a0565b9015611a365761199d90611a77565b5061199d6119d0565b908151811015611a50570160200190565b634e487b7160e01b600052603260045260246000fd5b60ff1660ff811461157b5760010190565b805160408110611a9557508060208061199d9351830101910161193e565b602092908303611b83576000805b60ff81168581109081611b64575b5015611ac557611ac090611a66565b611aa3565b9260ff80941692611ad584611922565b93611ae360405195866114b4565b808552611af2601f1991611922565b013687860137825b85811687811080611b47575b15611b3c57611b379190611b316001600160f81b0319611b268388611a3f565b5116871a9188611a3f565b53611a66565b611afa565b505094505050905090565b506001600160f81b0319611b5b8286611a3f565b51161515611b06565b6001600160f81b03199150611b799086611a3f565b5116151538611ab1565b91505061199d6119d0565b600080916040516001600160a01b0360208201916306fdde0360e01b835260048152611a1a8161149856fea2646970667358221220e0875729f6fe0098f541d30a9c5828f20c303e5f44710272647674b601d8b40564736f6c63430008120033";

type SGLStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SGLStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SGLStorage__factory extends ContractFactory {
  constructor(...args: SGLStorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "SGLStorage";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SGLStorage> {
    return super.deploy(overrides || {}) as Promise<SGLStorage>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SGLStorage {
    return super.attach(address) as SGLStorage;
  }
  override connect(signer: Signer): SGLStorage__factory {
    return super.connect(signer) as SGLStorage__factory;
  }
  static readonly contractName: "SGLStorage";

  public readonly contractName: "SGLStorage";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SGLStorageInterface {
    return new utils.Interface(_abi) as SGLStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SGLStorage {
    return new Contract(address, _abi, signerOrProvider) as SGLStorage;
  }
}

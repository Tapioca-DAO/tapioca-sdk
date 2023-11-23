/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  BalancerStrategy,
  BalancerStrategyInterface,
} from "../../../deprecated/balancer/BalancerStrategy";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IYieldBox",
        name: "_yieldBox",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_vault",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_poolId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_bal",
        type: "address",
      },
      {
        internalType: "address",
        name: "_helpers",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AmountDeposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AmountQueued",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AmountWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_old",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_new",
        type: "uint256",
      },
    ],
    name: "DepositThreshold",
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
        indexed: true,
        internalType: "uint256",
        name: "_count",
        type: "uint256",
      },
    ],
    name: "RewardTokens",
    type: "event",
  },
  {
    inputs: [],
    name: "bal",
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
    name: "cheapWithdrawable",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
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
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "compound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "compoundAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "contractAddress",
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
    name: "currentBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultSwapData",
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
    name: "depositThreshold",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposited",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "description_",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "emergencyWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "helpers",
    outputs: [
      {
        internalType: "contract IBalancerHelpers",
        name: "",
        type: "address",
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
        name: "name_",
        type: "string",
      },
    ],
    stateMutability: "pure",
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
    name: "pool",
    outputs: [
      {
        internalType: "contract IBalancerPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolId",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "rescueEth",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rewardTokens",
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
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "setDefaultSwapData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "setDepositThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_val",
        type: "uint256",
      },
    ],
    name: "setSlippage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_val",
        type: "uint256",
      },
    ],
    name: "setSlippageIn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenId",
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
    name: "tokenType",
    outputs: [
      {
        internalType: "enum TokenType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
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
    inputs: [],
    name: "updateCache",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_val",
        type: "bool",
      },
    ],
    name: "updatePaused",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vault",
    outputs: [
      {
        internalType: "contract IBalancerVault",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawable",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wrappedNative",
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
    name: "yieldBox",
    outputs: [
      {
        internalType: "contract IYieldBox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x610160604052603260075560fa6008553480156200001c57600080fd5b506040516200318b3803806200318b8339810160408190526200003f9162000341565b6001600160a01b03808716608052851660a052600080546001600160a01b0319163390811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a360016002556001600160a01b0385811660c05282811660e0528416610100819052600384905560405163f6c0092760e01b8152600481018590526000919063f6c00927906024016040805180830381865afa158015620000f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200011b9190620003c9565b506001600160a01b03818116610120528381166101405260c05160405163095ea7b360e01b8152888316600482015260006024820152929350169063095ea7b3906044016020604051808303816000875af11580156200017f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001a591906200040b565b5060c05160405163095ea7b360e01b81526001600160a01b03878116600483015260001960248301529091169063095ea7b3906044016020604051808303816000875af1158015620001fb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200022191906200040b565b506101205160405163095ea7b360e01b81526001600160a01b038781166004830152600060248301529091169063095ea7b3906044016020604051808303816000875af115801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200040b565b506101205160405163095ea7b360e01b81526001600160a01b03878116600483015260001960248301529091169063095ea7b3906044016020604051808303816000875af1158015620002f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200031a91906200040b565b505050505050505062000436565b6001600160a01b03811681146200033e57600080fd5b50565b60008060008060008060c087890312156200035b57600080fd5b8651620003688162000328565b60208801519096506200037b8162000328565b60408801519095506200038e8162000328565b606088015160808901519195509350620003a88162000328565b60a0880151909250620003bb8162000328565b809150509295509295509295565b60008060408385031215620003dd57600080fd5b8251620003ea8162000328565b6020840151909250600381106200040057600080fd5b809150509250929050565b6000602082840312156200041e57600080fd5b815180151581146200042f57600080fd5b9392505050565b60805160a05160c05160e051610100516101205161014051612c3d6200054e600039600081816104b701528181610e14015281816115540152611f010152600081816102ab01528181610baf0152818161149c0152818161161f01528181611959015281816119df01528181611c65015261207501526000818161068601528181610c20015281816112a5015281816116d701528181611cde0152611feb0152600061035a0152600081816105b401528181610d0e015281816110380152818161111f015281816112340152818161139901528181611762015281816118d801528181611ab501528181611b840152611dd201526000610652015260008181610560015281816109e10152610fac0152612c3d6000f3fe6080604052600436106102085760003560e01c80637bb7bed111610118578063e30c3978116100a0578063f0fa55a91161006f578063f0fa55a9146105eb578063f168c2d21461060b578063f3fef3a314610620578063f6b4dfb414610640578063fbfa77cf1461067457600080fd5b8063e30c397814610582578063e3575f05146103db578063eb6d3a11146105a2578063f01fbcc7146105d657600080fd5b8063afa91cc6116100e7578063afa91cc6146104f9578063b25ea8fb14610519578063ce845d1d146103db578063db2e21bc14610539578063de4065771461054e57600080fd5b80637bb7bed11461046557806380597fea146104855780638c788929146104a55780638da5cb5b146104d957600080fd5b80633e0dc34e1161019b578063501883011161016a57806350188301146103db5780635185bbc8146103f05780635c975abb146104105780637284e4161461043a578063734daaa11461044f57600080fd5b80633e0dc34e1461037c57806348dcb051146103925780634cce992d146103a65780634e71e0c8146103c657600080fd5b806317d70f7c116101d757806317d70f7c146102e557806322a58c5d1461030857806330fa738c146103265780633d79d1c81461034857600080fd5b806306fdde0314610214578063078dfbe71461025757806308cdc2a81461027957806316f0115b1461029957600080fd5b3661020f57005b600080fd5b34801561022057600080fd5b506040805180820190915260088152672130b630b731b2b960c11b60208201525b60405161024e91906122be565b60405180910390f35b34801561026357600080fd5b506102776102723660046122fb565b6106a8565b005b34801561028557600080fd5b50610277610294366004612346565b6107bf565b3480156102a557600080fd5b506102cd7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161024e565b3480156102f157600080fd5b506102fa600081565b60405190815260200161024e565b34801561031457600080fd5b506102776103233660046123aa565b50565b34801561033257600080fd5b5061033b600181565b60405161024e919061243f565b34801561035457600080fd5b506102cd7f000000000000000000000000000000000000000000000000000000000000000081565b34801561038857600080fd5b506102fa60035481565b34801561039e57600080fd5b5060006102fa565b3480156103b257600080fd5b506102776103c1366004612467565b6107fc565b3480156103d257600080fd5b5061027761085a565b3480156103e757600080fd5b506102fa610917565b3480156103fc57600080fd5b5061027761040b366004612480565b610926565b34801561041c57600080fd5b50600a5461042a9060ff1681565b604051901515815260200161024e565b34801561044657600080fd5b5061024161095d565b34801561045b57600080fd5b506102fa60055481565b34801561047157600080fd5b506102cd610480366004612467565b61097d565b34801561049157600080fd5b506102776104a0366004612467565b6109a7565b3480156104b157600080fd5b506102cd7f000000000000000000000000000000000000000000000000000000000000000081565b3480156104e557600080fd5b506000546102cd906001600160a01b031681565b34801561050557600080fd5b50610277610514366004612467565b6109d6565b34801561052557600080fd5b506102776105343660046124f2565b610a46565b34801561054557600080fd5b506102fa610b13565b34801561055a57600080fd5b506102cd7f000000000000000000000000000000000000000000000000000000000000000081565b34801561058e57600080fd5b506001546102cd906001600160a01b031681565b3480156105ae57600080fd5b506102cd7f000000000000000000000000000000000000000000000000000000000000000081565b3480156105e257600080fd5b506102fa610b8d565b3480156105f757600080fd5b50610277610606366004612467565b610ee4565b34801561061757600080fd5b50610241610f13565b34801561062c57600080fd5b5061027761063b366004612522565b610fa1565b34801561064c57600080fd5b506102cd7f000000000000000000000000000000000000000000000000000000000000000081565b34801561068057600080fd5b506102cd7f000000000000000000000000000000000000000000000000000000000000000081565b6000546001600160a01b031633146106db5760405162461bcd60e51b81526004016106d29061254e565b60405180910390fd5b811561079e576001600160a01b0383161515806106f55750805b6107395760405162461bcd60e51b81526020600482015260156024820152744f776e61626c653a207a65726f206164647265737360581b60448201526064016106d2565b600080546040516001600160a01b03808716939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0385166001600160a01b031991821617909155600180549091169055505050565b600180546001600160a01b0319166001600160a01b0385161790555b505050565b6000546001600160a01b031633146107e95760405162461bcd60e51b81526004016106d29061254e565b600a805460ff1916911515919091179055565b6000546001600160a01b031633146108265760405162461bcd60e51b81526004016106d29061254e565b6005546040518291907f3b779194d2cc7daf4de546bec10f6f325d421b2e202c11aa24e86e39845860cc90600090a3600555565b6001546001600160a01b03163381146108b55760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e657260448201526064016106d2565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316179055600180549091169055565b6000610921611016565b905090565b6000546001600160a01b031633146109505760405162461bcd60e51b81526004016106d29061254e565b60096107ba82848361260b565b60606040518060600160405280602b8152602001612bdd602b9139905090565b6004818154811061098d57600080fd5b6000918252602090912001546001600160a01b0316905081565b6000546001600160a01b031633146109d15760405162461bcd60e51b81526004016106d29061254e565b600855565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610a3d5760405162461bcd60e51b815260206004820152600c60248201526b09cdee840b2d2cad8c884def60a31b60448201526064016106d2565b610323816110b9565b6000546001600160a01b03163314610a705760405162461bcd60e51b81526004016106d29061254e565b6000816001600160a01b03168360405160006040518083038185875af1925050503d8060008114610abd576040519150601f19603f3d011682016040523d82523d6000602084013e610ac2565b606091505b50509050806107ba5760405162461bcd60e51b815260206004820152601a60248201527f42616c616e6365723a207472616e73666572206661696c65642e00000000000060448201526064016106d2565b600080546001600160a01b03163314610b3e5760405162461bcd60e51b81526004016106d29061254e565b6000610b48610b8d565b905061271060075482610b5b91906126e1565b610b6591906126fe565b610b6f9082612720565b9050610b7a81611212565b600a805460ff1916600117905592915050565b6040516370a0823160e01b815230600482015260009081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610bf6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c1a9190612733565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f94d46686003546040518263ffffffff1660e01b8152600401610c6e91815260200190565b600060405180830381865afa158015610c8b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610cb391908101906127db565b50509050600080825167ffffffffffffffff811115610cd457610cd4612363565b604051908082528060200260200182016040528015610cfd578160200160208202803683370190505b50905060005b8351811015610d93577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316848281518110610d4857610d486128a9565b60200260200101516001600160a01b031603610d62578092505b6000828281518110610d7657610d766128a9565b602090810291909101015280610d8b816128bf565b915050610d03565b50610dc160405180608001604052806060815260200160608152602001606081526020016000151581525090565b8381526020808201839052600060608084018290526040805193840183905283810189905283820187905280518085039092018252608090930183528284015260035491516331ecb14b60e21b815290917f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169163c7b2c52c91610e55913090819088906004016129aa565b6000604051808303816000875af1158015610e74573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610e9c91908101906129e6565b915050808481518110610eb157610eb16128a9565b6020026020010151600681905550808481518110610ed157610ed16128a9565b6020026020010151965050505050505090565b6000546001600160a01b03163314610f0e5760405162461bcd60e51b81526004016106d29061254e565b600755565b60098054610f2090612583565b80601f0160208091040260200160405190810160405280929190818152602001828054610f4c90612583565b8015610f995780601f10610f6e57610100808354040283529160200191610f99565b820191906000526020600020905b815481529060010190602001808311610f7c57829003601f168201915b505050505081565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146110085760405162461bcd60e51b815260206004820152600c60248201526b09cdee840b2d2cad8c884def60a31b60448201526064016106d2565b6110128282611851565b5050565b6040516370a0823160e01b815230600482015260009081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa15801561107f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110a39190612733565b9050806006546110b39190612a2d565b91505090565b6110c1611bf6565b600a5460ff16156111075760405162461bcd60e51b815260206004820152601060248201526f14dd185c99d85d194e881c185d5cd95960821b60448201526064016106d2565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561116e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111929190612733565b90506005548111156111d3576111a781611c4d565b60405181907fde22222b0ac0d69f2a19cd7b1443a29a5f37346640fff3506bdd6a9a9497f9d390600090a25b60405182907f9447d5abbf0af693ca2937bf8b1ec6a8c9dc4fbac672911c633fb31c78e5e3ca90600090a2611206610b8d565b50506103236001600255565b6040516370a0823160e01b815230600482015260009081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa15801561127b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061129f9190612733565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f94d46686003546040518263ffffffff1660e01b81526004016112f391815260200190565b600060405180830381865afa158015611310573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261133891908101906127db565b50509050600060001990506000825167ffffffffffffffff81111561135f5761135f612363565b604051908082528060200260200182016040528015611388578160200160208202803683370190505b50905060005b8351811015611443577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168482815181106113d3576113d36128a9565b60200260200101516001600160a01b03160361141057868282815181106113fc576113fc6128a9565b602002602001018181525050809250611431565b6000828281518110611424576114246128a9565b6020026020010181815250505b8061143b816128bf565b91505061138e565b5061147160405180608001604052806060815260200160608152602001606081526020016000151581525090565b83815260208101829052600060608201526040516370a0823160e01b815230600482015260029083907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156114eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061150f9190612733565b60405160200161152193929190612a40565b60408051601f198184030181529181528281019190915260035490516331ecb14b60e21b81526000916001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163c7b2c52c9161158d913090819088906004016129aa565b6000604051808303816000875af11580156115ac573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526115d491908101906129e6565b509050612710600854826115e891906126e1565b6115f291906126fe565b6115fc9082612a2d565b6040516370a0823160e01b81523060048201529091506000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015611666573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061168a9190612733565b905080821115611698578091505b604080516000602082015280820184905260608082018890528251808303909101815260809091018252848201526003549051638bdb391360e01b81527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031691638bdb39139161171991903090819089906004016129aa565b600060405180830381600087803b15801561173357600080fd5b505af1158015611747573d6000803e3d6000fd5b50506040516370a0823160e01b8152306004820152600092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031691506370a0823190602401602060405180830381865afa1580156117b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117d69190612733565b90508781116118395760405162461bcd60e51b815260206004820152602960248201527f42616c616e63657253747261746567793a207661756c74207769746864726177604482015268185b0819985a5b195960ba1b60648201526084016106d2565b6118438882612720565b9a9950505050505050505050565b611859611bf6565b6000611863611016565b9050818110156118c05760405162461bcd60e51b815260206004820152602260248201527f42616c616e63657253747261746567793a20616d6f756e74206e6f742076616c6044820152611a5960f21b60648201526084016106d2565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611927573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061194b9190612733565b905080831115611aa05760007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663679aefce6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156119b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119d99190612733565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015611a3b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a5f9190612a6c565b60ff169050600082611a7283600a612b73565b611a7c8689612720565b611a8691906126e1565b611a9091906126fe565b9050611a9b81611212565b505050505b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611b04573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b289190612733565b831115611b775760405162461bcd60e51b815260206004820152601c60248201527f42616c616e63657253747261746567793a206e6f7420656e6f7567680000000060448201526064016106d2565b611bab6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168585612153565b611bb3610b8d565b5060405183906001600160a01b038616907f058b581e2433b8b02263f5b0e5c2889fcb7b3495112884a3147619038fba46d890600090a350506110126001600255565b6002805403611c475760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016106d2565b60028055565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611cb4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cd89190612733565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f94d46686003546040518263ffffffff1660e01b8152600401611d2c91815260200190565b600060405180830381865afa158015611d49573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611d7191908101906127db565b50509050600060001990506000825167ffffffffffffffff811115611d9857611d98612363565b604051908082528060200260200182016040528015611dc1578160200160208202803683370190505b50905060005b8351811015611e7c577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316848281518110611e0c57611e0c6128a9565b60200260200101516001600160a01b031603611e495785828281518110611e3557611e356128a9565b602002602001018181525050809250611e6a565b6000828281518110611e5d57611e5d6128a9565b6020026020010181815250505b80611e74816128bf565b915050611dc7565b50611eaa60405180608001604052806060815260200160608152602001606081526020016000151581525090565b838152602080820183905260006060830152604051611ece91600191859101612b7f565b60408051601f19818403018152918152828101919091526003549051639ebbf05d60e01b81526000916001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691639ebbf05d91611f3a913090819088906004016129aa565b6000604051808303816000875af1158015611f59573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611f8191908101906129e6565b50905061271060075482611f9591906126e1565b611f9f91906126fe565b611fa99082612720565b60408051600260208201528082018390526060808201889052825180830390910181526080909101825284820152600354905163172b958560e31b81529192507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169163b95cac289161202c913090819088906004016129aa565b600060405180830381600087803b15801561204657600080fd5b505af115801561205a573d6000803e3d6000fd5b50506040516370a0823160e01b8152306004820152600092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031691506370a0823190602401602060405180830381865afa1580156120c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120e99190612733565b90508681116121495760405162461bcd60e51b815260206004820152602660248201527f42616c616e63657253747261746567793a207661756c74206465706f7369742060448201526519985a5b195960d21b60648201526084016106d2565b5050505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392908716916121af9190612ba3565b6000604051808303816000865af19150503d80600081146121ec576040519150601f19603f3d011682016040523d82523d6000602084013e6121f1565b606091505b509150915081801561221b57508051158061221b57508080602001905181019061221b9190612bbf565b6122675760405162461bcd60e51b815260206004820152601c60248201527f426f72696e6745524332303a205472616e73666572206661696c65640000000060448201526064016106d2565b5050505050565b60005b83811015612289578181015183820152602001612271565b50506000910152565b600081518084526122aa81602086016020860161226e565b601f01601f19169290920160200192915050565b6020815260006122d16020830184612292565b9392505050565b6001600160a01b038116811461032357600080fd5b801515811461032357600080fd5b60008060006060848603121561231057600080fd5b833561231b816122d8565b9250602084013561232b816122ed565b9150604084013561233b816122ed565b809150509250925092565b60006020828403121561235857600080fd5b81356122d1816122ed565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156123a2576123a2612363565b604052919050565b600060208083850312156123bd57600080fd5b823567ffffffffffffffff808211156123d557600080fd5b818501915085601f8301126123e957600080fd5b8135818111156123fb576123fb612363565b61240d601f8201601f19168501612379565b9150808252868482850101111561242357600080fd5b8084840185840137600090820190930192909252509392505050565b602081016005831061246157634e487b7160e01b600052602160045260246000fd5b91905290565b60006020828403121561247957600080fd5b5035919050565b6000806020838503121561249357600080fd5b823567ffffffffffffffff808211156124ab57600080fd5b818501915085601f8301126124bf57600080fd5b8135818111156124ce57600080fd5b8660208285010111156124e057600080fd5b60209290920196919550909350505050565b6000806040838503121561250557600080fd5b823591506020830135612517816122d8565b809150509250929050565b6000806040838503121561253557600080fd5b8235612540816122d8565b946020939093013593505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600181811c9082168061259757607f821691505b6020821081036125b757634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156107ba57600081815260208120601f850160051c810160208610156125e45750805b601f850160051c820191505b81811015612603578281556001016125f0565b505050505050565b67ffffffffffffffff83111561262357612623612363565b612637836126318354612583565b836125bd565b6000601f84116001811461266b57600085156126535750838201355b600019600387901b1c1916600186901b178355612267565b600083815260209020601f19861690835b8281101561269c578685013582556020948501946001909201910161267c565b50868210156126b95760001960f88860031b161c19848701351681555b505060018560011b0183555050505050565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176126f8576126f86126cb565b92915050565b60008261271b57634e487b7160e01b600052601260045260246000fd5b500490565b818103818111156126f8576126f86126cb565b60006020828403121561274557600080fd5b5051919050565b600067ffffffffffffffff82111561276657612766612363565b5060051b60200190565b600082601f83011261278157600080fd5b815160206127966127918361274c565b612379565b82815260059290921b840181019181810190868411156127b557600080fd5b8286015b848110156127d057805183529183019183016127b9565b509695505050505050565b6000806000606084860312156127f057600080fd5b835167ffffffffffffffff8082111561280857600080fd5b818601915086601f83011261281c57600080fd5b8151602061282c6127918361274c565b82815260059290921b8401810191818101908a84111561284b57600080fd5b948201945b83861015612872578551612863816122d8565b82529482019490820190612850565b9189015191975090935050508082111561288b57600080fd5b5061289886828701612770565b925050604084015190509250925092565b634e487b7160e01b600052603260045260246000fd5b6000600182016128d1576128d16126cb565b5060010190565b600081518084526020808501945080840160005b83811015612908578151875295820195908201906001016128ec565b509495945050505050565b8051608080845281519084018190526000916020919082019060a0860190845b818110156129585783516001600160a01b031683529284019291840191600101612933565b50508285015191508581038387015261297181836128d8565b925050506040830151848203604086015261298c8282612292565b91505060608301516129a2606086018215159052565b509392505050565b8481526001600160a01b038481166020830152831660408201526080606082018190526000906129dc90830184612913565b9695505050505050565b600080604083850312156129f957600080fd5b82519150602083015167ffffffffffffffff811115612a1757600080fd5b612a2385828601612770565b9150509250929050565b808201808211156126f8576126f86126cb565b60ff84168152606060208201526000612a5c60608301856128d8565b9050826040830152949350505050565b600060208284031215612a7e57600080fd5b815160ff811681146122d157600080fd5b600181815b80851115612aca578160001904821115612ab057612ab06126cb565b80851615612abd57918102915b93841c9390800290612a94565b509250929050565b600082612ae1575060016126f8565b81612aee575060006126f8565b8160018114612b045760028114612b0e57612b2a565b60019150506126f8565b60ff841115612b1f57612b1f6126cb565b50506001821b6126f8565b5060208310610133831016604e8410600b8410161715612b4d575081810a6126f8565b612b578383612a8f565b8060001904821115612b6b57612b6b6126cb565b029392505050565b60006122d18383612ad2565b60ff83168152604060208201526000612b9b60408301846128d8565b949350505050565b60008251612bb581846020870161226e565b9190910192915050565b600060208284031215612bd157600080fd5b81516122d1816122ed56fe42616c616e63657220737472617465677920666f722077726170706564206e617469766520617373657473a26469706673582212207b9b977cc28705f6d786de422a67f222a2c93efa09dfb8c3d713b10d05be8daa64736f6c63430008120033";

type BalancerStrategyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BalancerStrategyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BalancerStrategy__factory extends ContractFactory {
  constructor(...args: BalancerStrategyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "BalancerStrategy";
  }

  override deploy(
    _yieldBox: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _vault: PromiseOrValue<string>,
    _poolId: PromiseOrValue<BytesLike>,
    _bal: PromiseOrValue<string>,
    _helpers: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BalancerStrategy> {
    return super.deploy(
      _yieldBox,
      _token,
      _vault,
      _poolId,
      _bal,
      _helpers,
      overrides || {}
    ) as Promise<BalancerStrategy>;
  }
  override getDeployTransaction(
    _yieldBox: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _vault: PromiseOrValue<string>,
    _poolId: PromiseOrValue<BytesLike>,
    _bal: PromiseOrValue<string>,
    _helpers: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _yieldBox,
      _token,
      _vault,
      _poolId,
      _bal,
      _helpers,
      overrides || {}
    );
  }
  override attach(address: string): BalancerStrategy {
    return super.attach(address) as BalancerStrategy;
  }
  override connect(signer: Signer): BalancerStrategy__factory {
    return super.connect(signer) as BalancerStrategy__factory;
  }
  static readonly contractName: "BalancerStrategy";

  public readonly contractName: "BalancerStrategy";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BalancerStrategyInterface {
    return new utils.Interface(_abi) as BalancerStrategyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BalancerStrategy {
    return new Contract(address, _abi, signerOrProvider) as BalancerStrategy;
  }
}
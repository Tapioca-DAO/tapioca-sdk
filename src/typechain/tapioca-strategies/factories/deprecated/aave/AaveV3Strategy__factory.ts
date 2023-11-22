/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  AaveV3Strategy,
  AaveV3StrategyInterface,
} from "../../../deprecated/aave/AaveV3Strategy";

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
        name: "_aaveV3Pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_receiptToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stakedRewardToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_multiSwapper",
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
        name: "_old",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_new",
        type: "address",
      },
    ],
    name: "MultiSwapper",
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
    inputs: [],
    name: "aaveV3Pool",
    outputs: [
      {
        internalType: "contract IAaveV3Pool",
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
        name: "dexData",
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
    stateMutability: "view",
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
    name: "receiptToken",
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
    name: "rewardToken",
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
        internalType: "address",
        name: "_swapper",
        type: "address",
      },
    ],
    name: "setMultiSwapper",
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
    inputs: [],
    name: "stakedRewardToken",
    outputs: [
      {
        internalType: "contract IStkAave",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "swapper",
    outputs: [
      {
        internalType: "contract ISwapper",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
] as const;

const _bytecode =
  "0x61016060405260326007553480156200001757600080fd5b50604051620030a6380380620030a68339810160408190526200003a916200015d565b6001600160a01b03808716608052851660a052600080546001600160a01b0319163390811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a360016002556001600160a01b0385811660c052600380546001600160a01b03191683831617905584811660e052838116610100528216610140819052604080516399248ea760e01b815290516399248ea7916004808201926020929091908290030181865afa15801562000104573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200012a9190620001f1565b6001600160a01b0316610120525062000218945050505050565b6001600160a01b03811681146200015a57600080fd5b50565b60008060008060008060c087890312156200017757600080fd5b8651620001848162000144565b6020880151909650620001978162000144565b6040880151909550620001aa8162000144565b6060880151909450620001bd8162000144565b6080880151909350620001d08162000144565b60a0880151909250620001e38162000144565b809150509295509295509295565b6000602082840312156200020457600080fd5b8151620002118162000144565b9392505050565b60805160a05160c05160e051610100516101205161014051612cf1620003b5600039600081816101fa015281816106b801528181610742015281816107c40152818161085a015281816108d90152818161095b01528181610a0d01528181610a8d0152610efe0152600081816104940152818161062201528181610b1701528181610bce01528181610d2101528181610db80152610f9e0152600081816104180152818161139101528181611444015281816115b501528181611b4401528181611efb0152611fae01526000818161034f015281816113be015281816114710152818161152e015281816115e2015281816118f4015281816119a701528181611a6801528181611f2801528181611fdb01526120950152600081816103de01528181610bf001528181610fc0015281816114f801528181611831015281816118c70152818161197a01528181611a2c01528181611bd201528181611d4501528181611e76015281816120600152818161211b01526121cf0152600061046d0152600081816103a40152818161126201526117af0152612cf16000f3fe608060405234801561001057600080fd5b50600436106101f05760003560e01c806386a06ff01161010f578063eb6d3a11116100a2578063f168c2d211610071578063f168c2d21461044d578063f3fef3a314610455578063f6b4dfb414610468578063f7c618c11461048f57600080fd5b8063eb6d3a11146103d9578063ec32e1b914610400578063ec78e83214610413578063f0fa55a91461043a57600080fd5b8063db2e21bc116100de578063db2e21bc14610397578063de4065771461039f578063e30c3978146103c6578063e3575f051461030157600080fd5b806386a06ff01461034a5780638da5cb5b14610371578063afa91cc614610384578063ce845d1d1461030157600080fd5b806348dcb051116101875780635185bbc8116101565780635185bbc8146103095780635c975abb1461031c5780637284e41614610339578063734daaa11461034157600080fd5b806348dcb051146102de5780634cce992d146102e65780634e71e0c8146102f9578063501883011461030157600080fd5b806317d70f7c116101c357806317d70f7c1461028d57806322a58c5d146102a35780632b3297f9146102b657806330fa738c146102c957600080fd5b80630469018f146101f557806306fdde0314610239578063078dfbe71461026557806308cdc2a81461027a575b600080fd5b61021c7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b6040805180820190915260078152664141564520563360c81b60208201525b6040516102309190612404565b610278610273366004612441565b6104b6565b005b61027861028836600461248c565b6105cd565b610295600081565b604051908152602001610230565b6102786102b13660046124e8565b61060a565b60035461021c906001600160a01b031681565b6102d1600181565b6040516102309190612599565b610295610edc565b6102786102f43660046125c1565b6110d6565b610278611134565b6102956111f1565b6102786103173660046125da565b611200565b6006546103299060ff1681565b6040519015158152602001610230565b610258611237565b61029560045481565b61021c7f000000000000000000000000000000000000000000000000000000000000000081565b60005461021c906001600160a01b031681565b6102786103923660046125c1565b611257565b6102956112ca565b61021c7f000000000000000000000000000000000000000000000000000000000000000081565b60015461021c906001600160a01b031681565b61021c7f000000000000000000000000000000000000000000000000000000000000000081565b61027861040e36600461264c565b611661565b61021c7f000000000000000000000000000000000000000000000000000000000000000081565b6102786104483660046125c1565b6116e7565b610258611716565b610278610463366004612669565b6117a4565b61021c7f000000000000000000000000000000000000000000000000000000000000000081565b61021c7f000000000000000000000000000000000000000000000000000000000000000081565b6000546001600160a01b031633146104e95760405162461bcd60e51b81526004016104e090612695565b60405180910390fd5b81156105ac576001600160a01b0383161515806105035750805b6105475760405162461bcd60e51b81526020600482015260156024820152744f776e61626c653a207a65726f206164647265737360581b60448201526064016104e0565b600080546040516001600160a01b03808716939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0385166001600160a01b031991821617909155600180549091169055505050565b600180546001600160a01b0319166001600160a01b0385161790555b505050565b6000546001600160a01b031633146105f75760405162461bcd60e51b81526004016104e090612695565b6006805460ff1916911515919091179055565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610671573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069591906126ca565b6040516346df7f7160e11b81523060048201529091506000906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690638dbefee290602401602060405180830381865afa1580156106ff573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072391906126ca565b905080156107ac576040516309a99b4f60e41b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690639a99b4f09061077990309085906004016126e3565b600060405180830381600087803b15801561079357600080fd5b505af11580156107a7573d6000803e3d6000fd5b505050505b60405163091030c360e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063091030c3906024016040805180830381865afa158015610812573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061083691906126fc565b506040516370a0823160e01b81523060048201529091506000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa1580156108a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108c591906126ca565b905064ffffffffff821615610a85576000427f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663359c4a966040518163ffffffff1660e01b8152600401602060405180830381865afa158015610935573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095991906126ca565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166372b49d636040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109db91906126ca565b6109ec9064ffffffffff8716612762565b6109f69190612762565b109050808015610a065750600082115b15610a7f577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663787a08a66040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610a6657600080fd5b505af1158015610a7a573d6000803e3d6000fd5b505050505b50610aff565b8015610aff577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663787a08a66040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610ae657600080fd5b505af1158015610afa573d6000803e3d6000fd5b505050505b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610b66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b8a91906126ca565b905084811115610ed4576000610ba0868361277b565b600354604051631fd177af60e11b81529192506000916001600160a01b0390911690633fa2ef5e90610c20907f0000000000000000000000000000000000000000000000000000000000000000907f000000000000000000000000000000000000000000000000000000000000000090879087908190819060040161278e565b61014060405180830381865afa158015610c3e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c62919061286f565b600354604051630b7ecdc960e31b81529192506000916001600160a01b0390911690635bf66e4890610c9a9085908d90600401612998565b602060405180830381865afa158015610cb7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cdb91906126ca565b9050600061271060075483610cf091906129c3565b610cfa91906129da565b610d04908361277b565b60035460405163095ea7b360e01b81529192506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169263095ea7b392610d5a9216906000906004016126e3565b6020604051808303816000875af1158015610d79573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d9d91906129fc565b5060035460405163095ea7b360e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169263095ea7b392610df392919091169088906004016126e3565b6020604051808303816000875af1158015610e12573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e3691906129fc565b506000600360009054906101000a90046001600160a01b03166001600160a01b031663efa84c6d8584308f6040518563ffffffff1660e01b8152600401610e809493929190612a19565b60408051808303816000875af1158015610e9e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ec29190612a5f565b509050610ece81611819565b50505050505b505050505050565b6040516346df7f7160e11b815230600482015260009081906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690638dbefee290602401602060405180830381865afa158015610f45573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f6991906126ca565b60009250905080156110d257600354604051631fd177af60e11b81526000916001600160a01b031690633fa2ef5e90610ff0907f0000000000000000000000000000000000000000000000000000000000000000907f000000000000000000000000000000000000000000000000000000000000000090879087908190819060040161278e565b61014060405180830381865afa15801561100e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611032919061286f565b600354604051630b7ecdc960e31b81529192506001600160a01b031690635bf66e4890611066908490600590600401612b3a565b602060405180830381865afa158015611083573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110a791906126ca565b9250612710600754846110ba91906129c3565b6110c491906129da565b6110ce908461277b565b9250505b5090565b6000546001600160a01b031633146111005760405162461bcd60e51b81526004016104e090612695565b6004546040518291907f3b779194d2cc7daf4de546bec10f6f325d421b2e202c11aa24e86e39845860cc90600090a3600455565b6001546001600160a01b031633811461118f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e657260448201526064016104e0565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316179055600180549091169055565b60006111fb611b22565b905090565b6000546001600160a01b0316331461122a5760405162461bcd60e51b81526004016104e090612695565b60056105c8828483612ba2565b60606040518060600160405280602a8152602001612c92602a9139905090565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146112be5760405162461bcd60e51b815260206004820152600c60248201526b09cdee840b2d2cad8c884def60a31b60448201526064016104e0565b6112c781611c68565b50565b600080546001600160a01b031633146112f55760405162461bcd60e51b81526004016104e090612695565b6040516322a58c5d60e01b815230906322a58c5d9061131990600590600401612c62565b600060405180830381600087803b15801561133357600080fd5b505af1925050508015611344575060015b61137a573d808015611372576040519150601f19603f3d011682016040523d82523d6000602084013e611377565b606091505b50505b60405163095ea7b360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b3906113e9907f0000000000000000000000000000000000000000000000000000000000000000906000906004016126e3565b6020604051808303816000875af1158015611408573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061142c91906129fc565b5060405163095ea7b360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b39061149d907f000000000000000000000000000000000000000000000000000000000000000090600019906004016126e3565b6020604051808303816000875af11580156114bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114e091906129fc565b50604051631a4ca37b60e21b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116600483015260001960248301523060448301527f000000000000000000000000000000000000000000000000000000000000000016906369328dec906064016020604051808303816000875af1158015611577573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061159b91906126ca565b60405163095ea7b360e01b81529091506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b39061160d907f0000000000000000000000000000000000000000000000000000000000000000906000906004016126e3565b6020604051808303816000875af115801561162c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061165091906129fc565b506006805460ff1916600117905590565b6000546001600160a01b0316331461168b5760405162461bcd60e51b81526004016104e090612695565b6003546040516001600160a01b038084169216907fe36d79dcda63d47bee388b7dde8bba0b326a1b459889de48dc94dcf3504eda4b90600090a3600380546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146117115760405162461bcd60e51b81526004016104e090612695565b600755565b6005805461172390612a83565b80601f016020809104026020016040519081016040528092919081815260200182805461174f90612a83565b801561179c5780601f106117715761010080835404028352916020019161179c565b820191906000526020600020905b81548152906001019060200180831161177f57829003601f168201915b505050505081565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461180b5760405162461bcd60e51b815260206004820152600c60248201526b09cdee840b2d2cad8c884def60a31b60448201526064016104e0565b6118158282611cc9565b5050565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611880573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118a491906126ca565b9050600454811115611af35760405163095ea7b360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b39061191f907f0000000000000000000000000000000000000000000000000000000000000000906000906004016126e3565b6020604051808303816000875af115801561193e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061196291906129fc565b5060405163095ea7b360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b3906119d1907f00000000000000000000000000000000000000000000000000000000000000009085906004016126e3565b6020604051808303816000875af11580156119f0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a1491906129fc565b5060405163617ba03760e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116600483015260248201839052306044830152600060648301527f0000000000000000000000000000000000000000000000000000000000000000169063617ba03790608401600060405180830381600087803b158015611aac57600080fd5b505af1158015611ac0573d6000803e3d6000fd5b50506040518392507fde22222b0ac0d69f2a19cd7b1443a29a5f37346640fff3506bdd6a9a9497f9d39150600090a25050565b60405182907f9447d5abbf0af693ca2937bf8b1ec6a8c9dc4fbac672911c633fb31c78e5e3ca90600090a25050565b6040516370a0823160e01b815230600482015260009081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015611b8b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611baf91906126ca565b6040516370a0823160e01b81523060048201529091506000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015611c19573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c3d91906126ca565b90506000611c49610edc565b905080611c568385612762565b611c609190612762565b935050505090565b611c70612238565b60065460ff1615611cb65760405162461bcd60e51b815260206004820152601060248201526f14dd185c99d85d194e881c185d5cd95960821b60448201526064016104e0565b611cbf81611819565b6112c76001600255565b611cd1612238565b6000611cdb611b22565b905081811015611d2d5760405162461bcd60e51b815260206004820181905260248201527f41617665563353747261746567793a20616d6f756e74206e6f742076616c696460448201526064016104e0565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611d94573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611db891906126ca565b9050808311156121c2576040516322a58c5d60e01b815230906322a58c5d90611de690600590600401612c62565b600060405180830381600087803b158015611e0057600080fd5b505af1925050508015611e11575060015b611e47573d808015611e3f576040519150601f19603f3d011682016040523d82523d6000602084013e611e44565b606091505b50505b6000611e53828561277b565b6040516370a0823160e01b81523060048201529091506000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015611ebd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ee191906126ca565b60405163095ea7b360e01b81529091506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b390611f53907f0000000000000000000000000000000000000000000000000000000000000000906000906004016126e3565b6020604051808303816000875af1158015611f72573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f9691906129fc565b5060405163095ea7b360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b390612005907f00000000000000000000000000000000000000000000000000000000000000009086906004016126e3565b6020604051808303816000875af1158015612024573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061204891906129fc565b50604051631a4ca37b60e21b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018490523060448301527f000000000000000000000000000000000000000000000000000000000000000016906369328dec906064016020604051808303816000875af11580156120de573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061210291906126ca565b506040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561216a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061218e91906126ca565b9050600061219c838361277b565b9050838111156121bd576121b0848261277b565b6121ba9088612762565b96505b505050505b6121f66001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016858561228f565b60405183906001600160a01b038616907f058b581e2433b8b02263f5b0e5c2889fcb7b3495112884a3147619038fba46d890600090a350506118156001600255565b60028054036122895760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104e0565b60028055565b600080846001600160a01b031663a9059cbb60e01b85856040516024016122b79291906126e3565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516122f59190612c75565b6000604051808303816000865af19150503d8060008114612332576040519150601f19603f3d011682016040523d82523d6000602084013e612337565b606091505b509150915081801561236157508051158061236157508080602001905181019061236191906129fc565b6123ad5760405162461bcd60e51b815260206004820152601c60248201527f426f72696e6745524332303a205472616e73666572206661696c65640000000060448201526064016104e0565b5050505050565b60005b838110156123cf5781810151838201526020016123b7565b50506000910152565b600081518084526123f08160208601602086016123b4565b601f01601f19169290920160200192915050565b60208152600061241760208301846123d8565b9392505050565b6001600160a01b03811681146112c757600080fd5b80151581146112c757600080fd5b60008060006060848603121561245657600080fd5b83356124618161241e565b9250602084013561247181612433565b9150604084013561248181612433565b809150509250925092565b60006020828403121561249e57600080fd5b813561241781612433565b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff811182821017156124e2576124e26124a9565b60405290565b6000602082840312156124fa57600080fd5b813567ffffffffffffffff8082111561251257600080fd5b818401915084601f83011261252657600080fd5b813581811115612538576125386124a9565b604051601f8201601f19908116603f01168101908382118183101715612560576125606124a9565b8160405282815287602084870101111561257957600080fd5b826020860160208301376000928101602001929092525095945050505050565b60208101600583106125bb57634e487b7160e01b600052602160045260246000fd5b91905290565b6000602082840312156125d357600080fd5b5035919050565b600080602083850312156125ed57600080fd5b823567ffffffffffffffff8082111561260557600080fd5b818501915085601f83011261261957600080fd5b81358181111561262857600080fd5b86602082850101111561263a57600080fd5b60209290920196919550909350505050565b60006020828403121561265e57600080fd5b81356124178161241e565b6000806040838503121561267c57600080fd5b82356126878161241e565b946020939093013593505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6000602082840312156126dc57600080fd5b5051919050565b6001600160a01b03929092168252602082015260400190565b6000806040838503121561270f57600080fd5b825164ffffffffff8116811461272457600080fd5b60208401519092506001600160d81b038116811461274157600080fd5b809150509250929050565b634e487b7160e01b600052601160045260246000fd5b808201808211156127755761277561274c565b92915050565b818103818111156127755761277561274c565b6001600160a01b039687168152949095166020850152604084019290925260608301521515608082015290151560a082015260c00190565b6000608082840312156127d857600080fd5b6127e06124bf565b90508151815260208201516020820152604082015160408201526060820151606082015292915050565b60006040828403121561281c57600080fd5b6040516040810181811067ffffffffffffffff8211171561283f5761283f6124a9565b8060405250809150825161285281612433565b8152602083015161286281612433565b6020919091015292915050565b600081830361014081121561288357600080fd5b6040516060810181811067ffffffffffffffff821117156128a6576128a66124a9565b60405260808212156128b757600080fd5b6128bf6124bf565b915083516128cc8161241e565b82526020848101519083015260408401516128e68161241e565b60408301526060848101519083015281815261290585608086016127c6565b602082015261291885610100860161280a565b6040820152949350505050565b805180516001600160a01b03908116845260208083015181860152604080840151909216828601526060928301518386015280840151805160808701528082015160a08701528083015160c08701529092015160e085015290910151805115156101008401520151151561012090910152565b60006101606129a78386612925565b806101408401526129ba818401856123d8565b95945050505050565b80820281158282048414176127755761277561274c565b6000826129f757634e487b7160e01b600052601260045260246000fd5b500490565b600060208284031215612a0e57600080fd5b815161241781612433565b60006101a0612a288388612925565b61014083018690526001600160a01b0385166101608401526101808301819052612a54818401856123d8565b979650505050505050565b60008060408385031215612a7257600080fd5b505080516020909101519092909150565b600181811c90821680612a9757607f821691505b602082108103612ab757634e487b7160e01b600052602260045260246000fd5b50919050565b60008154612aca81612a83565b808552602060018381168015612ae75760018114612b0157612b2f565b60ff1985168884015283151560051b880183019550612b2f565b866000528260002060005b85811015612b275781548a8201860152908301908401612b0c565b890184019650505b505050505092915050565b6000610160612b498386612925565b806101408401526129ba81840185612abd565b601f8211156105c857600081815260208120601f850160051c81016020861015612b835750805b601f850160051c820191505b81811015610ed457828155600101612b8f565b67ffffffffffffffff831115612bba57612bba6124a9565b612bce83612bc88354612a83565b83612b5c565b6000601f841160018114612c025760008515612bea5750838201355b600019600387901b1c1916600186901b1783556123ad565b600083815260209020601f19861690835b82811015612c335786850135825560209485019460019092019101612c13565b5086821015612c505760001960f88860031b161c19848701351681555b505060018560011b0183555050505050565b6020815260006124176020830184612abd565b60008251612c878184602087016123b4565b919091019291505056fe4141564520563320737472617465677920666f722077726170706564206e617469766520617373657473a26469706673582212207cffb45df66538c201f045651f9316de31c4fadfc68f52d768f410a55b4c6e4c64736f6c63430008120033";

type AaveV3StrategyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AaveV3StrategyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AaveV3Strategy__factory extends ContractFactory {
  constructor(...args: AaveV3StrategyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AaveV3Strategy";
  }

  override deploy(
    _yieldBox: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _aaveV3Pool: PromiseOrValue<string>,
    _receiptToken: PromiseOrValue<string>,
    _stakedRewardToken: PromiseOrValue<string>,
    _multiSwapper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AaveV3Strategy> {
    return super.deploy(
      _yieldBox,
      _token,
      _aaveV3Pool,
      _receiptToken,
      _stakedRewardToken,
      _multiSwapper,
      overrides || {}
    ) as Promise<AaveV3Strategy>;
  }
  override getDeployTransaction(
    _yieldBox: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _aaveV3Pool: PromiseOrValue<string>,
    _receiptToken: PromiseOrValue<string>,
    _stakedRewardToken: PromiseOrValue<string>,
    _multiSwapper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _yieldBox,
      _token,
      _aaveV3Pool,
      _receiptToken,
      _stakedRewardToken,
      _multiSwapper,
      overrides || {}
    );
  }
  override attach(address: string): AaveV3Strategy {
    return super.attach(address) as AaveV3Strategy;
  }
  override connect(signer: Signer): AaveV3Strategy__factory {
    return super.connect(signer) as AaveV3Strategy__factory;
  }
  static readonly contractName: "AaveV3Strategy";

  public readonly contractName: "AaveV3Strategy";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AaveV3StrategyInterface {
    return new utils.Interface(_abi) as AaveV3StrategyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AaveV3Strategy {
    return new Contract(address, _abi, signerOrProvider) as AaveV3Strategy;
  }
}

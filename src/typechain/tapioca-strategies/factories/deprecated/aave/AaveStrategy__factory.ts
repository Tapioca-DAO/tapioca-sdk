/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  AaveStrategy,
  AaveStrategyInterface,
} from "../../../deprecated/aave/AaveStrategy";

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
        name: "_lendingPool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_incentivesController",
        type: "address",
      },
      {
        internalType: "address",
        name: "_receiptToken",
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
    name: "incentivesController",
    outputs: [
      {
        internalType: "contract IIncentivesController",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lendingPool",
    outputs: [
      {
        internalType: "contract ILendingPool",
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
  "0x61018060405260326007553480156200001757600080fd5b506040516200319a3803806200319a8339810160408190526200003a91620003b6565b6001600160a01b03808716608052851660a052600080546001600160a01b0319163390811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a360016002556001600160a01b0385811660c052600380546001600160a01b031916838316179055848116610140528316610160819052604080516399248ea760e01b815290516399248ea7916004808201926020929091908290030181865afa158015620000fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200012491906200044a565b6001600160a01b031660e0819052604080516399248ea760e01b815290516399248ea7916004808201926020929091908290030181865afa1580156200016e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200019491906200044a565b6001600160a01b03908116610100528281166101205260c05160405163095ea7b360e01b815286831660048201526000602482015291169063095ea7b3906044016020604051808303816000875af1158015620001f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200021b919062000471565b5060c05160405163095ea7b360e01b81526001600160a01b03868116600483015260001960248301529091169063095ea7b3906044016020604051808303816000875af115801562000271573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000297919062000471565b506101005160405163095ea7b360e01b81526001600160a01b038381166004830152600060248301529091169063095ea7b3906044016020604051808303816000875af1158015620002ed573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000313919062000471565b506101005160405163095ea7b360e01b81526001600160a01b03838116600483015260001960248301529091169063095ea7b3906044016020604051808303816000875af11580156200036a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000390919062000471565b5050505050505062000495565b6001600160a01b0381168114620003b357600080fd5b50565b60008060008060008060c08789031215620003d057600080fd5b8651620003dd816200039d565b6020880151909650620003f0816200039d565b604088015190955062000403816200039d565b606088015190945062000416816200039d565b608088015190935062000429816200039d565b60a08801519092506200043c816200039d565b809150509295509295509295565b6000602082840312156200045d57600080fd5b81516200046a816200039d565b9392505050565b6000602082840312156200048457600080fd5b815180151581146200046a57600080fd5b60805160a05160c05160e05161010051610120516101405161016051612b95620006056000396000818161039101528181610651015261074701526000818161036a01528181610f88015281816114d301528181611597015281816119ab01528181611c0d0152611f3701526000818161044701526106f00152600081816104c301528181610c4901528181610ced015281816110df015281816116760152818161175d01526117f4015260008181610205015281816107e201528181610879015281816108f60152818161098c01528181610a0b01528181610a8d01528181610b3f01528181610bbf015261103f01526000818161040d01528181610d0f01528181610eb601528181610f4c015281816111010152818161155f01528181611a3b01528181611b3b01528181611bd101528181611d4d01528181611e6401528181611efc0152611fd50152600061049c0152600081816103d3015281816113a3015261192d0152612b956000f3fe608060405234801561001057600080fd5b50600436106101fb5760003560e01c80638da5cb5b1161011a578063e3575f05116100ad578063f0fa55a91161007c578063f0fa55a914610469578063f168c2d21461047c578063f3fef3a314610484578063f6b4dfb414610497578063f7c618c1146104be57600080fd5b8063e3575f0514610309578063eb6d3a1114610408578063ec32e1b91461042f578063ec78e8321461044257600080fd5b8063ce845d1d116100e9578063ce845d1d14610309578063db2e21bc146103c6578063de406577146103ce578063e30c3978146103f557600080fd5b80638da5cb5b14610352578063a59a997314610365578063af1df2551461038c578063afa91cc6146103b357600080fd5b806348dcb051116101925780635185bbc8116101615780635185bbc8146103115780635c975abb146103245780637284e41614610341578063734daaa11461034957600080fd5b806348dcb051146102e65780634cce992d146102ee5780634e71e0c814610301578063501883011461030957600080fd5b806317d70f7c116101ce57806317d70f7c1461029557806322a58c5d146102ab5780632b3297f9146102be57806330fa738c146102d157600080fd5b80630469018f1461020057806306fdde0314610244578063078dfbe71461026d57806308cdc2a814610282575b600080fd5b6102277f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b6040805180820190915260048152634141564560e01b60208201525b60405161023b9190612200565b61028061027b36600461223d565b6104e5565b005b610280610290366004612288565b6105fc565b61029d600081565b60405190815260200161023b565b6102806102b93660046122e4565b610639565b600354610227906001600160a01b031681565b6102d9600181565b60405161023b9190612395565b61029d61101d565b6102806102fc3660046123bd565b611217565b610280611275565b61029d611332565b61028061031f3660046123d6565b611341565b6006546103319060ff1681565b604051901515815260200161023b565b610260611378565b61029d60045481565b600054610227906001600160a01b031681565b6102277f000000000000000000000000000000000000000000000000000000000000000081565b6102277f000000000000000000000000000000000000000000000000000000000000000081565b6102806103c13660046123bd565b611398565b61029d61140b565b6102277f000000000000000000000000000000000000000000000000000000000000000081565b600154610227906001600160a01b031681565b6102277f000000000000000000000000000000000000000000000000000000000000000081565b61028061043d366004612448565b611623565b6102277f000000000000000000000000000000000000000000000000000000000000000081565b6102806104773660046123bd565b611865565b610260611894565b610280610492366004612465565b611922565b6102277f000000000000000000000000000000000000000000000000000000000000000081565b6102277f000000000000000000000000000000000000000000000000000000000000000081565b6000546001600160a01b031633146105185760405162461bcd60e51b815260040161050f90612491565b60405180910390fd5b81156105db576001600160a01b0383161515806105325750805b6105765760405162461bcd60e51b81526020600482015260156024820152744f776e61626c653a207a65726f206164647265737360581b604482015260640161050f565b600080546040516001600160a01b03808716939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0385166001600160a01b031991821617909155600180549091169055505050565b600180546001600160a01b0319166001600160a01b0385161790555b505050565b6000546001600160a01b031633146106265760405162461bcd60e51b815260040161050f90612491565b6006805460ff1916911515919091179055565b604051630cc7d40f60e11b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063198fa81e90602401602060405180830381865afa1580156106a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c491906124c6565b905080156107ca57604080516001808252818301909252600091602080830190803683370190505090507f000000000000000000000000000000000000000000000000000000000000000081600081518110610722576107226124df565b6001600160a01b039283166020918202929092010152604051633111e7b360e01b81527f000000000000000000000000000000000000000000000000000000000000000090911690633111e7b3906107849084906000199030906004016124f5565b6020604051808303816000875af11580156107a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c791906124c6565b50505b604051637e90d7ef60e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637e90d7ef90602401602060405180830381865afa158015610831573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061085591906124c6565b905080156108de576040516309a99b4f60e41b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690639a99b4f090604401600060405180830381600087803b1580156108c557600080fd5b505af11580156108d9573d6000803e3d6000fd5b505050505b60405163091030c360e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063091030c3906024016040805180830381865afa158015610944573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109689190612559565b506040516370a0823160e01b81523060048201529091506000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa1580156109d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109f791906124c6565b905064ffffffffff821615610bb7576000427f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663359c4a966040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8b91906124c6565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166372b49d636040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ae9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b0d91906124c6565b610b1e9064ffffffffff87166125bf565b610b2891906125bf565b109050808015610b385750600082115b15610bb1577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663787a08a66040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610b9857600080fd5b505af1158015610bac573d6000803e3d6000fd5b505050505b50610c31565b8015610c31577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663787a08a66040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610c1857600080fd5b505af1158015610c2c573d6000803e3d6000fd5b505050505b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610c98573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cbc91906124c6565b9050801561101557600354604051631fd177af60e11b81526000916001600160a01b031690633fa2ef5e90610d3f907f0000000000000000000000000000000000000000000000000000000000000000907f00000000000000000000000000000000000000000000000000000000000000009087908790819081906004016125d8565b61014060405180830381865afa158015610d5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8191906126b9565b600354604051630b7ecdc960e31b81529192506000916001600160a01b0390911690635bf66e4890610db99085908c906004016127e2565b602060405180830381865afa158015610dd6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dfa91906124c6565b9050600061271060075483610e0f919061280d565b610e199190612824565b610e239083612846565b60035460405163efa84c6d60e01b81529192506001600160a01b03169063efa84c6d90610e5a908690859030908f90600401612859565b60408051808303816000875af1158015610e78573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e9c919061289f565b50506040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610f05573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f2991906124c6565b9050600454811115610fe55760405163e8eda9df60e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116600483015260248201839052306044830152600060648301527f0000000000000000000000000000000000000000000000000000000000000000169063e8eda9df90608401600060405180830381600087803b158015610fcc57600080fd5b505af1158015610fe0573d6000803e3d6000fd5b505050505b60405181907fde22222b0ac0d69f2a19cd7b1443a29a5f37346640fff3506bdd6a9a9497f9d390600090a2505050505b505050505050565b604051637e90d7ef60e01b815230600482015260009081906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690637e90d7ef90602401602060405180830381865afa158015611086573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110aa91906124c6565b600092509050801561121357600354604051631fd177af60e11b81526000916001600160a01b031690633fa2ef5e90611131907f0000000000000000000000000000000000000000000000000000000000000000907f00000000000000000000000000000000000000000000000000000000000000009087908790819081906004016125d8565b61014060405180830381865afa15801561114f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061117391906126b9565b600354604051630b7ecdc960e31b81529192506001600160a01b031690635bf66e48906111a790849060059060040161297a565b602060405180830381865afa1580156111c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111e891906124c6565b9250612710600754846111fb919061280d565b6112059190612824565b61120f9084612846565b9250505b5090565b6000546001600160a01b031633146112415760405162461bcd60e51b815260040161050f90612491565b6004546040518291907f3b779194d2cc7daf4de546bec10f6f325d421b2e202c11aa24e86e39845860cc90600090a3600455565b6001546001600160a01b03163381146112d05760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e6572604482015260640161050f565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316179055600180549091169055565b600061133c611993565b905090565b6000546001600160a01b0316331461136b5760405162461bcd60e51b815260040161050f90612491565b60056105f78284836129e2565b6060604051806060016040528060278152602001612b3960279139905090565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146113ff5760405162461bcd60e51b815260206004820152600c60248201526b09cdee840b2d2cad8c884def60a31b604482015260640161050f565b61140881611ad5565b50565b600080546001600160a01b031633146114365760405162461bcd60e51b815260040161050f90612491565b6040516322a58c5d60e01b815230906322a58c5d9061145a90600590600401612aa2565b600060405180830381600087803b15801561147457600080fd5b505af1925050508015611485575060015b6114bb573d8080156114b3576040519150601f19603f3d011682016040523d82523d6000602084013e6114b8565b606091505b50505b604051632fe4a15f60e21b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063bf92857c9060240160c060405180830381865afa158015611522573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115469190612ab5565b5050604051631a4ca37b60e21b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018690523060448301529495507f0000000000000000000000000000000000000000000000000000000000000000909416936369328dec935060640191506115cd9050565b6020604051808303816000875af11580156115ec573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061161091906124c6565b6006805460ff1916600117905592915050565b6000546001600160a01b0316331461164d5760405162461bcd60e51b815260040161050f90612491565b60035460405163095ea7b360e01b81526001600160a01b039182166004820152600060248201527f00000000000000000000000000000000000000000000000000000000000000009091169063095ea7b3906044016020604051808303816000875af11580156116c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116e59190612aff565b506003546040516001600160a01b038084169216907fe36d79dcda63d47bee388b7dde8bba0b326a1b459889de48dc94dcf3504eda4b90600090a3600380546001600160a01b0319166001600160a01b0383811691821790925560405163095ea7b360e01b81526004810191909152600060248201527f00000000000000000000000000000000000000000000000000000000000000009091169063095ea7b3906044016020604051808303816000875af11580156117a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117cc9190612aff565b5060405163095ea7b360e01b81526001600160a01b03828116600483015260001960248301527f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b3906044016020604051808303816000875af115801561183d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118619190612aff565b5050565b6000546001600160a01b0316331461188f5760405162461bcd60e51b815260040161050f90612491565b600755565b600580546118a1906128c3565b80601f01602080910402602001604051908101604052809291908181526020018280546118cd906128c3565b801561191a5780601f106118ef5761010080835404028352916020019161191a565b820191906000526020600020905b8154815290600101906020018083116118fd57829003601f168201915b505050505081565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146119895760405162461bcd60e51b815260206004820152600c60248201526b09cdee840b2d2cad8c884def60a31b604482015260640161050f565b6118618282611cd1565b604051632fe4a15f60e21b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063bf92857c9060240160c060405180830381865afa1580156119fa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a1e9190612ab5565b50506040516370a0823160e01b81523060048201529394506000937f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031693506370a0823192506024019050602060405180830381865afa158015611a8e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ab291906124c6565b90506000611abe61101d565b905080611acb83856125bf565b61120f91906125bf565b611add61203e565b60065460ff1615611b235760405162461bcd60e51b815260206004820152601060248201526f14dd185c99d85d194e881c185d5cd95960821b604482015260640161050f565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611b8a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bae91906124c6565b9050600454811115611c9a5760405163e8eda9df60e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116600483015260248201839052306044830152600060648301527f0000000000000000000000000000000000000000000000000000000000000000169063e8eda9df90608401600060405180830381600087803b158015611c5157600080fd5b505af1158015611c65573d6000803e3d6000fd5b50506040518392507fde22222b0ac0d69f2a19cd7b1443a29a5f37346640fff3506bdd6a9a9497f9d39150600090a250611cc7565b60405182907f9447d5abbf0af693ca2937bf8b1ec6a8c9dc4fbac672911c633fb31c78e5e3ca90600090a2505b6114086001600255565b611cd961203e565b6000611ce3611993565b905081811015611d355760405162461bcd60e51b815260206004820152601e60248201527f4161766553747261746567793a20616d6f756e74206e6f742076616c69640000604482015260640161050f565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611d9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611dc091906124c6565b905080831115611fc8576040516322a58c5d60e01b815230906322a58c5d90611dee90600590600401612aa2565b600060405180830381600087803b158015611e0857600080fd5b505af1925050508015611e19575060015b611e4f573d808015611e47576040519150601f19603f3d011682016040523d82523d6000602084013e611e4c565b606091505b50505b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611eb3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ed791906124c6565b90506000611ee58285612846565b604051631a4ca37b60e21b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018390523060448301529192506000917f000000000000000000000000000000000000000000000000000000000000000016906369328dec906064016020604051808303816000875af1158015611f80573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fa491906124c6565b905081811115611fc557611fb88282612846565b611fc290866125bf565b94505b50505b611ffc6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168585612095565b60405183906001600160a01b038616907f058b581e2433b8b02263f5b0e5c2889fcb7b3495112884a3147619038fba46d890600090a350506118616001600255565b600280540361208f5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161050f565b60028055565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392908716916120f19190612b1c565b6000604051808303816000865af19150503d806000811461212e576040519150601f19603f3d011682016040523d82523d6000602084013e612133565b606091505b509150915081801561215d57508051158061215d57508080602001905181019061215d9190612aff565b6121a95760405162461bcd60e51b815260206004820152601c60248201527f426f72696e6745524332303a205472616e73666572206661696c656400000000604482015260640161050f565b5050505050565b60005b838110156121cb5781810151838201526020016121b3565b50506000910152565b600081518084526121ec8160208601602086016121b0565b601f01601f19169290920160200192915050565b60208152600061221360208301846121d4565b9392505050565b6001600160a01b038116811461140857600080fd5b801515811461140857600080fd5b60008060006060848603121561225257600080fd5b833561225d8161221a565b9250602084013561226d8161222f565b9150604084013561227d8161222f565b809150509250925092565b60006020828403121561229a57600080fd5b81356122138161222f565b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff811182821017156122de576122de6122a5565b60405290565b6000602082840312156122f657600080fd5b813567ffffffffffffffff8082111561230e57600080fd5b818401915084601f83011261232257600080fd5b813581811115612334576123346122a5565b604051601f8201601f19908116603f0116810190838211818310171561235c5761235c6122a5565b8160405282815287602084870101111561237557600080fd5b826020860160208301376000928101602001929092525095945050505050565b60208101600583106123b757634e487b7160e01b600052602160045260246000fd5b91905290565b6000602082840312156123cf57600080fd5b5035919050565b600080602083850312156123e957600080fd5b823567ffffffffffffffff8082111561240157600080fd5b818501915085601f83011261241557600080fd5b81358181111561242457600080fd5b86602082850101111561243657600080fd5b60209290920196919550909350505050565b60006020828403121561245a57600080fd5b81356122138161221a565b6000806040838503121561247857600080fd5b82356124838161221a565b946020939093013593505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6000602082840312156124d857600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b606080825284519082018190526000906020906080840190828801845b828110156125375781516001600160a01b031684529284019290840190600101612512565b50505090830194909452506001600160a01b0391909116604090910152919050565b6000806040838503121561256c57600080fd5b825164ffffffffff8116811461258157600080fd5b60208401519092506001600160d81b038116811461259e57600080fd5b809150509250929050565b634e487b7160e01b600052601160045260246000fd5b808201808211156125d2576125d26125a9565b92915050565b6001600160a01b039687168152949095166020850152604084019290925260608301521515608082015290151560a082015260c00190565b60006080828403121561262257600080fd5b61262a6122bb565b90508151815260208201516020820152604082015160408201526060820151606082015292915050565b60006040828403121561266657600080fd5b6040516040810181811067ffffffffffffffff82111715612689576126896122a5565b8060405250809150825161269c8161222f565b815260208301516126ac8161222f565b6020919091015292915050565b60008183036101408112156126cd57600080fd5b6040516060810181811067ffffffffffffffff821117156126f0576126f06122a5565b604052608082121561270157600080fd5b6127096122bb565b915083516127168161221a565b82526020848101519083015260408401516127308161221a565b60408301526060848101519083015281815261274f8560808601612610565b6020820152612762856101008601612654565b6040820152949350505050565b805180516001600160a01b03908116845260208083015181860152604080840151909216828601526060928301518386015280840151805160808701528082015160a08701528083015160c08701529092015160e085015290910151805115156101008401520151151561012090910152565b60006101606127f1838661276f565b80610140840152612804818401856121d4565b95945050505050565b80820281158282048414176125d2576125d26125a9565b60008261284157634e487b7160e01b600052601260045260246000fd5b500490565b818103818111156125d2576125d26125a9565b60006101a0612868838861276f565b61014083018690526001600160a01b0385166101608401526101808301819052612894818401856121d4565b979650505050505050565b600080604083850312156128b257600080fd5b505080516020909101519092909150565b600181811c908216806128d757607f821691505b6020821081036128f757634e487b7160e01b600052602260045260246000fd5b50919050565b6000815461290a816128c3565b80855260206001838116801561292757600181146129415761296f565b60ff1985168884015283151560051b88018301955061296f565b866000528260002060005b858110156129675781548a820186015290830190840161294c565b890184019650505b505050505092915050565b6000610160612989838661276f565b80610140840152612804818401856128fd565b601f8211156105f757600081815260208120601f850160051c810160208610156129c35750805b601f850160051c820191505b81811015611015578281556001016129cf565b67ffffffffffffffff8311156129fa576129fa6122a5565b612a0e83612a0883546128c3565b8361299c565b6000601f841160018114612a425760008515612a2a5750838201355b600019600387901b1c1916600186901b1783556121a9565b600083815260209020601f19861690835b82811015612a735786850135825560209485019460019092019101612a53565b5086821015612a905760001960f88860031b161c19848701351681555b505060018560011b0183555050505050565b60208152600061221360208301846128fd565b60008060008060008060c08789031215612ace57600080fd5b865195506020870151945060408701519350606087015192506080870151915060a087015190509295509295509295565b600060208284031215612b1157600080fd5b81516122138161222f565b60008251612b2e8184602087016121b0565b919091019291505056fe4141564520737472617465677920666f722077726170706564206e617469766520617373657473a2646970667358221220e162e0b27ffd1718c08045dc0bb86b2f35fad2f6e5a20cc0e40abb3fc495df0164736f6c63430008120033";

type AaveStrategyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AaveStrategyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AaveStrategy__factory extends ContractFactory {
  constructor(...args: AaveStrategyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AaveStrategy";
  }

  override deploy(
    _yieldBox: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _lendingPool: PromiseOrValue<string>,
    _incentivesController: PromiseOrValue<string>,
    _receiptToken: PromiseOrValue<string>,
    _multiSwapper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AaveStrategy> {
    return super.deploy(
      _yieldBox,
      _token,
      _lendingPool,
      _incentivesController,
      _receiptToken,
      _multiSwapper,
      overrides || {}
    ) as Promise<AaveStrategy>;
  }
  override getDeployTransaction(
    _yieldBox: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _lendingPool: PromiseOrValue<string>,
    _incentivesController: PromiseOrValue<string>,
    _receiptToken: PromiseOrValue<string>,
    _multiSwapper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _yieldBox,
      _token,
      _lendingPool,
      _incentivesController,
      _receiptToken,
      _multiSwapper,
      overrides || {}
    );
  }
  override attach(address: string): AaveStrategy {
    return super.attach(address) as AaveStrategy;
  }
  override connect(signer: Signer): AaveStrategy__factory {
    return super.connect(signer) as AaveStrategy__factory;
  }
  static readonly contractName: "AaveStrategy";

  public readonly contractName: "AaveStrategy";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AaveStrategyInterface {
    return new utils.Interface(_abi) as AaveStrategyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AaveStrategy {
    return new Contract(address, _abi, signerOrProvider) as AaveStrategy;
  }
}

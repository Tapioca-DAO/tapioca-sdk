/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  SDaiStrategy,
  SDaiStrategyInterface,
} from "../../sdai/SDaiStrategy";

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
        internalType: "contract ISavingsDai",
        name: "_sDai",
        type: "address",
      },
      {
        internalType: "address",
        name: "_feeRecipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_feeBps",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "NotEnough",
    type: "error",
  },
  {
    inputs: [],
    name: "Paused",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenNotValid",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFailed",
    type: "error",
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
    inputs: [],
    name: "FEE_BPS",
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
    name: "dai",
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
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeRecipient",
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
    name: "feesPending",
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
    name: "harvestable",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fees",
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
    inputs: [],
    name: "sDai",
    outputs: [
      {
        internalType: "contract ISavingsDai",
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
    inputs: [],
    name: "totalActiveDeposits",
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
        name: "_val",
        type: "address",
      },
    ],
    name: "updateFeeRecipient",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawFees",
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
  "0x6101206040523480156200001257600080fd5b506040516200215138038062002151833981016040819052620000359162000225565b6001600160a01b03808716608052851660a052600080546001600160a01b03191633908117825560405185928592917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36001600255600380546001600160a01b039384166001600160a01b03199182161790915560c091909152600080549091163317905584811660e05260408051633c2f4f4360e11b815290519187169163785e9e86916004808201926020929091908290030181865afa15801562000104573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200012a9190620002ad565b6001600160a01b0316610100816001600160a01b03168152505060e0516001600160a01b031663f4b9fa756040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000185573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001ab9190620002ad565b6001600160a01b0316610100516001600160a01b031614620001e0576040516358700a0160e11b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b039290921691909117905550620002d49350505050565b6001600160a01b03811681146200022257600080fd5b50565b60008060008060008060c087890312156200023f57600080fd5b86516200024c816200020c565b60208801519096506200025f816200020c565b604088015190955062000272816200020c565b606088015190945062000285816200020c565b608088015160a089015191945092506200029f816200020c565b809150509295509295509295565b600060208284031215620002c057600080fd5b8151620002cd816200020c565b9392505050565b60805160a05160c05160e05161010051611d6d620003e4600039600081816105a40152818161099801528181610d7c015281816113c40152611882015260008181610397015281816108dc01528181610c2f01528181610cc001528181610e9e01528181610ff901528181611395015281816114500152818161159d01526117c601526000818161049d0152611a530152600081816105d80152818161096901528181610a2901528181610a9d01528181610d4d01528181610e0d015281816110870152818161126b0152818161131c015281816116330152818161173e0152818161185301528181611913015261198401526000818161051001528181610ad50152610f6d0152611d6d6000f3fe6080604052600436106101d15760003560e01c80638a9fbc99116100f7578063dbbd47d411610095578063f160d36911610064578063f160d36914610552578063f3fef3a314610572578063f4b9fa7514610592578063f6b4dfb4146105c657600080fd5b8063dbbd47d4146104d4578063de406577146104fe578063e30c397814610532578063e3575f051461032657600080fd5b8063b25ea8fb116100d1578063b25ea8fb1461046b578063bf333f2c1461048b578063ce845d1d14610326578063db2e21bc146104bf57600080fd5b80638a9fbc99146104155780638da5cb5b1461042b578063afa91cc61461044b57600080fd5b80634cce992d1161016f5780635e318e071161013e5780635e318e0714610365578063638bc789146103855780637284e416146103b9578063734daaa1146103ff57600080fd5b80634cce992d146102f15780634e71e0c81461031157806350188301146103265780635c975abb1461033b57600080fd5b806317d70f7c116101ab57806317d70f7c1461025e57806330fa738c14610281578063320113cd146102a357806346904840146102b957600080fd5b806306fdde03146101dd578063078dfbe71461021c57806308cdc2a81461023e57600080fd5b366101d857005b600080fd5b3480156101e957600080fd5b506040805180820190915260048152637344616960e01b60208201525b6040516102139190611ab9565b60405180910390f35b34801561022857600080fd5b5061023c610237366004611b16565b6105fa565b005b34801561024a57600080fd5b5061023c610259366004611b5f565b610711565b34801561026a57600080fd5b50610273600081565b604051908152602001610213565b34801561028d57600080fd5b50610296600181565b6040516102139190611b83565b3480156102af57600080fd5b5061027360045481565b3480156102c557600080fd5b506003546102d9906001600160a01b031681565b6040516001600160a01b039091168152602001610213565b3480156102fd57600080fd5b5061023c61030c366004611bab565b61074e565b34801561031d57600080fd5b5061023c6107ac565b34801561033257600080fd5b50610273610869565b34801561034757600080fd5b506007546103559060ff1681565b6040519015158152602001610213565b34801561037157600080fd5b5061023c610380366004611bab565b610878565b34801561039157600080fd5b506102d97f000000000000000000000000000000000000000000000000000000000000000081565b3480156103c557600080fd5b5060408051808201909152601d81527f7344616920737472617465677920666f722074446169206173736574730000006020820152610206565b34801561040b57600080fd5b5061027360065481565b34801561042157600080fd5b5061027360055481565b34801561043757600080fd5b506000546102d9906001600160a01b031681565b34801561045757600080fd5b5061023c610466366004611bab565b610aca565b34801561047757600080fd5b5061023c610486366004611bc4565b610b3a565b34801561049757600080fd5b506102737f000000000000000000000000000000000000000000000000000000000000000081565b3480156104cb57600080fd5b5061023c610bd8565b3480156104e057600080fd5b506104e9610e74565b60408051928352602083019190915201610213565b34801561050a57600080fd5b506102d97f000000000000000000000000000000000000000000000000000000000000000081565b34801561053e57600080fd5b506001546102d9906001600160a01b031681565b34801561055e57600080fd5b5061023c61056d366004611bf0565b610f16565b34801561057e57600080fd5b5061023c61058d366004611c0b565b610f62565b34801561059e57600080fd5b506102d97f000000000000000000000000000000000000000000000000000000000000000081565b3480156105d257600080fd5b506102d97f000000000000000000000000000000000000000000000000000000000000000081565b6000546001600160a01b0316331461062d5760405162461bcd60e51b815260040161062490611c35565b60405180910390fd5b81156106f0576001600160a01b0383161515806106475750805b61068b5760405162461bcd60e51b81526020600482015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152606401610624565b600080546040516001600160a01b03808716939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0385166001600160a01b031991821617909155600180549091169055505050565b600180546001600160a01b0319166001600160a01b0385161790555b505050565b6000546001600160a01b0316331461073b5760405162461bcd60e51b815260040161062490611c35565b6007805460ff1916911515919091179055565b6000546001600160a01b031633146107785760405162461bcd60e51b815260040161062490611c35565b6006546040518291907f3b779194d2cc7daf4de546bec10f6f325d421b2e202c11aa24e86e39845860cc90600090a3600655565b6001546001600160a01b03163381146108075760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152606401610624565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316179055600180549091169055565b6000610873610fd7565b905090565b6000546001600160a01b031633146108a25760405162461bcd60e51b815260040161062490611c35565b80600460008282546108b49190611c80565b9091555050604051632d182be560e21b815260048101829052306024820181905260448201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063b460af94906064016020604051808303816000875af115801561092d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109519190611c99565b5060405163095ea7b360e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018390527f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b3906044016020604051808303816000875af11580156109e1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a059190611cb2565b50604051630c46aac760e31b815230600482018190526024820152604481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636235563890606401600060405180830381600087803b158015610a7557600080fd5b505af1158015610a89573d6000803e3d6000fd5b5050600354610ac792506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811692501683611113565b50565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610b315760405162461bcd60e51b815260206004820152600c60248201526b09cdee840b2d2cad8c884def60a31b6044820152606401610624565b610ac781611227565b6000546001600160a01b03163314610b645760405162461bcd60e51b815260040161062490611c35565b6000816001600160a01b03168360405160006040518083038185875af1925050503d8060008114610bb1576040519150601f19603f3d011682016040523d82523d6000602084013e610bb6565b606091505b505090508061070c576040516312171d8360e31b815260040160405180910390fd5b6000546001600160a01b03163314610c025760405162461bcd60e51b815260040161062490611c35565b6007805460ff1916600117905560405163ce96cb7760e01b81523060048201526000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063ce96cb7790602401602060405180830381865afa158015610c76573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c9a9190611c99565b604051632d182be560e21b815260048101829052306024820181905260448201529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063b460af94906064016020604051808303816000875af1158015610d11573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d359190611c99565b5060405163095ea7b360e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018390527f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b3906044016020604051808303816000875af1158015610dc5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de99190611cb2565b50604051630c46aac760e31b815230600482018190526024820152604481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636235563890606401600060405180830381600087803b158015610e5957600080fd5b505af1158015610e6d573d6000803e3d6000fd5b5050505050565b60055460405163ce96cb7760e01b81523060048201526000918291610f0e91906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063ce96cb7790602401602060405180830381865afa158015610ee5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f099190611c99565b61152e565b939092509050565b6000546001600160a01b03163314610f405760405162461bcd60e51b815260040161062490611c35565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610fc95760405162461bcd60e51b815260206004820152600c60248201526b09cdee840b2d2cad8c884def60a31b6044820152606401610624565b610fd38282611559565b5050565b60405163ce96cb7760e01b815230600482015260009081906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063ce96cb7790602401602060405180830381865afa158015611040573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110649190611c99565b6040516370a0823160e01b81523060048201529091506000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa1580156110ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110f29190611c99565b6004549091506111028383611ccf565b61110c9190611c80565b9250505090565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283929087169161116f9190611ce2565b6000604051808303816000865af19150503d80600081146111ac576040519150601f19603f3d011682016040523d82523d6000602084013e6111b1565b606091505b50915091508180156111db5750805115806111db5750808060200190518101906111db9190611cb2565b610e6d5760405162461bcd60e51b815260206004820152601c60248201527f426f72696e6745524332303a205472616e73666572206661696c6564000000006044820152606401610624565b61122f6119f1565b60075460ff1615611253576040516313d0ff5960e31b815260040160405180910390fd5b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156112ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112de9190611c99565b905080600560008282546112f29190611ccf565b909155505060065481106114f7576040516339f4769360e01b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906339f4769390604401600060405180830381600087803b15801561136857600080fd5b505af115801561137c573d6000803e3d6000fd5b505060405163095ea7b360e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018590527f000000000000000000000000000000000000000000000000000000000000000016925063095ea7b391506044016020604051808303816000875af115801561140f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114339190611cb2565b50604051636e553f6560e01b8152600481018290523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af11580156114a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114c59190611c99565b5060405181907fde22222b0ac0d69f2a19cd7b1443a29a5f37346640fff3506bdd6a9a9497f9d390600090a250611524565b60405182907f9447d5abbf0af693ca2937bf8b1ec6a8c9dc4fbac672911c633fb31c78e5e3ca90600090a2505b610ac76001600255565b60008083831115611552576115438484611c80565b905061154e81611a48565b9250505b9250929050565b6115616119f1565b60075460ff1615611585576040516313d0ff5960e31b815260040160405180910390fd5b60405163ce96cb7760e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063ce96cb7790602401602060405180830381865afa1580156115ec573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116109190611c99565b6040516370a0823160e01b81523060048201529091506000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa15801561167a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061169e9190611c99565b90508282820110156116c35760405163342ccafd60e21b815260040160405180910390fd5b60008184116116d35760006116d7565b8184035b6005549091506000806116ea838761152e565b9092509050811561170d5781600460008282546117079190611ccf565b90915550505b866117188285611ccf565b6117229190611c80565b60055550505060008190036117a3576117656001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168686611113565b60405184906001600160a01b038716907f058b581e2433b8b02263f5b0e5c2889fcb7b3495112884a3147619038fba46d890600090a35050506119e7565b604051632d182be560e21b815260048101829052306024820181905260448201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063b460af94906064016020604051808303816000875af1158015611817573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061183b9190611c99565b5060405163095ea7b360e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018390527f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b3906044016020604051808303816000875af11580156118cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118ef9190611cb2565b50604051630c46aac760e31b815230600482018190526024820152604481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636235563890606401600060405180830381600087803b15801561195f57600080fd5b505af1158015611973573d6000803e3d6000fd5b506119ad9250506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690508686611113565b60405184906001600160a01b038716907f058b581e2433b8b02263f5b0e5c2889fcb7b3495112884a3147619038fba46d890600090a35050505b610fd36001600255565b6002805403611a425760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610624565b60028055565b600080612710611a787f000000000000000000000000000000000000000000000000000000000000000085611cfe565b611a829190611d15565b9050611a8e8184611c80565b9150915091565b60005b83811015611ab0578181015183820152602001611a98565b50506000910152565b6020815260008251806020840152611ad8816040850160208701611a95565b601f01601f19169190910160400192915050565b80356001600160a01b0381168114611b0357600080fd5b919050565b8015158114610ac757600080fd5b600080600060608486031215611b2b57600080fd5b611b3484611aec565b92506020840135611b4481611b08565b91506040840135611b5481611b08565b809150509250925092565b600060208284031215611b7157600080fd5b8135611b7c81611b08565b9392505050565b6020810160058310611ba557634e487b7160e01b600052602160045260246000fd5b91905290565b600060208284031215611bbd57600080fd5b5035919050565b60008060408385031215611bd757600080fd5b82359150611be760208401611aec565b90509250929050565b600060208284031215611c0257600080fd5b611b7c82611aec565b60008060408385031215611c1e57600080fd5b611c2783611aec565b946020939093013593505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052601160045260246000fd5b81810381811115611c9357611c93611c6a565b92915050565b600060208284031215611cab57600080fd5b5051919050565b600060208284031215611cc457600080fd5b8151611b7c81611b08565b80820180821115611c9357611c93611c6a565b60008251611cf4818460208701611a95565b9190910192915050565b8082028115828204841417611c9357611c93611c6a565b600082611d3257634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220bf139613017e7ab6b5cf0564f2cca73a2a1622c04963ee80205e52fc064435ab64736f6c63430008130033";

type SDaiStrategyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SDaiStrategyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SDaiStrategy__factory extends ContractFactory {
  constructor(...args: SDaiStrategyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "SDaiStrategy";
  }

  override deploy(
    _yieldBox: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _sDai: PromiseOrValue<string>,
    _feeRecipient: PromiseOrValue<string>,
    _feeBps: PromiseOrValue<BigNumberish>,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SDaiStrategy> {
    return super.deploy(
      _yieldBox,
      _token,
      _sDai,
      _feeRecipient,
      _feeBps,
      _owner,
      overrides || {}
    ) as Promise<SDaiStrategy>;
  }
  override getDeployTransaction(
    _yieldBox: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _sDai: PromiseOrValue<string>,
    _feeRecipient: PromiseOrValue<string>,
    _feeBps: PromiseOrValue<BigNumberish>,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _yieldBox,
      _token,
      _sDai,
      _feeRecipient,
      _feeBps,
      _owner,
      overrides || {}
    );
  }
  override attach(address: string): SDaiStrategy {
    return super.attach(address) as SDaiStrategy;
  }
  override connect(signer: Signer): SDaiStrategy__factory {
    return super.connect(signer) as SDaiStrategy__factory;
  }
  static readonly contractName: "SDaiStrategy";

  public readonly contractName: "SDaiStrategy";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SDaiStrategyInterface {
    return new utils.Interface(_abi) as SDaiStrategyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SDaiStrategy {
    return new Contract(address, _abi, signerOrProvider) as SDaiStrategy;
  }
}

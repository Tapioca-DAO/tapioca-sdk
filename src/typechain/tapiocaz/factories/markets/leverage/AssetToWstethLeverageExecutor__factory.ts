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
  AssetToWstethLeverageExecutor,
  AssetToWstethLeverageExecutorInterface,
} from "../../../markets/leverage/AssetToWstethLeverageExecutor";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IYieldBox",
        name: "_yb",
        type: "address",
      },
      {
        internalType: "contract ISwapper",
        name: "_swapper",
        type: "address",
      },
      {
        internalType: "contract ICluster",
        name: "_cluster",
        type: "address",
      },
      {
        internalType: "address",
        name: "_weth",
        type: "address",
      },
      {
        internalType: "address",
        name: "_balancerVault",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_balancerPoolId",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Failed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "NotEnough",
    type: "error",
  },
  {
    inputs: [],
    name: "SenderNotValid",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapperNotAuthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapperNotValid",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenNotValid",
    type: "error",
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
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    name: "buildSwapDefaultData",
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
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cluster",
    outputs: [
      {
        internalType: "contract ICluster",
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
        name: "assetId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "collateralAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "assetAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "collateralAmountIn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "getAsset",
    outputs: [
      {
        internalType: "uint256",
        name: "assetAmountOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "collateralId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "assetAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "collateralAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "assetAmountIn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "getCollateral",
    outputs: [
      {
        internalType: "uint256",
        name: "collateralAmountOut",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
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
        internalType: "contract ICluster",
        name: "_cluster",
        type: "address",
      },
    ],
    name: "setCluster",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISwapper",
        name: "_swapper",
        type: "address",
      },
    ],
    name: "setSwapper",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "weth",
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
  "0x60c06040523480156200001157600080fd5b5060405162001cf138038062001cf18339810160408190526200003491620000f6565b600080546001600160a01b0319163390811782556040518892889288929091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36001600160a01b03928316608052600380549284166001600160a01b0319938416179055600280549184169183169190911790556000805482163317905593811660a05260048054939091169290931691909117909155600555506200017e915050565b6001600160a01b0381168114620000f357600080fd5b50565b60008060008060008060c087890312156200011057600080fd5b86516200011d81620000dd565b60208801519096506200013081620000dd565b60408801519095506200014381620000dd565b60608801519094506200015681620000dd565b60808801519093506200016981620000dd565b8092505060a087015190509295509295509295565b60805160a051611b1c620001d5600039600081816101ad01528181610608015281816106410152818161092201528181610a170152610a4501526000818161028901528181610ea50152610f060152611b1c6000f3fe6080604052600436106100ec5760003560e01c80638da5cb5b1161008a578063de40657711610059578063de40657714610277578063e2211658146102ab578063e30c3978146102d8578063fbfa77cf146102f857600080fd5b80638da5cb5b146102045780639c82f2a414610224578063c990ad1c14610244578063dbd01de11461025757600080fd5b80633e0dc34e116100c65780633e0dc34e146101855780633fc8cef31461019b578063437be622146101cf5780634e71e0c8146101ef57600080fd5b8063078dfbe7146100f85780630fb5d60d1461011a5780632b3297f91461014d57600080fd5b366100f357005b600080fd5b34801561010457600080fd5b5061011861011336600461135e565b610318565b005b34801561012657600080fd5b5061013a6101353660046113a9565b610462565b6040519081526020015b60405180910390f35b34801561015957600080fd5b5060035461016d906001600160a01b031681565b6040516001600160a01b039091168152602001610144565b34801561019157600080fd5b5061013a60055481565b3480156101a757600080fd5b5061016d7f000000000000000000000000000000000000000000000000000000000000000081565b3480156101db57600080fd5b506101186101ea366004611467565b6106b6565b3480156101fb57600080fd5b50610118610732565b34801561021057600080fd5b5060005461016d906001600160a01b031681565b34801561023057600080fd5b5061011861023f366004611467565b6107ef565b61013a6102523660046113a9565b61086b565b34801561026357600080fd5b5060025461016d906001600160a01b031681565b34801561028357600080fd5b5061016d7f000000000000000000000000000000000000000000000000000000000000000081565b3480156102b757600080fd5b506102cb6102c636600461148b565b610b0f565b604051610144919061151c565b3480156102e457600080fd5b5060015461016d906001600160a01b031681565b34801561030457600080fd5b5060045461016d906001600160a01b031681565b6000546001600160a01b031633146103775760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b8115610442576001600160a01b0383161515806103915750805b6103dd5760405162461bcd60e51b815260206004820152601560248201527f4f776e61626c653a207a65726f20616464726573730000000000000000000000604482015260640161036e565b600080546040516001600160a01b03808716939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0385166001600160a01b031991821617909155600180549091169055505050565b600180546001600160a01b0319166001600160a01b038516179055505050565b600254604051631ccfd32160e31b8152600060048201819052336024830152916001600160a01b03169063e67e990890604401602060405180830381865afa1580156104b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d6919061152f565b6104f3576040516303482c7160e21b815260040160405180910390fd5b6104fb610b3f565b6000808061050b85870187611618565b6040516339f4769360e01b8152306004820152602481018c905292955090935091506001600160a01b038b16906339f4769390604401600060405180830381600087803b15801561055b57600080fd5b505af115801561056f573d6000803e3d6000fd5b5050505060008a6001600160a01b031663785e9e866040518163ffffffff1660e01b8152600401602060405180830381865afa1580156105b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d79190611668565b90506001600160a01b038116610600576040516358700a0160e11b815260040160405180910390fd5b600061063a827f00000000000000000000000000000000000000000000000000000000000000008c8861063542610258611685565b610bfe565b905061066b7f00000000000000000000000000000000000000000000000000000000000000008c8387876000610d5b565b955083861015610699576040516328e217f560e01b81526001600160a01b038c16600482015260240161036e565b6106a68d8c308c8a610e96565b5050505050979650505050505050565b6000546001600160a01b031633146107105760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161036e565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b6001546001600160a01b031633811461078d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e6572604482015260640161036e565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316179055600180549091169055565b6000546001600160a01b031633146108495760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161036e565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b600254604051631ccfd32160e31b8152600060048201819052336024830152916001600160a01b03169063e67e990890604401602060405180830381865afa1580156108bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108df919061152f565b6108fc576040516303482c7160e21b815260040160405180910390fd5b610904610b3f565b60008080610914858701876116ac565b925092509250600061094b8b7f00000000000000000000000000000000000000000000000000000000000000008b87876000610d5b565b905083811015610979576040516328e217f560e01b81526001600160a01b038c16600482015260240161036e565b60008a6001600160a01b031663785e9e866040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109dd9190611668565b90506001600160a01b038116610a06576040516358700a0160e11b815260040160405180910390fd5b600454610a40906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116911684610f7b565b610a737f000000000000000000000000000000000000000000000000000000000000000082848661063542610258611685565b9550610a896001600160a01b0382168c88610f7b565b604051630c46aac760e31b815230600482018190526024820152604481018790526001600160a01b038c16906362355638906064016020604051808303816000875af1158015610add573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b0191906116fc565b506106a68d8c308c8a610e96565b6060610b3784848460405180604001604052806002815260200161060f60f31b815250611204565b949350505050565b6003546001600160a01b0316610b6857604051631da137b560e01b815260040160405180910390fd5b600254600354604051631ccfd32160e31b8152600060048201526001600160a01b03918216602482015291169063e67e990890604401602060405180830381865afa158015610bbb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bdf919061152f565b610bfc5760405163086a95e160e21b815260040160405180910390fd5b565b6040805160808101825230808252600060208084018290528385019290925260608301819052835160c0810190945260055484529283918101828152602001896001600160a01b03168152602001886001600160a01b0316815260200187815260200160405180604001604052806002815260200161060f60f31b815250815250905060006001600160a01b0316886001600160a01b031614610cb557600454610cb5906001600160a01b038a8116911688610f7b565b600480546040516352bbbe2960e01b81526001600160a01b03909116916352bbbe2991610cea91859187918b918b9101611715565b6020604051808303816000875af1158015610d09573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d2d91906116fc565b925084831015610d505760405163312d207360e11b815260040160405180910390fd5b505095945050505050565b60035460405163678a252760e11b81526001600160a01b03888116600483015287811660248301526044820187905260006064830181905292839291169063cf144a4e9060840161014060405180830381865afa158015610dc0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de4919061189e565b90506001600160a01b03881615610e0f57600354610e0f906001600160a01b038a8116911688610f7b565b60035460405163efa84c6d60e01b81526001600160a01b039091169063efa84c6d908590610e479085908a9030908b90600401611954565b604080518083038185885af1158015610e64573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610e8991906119fd565b5098975050505050505050565b610eca6001600160a01b0385167f000000000000000000000000000000000000000000000000000000000000000083610f7b565b604051634d4d7cbd60e11b8152600481018690526001600160a01b038481166024830152838116604483015260648201839052600060848301527f00000000000000000000000000000000000000000000000000000000000000001690639a9af97a9060a40160408051808303816000875af1158015610f4e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f7291906119fd565b50505050505050565b6000836001600160a01b03163b11610fd55760405162461bcd60e51b815260206004820152601860248201527f53616665417070726f76653a206e6f20636f6e74726163740000000000000000604482015260640161036e565b6040516001600160a01b0383811660248301526000604483018190529160609186169060640160408051601f198184030181529181526020820180516001600160e01b031663095ea7b360e01b179052516110309190611a21565b6000604051808303816000865af19150503d806000811461106d576040519150601f19603f3d011682016040523d82523d6000602084013e611072565b606091505b50909250905081801561109d57508051158061109d57508080602001905181019061109d919061152f565b6110e95760405162461bcd60e51b815260206004820152601b60248201527f53616665417070726f76653a20617070726f7665206661696c65640000000000604482015260640161036e565b82156111fd576040516001600160a01b0385811660248301526044820185905286169060640160408051601f198184030181529181526020820180516001600160e01b031663095ea7b360e01b179052516111449190611a21565b6000604051808303816000865af19150503d8060008114611181576040519150601f19603f3d011682016040523d82523d6000602084013e611186565b606091505b5090925090508180156111b15750805115806111b15750808060200190518101906111b1919061152f565b6111fd5760405162461bcd60e51b815260206004820152601b60248201527f53616665417070726f76653a20617070726f7665206661696c65640000000000604482015260640161036e565b5050505050565b60035460405163678a252760e11b81526001600160a01b038681166004830152858116602483015260448201859052600060648301819052606093909291169063cf144a4e9060840161014060405180830381865afa15801561126b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061128f919061189e565b600354604051630b7ecdc960e31b81529192506000916001600160a01b0390911690635bf66e48906112c79085908890600401611a3d565b602060405180830381865afa1580156112e4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061130891906116fc565b9050808460405160200161131d929190611acd565b60405160208183030381529060405292505050949350505050565b6001600160a01b038116811461134d57600080fd5b50565b801515811461134d57600080fd5b60008060006060848603121561137357600080fd5b833561137e81611338565b9250602084013561138e81611350565b9150604084013561139e81611350565b809150509250925092565b600080600080600080600060c0888a0312156113c457600080fd5b8735965060208801356113d681611338565b955060408801356113e681611338565b94506060880135935060808801356113fd81611338565b925060a088013567ffffffffffffffff8082111561141a57600080fd5b818a0191508a601f83011261142e57600080fd5b81358181111561143d57600080fd5b8b602082850101111561144f57600080fd5b60208301945080935050505092959891949750929550565b60006020828403121561147957600080fd5b813561148481611338565b9392505050565b6000806000606084860312156114a057600080fd5b83356114ab81611338565b925060208401356114bb81611338565b929592945050506040919091013590565b60005b838110156114e75781810151838201526020016114cf565b50506000910152565b600081518084526115088160208601602086016114cc565b601f01601f19169290920160200192915050565b60208152600061148460208301846114f0565b60006020828403121561154157600080fd5b815161148481611350565b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff811182821017156115855761158561154c565b60405290565b600082601f83011261159c57600080fd5b813567ffffffffffffffff808211156115b7576115b761154c565b604051601f8301601f19908116603f011681019082821181831017156115df576115df61154c565b816040528381528660208588010111156115f857600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060006060848603121561162d57600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561165257600080fd5b61165e8682870161158b565b9150509250925092565b60006020828403121561167a57600080fd5b815161148481611338565b808201808211156116a657634e487b7160e01b600052601160045260246000fd5b92915050565b6000806000606084860312156116c157600080fd5b83359250602084013567ffffffffffffffff8111156116df57600080fd5b6116eb8682870161158b565b925050604084013590509250925092565b60006020828403121561170e57600080fd5b5051919050565b60e08152845160e0820152600060208601516002811061174557634e487b7160e01b600052602160045260246000fd5b61010083015260408601516001600160a01b0316610120830152606086015161177a6101408401826001600160a01b03169052565b50608086015161016083015260a086015160c06101808401526117a16101a08401826114f0565b9150506117e360208301866001600160a01b03808251168352602082015115156020840152806040830151166040840152506060810151151560608301525050565b60a082019390935260c0015292915050565b60006080828403121561180757600080fd5b61180f611562565b90508151815260208201516020820152604082015160408201526060820151606082015292915050565b60006040828403121561184b57600080fd5b6040516040810181811067ffffffffffffffff8211171561186e5761186e61154c565b8060405250809150825161188181611350565b8152602083015161189181611350565b6020919091015292915050565b60008183036101408112156118b257600080fd5b6040516060810181811067ffffffffffffffff821117156118d5576118d561154c565b60405260808212156118e657600080fd5b6118ee611562565b915083516118fb81611338565b825260208481015190830152604084015161191581611338565b60408301526060848101519083015281815261193485608086016117f5565b6020820152611947856101008601611839565b6040820152949350505050565b845180516001600160a01b03908116835260208083015181850152604080840151909216828501526060928301518385015280880151805160808601528082015160a08601528083015160c08601529092015160e0840152860151805115156101008401520151151561012082015260006101a0856101408401526001600160a01b038516610160840152806101808401526119f2818401856114f0565b979650505050505050565b60008060408385031215611a1057600080fd5b505080516020909101519092909150565b60008251611a338184602087016114cc565b9190910192915050565b825180516001600160a01b03908116835260208083015181850152604080840151909216828501526060928301518385015280860151805160808601528082015160a08601528083015160c08601529092015160e08401528401518051151561010084015201511515610120820152600061016080610140840152611ac4818401856114f0565b95945050505050565b828152604060208201526000610b3760408301846114f056fea2646970667358221220418e574b8fdc2c3981bf4324c73d26920b930f333b249bbc95b814d096da8fda64736f6c63430008160033";

type AssetToWstethLeverageExecutorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetToWstethLeverageExecutorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetToWstethLeverageExecutor__factory extends ContractFactory {
  constructor(...args: AssetToWstethLeverageExecutorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AssetToWstethLeverageExecutor";
  }

  override deploy(
    _yb: PromiseOrValue<string>,
    _swapper: PromiseOrValue<string>,
    _cluster: PromiseOrValue<string>,
    _weth: PromiseOrValue<string>,
    _balancerVault: PromiseOrValue<string>,
    _balancerPoolId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AssetToWstethLeverageExecutor> {
    return super.deploy(
      _yb,
      _swapper,
      _cluster,
      _weth,
      _balancerVault,
      _balancerPoolId,
      overrides || {}
    ) as Promise<AssetToWstethLeverageExecutor>;
  }
  override getDeployTransaction(
    _yb: PromiseOrValue<string>,
    _swapper: PromiseOrValue<string>,
    _cluster: PromiseOrValue<string>,
    _weth: PromiseOrValue<string>,
    _balancerVault: PromiseOrValue<string>,
    _balancerPoolId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _yb,
      _swapper,
      _cluster,
      _weth,
      _balancerVault,
      _balancerPoolId,
      overrides || {}
    );
  }
  override attach(address: string): AssetToWstethLeverageExecutor {
    return super.attach(address) as AssetToWstethLeverageExecutor;
  }
  override connect(signer: Signer): AssetToWstethLeverageExecutor__factory {
    return super.connect(signer) as AssetToWstethLeverageExecutor__factory;
  }
  static readonly contractName: "AssetToWstethLeverageExecutor";

  public readonly contractName: "AssetToWstethLeverageExecutor";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetToWstethLeverageExecutorInterface {
    return new utils.Interface(_abi) as AssetToWstethLeverageExecutorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetToWstethLeverageExecutor {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AssetToWstethLeverageExecutor;
  }
}
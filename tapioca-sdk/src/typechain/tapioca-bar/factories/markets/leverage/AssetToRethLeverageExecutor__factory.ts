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
  AssetToRethLeverageExecutor,
  AssetToRethLeverageExecutorInterface,
} from "../../../markets/leverage/AssetToRethLeverageExecutor";

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
  "0x60c06040523480156200001157600080fd5b50604051620021a9380380620021a98339810160408190526200003491620000f6565b600080546001600160a01b0319163390811782556040518892889288929091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36001600160a01b03928316608052600380549284166001600160a01b0319938416179055600280549184169183169190911790556000805482163317905593811660a05260048054939091169290931691909117909155600555506200017e915050565b6001600160a01b0381168114620000f357600080fd5b50565b60008060008060008060c087890312156200011057600080fd5b86516200011d81620000dd565b60208801519096506200013081620000dd565b60408801519095506200014381620000dd565b60608801519094506200015681620000dd565b60808801519093506200016981620000dd565b8092505060a087015190509295509295509295565b60805160a051611fcd620001dc600039600081816101ad015281816106d00152818161070901528181610acb01528181610b2e01528181610c120152610c400152600081816102890152818161119e01526112180152611fcd6000f3fe6080604052600436106100ec5760003560e01c80638da5cb5b1161008a578063de40657711610059578063de40657714610277578063e2211658146102ab578063e30c3978146102d8578063fbfa77cf146102f857600080fd5b80638da5cb5b146102045780639c82f2a414610224578063c990ad1c14610244578063dbd01de11461025757600080fd5b80633e0dc34e116100c65780633e0dc34e146101855780633fc8cef31461019b578063437be622146101cf5780634e71e0c8146101ef57600080fd5b8063078dfbe7146100f85780630fb5d60d1461011a5780632b3297f91461014d57600080fd5b366100f357005b600080fd5b34801561010457600080fd5b50610118610113366004611788565b610318565b005b34801561012657600080fd5b5061013a6101353660046117d3565b6104c6565b6040519081526020015b60405180910390f35b34801561015957600080fd5b5060035461016d906001600160a01b031681565b6040516001600160a01b039091168152602001610144565b34801561019157600080fd5b5061013a60055481565b3480156101a757600080fd5b5061016d7f000000000000000000000000000000000000000000000000000000000000000081565b3480156101db57600080fd5b506101186101ea366004611891565b610797565b3480156101fb57600080fd5b50610118610845565b34801561021057600080fd5b5060005461016d906001600160a01b031681565b34801561023057600080fd5b5061011861023f366004611891565b610934565b61013a6102523660046117d3565b6109e2565b34801561026357600080fd5b5060025461016d906001600160a01b031681565b34801561028357600080fd5b5061016d7f000000000000000000000000000000000000000000000000000000000000000081565b3480156102b757600080fd5b506102cb6102c63660046118b5565b610d23565b6040516101449190611964565b3480156102e457600080fd5b5060015461016d906001600160a01b031681565b34801561030457600080fd5b5060045461016d906001600160a01b031681565b6000546001600160a01b03163314610391576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b811561048e576001600160a01b0383161515806103ab5750805b610411576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4f776e61626c653a207a65726f206164647265737300000000000000000000006044820152606401610388565b600080546040516001600160a01b03808716939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0385167fffffffffffffffffffffffff000000000000000000000000000000000000000091821617909155600180549091169055505050565b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b038516179055505050565b6002546040517fe67e9908000000000000000000000000000000000000000000000000000000008152600060048201819052336024830152916001600160a01b03169063e67e990890604401602060405180830381865afa15801561052f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105539190611977565b610589576040517f0d20b1c400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610591610d6e565b600080806105a185870187611a97565b6040517f39f47693000000000000000000000000000000000000000000000000000000008152306004820152602481018c905292955090935091506001600160a01b038b16906339f4769390604401600060405180830381600087803b15801561060a57600080fd5b505af115801561061e573d6000803e3d6000fd5b5050505060008a6001600160a01b031663785e9e866040518163ffffffff1660e01b8152600401602060405180830381865afa158015610662573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106869190611ae7565b90506001600160a01b0381166106c8576040517fb0e0140200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610702827f00000000000000000000000000000000000000000000000000000000000000008c886106fd42610258611b04565b610e78565b90506107337f00000000000000000000000000000000000000000000000000000000000000008c8387876000611022565b95508386101561077a576040517f28e217f50000000000000000000000000000000000000000000000000000000081526001600160a01b038c166004820152602401610388565b6107878d8c308c8a61118f565b5050505050979650505050505050565b6000546001600160a01b0316331461080b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610388565b600280547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b6001546001600160a01b03163381146108ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152606401610388565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b6000546001600160a01b031633146109a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610388565b600380547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b6002546040517fe67e9908000000000000000000000000000000000000000000000000000000008152600060048201819052336024830152916001600160a01b03169063e67e990890604401602060405180830381865afa158015610a4b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a6f9190611977565b610aa5576040517f0d20b1c400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610aad610d6e565b60008080610abd85870187611b44565b9250925092506000610af48b7f00000000000000000000000000000000000000000000000000000000000000008b87876000611022565b905083811015610b5b576040517f28e217f50000000000000000000000000000000000000000000000000000000081526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166004820152602401610388565b60008a6001600160a01b031663785e9e866040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b9b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bbf9190611ae7565b90506001600160a01b038116610c01576040517fb0e0140200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600454610c3b906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811691168461128d565b610c6e7f00000000000000000000000000000000000000000000000000000000000000008284866106fd42610258611b04565b9550610c846001600160a01b0382168c8861128d565b6040517f6235563800000000000000000000000000000000000000000000000000000000815230600482018190526024820152604481018790526001600160a01b038c16906362355638906064016020604051808303816000875af1158015610cf1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d159190611b94565b506107878d8c308c8a61118f565b6060610d668484846040518060400160405280600281526020017f30780000000000000000000000000000000000000000000000000000000000008152506115fc565b949350505050565b6003546001600160a01b0316610db0576040517f1da137b500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002546003546040517fe67e9908000000000000000000000000000000000000000000000000000000008152600060048201526001600160a01b03918216602482015291169063e67e990890604401602060405180830381865afa158015610e1c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e409190611977565b610e76576040517f21aa578400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6040805160808101825230808252600060208084018290528385019290925260608301819052835160c0810190945260055484529283918101828152602001896001600160a01b03168152602001886001600160a01b031681526020018781526020016040518060400160405280600281526020017f3078000000000000000000000000000000000000000000000000000000000000815250815250905060006001600160a01b0316886001600160a01b031614610f4a57600454610f4a906001600160a01b038a811691168861128d565b600480546040517f52bbbe290000000000000000000000000000000000000000000000000000000081526001600160a01b03909116916352bbbe2991610f9891859187918b918b9101611bad565b6020604051808303816000875af1158015610fb7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fdb9190611b94565b925084831015611017576040517f625a40e600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505095945050505050565b6003546040517fcf144a4e0000000000000000000000000000000000000000000000000000000081526001600160a01b03888116600483015287811660248301526044820187905260006064830181905292839291169063cf144a4e9060840161014060405180830381865afa1580156110a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110c49190611d4f565b90506001600160a01b038816156110ef576003546110ef906001600160a01b038a811691168861128d565b6003546040517fefa84c6d0000000000000000000000000000000000000000000000000000000081526001600160a01b039091169063efa84c6d9085906111409085908a9030908b90600401611e05565b604080518083038185885af115801561115d573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906111829190611eae565b5098975050505050505050565b6111c36001600160a01b0385167f00000000000000000000000000000000000000000000000000000000000000008361128d565b6040517f9a9af97a000000000000000000000000000000000000000000000000000000008152600481018690526001600160a01b038481166024830152838116604483015260648201839052600060848301527f00000000000000000000000000000000000000000000000000000000000000001690639a9af97a9060a40160408051808303816000875af1158015611260573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112849190611eae565b50505050505050565b6000836001600160a01b03163b11611301576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f53616665417070726f76653a206e6f20636f6e747261637400000000000000006044820152606401610388565b6040516001600160a01b03838116602483015260006044830181905291606091861690606401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052516113a89190611ed2565b6000604051808303816000865af19150503d80600081146113e5576040519150601f19603f3d011682016040523d82523d6000602084013e6113ea565b606091505b5090925090508180156114155750805115806114155750808060200190518101906114159190611977565b61147b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f53616665417070726f76653a20617070726f7665206661696c656400000000006044820152606401610388565b82156115f5576040516001600160a01b03858116602483015260448201859052861690606401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052516115229190611ed2565b6000604051808303816000865af19150503d806000811461155f576040519150601f19603f3d011682016040523d82523d6000602084013e611564565b606091505b50909250905081801561158f57508051158061158f57508080602001905181019061158f9190611977565b6115f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f53616665417070726f76653a20617070726f7665206661696c656400000000006044820152606401610388565b5050505050565b6003546040517fcf144a4e0000000000000000000000000000000000000000000000000000000081526001600160a01b038681166004830152858116602483015260448201859052600060648301819052606093909291169063cf144a4e9060840161014060405180830381865afa15801561167c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116a09190611d4f565b6003546040517f5bf66e480000000000000000000000000000000000000000000000000000000081529192506000916001600160a01b0390911690635bf66e48906116f19085908890600401611eee565b602060405180830381865afa15801561170e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117329190611b94565b90508084604051602001611747929190611f7e565b60405160208183030381529060405292505050949350505050565b6001600160a01b038116811461177757600080fd5b50565b801515811461177757600080fd5b60008060006060848603121561179d57600080fd5b83356117a881611762565b925060208401356117b88161177a565b915060408401356117c88161177a565b809150509250925092565b600080600080600080600060c0888a0312156117ee57600080fd5b87359650602088013561180081611762565b9550604088013561181081611762565b945060608801359350608088013561182781611762565b925060a088013567ffffffffffffffff8082111561184457600080fd5b818a0191508a601f83011261185857600080fd5b81358181111561186757600080fd5b8b602082850101111561187957600080fd5b60208301945080935050505092959891949750929550565b6000602082840312156118a357600080fd5b81356118ae81611762565b9392505050565b6000806000606084860312156118ca57600080fd5b83356118d581611762565b925060208401356118e581611762565b929592945050506040919091013590565b60005b838110156119115781810151838201526020016118f9565b50506000910152565b600081518084526119328160208601602086016118f6565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006118ae602083018461191a565b60006020828403121561198957600080fd5b81516118ae8161177a565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516080810167ffffffffffffffff811182821017156119e6576119e6611994565b60405290565b600082601f8301126119fd57600080fd5b813567ffffffffffffffff80821115611a1857611a18611994565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611a5e57611a5e611994565b81604052838152866020858801011115611a7757600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600060608486031215611aac57600080fd5b8335925060208401359150604084013567ffffffffffffffff811115611ad157600080fd5b611add868287016119ec565b9150509250925092565b600060208284031215611af957600080fd5b81516118ae81611762565b80820180821115611b3e577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b92915050565b600080600060608486031215611b5957600080fd5b83359250602084013567ffffffffffffffff811115611b7757600080fd5b611b83868287016119ec565b925050604084013590509250925092565b600060208284031215611ba657600080fd5b5051919050565b60e08152845160e08201526000602086015160028110611bf6577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b61010083015260408601516001600160a01b03166101208301526060860151611c2b6101408401826001600160a01b03169052565b50608086015161016083015260a086015160c0610180840152611c526101a084018261191a565b915050611c9460208301866001600160a01b03808251168352602082015115156020840152806040830151166040840152506060810151151560608301525050565b60a082019390935260c0015292915050565b600060808284031215611cb857600080fd5b611cc06119c3565b90508151815260208201516020820152604082015160408201526060820151606082015292915050565b600060408284031215611cfc57600080fd5b6040516040810181811067ffffffffffffffff82111715611d1f57611d1f611994565b80604052508091508251611d328161177a565b81526020830151611d428161177a565b6020919091015292915050565b6000818303610140811215611d6357600080fd5b6040516060810181811067ffffffffffffffff82111715611d8657611d86611994565b6040526080821215611d9757600080fd5b611d9f6119c3565b91508351611dac81611762565b8252602084810151908301526040840151611dc681611762565b604083015260608481015190830152818152611de58560808601611ca6565b6020820152611df8856101008601611cea565b6040820152949350505050565b845180516001600160a01b03908116835260208083015181850152604080840151909216828501526060928301518385015280880151805160808601528082015160a08601528083015160c08601529092015160e0840152860151805115156101008401520151151561012082015260006101a0856101408401526001600160a01b03851661016084015280610180840152611ea38184018561191a565b979650505050505050565b60008060408385031215611ec157600080fd5b505080516020909101519092909150565b60008251611ee48184602087016118f6565b9190910192915050565b825180516001600160a01b03908116835260208083015181850152604080840151909216828501526060928301518385015280860151805160808601528082015160a08601528083015160c08601529092015160e08401528401518051151561010084015201511515610120820152600061016080610140840152611f758184018561191a565b95945050505050565b828152604060208201526000610d66604083018461191a56fea2646970667358221220903f9dcefb9aaf6f83e57d1a92ea8310f803886087578bf79d0d4b121196be9964736f6c63430008160033";

type AssetToRethLeverageExecutorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetToRethLeverageExecutorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetToRethLeverageExecutor__factory extends ContractFactory {
  constructor(...args: AssetToRethLeverageExecutorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AssetToRethLeverageExecutor";
  }

  override deploy(
    _yb: PromiseOrValue<string>,
    _swapper: PromiseOrValue<string>,
    _cluster: PromiseOrValue<string>,
    _weth: PromiseOrValue<string>,
    _balancerVault: PromiseOrValue<string>,
    _balancerPoolId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AssetToRethLeverageExecutor> {
    return super.deploy(
      _yb,
      _swapper,
      _cluster,
      _weth,
      _balancerVault,
      _balancerPoolId,
      overrides || {}
    ) as Promise<AssetToRethLeverageExecutor>;
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
  override attach(address: string): AssetToRethLeverageExecutor {
    return super.attach(address) as AssetToRethLeverageExecutor;
  }
  override connect(signer: Signer): AssetToRethLeverageExecutor__factory {
    return super.connect(signer) as AssetToRethLeverageExecutor__factory;
  }
  static readonly contractName: "AssetToRethLeverageExecutor";

  public readonly contractName: "AssetToRethLeverageExecutor";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetToRethLeverageExecutorInterface {
    return new utils.Interface(_abi) as AssetToRethLeverageExecutorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetToRethLeverageExecutor {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AssetToRethLeverageExecutor;
  }
}

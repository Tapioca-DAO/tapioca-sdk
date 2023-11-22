/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  USDOFlashloanHelper,
  USDOFlashloanHelperInterface,
} from "../../usd0/USDOFlashloanHelper";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IUSDO",
        name: "_usdo",
        type: "address",
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
    name: "AddressZero",
    type: "error",
  },
  {
    inputs: [],
    name: "AllowanceNotValid",
    type: "error",
  },
  {
    inputs: [],
    name: "AmountTooBig",
    type: "error",
  },
  {
    inputs: [],
    name: "Failed",
    type: "error",
  },
  {
    inputs: [],
    name: "NotValid",
    type: "error",
  },
  {
    inputs: [],
    name: "Paused",
    type: "error",
  },
  {
    inputs: [],
    name: "Reentrancy",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_old",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_new",
        type: "uint256",
      },
    ],
    name: "FlashMintFeeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_old",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_new",
        type: "uint256",
      },
    ],
    name: "MaxFlashMintUpdated",
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
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "flashFee",
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
        internalType: "contract IERC3156FlashBorrower",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "flashLoan",
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
    name: "flashMintFee",
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
    name: "maxFlashLoan",
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
    name: "maxFlashMint",
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
        name: "_val",
        type: "uint256",
      },
    ],
    name: "setFlashMintFee",
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
    name: "setMaxFlashMintable",
    outputs: [],
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
    inputs: [],
    name: "usdo",
    outputs: [
      {
        internalType: "contract IUSDO",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a0346100ed57601f610de138819003918201601f19168301916001600160401b038311848410176100f25780849260409485528339810103126100ed5780516001600160a01b039182821682036100ed57602001519182168092036100ed576000805460405193916001600160a01b0319918216919033907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a360ff196005541660055533161717600055608052600a60025569152d02c7e14af6800000600355610cd89081610109823960805181818161037f01528181610707015281816107d701526108b30152f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600436101561001257600080fd5b60003560e01c8063078dfbe7146100f7578063095ea7b3146100f257806316d995a9146100ed5780631d2a0e3d146100e85780634c6bb35d146100e35780634e71e0c8146100de5780635cffe9de146100d9578063613255ab146100d45780638da5cb5b146100cf578063940a1dc0146100ca5780639d3f4d1a146100c5578063d9d98ce4146100c0578063dd62ed3e146100bb5763e30c3978146100b657600080fd5b610618565b6105b5565b61058a565b61056c565b61054e565b610525565b6104f7565b61046b565b6103ae565b610369565b6102df565b61027d565b610248565b61011c565b6001600160a01b0381160361010d57565b600080fd5b8015150361010d57565b3461010d57606036600319011261010d57600435610139816100fc565b6024359061014682610112565b6044359061015382610112565b60018060a01b0360009361016b828654163314610641565b156102325781169182159081159161022a575b50156101ed5782546101da92906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b600180546001600160a01b031916905580f35b60405162461bcd60e51b81526020600482015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152606490fd5b90503861017e565b91501660018060a01b0319600154161760015580f35b3461010d57604036600319011261010d57610272600435610268816100fc565b6024359033610c4b565b602060405160018152f35b3461010d57602036600319011261010d576004356102a660018060a01b03600054163314610641565b60035460408051918252602082018390527f7d04cf410385806a9ac3566ac4cca4e5eaba6cc242abbf98f4f44e4ac6f3e8ff91a1600355005b3461010d57602036600319011261010d5760043561030860018060a01b03600054163314610641565b620f424081101561034c5760025460408051918252602082018390527fb3a985697c0361591fe9933703eb14ce1d74444a2d349080b6dec8da77a4082b91a1600255005b60405163f1640ae160e01b8152600490fd5b600091031261010d57565b3461010d57600036600319011261010d576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b3461010d57600080600319360112610468576001546001600160a01b039081163381900361042457806101da928454167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152fd5b80fd5b3461010d57608036600319011261010d57600435610488816100fc565b602435610494816100fc565b6064359067ffffffffffffffff9081831161010d573660238401121561010d57826004013591821161010d57366024838501011161010d576104f39360246104e194019160443591610892565b60405190151581529081906020820190565b0390f35b3461010d57602036600319011261010d576105136004356100fc565b602061051d6106f3565b604051908152f35b3461010d57600036600319011261010d576000546040516001600160a01b039091168152602090f35b3461010d57600036600319011261010d576020600254604051908152f35b3461010d57600036600319011261010d576020600354604051908152f35b3461010d57604036600319011261010d57602061051d6004356105ac816100fc565b602435906107cd565b3461010d57604036600319011261010d57602061060f6004356105d7816100fc565b602435906105e4826100fc565b60018060a01b03166000526004835260406000209060018060a01b0316600052602052604060002090565b54604051908152f35b3461010d57600036600319011261010d576001546040516001600160a01b039091168152602090f35b1561064857565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b67ffffffffffffffff81116106a057604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff8211176106a057604052565b9081602091031261010d575190565b6040513d6000823e3d90fd5b6040516318160ddd60e01b808252602091907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316908383600481855afa9283156107a9576000936107ae575b5060035480931160001461075c575050905090565b8391925060046040518094819382525afa9182156107a95760009261078057505090565b61079f9250803d106107a2575b61079781836106b6565b8101906106d8565b90565b503d61078d565b6106e7565b6107c6919350843d86116107a25761079781836106b6565b9138610747565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811691160361034c576002549081810291818304149015171561081c57620f4240900490565b634e487b7160e01b600052601160045260246000fd5b9081602091031261010d575161079f81610112565b94919286949160c0979460018060a01b0380921688521660208701526040860152606085015260a060808501528160a0850152848401376000828201840152601f01601f1916010190565b60408051635c975abb60e01b81526020969195929491936001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116936004939091908a818681895afa9081156107a957600091610bb8575b50610ba857871695338703610b4a575b60055460ff16610b3a5761091d600160ff196005541617600555565b816109266106f3565b10610b2a5761093582846107cd565b95853b1561010d5789516340c10f1960e01b81526001600160a01b03891686820190815260208101859052600090829081906040010381838b5af180156107a957610b17575b50853b1561010d5789519163028f6c4560e31b8352600083806109a58b8a83019190602083019252565b0381838b5af19182156107a9576109db938d93610afe575b508b516323e30c8b60e01b815293849283928b888a338d8801610847565b038160008b5af180156107a9577f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd991600091610ae1575b5003610ad1576000928380936044938b519a8b94632770a7eb60e21b865285015260248401525af11561010d5760448401948590526323b872dd60e01b85526001600160a01b039283166048850152918216606884015260888301528390839060649082906000905af180156107a957610a9e575b505050610a9960ff1960055416600555565b600190565b82604491610ac094913d10610ac9575b610ab882856106b6565b010190610832565b50388080610a87565b3d9150610aae565b875163312d207360e11b81528390fd5b610af891508b3d8d116107a25761079781836106b6565b38610a12565b80610b0b610b119261068c565b8061035e565b386109bd565b80610b0b610b249261068c565b3861097b565b8851636b2f218360e01b81528490fd5b885163558a1e0360e11b81528490fd5b81610b8233610b6b8a60018060a01b03166000526004602052604060002090565b9060018060a01b0316600052602052604060002090565b5410610b9857610b93823389610be5565b610901565b885163fb165f2360e01b81528490fd5b88516313d0ff5960e31b81528490fd5b610bd891508b3d8d11610bde575b610bd081836106b6565b810190610832565b386108f1565b503d610bc6565b6001600160a01b038082166000908152600460209081526040808320938616835292905220909190549260018401610c1e575b50505050565b808410610c3957610c30930391610c4b565b38808080610c18565b60405163fb165f2360e01b8152600490fd5b6001600160a01b0390811691908215610c9057811615610c9057610c8d91600052600460205260406000209060018060a01b0316600052602052604060002090565b55565b604051639fabe1c160e01b8152600490fdfea2646970667358221220825ebd0b1f5385e117fa365b523eb81d181fe8210c5c1a4ac2fabe65474adcef64736f6c63430008120033";

type USDOFlashloanHelperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: USDOFlashloanHelperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class USDOFlashloanHelper__factory extends ContractFactory {
  constructor(...args: USDOFlashloanHelperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "USDOFlashloanHelper";
  }

  override deploy(
    _usdo: PromiseOrValue<string>,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<USDOFlashloanHelper> {
    return super.deploy(
      _usdo,
      _owner,
      overrides || {}
    ) as Promise<USDOFlashloanHelper>;
  }
  override getDeployTransaction(
    _usdo: PromiseOrValue<string>,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_usdo, _owner, overrides || {});
  }
  override attach(address: string): USDOFlashloanHelper {
    return super.attach(address) as USDOFlashloanHelper;
  }
  override connect(signer: Signer): USDOFlashloanHelper__factory {
    return super.connect(signer) as USDOFlashloanHelper__factory;
  }
  static readonly contractName: "USDOFlashloanHelper";

  public readonly contractName: "USDOFlashloanHelper";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): USDOFlashloanHelperInterface {
    return new utils.Interface(_abi) as USDOFlashloanHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): USDOFlashloanHelper {
    return new Contract(address, _abi, signerOrProvider) as USDOFlashloanHelper;
  }
}

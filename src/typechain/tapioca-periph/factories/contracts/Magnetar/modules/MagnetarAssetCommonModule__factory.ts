/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  MagnetarAssetCommonModule,
  MagnetarAssetCommonModuleInterface,
} from "../../../../contracts/Magnetar/modules/MagnetarAssetCommonModule";

const _abi = [
  {
    inputs: [],
    name: "Magnetar_ActionParamsMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "Magnetar_ExtractTokenFail",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "expected",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "received",
        type: "uint256",
      },
    ],
    name: "Magnetar_GasMismatch",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "enum MagnetarModule",
        name: "module",
        type: "uint8",
      },
    ],
    name: "Magnetar_ModuleNotFound",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        internalType: "address",
        name: "expectedCaller",
        type: "address",
      },
    ],
    name: "Magnetar_NotAuthorized",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "Magnetar_TargetNotWhitelisted",
    type: "error",
  },
  {
    inputs: [],
    name: "Magnetar_UnknownReason",
    type: "error",
  },
  {
    inputs: [],
    name: "Magnetar_tOLPTokenMismatch",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IPearlmit",
        name: "oldPearlmit",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IPearlmit",
        name: "newPearlmit",
        type: "address",
      },
    ],
    name: "PearlmitUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "MAGNETAR_ACTION_ASSET_MODULE",
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
    name: "MAGNETAR_ACTION_ASSET_XCHAIN_MODULE",
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
    name: "MAGNETAR_ACTION_COLLATERAL_MODULE",
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
    name: "MAGNETAR_ACTION_MARKET",
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
    name: "MAGNETAR_ACTION_MINT_MODULE",
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
    name: "MAGNETAR_ACTION_MINT_XCHAIN_MODULE",
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
    name: "MAGNETAR_ACTION_OFT",
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
    name: "MAGNETAR_ACTION_OPTION_MODULE",
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
    name: "MAGNETAR_ACTION_PERMIT",
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
    name: "MAGNETAR_ACTION_TAP_TOKEN",
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
    name: "MAGNETAR_ACTION_WRAP",
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
    name: "MAGNETAR_ACTION_YIELDBOX_MODULE",
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "pearlmit",
    outputs: [
      {
        internalType: "contract IPearlmit",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPearlmit",
        name: "_pearlmit",
        type: "address",
      },
    ],
    name: "setPearlmit",
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
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060008061001d33610043565b600180546001600160a01b0319166001600160a01b039290921691909117905550610093565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6107a7806100a26000396000f3fe60806040526004361061012d5760003560e01c8063863b0255116100a5578063ca5230cb11610074578063d69ee34d11610059578063d69ee34d1461034b578063dd85052c14610360578063f2fde38b1461037557600080fd5b8063ca5230cb14610321578063d3beccf11461033657600080fd5b8063863b0255146102ac5780638da5cb5b146102c1578063902bd45e146102ec578063c602d2391461030c57600080fd5b80636411be20116100fc5780637942a577116100e15780637942a5771461026d5780637cd1550a1461028257806384f8faee1461029757600080fd5b80636411be2014610204578063715018a61461025657600080fd5b8063150b7a02146101395780631557bb46146101b357806344d2f9cb146101da57806362675f8e146101ef57600080fd5b3661013457005b600080fd5b34801561014557600080fd5b5061017d61015436600461064f565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020015b60405180910390f35b3480156101bf57600080fd5b506101c8600b81565b60405160ff90911681526020016101aa565b3480156101e657600080fd5b506101c8600681565b3480156101fb57600080fd5b506101c8600281565b34801561021057600080fd5b506001546102319073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101aa565b34801561026257600080fd5b5061026b610395565b005b34801561027957600080fd5b506101c8600081565b34801561028e57600080fd5b506101c8600781565b3480156102a357600080fd5b506101c8600181565b3480156102b857600080fd5b506101c8600881565b3480156102cd57600080fd5b5060005473ffffffffffffffffffffffffffffffffffffffff16610231565b3480156102f857600080fd5b5061026b61030736600461074d565b6103a9565b34801561031857600080fd5b506101c8600381565b34801561032d57600080fd5b506101c8600a81565b34801561034257600080fd5b506101c8600481565b34801561035757600080fd5b506101c8600981565b34801561036c57600080fd5b506101c8600581565b34801561038157600080fd5b5061026b61039036600461074d565b61044c565b61039d610508565b6103a76000610589565b565b6103b1610508565b6001546040805173ffffffffffffffffffffffffffffffffffffffff928316815291831660208301527f19e743977bfa1080c4f475f13f05433b43465aa361d8a3fec33c3165f773b599910160405180910390a1600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b610454610508565b73ffffffffffffffffffffffffffffffffffffffff81166104fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61050581610589565b50565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104f3565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b73ffffffffffffffffffffffffffffffffffffffff8116811461050557600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000806000806080858703121561066557600080fd5b8435610670816105fe565b93506020850135610680816105fe565b925060408501359150606085013567ffffffffffffffff808211156106a457600080fd5b818701915087601f8301126106b857600080fd5b8135818111156106ca576106ca610620565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561071057610710610620565b816040528281528a602084870101111561072957600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60006020828403121561075f57600080fd5b813561076a816105fe565b939250505056fea2646970667358221220cbd11d88b04f9c56efce1b9e7d31eb902ab0aed21e48c2a4bf9095dc2f80363764736f6c63430008160033";

type MagnetarAssetCommonModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MagnetarAssetCommonModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MagnetarAssetCommonModule__factory extends ContractFactory {
  constructor(...args: MagnetarAssetCommonModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MagnetarAssetCommonModule";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MagnetarAssetCommonModule> {
    return super.deploy(overrides || {}) as Promise<MagnetarAssetCommonModule>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MagnetarAssetCommonModule {
    return super.attach(address) as MagnetarAssetCommonModule;
  }
  override connect(signer: Signer): MagnetarAssetCommonModule__factory {
    return super.connect(signer) as MagnetarAssetCommonModule__factory;
  }
  static readonly contractName: "MagnetarAssetCommonModule";

  public readonly contractName: "MagnetarAssetCommonModule";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MagnetarAssetCommonModuleInterface {
    return new utils.Interface(_abi) as MagnetarAssetCommonModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MagnetarAssetCommonModule {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MagnetarAssetCommonModule;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  MagnetarBaseModule,
  MagnetarBaseModuleInterface,
} from "../../../../tapioca-periph/Magnetar/modules/MagnetarBaseModule";

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
        internalType: "bytes",
        name: "call",
        type: "bytes",
      },
    ],
    name: "Magnetar_MarketCallFailed",
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
        name: "addy",
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
    name: "Magnetar_UserMismatch",
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
    name: "MAGNETAR_ACTION_TAP_LOCK",
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
    name: "MAGNETAR_ACTION_TAP_UNLOCK",
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
    inputs: [],
    name: "helper",
    outputs: [
      {
        internalType: "contract IMagnetarHelper",
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
    inputs: [],
    name: "toeHelper",
    outputs: [
      {
        internalType: "contract TapiocaOmnichainEngineHelper",
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

export class MagnetarBaseModule__factory {
  static readonly abi = _abi;
  static createInterface(): MagnetarBaseModuleInterface {
    return new utils.Interface(_abi) as MagnetarBaseModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MagnetarBaseModule {
    return new Contract(address, _abi, signerOrProvider) as MagnetarBaseModule;
  }
}

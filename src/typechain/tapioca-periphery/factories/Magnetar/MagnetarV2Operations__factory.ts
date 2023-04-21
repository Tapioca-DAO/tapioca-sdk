/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  MagnetarV2Operations,
  MagnetarV2OperationsInterface,
} from "../../Magnetar/MagnetarV2Operations";

const _abi = [
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

export class MagnetarV2Operations__factory {
  static readonly abi = _abi;
  static createInterface(): MagnetarV2OperationsInterface {
    return new utils.Interface(_abi) as MagnetarV2OperationsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MagnetarV2Operations {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MagnetarV2Operations;
  }
}

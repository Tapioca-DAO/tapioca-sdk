/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  PausableMapUpgradeable,
  PausableMapUpgradeableInterface,
} from "../../../../contracts/oracle/utils/PausableMapUpgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060af8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80639e9e466614602d575b600080fd5b604d60383660046061565b60006020819052908152604090205460ff1681565b604051901515815260200160405180910390f35b600060208284031215607257600080fd5b503591905056fea2646970667358221220091de6e869fc57de3b379189020e8aa1f2f9e60df1f94abae347a946e70b2e3964736f6c63430008160033";

type PausableMapUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PausableMapUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PausableMapUpgradeable__factory extends ContractFactory {
  constructor(...args: PausableMapUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "PausableMapUpgradeable";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PausableMapUpgradeable> {
    return super.deploy(overrides || {}) as Promise<PausableMapUpgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PausableMapUpgradeable {
    return super.attach(address) as PausableMapUpgradeable;
  }
  override connect(signer: Signer): PausableMapUpgradeable__factory {
    return super.connect(signer) as PausableMapUpgradeable__factory;
  }
  static readonly contractName: "PausableMapUpgradeable";

  public readonly contractName: "PausableMapUpgradeable";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PausableMapUpgradeableInterface {
    return new utils.Interface(_abi) as PausableMapUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PausableMapUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PausableMapUpgradeable;
  }
}

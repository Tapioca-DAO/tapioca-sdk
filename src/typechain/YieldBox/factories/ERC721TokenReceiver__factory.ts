/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  ERC721TokenReceiver,
  ERC721TokenReceiverInterface,
} from "../ERC721TokenReceiver";

const _abi = [
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
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608080604052346100155760e2908161001b8239f35b600080fdfe6080806040526004361015601257600080fd5b600090813560e01c63150b7a0214602857600080fd5b3460a057608036600319011260a05773ffffffffffffffffffffffffffffffffffffffff6004358181160360a8576024359081160360a05760643567ffffffffffffffff80821160a4573660238301121560a457816004013590811160a4573691016024011160a057630a85bd0160e11b8152602090f35b5080fd5b8380fd5b8280fdfea26469706673582212209dd945ee9ab6c10d5f0a9179b6cc1cf115c4727ea463b1ee98239a0f5ffb68c864736f6c63430008120033";

type ERC721TokenReceiverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721TokenReceiverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721TokenReceiver__factory extends ContractFactory {
  constructor(...args: ERC721TokenReceiverConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC721TokenReceiver";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721TokenReceiver> {
    return super.deploy(overrides || {}) as Promise<ERC721TokenReceiver>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC721TokenReceiver {
    return super.attach(address) as ERC721TokenReceiver;
  }
  override connect(signer: Signer): ERC721TokenReceiver__factory {
    return super.connect(signer) as ERC721TokenReceiver__factory;
  }
  static readonly contractName: "ERC721TokenReceiver";

  public readonly contractName: "ERC721TokenReceiver";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721TokenReceiverInterface {
    return new utils.Interface(_abi) as ERC721TokenReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721TokenReceiver {
    return new Contract(address, _abi, signerOrProvider) as ERC721TokenReceiver;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC1155BrokenReceiverMock,
  ERC1155BrokenReceiverMockInterface,
} from "../ERC1155BrokenReceiverMock";

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
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
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
    name: "onERC1155Received",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506102df806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063bc197c811461003b578063f23a6e6114610093575b600080fd5b610076610049366004610176565b7f877a483801bc0375a786f12864c3c09903218ef0684e41ea523973c255fc9f9f98975050505050505050565b6040516001600160e01b0319909116815260200160405180910390f35b6100766100a1366004610231565b7f877a483801bc0375a786f12864c3c09903218ef0684e41ea523973c255fc9f9f9695505050505050565b80356001600160a01b03811681146100e357600080fd5b919050565b60008083601f8401126100fa57600080fd5b50813567ffffffffffffffff81111561011257600080fd5b6020830191508360208260051b850101111561012d57600080fd5b9250929050565b60008083601f84011261014657600080fd5b50813567ffffffffffffffff81111561015e57600080fd5b60208301915083602082850101111561012d57600080fd5b60008060008060008060008060a0898b03121561019257600080fd5b61019b896100cc565b97506101a960208a016100cc565b9650604089013567ffffffffffffffff808211156101c657600080fd5b6101d28c838d016100e8565b909850965060608b01359150808211156101eb57600080fd5b6101f78c838d016100e8565b909650945060808b013591508082111561021057600080fd5b5061021d8b828c01610134565b999c989b5096995094979396929594505050565b60008060008060008060a0878903121561024a57600080fd5b610253876100cc565b9550610261602088016100cc565b94506040870135935060608701359250608087013567ffffffffffffffff81111561028b57600080fd5b61029789828a01610134565b979a969950949750929593949250505056fea2646970667358221220ec67d9e65050daa4ed497b852da48bfabec91ad5c361d514ae4525df051782f164736f6c63430008090033";

type ERC1155BrokenReceiverMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155BrokenReceiverMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155BrokenReceiverMock__factory extends ContractFactory {
  constructor(...args: ERC1155BrokenReceiverMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC1155BrokenReceiverMock";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155BrokenReceiverMock> {
    return super.deploy(overrides || {}) as Promise<ERC1155BrokenReceiverMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC1155BrokenReceiverMock {
    return super.attach(address) as ERC1155BrokenReceiverMock;
  }
  connect(signer: Signer): ERC1155BrokenReceiverMock__factory {
    return super.connect(signer) as ERC1155BrokenReceiverMock__factory;
  }
  static readonly contractName: "ERC1155BrokenReceiverMock";
  public readonly contractName: "ERC1155BrokenReceiverMock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155BrokenReceiverMockInterface {
    return new utils.Interface(_abi) as ERC1155BrokenReceiverMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155BrokenReceiverMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC1155BrokenReceiverMock;
  }
}

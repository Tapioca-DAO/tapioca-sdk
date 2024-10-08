/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  ContractThatReverts,
  ContractThatRevertsInterface,
} from "../ContractThatReverts";

const _abi = [
  {
    inputs: [],
    name: "count",
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
    name: "revertStr",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_count",
        type: "uint256",
      },
    ],
    name: "shouldNotRevert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_count",
        type: "uint256",
      },
    ],
    name: "shouldRevert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e0604052602160808181529061051360a03960019061001f90826100d3565b5034801561002c57600080fd5b50610192565b634e487b7160e01b600052604160045260246000fd5b600181811c9082168061005c57607f821691505b60208210810361007c57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156100ce576000816000526020600020601f850160051c810160208610156100ab5750805b601f850160051c820191505b818110156100ca578281556001016100b7565b5050505b505050565b81516001600160401b038111156100ec576100ec610032565b610100816100fa8454610048565b84610082565b602080601f831160018114610135576000841561011d5750858301515b600019600386901b1c1916600185901b1785556100ca565b600085815260208120601f198616915b8281101561016457888601518255948401946001909101908401610145565b50858210156101825787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610372806101a16000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806306661abd1461005157806316b2da821461006d578063d58f643414610082578063fa2880ca14610097575b600080fd5b61005a60005481565b6040519081526020015b60405180910390f35b61008061007b36600461017b565b6100aa565b005b61008a6100ed565b6040516100649190610194565b6100806100a536600461017b565b600055565b60008190556040517f08c379a00000000000000000000000000000000000000000000000000000000081526100e490600190600401610254565b60405180910390fd5b600180546100fa90610201565b80601f016020809104026020016040519081016040528092919081815260200182805461012690610201565b80156101735780601f1061014857610100808354040283529160200191610173565b820191906000526020600020905b81548152906001019060200180831161015657829003601f168201915b505050505081565b60006020828403121561018d57600080fd5b5035919050565b60006020808352835180602085015260005b818110156101c2578581018301518582016040015282016101a6565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b600181811c9082168061021557607f821691505b60208210810361024e577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60006020808352600084548160018260011c9150600183168061027857607f831692505b6020831081036102af577f4e487b710000000000000000000000000000000000000000000000000000000085526022600452602485fd5b60208801839052604088018180156102ce57600181146103025761032d565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008616825284151560051b8201965061032d565b60008b81526020902060005b868110156103275781548482015290850190890161030e565b83019750505b5094999850505050505050505056fea26469706673582212206af0f13e3aa5c76ae22003e5f0d82c8f61ac45ff2d4e87d3e7338a04504538f164736f6c6343000816003354686973206d6574686f642072657665727465642e20536f20617765736f6d6521";

type ContractThatRevertsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ContractThatRevertsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ContractThatReverts__factory extends ContractFactory {
  constructor(...args: ContractThatRevertsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ContractThatReverts";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractThatReverts> {
    return super.deploy(overrides || {}) as Promise<ContractThatReverts>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ContractThatReverts {
    return super.attach(address) as ContractThatReverts;
  }
  override connect(signer: Signer): ContractThatReverts__factory {
    return super.connect(signer) as ContractThatReverts__factory;
  }
  static readonly contractName: "ContractThatReverts";

  public readonly contractName: "ContractThatReverts";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ContractThatRevertsInterface {
    return new utils.Interface(_abi) as ContractThatRevertsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ContractThatReverts {
    return new Contract(address, _abi, signerOrProvider) as ContractThatReverts;
  }
}

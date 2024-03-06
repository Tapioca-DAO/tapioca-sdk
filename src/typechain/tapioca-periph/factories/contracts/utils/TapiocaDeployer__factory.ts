/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TapiocaDeployer,
  TapiocaDeployerInterface,
} from "../../../contracts/utils/TapiocaDeployer";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "bytecodeHash",
        type: "bytes32",
      },
    ],
    name: "computeAddress",
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
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "bytecodeHash",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "deployer",
        type: "address",
      },
    ],
    name: "computeAddress",
    outputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "bytecode",
        type: "bytes",
      },
      {
        internalType: "string",
        name: "contractName",
        type: "string",
      },
    ],
    name: "deploy",
    outputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506105a3806100206000396000f3fe6080604052600436106100345760003560e01c8063481286e61461003957806378065306146100825780638f3b6593146100a2575b600080fd5b34801561004557600080fd5b50610059610054366004610249565b6100b5565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34801561008e57600080fd5b5061005961009d36600461026b565b6100c9565b6100596100b0366004610380565b6100f3565b60006100c28383306100c9565b9392505050565b6000604051836040820152846020820152828152600b8101905060ff815360559020949350505050565b6000843414610163576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f437265617465323a20696e73756666696369656e742062616c616e636500000060448201526064015b60405180910390fd5b8251600014158260405160200161017a9190610446565b604051602081830303815290604052906101c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015a91906104b1565b508383516020850187f560405190915073ffffffffffffffffffffffffffffffffffffffff82161515906101f9908490602001610502565b60405160208183030381529060405290610240576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015a91906104b1565b50949350505050565b6000806040838503121561025c57600080fd5b50508035926020909101359150565b60008060006060848603121561028057600080fd5b8335925060208401359150604084013573ffffffffffffffffffffffffffffffffffffffff811681146102b257600080fd5b809150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600067ffffffffffffffff80841115610307576103076102bd565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561034d5761034d6102bd565b8160405280935085815286868601111561036657600080fd5b858560208301376000602087830101525050509392505050565b6000806000806080858703121561039657600080fd5b8435935060208501359250604085013567ffffffffffffffff808211156103bc57600080fd5b818701915087601f8301126103d057600080fd5b6103df888335602085016102ec565b935060608701359150808211156103f557600080fd5b508501601f8101871361040757600080fd5b610416878235602084016102ec565b91505092959194509250565b60005b8381101561043d578181015183820152602001610425565b50506000910152565b7f437265617465323a2062797465636f6465206c656e677468206973207a65726f81527f20666f7220636f6e7472616374200000000000000000000000000000000000006020820152600082516104a481602e850160208701610422565b91909101602e0192915050565b60208152600082518060208401526104d0816040850160208701610422565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b7f437265617465323a204661696c6564206f6e206465706c6f7920666f7220636f81527f6e74726163742000000000000000000000000000000000000000000000000000602082015260008251610560816027850160208701610422565b919091016027019291505056fea2646970667358221220ec1dbc4e1068be3f9c059e9ae6578ac381455d0c9d71e90fabac326146bd233364736f6c63430008160033";

type TapiocaDeployerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TapiocaDeployerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TapiocaDeployer__factory extends ContractFactory {
  constructor(...args: TapiocaDeployerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TapiocaDeployer";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TapiocaDeployer> {
    return super.deploy(overrides || {}) as Promise<TapiocaDeployer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TapiocaDeployer {
    return super.attach(address) as TapiocaDeployer;
  }
  override connect(signer: Signer): TapiocaDeployer__factory {
    return super.connect(signer) as TapiocaDeployer__factory;
  }
  static readonly contractName: "TapiocaDeployer";

  public readonly contractName: "TapiocaDeployer";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TapiocaDeployerInterface {
    return new utils.Interface(_abi) as TapiocaDeployerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TapiocaDeployer {
    return new Contract(address, _abi, signerOrProvider) as TapiocaDeployer;
  }
}

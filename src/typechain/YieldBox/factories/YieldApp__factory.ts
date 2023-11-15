/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { YieldApp, YieldAppInterface } from "../YieldApp";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract YieldBox",
        name: "_yieldBox",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "yieldBox",
    outputs: [
      {
        internalType: "contract YieldBox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161012338038061012383398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b6091806100926000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063de40657714602d575b600080fd5b600054603f906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f3fea2646970667358221220f9b090416544262ef132dfafedadcc83f385f4677372be480ea5172e939e5f9064736f6c63430008090033";

type YieldAppConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: YieldAppConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class YieldApp__factory extends ContractFactory {
  constructor(...args: YieldAppConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "YieldApp";
  }

  deploy(
    _yieldBox: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<YieldApp> {
    return super.deploy(_yieldBox, overrides || {}) as Promise<YieldApp>;
  }
  getDeployTransaction(
    _yieldBox: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_yieldBox, overrides || {});
  }
  attach(address: string): YieldApp {
    return super.attach(address) as YieldApp;
  }
  connect(signer: Signer): YieldApp__factory {
    return super.connect(signer) as YieldApp__factory;
  }
  static readonly contractName: "YieldApp";
  public readonly contractName: "YieldApp";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YieldAppInterface {
    return new utils.Interface(_abi) as YieldAppInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YieldApp {
    return new Contract(address, _abi, signerOrProvider) as YieldApp;
  }
}

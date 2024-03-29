/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  ReceiverTest,
  ReceiverTestInterface,
} from "../../research/ReceiverTest";

const _abi = [
  {
    inputs: [],
    name: "receiveSomeEth",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalEth",
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
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060ee8061001f6000396000f3fe608060405260043610602a5760003560e01c80633c3c9c23146035578063ce5a818714605b57600080fd5b36603057005b600080fd5b348015604057600080fd5b50604960005481565b60405190815260200160405180910390f35b60616063565b005b34600080828254607291906079565b9091555050565b8082018082111560b2577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b9291505056fea264697066735822122026d1e0df4924e78250e51a8030ab1498bb2d93e4582bb2044f0ee9806585f5a164736f6c63430008160033";

type ReceiverTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReceiverTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReceiverTest__factory extends ContractFactory {
  constructor(...args: ReceiverTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ReceiverTest";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ReceiverTest> {
    return super.deploy(overrides || {}) as Promise<ReceiverTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ReceiverTest {
    return super.attach(address) as ReceiverTest;
  }
  override connect(signer: Signer): ReceiverTest__factory {
    return super.connect(signer) as ReceiverTest__factory;
  }
  static readonly contractName: "ReceiverTest";

  public readonly contractName: "ReceiverTest";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReceiverTestInterface {
    return new utils.Interface(_abi) as ReceiverTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReceiverTest {
    return new Contract(address, _abi, signerOrProvider) as ReceiverTest;
  }
}

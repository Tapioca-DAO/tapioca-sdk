/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  MaliciousMasterContractMock,
  MaliciousMasterContractMockInterface,
} from "../../mocks/MaliciousMasterContractMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract YieldBox",
        name: "yieldBox",
        type: "address",
      },
    ],
    name: "attack",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506101cb806100206000396000f3fe6080604052600436106100295760003560e01c80634ddf47d41461002e578063d018db3e14610042575b600080fd5b61004061003c3660046100e6565b5050565b005b34801561004e57600080fd5b5061004061005d366004610158565b6040517fa22cb4650000000000000000000000000000000000000000000000000000000081523060048201526001602482015273ffffffffffffffffffffffffffffffffffffffff82169063a22cb46590604401600060405180830381600087803b1580156100cb57600080fd5b505af11580156100df573d6000803e3d6000fd5b5050505050565b600080602083850312156100f957600080fd5b823567ffffffffffffffff8082111561011157600080fd5b818501915085601f83011261012557600080fd5b81358181111561013457600080fd5b86602082850101111561014657600080fd5b60209290920196919550909350505050565b60006020828403121561016a57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461018e57600080fd5b939250505056fea264697066735822122031e5362d651a6281177be75b6e0dfca06603edb5fb29f13ea1bc4b673411eeff64736f6c63430008160033";

type MaliciousMasterContractMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MaliciousMasterContractMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MaliciousMasterContractMock__factory extends ContractFactory {
  constructor(...args: MaliciousMasterContractMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MaliciousMasterContractMock";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MaliciousMasterContractMock> {
    return super.deploy(
      overrides || {}
    ) as Promise<MaliciousMasterContractMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MaliciousMasterContractMock {
    return super.attach(address) as MaliciousMasterContractMock;
  }
  override connect(signer: Signer): MaliciousMasterContractMock__factory {
    return super.connect(signer) as MaliciousMasterContractMock__factory;
  }
  static readonly contractName: "MaliciousMasterContractMock";

  public readonly contractName: "MaliciousMasterContractMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MaliciousMasterContractMockInterface {
    return new utils.Interface(_abi) as MaliciousMasterContractMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MaliciousMasterContractMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MaliciousMasterContractMock;
  }
}

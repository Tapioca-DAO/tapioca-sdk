/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CurvePoolMock, CurvePoolMockInterface } from "../CurvePoolMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "coins",
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
    name: "divider",
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
    inputs: [
      {
        internalType: "int128",
        name: "",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "j",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "exchange",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int128",
        name: "",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256",
      },
    ],
    name: "get_dy",
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
    inputs: [
      {
        internalType: "uint256",
        name: "div",
        type: "uint256",
      },
    ],
    name: "setDivider",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161064138038061064183398101604081905261002f916100cd565b600060208190527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb580546001600160a01b039485166001600160a01b0319918216179091556001918290527fada5013122d395ba3c54772283fb069b10426056ef8ca54750cb9bb552a59e7d8054939094169216919091179091558055610100565b80516001600160a01b03811681146100c857600080fd5b919050565b600080604083850312156100e057600080fd5b6100e9836100b1565b91506100f7602084016100b1565b90509250929050565b6105328061010f6000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80635e0d443f116100505780635e0d443f1461009d578063893fe0be146100b0578063c6610657146100c357600080fd5b8063378efa371461006c5780633df0212414610088575b600080fd5b61007560015481565b6040519081526020015b60405180910390f35b61009b6100963660046103d9565b61011e565b005b6100756100ab36600461041b565b610223565b61009b6100be366004610457565b600155565b6100f96100d1366004610457565b60006020819052908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161007f565b6001541561021d576fffffffffffffffffffffffffffffffff831660009081526020819052604081205460015473ffffffffffffffffffffffffffffffffffffffff909116919061016f9085610470565b6040517f40c10f190000000000000000000000000000000000000000000000000000000081523060048201526024810182905290915073ffffffffffffffffffffffffffffffffffffffff8316906340c10f1990604401600060405180830381600087803b1580156101e057600080fd5b505af11580156101f4573d6000803e3d6000fd5b5061021a9250505073ffffffffffffffffffffffffffffffffffffffff8316338361024e565b50505b50505050565b600060015460000361023757506000610247565b6001546102449083610470565b90505b9392505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905291516000928392908716916102e591906104ab565b6000604051808303816000865af19150503d8060008114610322576040519150601f19603f3d011682016040523d82523d6000602084013e610327565b606091505b509150915081801561035157508051158061035157508080602001905181019061035191906104da565b6103bb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f426f72696e6745524332303a205472616e73666572206661696c656400000000604482015260640160405180910390fd5b5050505050565b8035600f81900b81146103d457600080fd5b919050565b600080600080608085870312156103ef57600080fd5b6103f8856103c2565b9350610406602086016103c2565b93969395505050506040820135916060013590565b60008060006060848603121561043057600080fd5b610439846103c2565b9250610447602085016103c2565b9150604084013590509250925092565b60006020828403121561046957600080fd5b5035919050565b6000826104a6577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b6000825160005b818110156104cc57602081860181015185830152016104b2565b506000920191825250919050565b6000602082840312156104ec57600080fd5b8151801515811461024757600080fdfea26469706673582212206e4cfb6282d6b1735b7b8e795166f9a7c4b57848ca8cf4e46d82453cf65e8c7d64736f6c63430008160033";

type CurvePoolMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CurvePoolMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CurvePoolMock__factory extends ContractFactory {
  constructor(...args: CurvePoolMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "CurvePoolMock";
  }

  override deploy(
    token0: PromiseOrValue<string>,
    token1: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CurvePoolMock> {
    return super.deploy(
      token0,
      token1,
      overrides || {}
    ) as Promise<CurvePoolMock>;
  }
  override getDeployTransaction(
    token0: PromiseOrValue<string>,
    token1: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(token0, token1, overrides || {});
  }
  override attach(address: string): CurvePoolMock {
    return super.attach(address) as CurvePoolMock;
  }
  override connect(signer: Signer): CurvePoolMock__factory {
    return super.connect(signer) as CurvePoolMock__factory;
  }
  static readonly contractName: "CurvePoolMock";

  public readonly contractName: "CurvePoolMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CurvePoolMockInterface {
    return new utils.Interface(_abi) as CurvePoolMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CurvePoolMock {
    return new Contract(address, _abi, signerOrProvider) as CurvePoolMock;
  }
}

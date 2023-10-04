/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  MarketLiquidationReceiverMock,
  MarketLiquidationReceiverMockInterface,
} from "../MarketLiquidationReceiverMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "asset",
    outputs: [
      {
        internalType: "contract IERC20",
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
        name: "amountToReceive",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onCollateralReceiver",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60803461007457601f61031a38819003918201601f19168301916001600160401b038311848410176100795780849260209460405283398101031261007457516001600160a01b0381169081900361007457600080546001600160a01b03191691909117905560405161028a90816100908239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604081815260048036101561001557600080fd5b600092833560e01c90816338d52e0f14610224575063d86b12c81461003957600080fd5b346102205760c03660031901126102205773ffffffffffffffffffffffffffffffffffffffff81358181160361021c5760249081358181160361021857604435818116036102185767ffffffffffffffff9060a435828111610214573660238201121561021457808501358381116102105736910184011161020c57855416948451956020968781019063a9059cbb60e01b8252338682015260843560448201526044815260808101818110868211176101fa57885251839283929083905af1913d156101f2573d8181116101e057865191601f8201601f19908116603f01168301908111838210176101ce57875281523d828883013e5b82610187575b5050156101475750505160018152f35b606493601c9293519362461bcd60e51b85528401528201527f426f72696e6745524332303a205472616e73666572206661696c6564000000006044820152fd5b80519250821591908783156101a3575b50505090503880610137565b9193818094500103126101ca578501519081151582036101c7575080388087610197565b80fd5b5080fd5b634e487b7160e01b8452604187528584fd5b634e487b7160e01b8352604186528483fd5b506060610131565b634e487b7160e01b8552604188528685fd5b8580fd5b8780fd5b8680fd5b8480fd5b8380fd5b8280fd5b8490346101ca57816003193601126101ca5773ffffffffffffffffffffffffffffffffffffffff60209254168152f3fea2646970667358221220dbb87ffa776df8dca7d927f34916b81834772299066d3c8c2d436133b825819764736f6c63430008120033";

type MarketLiquidationReceiverMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MarketLiquidationReceiverMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MarketLiquidationReceiverMock__factory extends ContractFactory {
  constructor(...args: MarketLiquidationReceiverMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MarketLiquidationReceiverMock";
  }

  override deploy(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MarketLiquidationReceiverMock> {
    return super.deploy(
      _token,
      overrides || {}
    ) as Promise<MarketLiquidationReceiverMock>;
  }
  override getDeployTransaction(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, overrides || {});
  }
  override attach(address: string): MarketLiquidationReceiverMock {
    return super.attach(address) as MarketLiquidationReceiverMock;
  }
  override connect(signer: Signer): MarketLiquidationReceiverMock__factory {
    return super.connect(signer) as MarketLiquidationReceiverMock__factory;
  }
  static readonly contractName: "MarketLiquidationReceiverMock";

  public readonly contractName: "MarketLiquidationReceiverMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MarketLiquidationReceiverMockInterface {
    return new utils.Interface(_abi) as MarketLiquidationReceiverMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MarketLiquidationReceiverMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MarketLiquidationReceiverMock;
  }
}

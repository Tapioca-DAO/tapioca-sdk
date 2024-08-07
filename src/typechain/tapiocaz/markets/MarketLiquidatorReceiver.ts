/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface MarketLiquidatorReceiverInterface extends utils.Interface {
  functions: {
    "allowances(address,address)": FunctionFragment;
    "assignOracle(address,address,bytes,uint256)": FunctionFragment;
    "assignSwapper(address,address)": FunctionFragment;
    "cachedRates(address)": FunctionFragment;
    "claimOwnership()": FunctionFragment;
    "decreaseAllowance(address,address,uint256)": FunctionFragment;
    "increaseAllowance(address,address,uint256)": FunctionFragment;
    "onCollateralReceiver(address,address,address,uint256,bytes)": FunctionFragment;
    "oracles(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingOwner()": FunctionFragment;
    "swappers(address)": FunctionFragment;
    "transferOwnership(address,bool,bool)": FunctionFragment;
    "updateRates(address[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "allowances"
      | "allowances(address,address)"
      | "assignOracle"
      | "assignOracle(address,address,bytes,uint256)"
      | "assignSwapper"
      | "assignSwapper(address,address)"
      | "cachedRates"
      | "cachedRates(address)"
      | "claimOwnership"
      | "claimOwnership()"
      | "decreaseAllowance"
      | "decreaseAllowance(address,address,uint256)"
      | "increaseAllowance"
      | "increaseAllowance(address,address,uint256)"
      | "onCollateralReceiver"
      | "onCollateralReceiver(address,address,address,uint256,bytes)"
      | "oracles"
      | "oracles(address)"
      | "owner"
      | "owner()"
      | "pendingOwner"
      | "pendingOwner()"
      | "swappers"
      | "swappers(address)"
      | "transferOwnership"
      | "transferOwnership(address,bool,bool)"
      | "updateRates"
      | "updateRates(address[])"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "allowances",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "allowances(address,address)",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "assignOracle",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "assignOracle(address,address,bytes,uint256)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "assignSwapper",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "assignSwapper(address,address)",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "cachedRates",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "cachedRates(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "claimOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimOwnership()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance(address,address,uint256)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance(address,address,uint256)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onCollateralReceiver",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onCollateralReceiver(address,address,address,uint256,bytes)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "oracles",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "oracles(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingOwner()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swappers",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "swappers(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<boolean>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership(address,bool,bool)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<boolean>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRates",
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRates(address[])",
    values: [PromiseOrValue<string>[]]
  ): string;

  decodeFunctionResult(functionFragment: "allowances", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allowances(address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assignOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assignOracle(address,address,bytes,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assignSwapper",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assignSwapper(address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cachedRates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cachedRates(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimOwnership()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance(address,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance(address,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onCollateralReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onCollateralReceiver(address,address,address,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "oracles", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "oracles(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swappers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swappers(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership(address,bool,bool)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRates(address[])",
    data: BytesLike
  ): Result;

  events: {
    "OracleAssigned(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "SwapperAssigned(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OracleAssigned"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "OracleAssigned(address,address)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "OwnershipTransferred(address,address)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SwapperAssigned"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "SwapperAssigned(address,address)"
  ): EventFragment;
}

export interface OracleAssignedEventObject {
  tokenIn: string;
  oracle: string;
}
export type OracleAssignedEvent = TypedEvent<
  [string, string],
  OracleAssignedEventObject
>;

export type OracleAssignedEventFilter = TypedEventFilter<OracleAssignedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface SwapperAssignedEventObject {
  tokenIn: string;
  swapper: string;
}
export type SwapperAssignedEvent = TypedEvent<
  [string, string],
  SwapperAssignedEventObject
>;

export type SwapperAssignedEventFilter = TypedEventFilter<SwapperAssignedEvent>;

export interface MarketLiquidatorReceiver extends BaseContract {
  contractName: "MarketLiquidatorReceiver";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MarketLiquidatorReceiverInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    allowances(
      sender: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { allowance: BigNumber }>;

    "allowances(address,address)"(
      sender: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { allowance: BigNumber }>;

    assignOracle(
      _tokenIn: PromiseOrValue<string>,
      _oracle: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      _precision: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "assignOracle(address,address,bytes,uint256)"(
      _tokenIn: PromiseOrValue<string>,
      _oracle: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      _precision: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    assignSwapper(
      _tokenIn: PromiseOrValue<string>,
      _swapper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "assignSwapper(address,address)"(
      _tokenIn: PromiseOrValue<string>,
      _swapper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cachedRates(
      oracle: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rate: BigNumber }>;

    "cachedRates(address)"(
      oracle: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rate: BigNumber }>;

    claimOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "claimOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    decreaseAllowance(
      sender: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "decreaseAllowance(address,address,uint256)"(
      sender: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    increaseAllowance(
      sender: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "increaseAllowance(address,address,uint256)"(
      sender: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onCollateralReceiver(
      initiator: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      collateralAmount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "onCollateralReceiver(address,address,address,uint256,bytes)"(
      initiator: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      collateralAmount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    oracles(
      tokenIn: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        data: string;
        target: string;
        precision: BigNumber;
      }
    >;

    "oracles(address)"(
      tokenIn: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        data: string;
        target: string;
        precision: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    pendingOwner(overrides?: CallOverrides): Promise<[string]>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<[string]>;

    swappers(
      tokenIn: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string] & { swapper: string }>;

    "swappers(address)"(
      tokenIn: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string] & { swapper: string }>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address,bool,bool)"(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateRates(
      _tokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "updateRates(address[])"(
      _tokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  allowances(
    sender: PromiseOrValue<string>,
    tokenIn: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "allowances(address,address)"(
    sender: PromiseOrValue<string>,
    tokenIn: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  assignOracle(
    _tokenIn: PromiseOrValue<string>,
    _oracle: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    _precision: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "assignOracle(address,address,bytes,uint256)"(
    _tokenIn: PromiseOrValue<string>,
    _oracle: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    _precision: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  assignSwapper(
    _tokenIn: PromiseOrValue<string>,
    _swapper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "assignSwapper(address,address)"(
    _tokenIn: PromiseOrValue<string>,
    _swapper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cachedRates(
    oracle: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "cachedRates(address)"(
    oracle: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  claimOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "claimOwnership()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  decreaseAllowance(
    sender: PromiseOrValue<string>,
    tokenIn: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "decreaseAllowance(address,address,uint256)"(
    sender: PromiseOrValue<string>,
    tokenIn: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  increaseAllowance(
    sender: PromiseOrValue<string>,
    tokenIn: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "increaseAllowance(address,address,uint256)"(
    sender: PromiseOrValue<string>,
    tokenIn: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onCollateralReceiver(
    initiator: PromiseOrValue<string>,
    tokenIn: PromiseOrValue<string>,
    tokenOut: PromiseOrValue<string>,
    collateralAmount: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "onCollateralReceiver(address,address,address,uint256,bytes)"(
    initiator: PromiseOrValue<string>,
    tokenIn: PromiseOrValue<string>,
    tokenOut: PromiseOrValue<string>,
    collateralAmount: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  oracles(
    tokenIn: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber] & {
      data: string;
      target: string;
      precision: BigNumber;
    }
  >;

  "oracles(address)"(
    tokenIn: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber] & {
      data: string;
      target: string;
      precision: BigNumber;
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  pendingOwner(overrides?: CallOverrides): Promise<string>;

  "pendingOwner()"(overrides?: CallOverrides): Promise<string>;

  swappers(
    tokenIn: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  "swappers(address)"(
    tokenIn: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    direct: PromiseOrValue<boolean>,
    renounce: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address,bool,bool)"(
    newOwner: PromiseOrValue<string>,
    direct: PromiseOrValue<boolean>,
    renounce: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateRates(
    _tokens: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "updateRates(address[])"(
    _tokens: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    allowances(
      sender: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowances(address,address)"(
      sender: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    assignOracle(
      _tokenIn: PromiseOrValue<string>,
      _oracle: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      _precision: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "assignOracle(address,address,bytes,uint256)"(
      _tokenIn: PromiseOrValue<string>,
      _oracle: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      _precision: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    assignSwapper(
      _tokenIn: PromiseOrValue<string>,
      _swapper: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "assignSwapper(address,address)"(
      _tokenIn: PromiseOrValue<string>,
      _swapper: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    cachedRates(
      oracle: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "cachedRates(address)"(
      oracle: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimOwnership(overrides?: CallOverrides): Promise<void>;

    "claimOwnership()"(overrides?: CallOverrides): Promise<void>;

    decreaseAllowance(
      sender: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "decreaseAllowance(address,address,uint256)"(
      sender: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    increaseAllowance(
      sender: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "increaseAllowance(address,address,uint256)"(
      sender: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    onCollateralReceiver(
      initiator: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      collateralAmount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "onCollateralReceiver(address,address,address,uint256,bytes)"(
      initiator: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      collateralAmount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    oracles(
      tokenIn: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        data: string;
        target: string;
        precision: BigNumber;
      }
    >;

    "oracles(address)"(
      tokenIn: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        data: string;
        target: string;
        precision: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    pendingOwner(overrides?: CallOverrides): Promise<string>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<string>;

    swappers(
      tokenIn: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    "swappers(address)"(
      tokenIn: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address,bool,bool)"(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateRates(
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    "updateRates(address[])"(
      _tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OracleAssigned(address,address)"(
      tokenIn?: PromiseOrValue<string> | null,
      oracle?: PromiseOrValue<string> | null
    ): OracleAssignedEventFilter;
    OracleAssigned(
      tokenIn?: PromiseOrValue<string> | null,
      oracle?: PromiseOrValue<string> | null
    ): OracleAssignedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "SwapperAssigned(address,address)"(
      tokenIn?: PromiseOrValue<string> | null,
      swapper?: PromiseOrValue<string> | null
    ): SwapperAssignedEventFilter;
    SwapperAssigned(
      tokenIn?: PromiseOrValue<string> | null,
      swapper?: PromiseOrValue<string> | null
    ): SwapperAssignedEventFilter;
  };

  estimateGas: {
    allowances(
      sender: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowances(address,address)"(
      sender: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    assignOracle(
      _tokenIn: PromiseOrValue<string>,
      _oracle: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      _precision: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "assignOracle(address,address,bytes,uint256)"(
      _tokenIn: PromiseOrValue<string>,
      _oracle: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      _precision: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    assignSwapper(
      _tokenIn: PromiseOrValue<string>,
      _swapper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "assignSwapper(address,address)"(
      _tokenIn: PromiseOrValue<string>,
      _swapper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cachedRates(
      oracle: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "cachedRates(address)"(
      oracle: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "claimOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    decreaseAllowance(
      sender: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "decreaseAllowance(address,address,uint256)"(
      sender: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    increaseAllowance(
      sender: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "increaseAllowance(address,address,uint256)"(
      sender: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onCollateralReceiver(
      initiator: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      collateralAmount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "onCollateralReceiver(address,address,address,uint256,bytes)"(
      initiator: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      collateralAmount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    oracles(
      tokenIn: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "oracles(address)"(
      tokenIn: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<BigNumber>;

    swappers(
      tokenIn: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "swappers(address)"(
      tokenIn: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address,bool,bool)"(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateRates(
      _tokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "updateRates(address[])"(
      _tokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowances(
      sender: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allowances(address,address)"(
      sender: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    assignOracle(
      _tokenIn: PromiseOrValue<string>,
      _oracle: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      _precision: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "assignOracle(address,address,bytes,uint256)"(
      _tokenIn: PromiseOrValue<string>,
      _oracle: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      _precision: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    assignSwapper(
      _tokenIn: PromiseOrValue<string>,
      _swapper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "assignSwapper(address,address)"(
      _tokenIn: PromiseOrValue<string>,
      _swapper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cachedRates(
      oracle: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "cachedRates(address)"(
      oracle: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "claimOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    decreaseAllowance(
      sender: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "decreaseAllowance(address,address,uint256)"(
      sender: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    increaseAllowance(
      sender: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "increaseAllowance(address,address,uint256)"(
      sender: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onCollateralReceiver(
      initiator: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      collateralAmount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "onCollateralReceiver(address,address,address,uint256,bytes)"(
      initiator: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      collateralAmount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    oracles(
      tokenIn: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "oracles(address)"(
      tokenIn: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    swappers(
      tokenIn: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "swappers(address)"(
      tokenIn: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address,bool,bool)"(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateRates(
      _tokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "updateRates(address[])"(
      _tokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

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

export interface StargateSwapperV3Interface extends utils.Interface {
  functions: {
    "owner()": FunctionFragment;
    "poolFee()": FunctionFragment;
    "queryAmountOut(uint256,address,address,address,bytes)": FunctionFragment;
    "setPoolFee(uint24)": FunctionFragment;
    "swap(uint256,address,address,uint256,uint256,bytes)": FunctionFragment;
    "swapRouter()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "owner"
      | "owner()"
      | "poolFee"
      | "poolFee()"
      | "queryAmountOut"
      | "queryAmountOut(uint256,address,address,address,bytes)"
      | "setPoolFee"
      | "setPoolFee(uint24)"
      | "swap"
      | "swap(uint256,address,address,uint256,uint256,bytes)"
      | "swapRouter"
      | "swapRouter()"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner()", values?: undefined): string;
  encodeFunctionData(functionFragment: "poolFee", values?: undefined): string;
  encodeFunctionData(functionFragment: "poolFee()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "queryAmountOut",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "queryAmountOut(uint256,address,address,address,bytes)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setPoolFee",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setPoolFee(uint24)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swap(uint256,address,address,uint256,uint256,bytes)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swapRouter()",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolFee()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "queryAmountOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "queryAmountOut(uint256,address,address,address,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPoolFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPoolFee(uint24)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swap(uint256,address,address,uint256,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swapRouter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swapRouter()",
    data: BytesLike
  ): Result;

  events: {
    "PoolFee(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PoolFee"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolFee(uint256,uint256)"): EventFragment;
}

export interface PoolFeeEventObject {
  _old: BigNumber;
  _new: BigNumber;
}
export type PoolFeeEvent = TypedEvent<
  [BigNumber, BigNumber],
  PoolFeeEventObject
>;

export type PoolFeeEventFilter = TypedEventFilter<PoolFeeEvent>;

export interface StargateSwapperV3 extends BaseContract {
  contractName: "StargateSwapperV3";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StargateSwapperV3Interface;

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
    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    poolFee(overrides?: CallOverrides): Promise<[number]>;

    "poolFee()"(overrides?: CallOverrides): Promise<[number]>;

    queryAmountOut(
      amountIn: PromiseOrValue<BigNumberish>,
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountOut: BigNumber }>;

    "queryAmountOut(uint256,address,address,address,bytes)"(
      amountIn: PromiseOrValue<BigNumberish>,
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountOut: BigNumber }>;

    setPoolFee(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setPoolFee(uint24)"(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swap(
      amountIn: PromiseOrValue<BigNumberish>,
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      amountOutMin: PromiseOrValue<BigNumberish>,
      arg5: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "swap(uint256,address,address,uint256,uint256,bytes)"(
      amountIn: PromiseOrValue<BigNumberish>,
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      amountOutMin: PromiseOrValue<BigNumberish>,
      arg5: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapRouter(overrides?: CallOverrides): Promise<[string]>;

    "swapRouter()"(overrides?: CallOverrides): Promise<[string]>;
  };

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  poolFee(overrides?: CallOverrides): Promise<number>;

  "poolFee()"(overrides?: CallOverrides): Promise<number>;

  queryAmountOut(
    amountIn: PromiseOrValue<BigNumberish>,
    tokenIn: PromiseOrValue<string>,
    tokenOut: PromiseOrValue<string>,
    pool: PromiseOrValue<string>,
    arg4: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "queryAmountOut(uint256,address,address,address,bytes)"(
    amountIn: PromiseOrValue<BigNumberish>,
    tokenIn: PromiseOrValue<string>,
    tokenOut: PromiseOrValue<string>,
    pool: PromiseOrValue<string>,
    arg4: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setPoolFee(
    _newFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setPoolFee(uint24)"(
    _newFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swap(
    amountIn: PromiseOrValue<BigNumberish>,
    tokenIn: PromiseOrValue<string>,
    tokenOut: PromiseOrValue<string>,
    deadline: PromiseOrValue<BigNumberish>,
    amountOutMin: PromiseOrValue<BigNumberish>,
    arg5: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "swap(uint256,address,address,uint256,uint256,bytes)"(
    amountIn: PromiseOrValue<BigNumberish>,
    tokenIn: PromiseOrValue<string>,
    tokenOut: PromiseOrValue<string>,
    deadline: PromiseOrValue<BigNumberish>,
    amountOutMin: PromiseOrValue<BigNumberish>,
    arg5: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapRouter(overrides?: CallOverrides): Promise<string>;

  "swapRouter()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    poolFee(overrides?: CallOverrides): Promise<number>;

    "poolFee()"(overrides?: CallOverrides): Promise<number>;

    queryAmountOut(
      amountIn: PromiseOrValue<BigNumberish>,
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "queryAmountOut(uint256,address,address,address,bytes)"(
      amountIn: PromiseOrValue<BigNumberish>,
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setPoolFee(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "setPoolFee(uint24)"(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    swap(
      amountIn: PromiseOrValue<BigNumberish>,
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      amountOutMin: PromiseOrValue<BigNumberish>,
      arg5: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "swap(uint256,address,address,uint256,uint256,bytes)"(
      amountIn: PromiseOrValue<BigNumberish>,
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      amountOutMin: PromiseOrValue<BigNumberish>,
      arg5: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapRouter(overrides?: CallOverrides): Promise<string>;

    "swapRouter()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "PoolFee(uint256,uint256)"(
      _old?: PromiseOrValue<BigNumberish> | null,
      _new?: PromiseOrValue<BigNumberish> | null
    ): PoolFeeEventFilter;
    PoolFee(
      _old?: PromiseOrValue<BigNumberish> | null,
      _new?: PromiseOrValue<BigNumberish> | null
    ): PoolFeeEventFilter;
  };

  estimateGas: {
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    poolFee(overrides?: CallOverrides): Promise<BigNumber>;

    "poolFee()"(overrides?: CallOverrides): Promise<BigNumber>;

    queryAmountOut(
      amountIn: PromiseOrValue<BigNumberish>,
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "queryAmountOut(uint256,address,address,address,bytes)"(
      amountIn: PromiseOrValue<BigNumberish>,
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setPoolFee(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setPoolFee(uint24)"(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swap(
      amountIn: PromiseOrValue<BigNumberish>,
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      amountOutMin: PromiseOrValue<BigNumberish>,
      arg5: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "swap(uint256,address,address,uint256,uint256,bytes)"(
      amountIn: PromiseOrValue<BigNumberish>,
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      amountOutMin: PromiseOrValue<BigNumberish>,
      arg5: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapRouter(overrides?: CallOverrides): Promise<BigNumber>;

    "swapRouter()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "poolFee()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    queryAmountOut(
      amountIn: PromiseOrValue<BigNumberish>,
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "queryAmountOut(uint256,address,address,address,bytes)"(
      amountIn: PromiseOrValue<BigNumberish>,
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setPoolFee(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setPoolFee(uint24)"(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swap(
      amountIn: PromiseOrValue<BigNumberish>,
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      amountOutMin: PromiseOrValue<BigNumberish>,
      arg5: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "swap(uint256,address,address,uint256,uint256,bytes)"(
      amountIn: PromiseOrValue<BigNumberish>,
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      amountOutMin: PromiseOrValue<BigNumberish>,
      arg5: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "swapRouter()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

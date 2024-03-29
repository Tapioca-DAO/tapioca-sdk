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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace BalancerVaultMock {
  export type SingleSwapStruct = {
    poolId: PromiseOrValue<BytesLike>;
    kind: PromiseOrValue<BigNumberish>;
    assetIn: PromiseOrValue<string>;
    assetOut: PromiseOrValue<string>;
    amount: PromiseOrValue<BigNumberish>;
    userData: PromiseOrValue<BytesLike>;
  };

  export type SingleSwapStructOutput = [
    string,
    number,
    string,
    string,
    BigNumber,
    string
  ] & {
    poolId: string;
    kind: number;
    assetIn: string;
    assetOut: string;
    amount: BigNumber;
    userData: string;
  };

  export type FundManagementStruct = {
    sender: PromiseOrValue<string>;
    fromInternalBalance: PromiseOrValue<boolean>;
    recipient: PromiseOrValue<string>;
    toInternalBalance: PromiseOrValue<boolean>;
  };

  export type FundManagementStructOutput = [
    string,
    boolean,
    string,
    boolean
  ] & {
    sender: string;
    fromInternalBalance: boolean;
    recipient: string;
    toInternalBalance: boolean;
  };
}

export interface BalancerVaultMockInterface extends utils.Interface {
  functions: {
    "getPoolId()": FunctionFragment;
    "swap((bytes32,uint8,address,address,uint256,bytes),(address,bool,address,bool),uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getPoolId"
      | "getPoolId()"
      | "swap"
      | "swap((bytes32,uint8,address,address,uint256,bytes),(address,bool,address,bool),uint256,uint256)"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "getPoolId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getPoolId()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [
      BalancerVaultMock.SingleSwapStruct,
      BalancerVaultMock.FundManagementStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swap((bytes32,uint8,address,address,uint256,bytes),(address,bool,address,bool),uint256,uint256)",
    values: [
      BalancerVaultMock.SingleSwapStruct,
      BalancerVaultMock.FundManagementStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "getPoolId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPoolId()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swap((bytes32,uint8,address,address,uint256,bytes),(address,bool,address,bool),uint256,uint256)",
    data: BytesLike
  ): Result;

  events: {};
}

export interface BalancerVaultMock extends BaseContract {
  contractName: "BalancerVaultMock";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BalancerVaultMockInterface;

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
    getPoolId(overrides?: CallOverrides): Promise<[string]>;

    "getPoolId()"(overrides?: CallOverrides): Promise<[string]>;

    swap(
      singleSwap: BalancerVaultMock.SingleSwapStruct,
      arg1: BalancerVaultMock.FundManagementStruct,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "swap((bytes32,uint8,address,address,uint256,bytes),(address,bool,address,bool),uint256,uint256)"(
      singleSwap: BalancerVaultMock.SingleSwapStruct,
      arg1: BalancerVaultMock.FundManagementStruct,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getPoolId(overrides?: CallOverrides): Promise<string>;

  "getPoolId()"(overrides?: CallOverrides): Promise<string>;

  swap(
    singleSwap: BalancerVaultMock.SingleSwapStruct,
    arg1: BalancerVaultMock.FundManagementStruct,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "swap((bytes32,uint8,address,address,uint256,bytes),(address,bool,address,bool),uint256,uint256)"(
    singleSwap: BalancerVaultMock.SingleSwapStruct,
    arg1: BalancerVaultMock.FundManagementStruct,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getPoolId(overrides?: CallOverrides): Promise<string>;

    "getPoolId()"(overrides?: CallOverrides): Promise<string>;

    swap(
      singleSwap: BalancerVaultMock.SingleSwapStruct,
      arg1: BalancerVaultMock.FundManagementStruct,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "swap((bytes32,uint8,address,address,uint256,bytes),(address,bool,address,bool),uint256,uint256)"(
      singleSwap: BalancerVaultMock.SingleSwapStruct,
      arg1: BalancerVaultMock.FundManagementStruct,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getPoolId(overrides?: CallOverrides): Promise<BigNumber>;

    "getPoolId()"(overrides?: CallOverrides): Promise<BigNumber>;

    swap(
      singleSwap: BalancerVaultMock.SingleSwapStruct,
      arg1: BalancerVaultMock.FundManagementStruct,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "swap((bytes32,uint8,address,address,uint256,bytes),(address,bool,address,bool),uint256,uint256)"(
      singleSwap: BalancerVaultMock.SingleSwapStruct,
      arg1: BalancerVaultMock.FundManagementStruct,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getPoolId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getPoolId()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    swap(
      singleSwap: BalancerVaultMock.SingleSwapStruct,
      arg1: BalancerVaultMock.FundManagementStruct,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "swap((bytes32,uint8,address,address,uint256,bytes),(address,bool,address,bool),uint256,uint256)"(
      singleSwap: BalancerVaultMock.SingleSwapStruct,
      arg1: BalancerVaultMock.FundManagementStruct,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

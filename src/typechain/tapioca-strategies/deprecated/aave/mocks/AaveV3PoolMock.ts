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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface AaveV3PoolMockInterface extends utils.Interface {
  functions: {
    "aAsset()": FunctionFragment;
    "asset()": FunctionFragment;
    "supply(address,uint256,address,uint16)": FunctionFragment;
    "withdraw(address,uint256,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "aAsset"
      | "aAsset()"
      | "asset"
      | "asset()"
      | "supply"
      | "supply(address,uint256,address,uint16)"
      | "withdraw"
      | "withdraw(address,uint256,address)"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "aAsset", values?: undefined): string;
  encodeFunctionData(functionFragment: "aAsset()", values?: undefined): string;
  encodeFunctionData(functionFragment: "asset", values?: undefined): string;
  encodeFunctionData(functionFragment: "asset()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "supply",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "supply(address,uint256,address,uint16)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw(address,uint256,address)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "aAsset", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "aAsset()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "asset()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "supply", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supply(address,uint256,address,uint16)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdraw(address,uint256,address)",
    data: BytesLike
  ): Result;

  events: {};
}

export interface AaveV3PoolMock extends BaseContract {
  contractName: "AaveV3PoolMock";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AaveV3PoolMockInterface;

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
    aAsset(overrides?: CallOverrides): Promise<[string]>;

    "aAsset()"(overrides?: CallOverrides): Promise<[string]>;

    asset(overrides?: CallOverrides): Promise<[string]>;

    "asset()"(overrides?: CallOverrides): Promise<[string]>;

    supply(
      arg0: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      arg3: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "supply(address,uint256,address,uint16)"(
      arg0: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      arg3: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      arg0: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "withdraw(address,uint256,address)"(
      arg0: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  aAsset(overrides?: CallOverrides): Promise<string>;

  "aAsset()"(overrides?: CallOverrides): Promise<string>;

  asset(overrides?: CallOverrides): Promise<string>;

  "asset()"(overrides?: CallOverrides): Promise<string>;

  supply(
    arg0: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    arg2: PromiseOrValue<string>,
    arg3: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "supply(address,uint256,address,uint16)"(
    arg0: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    arg2: PromiseOrValue<string>,
    arg3: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    arg0: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "withdraw(address,uint256,address)"(
    arg0: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    aAsset(overrides?: CallOverrides): Promise<string>;

    "aAsset()"(overrides?: CallOverrides): Promise<string>;

    asset(overrides?: CallOverrides): Promise<string>;

    "asset()"(overrides?: CallOverrides): Promise<string>;

    supply(
      arg0: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      arg3: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "supply(address,uint256,address,uint16)"(
      arg0: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      arg3: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      arg0: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "withdraw(address,uint256,address)"(
      arg0: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    aAsset(overrides?: CallOverrides): Promise<BigNumber>;

    "aAsset()"(overrides?: CallOverrides): Promise<BigNumber>;

    asset(overrides?: CallOverrides): Promise<BigNumber>;

    "asset()"(overrides?: CallOverrides): Promise<BigNumber>;

    supply(
      arg0: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      arg3: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "supply(address,uint256,address,uint16)"(
      arg0: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      arg3: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdraw(
      arg0: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "withdraw(address,uint256,address)"(
      arg0: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    aAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "aAsset()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    asset(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "asset()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supply(
      arg0: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      arg3: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "supply(address,uint256,address,uint16)"(
      arg0: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      arg3: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      arg0: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "withdraw(address,uint256,address)"(
      arg0: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

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
} from "../../common";

export interface YieldOptionsInterface extends utils.Interface {
  functions: {
    "create(uint32,uint32,uint128,uint32)": FunctionFragment;
    "exercise(uint256,uint256)": FunctionFragment;
    "mint(uint256,uint256,address,address)": FunctionFragment;
    "options(uint256)": FunctionFragment;
    "swap(uint256,uint256,address)": FunctionFragment;
    "withdraw(uint256,uint256,address)": FunctionFragment;
    "withdrawEarly(uint256,uint256,address)": FunctionFragment;
    "yieldBox()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "create"
      | "create(uint32,uint32,uint128,uint32)"
      | "exercise"
      | "exercise(uint256,uint256)"
      | "mint"
      | "mint(uint256,uint256,address,address)"
      | "options"
      | "options(uint256)"
      | "swap"
      | "swap(uint256,uint256,address)"
      | "withdraw"
      | "withdraw(uint256,uint256,address)"
      | "withdrawEarly"
      | "withdrawEarly(uint256,uint256,address)"
      | "yieldBox"
      | "yieldBox()"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "create",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "create(uint32,uint32,uint128,uint32)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "exercise",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "exercise(uint256,uint256)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "mint(uint256,uint256,address,address)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "options",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "options(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swap(uint256,uint256,address)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw(uint256,uint256,address)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawEarly",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawEarly(uint256,uint256,address)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(functionFragment: "yieldBox", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "yieldBox()",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "create(uint32,uint32,uint128,uint32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "exercise", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "exercise(uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mint(uint256,uint256,address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "options", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "options(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swap(uint256,uint256,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdraw(uint256,uint256,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawEarly",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawEarly(uint256,uint256,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "yieldBox", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "yieldBox()", data: BytesLike): Result;

  events: {
    "Exercise(uint256,address,uint256)": EventFragment;
    "Mint(uint256,address,uint256)": EventFragment;
    "Swap(uint256,address,uint256)": EventFragment;
    "Withdraw(uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Exercise"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "Exercise(uint256,address,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "Mint(uint256,address,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "Swap(uint256,address,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "Withdraw(uint256,address,uint256)"
  ): EventFragment;
}

export interface ExerciseEventObject {
  optionId: BigNumber;
  by: string;
  amount: BigNumber;
}
export type ExerciseEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  ExerciseEventObject
>;

export type ExerciseEventFilter = TypedEventFilter<ExerciseEvent>;

export interface MintEventObject {
  optionId: BigNumber;
  by: string;
  amount: BigNumber;
}
export type MintEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  MintEventObject
>;

export type MintEventFilter = TypedEventFilter<MintEvent>;

export interface SwapEventObject {
  optionId: BigNumber;
  by: string;
  assetAmount: BigNumber;
}
export type SwapEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  SwapEventObject
>;

export type SwapEventFilter = TypedEventFilter<SwapEvent>;

export interface WithdrawEventObject {
  optionId: BigNumber;
  by: string;
  amount: BigNumber;
}
export type WithdrawEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  WithdrawEventObject
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface YieldOptions extends BaseContract {
  contractName: "YieldOptions";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: YieldOptionsInterface;

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
    create(
      asset: PromiseOrValue<BigNumberish>,
      currency: PromiseOrValue<BigNumberish>,
      price: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "create(uint32,uint32,uint128,uint32)"(
      asset: PromiseOrValue<BigNumberish>,
      currency: PromiseOrValue<BigNumberish>,
      price: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    exercise(
      optionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "exercise(uint256,uint256)"(
      optionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mint(
      optionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      optionTo: PromiseOrValue<string>,
      minterTo: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "mint(uint256,uint256,address,address)"(
      optionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      optionTo: PromiseOrValue<string>,
      minterTo: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    options(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [number, number, number, number, number, BigNumber] & {
        asset: number;
        currency: number;
        expiry: number;
        optionAssetId: number;
        minterAssetId: number;
        price: BigNumber;
      }
    >;

    "options(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [number, number, number, number, number, BigNumber] & {
        asset: number;
        currency: number;
        expiry: number;
        optionAssetId: number;
        minterAssetId: number;
        price: BigNumber;
      }
    >;

    swap(
      optionId: PromiseOrValue<BigNumberish>,
      assetAmount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "swap(uint256,uint256,address)"(
      optionId: PromiseOrValue<BigNumberish>,
      assetAmount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      optionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "withdraw(uint256,uint256,address)"(
      optionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawEarly(
      optionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "withdrawEarly(uint256,uint256,address)"(
      optionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    yieldBox(overrides?: CallOverrides): Promise<[string]>;

    "yieldBox()"(overrides?: CallOverrides): Promise<[string]>;
  };

  create(
    asset: PromiseOrValue<BigNumberish>,
    currency: PromiseOrValue<BigNumberish>,
    price: PromiseOrValue<BigNumberish>,
    expiry: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "create(uint32,uint32,uint128,uint32)"(
    asset: PromiseOrValue<BigNumberish>,
    currency: PromiseOrValue<BigNumberish>,
    price: PromiseOrValue<BigNumberish>,
    expiry: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  exercise(
    optionId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "exercise(uint256,uint256)"(
    optionId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  mint(
    optionId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    optionTo: PromiseOrValue<string>,
    minterTo: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "mint(uint256,uint256,address,address)"(
    optionId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    optionTo: PromiseOrValue<string>,
    minterTo: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  options(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [number, number, number, number, number, BigNumber] & {
      asset: number;
      currency: number;
      expiry: number;
      optionAssetId: number;
      minterAssetId: number;
      price: BigNumber;
    }
  >;

  "options(uint256)"(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [number, number, number, number, number, BigNumber] & {
      asset: number;
      currency: number;
      expiry: number;
      optionAssetId: number;
      minterAssetId: number;
      price: BigNumber;
    }
  >;

  swap(
    optionId: PromiseOrValue<BigNumberish>,
    assetAmount: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "swap(uint256,uint256,address)"(
    optionId: PromiseOrValue<BigNumberish>,
    assetAmount: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    optionId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "withdraw(uint256,uint256,address)"(
    optionId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawEarly(
    optionId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "withdrawEarly(uint256,uint256,address)"(
    optionId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  yieldBox(overrides?: CallOverrides): Promise<string>;

  "yieldBox()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    create(
      asset: PromiseOrValue<BigNumberish>,
      currency: PromiseOrValue<BigNumberish>,
      price: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "create(uint32,uint32,uint128,uint32)"(
      asset: PromiseOrValue<BigNumberish>,
      currency: PromiseOrValue<BigNumberish>,
      price: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exercise(
      optionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "exercise(uint256,uint256)"(
      optionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    mint(
      optionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      optionTo: PromiseOrValue<string>,
      minterTo: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "mint(uint256,uint256,address,address)"(
      optionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      optionTo: PromiseOrValue<string>,
      minterTo: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    options(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [number, number, number, number, number, BigNumber] & {
        asset: number;
        currency: number;
        expiry: number;
        optionAssetId: number;
        minterAssetId: number;
        price: BigNumber;
      }
    >;

    "options(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [number, number, number, number, number, BigNumber] & {
        asset: number;
        currency: number;
        expiry: number;
        optionAssetId: number;
        minterAssetId: number;
        price: BigNumber;
      }
    >;

    swap(
      optionId: PromiseOrValue<BigNumberish>,
      assetAmount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "swap(uint256,uint256,address)"(
      optionId: PromiseOrValue<BigNumberish>,
      assetAmount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      optionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdraw(uint256,uint256,address)"(
      optionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawEarly(
      optionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawEarly(uint256,uint256,address)"(
      optionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    yieldBox(overrides?: CallOverrides): Promise<string>;

    "yieldBox()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Exercise(uint256,address,uint256)"(
      optionId?: null,
      by?: PromiseOrValue<string> | null,
      amount?: null
    ): ExerciseEventFilter;
    Exercise(
      optionId?: null,
      by?: PromiseOrValue<string> | null,
      amount?: null
    ): ExerciseEventFilter;

    "Mint(uint256,address,uint256)"(
      optionId?: null,
      by?: PromiseOrValue<string> | null,
      amount?: null
    ): MintEventFilter;
    Mint(
      optionId?: null,
      by?: PromiseOrValue<string> | null,
      amount?: null
    ): MintEventFilter;

    "Swap(uint256,address,uint256)"(
      optionId?: null,
      by?: PromiseOrValue<string> | null,
      assetAmount?: null
    ): SwapEventFilter;
    Swap(
      optionId?: null,
      by?: PromiseOrValue<string> | null,
      assetAmount?: null
    ): SwapEventFilter;

    "Withdraw(uint256,address,uint256)"(
      optionId?: null,
      by?: PromiseOrValue<string> | null,
      amount?: null
    ): WithdrawEventFilter;
    Withdraw(
      optionId?: null,
      by?: PromiseOrValue<string> | null,
      amount?: null
    ): WithdrawEventFilter;
  };

  estimateGas: {
    create(
      asset: PromiseOrValue<BigNumberish>,
      currency: PromiseOrValue<BigNumberish>,
      price: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "create(uint32,uint32,uint128,uint32)"(
      asset: PromiseOrValue<BigNumberish>,
      currency: PromiseOrValue<BigNumberish>,
      price: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    exercise(
      optionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "exercise(uint256,uint256)"(
      optionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    mint(
      optionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      optionTo: PromiseOrValue<string>,
      minterTo: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "mint(uint256,uint256,address,address)"(
      optionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      optionTo: PromiseOrValue<string>,
      minterTo: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    options(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "options(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swap(
      optionId: PromiseOrValue<BigNumberish>,
      assetAmount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "swap(uint256,uint256,address)"(
      optionId: PromiseOrValue<BigNumberish>,
      assetAmount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdraw(
      optionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "withdraw(uint256,uint256,address)"(
      optionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawEarly(
      optionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "withdrawEarly(uint256,uint256,address)"(
      optionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    yieldBox(overrides?: CallOverrides): Promise<BigNumber>;

    "yieldBox()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    create(
      asset: PromiseOrValue<BigNumberish>,
      currency: PromiseOrValue<BigNumberish>,
      price: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "create(uint32,uint32,uint128,uint32)"(
      asset: PromiseOrValue<BigNumberish>,
      currency: PromiseOrValue<BigNumberish>,
      price: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    exercise(
      optionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "exercise(uint256,uint256)"(
      optionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    mint(
      optionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      optionTo: PromiseOrValue<string>,
      minterTo: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "mint(uint256,uint256,address,address)"(
      optionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      optionTo: PromiseOrValue<string>,
      minterTo: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    options(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "options(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swap(
      optionId: PromiseOrValue<BigNumberish>,
      assetAmount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "swap(uint256,uint256,address)"(
      optionId: PromiseOrValue<BigNumberish>,
      assetAmount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      optionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "withdraw(uint256,uint256,address)"(
      optionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawEarly(
      optionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "withdrawEarly(uint256,uint256,address)"(
      optionId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    yieldBox(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "yieldBox()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

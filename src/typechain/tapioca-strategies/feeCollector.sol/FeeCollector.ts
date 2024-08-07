/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
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
} from "../common";

export interface FeeCollectorInterface extends utils.Interface {
  functions: {
    "FEE_BPS()": FunctionFragment;
    "feeRecipient()": FunctionFragment;
    "feesPending()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "FEE_BPS"
      | "FEE_BPS()"
      | "feeRecipient"
      | "feeRecipient()"
      | "feesPending"
      | "feesPending()"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "FEE_BPS", values?: undefined): string;
  encodeFunctionData(functionFragment: "FEE_BPS()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeRecipient",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeRecipient()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feesPending",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feesPending()",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "FEE_BPS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "FEE_BPS()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeRecipient()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feesPending",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feesPending()",
    data: BytesLike
  ): Result;

  events: {};
}

export interface FeeCollector extends BaseContract {
  contractName: "FeeCollector";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FeeCollectorInterface;

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
    FEE_BPS(overrides?: CallOverrides): Promise<[BigNumber]>;

    "FEE_BPS()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeRecipient(overrides?: CallOverrides): Promise<[string]>;

    "feeRecipient()"(overrides?: CallOverrides): Promise<[string]>;

    feesPending(overrides?: CallOverrides): Promise<[BigNumber]>;

    "feesPending()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  FEE_BPS(overrides?: CallOverrides): Promise<BigNumber>;

  "FEE_BPS()"(overrides?: CallOverrides): Promise<BigNumber>;

  feeRecipient(overrides?: CallOverrides): Promise<string>;

  "feeRecipient()"(overrides?: CallOverrides): Promise<string>;

  feesPending(overrides?: CallOverrides): Promise<BigNumber>;

  "feesPending()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    FEE_BPS(overrides?: CallOverrides): Promise<BigNumber>;

    "FEE_BPS()"(overrides?: CallOverrides): Promise<BigNumber>;

    feeRecipient(overrides?: CallOverrides): Promise<string>;

    "feeRecipient()"(overrides?: CallOverrides): Promise<string>;

    feesPending(overrides?: CallOverrides): Promise<BigNumber>;

    "feesPending()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    FEE_BPS(overrides?: CallOverrides): Promise<BigNumber>;

    "FEE_BPS()"(overrides?: CallOverrides): Promise<BigNumber>;

    feeRecipient(overrides?: CallOverrides): Promise<BigNumber>;

    "feeRecipient()"(overrides?: CallOverrides): Promise<BigNumber>;

    feesPending(overrides?: CallOverrides): Promise<BigNumber>;

    "feesPending()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    FEE_BPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "FEE_BPS()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeRecipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "feeRecipient()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feesPending(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "feesPending()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

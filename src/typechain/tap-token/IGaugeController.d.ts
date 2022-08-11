/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IGaugeControllerInterface extends ethers.utils.Interface {
  functions: {
    "gauge_relative_weight(address)": FunctionFragment;
    "gauge_relative_weight_write(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "gauge_relative_weight",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "gauge_relative_weight_write",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "gauge_relative_weight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "gauge_relative_weight_write",
    data: BytesLike
  ): Result;

  events: {};
}

export class IGaugeController extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IGaugeControllerInterface;

  functions: {
    gauge_relative_weight(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "gauge_relative_weight(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    gauge_relative_weight_write(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "gauge_relative_weight_write(address)"(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  gauge_relative_weight(
    addr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "gauge_relative_weight(address)"(
    addr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  gauge_relative_weight_write(
    addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "gauge_relative_weight_write(address)"(
    addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    gauge_relative_weight(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "gauge_relative_weight(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    gauge_relative_weight_write(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "gauge_relative_weight_write(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    gauge_relative_weight(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "gauge_relative_weight(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    gauge_relative_weight_write(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "gauge_relative_weight_write(address)"(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    gauge_relative_weight(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "gauge_relative_weight(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    gauge_relative_weight_write(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "gauge_relative_weight_write(address)"(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
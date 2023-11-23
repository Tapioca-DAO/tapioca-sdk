/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
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
  PromiseOrValue,
} from "./common";

export type AssetStruct = {
  tokenType: PromiseOrValue<BigNumberish>;
  contractAddress: PromiseOrValue<string>;
  strategy: PromiseOrValue<string>;
  tokenId: PromiseOrValue<BigNumberish>;
};

export type AssetStructOutput = [number, string, string, BigNumber] & {
  tokenType: number;
  contractAddress: string;
  strategy: string;
  tokenId: BigNumber;
};

export type NativeTokenStruct = {
  name: PromiseOrValue<string>;
  symbol: PromiseOrValue<string>;
  decimals: PromiseOrValue<BigNumberish>;
  uri: PromiseOrValue<string>;
};

export type NativeTokenStructOutput = [string, string, number, string] & {
  name: string;
  symbol: string;
  decimals: number;
  uri: string;
};

export interface YieldBoxURIBuilderInterface extends utils.Interface {
  functions: {
    "decimals((uint8,address,address,uint256),uint8)": FunctionFragment;
    "name((uint8,address,address,uint256),string)": FunctionFragment;
    "symbol((uint8,address,address,uint256),string)": FunctionFragment;
    "uri((uint8,address,address,uint256),(string,string,uint8,string),uint256,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "decimals"
      | "decimals((uint8,address,address,uint256),uint8)"
      | "name"
      | "name((uint8,address,address,uint256),string)"
      | "symbol"
      | "symbol((uint8,address,address,uint256),string)"
      | "uri"
      | "uri((uint8,address,address,uint256),(string,string,uint8,string),uint256,address)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "decimals",
    values: [AssetStruct, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "decimals((uint8,address,address,uint256),uint8)",
    values: [AssetStruct, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "name",
    values: [AssetStruct, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "name((uint8,address,address,uint256),string)",
    values: [AssetStruct, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "symbol",
    values: [AssetStruct, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "symbol((uint8,address,address,uint256),string)",
    values: [AssetStruct, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "uri",
    values: [
      AssetStruct,
      NativeTokenStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "uri((uint8,address,address,uint256),(string,string,uint8,string),uint256,address)",
    values: [
      AssetStruct,
      NativeTokenStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decimals((uint8,address,address,uint256),uint8)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "name((uint8,address,address,uint256),string)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "symbol((uint8,address,address,uint256),string)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "uri((uint8,address,address,uint256),(string,string,uint8,string),uint256,address)",
    data: BytesLike
  ): Result;

  events: {};
}

export interface YieldBoxURIBuilder extends BaseContract {
  contractName: "YieldBoxURIBuilder";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: YieldBoxURIBuilderInterface;

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
    decimals(
      asset: AssetStruct,
      nativeDecimals: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    "decimals((uint8,address,address,uint256),uint8)"(
      asset: AssetStruct,
      nativeDecimals: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    name(
      asset: AssetStruct,
      nativeName: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "name((uint8,address,address,uint256),string)"(
      asset: AssetStruct,
      nativeName: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    symbol(
      asset: AssetStruct,
      nativeSymbol: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "symbol((uint8,address,address,uint256),string)"(
      asset: AssetStruct,
      nativeSymbol: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    uri(
      asset: AssetStruct,
      nativeToken: NativeTokenStruct,
      totalSupply: PromiseOrValue<BigNumberish>,
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "uri((uint8,address,address,uint256),(string,string,uint8,string),uint256,address)"(
      asset: AssetStruct,
      nativeToken: NativeTokenStruct,
      totalSupply: PromiseOrValue<BigNumberish>,
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  decimals(
    asset: AssetStruct,
    nativeDecimals: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  "decimals((uint8,address,address,uint256),uint8)"(
    asset: AssetStruct,
    nativeDecimals: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  name(
    asset: AssetStruct,
    nativeName: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  "name((uint8,address,address,uint256),string)"(
    asset: AssetStruct,
    nativeName: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  symbol(
    asset: AssetStruct,
    nativeSymbol: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  "symbol((uint8,address,address,uint256),string)"(
    asset: AssetStruct,
    nativeSymbol: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  uri(
    asset: AssetStruct,
    nativeToken: NativeTokenStruct,
    totalSupply: PromiseOrValue<BigNumberish>,
    owner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  "uri((uint8,address,address,uint256),(string,string,uint8,string),uint256,address)"(
    asset: AssetStruct,
    nativeToken: NativeTokenStruct,
    totalSupply: PromiseOrValue<BigNumberish>,
    owner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    decimals(
      asset: AssetStruct,
      nativeDecimals: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    "decimals((uint8,address,address,uint256),uint8)"(
      asset: AssetStruct,
      nativeDecimals: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    name(
      asset: AssetStruct,
      nativeName: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    "name((uint8,address,address,uint256),string)"(
      asset: AssetStruct,
      nativeName: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    symbol(
      asset: AssetStruct,
      nativeSymbol: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    "symbol((uint8,address,address,uint256),string)"(
      asset: AssetStruct,
      nativeSymbol: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    uri(
      asset: AssetStruct,
      nativeToken: NativeTokenStruct,
      totalSupply: PromiseOrValue<BigNumberish>,
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    "uri((uint8,address,address,uint256),(string,string,uint8,string),uint256,address)"(
      asset: AssetStruct,
      nativeToken: NativeTokenStruct,
      totalSupply: PromiseOrValue<BigNumberish>,
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    decimals(
      asset: AssetStruct,
      nativeDecimals: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "decimals((uint8,address,address,uint256),uint8)"(
      asset: AssetStruct,
      nativeDecimals: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(
      asset: AssetStruct,
      nativeName: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "name((uint8,address,address,uint256),string)"(
      asset: AssetStruct,
      nativeName: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(
      asset: AssetStruct,
      nativeSymbol: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "symbol((uint8,address,address,uint256),string)"(
      asset: AssetStruct,
      nativeSymbol: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    uri(
      asset: AssetStruct,
      nativeToken: NativeTokenStruct,
      totalSupply: PromiseOrValue<BigNumberish>,
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "uri((uint8,address,address,uint256),(string,string,uint8,string),uint256,address)"(
      asset: AssetStruct,
      nativeToken: NativeTokenStruct,
      totalSupply: PromiseOrValue<BigNumberish>,
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    decimals(
      asset: AssetStruct,
      nativeDecimals: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "decimals((uint8,address,address,uint256),uint8)"(
      asset: AssetStruct,
      nativeDecimals: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    name(
      asset: AssetStruct,
      nativeName: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "name((uint8,address,address,uint256),string)"(
      asset: AssetStruct,
      nativeName: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    symbol(
      asset: AssetStruct,
      nativeSymbol: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "symbol((uint8,address,address,uint256),string)"(
      asset: AssetStruct,
      nativeSymbol: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    uri(
      asset: AssetStruct,
      nativeToken: NativeTokenStruct,
      totalSupply: PromiseOrValue<BigNumberish>,
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "uri((uint8,address,address,uint256),(string,string,uint8,string),uint256,address)"(
      asset: AssetStruct,
      nativeToken: NativeTokenStruct,
      totalSupply: PromiseOrValue<BigNumberish>,
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

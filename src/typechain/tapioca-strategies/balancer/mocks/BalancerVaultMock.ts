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
} from "../../common";

export declare namespace IBalancerVault {
  export type ExitPoolRequestStruct = {
    assets: PromiseOrValue<string>[];
    minAmountsOut: PromiseOrValue<BigNumberish>[];
    userData: PromiseOrValue<BytesLike>;
    toInternalBalance: PromiseOrValue<boolean>;
  };

  export type ExitPoolRequestStructOutput = [
    string[],
    BigNumber[],
    string,
    boolean
  ] & {
    assets: string[];
    minAmountsOut: BigNumber[];
    userData: string;
    toInternalBalance: boolean;
  };

  export type JoinPoolRequestStruct = {
    assets: PromiseOrValue<string>[];
    maxAmountsIn: PromiseOrValue<BigNumberish>[];
    userData: PromiseOrValue<BytesLike>;
    fromInternalBalance: PromiseOrValue<boolean>;
  };

  export type JoinPoolRequestStructOutput = [
    string[],
    BigNumber[],
    string,
    boolean
  ] & {
    assets: string[];
    maxAmountsIn: BigNumber[];
    userData: string;
    fromInternalBalance: boolean;
  };
}

export interface BalancerVaultMockInterface extends utils.Interface {
  functions: {
    "exitPool(bytes32,address,address,(address[],uint256[],bytes,bool))": FunctionFragment;
    "getPool(bytes32)": FunctionFragment;
    "getPoolTokens(bytes32)": FunctionFragment;
    "joinPool(bytes32,address,address,(address[],uint256[],bytes,bool))": FunctionFragment;
    "stablePool()": FunctionFragment;
    "weth()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "exitPool"
      | "exitPool(bytes32,address,address,(address[],uint256[],bytes,bool))"
      | "getPool"
      | "getPool(bytes32)"
      | "getPoolTokens"
      | "getPoolTokens(bytes32)"
      | "joinPool"
      | "joinPool(bytes32,address,address,(address[],uint256[],bytes,bool))"
      | "stablePool"
      | "stablePool()"
      | "weth"
      | "weth()"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "exitPool",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      IBalancerVault.ExitPoolRequestStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "exitPool(bytes32,address,address,(address[],uint256[],bytes,bool))",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      IBalancerVault.ExitPoolRequestStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getPool",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPool(bytes32)",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolTokens",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolTokens(bytes32)",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "joinPool",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      IBalancerVault.JoinPoolRequestStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "joinPool(bytes32,address,address,(address[],uint256[],bytes,bool))",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      IBalancerVault.JoinPoolRequestStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "stablePool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stablePool()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "weth", values?: undefined): string;
  encodeFunctionData(functionFragment: "weth()", values?: undefined): string;

  decodeFunctionResult(functionFragment: "exitPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "exitPool(bytes32,address,address,(address[],uint256[],bytes,bool))",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPool(bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPoolTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPoolTokens(bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "joinPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "joinPool(bytes32,address,address,(address[],uint256[],bytes,bool))",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stablePool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stablePool()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "weth()", data: BytesLike): Result;

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
    exitPool(
      arg0: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      request: IBalancerVault.ExitPoolRequestStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "exitPool(bytes32,address,address,(address[],uint256[],bytes,bool))"(
      arg0: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      request: IBalancerVault.ExitPoolRequestStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getPool(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string, number]>;

    "getPool(bytes32)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string, number]>;

    getPoolTokens(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[], BigNumber] & {
        tokens: string[];
        balances: BigNumber[];
        lastChangeBlock: BigNumber;
      }
    >;

    "getPoolTokens(bytes32)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[], BigNumber] & {
        tokens: string[];
        balances: BigNumber[];
        lastChangeBlock: BigNumber;
      }
    >;

    joinPool(
      arg0: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      request: IBalancerVault.JoinPoolRequestStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "joinPool(bytes32,address,address,(address[],uint256[],bytes,bool))"(
      arg0: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      request: IBalancerVault.JoinPoolRequestStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stablePool(overrides?: CallOverrides): Promise<[string]>;

    "stablePool()"(overrides?: CallOverrides): Promise<[string]>;

    weth(overrides?: CallOverrides): Promise<[string]>;

    "weth()"(overrides?: CallOverrides): Promise<[string]>;
  };

  exitPool(
    arg0: PromiseOrValue<BytesLike>,
    sender: PromiseOrValue<string>,
    recipient: PromiseOrValue<string>,
    request: IBalancerVault.ExitPoolRequestStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "exitPool(bytes32,address,address,(address[],uint256[],bytes,bool))"(
    arg0: PromiseOrValue<BytesLike>,
    sender: PromiseOrValue<string>,
    recipient: PromiseOrValue<string>,
    request: IBalancerVault.ExitPoolRequestStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getPool(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<[string, number]>;

  "getPool(bytes32)"(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<[string, number]>;

  getPoolTokens(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [string[], BigNumber[], BigNumber] & {
      tokens: string[];
      balances: BigNumber[];
      lastChangeBlock: BigNumber;
    }
  >;

  "getPoolTokens(bytes32)"(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [string[], BigNumber[], BigNumber] & {
      tokens: string[];
      balances: BigNumber[];
      lastChangeBlock: BigNumber;
    }
  >;

  joinPool(
    arg0: PromiseOrValue<BytesLike>,
    sender: PromiseOrValue<string>,
    recipient: PromiseOrValue<string>,
    request: IBalancerVault.JoinPoolRequestStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "joinPool(bytes32,address,address,(address[],uint256[],bytes,bool))"(
    arg0: PromiseOrValue<BytesLike>,
    sender: PromiseOrValue<string>,
    recipient: PromiseOrValue<string>,
    request: IBalancerVault.JoinPoolRequestStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stablePool(overrides?: CallOverrides): Promise<string>;

  "stablePool()"(overrides?: CallOverrides): Promise<string>;

  weth(overrides?: CallOverrides): Promise<string>;

  "weth()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    exitPool(
      arg0: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      request: IBalancerVault.ExitPoolRequestStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    "exitPool(bytes32,address,address,(address[],uint256[],bytes,bool))"(
      arg0: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      request: IBalancerVault.ExitPoolRequestStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    getPool(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string, number]>;

    "getPool(bytes32)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string, number]>;

    getPoolTokens(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[], BigNumber] & {
        tokens: string[];
        balances: BigNumber[];
        lastChangeBlock: BigNumber;
      }
    >;

    "getPoolTokens(bytes32)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[], BigNumber] & {
        tokens: string[];
        balances: BigNumber[];
        lastChangeBlock: BigNumber;
      }
    >;

    joinPool(
      arg0: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      request: IBalancerVault.JoinPoolRequestStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    "joinPool(bytes32,address,address,(address[],uint256[],bytes,bool))"(
      arg0: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      request: IBalancerVault.JoinPoolRequestStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    stablePool(overrides?: CallOverrides): Promise<string>;

    "stablePool()"(overrides?: CallOverrides): Promise<string>;

    weth(overrides?: CallOverrides): Promise<string>;

    "weth()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    exitPool(
      arg0: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      request: IBalancerVault.ExitPoolRequestStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "exitPool(bytes32,address,address,(address[],uint256[],bytes,bool))"(
      arg0: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      request: IBalancerVault.ExitPoolRequestStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getPool(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPool(bytes32)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPoolTokens(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPoolTokens(bytes32)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    joinPool(
      arg0: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      request: IBalancerVault.JoinPoolRequestStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "joinPool(bytes32,address,address,(address[],uint256[],bytes,bool))"(
      arg0: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      request: IBalancerVault.JoinPoolRequestStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stablePool(overrides?: CallOverrides): Promise<BigNumber>;

    "stablePool()"(overrides?: CallOverrides): Promise<BigNumber>;

    weth(overrides?: CallOverrides): Promise<BigNumber>;

    "weth()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    exitPool(
      arg0: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      request: IBalancerVault.ExitPoolRequestStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "exitPool(bytes32,address,address,(address[],uint256[],bytes,bool))"(
      arg0: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      request: IBalancerVault.ExitPoolRequestStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getPool(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPool(bytes32)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPoolTokens(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPoolTokens(bytes32)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    joinPool(
      arg0: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      request: IBalancerVault.JoinPoolRequestStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "joinPool(bytes32,address,address,(address[],uint256[],bytes,bool))"(
      arg0: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      request: IBalancerVault.JoinPoolRequestStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stablePool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "stablePool()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "weth()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

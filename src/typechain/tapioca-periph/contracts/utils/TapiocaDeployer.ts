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

export declare namespace TapiocaMulticall {
  export type CallStruct = {
    target: PromiseOrValue<string>;
    allowFailure: PromiseOrValue<boolean>;
    callData: PromiseOrValue<BytesLike>;
  };

  export type CallStructOutput = [string, boolean, string] & {
    target: string;
    allowFailure: boolean;
    callData: string;
  };

  export type ResultStruct = {
    success: PromiseOrValue<boolean>;
    returnData: PromiseOrValue<BytesLike>;
  };

  export type ResultStructOutput = [boolean, string] & {
    success: boolean;
    returnData: string;
  };

  export type CallValueStruct = {
    target: PromiseOrValue<string>;
    allowFailure: PromiseOrValue<boolean>;
    value: PromiseOrValue<BigNumberish>;
    callData: PromiseOrValue<BytesLike>;
  };

  export type CallValueStructOutput = [string, boolean, BigNumber, string] & {
    target: string;
    allowFailure: boolean;
    value: BigNumber;
    callData: string;
  };
}

export interface TapiocaDeployerInterface extends utils.Interface {
  functions: {
    "computeAddress(bytes32,bytes32)": FunctionFragment;
    "computeAddress(bytes32,bytes32,address)": FunctionFragment;
    "deploy(uint256,bytes32,bytes,string)": FunctionFragment;
    "multicall((address,bool,bytes)[])": FunctionFragment;
    "multicallValue((address,bool,uint256,bytes)[])": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "computeAddress(bytes32,bytes32)"
      | "computeAddress(bytes32,bytes32,address)"
      | "deploy"
      | "deploy(uint256,bytes32,bytes,string)"
      | "multicall"
      | "multicall((address,bool,bytes)[])"
      | "multicallValue"
      | "multicallValue((address,bool,uint256,bytes)[])"
      | "owner"
      | "owner()"
      | "renounceOwnership"
      | "renounceOwnership()"
      | "transferOwnership"
      | "transferOwnership(address)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "computeAddress(bytes32,bytes32)",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "computeAddress(bytes32,bytes32,address)",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "deploy",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "deploy(uint256,bytes32,bytes,string)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "multicall",
    values: [TapiocaMulticall.CallStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "multicall((address,bool,bytes)[])",
    values: [TapiocaMulticall.CallStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "multicallValue",
    values: [TapiocaMulticall.CallValueStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "multicallValue((address,bool,uint256,bytes)[])",
    values: [TapiocaMulticall.CallValueStruct[]]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership(address)",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "computeAddress(bytes32,bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "computeAddress(bytes32,bytes32,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deploy(uint256,bytes32,bytes,string)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "multicall((address,bool,bytes)[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multicallValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multicallValue((address,bool,uint256,bytes)[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership(address)",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "OwnershipTransferred(address,address)"
  ): EventFragment;
}

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

export interface TapiocaDeployer extends BaseContract {
  contractName: "TapiocaDeployer";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TapiocaDeployerInterface;

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
    "computeAddress(bytes32,bytes32)"(
      salt: PromiseOrValue<BytesLike>,
      bytecodeHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "computeAddress(bytes32,bytes32,address)"(
      salt: PromiseOrValue<BytesLike>,
      bytecodeHash: PromiseOrValue<BytesLike>,
      deployer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string] & { addr: string }>;

    deploy(
      amount: PromiseOrValue<BigNumberish>,
      salt: PromiseOrValue<BytesLike>,
      bytecode: PromiseOrValue<BytesLike>,
      contractName: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "deploy(uint256,bytes32,bytes,string)"(
      amount: PromiseOrValue<BigNumberish>,
      salt: PromiseOrValue<BytesLike>,
      bytecode: PromiseOrValue<BytesLike>,
      contractName: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    multicall(
      calls: TapiocaMulticall.CallStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "multicall((address,bool,bytes)[])"(
      calls: TapiocaMulticall.CallStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    multicallValue(
      calls: TapiocaMulticall.CallValueStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "multicallValue((address,bool,uint256,bytes)[])"(
      calls: TapiocaMulticall.CallValueStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  "computeAddress(bytes32,bytes32)"(
    salt: PromiseOrValue<BytesLike>,
    bytecodeHash: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  "computeAddress(bytes32,bytes32,address)"(
    salt: PromiseOrValue<BytesLike>,
    bytecodeHash: PromiseOrValue<BytesLike>,
    deployer: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  deploy(
    amount: PromiseOrValue<BigNumberish>,
    salt: PromiseOrValue<BytesLike>,
    bytecode: PromiseOrValue<BytesLike>,
    contractName: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "deploy(uint256,bytes32,bytes,string)"(
    amount: PromiseOrValue<BigNumberish>,
    salt: PromiseOrValue<BytesLike>,
    bytecode: PromiseOrValue<BytesLike>,
    contractName: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  multicall(
    calls: TapiocaMulticall.CallStruct[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "multicall((address,bool,bytes)[])"(
    calls: TapiocaMulticall.CallStruct[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  multicallValue(
    calls: TapiocaMulticall.CallValueStruct[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "multicallValue((address,bool,uint256,bytes)[])"(
    calls: TapiocaMulticall.CallValueStruct[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "renounceOwnership()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    "computeAddress(bytes32,bytes32)"(
      salt: PromiseOrValue<BytesLike>,
      bytecodeHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    "computeAddress(bytes32,bytes32,address)"(
      salt: PromiseOrValue<BytesLike>,
      bytecodeHash: PromiseOrValue<BytesLike>,
      deployer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    deploy(
      amount: PromiseOrValue<BigNumberish>,
      salt: PromiseOrValue<BytesLike>,
      bytecode: PromiseOrValue<BytesLike>,
      contractName: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    "deploy(uint256,bytes32,bytes,string)"(
      amount: PromiseOrValue<BigNumberish>,
      salt: PromiseOrValue<BytesLike>,
      bytecode: PromiseOrValue<BytesLike>,
      contractName: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    multicall(
      calls: TapiocaMulticall.CallStruct[],
      overrides?: CallOverrides
    ): Promise<TapiocaMulticall.ResultStructOutput[]>;

    "multicall((address,bool,bytes)[])"(
      calls: TapiocaMulticall.CallStruct[],
      overrides?: CallOverrides
    ): Promise<TapiocaMulticall.ResultStructOutput[]>;

    multicallValue(
      calls: TapiocaMulticall.CallValueStruct[],
      overrides?: CallOverrides
    ): Promise<TapiocaMulticall.ResultStructOutput[]>;

    "multicallValue((address,bool,uint256,bytes)[])"(
      calls: TapiocaMulticall.CallValueStruct[],
      overrides?: CallOverrides
    ): Promise<TapiocaMulticall.ResultStructOutput[]>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    "computeAddress(bytes32,bytes32)"(
      salt: PromiseOrValue<BytesLike>,
      bytecodeHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "computeAddress(bytes32,bytes32,address)"(
      salt: PromiseOrValue<BytesLike>,
      bytecodeHash: PromiseOrValue<BytesLike>,
      deployer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deploy(
      amount: PromiseOrValue<BigNumberish>,
      salt: PromiseOrValue<BytesLike>,
      bytecode: PromiseOrValue<BytesLike>,
      contractName: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "deploy(uint256,bytes32,bytes,string)"(
      amount: PromiseOrValue<BigNumberish>,
      salt: PromiseOrValue<BytesLike>,
      bytecode: PromiseOrValue<BytesLike>,
      contractName: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    multicall(
      calls: TapiocaMulticall.CallStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "multicall((address,bool,bytes)[])"(
      calls: TapiocaMulticall.CallStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    multicallValue(
      calls: TapiocaMulticall.CallValueStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "multicallValue((address,bool,uint256,bytes)[])"(
      calls: TapiocaMulticall.CallValueStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    "computeAddress(bytes32,bytes32)"(
      salt: PromiseOrValue<BytesLike>,
      bytecodeHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "computeAddress(bytes32,bytes32,address)"(
      salt: PromiseOrValue<BytesLike>,
      bytecodeHash: PromiseOrValue<BytesLike>,
      deployer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deploy(
      amount: PromiseOrValue<BigNumberish>,
      salt: PromiseOrValue<BytesLike>,
      bytecode: PromiseOrValue<BytesLike>,
      contractName: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "deploy(uint256,bytes32,bytes,string)"(
      amount: PromiseOrValue<BigNumberish>,
      salt: PromiseOrValue<BytesLike>,
      bytecode: PromiseOrValue<BytesLike>,
      contractName: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    multicall(
      calls: TapiocaMulticall.CallStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "multicall((address,bool,bytes)[])"(
      calls: TapiocaMulticall.CallStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    multicallValue(
      calls: TapiocaMulticall.CallValueStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "multicallValue((address,bool,uint256,bytes)[])"(
      calls: TapiocaMulticall.CallValueStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

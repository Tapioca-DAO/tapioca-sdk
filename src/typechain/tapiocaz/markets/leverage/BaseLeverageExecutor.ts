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

export interface BaseLeverageExecutorInterface extends utils.Interface {
  functions: {
    "cluster()": FunctionFragment;
    "getAsset(address,address,address,uint256,bytes)": FunctionFragment;
    "getCollateral(address,address,address,uint256,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setCluster(address)": FunctionFragment;
    "setSwapper(address)": FunctionFragment;
    "setWeth(address)": FunctionFragment;
    "swapper()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "weth()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cluster"
      | "cluster()"
      | "getAsset"
      | "getAsset(address,address,address,uint256,bytes)"
      | "getCollateral"
      | "getCollateral(address,address,address,uint256,bytes)"
      | "owner"
      | "owner()"
      | "renounceOwnership"
      | "renounceOwnership()"
      | "setCluster"
      | "setCluster(address)"
      | "setSwapper"
      | "setSwapper(address)"
      | "setWeth"
      | "setWeth(address)"
      | "swapper"
      | "swapper()"
      | "transferOwnership"
      | "transferOwnership(address)"
      | "weth"
      | "weth()"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "cluster", values?: undefined): string;
  encodeFunctionData(functionFragment: "cluster()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAsset",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getAsset(address,address,address,uint256,bytes)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getCollateral",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getCollateral(address,address,address,uint256,bytes)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
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
    functionFragment: "setCluster",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setCluster(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setSwapper",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setSwapper(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setWeth",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setWeth(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "swapper", values?: undefined): string;
  encodeFunctionData(functionFragment: "swapper()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "weth", values?: undefined): string;
  encodeFunctionData(functionFragment: "weth()", values?: undefined): string;

  decodeFunctionResult(functionFragment: "cluster", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cluster()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getAsset", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAsset(address,address,address,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCollateral(address,address,address,uint256,bytes)",
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
  decodeFunctionResult(functionFragment: "setCluster", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setCluster(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setSwapper", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setSwapper(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setWeth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setWeth(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swapper", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swapper()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "weth()", data: BytesLike): Result;

  events: {
    "AddressUpdated(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddressUpdated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "AddressUpdated(address,address)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "OwnershipTransferred(address,address)"
  ): EventFragment;
}

export interface AddressUpdatedEventObject {
  oldAddr: string;
  newAddr: string;
}
export type AddressUpdatedEvent = TypedEvent<
  [string, string],
  AddressUpdatedEventObject
>;

export type AddressUpdatedEventFilter = TypedEventFilter<AddressUpdatedEvent>;

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

export interface BaseLeverageExecutor extends BaseContract {
  contractName: "BaseLeverageExecutor";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BaseLeverageExecutorInterface;

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
    cluster(overrides?: CallOverrides): Promise<[string]>;

    "cluster()"(overrides?: CallOverrides): Promise<[string]>;

    getAsset(
      refundDustAddress: PromiseOrValue<string>,
      collateralAddress: PromiseOrValue<string>,
      assetAddress: PromiseOrValue<string>,
      collateralAmountIn: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "getAsset(address,address,address,uint256,bytes)"(
      refundDustAddress: PromiseOrValue<string>,
      collateralAddress: PromiseOrValue<string>,
      assetAddress: PromiseOrValue<string>,
      collateralAmountIn: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getCollateral(
      refundDustAddress: PromiseOrValue<string>,
      assetAddress: PromiseOrValue<string>,
      collateralAddress: PromiseOrValue<string>,
      assetAmountIn: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "getCollateral(address,address,address,uint256,bytes)"(
      refundDustAddress: PromiseOrValue<string>,
      assetAddress: PromiseOrValue<string>,
      collateralAddress: PromiseOrValue<string>,
      assetAmountIn: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
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

    setCluster(
      _cluster: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setCluster(address)"(
      _cluster: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSwapper(
      _swapper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setSwapper(address)"(
      _swapper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setWeth(
      _weth: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setWeth(address)"(
      _weth: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapper(overrides?: CallOverrides): Promise<[string]>;

    "swapper()"(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    weth(overrides?: CallOverrides): Promise<[string]>;

    "weth()"(overrides?: CallOverrides): Promise<[string]>;
  };

  cluster(overrides?: CallOverrides): Promise<string>;

  "cluster()"(overrides?: CallOverrides): Promise<string>;

  getAsset(
    refundDustAddress: PromiseOrValue<string>,
    collateralAddress: PromiseOrValue<string>,
    assetAddress: PromiseOrValue<string>,
    collateralAmountIn: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "getAsset(address,address,address,uint256,bytes)"(
    refundDustAddress: PromiseOrValue<string>,
    collateralAddress: PromiseOrValue<string>,
    assetAddress: PromiseOrValue<string>,
    collateralAmountIn: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getCollateral(
    refundDustAddress: PromiseOrValue<string>,
    assetAddress: PromiseOrValue<string>,
    collateralAddress: PromiseOrValue<string>,
    assetAmountIn: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "getCollateral(address,address,address,uint256,bytes)"(
    refundDustAddress: PromiseOrValue<string>,
    assetAddress: PromiseOrValue<string>,
    collateralAddress: PromiseOrValue<string>,
    assetAmountIn: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
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

  setCluster(
    _cluster: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setCluster(address)"(
    _cluster: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSwapper(
    _swapper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setSwapper(address)"(
    _swapper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setWeth(
    _weth: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setWeth(address)"(
    _weth: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapper(overrides?: CallOverrides): Promise<string>;

  "swapper()"(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  weth(overrides?: CallOverrides): Promise<string>;

  "weth()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    cluster(overrides?: CallOverrides): Promise<string>;

    "cluster()"(overrides?: CallOverrides): Promise<string>;

    getAsset(
      refundDustAddress: PromiseOrValue<string>,
      collateralAddress: PromiseOrValue<string>,
      assetAddress: PromiseOrValue<string>,
      collateralAmountIn: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAsset(address,address,address,uint256,bytes)"(
      refundDustAddress: PromiseOrValue<string>,
      collateralAddress: PromiseOrValue<string>,
      assetAddress: PromiseOrValue<string>,
      collateralAmountIn: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCollateral(
      refundDustAddress: PromiseOrValue<string>,
      assetAddress: PromiseOrValue<string>,
      collateralAddress: PromiseOrValue<string>,
      assetAmountIn: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCollateral(address,address,address,uint256,bytes)"(
      refundDustAddress: PromiseOrValue<string>,
      assetAddress: PromiseOrValue<string>,
      collateralAddress: PromiseOrValue<string>,
      assetAmountIn: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    setCluster(
      _cluster: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "setCluster(address)"(
      _cluster: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setSwapper(
      _swapper: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "setSwapper(address)"(
      _swapper: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setWeth(
      _weth: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "setWeth(address)"(
      _weth: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    swapper(overrides?: CallOverrides): Promise<string>;

    "swapper()"(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    weth(overrides?: CallOverrides): Promise<string>;

    "weth()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "AddressUpdated(address,address)"(
      oldAddr?: PromiseOrValue<string> | null,
      newAddr?: PromiseOrValue<string> | null
    ): AddressUpdatedEventFilter;
    AddressUpdated(
      oldAddr?: PromiseOrValue<string> | null,
      newAddr?: PromiseOrValue<string> | null
    ): AddressUpdatedEventFilter;

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
    cluster(overrides?: CallOverrides): Promise<BigNumber>;

    "cluster()"(overrides?: CallOverrides): Promise<BigNumber>;

    getAsset(
      refundDustAddress: PromiseOrValue<string>,
      collateralAddress: PromiseOrValue<string>,
      assetAddress: PromiseOrValue<string>,
      collateralAmountIn: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "getAsset(address,address,address,uint256,bytes)"(
      refundDustAddress: PromiseOrValue<string>,
      collateralAddress: PromiseOrValue<string>,
      assetAddress: PromiseOrValue<string>,
      collateralAmountIn: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getCollateral(
      refundDustAddress: PromiseOrValue<string>,
      assetAddress: PromiseOrValue<string>,
      collateralAddress: PromiseOrValue<string>,
      assetAmountIn: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "getCollateral(address,address,address,uint256,bytes)"(
      refundDustAddress: PromiseOrValue<string>,
      assetAddress: PromiseOrValue<string>,
      collateralAddress: PromiseOrValue<string>,
      assetAmountIn: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
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

    setCluster(
      _cluster: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setCluster(address)"(
      _cluster: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSwapper(
      _swapper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setSwapper(address)"(
      _swapper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setWeth(
      _weth: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setWeth(address)"(
      _weth: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapper(overrides?: CallOverrides): Promise<BigNumber>;

    "swapper()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    weth(overrides?: CallOverrides): Promise<BigNumber>;

    "weth()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cluster(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "cluster()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAsset(
      refundDustAddress: PromiseOrValue<string>,
      collateralAddress: PromiseOrValue<string>,
      assetAddress: PromiseOrValue<string>,
      collateralAmountIn: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "getAsset(address,address,address,uint256,bytes)"(
      refundDustAddress: PromiseOrValue<string>,
      collateralAddress: PromiseOrValue<string>,
      assetAddress: PromiseOrValue<string>,
      collateralAmountIn: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getCollateral(
      refundDustAddress: PromiseOrValue<string>,
      assetAddress: PromiseOrValue<string>,
      collateralAddress: PromiseOrValue<string>,
      assetAmountIn: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "getCollateral(address,address,address,uint256,bytes)"(
      refundDustAddress: PromiseOrValue<string>,
      assetAddress: PromiseOrValue<string>,
      collateralAddress: PromiseOrValue<string>,
      assetAmountIn: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
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

    setCluster(
      _cluster: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setCluster(address)"(
      _cluster: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSwapper(
      _swapper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setSwapper(address)"(
      _swapper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setWeth(
      _weth: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setWeth(address)"(
      _weth: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapper(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "swapper()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "weth()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

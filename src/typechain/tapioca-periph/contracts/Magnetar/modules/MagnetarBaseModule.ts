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
} from "../../../common";

export interface MagnetarBaseModuleInterface extends utils.Interface {
  functions: {
    "MAGNETAR_ACTION_ASSET_MODULE()": FunctionFragment;
    "MAGNETAR_ACTION_ASSET_XCHAIN_MODULE()": FunctionFragment;
    "MAGNETAR_ACTION_COLLATERAL_MODULE()": FunctionFragment;
    "MAGNETAR_ACTION_MARKET()": FunctionFragment;
    "MAGNETAR_ACTION_MINT_MODULE()": FunctionFragment;
    "MAGNETAR_ACTION_MINT_XCHAIN_MODULE()": FunctionFragment;
    "MAGNETAR_ACTION_OFT()": FunctionFragment;
    "MAGNETAR_ACTION_OPTION_MODULE()": FunctionFragment;
    "MAGNETAR_ACTION_PERMIT()": FunctionFragment;
    "MAGNETAR_ACTION_TAP_TOKEN()": FunctionFragment;
    "MAGNETAR_ACTION_WRAP()": FunctionFragment;
    "MAGNETAR_ACTION_YIELDBOX_MODULE()": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "pearlmit()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setPearlmit(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "MAGNETAR_ACTION_ASSET_MODULE"
      | "MAGNETAR_ACTION_ASSET_MODULE()"
      | "MAGNETAR_ACTION_ASSET_XCHAIN_MODULE"
      | "MAGNETAR_ACTION_ASSET_XCHAIN_MODULE()"
      | "MAGNETAR_ACTION_COLLATERAL_MODULE"
      | "MAGNETAR_ACTION_COLLATERAL_MODULE()"
      | "MAGNETAR_ACTION_MARKET"
      | "MAGNETAR_ACTION_MARKET()"
      | "MAGNETAR_ACTION_MINT_MODULE"
      | "MAGNETAR_ACTION_MINT_MODULE()"
      | "MAGNETAR_ACTION_MINT_XCHAIN_MODULE"
      | "MAGNETAR_ACTION_MINT_XCHAIN_MODULE()"
      | "MAGNETAR_ACTION_OFT"
      | "MAGNETAR_ACTION_OFT()"
      | "MAGNETAR_ACTION_OPTION_MODULE"
      | "MAGNETAR_ACTION_OPTION_MODULE()"
      | "MAGNETAR_ACTION_PERMIT"
      | "MAGNETAR_ACTION_PERMIT()"
      | "MAGNETAR_ACTION_TAP_TOKEN"
      | "MAGNETAR_ACTION_TAP_TOKEN()"
      | "MAGNETAR_ACTION_WRAP"
      | "MAGNETAR_ACTION_WRAP()"
      | "MAGNETAR_ACTION_YIELDBOX_MODULE"
      | "MAGNETAR_ACTION_YIELDBOX_MODULE()"
      | "onERC721Received"
      | "onERC721Received(address,address,uint256,bytes)"
      | "owner"
      | "owner()"
      | "pearlmit"
      | "pearlmit()"
      | "renounceOwnership"
      | "renounceOwnership()"
      | "setPearlmit"
      | "setPearlmit(address)"
      | "transferOwnership"
      | "transferOwnership(address)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_ASSET_MODULE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_ASSET_MODULE()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_ASSET_XCHAIN_MODULE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_ASSET_XCHAIN_MODULE()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_COLLATERAL_MODULE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_COLLATERAL_MODULE()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_MARKET",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_MARKET()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_MINT_MODULE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_MINT_MODULE()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_MINT_XCHAIN_MODULE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_MINT_XCHAIN_MODULE()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_OFT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_OFT()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_OPTION_MODULE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_OPTION_MODULE()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_PERMIT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_PERMIT()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_TAP_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_TAP_TOKEN()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_WRAP",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_WRAP()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_YIELDBOX_MODULE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_YIELDBOX_MODULE()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received(address,address,uint256,bytes)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner()", values?: undefined): string;
  encodeFunctionData(functionFragment: "pearlmit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pearlmit()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPearlmit",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setPearlmit(address)",
    values: [PromiseOrValue<string>]
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
    functionFragment: "MAGNETAR_ACTION_ASSET_MODULE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_ASSET_MODULE()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_ASSET_XCHAIN_MODULE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_ASSET_XCHAIN_MODULE()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_COLLATERAL_MODULE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_COLLATERAL_MODULE()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_MARKET",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_MARKET()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_MINT_MODULE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_MINT_MODULE()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_MINT_XCHAIN_MODULE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_MINT_XCHAIN_MODULE()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_OFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_OFT()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_OPTION_MODULE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_OPTION_MODULE()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_PERMIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_PERMIT()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_TAP_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_TAP_TOKEN()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_WRAP",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_WRAP()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_YIELDBOX_MODULE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_YIELDBOX_MODULE()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received(address,address,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pearlmit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pearlmit()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPearlmit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPearlmit(address)",
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
    "PearlmitUpdated(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "OwnershipTransferred(address,address)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PearlmitUpdated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "PearlmitUpdated(address,address)"
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

export interface PearlmitUpdatedEventObject {
  oldPearlmit: string;
  newPearlmit: string;
}
export type PearlmitUpdatedEvent = TypedEvent<
  [string, string],
  PearlmitUpdatedEventObject
>;

export type PearlmitUpdatedEventFilter = TypedEventFilter<PearlmitUpdatedEvent>;

export interface MagnetarBaseModule extends BaseContract {
  contractName: "MagnetarBaseModule";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MagnetarBaseModuleInterface;

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
    MAGNETAR_ACTION_ASSET_MODULE(overrides?: CallOverrides): Promise<[number]>;

    "MAGNETAR_ACTION_ASSET_MODULE()"(
      overrides?: CallOverrides
    ): Promise<[number]>;

    MAGNETAR_ACTION_ASSET_XCHAIN_MODULE(
      overrides?: CallOverrides
    ): Promise<[number]>;

    "MAGNETAR_ACTION_ASSET_XCHAIN_MODULE()"(
      overrides?: CallOverrides
    ): Promise<[number]>;

    MAGNETAR_ACTION_COLLATERAL_MODULE(
      overrides?: CallOverrides
    ): Promise<[number]>;

    "MAGNETAR_ACTION_COLLATERAL_MODULE()"(
      overrides?: CallOverrides
    ): Promise<[number]>;

    MAGNETAR_ACTION_MARKET(overrides?: CallOverrides): Promise<[number]>;

    "MAGNETAR_ACTION_MARKET()"(overrides?: CallOverrides): Promise<[number]>;

    MAGNETAR_ACTION_MINT_MODULE(overrides?: CallOverrides): Promise<[number]>;

    "MAGNETAR_ACTION_MINT_MODULE()"(
      overrides?: CallOverrides
    ): Promise<[number]>;

    MAGNETAR_ACTION_MINT_XCHAIN_MODULE(
      overrides?: CallOverrides
    ): Promise<[number]>;

    "MAGNETAR_ACTION_MINT_XCHAIN_MODULE()"(
      overrides?: CallOverrides
    ): Promise<[number]>;

    MAGNETAR_ACTION_OFT(overrides?: CallOverrides): Promise<[number]>;

    "MAGNETAR_ACTION_OFT()"(overrides?: CallOverrides): Promise<[number]>;

    MAGNETAR_ACTION_OPTION_MODULE(overrides?: CallOverrides): Promise<[number]>;

    "MAGNETAR_ACTION_OPTION_MODULE()"(
      overrides?: CallOverrides
    ): Promise<[number]>;

    MAGNETAR_ACTION_PERMIT(overrides?: CallOverrides): Promise<[number]>;

    "MAGNETAR_ACTION_PERMIT()"(overrides?: CallOverrides): Promise<[number]>;

    MAGNETAR_ACTION_TAP_TOKEN(overrides?: CallOverrides): Promise<[number]>;

    "MAGNETAR_ACTION_TAP_TOKEN()"(overrides?: CallOverrides): Promise<[number]>;

    MAGNETAR_ACTION_WRAP(overrides?: CallOverrides): Promise<[number]>;

    "MAGNETAR_ACTION_WRAP()"(overrides?: CallOverrides): Promise<[number]>;

    MAGNETAR_ACTION_YIELDBOX_MODULE(
      overrides?: CallOverrides
    ): Promise<[number]>;

    "MAGNETAR_ACTION_YIELDBOX_MODULE()"(
      overrides?: CallOverrides
    ): Promise<[number]>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "onERC721Received(address,address,uint256,bytes)"(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    pearlmit(overrides?: CallOverrides): Promise<[string]>;

    "pearlmit()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPearlmit(
      _pearlmit: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setPearlmit(address)"(
      _pearlmit: PromiseOrValue<string>,
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

  MAGNETAR_ACTION_ASSET_MODULE(overrides?: CallOverrides): Promise<number>;

  "MAGNETAR_ACTION_ASSET_MODULE()"(overrides?: CallOverrides): Promise<number>;

  MAGNETAR_ACTION_ASSET_XCHAIN_MODULE(
    overrides?: CallOverrides
  ): Promise<number>;

  "MAGNETAR_ACTION_ASSET_XCHAIN_MODULE()"(
    overrides?: CallOverrides
  ): Promise<number>;

  MAGNETAR_ACTION_COLLATERAL_MODULE(overrides?: CallOverrides): Promise<number>;

  "MAGNETAR_ACTION_COLLATERAL_MODULE()"(
    overrides?: CallOverrides
  ): Promise<number>;

  MAGNETAR_ACTION_MARKET(overrides?: CallOverrides): Promise<number>;

  "MAGNETAR_ACTION_MARKET()"(overrides?: CallOverrides): Promise<number>;

  MAGNETAR_ACTION_MINT_MODULE(overrides?: CallOverrides): Promise<number>;

  "MAGNETAR_ACTION_MINT_MODULE()"(overrides?: CallOverrides): Promise<number>;

  MAGNETAR_ACTION_MINT_XCHAIN_MODULE(
    overrides?: CallOverrides
  ): Promise<number>;

  "MAGNETAR_ACTION_MINT_XCHAIN_MODULE()"(
    overrides?: CallOverrides
  ): Promise<number>;

  MAGNETAR_ACTION_OFT(overrides?: CallOverrides): Promise<number>;

  "MAGNETAR_ACTION_OFT()"(overrides?: CallOverrides): Promise<number>;

  MAGNETAR_ACTION_OPTION_MODULE(overrides?: CallOverrides): Promise<number>;

  "MAGNETAR_ACTION_OPTION_MODULE()"(overrides?: CallOverrides): Promise<number>;

  MAGNETAR_ACTION_PERMIT(overrides?: CallOverrides): Promise<number>;

  "MAGNETAR_ACTION_PERMIT()"(overrides?: CallOverrides): Promise<number>;

  MAGNETAR_ACTION_TAP_TOKEN(overrides?: CallOverrides): Promise<number>;

  "MAGNETAR_ACTION_TAP_TOKEN()"(overrides?: CallOverrides): Promise<number>;

  MAGNETAR_ACTION_WRAP(overrides?: CallOverrides): Promise<number>;

  "MAGNETAR_ACTION_WRAP()"(overrides?: CallOverrides): Promise<number>;

  MAGNETAR_ACTION_YIELDBOX_MODULE(overrides?: CallOverrides): Promise<number>;

  "MAGNETAR_ACTION_YIELDBOX_MODULE()"(
    overrides?: CallOverrides
  ): Promise<number>;

  onERC721Received(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "onERC721Received(address,address,uint256,bytes)"(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  pearlmit(overrides?: CallOverrides): Promise<string>;

  "pearlmit()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "renounceOwnership()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPearlmit(
    _pearlmit: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setPearlmit(address)"(
    _pearlmit: PromiseOrValue<string>,
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
    MAGNETAR_ACTION_ASSET_MODULE(overrides?: CallOverrides): Promise<number>;

    "MAGNETAR_ACTION_ASSET_MODULE()"(
      overrides?: CallOverrides
    ): Promise<number>;

    MAGNETAR_ACTION_ASSET_XCHAIN_MODULE(
      overrides?: CallOverrides
    ): Promise<number>;

    "MAGNETAR_ACTION_ASSET_XCHAIN_MODULE()"(
      overrides?: CallOverrides
    ): Promise<number>;

    MAGNETAR_ACTION_COLLATERAL_MODULE(
      overrides?: CallOverrides
    ): Promise<number>;

    "MAGNETAR_ACTION_COLLATERAL_MODULE()"(
      overrides?: CallOverrides
    ): Promise<number>;

    MAGNETAR_ACTION_MARKET(overrides?: CallOverrides): Promise<number>;

    "MAGNETAR_ACTION_MARKET()"(overrides?: CallOverrides): Promise<number>;

    MAGNETAR_ACTION_MINT_MODULE(overrides?: CallOverrides): Promise<number>;

    "MAGNETAR_ACTION_MINT_MODULE()"(overrides?: CallOverrides): Promise<number>;

    MAGNETAR_ACTION_MINT_XCHAIN_MODULE(
      overrides?: CallOverrides
    ): Promise<number>;

    "MAGNETAR_ACTION_MINT_XCHAIN_MODULE()"(
      overrides?: CallOverrides
    ): Promise<number>;

    MAGNETAR_ACTION_OFT(overrides?: CallOverrides): Promise<number>;

    "MAGNETAR_ACTION_OFT()"(overrides?: CallOverrides): Promise<number>;

    MAGNETAR_ACTION_OPTION_MODULE(overrides?: CallOverrides): Promise<number>;

    "MAGNETAR_ACTION_OPTION_MODULE()"(
      overrides?: CallOverrides
    ): Promise<number>;

    MAGNETAR_ACTION_PERMIT(overrides?: CallOverrides): Promise<number>;

    "MAGNETAR_ACTION_PERMIT()"(overrides?: CallOverrides): Promise<number>;

    MAGNETAR_ACTION_TAP_TOKEN(overrides?: CallOverrides): Promise<number>;

    "MAGNETAR_ACTION_TAP_TOKEN()"(overrides?: CallOverrides): Promise<number>;

    MAGNETAR_ACTION_WRAP(overrides?: CallOverrides): Promise<number>;

    "MAGNETAR_ACTION_WRAP()"(overrides?: CallOverrides): Promise<number>;

    MAGNETAR_ACTION_YIELDBOX_MODULE(overrides?: CallOverrides): Promise<number>;

    "MAGNETAR_ACTION_YIELDBOX_MODULE()"(
      overrides?: CallOverrides
    ): Promise<number>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    "onERC721Received(address,address,uint256,bytes)"(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    pearlmit(overrides?: CallOverrides): Promise<string>;

    "pearlmit()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    setPearlmit(
      _pearlmit: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "setPearlmit(address)"(
      _pearlmit: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

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

    "PearlmitUpdated(address,address)"(
      oldPearlmit?: null,
      newPearlmit?: null
    ): PearlmitUpdatedEventFilter;
    PearlmitUpdated(
      oldPearlmit?: null,
      newPearlmit?: null
    ): PearlmitUpdatedEventFilter;
  };

  estimateGas: {
    MAGNETAR_ACTION_ASSET_MODULE(overrides?: CallOverrides): Promise<BigNumber>;

    "MAGNETAR_ACTION_ASSET_MODULE()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    MAGNETAR_ACTION_ASSET_XCHAIN_MODULE(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "MAGNETAR_ACTION_ASSET_XCHAIN_MODULE()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    MAGNETAR_ACTION_COLLATERAL_MODULE(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "MAGNETAR_ACTION_COLLATERAL_MODULE()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    MAGNETAR_ACTION_MARKET(overrides?: CallOverrides): Promise<BigNumber>;

    "MAGNETAR_ACTION_MARKET()"(overrides?: CallOverrides): Promise<BigNumber>;

    MAGNETAR_ACTION_MINT_MODULE(overrides?: CallOverrides): Promise<BigNumber>;

    "MAGNETAR_ACTION_MINT_MODULE()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    MAGNETAR_ACTION_MINT_XCHAIN_MODULE(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "MAGNETAR_ACTION_MINT_XCHAIN_MODULE()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    MAGNETAR_ACTION_OFT(overrides?: CallOverrides): Promise<BigNumber>;

    "MAGNETAR_ACTION_OFT()"(overrides?: CallOverrides): Promise<BigNumber>;

    MAGNETAR_ACTION_OPTION_MODULE(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "MAGNETAR_ACTION_OPTION_MODULE()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    MAGNETAR_ACTION_PERMIT(overrides?: CallOverrides): Promise<BigNumber>;

    "MAGNETAR_ACTION_PERMIT()"(overrides?: CallOverrides): Promise<BigNumber>;

    MAGNETAR_ACTION_TAP_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    "MAGNETAR_ACTION_TAP_TOKEN()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    MAGNETAR_ACTION_WRAP(overrides?: CallOverrides): Promise<BigNumber>;

    "MAGNETAR_ACTION_WRAP()"(overrides?: CallOverrides): Promise<BigNumber>;

    MAGNETAR_ACTION_YIELDBOX_MODULE(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "MAGNETAR_ACTION_YIELDBOX_MODULE()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "onERC721Received(address,address,uint256,bytes)"(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    pearlmit(overrides?: CallOverrides): Promise<BigNumber>;

    "pearlmit()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPearlmit(
      _pearlmit: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setPearlmit(address)"(
      _pearlmit: PromiseOrValue<string>,
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
    MAGNETAR_ACTION_ASSET_MODULE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "MAGNETAR_ACTION_ASSET_MODULE()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAGNETAR_ACTION_ASSET_XCHAIN_MODULE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "MAGNETAR_ACTION_ASSET_XCHAIN_MODULE()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAGNETAR_ACTION_COLLATERAL_MODULE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "MAGNETAR_ACTION_COLLATERAL_MODULE()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAGNETAR_ACTION_MARKET(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "MAGNETAR_ACTION_MARKET()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAGNETAR_ACTION_MINT_MODULE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "MAGNETAR_ACTION_MINT_MODULE()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAGNETAR_ACTION_MINT_XCHAIN_MODULE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "MAGNETAR_ACTION_MINT_XCHAIN_MODULE()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAGNETAR_ACTION_OFT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "MAGNETAR_ACTION_OFT()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAGNETAR_ACTION_OPTION_MODULE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "MAGNETAR_ACTION_OPTION_MODULE()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAGNETAR_ACTION_PERMIT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "MAGNETAR_ACTION_PERMIT()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAGNETAR_ACTION_TAP_TOKEN(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "MAGNETAR_ACTION_TAP_TOKEN()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAGNETAR_ACTION_WRAP(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "MAGNETAR_ACTION_WRAP()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAGNETAR_ACTION_YIELDBOX_MODULE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "MAGNETAR_ACTION_YIELDBOX_MODULE()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "onERC721Received(address,address,uint256,bytes)"(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pearlmit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "pearlmit()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPearlmit(
      _pearlmit: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setPearlmit(address)"(
      _pearlmit: PromiseOrValue<string>,
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

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
} from "../../../common";

export declare namespace ICommonData {
  export type IWithdrawParamsStruct = {
    withdraw: PromiseOrValue<boolean>;
    withdrawLzFeeAmount: PromiseOrValue<BigNumberish>;
    withdrawOnOtherChain: PromiseOrValue<boolean>;
    withdrawLzChainId: PromiseOrValue<BigNumberish>;
    withdrawAdapterParams: PromiseOrValue<BytesLike>;
    unwrap: PromiseOrValue<boolean>;
    refundAddress: PromiseOrValue<string>;
    zroPaymentAddress: PromiseOrValue<string>;
  };

  export type IWithdrawParamsStructOutput = [
    boolean,
    BigNumber,
    boolean,
    number,
    string,
    boolean,
    string,
    string
  ] & {
    withdraw: boolean;
    withdrawLzFeeAmount: BigNumber;
    withdrawOnOtherChain: boolean;
    withdrawLzChainId: number;
    withdrawAdapterParams: string;
    unwrap: boolean;
    refundAddress: string;
    zroPaymentAddress: string;
  };

  export type IDepositDataStruct = {
    deposit: PromiseOrValue<boolean>;
    amount: PromiseOrValue<BigNumberish>;
    extractFromSender: PromiseOrValue<boolean>;
  };

  export type IDepositDataStructOutput = [boolean, BigNumber, boolean] & {
    deposit: boolean;
    amount: BigNumber;
    extractFromSender: boolean;
  };

  export type ICommonExternalContractsStruct = {
    magnetar: PromiseOrValue<string>;
    singularity: PromiseOrValue<string>;
    bigBang: PromiseOrValue<string>;
  };

  export type ICommonExternalContractsStructOutput = [
    string,
    string,
    string
  ] & { magnetar: string; singularity: string; bigBang: string };
}

export declare namespace MagnetarMarketModule1 {
  export type DepositAddCollateralAndBorrowFromMarketDataStruct = {
    market: PromiseOrValue<string>;
    user: PromiseOrValue<string>;
    collateralAmount: PromiseOrValue<BigNumberish>;
    borrowAmount: PromiseOrValue<BigNumberish>;
    extractFromSender: PromiseOrValue<boolean>;
    deposit: PromiseOrValue<boolean>;
    withdrawParams: ICommonData.IWithdrawParamsStruct;
    valueAmount: PromiseOrValue<BigNumberish>;
  };

  export type DepositAddCollateralAndBorrowFromMarketDataStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    boolean,
    boolean,
    ICommonData.IWithdrawParamsStructOutput,
    BigNumber
  ] & {
    market: string;
    user: string;
    collateralAmount: BigNumber;
    borrowAmount: BigNumber;
    extractFromSender: boolean;
    deposit: boolean;
    withdrawParams: ICommonData.IWithdrawParamsStructOutput;
    valueAmount: BigNumber;
  };

  export type MintFromBBAndLendOnSGLDataStruct = {
    user: PromiseOrValue<string>;
    lendAmount: PromiseOrValue<BigNumberish>;
    mintData: IUSDOBase.IMintDataStruct;
    depositData: ICommonData.IDepositDataStruct;
    lockData: ITapiocaOptionLiquidityProvision.IOptionsLockDataStruct;
    participateData: ITapiocaOptionBroker.IOptionsParticipateDataStruct;
    externalContracts: ICommonData.ICommonExternalContractsStruct;
  };

  export type MintFromBBAndLendOnSGLDataStructOutput = [
    string,
    BigNumber,
    IUSDOBase.IMintDataStructOutput,
    ICommonData.IDepositDataStructOutput,
    ITapiocaOptionLiquidityProvision.IOptionsLockDataStructOutput,
    ITapiocaOptionBroker.IOptionsParticipateDataStructOutput,
    ICommonData.ICommonExternalContractsStructOutput
  ] & {
    user: string;
    lendAmount: BigNumber;
    mintData: IUSDOBase.IMintDataStructOutput;
    depositData: ICommonData.IDepositDataStructOutput;
    lockData: ITapiocaOptionLiquidityProvision.IOptionsLockDataStructOutput;
    participateData: ITapiocaOptionBroker.IOptionsParticipateDataStructOutput;
    externalContracts: ICommonData.ICommonExternalContractsStructOutput;
  };
}

export declare namespace IUSDOBase {
  export type IMintDataStruct = {
    mint: PromiseOrValue<boolean>;
    mintAmount: PromiseOrValue<BigNumberish>;
    collateralDepositData: ICommonData.IDepositDataStruct;
  };

  export type IMintDataStructOutput = [
    boolean,
    BigNumber,
    ICommonData.IDepositDataStructOutput
  ] & {
    mint: boolean;
    mintAmount: BigNumber;
    collateralDepositData: ICommonData.IDepositDataStructOutput;
  };
}

export declare namespace ITapiocaOptionLiquidityProvision {
  export type IOptionsLockDataStruct = {
    lock: PromiseOrValue<boolean>;
    target: PromiseOrValue<string>;
    lockDuration: PromiseOrValue<BigNumberish>;
    amount: PromiseOrValue<BigNumberish>;
    fraction: PromiseOrValue<BigNumberish>;
  };

  export type IOptionsLockDataStructOutput = [
    boolean,
    string,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    lock: boolean;
    target: string;
    lockDuration: BigNumber;
    amount: BigNumber;
    fraction: BigNumber;
  };
}

export declare namespace ITapiocaOptionBroker {
  export type IOptionsParticipateDataStruct = {
    participate: PromiseOrValue<boolean>;
    target: PromiseOrValue<string>;
    tOLPTokenId: PromiseOrValue<BigNumberish>;
  };

  export type IOptionsParticipateDataStructOutput = [
    boolean,
    string,
    BigNumber
  ] & { participate: boolean; target: string; tOLPTokenId: BigNumber };
}

export interface MagnetarMarketModule1Interface extends utils.Interface {
  functions: {
    "MAGNETAR_ACTION_MARKET()": FunctionFragment;
    "MAGNETAR_ACTION_MARKET_MODULE()": FunctionFragment;
    "MAGNETAR_ACTION_PERMIT()": FunctionFragment;
    "MAGNETAR_ACTION_TAP_TOKEN()": FunctionFragment;
    "MAGNETAR_ACTION_TOFT()": FunctionFragment;
    "MAGNETAR_ACTION_YIELDBOX_MODULE()": FunctionFragment;
    "cluster()": FunctionFragment;
    "depositAddCollateralAndBorrowFromMarket((address,address,uint256,uint256,bool,bool,(bool,uint256,bool,uint16,bytes,bool,address,address),uint256))": FunctionFragment;
    "mintFromBBAndLendOnSGL((address,uint256,(bool,uint256,(bool,uint256,bool)),(bool,uint256,bool),(bool,address,uint128,uint128,uint256),(bool,address,uint256),(address,address,address)))": FunctionFragment;
    "modules(uint8)": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "MAGNETAR_ACTION_MARKET"
      | "MAGNETAR_ACTION_MARKET()"
      | "MAGNETAR_ACTION_MARKET_MODULE"
      | "MAGNETAR_ACTION_MARKET_MODULE()"
      | "MAGNETAR_ACTION_PERMIT"
      | "MAGNETAR_ACTION_PERMIT()"
      | "MAGNETAR_ACTION_TAP_TOKEN"
      | "MAGNETAR_ACTION_TAP_TOKEN()"
      | "MAGNETAR_ACTION_TOFT"
      | "MAGNETAR_ACTION_TOFT()"
      | "MAGNETAR_ACTION_YIELDBOX_MODULE"
      | "MAGNETAR_ACTION_YIELDBOX_MODULE()"
      | "cluster"
      | "cluster()"
      | "depositAddCollateralAndBorrowFromMarket"
      | "depositAddCollateralAndBorrowFromMarket((address,address,uint256,uint256,bool,bool,(bool,uint256,bool,uint16,bytes,bool,address,address),uint256))"
      | "mintFromBBAndLendOnSGL"
      | "mintFromBBAndLendOnSGL((address,uint256,(bool,uint256,(bool,uint256,bool)),(bool,uint256,bool),(bool,address,uint128,uint128,uint256),(bool,address,uint256),(address,address,address)))"
      | "modules"
      | "modules(uint8)"
      | "onERC721Received"
      | "onERC721Received(address,address,uint256,bytes)"
      | "owner"
      | "owner()"
      | "renounceOwnership"
      | "renounceOwnership()"
      | "transferOwnership"
      | "transferOwnership(address)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_MARKET",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_MARKET()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_MARKET_MODULE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_MARKET_MODULE()",
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
    functionFragment: "MAGNETAR_ACTION_TOFT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_TOFT()",
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
  encodeFunctionData(functionFragment: "cluster", values?: undefined): string;
  encodeFunctionData(functionFragment: "cluster()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "depositAddCollateralAndBorrowFromMarket",
    values: [
      MagnetarMarketModule1.DepositAddCollateralAndBorrowFromMarketDataStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "depositAddCollateralAndBorrowFromMarket((address,address,uint256,uint256,bool,bool,(bool,uint256,bool,uint16,bytes,bool,address,address),uint256))",
    values: [
      MagnetarMarketModule1.DepositAddCollateralAndBorrowFromMarketDataStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "mintFromBBAndLendOnSGL",
    values: [MagnetarMarketModule1.MintFromBBAndLendOnSGLDataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "mintFromBBAndLendOnSGL((address,uint256,(bool,uint256,(bool,uint256,bool)),(bool,uint256,bool),(bool,address,uint128,uint128,uint256),(bool,address,uint256),(address,address,address)))",
    values: [MagnetarMarketModule1.MintFromBBAndLendOnSGLDataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "modules",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "modules(uint8)",
    values: [PromiseOrValue<BigNumberish>]
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
    functionFragment: "MAGNETAR_ACTION_MARKET",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_MARKET()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_MARKET_MODULE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_MARKET_MODULE()",
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
    functionFragment: "MAGNETAR_ACTION_TOFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_TOFT()",
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
  decodeFunctionResult(functionFragment: "cluster", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cluster()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositAddCollateralAndBorrowFromMarket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositAddCollateralAndBorrowFromMarket((address,address,uint256,uint256,bool,bool,(bool,uint256,bool,uint16,bytes,bool,address,address),uint256))",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintFromBBAndLendOnSGL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintFromBBAndLendOnSGL((address,uint256,(bool,uint256,(bool,uint256,bool)),(bool,uint256,bool),(bool,address,uint128,uint128,uint256),(bool,address,uint256),(address,address,address)))",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "modules", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "modules(uint8)",
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
    "ClusterSet(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ClusterSet"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ClusterSet(address,address)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "OwnershipTransferred(address,address)"
  ): EventFragment;
}

export interface ClusterSetEventObject {
  oldCluster: string;
  newCluster: string;
}
export type ClusterSetEvent = TypedEvent<
  [string, string],
  ClusterSetEventObject
>;

export type ClusterSetEventFilter = TypedEventFilter<ClusterSetEvent>;

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

export interface MagnetarMarketModule1 extends BaseContract {
  contractName: "MagnetarMarketModule1";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MagnetarMarketModule1Interface;

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
    MAGNETAR_ACTION_MARKET(overrides?: CallOverrides): Promise<[number]>;

    "MAGNETAR_ACTION_MARKET()"(overrides?: CallOverrides): Promise<[number]>;

    MAGNETAR_ACTION_MARKET_MODULE(overrides?: CallOverrides): Promise<[number]>;

    "MAGNETAR_ACTION_MARKET_MODULE()"(
      overrides?: CallOverrides
    ): Promise<[number]>;

    MAGNETAR_ACTION_PERMIT(overrides?: CallOverrides): Promise<[number]>;

    "MAGNETAR_ACTION_PERMIT()"(overrides?: CallOverrides): Promise<[number]>;

    MAGNETAR_ACTION_TAP_TOKEN(overrides?: CallOverrides): Promise<[number]>;

    "MAGNETAR_ACTION_TAP_TOKEN()"(overrides?: CallOverrides): Promise<[number]>;

    MAGNETAR_ACTION_TOFT(overrides?: CallOverrides): Promise<[number]>;

    "MAGNETAR_ACTION_TOFT()"(overrides?: CallOverrides): Promise<[number]>;

    MAGNETAR_ACTION_YIELDBOX_MODULE(
      overrides?: CallOverrides
    ): Promise<[number]>;

    "MAGNETAR_ACTION_YIELDBOX_MODULE()"(
      overrides?: CallOverrides
    ): Promise<[number]>;

    cluster(overrides?: CallOverrides): Promise<[string]>;

    "cluster()"(overrides?: CallOverrides): Promise<[string]>;

    depositAddCollateralAndBorrowFromMarket(
      _data: MagnetarMarketModule1.DepositAddCollateralAndBorrowFromMarketDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "depositAddCollateralAndBorrowFromMarket((address,address,uint256,uint256,bool,bool,(bool,uint256,bool,uint16,bytes,bool,address,address),uint256))"(
      _data: MagnetarMarketModule1.DepositAddCollateralAndBorrowFromMarketDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mintFromBBAndLendOnSGL(
      _data: MagnetarMarketModule1.MintFromBBAndLendOnSGLDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "mintFromBBAndLendOnSGL((address,uint256,(bool,uint256,(bool,uint256,bool)),(bool,uint256,bool),(bool,address,uint128,uint128,uint256),(bool,address,uint256),(address,address,address)))"(
      _data: MagnetarMarketModule1.MintFromBBAndLendOnSGLDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    modules(
      moduleId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { moduleAddress: string }>;

    "modules(uint8)"(
      moduleId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { moduleAddress: string }>;

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

  MAGNETAR_ACTION_MARKET(overrides?: CallOverrides): Promise<number>;

  "MAGNETAR_ACTION_MARKET()"(overrides?: CallOverrides): Promise<number>;

  MAGNETAR_ACTION_MARKET_MODULE(overrides?: CallOverrides): Promise<number>;

  "MAGNETAR_ACTION_MARKET_MODULE()"(overrides?: CallOverrides): Promise<number>;

  MAGNETAR_ACTION_PERMIT(overrides?: CallOverrides): Promise<number>;

  "MAGNETAR_ACTION_PERMIT()"(overrides?: CallOverrides): Promise<number>;

  MAGNETAR_ACTION_TAP_TOKEN(overrides?: CallOverrides): Promise<number>;

  "MAGNETAR_ACTION_TAP_TOKEN()"(overrides?: CallOverrides): Promise<number>;

  MAGNETAR_ACTION_TOFT(overrides?: CallOverrides): Promise<number>;

  "MAGNETAR_ACTION_TOFT()"(overrides?: CallOverrides): Promise<number>;

  MAGNETAR_ACTION_YIELDBOX_MODULE(overrides?: CallOverrides): Promise<number>;

  "MAGNETAR_ACTION_YIELDBOX_MODULE()"(
    overrides?: CallOverrides
  ): Promise<number>;

  cluster(overrides?: CallOverrides): Promise<string>;

  "cluster()"(overrides?: CallOverrides): Promise<string>;

  depositAddCollateralAndBorrowFromMarket(
    _data: MagnetarMarketModule1.DepositAddCollateralAndBorrowFromMarketDataStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "depositAddCollateralAndBorrowFromMarket((address,address,uint256,uint256,bool,bool,(bool,uint256,bool,uint16,bytes,bool,address,address),uint256))"(
    _data: MagnetarMarketModule1.DepositAddCollateralAndBorrowFromMarketDataStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  mintFromBBAndLendOnSGL(
    _data: MagnetarMarketModule1.MintFromBBAndLendOnSGLDataStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "mintFromBBAndLendOnSGL((address,uint256,(bool,uint256,(bool,uint256,bool)),(bool,uint256,bool),(bool,address,uint128,uint128,uint256),(bool,address,uint256),(address,address,address)))"(
    _data: MagnetarMarketModule1.MintFromBBAndLendOnSGLDataStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  modules(
    moduleId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  "modules(uint8)"(
    moduleId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

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
    MAGNETAR_ACTION_MARKET(overrides?: CallOverrides): Promise<number>;

    "MAGNETAR_ACTION_MARKET()"(overrides?: CallOverrides): Promise<number>;

    MAGNETAR_ACTION_MARKET_MODULE(overrides?: CallOverrides): Promise<number>;

    "MAGNETAR_ACTION_MARKET_MODULE()"(
      overrides?: CallOverrides
    ): Promise<number>;

    MAGNETAR_ACTION_PERMIT(overrides?: CallOverrides): Promise<number>;

    "MAGNETAR_ACTION_PERMIT()"(overrides?: CallOverrides): Promise<number>;

    MAGNETAR_ACTION_TAP_TOKEN(overrides?: CallOverrides): Promise<number>;

    "MAGNETAR_ACTION_TAP_TOKEN()"(overrides?: CallOverrides): Promise<number>;

    MAGNETAR_ACTION_TOFT(overrides?: CallOverrides): Promise<number>;

    "MAGNETAR_ACTION_TOFT()"(overrides?: CallOverrides): Promise<number>;

    MAGNETAR_ACTION_YIELDBOX_MODULE(overrides?: CallOverrides): Promise<number>;

    "MAGNETAR_ACTION_YIELDBOX_MODULE()"(
      overrides?: CallOverrides
    ): Promise<number>;

    cluster(overrides?: CallOverrides): Promise<string>;

    "cluster()"(overrides?: CallOverrides): Promise<string>;

    depositAddCollateralAndBorrowFromMarket(
      _data: MagnetarMarketModule1.DepositAddCollateralAndBorrowFromMarketDataStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    "depositAddCollateralAndBorrowFromMarket((address,address,uint256,uint256,bool,bool,(bool,uint256,bool,uint16,bytes,bool,address,address),uint256))"(
      _data: MagnetarMarketModule1.DepositAddCollateralAndBorrowFromMarketDataStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    mintFromBBAndLendOnSGL(
      _data: MagnetarMarketModule1.MintFromBBAndLendOnSGLDataStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    "mintFromBBAndLendOnSGL((address,uint256,(bool,uint256,(bool,uint256,bool)),(bool,uint256,bool),(bool,address,uint128,uint128,uint256),(bool,address,uint256),(address,address,address)))"(
      _data: MagnetarMarketModule1.MintFromBBAndLendOnSGLDataStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    modules(
      moduleId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    "modules(uint8)"(
      moduleId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

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
    "ClusterSet(address,address)"(
      oldCluster?: PromiseOrValue<string> | null,
      newCluster?: PromiseOrValue<string> | null
    ): ClusterSetEventFilter;
    ClusterSet(
      oldCluster?: PromiseOrValue<string> | null,
      newCluster?: PromiseOrValue<string> | null
    ): ClusterSetEventFilter;

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
    MAGNETAR_ACTION_MARKET(overrides?: CallOverrides): Promise<BigNumber>;

    "MAGNETAR_ACTION_MARKET()"(overrides?: CallOverrides): Promise<BigNumber>;

    MAGNETAR_ACTION_MARKET_MODULE(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "MAGNETAR_ACTION_MARKET_MODULE()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    MAGNETAR_ACTION_PERMIT(overrides?: CallOverrides): Promise<BigNumber>;

    "MAGNETAR_ACTION_PERMIT()"(overrides?: CallOverrides): Promise<BigNumber>;

    MAGNETAR_ACTION_TAP_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    "MAGNETAR_ACTION_TAP_TOKEN()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    MAGNETAR_ACTION_TOFT(overrides?: CallOverrides): Promise<BigNumber>;

    "MAGNETAR_ACTION_TOFT()"(overrides?: CallOverrides): Promise<BigNumber>;

    MAGNETAR_ACTION_YIELDBOX_MODULE(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "MAGNETAR_ACTION_YIELDBOX_MODULE()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cluster(overrides?: CallOverrides): Promise<BigNumber>;

    "cluster()"(overrides?: CallOverrides): Promise<BigNumber>;

    depositAddCollateralAndBorrowFromMarket(
      _data: MagnetarMarketModule1.DepositAddCollateralAndBorrowFromMarketDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "depositAddCollateralAndBorrowFromMarket((address,address,uint256,uint256,bool,bool,(bool,uint256,bool,uint16,bytes,bool,address,address),uint256))"(
      _data: MagnetarMarketModule1.DepositAddCollateralAndBorrowFromMarketDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    mintFromBBAndLendOnSGL(
      _data: MagnetarMarketModule1.MintFromBBAndLendOnSGLDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "mintFromBBAndLendOnSGL((address,uint256,(bool,uint256,(bool,uint256,bool)),(bool,uint256,bool),(bool,address,uint128,uint128,uint256),(bool,address,uint256),(address,address,address)))"(
      _data: MagnetarMarketModule1.MintFromBBAndLendOnSGLDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    modules(
      moduleId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "modules(uint8)"(
      moduleId: PromiseOrValue<BigNumberish>,
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
    MAGNETAR_ACTION_MARKET(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "MAGNETAR_ACTION_MARKET()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAGNETAR_ACTION_MARKET_MODULE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "MAGNETAR_ACTION_MARKET_MODULE()"(
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

    MAGNETAR_ACTION_TOFT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "MAGNETAR_ACTION_TOFT()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAGNETAR_ACTION_YIELDBOX_MODULE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "MAGNETAR_ACTION_YIELDBOX_MODULE()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cluster(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "cluster()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    depositAddCollateralAndBorrowFromMarket(
      _data: MagnetarMarketModule1.DepositAddCollateralAndBorrowFromMarketDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "depositAddCollateralAndBorrowFromMarket((address,address,uint256,uint256,bool,bool,(bool,uint256,bool,uint16,bytes,bool,address,address),uint256))"(
      _data: MagnetarMarketModule1.DepositAddCollateralAndBorrowFromMarketDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    mintFromBBAndLendOnSGL(
      _data: MagnetarMarketModule1.MintFromBBAndLendOnSGLDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "mintFromBBAndLendOnSGL((address,uint256,(bool,uint256,(bool,uint256,bool)),(bool,uint256,bool),(bool,address,uint128,uint128,uint256),(bool,address,uint256),(address,address,address)))"(
      _data: MagnetarMarketModule1.MintFromBBAndLendOnSGLDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    modules(
      moduleId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "modules(uint8)"(
      moduleId: PromiseOrValue<BigNumberish>,
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

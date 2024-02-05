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
} from "../../../common";

export type ERC721PermitApprovalMsgStruct = {
  token: PromiseOrValue<string>;
  spender: PromiseOrValue<string>;
  tokenId: PromiseOrValue<BigNumberish>;
  deadline: PromiseOrValue<BigNumberish>;
  v: PromiseOrValue<BigNumberish>;
  r: PromiseOrValue<BytesLike>;
  s: PromiseOrValue<BytesLike>;
};

export type ERC721PermitApprovalMsgStructOutput = [
  string,
  string,
  BigNumber,
  BigNumber,
  number,
  string,
  string
] & {
  token: string;
  spender: string;
  tokenId: BigNumber;
  deadline: BigNumber;
  v: number;
  r: string;
  s: string;
};

export type ERC20PermitApprovalMsgStruct = {
  token: PromiseOrValue<string>;
  owner: PromiseOrValue<string>;
  spender: PromiseOrValue<string>;
  value: PromiseOrValue<BigNumberish>;
  deadline: PromiseOrValue<BigNumberish>;
  v: PromiseOrValue<BigNumberish>;
  r: PromiseOrValue<BytesLike>;
  s: PromiseOrValue<BytesLike>;
};

export type ERC20PermitApprovalMsgStructOutput = [
  string,
  string,
  string,
  BigNumber,
  BigNumber,
  number,
  string,
  string
] & {
  token: string;
  owner: string;
  spender: string;
  value: BigNumber;
  deadline: BigNumber;
  v: number;
  r: string;
  s: string;
};

export type SendParamStruct = {
  dstEid: PromiseOrValue<BigNumberish>;
  to: PromiseOrValue<BytesLike>;
  amountLD: PromiseOrValue<BigNumberish>;
  minAmountLD: PromiseOrValue<BigNumberish>;
  extraOptions: PromiseOrValue<BytesLike>;
  composeMsg: PromiseOrValue<BytesLike>;
  oftCmd: PromiseOrValue<BytesLike>;
};

export type SendParamStructOutput = [
  number,
  string,
  BigNumber,
  BigNumber,
  string,
  string,
  string
] & {
  dstEid: number;
  to: string;
  amountLD: BigNumber;
  minAmountLD: BigNumber;
  extraOptions: string;
  composeMsg: string;
  oftCmd: string;
};

export type MessagingFeeStruct = {
  nativeFee: PromiseOrValue<BigNumberish>;
  lzTokenFee: PromiseOrValue<BigNumberish>;
};

export type MessagingFeeStructOutput = [BigNumber, BigNumber] & {
  nativeFee: BigNumber;
  lzTokenFee: BigNumber;
};

export type LZSendParamStruct = {
  sendParam: SendParamStruct;
  fee: MessagingFeeStruct;
  extraOptions: PromiseOrValue<BytesLike>;
  refundAddress: PromiseOrValue<string>;
};

export type LZSendParamStructOutput = [
  SendParamStructOutput,
  MessagingFeeStructOutput,
  string,
  string
] & {
  sendParam: SendParamStructOutput;
  fee: MessagingFeeStructOutput;
  extraOptions: string;
  refundAddress: string;
};

export type RemoteTransferMsgStruct = {
  owner: PromiseOrValue<string>;
  lzSendParam: LZSendParamStruct;
  composeMsg: PromiseOrValue<BytesLike>;
};

export type RemoteTransferMsgStructOutput = [
  string,
  LZSendParamStructOutput,
  string
] & { owner: string; lzSendParam: LZSendParamStructOutput; composeMsg: string };

export type ComposeMsgDataStruct = {
  index: PromiseOrValue<BigNumberish>;
  gas: PromiseOrValue<BigNumberish>;
  value: PromiseOrValue<BigNumberish>;
  data: PromiseOrValue<BytesLike>;
  prevData: PromiseOrValue<BytesLike>;
  prevOptionsData: PromiseOrValue<BytesLike>;
};

export type ComposeMsgDataStructOutput = [
  number,
  BigNumber,
  BigNumber,
  string,
  string,
  string
] & {
  index: number;
  gas: BigNumber;
  value: BigNumber;
  data: string;
  prevData: string;
  prevOptionsData: string;
};

export type PrepareLzCallDataStruct = {
  dstEid: PromiseOrValue<BigNumberish>;
  recipient: PromiseOrValue<BytesLike>;
  amountToSendLD: PromiseOrValue<BigNumberish>;
  minAmountToCreditLD: PromiseOrValue<BigNumberish>;
  msgType: PromiseOrValue<BigNumberish>;
  composeMsgData: ComposeMsgDataStruct;
  lzReceiveGas: PromiseOrValue<BigNumberish>;
  lzReceiveValue: PromiseOrValue<BigNumberish>;
};

export type PrepareLzCallDataStructOutput = [
  number,
  string,
  BigNumber,
  BigNumber,
  number,
  ComposeMsgDataStructOutput,
  BigNumber,
  BigNumber
] & {
  dstEid: number;
  recipient: string;
  amountToSendLD: BigNumber;
  minAmountToCreditLD: BigNumber;
  msgType: number;
  composeMsgData: ComposeMsgDataStructOutput;
  lzReceiveGas: BigNumber;
  lzReceiveValue: BigNumber;
};

export type PrepareLzCallReturnStruct = {
  composeMsg: PromiseOrValue<BytesLike>;
  composeOptions: PromiseOrValue<BytesLike>;
  sendParam: SendParamStruct;
  msgFee: MessagingFeeStruct;
  lzSendParam: LZSendParamStruct;
  oftMsgOptions: PromiseOrValue<BytesLike>;
};

export type PrepareLzCallReturnStructOutput = [
  string,
  string,
  SendParamStructOutput,
  MessagingFeeStructOutput,
  LZSendParamStructOutput,
  string
] & {
  composeMsg: string;
  composeOptions: string;
  sendParam: SendParamStructOutput;
  msgFee: MessagingFeeStructOutput;
  lzSendParam: LZSendParamStructOutput;
  oftMsgOptions: string;
};

export interface TapiocaOmnichainEngineHelperInterface extends utils.Interface {
  functions: {
    "MSG_APPROVALS()": FunctionFragment;
    "MSG_NFT_APPROVALS()": FunctionFragment;
    "MSG_REMOTE_TRANSFER()": FunctionFragment;
    "MSG_SEND()": FunctionFragment;
    "buildNftPermitApprovalMsg((address,address,uint256,uint256,uint8,bytes32,bytes32)[])": FunctionFragment;
    "buildPermitApprovalMsg((address,address,address,uint256,uint256,uint8,bytes32,bytes32)[])": FunctionFragment;
    "buildRemoteTransferMsg((address,((uint32,bytes32,uint256,uint256,bytes,bytes,bytes),(uint256,uint256),bytes,address),bytes))": FunctionFragment;
    "buildToeComposeMsgAndOptions(address,bytes,uint16,uint16,uint32,bytes,bytes)": FunctionFragment;
    "prepareLzCall(address,(uint32,bytes32,uint256,uint256,uint16,(uint8,uint128,uint128,bytes,bytes,bytes),uint128,uint128))": FunctionFragment;
    "toLD(uint64,uint256)": FunctionFragment;
    "toSD(uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "MSG_APPROVALS"
      | "MSG_APPROVALS()"
      | "MSG_NFT_APPROVALS"
      | "MSG_NFT_APPROVALS()"
      | "MSG_REMOTE_TRANSFER"
      | "MSG_REMOTE_TRANSFER()"
      | "MSG_SEND"
      | "MSG_SEND()"
      | "buildNftPermitApprovalMsg"
      | "buildNftPermitApprovalMsg((address,address,uint256,uint256,uint8,bytes32,bytes32)[])"
      | "buildPermitApprovalMsg"
      | "buildPermitApprovalMsg((address,address,address,uint256,uint256,uint8,bytes32,bytes32)[])"
      | "buildRemoteTransferMsg"
      | "buildRemoteTransferMsg((address,((uint32,bytes32,uint256,uint256,bytes,bytes,bytes),(uint256,uint256),bytes,address),bytes))"
      | "buildToeComposeMsgAndOptions"
      | "buildToeComposeMsgAndOptions(address,bytes,uint16,uint16,uint32,bytes,bytes)"
      | "prepareLzCall"
      | "prepareLzCall(address,(uint32,bytes32,uint256,uint256,uint16,(uint8,uint128,uint128,bytes,bytes,bytes),uint128,uint128))"
      | "toLD"
      | "toLD(uint64,uint256)"
      | "toSD"
      | "toSD(uint256,uint256)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "MSG_APPROVALS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MSG_APPROVALS()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MSG_NFT_APPROVALS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MSG_NFT_APPROVALS()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MSG_REMOTE_TRANSFER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MSG_REMOTE_TRANSFER()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "MSG_SEND", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MSG_SEND()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "buildNftPermitApprovalMsg",
    values: [ERC721PermitApprovalMsgStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "buildNftPermitApprovalMsg((address,address,uint256,uint256,uint8,bytes32,bytes32)[])",
    values: [ERC721PermitApprovalMsgStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "buildPermitApprovalMsg",
    values: [ERC20PermitApprovalMsgStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "buildPermitApprovalMsg((address,address,address,uint256,uint256,uint8,bytes32,bytes32)[])",
    values: [ERC20PermitApprovalMsgStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "buildRemoteTransferMsg",
    values: [RemoteTransferMsgStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "buildRemoteTransferMsg((address,((uint32,bytes32,uint256,uint256,bytes,bytes,bytes),(uint256,uint256),bytes,address),bytes))",
    values: [RemoteTransferMsgStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "buildToeComposeMsgAndOptions",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "buildToeComposeMsgAndOptions(address,bytes,uint16,uint16,uint32,bytes,bytes)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "prepareLzCall",
    values: [PromiseOrValue<string>, PrepareLzCallDataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "prepareLzCall(address,(uint32,bytes32,uint256,uint256,uint16,(uint8,uint128,uint128,bytes,bytes,bytes),uint128,uint128))",
    values: [PromiseOrValue<string>, PrepareLzCallDataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "toLD",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "toLD(uint64,uint256)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "toSD",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "toSD(uint256,uint256)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "MSG_APPROVALS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MSG_APPROVALS()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MSG_NFT_APPROVALS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MSG_NFT_APPROVALS()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MSG_REMOTE_TRANSFER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MSG_REMOTE_TRANSFER()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MSG_SEND", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "MSG_SEND()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "buildNftPermitApprovalMsg",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buildNftPermitApprovalMsg((address,address,uint256,uint256,uint8,bytes32,bytes32)[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buildPermitApprovalMsg",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buildPermitApprovalMsg((address,address,address,uint256,uint256,uint8,bytes32,bytes32)[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buildRemoteTransferMsg",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buildRemoteTransferMsg((address,((uint32,bytes32,uint256,uint256,bytes,bytes,bytes),(uint256,uint256),bytes,address),bytes))",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buildToeComposeMsgAndOptions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buildToeComposeMsgAndOptions(address,bytes,uint16,uint16,uint32,bytes,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "prepareLzCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "prepareLzCall(address,(uint32,bytes32,uint256,uint256,uint16,(uint8,uint128,uint128,bytes,bytes,bytes),uint128,uint128))",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "toLD", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "toLD(uint64,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "toSD", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "toSD(uint256,uint256)",
    data: BytesLike
  ): Result;

  events: {};
}

export interface TapiocaOmnichainEngineHelper extends BaseContract {
  contractName: "TapiocaOmnichainEngineHelper";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TapiocaOmnichainEngineHelperInterface;

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
    MSG_APPROVALS(overrides?: CallOverrides): Promise<[number]>;

    "MSG_APPROVALS()"(overrides?: CallOverrides): Promise<[number]>;

    MSG_NFT_APPROVALS(overrides?: CallOverrides): Promise<[number]>;

    "MSG_NFT_APPROVALS()"(overrides?: CallOverrides): Promise<[number]>;

    MSG_REMOTE_TRANSFER(overrides?: CallOverrides): Promise<[number]>;

    "MSG_REMOTE_TRANSFER()"(overrides?: CallOverrides): Promise<[number]>;

    MSG_SEND(overrides?: CallOverrides): Promise<[number]>;

    "MSG_SEND()"(overrides?: CallOverrides): Promise<[number]>;

    buildNftPermitApprovalMsg(
      _erc721PermitApprovalMsg: ERC721PermitApprovalMsgStruct[],
      overrides?: CallOverrides
    ): Promise<[string] & { msg_: string }>;

    "buildNftPermitApprovalMsg((address,address,uint256,uint256,uint8,bytes32,bytes32)[])"(
      _erc721PermitApprovalMsg: ERC721PermitApprovalMsgStruct[],
      overrides?: CallOverrides
    ): Promise<[string] & { msg_: string }>;

    buildPermitApprovalMsg(
      _erc20PermitApprovalMsg: ERC20PermitApprovalMsgStruct[],
      overrides?: CallOverrides
    ): Promise<[string] & { msg_: string }>;

    "buildPermitApprovalMsg((address,address,address,uint256,uint256,uint8,bytes32,bytes32)[])"(
      _erc20PermitApprovalMsg: ERC20PermitApprovalMsgStruct[],
      overrides?: CallOverrides
    ): Promise<[string] & { msg_: string }>;

    buildRemoteTransferMsg(
      _remoteTransferMsg: RemoteTransferMsgStruct,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "buildRemoteTransferMsg((address,((uint32,bytes32,uint256,uint256,bytes,bytes,bytes),(uint256,uint256),bytes,address),bytes))"(
      _remoteTransferMsg: RemoteTransferMsgStruct,
      overrides?: CallOverrides
    ): Promise<[string]>;

    buildToeComposeMsgAndOptions(
      _toeToken: PromiseOrValue<string>,
      _msg: PromiseOrValue<BytesLike>,
      _msgType: PromiseOrValue<BigNumberish>,
      _msgIndex: PromiseOrValue<BigNumberish>,
      _dstEid: PromiseOrValue<BigNumberish>,
      _extraOptions: PromiseOrValue<BytesLike>,
      _tapComposedMsg: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string, string] & { message: string; options: string }>;

    "buildToeComposeMsgAndOptions(address,bytes,uint16,uint16,uint32,bytes,bytes)"(
      _toeToken: PromiseOrValue<string>,
      _msg: PromiseOrValue<BytesLike>,
      _msgType: PromiseOrValue<BigNumberish>,
      _msgIndex: PromiseOrValue<BigNumberish>,
      _dstEid: PromiseOrValue<BigNumberish>,
      _extraOptions: PromiseOrValue<BytesLike>,
      _tapComposedMsg: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string, string] & { message: string; options: string }>;

    prepareLzCall(
      _toeToken: PromiseOrValue<string>,
      _prepareLzCallData: PrepareLzCallDataStruct,
      overrides?: CallOverrides
    ): Promise<
      [PrepareLzCallReturnStructOutput] & {
        prepareLzCallReturn_: PrepareLzCallReturnStructOutput;
      }
    >;

    "prepareLzCall(address,(uint32,bytes32,uint256,uint256,uint16,(uint8,uint128,uint128,bytes,bytes,bytes),uint128,uint128))"(
      _toeToken: PromiseOrValue<string>,
      _prepareLzCallData: PrepareLzCallDataStruct,
      overrides?: CallOverrides
    ): Promise<
      [PrepareLzCallReturnStructOutput] & {
        prepareLzCallReturn_: PrepareLzCallReturnStructOutput;
      }
    >;

    toLD(
      _amountSD: PromiseOrValue<BigNumberish>,
      _decimalConversionRate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountLD: BigNumber }>;

    "toLD(uint64,uint256)"(
      _amountSD: PromiseOrValue<BigNumberish>,
      _decimalConversionRate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountLD: BigNumber }>;

    toSD(
      _amountLD: PromiseOrValue<BigNumberish>,
      _decimalConversionRate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountSD: BigNumber }>;

    "toSD(uint256,uint256)"(
      _amountLD: PromiseOrValue<BigNumberish>,
      _decimalConversionRate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountSD: BigNumber }>;
  };

  MSG_APPROVALS(overrides?: CallOverrides): Promise<number>;

  "MSG_APPROVALS()"(overrides?: CallOverrides): Promise<number>;

  MSG_NFT_APPROVALS(overrides?: CallOverrides): Promise<number>;

  "MSG_NFT_APPROVALS()"(overrides?: CallOverrides): Promise<number>;

  MSG_REMOTE_TRANSFER(overrides?: CallOverrides): Promise<number>;

  "MSG_REMOTE_TRANSFER()"(overrides?: CallOverrides): Promise<number>;

  MSG_SEND(overrides?: CallOverrides): Promise<number>;

  "MSG_SEND()"(overrides?: CallOverrides): Promise<number>;

  buildNftPermitApprovalMsg(
    _erc721PermitApprovalMsg: ERC721PermitApprovalMsgStruct[],
    overrides?: CallOverrides
  ): Promise<string>;

  "buildNftPermitApprovalMsg((address,address,uint256,uint256,uint8,bytes32,bytes32)[])"(
    _erc721PermitApprovalMsg: ERC721PermitApprovalMsgStruct[],
    overrides?: CallOverrides
  ): Promise<string>;

  buildPermitApprovalMsg(
    _erc20PermitApprovalMsg: ERC20PermitApprovalMsgStruct[],
    overrides?: CallOverrides
  ): Promise<string>;

  "buildPermitApprovalMsg((address,address,address,uint256,uint256,uint8,bytes32,bytes32)[])"(
    _erc20PermitApprovalMsg: ERC20PermitApprovalMsgStruct[],
    overrides?: CallOverrides
  ): Promise<string>;

  buildRemoteTransferMsg(
    _remoteTransferMsg: RemoteTransferMsgStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  "buildRemoteTransferMsg((address,((uint32,bytes32,uint256,uint256,bytes,bytes,bytes),(uint256,uint256),bytes,address),bytes))"(
    _remoteTransferMsg: RemoteTransferMsgStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  buildToeComposeMsgAndOptions(
    _toeToken: PromiseOrValue<string>,
    _msg: PromiseOrValue<BytesLike>,
    _msgType: PromiseOrValue<BigNumberish>,
    _msgIndex: PromiseOrValue<BigNumberish>,
    _dstEid: PromiseOrValue<BigNumberish>,
    _extraOptions: PromiseOrValue<BytesLike>,
    _tapComposedMsg: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<[string, string] & { message: string; options: string }>;

  "buildToeComposeMsgAndOptions(address,bytes,uint16,uint16,uint32,bytes,bytes)"(
    _toeToken: PromiseOrValue<string>,
    _msg: PromiseOrValue<BytesLike>,
    _msgType: PromiseOrValue<BigNumberish>,
    _msgIndex: PromiseOrValue<BigNumberish>,
    _dstEid: PromiseOrValue<BigNumberish>,
    _extraOptions: PromiseOrValue<BytesLike>,
    _tapComposedMsg: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<[string, string] & { message: string; options: string }>;

  prepareLzCall(
    _toeToken: PromiseOrValue<string>,
    _prepareLzCallData: PrepareLzCallDataStruct,
    overrides?: CallOverrides
  ): Promise<PrepareLzCallReturnStructOutput>;

  "prepareLzCall(address,(uint32,bytes32,uint256,uint256,uint16,(uint8,uint128,uint128,bytes,bytes,bytes),uint128,uint128))"(
    _toeToken: PromiseOrValue<string>,
    _prepareLzCallData: PrepareLzCallDataStruct,
    overrides?: CallOverrides
  ): Promise<PrepareLzCallReturnStructOutput>;

  toLD(
    _amountSD: PromiseOrValue<BigNumberish>,
    _decimalConversionRate: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "toLD(uint64,uint256)"(
    _amountSD: PromiseOrValue<BigNumberish>,
    _decimalConversionRate: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  toSD(
    _amountLD: PromiseOrValue<BigNumberish>,
    _decimalConversionRate: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "toSD(uint256,uint256)"(
    _amountLD: PromiseOrValue<BigNumberish>,
    _decimalConversionRate: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    MSG_APPROVALS(overrides?: CallOverrides): Promise<number>;

    "MSG_APPROVALS()"(overrides?: CallOverrides): Promise<number>;

    MSG_NFT_APPROVALS(overrides?: CallOverrides): Promise<number>;

    "MSG_NFT_APPROVALS()"(overrides?: CallOverrides): Promise<number>;

    MSG_REMOTE_TRANSFER(overrides?: CallOverrides): Promise<number>;

    "MSG_REMOTE_TRANSFER()"(overrides?: CallOverrides): Promise<number>;

    MSG_SEND(overrides?: CallOverrides): Promise<number>;

    "MSG_SEND()"(overrides?: CallOverrides): Promise<number>;

    buildNftPermitApprovalMsg(
      _erc721PermitApprovalMsg: ERC721PermitApprovalMsgStruct[],
      overrides?: CallOverrides
    ): Promise<string>;

    "buildNftPermitApprovalMsg((address,address,uint256,uint256,uint8,bytes32,bytes32)[])"(
      _erc721PermitApprovalMsg: ERC721PermitApprovalMsgStruct[],
      overrides?: CallOverrides
    ): Promise<string>;

    buildPermitApprovalMsg(
      _erc20PermitApprovalMsg: ERC20PermitApprovalMsgStruct[],
      overrides?: CallOverrides
    ): Promise<string>;

    "buildPermitApprovalMsg((address,address,address,uint256,uint256,uint8,bytes32,bytes32)[])"(
      _erc20PermitApprovalMsg: ERC20PermitApprovalMsgStruct[],
      overrides?: CallOverrides
    ): Promise<string>;

    buildRemoteTransferMsg(
      _remoteTransferMsg: RemoteTransferMsgStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    "buildRemoteTransferMsg((address,((uint32,bytes32,uint256,uint256,bytes,bytes,bytes),(uint256,uint256),bytes,address),bytes))"(
      _remoteTransferMsg: RemoteTransferMsgStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    buildToeComposeMsgAndOptions(
      _toeToken: PromiseOrValue<string>,
      _msg: PromiseOrValue<BytesLike>,
      _msgType: PromiseOrValue<BigNumberish>,
      _msgIndex: PromiseOrValue<BigNumberish>,
      _dstEid: PromiseOrValue<BigNumberish>,
      _extraOptions: PromiseOrValue<BytesLike>,
      _tapComposedMsg: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string, string] & { message: string; options: string }>;

    "buildToeComposeMsgAndOptions(address,bytes,uint16,uint16,uint32,bytes,bytes)"(
      _toeToken: PromiseOrValue<string>,
      _msg: PromiseOrValue<BytesLike>,
      _msgType: PromiseOrValue<BigNumberish>,
      _msgIndex: PromiseOrValue<BigNumberish>,
      _dstEid: PromiseOrValue<BigNumberish>,
      _extraOptions: PromiseOrValue<BytesLike>,
      _tapComposedMsg: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string, string] & { message: string; options: string }>;

    prepareLzCall(
      _toeToken: PromiseOrValue<string>,
      _prepareLzCallData: PrepareLzCallDataStruct,
      overrides?: CallOverrides
    ): Promise<PrepareLzCallReturnStructOutput>;

    "prepareLzCall(address,(uint32,bytes32,uint256,uint256,uint16,(uint8,uint128,uint128,bytes,bytes,bytes),uint128,uint128))"(
      _toeToken: PromiseOrValue<string>,
      _prepareLzCallData: PrepareLzCallDataStruct,
      overrides?: CallOverrides
    ): Promise<PrepareLzCallReturnStructOutput>;

    toLD(
      _amountSD: PromiseOrValue<BigNumberish>,
      _decimalConversionRate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "toLD(uint64,uint256)"(
      _amountSD: PromiseOrValue<BigNumberish>,
      _decimalConversionRate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    toSD(
      _amountLD: PromiseOrValue<BigNumberish>,
      _decimalConversionRate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "toSD(uint256,uint256)"(
      _amountLD: PromiseOrValue<BigNumberish>,
      _decimalConversionRate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    MSG_APPROVALS(overrides?: CallOverrides): Promise<BigNumber>;

    "MSG_APPROVALS()"(overrides?: CallOverrides): Promise<BigNumber>;

    MSG_NFT_APPROVALS(overrides?: CallOverrides): Promise<BigNumber>;

    "MSG_NFT_APPROVALS()"(overrides?: CallOverrides): Promise<BigNumber>;

    MSG_REMOTE_TRANSFER(overrides?: CallOverrides): Promise<BigNumber>;

    "MSG_REMOTE_TRANSFER()"(overrides?: CallOverrides): Promise<BigNumber>;

    MSG_SEND(overrides?: CallOverrides): Promise<BigNumber>;

    "MSG_SEND()"(overrides?: CallOverrides): Promise<BigNumber>;

    buildNftPermitApprovalMsg(
      _erc721PermitApprovalMsg: ERC721PermitApprovalMsgStruct[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "buildNftPermitApprovalMsg((address,address,uint256,uint256,uint8,bytes32,bytes32)[])"(
      _erc721PermitApprovalMsg: ERC721PermitApprovalMsgStruct[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    buildPermitApprovalMsg(
      _erc20PermitApprovalMsg: ERC20PermitApprovalMsgStruct[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "buildPermitApprovalMsg((address,address,address,uint256,uint256,uint8,bytes32,bytes32)[])"(
      _erc20PermitApprovalMsg: ERC20PermitApprovalMsgStruct[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    buildRemoteTransferMsg(
      _remoteTransferMsg: RemoteTransferMsgStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "buildRemoteTransferMsg((address,((uint32,bytes32,uint256,uint256,bytes,bytes,bytes),(uint256,uint256),bytes,address),bytes))"(
      _remoteTransferMsg: RemoteTransferMsgStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    buildToeComposeMsgAndOptions(
      _toeToken: PromiseOrValue<string>,
      _msg: PromiseOrValue<BytesLike>,
      _msgType: PromiseOrValue<BigNumberish>,
      _msgIndex: PromiseOrValue<BigNumberish>,
      _dstEid: PromiseOrValue<BigNumberish>,
      _extraOptions: PromiseOrValue<BytesLike>,
      _tapComposedMsg: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "buildToeComposeMsgAndOptions(address,bytes,uint16,uint16,uint32,bytes,bytes)"(
      _toeToken: PromiseOrValue<string>,
      _msg: PromiseOrValue<BytesLike>,
      _msgType: PromiseOrValue<BigNumberish>,
      _msgIndex: PromiseOrValue<BigNumberish>,
      _dstEid: PromiseOrValue<BigNumberish>,
      _extraOptions: PromiseOrValue<BytesLike>,
      _tapComposedMsg: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    prepareLzCall(
      _toeToken: PromiseOrValue<string>,
      _prepareLzCallData: PrepareLzCallDataStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "prepareLzCall(address,(uint32,bytes32,uint256,uint256,uint16,(uint8,uint128,uint128,bytes,bytes,bytes),uint128,uint128))"(
      _toeToken: PromiseOrValue<string>,
      _prepareLzCallData: PrepareLzCallDataStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    toLD(
      _amountSD: PromiseOrValue<BigNumberish>,
      _decimalConversionRate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "toLD(uint64,uint256)"(
      _amountSD: PromiseOrValue<BigNumberish>,
      _decimalConversionRate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    toSD(
      _amountLD: PromiseOrValue<BigNumberish>,
      _decimalConversionRate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "toSD(uint256,uint256)"(
      _amountLD: PromiseOrValue<BigNumberish>,
      _decimalConversionRate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MSG_APPROVALS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "MSG_APPROVALS()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MSG_NFT_APPROVALS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "MSG_NFT_APPROVALS()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MSG_REMOTE_TRANSFER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "MSG_REMOTE_TRANSFER()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MSG_SEND(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "MSG_SEND()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buildNftPermitApprovalMsg(
      _erc721PermitApprovalMsg: ERC721PermitApprovalMsgStruct[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "buildNftPermitApprovalMsg((address,address,uint256,uint256,uint8,bytes32,bytes32)[])"(
      _erc721PermitApprovalMsg: ERC721PermitApprovalMsgStruct[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    buildPermitApprovalMsg(
      _erc20PermitApprovalMsg: ERC20PermitApprovalMsgStruct[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "buildPermitApprovalMsg((address,address,address,uint256,uint256,uint8,bytes32,bytes32)[])"(
      _erc20PermitApprovalMsg: ERC20PermitApprovalMsgStruct[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    buildRemoteTransferMsg(
      _remoteTransferMsg: RemoteTransferMsgStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "buildRemoteTransferMsg((address,((uint32,bytes32,uint256,uint256,bytes,bytes,bytes),(uint256,uint256),bytes,address),bytes))"(
      _remoteTransferMsg: RemoteTransferMsgStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    buildToeComposeMsgAndOptions(
      _toeToken: PromiseOrValue<string>,
      _msg: PromiseOrValue<BytesLike>,
      _msgType: PromiseOrValue<BigNumberish>,
      _msgIndex: PromiseOrValue<BigNumberish>,
      _dstEid: PromiseOrValue<BigNumberish>,
      _extraOptions: PromiseOrValue<BytesLike>,
      _tapComposedMsg: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "buildToeComposeMsgAndOptions(address,bytes,uint16,uint16,uint32,bytes,bytes)"(
      _toeToken: PromiseOrValue<string>,
      _msg: PromiseOrValue<BytesLike>,
      _msgType: PromiseOrValue<BigNumberish>,
      _msgIndex: PromiseOrValue<BigNumberish>,
      _dstEid: PromiseOrValue<BigNumberish>,
      _extraOptions: PromiseOrValue<BytesLike>,
      _tapComposedMsg: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    prepareLzCall(
      _toeToken: PromiseOrValue<string>,
      _prepareLzCallData: PrepareLzCallDataStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "prepareLzCall(address,(uint32,bytes32,uint256,uint256,uint16,(uint8,uint128,uint128,bytes,bytes,bytes),uint128,uint128))"(
      _toeToken: PromiseOrValue<string>,
      _prepareLzCallData: PrepareLzCallDataStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    toLD(
      _amountSD: PromiseOrValue<BigNumberish>,
      _decimalConversionRate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "toLD(uint64,uint256)"(
      _amountSD: PromiseOrValue<BigNumberish>,
      _decimalConversionRate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    toSD(
      _amountLD: PromiseOrValue<BigNumberish>,
      _decimalConversionRate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "toSD(uint256,uint256)"(
      _amountLD: PromiseOrValue<BigNumberish>,
      _decimalConversionRate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
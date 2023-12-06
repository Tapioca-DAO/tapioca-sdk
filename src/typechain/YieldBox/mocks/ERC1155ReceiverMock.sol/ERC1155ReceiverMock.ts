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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface ERC1155ReceiverMockInterface extends utils.Interface {
  functions: {
    "data()": FunctionFragment;
    "from()": FunctionFragment;
    "fromBalance()": FunctionFragment;
    "id()": FunctionFragment;
    "ids(uint256)": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "operator()": FunctionFragment;
    "returnToken()": FunctionFragment;
    "returnTokens()": FunctionFragment;
    "sender()": FunctionFragment;
    "value()": FunctionFragment;
    "values(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "data"
      | "data()"
      | "from"
      | "from()"
      | "fromBalance"
      | "fromBalance()"
      | "id"
      | "id()"
      | "ids"
      | "ids(uint256)"
      | "onERC1155BatchReceived"
      | "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"
      | "onERC1155Received"
      | "onERC1155Received(address,address,uint256,uint256,bytes)"
      | "operator"
      | "operator()"
      | "returnToken"
      | "returnToken()"
      | "returnTokens"
      | "returnTokens()"
      | "sender"
      | "sender()"
      | "value"
      | "value()"
      | "values"
      | "values(uint256)"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "data", values?: undefined): string;
  encodeFunctionData(functionFragment: "data()", values?: undefined): string;
  encodeFunctionData(functionFragment: "from", values?: undefined): string;
  encodeFunctionData(functionFragment: "from()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fromBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fromBalance()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "id", values?: undefined): string;
  encodeFunctionData(functionFragment: "id()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ids",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "ids(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received(address,address,uint256,uint256,bytes)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "operator", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "operator()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "returnToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "returnToken()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "returnTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "returnTokens()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "sender", values?: undefined): string;
  encodeFunctionData(functionFragment: "sender()", values?: undefined): string;
  encodeFunctionData(functionFragment: "value", values?: undefined): string;
  encodeFunctionData(functionFragment: "value()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "values",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "values(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "data", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "data()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "from", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "from()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fromBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fromBalance()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "id", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "id()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ids", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ids(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received(address,address,uint256,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "operator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "operator()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "returnToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnToken()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnTokens()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sender", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sender()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "value", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "value()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "values", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "values(uint256)",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ERC1155ReceiverMock extends BaseContract {
  contractName: "ERC1155ReceiverMock";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC1155ReceiverMockInterface;

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
    data(overrides?: CallOverrides): Promise<[string]>;

    "data()"(overrides?: CallOverrides): Promise<[string]>;

    from(overrides?: CallOverrides): Promise<[string]>;

    "from()"(overrides?: CallOverrides): Promise<[string]>;

    fromBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    "fromBalance()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    id(overrides?: CallOverrides): Promise<[BigNumber]>;

    "id()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    ids(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "ids(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    onERC1155BatchReceived(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>[],
      _values: PromiseOrValue<BigNumberish>[],
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>[],
      _values: PromiseOrValue<BigNumberish>[],
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onERC1155Received(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    operator(overrides?: CallOverrides): Promise<[string]>;

    "operator()"(overrides?: CallOverrides): Promise<[string]>;

    returnToken(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "returnToken()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    returnTokens(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "returnTokens()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sender(overrides?: CallOverrides): Promise<[string]>;

    "sender()"(overrides?: CallOverrides): Promise<[string]>;

    value(overrides?: CallOverrides): Promise<[BigNumber]>;

    "value()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    values(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "values(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  data(overrides?: CallOverrides): Promise<string>;

  "data()"(overrides?: CallOverrides): Promise<string>;

  from(overrides?: CallOverrides): Promise<string>;

  "from()"(overrides?: CallOverrides): Promise<string>;

  fromBalance(overrides?: CallOverrides): Promise<BigNumber>;

  "fromBalance()"(overrides?: CallOverrides): Promise<BigNumber>;

  id(overrides?: CallOverrides): Promise<BigNumber>;

  "id()"(overrides?: CallOverrides): Promise<BigNumber>;

  ids(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "ids(uint256)"(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  onERC1155BatchReceived(
    _operator: PromiseOrValue<string>,
    _from: PromiseOrValue<string>,
    _ids: PromiseOrValue<BigNumberish>[],
    _values: PromiseOrValue<BigNumberish>[],
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
    _operator: PromiseOrValue<string>,
    _from: PromiseOrValue<string>,
    _ids: PromiseOrValue<BigNumberish>[],
    _values: PromiseOrValue<BigNumberish>[],
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onERC1155Received(
    _operator: PromiseOrValue<string>,
    _from: PromiseOrValue<string>,
    _id: PromiseOrValue<BigNumberish>,
    _value: PromiseOrValue<BigNumberish>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "onERC1155Received(address,address,uint256,uint256,bytes)"(
    _operator: PromiseOrValue<string>,
    _from: PromiseOrValue<string>,
    _id: PromiseOrValue<BigNumberish>,
    _value: PromiseOrValue<BigNumberish>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  operator(overrides?: CallOverrides): Promise<string>;

  "operator()"(overrides?: CallOverrides): Promise<string>;

  returnToken(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "returnToken()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  returnTokens(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "returnTokens()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sender(overrides?: CallOverrides): Promise<string>;

  "sender()"(overrides?: CallOverrides): Promise<string>;

  value(overrides?: CallOverrides): Promise<BigNumber>;

  "value()"(overrides?: CallOverrides): Promise<BigNumber>;

  values(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "values(uint256)"(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    data(overrides?: CallOverrides): Promise<string>;

    "data()"(overrides?: CallOverrides): Promise<string>;

    from(overrides?: CallOverrides): Promise<string>;

    "from()"(overrides?: CallOverrides): Promise<string>;

    fromBalance(overrides?: CallOverrides): Promise<BigNumber>;

    "fromBalance()"(overrides?: CallOverrides): Promise<BigNumber>;

    id(overrides?: CallOverrides): Promise<BigNumber>;

    "id()"(overrides?: CallOverrides): Promise<BigNumber>;

    ids(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "ids(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onERC1155BatchReceived(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>[],
      _values: PromiseOrValue<BigNumberish>[],
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>[],
      _values: PromiseOrValue<BigNumberish>[],
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    operator(overrides?: CallOverrides): Promise<string>;

    "operator()"(overrides?: CallOverrides): Promise<string>;

    returnToken(overrides?: CallOverrides): Promise<void>;

    "returnToken()"(overrides?: CallOverrides): Promise<void>;

    returnTokens(overrides?: CallOverrides): Promise<void>;

    "returnTokens()"(overrides?: CallOverrides): Promise<void>;

    sender(overrides?: CallOverrides): Promise<string>;

    "sender()"(overrides?: CallOverrides): Promise<string>;

    value(overrides?: CallOverrides): Promise<BigNumber>;

    "value()"(overrides?: CallOverrides): Promise<BigNumber>;

    values(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "values(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    data(overrides?: CallOverrides): Promise<BigNumber>;

    "data()"(overrides?: CallOverrides): Promise<BigNumber>;

    from(overrides?: CallOverrides): Promise<BigNumber>;

    "from()"(overrides?: CallOverrides): Promise<BigNumber>;

    fromBalance(overrides?: CallOverrides): Promise<BigNumber>;

    "fromBalance()"(overrides?: CallOverrides): Promise<BigNumber>;

    id(overrides?: CallOverrides): Promise<BigNumber>;

    "id()"(overrides?: CallOverrides): Promise<BigNumber>;

    ids(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "ids(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onERC1155BatchReceived(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>[],
      _values: PromiseOrValue<BigNumberish>[],
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>[],
      _values: PromiseOrValue<BigNumberish>[],
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onERC1155Received(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    operator(overrides?: CallOverrides): Promise<BigNumber>;

    "operator()"(overrides?: CallOverrides): Promise<BigNumber>;

    returnToken(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "returnToken()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    returnTokens(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "returnTokens()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sender(overrides?: CallOverrides): Promise<BigNumber>;

    "sender()"(overrides?: CallOverrides): Promise<BigNumber>;

    value(overrides?: CallOverrides): Promise<BigNumber>;

    "value()"(overrides?: CallOverrides): Promise<BigNumber>;

    values(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "values(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    data(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "data()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    from(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "from()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fromBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "fromBalance()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    id(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "id()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ids(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "ids(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>[],
      _values: PromiseOrValue<BigNumberish>[],
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>[],
      _values: PromiseOrValue<BigNumberish>[],
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    operator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "operator()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    returnToken(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "returnToken()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    returnTokens(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "returnTokens()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sender(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "sender()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    value(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "value()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    values(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "values(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

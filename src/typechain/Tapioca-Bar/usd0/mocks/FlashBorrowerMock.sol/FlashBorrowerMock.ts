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
} from "../../../common";

export interface FlashBorrowerMockInterface extends utils.Interface {
  functions: {
    "approveRepayment(address,uint256)": FunctionFragment;
    "flashBorrow(address,uint256)": FunctionFragment;
    "onFlashLoan(address,address,uint256,uint256,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "approveRepayment"
      | "approveRepayment(address,uint256)"
      | "flashBorrow"
      | "flashBorrow(address,uint256)"
      | "onFlashLoan"
      | "onFlashLoan(address,address,uint256,uint256,bytes)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "approveRepayment",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "approveRepayment(address,uint256)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "flashBorrow",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "flashBorrow(address,uint256)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "onFlashLoan",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onFlashLoan(address,address,uint256,uint256,bytes)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "approveRepayment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approveRepayment(address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "flashBorrow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "flashBorrow(address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onFlashLoan",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onFlashLoan(address,address,uint256,uint256,bytes)",
    data: BytesLike
  ): Result;

  events: {};
}

export interface FlashBorrowerMock extends BaseContract {
  contractName: "FlashBorrowerMock";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FlashBorrowerMockInterface;

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
    approveRepayment(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "approveRepayment(address,uint256)"(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    flashBorrow(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "flashBorrow(address,uint256)"(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onFlashLoan(
      initiator: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "onFlashLoan(address,address,uint256,uint256,bytes)"(
      initiator: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  approveRepayment(
    token: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "approveRepayment(address,uint256)"(
    token: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  flashBorrow(
    token: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "flashBorrow(address,uint256)"(
    token: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onFlashLoan(
    initiator: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BigNumberish>,
    arg4: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  "onFlashLoan(address,address,uint256,uint256,bytes)"(
    initiator: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BigNumberish>,
    arg4: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    approveRepayment(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "approveRepayment(address,uint256)"(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    flashBorrow(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "flashBorrow(address,uint256)"(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    onFlashLoan(
      initiator: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    "onFlashLoan(address,address,uint256,uint256,bytes)"(
      initiator: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    approveRepayment(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "approveRepayment(address,uint256)"(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    flashBorrow(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "flashBorrow(address,uint256)"(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onFlashLoan(
      initiator: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "onFlashLoan(address,address,uint256,uint256,bytes)"(
      initiator: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approveRepayment(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "approveRepayment(address,uint256)"(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    flashBorrow(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "flashBorrow(address,uint256)"(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onFlashLoan(
      initiator: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "onFlashLoan(address,address,uint256,uint256,bytes)"(
      initiator: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

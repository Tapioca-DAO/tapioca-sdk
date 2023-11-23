/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AssetRegister",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AssetRegister__factory>;
    getContractFactory(
      name: "ERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155__factory>;
    getContractFactory(
      name: "ERC1155TokenReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155TokenReceiver__factory>;
    getContractFactory(
      name: "ERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Receiver__factory>;
    getContractFactory(
      name: "ERC721TokenReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721TokenReceiver__factory>;
    getContractFactory(
      name: "ERC1155Mock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Mock__factory>;
    getContractFactory(
      name: "ERC1155BrokenReceiverMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155BrokenReceiverMock__factory>;
    getContractFactory(
      name: "ERC1155ReceiverMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155ReceiverMock__factory>;
    getContractFactory(
      name: "ERC1155RevertingReceiverMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155RevertingReceiverMock__factory>;
    getContractFactory(
      name: "ERC1155StrategyMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155StrategyMock__factory>;
    getContractFactory(
      name: "ERC20Mock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Mock__factory>;
    getContractFactory(
      name: "ERC20StrategyMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20StrategyMock__factory>;
    getContractFactory(
      name: "ERC721Mock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Mock__factory>;
    getContractFactory(
      name: "ERC721StrategyMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721StrategyMock__factory>;
    getContractFactory(
      name: "ExternalFunctionMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ExternalFunctionMock__factory>;
    getContractFactory(
      name: "MaliciousMasterContractMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MaliciousMasterContractMock__factory>;
    getContractFactory(
      name: "MasterContractFullCycleMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MasterContractFullCycleMock__factory>;
    getContractFactory(
      name: "MasterContractMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MasterContractMock__factory>;
    getContractFactory(
      name: "ReturnFalseERC20Mock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ReturnFalseERC20Mock__factory>;
    getContractFactory(
      name: "RevertingERC20Mock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RevertingERC20Mock__factory>;
    getContractFactory(
      name: "SushiBarMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SushiBarMock__factory>;
    getContractFactory(
      name: "WETH9Mock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WETH9Mock__factory>;
    getContractFactory(
      name: "YieldBoxRebaseMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YieldBoxRebaseMock__factory>;
    getContractFactory(
      name: "NativeTokenFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NativeTokenFactory__factory>;
    getContractFactory(
      name: "Escrow",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Escrow__factory>;
    getContractFactory(
      name: "HelloWorld",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HelloWorld__factory>;
    getContractFactory(
      name: "LendingPair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LendingPair__factory>;
    getContractFactory(
      name: "YieldOptions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YieldOptions__factory>;
    getContractFactory(
      name: "Salary",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Salary__factory>;
    getContractFactory(
      name: "Tokenizer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Tokenizer__factory>;
    getContractFactory(
      name: "YieldApp",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YieldApp__factory>;
    getContractFactory(
      name: "YieldSwap",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YieldSwap__factory>;
    getContractFactory(
      name: "BaseBufferStrategy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseBufferStrategy__factory>;
    getContractFactory(
      name: "BaseERC20BufferStrategy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseERC20BufferStrategy__factory>;
    getContractFactory(
      name: "BaseERC1155Strategy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseERC1155Strategy__factory>;
    getContractFactory(
      name: "BaseERC20Strategy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseERC20Strategy__factory>;
    getContractFactory(
      name: "BaseStrategy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseStrategy__factory>;
    getContractFactory(
      name: "ERC20WithoutStrategy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20WithoutStrategy__factory>;
    getContractFactory(
      name: "SushiStakingBufferStrategy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SushiStakingBufferStrategy__factory>;
    getContractFactory(
      name: "SushiStakingStrategy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SushiStakingStrategy__factory>;
    getContractFactory(
      name: "YieldBox",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YieldBox__factory>;
    getContractFactory(
      name: "YieldBoxPermit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YieldBoxPermit__factory>;
    getContractFactory(
      name: "YieldBoxURIBuilder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YieldBoxURIBuilder__factory>;

    getContractAt(
      name: "AssetRegister",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AssetRegister>;
    getContractAt(
      name: "ERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155>;
    getContractAt(
      name: "ERC1155TokenReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155TokenReceiver>;
    getContractAt(
      name: "ERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Receiver>;
    getContractAt(
      name: "ERC721TokenReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721TokenReceiver>;
    getContractAt(
      name: "ERC1155Mock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Mock>;
    getContractAt(
      name: "ERC1155BrokenReceiverMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155BrokenReceiverMock>;
    getContractAt(
      name: "ERC1155ReceiverMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155ReceiverMock>;
    getContractAt(
      name: "ERC1155RevertingReceiverMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155RevertingReceiverMock>;
    getContractAt(
      name: "ERC1155StrategyMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155StrategyMock>;
    getContractAt(
      name: "ERC20Mock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Mock>;
    getContractAt(
      name: "ERC20StrategyMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20StrategyMock>;
    getContractAt(
      name: "ERC721Mock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Mock>;
    getContractAt(
      name: "ERC721StrategyMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721StrategyMock>;
    getContractAt(
      name: "ExternalFunctionMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ExternalFunctionMock>;
    getContractAt(
      name: "MaliciousMasterContractMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MaliciousMasterContractMock>;
    getContractAt(
      name: "MasterContractFullCycleMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MasterContractFullCycleMock>;
    getContractAt(
      name: "MasterContractMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MasterContractMock>;
    getContractAt(
      name: "ReturnFalseERC20Mock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ReturnFalseERC20Mock>;
    getContractAt(
      name: "RevertingERC20Mock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RevertingERC20Mock>;
    getContractAt(
      name: "SushiBarMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SushiBarMock>;
    getContractAt(
      name: "WETH9Mock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WETH9Mock>;
    getContractAt(
      name: "YieldBoxRebaseMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.YieldBoxRebaseMock>;
    getContractAt(
      name: "NativeTokenFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NativeTokenFactory>;
    getContractAt(
      name: "Escrow",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Escrow>;
    getContractAt(
      name: "HelloWorld",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HelloWorld>;
    getContractAt(
      name: "LendingPair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LendingPair>;
    getContractAt(
      name: "YieldOptions",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.YieldOptions>;
    getContractAt(
      name: "Salary",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Salary>;
    getContractAt(
      name: "Tokenizer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Tokenizer>;
    getContractAt(
      name: "YieldApp",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.YieldApp>;
    getContractAt(
      name: "YieldSwap",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.YieldSwap>;
    getContractAt(
      name: "BaseBufferStrategy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseBufferStrategy>;
    getContractAt(
      name: "BaseERC20BufferStrategy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseERC20BufferStrategy>;
    getContractAt(
      name: "BaseERC1155Strategy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseERC1155Strategy>;
    getContractAt(
      name: "BaseERC20Strategy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseERC20Strategy>;
    getContractAt(
      name: "BaseStrategy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseStrategy>;
    getContractAt(
      name: "ERC20WithoutStrategy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20WithoutStrategy>;
    getContractAt(
      name: "SushiStakingBufferStrategy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SushiStakingBufferStrategy>;
    getContractAt(
      name: "SushiStakingStrategy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SushiStakingStrategy>;
    getContractAt(
      name: "YieldBox",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.YieldBox>;
    getContractAt(
      name: "YieldBoxPermit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.YieldBoxPermit>;
    getContractAt(
      name: "YieldBoxURIBuilder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.YieldBoxURIBuilder>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}

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
      name: "BigBang",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BigBang__factory>;
    getContractFactory(
      name: "Market",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Market__factory>;
    getContractFactory(
      name: "MarketERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MarketERC20__factory>;
    getContractFactory(
      name: "SGLBorrow",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SGLBorrow__factory>;
    getContractFactory(
      name: "SGLCollateral",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SGLCollateral__factory>;
    getContractFactory(
      name: "SGLCommon",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SGLCommon__factory>;
    getContractFactory(
      name: "SGLLendingCommon",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SGLLendingCommon__factory>;
    getContractFactory(
      name: "SGLLeverage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SGLLeverage__factory>;
    getContractFactory(
      name: "SGLLiquidation",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SGLLiquidation__factory>;
    getContractFactory(
      name: "SGLStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SGLStorage__factory>;
    getContractFactory(
      name: "Singularity",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Singularity__factory>;
    getContractFactory(
      name: "Penrose",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Penrose__factory>;
    getContractFactory(
      name: "Test",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Test__factory>;
    getContractFactory(
      name: "BaseUSDO",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseUSDO__factory>;
    getContractFactory(
      name: "BaseUSDOStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseUSDOStorage__factory>;
    getContractFactory(
      name: "USDOLeverageModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.USDOLeverageModule__factory>;
    getContractFactory(
      name: "USDOMarketModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.USDOMarketModule__factory>;
    getContractFactory(
      name: "USDO",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.USDO__factory>;

    getContractAt(
      name: "BigBang",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BigBang>;
    getContractAt(
      name: "Market",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Market>;
    getContractAt(
      name: "MarketERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MarketERC20>;
    getContractAt(
      name: "SGLBorrow",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SGLBorrow>;
    getContractAt(
      name: "SGLCollateral",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SGLCollateral>;
    getContractAt(
      name: "SGLCommon",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SGLCommon>;
    getContractAt(
      name: "SGLLendingCommon",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SGLLendingCommon>;
    getContractAt(
      name: "SGLLeverage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SGLLeverage>;
    getContractAt(
      name: "SGLLiquidation",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SGLLiquidation>;
    getContractAt(
      name: "SGLStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SGLStorage>;
    getContractAt(
      name: "Singularity",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Singularity>;
    getContractAt(
      name: "Penrose",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Penrose>;
    getContractAt(
      name: "Test",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Test>;
    getContractAt(
      name: "BaseUSDO",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseUSDO>;
    getContractAt(
      name: "BaseUSDOStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseUSDOStorage>;
    getContractAt(
      name: "USDOLeverageModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.USDOLeverageModule>;
    getContractAt(
      name: "USDOMarketModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.USDOMarketModule>;
    getContractAt(
      name: "USDO",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.USDO>;

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

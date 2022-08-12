import {
    BeachBar,
    BeachBar__factory,
    ERC20,
    ERC20Mock,
    ERC20Mock__factory,
    ERC20__factory,
    Mixologist,
    MixologistHelper,
    MixologistHelper__factory,
    Mixologist__factory,
    TapiocaOFT,
    TapiocaOFT__factory,
    TapiocaWrapper,
    TapiocaWrapper__factory,
    YieldBox,
    YieldBox__factory,
    FeeDistributor,
    FeeDistributor__factory,
    GaugeController,
    GaugeController__factory,
    LiquidityGauge,
    LiquidityGauge__factory,
    Minter,
    Minter__factory,
    TapOFT,
    TapOFT__factory,
    VeTap,
    VeTap__factory,
} from './typechain';

export type IYieldBox = YieldBox;
export const YieldBoxFactory = YieldBox__factory;

export type IBeachBar = BeachBar;
export const BeachBarFactory = BeachBar__factory;

export type IMixologist = Mixologist;
export const MixologistFactory = Mixologist__factory;

export type IMixologistHelper = MixologistHelper;
export const MixologistHelperFactory = MixologistHelper__factory;

export type IERC20 = ERC20;
export const ERC20Factory = ERC20__factory;

export type IERC20Mock = ERC20Mock;
export const ERC20MockFactory = ERC20Mock__factory;

export type ITapiocaWrapper = TapiocaWrapper;
export const TapiocaWrapperFactory = TapiocaWrapper__factory;

export type ITapiocaOFT = TapiocaOFT;
export const TapiocaOFTFactory = TapiocaOFT__factory;

export type IFeeDistributor = FeeDistributor;
export const FeeDistributorFactory = FeeDistributor__factory;

export type IGaugeController = GaugeController;
export const GaugeControllerFactory = GaugeController__factory;

export type ILiquidityGauge = LiquidityGauge;
export const LiquidityGaugeFactory = LiquidityGauge__factory;

export type IMinter = Minter;
export const MinterFactory = Minter__factory;

export type ITapOFT = TapOFT;
export const TapOFTFactory = TapOFT__factory;

export type IVeTap = VeTap;
export const VeTapFactory = VeTap__factory;

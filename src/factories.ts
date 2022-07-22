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

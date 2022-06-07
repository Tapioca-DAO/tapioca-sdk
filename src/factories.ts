import {
    YieldBox,
    YieldBox__factory,
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

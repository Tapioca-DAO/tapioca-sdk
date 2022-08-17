import { Provider } from '@ethersproject/abstract-provider';
import { Signer } from 'ethers';
import __deployments from './addresses.json';
import {
    BeachBarFactory,
    ERC20MockFactory,
    MixologistFactory,
    TapiocaOFTFactory,
    YieldBoxFactory,
    FeeDistributorFactory,
    GaugeControllerFactory,
    LiquidityGaugeFactory,
    MinterFactory,
    TapOFTFactory,
    VeTapFactory,
} from './factories';

const RINKEBY = '4';
const MAINNET = '1';

const addresses__TEST = __deployments[RINKEBY];
const addresses__MAIN = __deployments[MAINNET];

export const loadContracts = (signer: Signer | Provider, test?: boolean) => {
    const addresses = test ? addresses__TEST : addresses__MAIN;
    return loadContract__internal(signer, addresses);
};
export const loadGovernanceContracts = (
    signer: Signer | Provider,
    test?: boolean,
) => {
    const addresses = test ? addresses__TEST : addresses__MAIN;
    return loadGovernanceContract__internal(signer, addresses);
};

const loadContract__internal = (signer: Signer | Provider, addresses: any) => {
    return {
        yieldBox: YieldBoxFactory.connect(addresses.yieldBox, signer),
        beachbar: BeachBarFactory.connect(addresses.bar, signer),
        mixologist: MixologistFactory.connect(
            addresses.wethUsdcMixologist,
            signer,
        ),
        mixologist_helper: BeachBarFactory.connect(
            addresses.mixologistHelper,
            signer,
        ),
        tap: ERC20MockFactory.connect(addresses.tap, signer),
        usdc: ERC20MockFactory.connect(addresses.usdc, signer),
        weth: ERC20MockFactory.connect(addresses.weth, signer),
        tapiocaWrapper: TapiocaOFTFactory.connect(
            addresses.tapiocaWrapper,
            signer,
        ),
    };
};

const loadGovernanceContract__internal = (
    signer: Signer | Provider,
    addresses: any,
) => {
    return {
        feeDistributor: FeeDistributorFactory.connect(
            addresses.feeDistributor,
            signer,
        ),
        gaugeController: GaugeControllerFactory.connect(
            addresses.gaugeController,
            signer,
        ),
        usdcEthLiquidityGauge: LiquidityGaugeFactory.connect(
            addresses.ethUsdcLiquidityGauge,
            signer,
        ),
        minter: MinterFactory.connect(addresses.minter, signer),
        tapOFT: TapOFTFactory.connect(addresses.tapOFT, signer),
        veTap: VeTapFactory.connect(addresses.veTap, signer),
    };
};

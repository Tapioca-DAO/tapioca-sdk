import { Provider } from '@ethersproject/abstract-provider';
import { Signer } from 'ethers';
import __deployments from './addresses.json';
import {
    BeachBarFactory,
    ERC20MockFactory,
    MixologistFactory,
} from './factories';

const addresses__TEST = __deployments;

export const loadContract__TEST = (signer: Signer | Provider) => {
    return {
        beachbar: BeachBarFactory.connect(addresses__TEST.bar, signer),
        mixologist: MixologistFactory.connect(
            addresses__TEST.wethUsdcMixologist,
            signer,
        ),
        mixologist_helper: BeachBarFactory.connect(
            addresses__TEST.mixologistHelper,
            signer,
        ),
        tap: ERC20MockFactory.connect(addresses__TEST.tap, signer),
        usdc: ERC20MockFactory.connect(addresses__TEST.usdc, signer),
        weth: ERC20MockFactory.connect(addresses__TEST.weth, signer),
    };
};

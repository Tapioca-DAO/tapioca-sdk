import { Provider } from '@ethersproject/abstract-provider';
import { Signer } from 'ethers';
import __deployments from './addresses.json';
import { BeachBarFactory, MixologistFactory } from './factories';

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
    };
};

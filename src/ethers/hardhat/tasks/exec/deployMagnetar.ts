import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { TAPIOCA_PROJECTS } from '../../../../api/config';
import { getOverrideOptions } from '../../../../api/utils';
import {
    MagnetarHelper__factory,
    MagnetarMarketModule__factory,
    MagnetarV2__factory,
} from '../../../../typechain/tapioca-periphery';
import { askForTag } from '../../utils';

export const deployMagnetar__task = async (
    taskArgs: {
        debugMode?: boolean;
        overrideOptions?: boolean;
    },
    hre: HardhatRuntimeEnvironment,
) => {
    const tag = await askForTag(hre, 'local');

    const chainInfo = hre.SDK.utils.getChainBy(
        'chainId',
        await hre.getChainId(),
    );
    if (!chainInfo) {
        throw new Error('Chain not found');
    }

    let clusterAddress = hre.ethers.constants.AddressZero;
    let clusterDep = hre.SDK.db
        .loadGlobalDeployment(tag, 'tapioca-periphery', chainInfo.chainId)
        .find((e) => e.name == 'Cluster');

    if (!clusterDep) {
        clusterDep = hre.SDK.db
            .loadLocalDeployment(tag, chainInfo.chainId)
            .find((e) => e.name == 'Cluster');
    }
    if (clusterDep) {
        clusterAddress = clusterDep.address;
    }

    if (!clusterAddress || clusterAddress == hre.ethers.constants.AddressZero) {
        throw new Error('Cluster not found');
    }

    const signer = (await hre.ethers.getSigners())[0];
    const Magnetar = new MagnetarV2__factory(signer);

    const MagnetarMarketModule = new MagnetarMarketModule__factory(signer);
    const magnetarMarketModule = await MagnetarMarketModule.deploy();

    const magnetar = await Magnetar.deploy(
        clusterAddress,
        signer.address,
        magnetarMarketModule.address,
        taskArgs.overrideOptions
            ? getOverrideOptions(String(hre.network.config.chainId))
            : {},
    );
    await magnetar.deployTransaction.wait(3);
    console.log(`[+] Deployed at ${magnetar.address}`);

    const dep = hre.SDK.db.buildLocalDeployment({
        chainId: String(hre.network.config.chainId),
        contracts: [
            {
                name: 'Magnetar',
                address: magnetar.address,
                meta: {},
            },
        ],
    });
    hre.SDK.db.saveGlobally(dep, TAPIOCA_PROJECTS[3], tag);

    const MagnetarHelper = new MagnetarHelper__factory(signer);
    const magnetarHelper = await MagnetarHelper.deploy(signer.address);
    await magnetarHelper.deployTransaction.wait(3);
    console.log(`[+] Deployed MagnetarHelper at ${magnetarHelper.address}`);

    const depHelper = hre.SDK.db.buildLocalDeployment({
        chainId: String(hre.network.config.chainId),
        contracts: [
            {
                name: 'MagnetarHelper',
                address: magnetarHelper.address,
                meta: {},
            },
        ],
    });
    hre.SDK.db.saveGlobally(depHelper, TAPIOCA_PROJECTS[3], tag);

    console.log('[+] Setting MagnetarHelper or Magnetar');
    await magnetar.setHelper(magnetarHelper.address);

    try {
        console.log('[+] Verifying');
        await hre.run('verify', {
            address: magnetar.address,
            constructorArgsParams: [
                clusterAddress,
                signer.address,
                magnetarMarketModule.address,
            ],
        });
        console.log('[+] Verified');
    } catch (err: any) {
        if (taskArgs.debugMode) {
            console.log(`[-] Failed to verify; error: ${err.message}\n`);
        } else {
            console.log('[-] Failed to verify\n');
        }
    }

    try {
        console.log('[+] Verifying MagnetarHelper');
        await hre.run('verify', {
            address: magnetarHelper.address,
            constructorArgsParams: [signer.address],
        });
        console.log('[+] Verified');
    } catch (err: any) {
        if (taskArgs.debugMode) {
            console.log(
                `[-] Failed to verify MagnetarHelper; error: ${err.message}\n`,
            );
        } else {
            console.log('[-] Failed to verify MagnetarHelper\n');
        }
    }
};

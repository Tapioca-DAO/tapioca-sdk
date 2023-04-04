import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { TAPIOCA_PROJECTS } from '../../../../api/config';
import { Magnetar__factory } from '../../../../typechain/utils/Magnetar/factories';
import { askForTag } from '../../utils';

export const deployMagnetar__task = async (
    taskArgs: {
        debugMode?: boolean;
    },
    hre: HardhatRuntimeEnvironment,
) => {
    const tag = await askForTag(hre, 'local');

    const signer = (await hre.ethers.getSigners())[0];
    const Magnetar = new Magnetar__factory(signer);

    const magnetar = await Magnetar.deploy(signer.address);
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

    try {
        console.log('[+] Verifying');
        await hre.run('verify', {
            address: magnetar.address,
            constructorArgsParams: [signer.address],
        });
        console.log('[+] Verified');
    } catch (err: any) {
        if (taskArgs.debugMode) {
            console.log(`[-] Failed to verify; error: ${err.message}\n`);
        } else {
            console.log('[-] Failed to verify\n');
        }
    }
};

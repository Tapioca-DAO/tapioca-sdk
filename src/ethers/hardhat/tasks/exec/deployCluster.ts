import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { Cluster__factory } from '../../../../typechain/tapioca-periphery';
import { askForTag } from '../../utils';

export const deployCluster__task = async (
    taskArgs: { debugMode?: boolean },
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

    const signer = (await hre.ethers.getSigners())[0];
    const Cluster = new Cluster__factory(signer);
    const cluster = await Cluster.deploy(chainInfo.address, signer.address);

    const depHelper = hre.SDK.db.buildLocalDeployment({
        chainId: String(hre.network.config.chainId),
        contracts: [
            {
                name: 'Cluster',
                address: cluster.address,
                meta: {
                    args: [chainInfo.address, signer.address],
                },
            },
        ],
    });
    hre.SDK.db.saveLocally(depHelper, tag);

    try {
        console.log('[+] Verifying');
        await hre.run('verify', {
            address: cluster.address,
            constructorArgsParams: [chainInfo.address, signer.address],
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

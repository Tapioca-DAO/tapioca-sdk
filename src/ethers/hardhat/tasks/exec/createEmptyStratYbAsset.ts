import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { TAPIOCA_PROJECTS_NAME } from '../../../../api/config';
import { YieldBox__factory } from '../../../../typechain/YieldBox';
import { loadGlobalContract } from '../../../utils';
import { TTapiocaDeployTaskArgs } from '../../DeployerVM';
import { saveBuildLocally } from '../../../../api/db';

export const createEmptyStratYbAsset__task = async (
    _taskArgs: TTapiocaDeployTaskArgs & {
        token: string;
        deploymentName: string;
    },
    hre: HardhatRuntimeEnvironment,
) => {
    const { tag } = _taskArgs;
    const { token, deploymentName } = _taskArgs;

    console.log(`[+] Creating empty strat  YieldBox asset for ${token}...`);

    const yieldBox = YieldBox__factory.connect(
        loadGlobalContract(
            hre,
            TAPIOCA_PROJECTS_NAME.TapiocaPeriph,
            hre.SDK.eChainId,
            'YieldBox', // Check DEPLOYMENT_NAME in tap-yieldbox
            tag,
        ).address,
        hre.ethers.provider.getSigner(),
    );

    console.log('[+] Deploying ERC20WithoutStrategy');
    const tokenStrat = await (
        await hre.ethers.getContractFactory('ERC20WithoutStrategy')
    ).deploy(yieldBox.address, token);
    await tokenStrat.deployed();

    console.log(`[+] Registering asset ${token} with YieldBox...`);
    await (
        await yieldBox.registerAsset(1, token, tokenStrat.address, 0)
    ).wait(3);

    const tokenStratId = (await yieldBox.assetCount()).sub(1);

    console.log(
        `[+] Saving deployment of asset ${token} registered with YieldBox at ${
            tokenStrat.address
        }, with ID ${tokenStratId.toNumber()}, under ${deploymentName}`,
    );

    saveBuildLocally(
        {
            chainId: hre.SDK.eChainId,
            chainIdName: hre.SDK.chainInfo.name,
            contracts: [
                {
                    address: tokenStrat.address,
                    name: deploymentName,
                    meta: {
                        token,
                        ybAssetId: tokenStratId.toNumber(),
                    },
                },
            ],
            lastBlockHeight: await hre.ethers.provider.getBlockNumber(),
        },
        tag,
    );
};

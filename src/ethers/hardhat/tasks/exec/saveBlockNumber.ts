import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { askForTag } from '../../utils';

export const saveBlockNumber__task = async (
    _taskArgs: {},
    hre: HardhatRuntimeEnvironment,
) => {
    const tag = await askForTag(hre, 'local');
    console.log('Retrieving latest block');
    const latestBlock = await hre.ethers.provider.getBlock('latest');
    console.log('Saving latest block');
    const dep = hre.SDK.db.buildLocalDeployment({
        chainId: String(hre.network.config.chainId),
        contracts: [
            {
                name: 'NonContract-BlockDetails',
                address: hre.ethers.constants.AddressZero,
                meta: {
                    blockNumber: latestBlock.number,
                    nonce: latestBlock.nonce,
                    timestamp: latestBlock.timestamp,
                },
            },
        ],
    });
    hre.SDK.db.saveGlobally(dep, 'non-contracts', tag);
    console.log('Done');
};

import { HardhatRuntimeEnvironment } from 'hardhat/types';
import inquirer from 'inquirer';
import { ERC20Mock__factory } from '../../../../typechain/tap-token';
import { askForTag } from '../../utils';

// TODO add a task to free mint
export const deployERC20Mock__task = async (
    taskArgs: {
        save?: boolean;
    },
    hre: HardhatRuntimeEnvironment,
) => {
    const { save } = taskArgs;
    let tag = '';
    if (save) {
        tag = await askForTag(hre, 'local');
    }

    const ERC20Mock = new ERC20Mock__factory(
        (await hre.ethers.getSigners())[0],
    );

    const { name, symbol, decimals } = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name of the token:',
        },
        {
            type: 'input',
            name: 'symbol',
            message: 'Symbol of the token:',
        },
        {
            type: 'input',
            name: 'decimals',
            message: 'Decimals of the token:',
        },
    ]);

    const ercMock = await ERC20Mock.deploy(
        name,
        symbol,
        hre.ethers.BigNumber.from((1e18).toString()).mul(1_000_000_000),
        decimals,
    );
    await ercMock.deployTransaction.wait(3);
    console.log(`[+] Deployed ${name} at ${ercMock.address}`);

    if (save) {
        hre.SDK.db.saveLocally(
            hre.SDK.db.buildLocalDeployment({
                chainId: String(hre.network.config.chainId),
                contracts: [
                    {
                        name,
                        address: ercMock.address,
                        meta: {
                            isERC20Mock: true,
                        },
                    },
                ],
            }),
            tag,
        );
    }
};

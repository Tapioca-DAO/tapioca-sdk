import { HardhatRuntimeEnvironment } from 'hardhat/types';
import inquirer from 'inquirer';
import { ERC20Mock__factory } from '../../../../typechain/tapioca-mocks';
import { askForTag } from '../../utils';

export const deployERC20Mock__task = async (
    taskArgs: {
        save?: boolean;
        debugMode?: boolean;
    },
    hre: HardhatRuntimeEnvironment,
) => {
    const { save } = taskArgs;
    let tag = '';
    if (save) {
        tag = await askForTag(hre, 'local');
    }

    const signer = (await hre.ethers.getSigners())[0];
    const ERC20Mock = new ERC20Mock__factory(signer);

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
        signer.address,
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

    try {
        console.log('[+] Verifying');
        await hre.run('verify', {
            address: ercMock.address,
            constructorArgsParams: [
                name,
                symbol,
                hre.ethers.BigNumber.from((1e18).toString())
                    .mul(1_000_000_000)
                    .toString(),
                decimals,
                signer.address,
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
};

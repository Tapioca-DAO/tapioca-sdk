import { HardhatRuntimeEnvironment } from 'hardhat/types';
import inquirer from 'inquirer';
import { TLocalDeployment } from '../../../../shared';

export const exportSDK__task = async ({}, hre: HardhatRuntimeEnvironment) => {
    console.log(
        '\n\n[+] Exporting typechain & deployment files for tapioca-sdk...',
    );
    const tag = await hre.SDK.hardhatUtils.askForTag(hre, 'local');
    const data = hre.SDK.db.readDeployment('local', {
        tag,
    }) as TLocalDeployment;

    const allContracts = (await hre.artifacts.getAllFullyQualifiedNames())
        .filter((e) => e.startsWith('contracts/'))
        .map((e) => e.split(':')[1])
        .filter((e) => e[0] !== 'I');

    const { contractNames } = await inquirer.prompt({
        type: 'checkbox',
        message: 'Select contracts to export',
        name: 'contractNames',
        choices: allContracts,
        default: allContracts,
    });

    hre.SDK.exportSDK.run({
        projectCaller: hre.config.SDK.project,
        artifactPath: hre.config.paths.artifacts,
        deployment: { data, tag },
        contractNames,
    });
};

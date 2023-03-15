import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { askForDeployment } from '../../utils';

export const getDeployment__task = async function (
    taskArgs: {
        global?: boolean;
    },
    hre: HardhatRuntimeEnvironment,
) {
    console.log(
        JSON.stringify(
            (await askForDeployment(hre, taskArgs.global ? 'global' : 'local'))
                .deployments,
            null,
            2,
        ),
    );
};

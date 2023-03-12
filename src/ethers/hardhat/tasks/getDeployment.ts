import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { TProjectCaller } from '../../../shared';

export const getDeployment__task = async function (
    taskArgs: {
        global?: boolean;
        project: TProjectCaller;
        contractName?: string;
        tag?: string;
    },
    hre: HardhatRuntimeEnvironment,
) {
    const { global, project, contractName, tag } = taskArgs;
    if (
        global &&
        !project &&
        !hre.SDK.utils.getTapiocaProjects().includes(project)
    ) {
        throw new Error('[-] SDK: Please specify a valid project name');
    }

    if (global) {
        const toLog = hre.SDK.db.readDeployment('global', {
            tag,
            project,
            chainId: String(hre.network.config.chainId),
        });
        console.log(toLog);
    }

    if (contractName) {
        const localDeployment = hre.SDK.db.getLocalDeployment(
            String(hre.network.config.chainId),
            contractName,
            tag,
        );

        if (!localDeployment) {
            throw new Error('[-] SDK: Contract not found');
        }
        console.log(localDeployment);
    } else {
        const localDeployment = hre.SDK.db.readDeployment('local', {
            chainId: String(hre.network.config.chainId),
            project,
            tag,
        });
        console.log(localDeployment);
    }
};

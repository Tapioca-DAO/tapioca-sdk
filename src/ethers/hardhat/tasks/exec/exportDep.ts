import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { saveGlobally } from '../../../../api/db';
import { TLocalDeployment } from '../../../../shared';
import { TTapiocaDeployTaskArgs } from '../../DeployerVM';

export const exportDep__task = async (
    params: TTapiocaDeployTaskArgs,
    hre: HardhatRuntimeEnvironment,
) => {
    const { tag } = params;
    console.log(
        `[+] Exporting local deployment files on tag ${tag} for tapioca-sdk...`,
    );
    const data = hre.SDK.db.readDeployment('local', {
        tag,
    }) as TLocalDeployment;
    saveGlobally(data, hre.config.SDK.project, tag);
};

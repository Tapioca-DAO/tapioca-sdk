import { HardhatRuntimeEnvironment } from 'hardhat/types';

//npx hardhat transferOwnership --to 0x40282d3Cf4890D9806BC1853e97a59C93D813653 --target-address 0x404742aa2a11D5F7415EB4B17a84aD2038156DA7 --target-name TapiocaWrapper --from-multisig true --from-multicall false
export const transferOwnership__task = async (
    taskArgs: {
        to: string;
        targetAddress: string;
        targetName: string;
        fromMultisig?: boolean;
        fromMulticall?: boolean;
    },
    hre: HardhatRuntimeEnvironment,
) => {
    const tag = await hre.SDK.hardhatUtils.askForTag(hre, 'local');
    const VM = new hre.SDK.DeployerVM(hre, {
        bytecodeSizeLimit: 100_000,
        debugMode: true,
        tag,
    });

    await VM.transferOwnership(
        taskArgs.to,
        {
            name: taskArgs.targetName,
            address: taskArgs.targetAddress,
            meta: {},
        },
        taskArgs.fromMultisig,
        taskArgs.fromMulticall,
    );
};

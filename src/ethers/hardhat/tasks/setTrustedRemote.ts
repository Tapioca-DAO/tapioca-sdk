import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { glob, runTypeChain } from 'typechain';

//to fantom_testnet
//  npx hardhat setTrustedRemote --contractName 'TapOFT' --lz-chain 1 --src 0x2 --dst 0x1  --tag '1.0'

export const setTrustedRemote__task = async (
    taskArgs: {
        contractName: string;
        src: string;
        dst: string;
        lzChain?: string;
        tag?: string;
    },
    hre: HardhatRuntimeEnvironment,
) => {
    console.log('[+] Setting trusted remote for', taskArgs.contractName);

    const deployment = hre.SDK.db.getLocalDeployment(
        String(hre.network.config.chainId),
        taskArgs.contractName,
        taskArgs.tag,
    );
    const contract = await hre.ethers.getContractAt(
        deployment.name,
        deployment.address,
    );

    if (!deployment) {
        const availContract = hre.SDK.utils
            .getContractNamesForChain(
                String(hre.network.config.chainId),
                hre.userConfig.SDK.project,
                {
                    tag: taskArgs.tag,
                    type: 'local',
                },
            )
            .map((e) => `\t- ${e}\n`);
        throw new Error(
            `[-] SDK: Contract not found, available contracts:\n${availContract}`,
        );
    }

    const path = hre.ethers.utils.solidityPack(
        ['address', 'address'],
        [taskArgs.dst, taskArgs.src],
    );

    console.log(
        `[+] Setting trusted for ${deployment.name} remote with path ${path}`,
    );
    await contract.setTrustedRemote(taskArgs.lzChain, path);

    console.log('[+] Done');
};

import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { TapOFT } from '../../../../typechain/tap-token';
import { getLocalContract } from '../../utils';

// to fantom_testnet
// npx hardhat setTrustedRemote --contractName 'TapOFT'  --src 0x2 --dst 0x1  --tag '1.0'
export const setTrustedRemote__task = async (
    taskArgs: {
        contractName: string;
        src: string;
        dst: string;
        tag?: string;
    },
    hre: HardhatRuntimeEnvironment,
) => {
    console.log('[+] Setting trusted remote for', taskArgs.contractName);

    const { contract, deployment } = await getLocalContract<TapOFT>(
        hre,
        taskArgs.contractName,
        taskArgs.tag,
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
    const lzChain =
        hre.SDK.config.NETWORK_MAPPING_CHAIN_TO_LZ[
            String(
                hre.network.config.chainId,
            ) as keyof typeof hre.SDK.config.NETWORK_MAPPING_CHAIN_TO_LZ
        ];
    await contract.setTrustedRemote(lzChain, path);

    console.log('[+] Done');
};

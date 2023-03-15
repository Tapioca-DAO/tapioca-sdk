import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { TapiocaOFT__factory, TapiocaWrapper } from '../../../../typechain';
import { getLocalContract } from '../../utils';

// to fantom_testnet
// npx hardhat setTrustedRemote --src 0x2 --dst 0x1  --tag '1.0'
export const setTrustedRemote__task = async (
    taskArgs: {
        src: string;
        dst: string;
        isToft?: string;
        tag?: string;
    },
    hre: HardhatRuntimeEnvironment,
) => {
    console.log('[+] Setting trusted remote for', taskArgs.src);

    const contract = TapiocaOFT__factory.connect(
        taskArgs.src,
        hre.ethers.provider,
    );

    const path = hre.ethers.utils.solidityPack(
        ['address', 'address'],
        [taskArgs.dst, taskArgs.src],
    );

    const lzChain =
        hre.SDK.config.NETWORK_MAPPING_CHAIN_TO_LZ[
            String(
                hre.network.config.chainId,
            ) as keyof typeof hre.SDK.config.NETWORK_MAPPING_CHAIN_TO_LZ
        ];

    if (taskArgs.isToft) {
        const tapiocaWrapper = await getLocalContract<TapiocaWrapper>(
            hre,
            'TapiocaWrapper',
            taskArgs.tag,
        );
        await tapiocaWrapper.contract.executeTOFT(
            contract.address,
            contract.interface.encodeFunctionData('setTrustedRemote', [
                lzChain,
                path,
            ]),
            true,
        );
    } else {
        await contract.setTrustedRemote(lzChain, path);
    }

    console.log('[+] Done');
};

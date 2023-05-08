import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { TapiocaOFT } from '../../../../typechain/tapiocaz';
import { getLocalContract } from '../../utils';

// TODO use the new task arg system
// to fantom_testnet
// npx hardhat toftSendFrom --contract-name USDO --src-chain goerli --dst arbitrum_goerli --value 1.34 --tag '1.0'
export const toftSendFrom__task = async (
    taskArgs: {
        contractName: string;
        src: string;
        dst: string;
        value: string;
        tag?: string;
    },
    hre: HardhatRuntimeEnvironment,
) => {
    const { contractName, src, dst, value, tag } = taskArgs;

    const srcChainConfig = hre.SDK.utils.getChainBy('name', src);
    const dstChainConfig = hre.SDK.utils.getChainBy('name', dst);

    const availableChains = hre.SDK.utils
        .getSupportedChains()
        .map((e) => e.name);
    if (!srcChainConfig) {
        throw new Error(
            `Chain ${src} not found. Available chains: ${availableChains}`,
        );
    }
    if (!dstChainConfig) {
        throw new Error(
            `Chain ${dst} not found. Available chains: ${availableChains}`,
        );
    }

    const { contract: srcContract } = await getLocalContract<TapiocaOFT>(
        hre,
        contractName,
        tag,
    );
    const decimals = await srcContract.decimals();

    const formattedEther = hre.ethers.utils.parseUnits(value, decimals);

    console.log(
        `[+] Sending ${formattedEther} of ${contractName} from ${src} to ${dst}`,
    );

    const signer = (await hre.ethers.getSigners())[0];
    await (
        await srcContract.sendFrom(
            signer.address,
            dstChainConfig.lzChainId,
            signer.address,
            value,
            {
                adapterParams: hre.ethers.utils.solidityPack(
                    ['uint16', 'uint256'],
                    [
                        1,
                        hre.SDK.config.MIN_GAS_FOR_PACKET_TYPE[
                            hre.SDK.config.EPacketType.PT_SEND
                        ],
                    ],
                ),
                refundAddress: signer.address,
                zroPaymentAddress: hre.ethers.constants.AddressZero,
            },
        )
    ).wait(3);

    console.log('[+] Done');
};

import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { TapiocaOFT__factory, TapiocaWrapper } from '../../../../typechain';
import { Multicall3 } from '../../../../typechain/utils/MultiCall';
import { Multicall3__factory } from '../../../../typechain/utils/MultiCall/factories';
import {
    getLocalContract,
    transformMulticallToTapiocaWrapper,
} from '../../utils';

// TODO use the new task arg system
export const setAdapterParam__task = async (
    taskArgs: {
        src: string;
        dstLzChainId: string;
        isToft?: boolean;
        tag?: string;
    },
    hre: HardhatRuntimeEnvironment,
) => {
    const { dstLzChainId, src, isToft, tag } = taskArgs;

    const packetTypes = hre.SDK.config.PACKET_TYPES;
    console.log('[+] Setting adapter param for ', src);

    const contract = TapiocaOFT__factory.connect(
        taskArgs.src,
        hre.ethers.provider,
    );

    const calls: Multicall3.Call3Struct[] = [];
    for (const packetType of packetTypes) {
        calls.push({
            target: contract.address,
            callData: contract.interface.encodeFunctionData('setMinDstGas', [
                dstLzChainId,
                packetType,
                200_000,
            ]),
            allowFailure: false,
        });
    }

    calls.push({
        target: contract.address,
        callData: contract.interface.encodeFunctionData(
            'setUseCustomAdapterParams',
            [true],
        ),
        allowFailure: false,
    });

    if (isToft) {
        const tapiocaWrapper = await getLocalContract<TapiocaWrapper>(
            hre,
            'TapiocaWrapper',
            tag,
        );
        const twCalls = transformMulticallToTapiocaWrapper(calls);
        const tx = await (
            await tapiocaWrapper.contract.executeCalls(twCalls)
        ).wait(3);
        console.log('[+] Batch call Tx: ', tx.transactionHash);
    } else {
        const multicall = Multicall3__factory.connect(
            hre.SDK.config.MULTICALL_ADDRESS,
            hre.ethers.provider,
        );

        const tx = await (await multicall.aggregate3(calls)).wait(3);
        console.log('[+] Batch call Tx: ', tx.transactionHash);
    }
};

import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { TLocalDeployment } from '../../../../shared';
import { TapiocaOFT__factory, TapiocaWrapper } from '../../../../typechain';
import { Multicall3 } from '../../../../typechain/utils/MultiCall';
import { Multicall3__factory } from '../../../../typechain/utils/MultiCall/factories';
import {
    getLocalContract,
    transformMulticallToTapiocaWrapper,
} from '../../utils';

// npx hardhat batchSetAdapterParam --network arbitrum_goerli --contract 'USD0'
export const batchSetAdapterParam__task = async (
    taskArgs: { contract: string; isToft?: boolean; tag?: string },
    hre: HardhatRuntimeEnvironment,
) => {
    const { contract, tag } = taskArgs;

    console.log('[+] Setting adapter params for contract: ', contract);
    const currentChainId = String(hre.network.config.chainId);

    const oftFactory = (await hre.ethers.getContractFactory(
        contract as 'TapiocaOFT',
    )) as TapiocaOFT__factory;

    const deployments = hre.SDK.db.readDeployment('local', {
        tag,
        project: hre.config.SDK.project,
    }) as TLocalDeployment;

    const oftEntryData = hre.SDK.utils.getTapiocaOFTEntities(
        deployments,
        taskArgs.contract,
        oftFactory,
    );
    if (!oftEntryData) {
        throw new Error('[-] SDK: Contract not found');
    }

    const chainTransactions = oftEntryData.filter(
        (a: { srChain: string }) => a.srChain == currentChainId,
    );

    console.log(`[+] Total entries: ${chainTransactions.length}`);
    chainTransactions.forEach((e) => {
        console.log(
            '\t',
            '* Setting ',
            // @ts-ignore
            hre.SDK.config.NETWORK_MAPPING_CHAIN_TO_LZ[e.srChain],
            '->',
            // @ts-ignore
            hre.SDK.config.NETWORK_MAPPING_CHAIN_TO_LZ[e.dstLzChain],
        );
    });

    const calls: Multicall3.Call3Struct[] = [];
    for (const entry of chainTransactions) {
        const ctr = await hre.ethers.getContractAt(
            taskArgs.contract,
            entry.srcAddress,
        );
        calls.push({
            target: entry.srcAddress,
            callData: ctr.interface.encodeFunctionData(
                'setUseCustomAdapterParams',
                [true],
            ),
            allowFailure: false,
        });
        for (const packetType of entry.packetTypesTxs) {
            calls.push({
                target: entry.srcAddress,
                callData: ctr.interface.encodeFunctionData('setMinDstGas', [
                    entry.dstLzChain,
                    packetType,
                    200000,
                ]),
                allowFailure: false,
            });
        }
    }

    // Special case if it's a TOFT
    if (taskArgs.isToft) {
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

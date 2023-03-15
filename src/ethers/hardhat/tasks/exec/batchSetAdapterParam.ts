import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { TLocalDeployment } from '../../../../shared';
import {
    TapiocaOFT__factory,
    TapiocaWrapper,
} from '../../../../typechain/TapiocaZ';

import { Multicall3 } from '../../../../typechain/utils/MultiCall';
import { Multicall3__factory } from '../../../../typechain/utils/MultiCall/factories';
import {
    askForDeployment,
    getLocalContract,
    transformMulticallToTapiocaWrapper,
} from '../../utils';

// npx hardhat batchSetAdapterParam --network arbitrum_goerli --isToft?
export const batchSetAdapterParam__task = async (
    taskArgs: { isToft?: boolean },
    hre: HardhatRuntimeEnvironment,
) => {
    const {
        deployments: [deployment],
        tag,
    } = await askForDeployment(hre, 'local');

    console.log('[+] Setting adapter params for contract: ', deployment.name);
    const currentChainId = String(hre.network.config.chainId);

    const oftFactory = (await hre.ethers.getContractFactory(
        'TapiocaOFT',
    )) as TapiocaOFT__factory;

    const deployments = hre.SDK.db.readDeployment('local', {
        tag,
        project: hre.config.SDK.project,
    }) as TLocalDeployment;

    const oftEntryData = hre.SDK.utils.getTapiocaOFTEntities(
        deployments,
        deployment.name,
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
            'TapiocaOFT',
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

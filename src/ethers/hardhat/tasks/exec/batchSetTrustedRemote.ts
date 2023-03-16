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

// npx hardhat batchSetTrustedRemote --network arbitrum_goerli --isToft?
export const batchSetTrustedRemote__task = async (
    taskArgs: { isToft?: boolean },
    hre: HardhatRuntimeEnvironment,
) => {
    const {
        deployments: [deployment],
        tag,
    } = await askForDeployment(hre, 'local');
    const currentChainId = String(hre.network.config.chainId);

    console.log('[+] Setting adapter params for contract: ', deployment.name);

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

    const chainTransactions = oftEntryData.filter(
        (a: { srChain: string }) => a.srChain == currentChainId,
    );

    console.log(`[+] Total entries: ${chainTransactions.length}`);
    const chains = hre.SDK.utils.getSupportedChains();
    chainTransactions.forEach((e) => {
        console.log(
            '\t',
            '* Setting ',
            chains.find((c) => c.chainId == e.srChain)?.name,
            '->',
            chains.find((c) => c.chainId == e.dstChain)?.name,
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
            callData: ctr.interface.encodeFunctionData('setTrustedRemote', [
                entry.dstLzChain,
                entry.trustedRemotePath,
            ]),
            allowFailure: false,
        });
    }

    // Special case for TapiocaOFT
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

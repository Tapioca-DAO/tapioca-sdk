import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { TLocalDeployment } from '../../../../shared';
import { TapiocaOFT__factory } from '../../../../typechain';

// npx hardhat batchSetAdapterParam --network arbitrum_goerli --contract 'USD0'
export const batchSetAdapterParam__task = async (
    taskArgs: { contract: string; tag?: string },
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

    let sum = 0;
    for (let i = 0; i < chainTransactions.length; i++) {
        const crtTx = chainTransactions[i];
        const ctr = await hre.ethers.getContractAt(
            taskArgs.contract,
            crtTx.srcAddress,
        );

        await (await ctr.setUseCustomAdapterParams(true)).wait(2);

        for (
            let packetIndex = 0;
            packetIndex < crtTx.packetTypesTxs.length;
            packetIndex++
        ) {
            await (
                await ctr.setMinDstGas(
                    crtTx.dstLzChain,
                    crtTx.packetTypesTxs[packetIndex],
                    200000,
                )
            ).wait(2);
        }
        console.log(`\t* Executed ${i}`);
        sum += 1;
    }
    console.log(`[+] Executed ${sum} transactions`);
};

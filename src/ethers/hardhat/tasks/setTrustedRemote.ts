import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { TLocalDeployment } from '../../../shared';
import { TapiocaOFT__factory } from '../../../typechain';

// npx hardhat setTrustedRemote --network arbitrum_goerli --contract 'MarketsProxy'
export const setTrustedRemote__task = async (
    taskArgs: { contract: string; tag?: string },
    hre: HardhatRuntimeEnvironment,
) => {
    const { contract, tag } = taskArgs;
    const currentChainId = String(hre.network.config.chainId);

    console.log('[+] Setting adapter params for contract: ', contract);

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
        await (
            await ctr.setTrustedRemote(
                crtTx.dstLzChain,
                crtTx.trustedRemotePath,
            )
        ).wait(2);
        console.log(`\t* Executed ${i}`);
        sum += 1;
    }
    console.log(`[+] Executed ${sum} transactions`);
};

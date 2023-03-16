import { HardhatRuntimeEnvironment } from 'hardhat/types';
import inquirer from 'inquirer';
import { EChainID } from '../../../../api/config';
import { TContract, TLocalDeployment } from '../../../../shared';
import { Multicall, TapiocaZ } from '../../../../typechain';
import { TapiocaWrapper } from '../../../../typechain/TapiocaZ';
import { Multicall3 } from '../../../../typechain/utils/MultiCall';

/**
 * Configure the LZ app in one go
 */
export const setLZConfig__task = async (
    taskArgs: { isToft?: boolean },
    hre: HardhatRuntimeEnvironment,
) => {
    console.log('[+] Setting omni config');
    console.log(
        '[+] Use this task once all LZ app are deployed, to perform the config in one batch',
    );
    console.log(
        '[+] This task will configure the following packets to a minDstGas of 200_000: ',
    );
    console.log(hre.SDK.config.PACKET_TYPES);

    const signer = (await hre.ethers.getSigners())[0];
    const multicall = Multicall.Multicall3__factory.connect(
        hre.SDK.config.MULTICALL_ADDRESS,
        signer,
    );

    const tag = await hre.SDK.hardhatUtils.askForTag(hre, 'local');
    const choices = hre.SDK.db.loadLocalDeployment(
        tag,
        String(hre.network.config.chainId),
    );

    const { toConfigure } = await inquirer.prompt({
        type: 'list',
        message: 'Select target to configure',
        name: 'toConfigure',
        choices: choices.map((e) => e.name),
    });

    // Build calls
    const contractToConf = choices.find((e) => e.name === toConfigure)!;
    const targets = await getLinkedContract(hre, tag, contractToConf);
    const calls = buildCalls(hre, contractToConf, targets);

    // Execute calls
    if (taskArgs.isToft) {
        console.log('[+] Using TapiocaWrapper (TOFT)');

        const { contract: tapiocaWrapper } =
            await hre.SDK.hardhatUtils.getLocalContract<TapiocaWrapper>(
                hre,
                'TapiocaWrapper',
                tag,
            );
        const tx = await tapiocaWrapper.executeCalls(
            hre.SDK.hardhatUtils.transformMulticallToTapiocaWrapper(calls),
        );
        console.log('[+] Tx sent: ', tx.hash);
        await tx.wait(3);
        console.log('[+] Tx mined!');
    } else {
        console.log('[+] Using Multicall');

        const tx = await multicall.aggregate3(calls);
        console.log('[+] Tx sent: ', tx.hash);
        await tx.wait(3);
        console.log('[+] Tx mined!');
    }
};

async function getLinkedContract(
    hre: HardhatRuntimeEnvironment,
    tag: string,
    contractToConf: TContract,
) {
    // TODO - Could be a util
    const targets: { lzChainId: string; contract: TContract }[] = [];
    const localDeployments = hre.SDK.db.readDeployment('local', {
        tag,
    }) as TLocalDeployment;
    const localChainIds = Object.keys(localDeployments).filter(
        (e) => e !== String(hre.network.config.chainId),
    );

    // For each chain, get the matching contract
    for (const chainId of localChainIds) {
        const linked = localDeployments[chainId].find(
            (e) => e.name === contractToConf.name,
        );
        if (linked) {
            targets.push({
                lzChainId:
                    hre.SDK.config.NETWORK_MAPPING_CHAIN_TO_LZ[
                        chainId as EChainID
                    ],
                contract: linked,
            });
        }
    }

    const supportedChain = hre.SDK.utils.getSupportedChains();
    const { isOk } = await inquirer.prompt({
        type: 'confirm',
        message: `Do you want to configure ${contractToConf.name} on ${targets
            .map(
                (e) =>
                    supportedChain.find((c) => c.lzChainId === e.lzChainId)!
                        .name,
            )
            .join(', ')}?`,
        name: 'isOk',
    });

    if (!isOk) {
        throw new Error('[-] Aborted');
    }

    return targets;
}

function buildCalls(
    hre: HardhatRuntimeEnvironment,
    contractToConf: TContract,
    targets: Awaited<ReturnType<typeof getLinkedContract>>,
) {
    // Build calls
    const calls: Multicall3.Call3Struct[] = [];
    console.log('[+] UseCustomAdapter ');
    calls.push({
        target: contractToConf.address,
        callData:
            TapiocaZ.BaseTOFT__factory.createInterface().encodeFunctionData(
                'setUseCustomAdapterParams',
                [true],
            ),
        allowFailure: false,
    });

    for (const target of targets) {
        console.log('[+] Configuring ', target.contract.name, '...');
        console.log('\t- Trusted Remote: ');
        console.log('\t\t- LZChainID:', target.lzChainId);
        console.log('\t\t- Path: ', [
            target.contract.address,
            contractToConf.address,
        ]);
        // Set trusted remote
        calls.push({
            target: contractToConf.address,
            callData:
                TapiocaZ.BaseTOFT__factory.createInterface().encodeFunctionData(
                    'setTrustedRemote',
                    [
                        target.lzChainId,
                        hre.ethers.utils.solidityPack(
                            ['address', 'address'],
                            [target.contract.address, contractToConf.address],
                        ),
                    ],
                ),
            allowFailure: false,
        });

        // Set minDstGas per packet type
        console.log('\t- MinDstGas: ');
        for (const packetType of hre.SDK.config.PACKET_TYPES) {
            console.log('\t\t- PacketType:', packetType);
            console.log('\t\t\t- LZChainID:', target.lzChainId);
            console.log(
                '\t\t\t- minDstGas:',
                hre.SDK.config.MIN_GAS_FOR_PACKET_TYPE[packetType],
            );
            calls.push({
                target: contractToConf.address,
                callData:
                    TapiocaZ.BaseTOFT__factory.createInterface().encodeFunctionData(
                        'setMinDstGas',
                        [
                            target.lzChainId,
                            packetType,
                            hre.SDK.config.MIN_GAS_FOR_PACKET_TYPE[packetType],
                        ],
                    ),
                allowFailure: false,
            });
        }
    }

    return calls;
}
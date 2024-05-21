import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { getChainBy } from '../../../../api/utils';
import { BaseTapiocaOmnichainEngine__factory } from '../../../../typechain/tapioca-periph';
import { TapiocaMulticall } from '../../../../typechain/tapioca-periphery';
import {
    TContractWithChainInfo,
    getChainInfo,
    loadLocalContractOnAllChains,
} from '../../../utils';
import { TTapiocaDeployTaskArgs } from '../../DeployerVM';
import { useNetwork } from '../../utils';

export const setLzPeer__task = async (
    _taskArgs: TTapiocaDeployTaskArgs & {
        targetName: string;
    },
    hre: HardhatRuntimeEnvironment,
) => {
    console.log(`[+] Setting lzPeer for ${_taskArgs.targetName}...`);
    const chain = getChainInfo(hre);
    const { targetName, tag } = _taskArgs;
    const isTestnet = !!chain.tags.find((e) => e === 'testnet');
    const deployments = loadLocalContractOnAllChains(
        hre,
        targetName,
        tag,
        isTestnet,
    );

    if (deployments.length === 0) {
        throw new Error(
            `[-] No deployment found for contract ${targetName} on tag ${tag}`,
        );
    }

    for (const targetDep of deployments) {
        const targetChain = getChainBy('chainId', targetDep.chainInfo.chainId);
        // Not good
        await useNetwork(hre, targetChain.name); // Need to switch network to the target chain
        const VM = hre.SDK.DeployerVM.loadVM({ hre, tag }); // Need to load the VM for every chainID to get the right multicall instance

        console.log(
            `\t[+] Setting lzPeer on ${targetChain.name} for ${targetDep.deployment.address}...`,
        );
        const calls = populateCalls(hre, targetDep, deployments);
        console.log(
            '[!] Call might fail for some reasons, because of EthersJS bug, but forcing multicall works. Trace next Tx if needed.',
        );
        await VM.executeMulticall(calls);
    }

    // Switch back to the original network
    console.log(`[+] lzPeer setting for ${targetName} done!`);
    await useNetwork(hre, chain.name);
};

function populateCalls(
    hre: HardhatRuntimeEnvironment,
    targetDep: TContractWithChainInfo,
    deployments: TContractWithChainInfo[],
) {
    const contract = BaseTapiocaOmnichainEngine__factory.connect(
        targetDep.deployment.address,
        hre.ethers.provider.getSigner(),
    );

    const calls: TapiocaMulticall.CallStruct[] = [];
    const peers = deployments.filter(
        (e) => targetDep.chainInfo.chainId !== e.chainInfo.chainId,
    ); // Filter out the target chain
    for (const peer of peers) {
        console.log(
            `\t\t[+] Setting peer for ${peer.chainInfo.name} on ${peer.deployment.address}...`,
        );
        const dstContract = deployments.find(
            (e) => e.chainInfo.chainId === peer.chainInfo.chainId,
        )?.deployment.address;
        if (!dstContract) {
            console.log('[-] Deployments:');
            console.log(deployments);
            throw new Error(
                `[-] No deployment found for ${peer.chainInfo.name} on ${peer.chainInfo.chainId}`,
            );
        }
        calls.push({
            target: contract.address,
            callData: contract.interface.encodeFunctionData('setPeer', [
                peer.chainInfo.lzChainId,
                '0x'.concat(dstContract.slice(2).padStart(64, '0')),
            ]),
            allowFailure: false,
        });
    }
    return calls;
}

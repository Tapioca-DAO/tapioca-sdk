import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { getChainBy } from '../../../../api/utils';
import { BaseTapiocaOmnichainEngine__factory } from '../../../../typechain/tapioca-periph';
import { TapiocaMulticall } from '../../../../typechain/tapioca-periphery';
import { getChainInfo, loadLocalContractOnAllChains } from '../../../utils';
import { TTapiocaDeployTaskArgs } from '../../DeployerVM';
import { TContract } from '../../../../shared';
import { useNetwork } from '../../utils';

type TContractDeployment = TContract & {
    chainId: string;
};

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
        const targetChain = getChainBy('chainId', targetDep.chainId);
        // dangerous?
        await useNetwork(hre, targetChain.name); // Need to switch network to the target chain

        console.log(`\t[+] Setting lzPeer on ${targetChain.name}...`);

        const VM = hre.SDK.DeployerVM.loadVM({ hre, tag }); // Need to load the VM for every chainID to get the right multicall instance
        const calls = populateCalls(hre, targetDep, deployments);
        VM.executeMulticall(calls);
    }

    // Switch back to the original network
    await useNetwork(hre, chain.name);
    console.log(`[+] lzPeer setting for ${targetName} done!`);
};

function populateCalls(
    hre: HardhatRuntimeEnvironment,
    targetDep: TContractDeployment,
    deployments: TContractDeployment[],
) {
    const contract = BaseTapiocaOmnichainEngine__factory.connect(
        targetDep.address,
        hre.ethers.provider.getSigner(),
    );

    const calls: TapiocaMulticall.CallStruct[] = [];
    const peers = deployments.filter(
        (e: any) => targetDep.chainId !== e.chainId,
    );
    for (const peer of peers) {
        calls.push({
            target: contract.address,
            callData: contract.interface.encodeFunctionData('setPeer', [
                peer.chainId,
                '0x'.concat(contract.address.slice(2).padStart(64, '0')),
            ]),
            allowFailure: false,
        });
    }
    return calls;
}

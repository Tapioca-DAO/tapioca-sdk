import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { getChainBy } from '../../../../api/utils';
import { BaseTapiocaOmnichainEngine__factory } from '../../../../typechain/tapioca-periph';
import { TapiocaMulticall } from '../../../../typechain/tapioca-periphery';
import { getChainInfo, loadLocalContractOnAllChains } from '../../../utils';
import { TTapiocaDeployTaskArgs } from '../../DeployerVM';

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
    const VM = hre.SDK.DeployerVM.loadVM({ hre, tag });

    if (deployments.length === 0) {
        throw new Error(
            `[-] No deployment found for contract ${targetName} on tag ${tag}`,
        );
    }

    for (const deployment of deployments) {
        const targetChain = getChainBy('chainId', deployment.chainId);
        console.log(`\t[+] Setting lzPeer on ${targetChain.name}...`);

        const contract = BaseTapiocaOmnichainEngine__factory.connect(
            deployment.address,
            hre.ethers.provider.getSigner(),
        );

        const calls: TapiocaMulticall.CallStruct[] = [];
        const peers = deployments.filter(
            (e) => deployment.chainId !== e.chainId,
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
        VM.executeMulticall(calls);
    }

    console.log(`[+] lzPeer setting for ${targetName} done!`);
};

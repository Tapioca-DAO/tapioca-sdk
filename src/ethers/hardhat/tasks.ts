import { task } from 'hardhat/config';
import { getTapiocaProjects } from '../../api/utils';
import { getDeployment__task } from './tasks/view/getDeployment';
import { setTrustedRemote__task } from './tasks/exec/setTrustedRemote';
import { ConfigurableTaskDefinition } from 'hardhat/types';
import { batchSetAdapterParam__task } from './tasks/exec/batchSetAdapterParam';
import { BatchSetTrustedRemote__task } from './tasks/exec/batchSetTrustedRemote';
import { getChains__task } from './tasks/view/getChains';
import { setAdapterParam__task } from './tasks/exec/setAdapterParam';

const addCliParams = (task: ConfigurableTaskDefinition) => {
    return task.addOptionalParam(
        'tag',
        'The tag to lookup, if not specified, "default" will be used',
    );
};

/**
 * Getter tasks
 */
addCliParams(
    task(
        'getDeployment',
        'Get a deployment from the local or global database',
        getDeployment__task,
    )
        .addFlag('global', 'Perform a lookup in the global database')
        .addOptionalParam(
            'project',
            'The project to lookup, required if --global is specified. Can be one of: ' +
                getTapiocaProjects().join(', '),
        )
        .addOptionalParam(
            'contractName',
            'The name of the contract to lookup, if not specified, all contracts will be returned',
        ),
);

task(
    'getChains',
    'Get a list of supported chains. If no filter used, returns all chains',
    getChains__task,
)
    .addOptionalParam(
        'filter',
        'Type of filter to use, can be one of: "chainId", "lzChainId", "name"',
    )
    .addOptionalParam('value', 'Value to filter by');

/**
 * Exec tasks
 */

addCliParams(
    task(
        'batchSetAdapterParam',
        'Sets OFT to use adapter params and the minimum destination gas between all available tOFT contracts for the current chain',
        batchSetAdapterParam__task,
    )
        .addParam('contract', 'Contract name to filter by')
        .addOptionalParam('isToft', 'Use if contract is tOFT'),
);

addCliParams(
    task(
        'BatchSetTrustedRemote',
        'Set trusted remote between all available tOFT contracts for the current chain',
        BatchSetTrustedRemote__task,
    )
        .addParam('contract', 'Contract name to filter by')
        .addOptionalParam('isToft', 'Use if contract is tOFT'),
);

addCliParams(
    task(
        'setTrustedRemote',
        'Calls setTrustedRemote on TapOFT contract',
        setTrustedRemote__task,
    )
        .addParam('src', 'TapOFT source address')
        .addParam('dst', 'TapOFT destination address')
        .addOptionalParam('isToft', 'Use if contract is tOFT'),
);

addCliParams(
    task(
        'setAdapterParam',
        'Set min dest gas on dst with specific packet types on a TapOFT contract',
        setAdapterParam__task,
    )
        .addParam('src', 'TapOFT source address')
        .addParam('dst', 'TapOFT destination address')
        .addOptionalParam('isToft', 'Use if contract is tOFT'),
);

addCliParams(
    task(
        'toftSendFrom',
        'Calls toftSendFrom on tOFT contract',
        setAdapterParam__task,
    )
        .addParam('contractName', 'Name of the contract')
        .addParam('src', 'Name of the source chain')
        .addParam('dst', 'Name of the destination chain')
        .addParam('value', 'Amount to send, (ex: 1.45)'),
);

import { task } from 'hardhat/config';
import { ConfigurableTaskDefinition } from 'hardhat/types';
import { batchSetAdapterParam__task } from './tasks/exec/batchSetAdapterParam';
import { batchSetTrustedRemote__task } from './tasks/exec/batchSetTrustedRemote';
import { deployERC20Mock__task } from './tasks/exec/deployERC20Mock';
import { setLZConfig__task } from './tasks/exec/setLZConfig';
import { toftSendFrom__task } from './tasks/exec/toftSendFrom';
import { getChains__task } from './tasks/view/getChains';
import { getDeployment__task } from './tasks/view/getDeployment';

const addCliParams = (task: ConfigurableTaskDefinition) => {
    return task.addOptionalParam(
        'tag',
        'The tag to lookup, if not specified, "default" will be used',
    );
};

/**
 * Getter tasks
 */
task(
    'getDeployment',
    'Get a deployment from the local or global database',
    getDeployment__task,
).addFlag('global', 'Perform a lookup in the global database');

task(
    'getChains',
    'Get a list of supported chains. If no filter used, returns all chains',
    getChains__task,
).addOptionalParam(
    'filter',
    'Type of filter to use, can be one of: "chainId", "lzChainId", "name"',
);

/**
 * Exec tasks
 */

task(
    'batchSetAdapterParam',
    'Sets OFT to use adapter params and the minimum destination gas between all available tOFT contracts for the current chain',
    batchSetAdapterParam__task,
).addFlag('isToft', 'Use if contract is tOFT');

task(
    'batchSetTrustedRemote',
    'Set trusted remote between all available tOFT contracts for the current chain',
    batchSetTrustedRemote__task,
).addFlag('isToft', 'Use if contract is tOFT');

task(
    'deployERC20Mock',
    'Deploys an ERC20 mock contract',
    deployERC20Mock__task,
).addFlag('save', 'Save the deployment to the local database');

task('setLZConfig', 'Set an LZ app config', setLZConfig__task).addFlag(
    'isToft',
    'If the contract to configure is TOFT',
);

addCliParams(
    task(
        'toftSendFrom',
        'Calls toftSendFrom on tOFT contract',
        toftSendFrom__task,
    )
        .addParam('contractName', 'Name of the contract')
        .addParam('src', 'Name of the source chain')
        .addParam('dst', 'Name of the destination chain')
        .addParam('value', 'Amount to send, (ex: 1.45)'),
);

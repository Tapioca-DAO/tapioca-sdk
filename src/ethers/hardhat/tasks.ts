import { task } from 'hardhat/config';
import { ConfigurableTaskDefinition } from 'hardhat/types';
import { deployERC20Mock__task } from './tasks/exec/deployERC20Mock';
import { exportSDK__task } from './tasks/exec/exportSDK';
import { setLZConfig__task } from './tasks/exec/setLZConfig';
import { toftSendFrom__task } from './tasks/exec/toftSendFrom';
import { getChains__task } from './tasks/view/getChains';
import { getDeployment__task } from './tasks/view/getDeployment';
import { transferOwnership__task } from './tasks/exec/transferOwnership';
import { deployMagnetar__task } from './tasks/exec/deployMagnetar';

const addCliParams = (task: ConfigurableTaskDefinition) => {
    return task.addOptionalParam(
        'tag',
        'The tag to lookup, if not specified, "default" will be used',
    );
};

const addDebugModeParams = (task: ConfigurableTaskDefinition) => {
    return task.addOptionalParam('debugMode', 'true/false');
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
).addFlag(
    'filter',
    'Use if you want to filter the list of chains by the current network',
);

/**
 * Exec tasks
 */

task(
    'exportSDK',
    'Generate and export the typings and/or addresses for the SDK.',
    exportSDK__task,
).addOptionalParam('tag', 'The tag of the deployment.');

task('transferOwnership', 'Transfer ownership.', transferOwnership__task)
    .addParam('to', 'The new owner.')
    .addParam('targetAddress', 'Contract address to call transferOwnership for')
    .addParam('targetName', 'Contract name to call transferOwnership for')
    .addOptionalParam('fromMultisig', 'True if current owner is a multisig')
    .addOptionalParam('fromMulticall', 'True if current owner is a multicall');

addDebugModeParams(
    task(
        'deployERC20Mock',
        'Deploys an ERC20 mock contract',
        deployERC20Mock__task,
    ).addFlag('save', 'Save the deployment to the local database'),
);

addDebugModeParams(
    task('deployMagnetar', 'Deploys Magnetar', deployMagnetar__task),
);

addDebugModeParams(
    task('setLZConfig', 'Set an LZ app config', setLZConfig__task).addFlag(
        'isToft',
        'If the contract to configure is TOFT',
    ),
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

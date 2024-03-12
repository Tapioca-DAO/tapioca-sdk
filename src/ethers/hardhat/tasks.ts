import { scope } from 'hardhat/config';
import { ConfigurableTaskDefinition } from 'hardhat/types';
import { exportSDK__task } from './tasks/exec/exportSDK';
import { transferOwnership__task } from './tasks/exec/transferOwnership';
import { getChains__task } from './tasks/view/getChains';
import { getDeployment__task } from './tasks/view/getDeployment';

const sdkScope = scope('sdk', 'Tapioca SDK tasks');

/**
 * Wraps a task with common parameters for deployment tasks. This includes the tag, load and verify flags.
 * --tag <tag> - The tag to use for the deployment. Defaults to "default" if not specified.
 * --load - Load the contracts from the database instead of building them.
 * --verify - Add to verify the contracts after deployment.
 *
 * @param task The task to overload.
 * @returns The overloaded task.
 */
export const TAP_TASK = (task: ConfigurableTaskDefinition) =>
    task
        .addOptionalParam(
            'tag',
            'The tag to use for the deployment. Defaults to "default" if not specified.',
            'default',
        )
        .addFlag(
            'load',
            'Load the contracts from the database instead of building them.',
        )
        .addFlag('verify', 'Add to verify the contracts after deployment.');

/**
 * Getter tasks
 */
sdkScope
    .task(
        'getDeployment',
        'Get a deployment from the local or global database',
        getDeployment__task,
    )
    .addFlag('global', 'Perform a lookup in the global database');

sdkScope
    .task(
        'getChains',
        'Get a list of supported chains. If no filter used, returns all chains',
        getChains__task,
    )
    .addFlag(
        'filter',
        'Use if you want to filter the list of chains by the current network',
    );

/**
 * Exec tasks
 */

sdkScope
    .task(
        'exportSDK',
        'Generate and export the typings and/or addresses for the SDK.',
        exportSDK__task,
    )
    .addOptionalParam('tag', 'The tag of the deployment.');

sdkScope
    .task('transferOwnership', 'Transfer ownership.', transferOwnership__task)
    .addParam('to', 'The new owner.')
    .addParam('targetAddress', 'Contract address to call transferOwnership for')
    .addParam('targetName', 'Contract name to call transferOwnership for')
    .addOptionalParam('fromMultisig', 'True if current owner is a multisig')
    .addOptionalParam('fromMulticall', 'True if current owner is a multicall');

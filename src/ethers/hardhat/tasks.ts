import { scope, types } from 'hardhat/config';
import { ConfigurableTaskDefinition } from 'hardhat/types';
import { exportSDK__task } from './tasks/exec/exportSDK';
import { transferOwnership__task } from './tasks/exec/transferOwnership';
import { getChains__task } from './tasks/view/getChains';
import { getDeployment__task } from './tasks/view/getDeployment';
import { deployUniV3pool__task } from './tasks/exec/deployUniV3Pool';
import { exportDep__task } from './tasks/exec/exportDep';
import { setLzPeer__task } from './tasks/exec/setLzPeer';
import { createEmptyStratYbAsset__task } from './tasks/exec/createEmptyStratYbAsset';

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
        .addOptionalVariadicPositionalParam(
            'deployOnly',
            'list of contracts to deploy only',
        )
        .addFlag(
            'load',
            'Load the contracts from the database instead of building them.',
        )
        .addFlag('verify', 'Add to verify the contracts after deployment.')
        .addFlag(
            'skipSetup',
            'Skip the setup of the deployment and will only deploy the contracts.',
        );

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

TAP_TASK(
    sdkScope.task(
        'exportDep',
        'Export the local deployment for a given tag to the SDK.',
        exportDep__task,
    ),
);

sdkScope
    .task('transferOwnership', 'Transfer ownership.', transferOwnership__task)
    .addParam('to', 'The new owner.')
    .addParam('targetAddress', 'Contract address to call transferOwnership for')
    .addParam('targetName', 'Contract name to call transferOwnership for')
    .addOptionalParam('fromMultisig', 'True if current owner is a multisig')
    .addOptionalParam('fromMulticall', 'True if current owner is a multicall');

TAP_TASK(
    sdkScope
        .task('deployUniV3Pool', 'Deploy a UniV3 pool', deployUniV3pool__task)
        .addParam(
            'token0',
            'The address of the first token in the pool. Order does not matter.',
        )
        .addParam(
            'token1',
            'The address of the second token in the pool. Order does not matter.',
        )
        .addParam(
            'ratio0',
            'The ratio of token0 in the pool. Used to compute the price by dividing by ratio1.',
        )
        .addParam(
            'ratio1',
            'The ratio of token1 in the pool. Used to compute the price by being divided by ratio0.',
        )
        .addParam(
            'positionManager',
            'The address of the non fungible position manager contract.',
        )
        .addParam('factory', 'The address of the v3 core factory contract.')
        .addOptionalParam(
            'feeTier',
            'The fee tier for the pool. Default is 3000.',
            3000,
            types.int,
        ),
);

TAP_TASK(
    sdkScope
        .task(
            'setLzPeer',
            'Layer zero peer contract setup. Linking 2 contracts together',
            setLzPeer__task,
        )
        .addParam(
            'targetName',
            'The name of the deployment contract to set the lzPeer for. NEEDS to be deployed on every chain you want to link to.',
        ),
);

TAP_TASK(
    sdkScope
        .task(
            'createEmptyStratYbAsset',
            'Deploys an empty strat and register the token as an asset on YieldBox with the strat',
            createEmptyStratYbAsset__task,
        )
        .addParam('token', 'The address of the token to deploy.')
        .addParam('deploymentName', 'The name of the deployment.'),
);

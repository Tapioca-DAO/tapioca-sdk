import { task } from 'hardhat/config';
import { getTapiocaProjects } from '../../api/utils';
import { getDeployment__task } from './tasks/getDeployment';
import { setAdapterParam__task } from './tasks/setAdapterParam';
import { setTrustedRemote__task } from './tasks/setTrustedRemote';

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
        'tag',
        'The tag to lookup, if not specified, "default" will be used',
    )
    .addOptionalParam(
        'contractName',
        'The name of the contract to lookup, if not specified, all contracts will be returned',
    );

task(
    'setAdapterParam',
    'Sets OFT to use adapter params and the minimum destination gas between all available tOFT contracts for the current chain',
    setAdapterParam__task,
).addParam('contract', 'Contract name to filter by');

task(
    'setTrustedRemote',
    'Set trusted remote between all available tOFT contracts for the current chain',
    setTrustedRemote__task,
).addParam('contract', 'Contract name to filter by');

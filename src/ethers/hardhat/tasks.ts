import { task } from 'hardhat/config';
import { getTapiocaProjects } from '../../api/utils';
import { getDeployment__task } from './tasks/getDeployment';

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

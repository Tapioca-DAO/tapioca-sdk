import { task } from 'hardhat/config';
import { getTapiocaProjects } from '../../api/utils';
import { getDeployment__task } from './tasks/getDeployment';
import { batchSetAdapterParam__task } from './tasks/batchSetAdapterParam';
import { BatchSetTrustedRemote__task } from './tasks/batchSetTrustedRemote';
import { setTrustedRemote__task } from './tasks/setTrustedRemote';
import { ConfigurableTaskDefinition } from 'hardhat/types';

const addCliParams = (task: ConfigurableTaskDefinition) => {
    return task.addOptionalParam(
        'tag',
        'The tag to lookup, if not specified, "default" will be used',
    );
};

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
            'tag',
            'The tag to lookup, if not specified, "default" will be used',
        )
        .addOptionalParam(
            'contractName',
            'The name of the contract to lookup, if not specified, all contracts will be returned',
        ),
);

addCliParams(
    task(
        'batchSetAdapterParam',
        'Sets OFT to use adapter params and the minimum destination gas between all available tOFT contracts for the current chain',
        batchSetAdapterParam__task,
    ).addParam('contract', 'Contract name to filter by'),
);

addCliParams(
    task(
        'BatchSetTrustedRemote',
        'Set trusted remote between all available tOFT contracts for the current chain',
        BatchSetTrustedRemote__task,
    ).addParam('contract', 'Contract name to filter by'),
);

addCliParams(
    task(
        'setTrustedRemote',
        'Calls setTrustedRemote on TapOFT contract',
        setTrustedRemote__task,
    )
        .addParam(
            'contractName',
            'Name of the contract to set trusted remote for',
        )
        .addParam('src', 'TapOFT source address')
        .addParam('dst', 'TapOFT destination address')
        .addOptionalParam(
            'lzChain',
            'LZ destination chain id for trusted remotes. Default to current network',
        ),
);

import { HardhatRuntimeEnvironment } from 'hardhat/types';
import inquirer from 'inquirer';
import { TGET_CHAIN_BY_FILTER } from '../../../../api/utils';

export const getChains__task = async function (
    taskArgs: {
        filter?: boolean;
    },
    hre: HardhatRuntimeEnvironment,
) {
    const supportedChains = hre.SDK.utils.getSupportedChains();
    if (taskArgs.filter) {
        const filterChoices: TGET_CHAIN_BY_FILTER[] = [
            'name',
            'lzChainId',
            'chainId',
        ];

        const { filter } = await inquirer.prompt({
            type: 'list',
            name: 'filter',
            message: 'Filter by:',
            choices: filterChoices,
        });

        const valueChoices = supportedChains.map(
            (e) => e[filter as TGET_CHAIN_BY_FILTER],
        );
        const { value } = await inquirer.prompt({
            type: 'list',
            name: 'value',
            message: 'Value of the filter:',
            choices: valueChoices,
        });

        return console.log(
            JSON.stringify(hre.SDK.utils.getChainBy(filter, value), null, 2),
        );
    }

    console.log(JSON.stringify(supportedChains, null, 2));
};

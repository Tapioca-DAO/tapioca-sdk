import { HardhatRuntimeEnvironment } from 'hardhat/types';

export const getChains__task = async function (
    taskArgs: {
        filter?: 'name' | 'chainId' | 'lzChainId';
        value?: string;
    },
    hre: HardhatRuntimeEnvironment,
) {
    const { filter, value } = taskArgs;
    if (filter) {
        if (!value)
            throw new Error('[-] SDK: Please specify a value to filter by');
        return console.log(
            JSON.stringify(hre.SDK.utils.getChainBy(filter, value), null, 2),
        );
    }
    console.log(JSON.stringify(hre.SDK.utils.getSupportedChains(), null, 2));
};

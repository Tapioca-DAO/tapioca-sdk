import { task } from 'hardhat/config';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

task('testAPI', 'Run tests', async ({}, hre: HardhatRuntimeEnvironment) => {
    console.log('test');
});

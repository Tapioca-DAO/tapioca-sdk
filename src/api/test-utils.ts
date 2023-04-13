import { time } from '@nomicfoundation/hardhat-network-helpers';
import { BigNumberish } from 'ethers';
import { ethers } from 'hardhat';
import {
    YieldBox__factory,
    YieldBoxURIBuilder__factory,
    ERC20WithoutStrategy__factory,
    YieldBox,
} from '../typechain/YieldBox';
import {
    Singularity,
    Penrose,
    Penrose__factory,
} from '../typechain/Tapioca-Bar';

import {
    OracleMock__factory,
    ERC20Mock__factory,
} from '../typechain/tapioca-mocks';

ethers.utils.Logger.setLogLevel(ethers.utils.Logger.levels.ERROR);
const verifyEtherscanQueue: { address: string; args: any[] }[] = [];

async function resetVM() {
    await ethers.provider.send('hardhat_reset', []);
}

export function BN(n: BigNumberish) {
    return ethers.BigNumber.from(n.toString());
}

export async function setBalance(addr: string, ether: number) {
    await ethers.provider.send('hardhat_setBalance', [
        addr,
        ethers.utils.hexStripZeros(ethers.utils.parseEther(String(ether))._hex),
    ]);
}

const __wethUsdcPrice = BN(1000).mul((1e18).toString());

const verifyEtherscan = async (
    address: string,
    args: any[],
    staging?: boolean,
) => {
    if (staging) {
        verifyEtherscanQueue.push({ address, args });
    }
};

async function registerERC20Tokens(deployer: any, staging?: boolean) {
    const mintLimitERC20 = ethers.BigNumber.from((1e18).toString()).mul(1e15);
    const supplyStart = ethers.BigNumber.from((1e18).toString()).mul(1e9);
    const mintLimitWbtc = ethers.BigNumber.from((1e8).toString()).mul(1e15);
    const supplyStartWbtc = ethers.BigNumber.from((1e8).toString()).mul(1e9);

    const ERC20Mock = new ERC20Mock__factory(deployer);

    //Deploy USDC
    const usdc = await ERC20Mock.deploy(
        'USDC Mock',
        'USDCM',
        supplyStart,
        18,
        deployer.address,
    );
    log(
        `Deployed USDC ${usdc.address} with args [${supplyStart},18, ${mintLimitERC20}]`,
        staging,
    );

    //Deploy WBTC
    const wbtc = await ERC20Mock.deploy(
        'WBTC Mock',
        'WBTCM',
        supplyStartWbtc,
        8,
        deployer.address,
    );
    log(
        `Deployed WBTC ${wbtc.address} with args [${supplyStartWbtc},8,${mintLimitWbtc}]`,
        staging,
    );

    //Deploy TAP
    const tap = await ERC20Mock.deploy(
        'TAP Mock',
        'TAPM',
        supplyStart,
        18,
        deployer.address,
    );
    log(
        `Deployed TAP ${tap.address} with args [${supplyStart},18,${mintLimitERC20}]`,
        staging,
    );

    // Deploy WETH
    const weth = await ERC20Mock.deploy(
        'WETH Mock',
        'WETHM',
        supplyStart,
        18,
        deployer.address,
    );
    log(`Deployed WETH ${weth.address} with no arguments`, staging);

    await verifyEtherscan(
        usdc.address,
        [supplyStart, 18, mintLimitERC20],
        staging,
    );
    await verifyEtherscan(
        tap.address,
        [supplyStart, 18, mintLimitERC20],
        staging,
    );
    await verifyEtherscan(
        wbtc.address,
        [supplyStart, 8, mintLimitWbtc],
        staging,
    );
    await verifyEtherscan(weth.address, [mintLimitERC20], staging);

    return { usdc, weth, tap, wbtc };
}

async function registerYieldBox(deployer: any, staging?: boolean) {
    const YieldBoxURIBuilder = new YieldBoxURIBuilder__factory(deployer);
    const YieldBox = new YieldBox__factory(deployer);

    // Deploy URIBuilder
    const uriBuilder = await YieldBoxURIBuilder.deploy();
    log(
        `Deployed YieldBoxURIBuilder ${uriBuilder.address} with no arguments`,
        staging,
    );

    // Deploy yieldBox
    const yieldBox = await YieldBox.deploy(
        ethers.constants.AddressZero,
        uriBuilder.address,
    );
    log(
        `Deployed YieldBox ${yieldBox.address} with args [${ethers.constants.AddressZero}, ${uriBuilder.address}] `,
        staging,
    );

    await verifyEtherscan(uriBuilder.address, [], staging);
    await verifyEtherscan(
        yieldBox.address,
        [ethers.constants.AddressZero, uriBuilder.address],
        staging,
    );

    return { uriBuilder, yieldBox };
}

async function registerPenrose(
    deployer: any,
    yieldBox: string,
    tapAddress: string,
    wethAddress: string,
    staging?: boolean,
) {
    const Penrose = new Penrose__factory(deployer);

    const bar = await Penrose.deploy(
        yieldBox,
        tapAddress,
        wethAddress,
        deployer,
    );
    log(
        `Deployed Penrose ${bar.address} with args [${yieldBox}, ${tapAddress}, ${wethAddress}]`,
        staging,
    );
    await verifyEtherscan(
        bar.address,
        [yieldBox, tapAddress, wethAddress],
        staging,
    );

    return { bar };
}

async function setPenroseAssets(
    deployer: any,
    yieldBox: YieldBox,
    bar: Penrose,
    usdcAddress: string,
    wbtcAddress: string,
) {
    const wethAssetId = await bar.wethAssetId();

    const usdcStrategy = await createTokenEmptyStrategy(
        deployer,
        yieldBox.address,
        usdcAddress,
    );
    await (
        await yieldBox.registerAsset(1, usdcAddress, usdcStrategy.address, 0)
    ).wait();
    const usdcAssetId = await yieldBox.ids(
        1,
        usdcAddress,
        usdcStrategy.address,
        0,
    );

    const wbtcStrategy = await createTokenEmptyStrategy(
        deployer,
        yieldBox.address,
        wbtcAddress,
    );
    await (
        await yieldBox.registerAsset(1, wbtcAddress, wbtcStrategy.address, 0)
    ).wait();
    const wbtcAssetId = await yieldBox.ids(
        1,
        wbtcAddress,
        wbtcStrategy.address,
        0,
    );

    return {
        wethAssetId,
        usdcAssetId,
        wbtcAssetId,
        usdcStrategy,
        wbtcStrategy,
    };
}
export async function createTokenEmptyStrategy(
    deployer: any,
    yieldBox: string,
    token: string,
) {
    const ERC20WithoutStrategy = new ERC20WithoutStrategy__factory(deployer);
    const noStrategy = await ERC20WithoutStrategy.deploy(yieldBox, token);
    await noStrategy.deployed();
    return noStrategy;
}

const log = (message: string, staging?: boolean) =>
    staging && console.log(message);
export async function register(staging?: boolean) {
    if (!staging) {
        await resetVM();
    }

    const deployer = (await ethers.getSigners())[0];
    const eoas = await ethers.getSigners();
    eoas.shift(); //remove deployer

    const eoa1 = new ethers.Wallet(
        ethers.Wallet.createRandom().privateKey,
        ethers.provider,
    );

    if (!staging) {
        await setBalance(eoa1.address, 100000);
    }

    // ------------------- Deploy WethUSDC mock oracle -------------------
    log('Deploying WethUSDC mock oracle', staging);
    const OracleMock = new OracleMock__factory(deployer);
    const wethUsdcOracle = await OracleMock.deploy(
        'WETHMOracle',
        'WETHMOracle',
        (1e18).toString(),
    );

    log(
        `Deployed WethUSDC mock oracle ${wethUsdcOracle.address} with no arguments `,
        staging,
    );
    await (await wethUsdcOracle.set(__wethUsdcPrice)).wait();
    await verifyEtherscan(wethUsdcOracle.address, [], staging);
    log('Price was set for WethUSDC mock oracle ', staging);

    // ------------------- 1  Deploy tokens -------------------
    log('Deploying Tokens', staging);
    const { usdc, weth, tap, wbtc } = await registerERC20Tokens(
        deployer,
        staging,
    );
    log(
        `Deployed Tokens ${tap.address}, ${usdc.address}, ${weth.address}, ${wbtc.address}`,
        staging,
    );

    // -------------------  2 Deploy Yieldbox -------------------
    log('Deploying YieldBox', staging);
    const { yieldBox, uriBuilder } = await registerYieldBox(deployer, staging);
    log(`Deployed YieldBox ${yieldBox.address}`, staging);

    // ------------------- 2.1 Deploy Penrose -------------------
    log('Deploying Penrose', staging);
    const { bar } = await registerPenrose(
        deployer,
        yieldBox.address,
        tap.address,
        weth.address,
        staging,
    );
    log(`Deployed Penrose ${bar.address}`, staging);

    // -------------------  3 Add asset types to Penrose -------------------
    log('Setting Penrose assets', staging);
    const {
        usdcAssetId,
        wethAssetId,
        wbtcAssetId,
        usdcStrategy,
        wbtcStrategy,
    } = await setPenroseAssets(
        deployer,
        yieldBox,
        bar,
        usdc.address,
        wbtc.address,
    );
    log(
        `Penrose assets were set USDC: ${usdcAssetId}, WETH: ${wethAssetId}, WBTC: ${wbtcAssetId}`,
        staging,
    );

    const initialSetup = {
        deployer,
        eoas,
        eoa1,
    };

    const timeTravel = async (seconds: number) => {
        await time.increase(seconds);
    };

    const utilFuncs = {
        BN,
        timeTravel,
    };

    return { ...initialSetup, ...utilFuncs, verifyEtherscanQueue };
}

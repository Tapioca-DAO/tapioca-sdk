import { Signer } from 'ethers';
import __deployments from './addresses.json';

import { loadGovernanceContracts } from './utils';

//Fee distributor helpers
export const getVeBalance = async (signer: Signer, timestamp: number) => {
    const contracts = loadGovernanceContracts(signer);
    const signerAddress = await signer.getAddress();

    return await contracts.feeDistributor.ve_for_at(signerAddress, timestamp);
};

export const claimFees = async (signer: Signer, lock: boolean) => {
    const contracts = loadGovernanceContracts(signer);
    const signerAddress = await signer.getAddress();

    await contracts.feeDistributor
        .connect(signer)
        ['claim(address,bool)'](signerAddress, lock);
};

//Voting escrow helpers
export const getLocktime = async (signer: Signer) => {
    const contracts = loadGovernanceContracts(signer);
    const signerAddress = await signer.getAddress();

    return await contracts.veTap.locked__end(signerAddress);
};

export const createLock = async (
    signer: Signer,
    lockAmount: number,
    newLockTimestamp: number,
    needsApproval?: boolean,
) => {
    const contracts = loadGovernanceContracts(signer);

    if (needsApproval) {
        await contracts.tapOFT
            .connect(signer)
            .approve(contracts.veTap.address, lockAmount);
    }
    await contracts.veTap
        .connect(signer)
        ['create_lock(uint256,uint256)'](lockAmount, newLockTimestamp);
};
export const withdrawLock = async (signer: Signer) => {
    const contracts = loadGovernanceContracts(signer);
    await contracts.veTap.connect(signer)['withdraw()']();
};

export const increaseLockTime = async (
    signer: Signer,
    newLockTimestamp: number,
) => {
    const contracts = loadGovernanceContracts(signer);

    await contracts.veTap
        .connect(signer)
        .increase_unlock_time(newLockTimestamp);
};

export const increaseLockAmount = async (
    signer: Signer,
    lockAmount: number,
    needsApproval?: boolean,
) => {
    const contracts = loadGovernanceContracts(signer);

    if (needsApproval) {
        await contracts.tapOFT
            .connect(signer)
            .approve(contracts.veTap.address, lockAmount);
    }
    await contracts.veTap.connect(signer).increase_amount(lockAmount);
};

//Gauge controller helpers
export const getGaugeWeight = async (
    signer: Signer,
    gaugeAddress: string,
    getRelativeWeight: boolean,
) => {
    const contracts = loadGovernanceContracts(signer);
    if (getRelativeWeight) {
        return await contracts.gaugeController[
            'gauge_relative_weight(address)'
        ](gaugeAddress);
    }

    return await contracts.gaugeController.get_gauge_weight(gaugeAddress);
};

export const getUsedPower = async (signer: Signer) => {
    const contracts = loadGovernanceContracts(signer);
    const signerAddress = await signer.getAddress();
    return await contracts.gaugeController['vote_user_power(address)'](
        signerAddress,
    );
};

export const getUserInfo = async (signer: Signer, gaugeAddress: string) => {
    const contracts = loadGovernanceContracts(signer);
    const signerAddress = await signer.getAddress();

    const usedPower = await contracts.gaugeController[
        'vote_user_power(address)'
    ](signerAddress);
    const userSlope = await contracts.gaugeController.vote_user_slopes(
        signerAddress,
        gaugeAddress,
    );

    const lastVote = await contracts.gaugeController.last_user_vote(
        signerAddress,
        gaugeAddress,
    );

    return {
        usedPower,
        userSlope,
        lastVote,
    };
};

export const getGaugeInfo = async (signer: Signer, gaugeAddress: string) => {
    const contracts = loadGovernanceContracts(signer);

    const totalWeight = await contracts.gaugeController.get_total_weight();

    const gaugeWeight = await contracts.gaugeController.get_gauge_weight(
        gaugeAddress,
    );
    const gaugeRelativeWeight = await contracts.gaugeController[
        'gauge_relative_weight(address)'
    ](gaugeAddress);

    return {
        totalWeight,
        gaugeWeight,
        gaugeRelativeWeight,
    };
};

export const voteForGauge = async (
    signer: Signer,
    gaugeAddress: string,
    power: number,
) => {
    const contracts = loadGovernanceContracts(signer);
    await contracts.gaugeController
        .connect(signer)
        .vote_for_gauge_weights(gaugeAddress, power);
};

export const checkpoint = async (signer: Signer) => {
    const contracts = loadGovernanceContracts(signer);
    await contracts.gaugeController.connect(signer)['checkpoint()']();
};

//Minter helpers
export const mint = async (
    signer: Signer,
    gauges: [string, string, string, string, string, string, string, string],
    all: boolean,
) => {
    const contracts = loadGovernanceContracts(signer);
    if (all) {
        await contracts.minter.connect(signer).mint(gauges[0]);
    } else {
        await contracts.minter.connect(signer).mint_many(gauges);
    }
};

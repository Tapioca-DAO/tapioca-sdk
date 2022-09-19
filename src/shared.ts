import { getChainIDs } from './api/utils';

// Helper types
export type HLP_TChain = ReturnType<typeof getChainIDs>[number];

export const DEPLOYMENT_SDK_PATH = 'tapioca-sdk/src/DEPLOYMENTS.json';

export type TContract = { name: string; address: string; meta: any };
export type TProjectDeployment = {
    [chainID in HLP_TChain]?: TContract[];
} & {
    [chainId: string]: TContract[];
};

export type TProjectCaller = 'TapiocaZ' | 'Tap-Token' | 'Tapioca-Bar';
export type TDeployment = {
    [project in TProjectCaller]?: TProjectDeployment;
};

import { TAPIOCA_PROJECTS_NAME } from './api/config';
import { getChainIDs } from './api/utils';

// Helper type of the supported chain IDs
export type HLP_TChain = ReturnType<typeof getChainIDs>[number];

// The project caller is the name of the project that is calling the SDK
export type TProjectCaller = TAPIOCA_PROJECTS_NAME;

// A contract is a deployed contract
export type TContract = {
    name: string;
    address: string;
    meta: {
        blockHeight: number;
        deploymentArgs: { arg: string; description: string }[];
    } & any;
};

export type TChainIdDeployment = {
    name: string; // The name of the chain
    lastBlockHeight: number; // The last block number used for a deployment
    contracts: TContract[];
};

// A local deployment is a deployment of a single project, contracts are deployed per chain
export type TLocalDeployment = {
    [chainID in HLP_TChain]?: TChainIdDeployment;
} & {
    [chainId: string]: TChainIdDeployment;
};

// A local database is a local deployment per tag
export type TLocalDatabase = {
    [tag: string]: TLocalDeployment;
};

// A global deployment is the aggregation of all project deployments, exported to the SDK
export type TGlobalDeployment = {
    [project in TProjectCaller]?: TLocalDeployment;
};
// A global database is a global deployment per tag
export type TGlobalDatabase = {
    [tag: string]: TGlobalDeployment;
};

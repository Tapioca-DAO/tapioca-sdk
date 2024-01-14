/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  GLPOracle,
  GLPOracleInterface,
} from "../../../../../contracts/oracle/implementations/Arbitrum/GLPOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IGmxGlpManager",
        name: "glpManager_",
        type: "address",
      },
      {
        internalType: "address",
        name: "_sequencerUptimeFeed",
        type: "address",
      },
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "schedule",
        type: "uint48",
      },
    ],
    name: "AccessControlEnforcedDefaultAdminDelay",
    type: "error",
  },
  {
    inputs: [],
    name: "AccessControlEnforcedDefaultAdminRules",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "defaultAdmin",
        type: "address",
      },
    ],
    name: "AccessControlInvalidDefaultAdmin",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "GracePeriodNotOver",
    type: "error",
  },
  {
    inputs: [],
    name: "SequencerDown",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [],
    name: "DefaultAdminDelayChangeCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint48",
        name: "newDelay",
        type: "uint48",
      },
      {
        indexed: false,
        internalType: "uint48",
        name: "effectSchedule",
        type: "uint48",
      },
    ],
    name: "DefaultAdminDelayChangeScheduled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "DefaultAdminTransferCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint48",
        name: "acceptSchedule",
        type: "uint48",
      },
    ],
    name: "DefaultAdminTransferScheduled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GRACE_PERIOD_TIME",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SEQUENCER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SEQUENCER_UPTIME_FEED",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "acceptDefaultAdminTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "beginDefaultAdminTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cancelDefaultAdminTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "newDelay",
        type: "uint48",
      },
    ],
    name: "changeDefaultAdminDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_gracePeriod",
        type: "uint32",
      },
    ],
    name: "changeGracePeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultAdminDelay",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultAdminDelayIncreaseWait",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "get",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "peek",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "peekSpot",
    outputs: [
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingDefaultAdmin",
    outputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
      {
        internalType: "uint48",
        name: "schedule",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingDefaultAdminDelay",
    outputs: [
      {
        internalType: "uint48",
        name: "newDelay",
        type: "uint48",
      },
      {
        internalType: "uint48",
        name: "schedule",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rollbackDefaultAdminDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c0346200013757601f620014c338819003918201601f19168301916001600160401b038311848410176200013c57808492606094604052833981010312620001375780516001600160a01b03919082811681036200013757826200007560406200006d6020860162000152565b940162000152565b92610e1063ffffffff1960005416176000551660805282821680156200011e57600280546001600160d01b03166107e960d71b1790556003549384166200010c57620000e29360018060a01b03191617600355620000d38262000167565b50600160045560a052620001e8565b5060405161121790816200028c823960805181818161046c0152611013015260a05181610f870152f35b604051631fe1e13d60e11b8152600490fd5b604051636116401160e11b815260006004820152602490fd5b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036200013757565b6001600160a01b031660008181527fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb49602052604081205490919060ff16620001e45781805260016020526040822081835260205260408220600160ff198254161790553391600080516020620014a38339815191528180a4600190565b5090565b6001600160a01b031660008181527f4b930e9ea73c63337f2bee13156cf94ac5542ea204251f1820c7e2062aea51c260205260408120549091907fac4f1890dc96c9a02330d1fa696648a38f3b282d2449c2d8e6f10507488c84c89060ff16620002865780835260016020526040832082845260205260408320600160ff19825416179055600080516020620014a3833981519152339380a4600190565b50509056fe60806040908082526004908136101561001757600080fd5b600091823560e01c91826301ffc9a714610a7657508163022d63fb14610a585781630aa6220b146109d5578163248a9ca3146109aa5781632f2ff15d14610967578163313ce5671461094b57816336568abe14610862578163408b0546146107de5781634842855c146107b5578163634e93da146106ea578163649a5ec71461058c57816384ef8ffc146105635781638da5cb5b1461056357816391d1485414610517578163a1eda53c146104b6578163a217fddf1461049b578163c598018214610457578163c699c4d61461028a578163cc8463c81461042b578163cefc142914610343578163cf6eefb714610308578163d39bbef0146102e4578163d547741f1461028f578163d568866c1461028a578163d602b9fd14610230578163d6d7d525146101ab57508063ed2f8603146101845763eeb8a8d31461015a57600080fd5b34610181575061016936610b17565b5050610173610f6b565b815190600182526020820152f35b80fd5b5090346101a757816003193601126101a75763ffffffff60209254169051908152f35b5080fd5b9190503461018157506101bd36610b17565b505060028154146101ee57600281556101d4611011565b60016101de610f6b565b9155815190600182526020820152f35b6020606492519162461bcd60e51b8352820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152fd5b8234610181578060031936011261018157610249610c01565b65ffffffffffff610258610e59565b600280546001600160d01b03191690559190911690506102755780f35b6000805160206111828339815191528180a180f35b610b61565b9050346101a757826003193601126101a75780356102ab610ae3565b9181156102d657506102cd60018495836102d296528160205286200154610c47565b610d48565b5080f35b8451631fe1e13d60e11b8152fd5b8284346101a7576020906102f736610b17565b5050610301610f6b565b9051908152f35b5050346101815780600319360112610181575065ffffffffffff61032a610e59565b83516001600160a01b0390921682529091166020820152f35b8284346101a757816003193601126101a75761035d610e59565b506001600160a01b039081163303610415579065ffffffffffff91610380610e59565b9093168015801561040b575b6103f55750600380546001600160a01b03198082169092559091906103b2908216610d8d565b50600354928184166103e657506103d29495508316911617600355610c6d565b50600280546001600160d01b031916905580f35b51631fe1e13d60e11b81528690fd5b856024918451916319ca5ebb60e01b8352820152fd5b504281101561038c565b8151636116401160e11b81523381860152602490fd5b8284346101a757816003193601126101a75760209065ffffffffffff61044f610e78565b915191168152f35b8284346101a757816003193601126101a757517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b8284346101a757816003193601126101a75751908152602090f35b5050346101815780600319360112610181576003548060d01c918215158061050d575b156104ff575065ffffffffffff6104fb9160a01c1691925b5192839283610afe565b0390f35b928392506104fb91506104f1565b50428310156104d9565b8391503461055f578160031936011261055f578160209360ff92610539610ae3565b90358252600186528282206001600160a01b039091168252855220549151911615158152f35b8280fd5b8284346101a757816003193601126101a75760035490516001600160a01b039091168152602090f35b8284346101a75760203660031901126101a757823565ffffffffffff808216908183036106e6576105bb610c01565b6105c442610ee1565b91816105ce610e78565b16808211156106ab57509495506000805160206111c2833981519152946106549261060a92909162069780808210156106a457505b1690610eb1565b926003548060d01c8061065a575b5050600380546001600160a01b031660a085901b65ffffffffffff60a01b161760d086901b6001600160d01b0319161790555192839283610afe565b0390a180f35b42111561068c57600280546001600160d01b031660309290921b6001600160d01b0319169190911790555b8680610618565b506000805160206111628339815191528680a1610685565b9050610603565b039081116106d3576000805160206111c28339815191529495506106549161060a9190610eb1565b634e487b7160e01b855260118652602485fd5b8480fd5b8391503461055f57602036600319011261055f57356001600160a01b038116919082900361055f5760207f3377dc44241e779dd06afab5b788a35ca5f3b778836e2990bdb26a2a4b2e5ed69161073e610c01565b61075861074a42610ee1565b610752610e78565b90610eb1565b90610761610e59565b600280546001600160d01b031916881760a086901b65ffffffffffff60a01b1617905565ffffffffffff929150821661079e575b5191168152a280f35b6000805160206111828339815191528780a1610795565b8284346101a757816003193601126101a757602090516000805160206111428339815191528152f35b8391503461055f57602036600319011261055f5780359163ffffffff831680930361085e5760008051602061114283398151915290818552600160205280852033865260205260ff8186205416156108425750505063ffffffff1982541617815580f35b60449350519163e2517d3f60e01b835233908301526024820152fd5b8380fd5b8284346101a757806003193601126101a757823561087e610ae3565b91811580610934575b6108b6575b336001600160a01b038416036108a75750906102d291610d48565b5163334bd91960e11b81528490fd5b6108be610e59565b906001600160a01b031615801590610924575b8015610912575b6108f457506002805465ffffffffffff60a01b1916905561088c565b8565ffffffffffff60249351926319ca5ebb60e01b84521690820152fd5b504265ffffffffffff821610156108d8565b5065ffffffffffff8116156108d1565b506003546001600160a01b03848116911614610887565b8284346101a757816003193601126101a75760209051601e8152f35b9050346101a757826003193601126101a7578035610983610ae3565b9181156102d657506109a560018495836102d296528160205286200154610c47565b610cda565b8391503461055f57602036600319011261055f57816020936001923581528285522001549051908152f35b82346101815780600319360112610181576109ee610c01565b6003548060d01c80610a0e575b600380546001600160a01b031690558280f35b421115610a4057600280546001600160d01b031660309290921b6001600160d01b0319169190911790555b81806109fb565b506000805160206111628339815191528180a1610a39565b8284346101a757816003193601126101a75760209051620697808152f35b91503461055f57602036600319011261055f573563ffffffff60e01b811680910361055f57602092506318a4c3c360e11b8114908115610ab8575b5015158152f35b637965db0b60e01b811491508115610ad2575b5083610ab1565b6301ffc9a760e01b14905083610acb565b602435906001600160a01b0382168203610af957565b600080fd5b65ffffffffffff91821681529116602082015260400190565b906020600319830112610af9576001600160401b039160043590838211610af95780602383011215610af9578160040135938411610af95760248483010111610af9576024019190565b34610af957610b6f36610b17565b505060408051908181016001600160401b03811183821017610beb5781526007825260206611d3140bd554d160ca1b818401528151928184928352815191828285015260005b838110610bd5575050600083830185015250601f01601f19168101030190f35b8181018301518782018701528694508201610bb5565b634e487b7160e01b600052604160045260246000fd5b336000908152600080516020611122833981519152602052604081205460ff1615610c295750565b6044906040519063e2517d3f60e01b82523360048301526024820152fd5b80600052600160205260406000203360005260205260ff6040600020541615610c295750565b6001600160a01b03166000818152600080516020611122833981519152602052604081205490919060ff16610cd65781805260016020526040822081835260205260408220600160ff1982541617905533916000805160206111028339815191528180a4600190565b5090565b906000918083526001602052604083209160018060a01b03169182845260205260ff60408420541615600014610d435780835260016020526040832082845260205260408320600160ff19825416179055600080516020611102833981519152339380a4600190565b505090565b90610d5e91801580610d76575b610d6157610df4565b90565b600380546001600160a01b0319169055610df4565b506003546001600160a01b03838116911614610d55565b6001600160a01b03166000818152600080516020611122833981519152602052604081205490919060ff1615610cd6578180526001602052604082208183526020526040822060ff19815416905533916000805160206111a28339815191528180a4600190565b906000918083526001602052604083209160018060a01b03169182845260205260ff604084205416600014610d43578083526001602052604083208284526020526040832060ff1981541690556000805160206111a2833981519152339380a4600190565b6002546001600160a01b0381169160a09190911c65ffffffffffff1690565b6003548060d01c8015159081610ea7575b5015610e9d5760a01c65ffffffffffff1690565b5060025460d01c90565b9050421138610e89565b91909165ffffffffffff80809416911601918211610ecb57565b634e487b7160e01b600052601160045260246000fd5b65ffffffffffff90818111610ef4571690565b60405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203460448201526538206269747360d01b6064820152608490fd5b601f909101601f19168101906001600160401b03821190821017610beb57604052565b60405163e245b5af60e01b8152600160048201526020816024817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa908115610ff157600091610fc3575090565b906020823d8211610fe9575b81610fdc60209383610f48565b8101031261018157505190565b3d9150610fcf565b6040513d6000823e3d90fd5b51906001600160501b0382168203610af957565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031680156110fe5760a060049160405192838092633fabe5a360e21b82525afa908115610ff15760009081926110ac575b5061109b574203428111610ecb5763ffffffff60005416101561108957565b60405163d15f73b560e01b8152600490fd5b60405162032b3d60e81b8152600490fd5b915060a0823d82116110f6575b816110c660a09383610f48565b8101031261018157506110d881610ffd565b5060208101516110ef608060408401519301610ffd565b503861106a565b3d91506110b9565b5056fe2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0da6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb49ac4f1890dc96c9a02330d1fa696648a38f3b282d2449c2d8e6f10507488c84c82b1fa2edafe6f7b9e97c1a9e0c3660e645beb2dcaa2d45bdbf9beaf5472e1ec58886ebfc4259abdbc16601dd8fb5678e54878f47b3c34836cfc51154a9605109f6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171bf1038c18cf84a56e432fdbfaf746924b7ea511dfe03a6506a0ceba4888788d9ba26469706673582212206cc31064ceb8a80c346f60ee2d3b1f4c467c73403d2ab47de22e336d88425a3664736f6c634300081300332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d";

type GLPOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GLPOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GLPOracle__factory extends ContractFactory {
  constructor(...args: GLPOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "GLPOracle";
  }

  override deploy(
    glpManager_: PromiseOrValue<string>,
    _sequencerUptimeFeed: PromiseOrValue<string>,
    _admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GLPOracle> {
    return super.deploy(
      glpManager_,
      _sequencerUptimeFeed,
      _admin,
      overrides || {}
    ) as Promise<GLPOracle>;
  }
  override getDeployTransaction(
    glpManager_: PromiseOrValue<string>,
    _sequencerUptimeFeed: PromiseOrValue<string>,
    _admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      glpManager_,
      _sequencerUptimeFeed,
      _admin,
      overrides || {}
    );
  }
  override attach(address: string): GLPOracle {
    return super.attach(address) as GLPOracle;
  }
  override connect(signer: Signer): GLPOracle__factory {
    return super.connect(signer) as GLPOracle__factory;
  }
  static readonly contractName: "GLPOracle";

  public readonly contractName: "GLPOracle";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GLPOracleInterface {
    return new utils.Interface(_abi) as GLPOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GLPOracle {
    return new Contract(address, _abi, signerOrProvider) as GLPOracle;
  }
}

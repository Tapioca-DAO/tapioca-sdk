/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GmxMarketMock, GmxMarketMockInterface } from "../GmxMarketMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_weth",
        type: "address",
      },
      {
        internalType: "address",
        name: "_usdc",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lp",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "address",
            name: "callbackContract",
            type: "address",
          },
          {
            internalType: "address",
            name: "uiFeeReceiver",
            type: "address",
          },
          {
            internalType: "address",
            name: "market",
            type: "address",
          },
          {
            internalType: "address",
            name: "initialLongToken",
            type: "address",
          },
          {
            internalType: "address",
            name: "initialShortToken",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "longTokenSwapPath",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "shortTokenSwapPath",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "minMarketTokens",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "shouldUnwrapNativeToken",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "executionFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "callbackGasLimit",
            type: "uint256",
          },
        ],
        internalType: "struct GmxMarketMock.CreateDepositParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "createDeposit",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "address",
            name: "callbackContract",
            type: "address",
          },
          {
            internalType: "address",
            name: "uiFeeReceiver",
            type: "address",
          },
          {
            internalType: "address",
            name: "market",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "longTokenSwapPath",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "shortTokenSwapPath",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "minLongTokenAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minShortTokenAmount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "shouldUnwrapNativeToken",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "executionFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "callbackGasLimit",
            type: "uint256",
          },
        ],
        internalType: "struct GmxMarketMock.CreateWithdrawalParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "createWithdrawal",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "payable",
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
    name: "glp",
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
    name: "glpManager",
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
    name: "lp",
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
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "mintAndStakeGlp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "sendTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "sendWnt",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_glp",
        type: "address",
      },
    ],
    name: "setGlp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
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
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_glpAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "unstakeAndRedeemGlp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "usdc",
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
    name: "weth",
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
] as const;

const _bytecode =
  "0x60c034610122576001600160401b0390601f6200165738819003918201601f19168301918483118484101761010c578084926060946040528339810103126101225761004a81610127565b90610063604061005c60208401610127565b9201610127565b4660a05260405160208101907f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a7946921882524660408201523060608201526060815260808101958187109087111761010c578560405251902060805260018060a01b0380928160018060a01b03199516856004541617600455168360055416176005551690600654161760065561151b90816200013c823960805181610ec7015260a05181610ea10152f35b634e487b7160e01b600052604160045260246000fd5b600080fd5b51906001600160a01b03821682036101225756fe6080604052600436101561001257600080fd5b60003560e01c806306fdde03146101a7578063095ea7b3146101a25780630f3aa5541461019d57806318160ddd1461019857806323b872dd14610193578063313c06a01461018e578063313ce567146101895780633644e51514610184578063364e23111461017f5780633e413bee1461017a5780633fc8cef3146101755780635b4e95611461017057806370a082311461016b57806378a207ee146101665780637d39aaf1146101615780637ecebe001461015c57806395d89b4114610157578063a9059cbb14610152578063ac9650d81461014d578063ad23c5a114610148578063d505accf14610143578063dd62ed3e1461013e578063e6d66ac814610139578063fa6db1bc146101345763fe9027961461012f57600080fd5b610d49565b610d2e565b610d11565b610cac565b610ae5565b610a39565b610930565b6107a9565b61074b565b61070d565b6106f4565b6106cd565b61068f565b610627565b610600565b6105d9565b61058f565b610574565b610558565b610531565b610386565b61033c565b6102df565b610251565b6101f4565b60005b8381106101bf5750506000910152565b81810151838201526020016101af565b906020916101e8815180928185528580860191016101ac565b601f01601f1916010190565b3461023b57600036600319011261023b5761023760405161021481610f49565b6002815261474d60f01b60208201526040519182916020835260208301906101cf565b0390f35b600080fd5b6001600160a01b0381160361023b57565b3461023b57604036600319011261023b5760043561026e81610240565b6001600160a01b0360243591336000526001602052826102a5826040600020906001600160a01b0316600052602052604060002090565b5560405192835216907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560203392a3602060405160018152f35b3461023b57608036600319011261023b5760206004356102fe81610240565b61033460243580926064359061031382610240565b6001600160a01b039061032e84836007541630903390611186565b16611259565b604051908152f35b3461023b57600036600319011261023b576020600354604051908152f35b606090600319011261023b5760043561037281610240565b9060243561037f81610240565b9060443590565b3461023b576103e07fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6103b83661035a565b92919390836103ef575b6040519384526001600160a01b039081169416929081906020820190565b0390a360405160018152602090f35b61040c856001600160a01b03166000526000602052604060002090565b5461041985821015610d85565b846001600160a01b03918284168093891603610438575b5050506103c2565b61048b6104909361047761045f8b6001600160a01b03166000526001602052604060002090565b336001600160a01b0316600052602052604060002090565b5484600182016104e0575b50501515610dd1565b610e33565b6104ad866001600160a01b03166000526000602052604060002090565b556104cb816001600160a01b03166000526000602052604060002090565b6104d6858254610e45565b9055388481610430565b8161048b826104f0941015610e52565b610529336105118d6001600160a01b03166000526001602052604060002090565b906001600160a01b0316600052602052604060002090565b553884610482565b3461023b57600036600319011261023b5760206001600160a01b0360065416604051908152f35b3461023b57600036600319011261023b57602060405160128152f35b3461023b57600036600319011261023b576020610334610e9e565b3461023b57608036600319011261023b5760206004356105ae81610240565b61033460243580926105ce826001600160a01b0392309084339116611186565b339060075416611259565b3461023b57600036600319011261023b5760206001600160a01b0360055416604051908152f35b3461023b57600036600319011261023b5760206001600160a01b0360045416604051908152f35b60031960203682011261023b576004359067ffffffffffffffff821161023b5761018090823603011261023b5761067f906001600160a01b03600654169061010481600401359161067783610240565b013591611259565b60405161060f60f31b8152602090f35b3461023b57602036600319011261023b576001600160a01b036004356106b481610240565b1660005260006020526020604060002054604051908152f35b3461023b57600036600319011261023b5760206001600160a01b0360075416604051908152f35b604036600319011261023b5761070b600435610240565b005b3461023b57602036600319011261023b576001600160a01b0360043561073281610240565b1660005260026020526020604060002054604051908152f35b3461023b57600036600319011261023b5761023760405161076b81610f49565b600981527f474d206d61726b6574000000000000000000000000000000000000000000000060208201526040519182916020835260208301906101cf565b3461023b57604036600319011261023b576004356107c681610240565b60243580158015906108bc575b610818575b7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6001600160a01b03604051931692806103e03394829190602083019252565b610835336001600160a01b03166000526000602052604060002090565b5461084282821015610d85565b816001600160a01b0384169182330361085e575b5050506107d8565b61048b61086c931515610dd1565b610889336001600160a01b03166000526000602052604060002090565b556108a7826001600160a01b03166000526000602052604060002090565b6108b2828254610e45565b9055388181610856565b506001600160a01b03821633146107d3565b602080820190808352835180925260408301928160408460051b8301019501936000915b8483106109025750505050505090565b9091929394958480610920600193603f198682030187528a516101cf565b98019301930191949392906108f2565b60208060031936011261023b5760043567ffffffffffffffff9182821161023b573660238301121561023b57816004013592831161023b576024820191602436918560051b01011161023b5761098583611322565b9160409161099583519485610fa2565b848452601f196109a486611322565b0160005b818110610a2a5750505060005b8481106109c95782518061023786826108ce565b806000806109db610a25948987611350565b906109ea885180938193611397565b0390305af4610a0a6109fa61113e565b91610a04836113e9565b906113a5565b610a1482876113d5565b52610a1f81866113d5565b5061105c565b6109b5565b606086820184015282016109a8565b60031960203682011261023b576004359067ffffffffffffffff821161023b5761016090823603011261023b57610abd61067f91610aad6001600160a01b03918260045416610a9c826004013591610a9083610240565b8260c485013591611259565b60e484600554169261067783610240565b600654166001600160a01b031690565b610ada336001600160a01b03166000526000602052604060002090565b549030903390611186565b3461023b5760e036600319011261023b57600435610b0281610240565b60243590610b0f82610240565b60443590606435906084359360ff8516850361023b576001600160a01b03906020610c25610bfb8585811697610b46891515610fc4565b610b51814210611010565b610bf38a610be5610b75856001600160a01b03166000526002602052604060002090565b93845494610b828661105c565b90556040519485938b8b8601988991959493909260a09360c08401977f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c985526001600160a01b038092166020860152166040840152606083015260808201520152565b03601f198101835282610fa2565b5190206110df565b6040805191825260ff909916602082015260a4359881019890985260c43560608901526080880190565b876000988992838052039060015afa15610ca75784610c97826105117f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92596610c7e89610c788d516001600160a01b031690565b14611077565b6001600160a01b03166000526001602052604060002090565b556040519485521692602090a380f35b61106b565b3461023b57604036600319011261023b576020610d08600435610cce81610240565b6001600160a01b0360243591610ce383610240565b16600052600183526040600020906001600160a01b0316600052602052604060002090565b54604051908152f35b61070b610d1d3661035a565b916001600160a01b03339116611186565b3461023b57600036600319011261023b576020604051308152f35b3461023b57602036600319011261023b576001600160a01b03600435610d6e81610240565b166001600160a01b03196007541617600755600080f35b15610d8c57565b60405162461bcd60e51b815260206004820152601660248201527f45524332303a2062616c616e636520746f6f206c6f77000000000000000000006044820152606490fd5b15610dd857565b60405162461bcd60e51b815260206004820152601660248201527f45524332303a206e6f207a65726f2061646472657373000000000000000000006044820152606490fd5b634e487b7160e01b600052601160045260246000fd5b91908203918211610e4057565b610e1d565b91908201809211610e4057565b15610e5957565b60405162461bcd60e51b815260206004820152601860248201527f45524332303a20616c6c6f77616e636520746f6f206c6f7700000000000000006044820152606490fd5b467f000000000000000000000000000000000000000000000000000000000000000003610ee9577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a79469218825246604082015230606082015260608152610f2d81610f6a565b51902090565b634e487b7160e01b600052604160045260246000fd5b6040810190811067ffffffffffffffff821117610f6557604052565b610f33565b6080810190811067ffffffffffffffff821117610f6557604052565b60a0810190811067ffffffffffffffff821117610f6557604052565b90601f8019910116810190811067ffffffffffffffff821117610f6557604052565b15610fcb57565b60405162461bcd60e51b815260206004820152601860248201527f45524332303a204f776e65722063616e6e6f74206265203000000000000000006044820152606490fd5b1561101757565b60405162461bcd60e51b815260206004820152600e60248201527f45524332303a20457870697265640000000000000000000000000000000000006044820152606490fd5b6000198114610e405760010190565b6040513d6000823e3d90fd5b1561107e57565b60405162461bcd60e51b815260206004820152601860248201527f45524332303a20496e76616c6964205369676e617475726500000000000000006044820152606490fd5b67ffffffffffffffff8111610f6557601f01601f191660200190565b604051906110ec82610f49565b60028252610f2d6060602084019361190160f01b855261110a610e9e565b60405194859261112360208501988992519283916101ac565b83019160208301526040820152036040810184520182610fa2565b3d15611169573d9061114f826110c3565b9161115d6040519384610fa2565b82523d6000602084013e565b606090565b9081602091031261023b5751801515810361023b5790565b90600080949381946040519060208201946323b872dd60e01b86526001600160a01b03938480921660248501521660448301526064820152606481526111cb81610f86565b5193165af16111d861113e565b8161122a575b50156111e657565b606460405162461bcd60e51b815260206004820152602060248201527f426f72696e6745524332303a205472616e7366657246726f6d206661696c65646044820152fd5b805180159250821561123f575b5050386111de565b611252925060208091830101910161116e565b3880611237565b600092838093604051602081019363a9059cbb60e01b85526001600160a01b03809316602483015260448201526044815261129381610f6a565b5193165af16112a061113e565b816112f3575b50156112ae57565b60405162461bcd60e51b815260206004820152601c60248201527f426f72696e6745524332303a205472616e73666572206661696c6564000000006044820152606490fd5b8051801592508215611308575b5050386112a6565b61131b925060208091830101910161116e565b3880611300565b67ffffffffffffffff8111610f655760051b60200190565b634e487b7160e01b600052603260045260246000fd5b91908110156113925760051b81013590601e198136030182121561023b57019081359167ffffffffffffffff831161023b57602001823603811361023b579190565b61133a565b908092918237016000815290565b156113ad5750565b60405162461bcd60e51b8152602060048201529081906113d19060248301906101cf565b0390fd5b80518210156113925760209160051b010190565b6103e88151116114ab5760448151106114715760048101518101906020816024840193031261023b5760248101519067ffffffffffffffff821161023b57018160438201121561023b576024810151611441816110c3565b9261144f6040519485610fa2565b8184526044828401011161023b5761146e9160446020850191016101ac565b90565b5060405161147e81610f49565b600e81527f6e6f2072657475726e2064617461000000000000000000000000000000000000602082015290565b506040516114b881610f49565b600f81527f726561736f6e20746f6f206c6f6e67000000000000000000000000000000000060208201529056fea26469706673582212207648b48d6c57996b5c98b3758ae1aa8feafef320065aaa5226cc4b6ff1e55d7964736f6c63430008120033";

type GmxMarketMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GmxMarketMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GmxMarketMock__factory extends ContractFactory {
  constructor(...args: GmxMarketMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "GmxMarketMock";
  }

  override deploy(
    _weth: PromiseOrValue<string>,
    _usdc: PromiseOrValue<string>,
    _lp: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GmxMarketMock> {
    return super.deploy(
      _weth,
      _usdc,
      _lp,
      overrides || {}
    ) as Promise<GmxMarketMock>;
  }
  override getDeployTransaction(
    _weth: PromiseOrValue<string>,
    _usdc: PromiseOrValue<string>,
    _lp: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_weth, _usdc, _lp, overrides || {});
  }
  override attach(address: string): GmxMarketMock {
    return super.attach(address) as GmxMarketMock;
  }
  override connect(signer: Signer): GmxMarketMock__factory {
    return super.connect(signer) as GmxMarketMock__factory;
  }
  static readonly contractName: "GmxMarketMock";

  public readonly contractName: "GmxMarketMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GmxMarketMockInterface {
    return new utils.Interface(_abi) as GmxMarketMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GmxMarketMock {
    return new Contract(address, _abi, signerOrProvider) as GmxMarketMock;
  }
}

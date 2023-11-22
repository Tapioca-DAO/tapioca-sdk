/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AssetRegister, AssetRegisterInterface } from "../AssetRegister";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAsset",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "enum TokenType",
        name: "tokenType",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IStrategy",
        name: "strategy",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
    ],
    name: "AssetRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [],
    name: "assetCount",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "assets",
    outputs: [
      {
        internalType: "enum TokenType",
        name: "tokenType",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        internalType: "contract IStrategy",
        name: "strategy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
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
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
        internalType: "address[]",
        name: "owners",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "balances",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum TokenType",
        name: "",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "contract IStrategy",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "ids",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "isApprovedForAsset",
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
        internalType: "enum TokenType",
        name: "tokenType",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        internalType: "contract IStrategy",
        name: "strategy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "registerAsset",
    outputs: [
      {
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
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
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceID",
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
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060408051608081018252600480825260006020830181905292820183905260608201839052600580546001808201835591909452825160039094027f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0018054939490939092849260ff1990921691908490811115610091576100916100e7565b021790555060208201518154610100600160a81b0319166101006001600160a01b039283160217825560408301516001830180546001600160a01b031916919092161790556060909101516002909101556100fd565b634e487b7160e01b600052602160045260246000fd5b61192e8061010c6000396000f3fe608060405234801561001057600080fd5b50600436106100f45760003560e01c8063a75fcb1e11610097578063cf35bdd011610066578063cf35bdd014610283578063e985e9c5146102a6578063eafe7a74146102d4578063f242432a146102dc57600080fd5b8063a75fcb1e1461020a578063b061db941461023d578063b8489fb514610250578063bd85b0391461026357600080fd5b80632d4e1d52116100d35780632d4e1d52146101885780632eb2c2d6146101c25780634e1273f4146101d7578063a22cb465146101f757600080fd5b8062fdd58e146100f957806301ffc9a7146101375780630e89341c1461015a575b600080fd5b61012461010736600461119b565b600260209081526000928352604080842090915290825290205481565b6040519081526020015b60405180910390f35b61014a6101453660046111dd565b6102ef565b604051901515815260200161012e565b61017b610168366004611201565b5060408051602081019091526000815290565b60405161012e919061121a565b61012461019636600461127c565b600460209081526000948552604080862082529385528385208152918452828420909152825290205481565b6101d56101d036600461135b565b610341565b005b6101ea6101e536600461141a565b610492565b60405161012e9190611486565b6101d56102053660046114df565b6105dd565b61014a610218366004611514565b6000602081815293815260408082208552928152828120909352825290205460ff1681565b61012461024b36600461127c565b610649565b6101d561025e366004611555565b6106f9565b610124610271366004611201565b60036020526000908152604090205481565b610296610291366004611201565b6107c1565b60405161012e94939291906115a9565b61014a6102b43660046115ee565b600160209081526000928352604080842090915290825290205460ff1681565b600554610124565b6101d56102ea366004611627565b61080b565b60006001600160e01b031982166301ffc9a760e01b14806103205750636cdb3d1360e11b6001600160e01b03198316145b8061033b57506303a24d0760e21b6001600160e01b03198316145b92915050565b8483146103905760405162461bcd60e51b815260206004820152601860248201527708aa48662626a6a744098cadccee8d040dad2e6dac2e8c6d60431b60448201526064015b60405180910390fd5b61039e88888888888861093d565b6001600160a01b0387163b156104885760405163bc197c8160e01b808252906001600160a01b0389169063bc197c81906103ea9033908d908c908c908c908c908c908c90600401611702565b602060405180830381600087803b15801561040457600080fd5b505af1158015610418573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043c9190611766565b6001600160e01b031916146104885760405162461bcd60e51b815260206004820152601260248201527157726f6e672072657475726e2076616c756560701b6044820152606401610387565b5050505050505050565b6060838281146104df5760405162461bcd60e51b815260206004820152601860248201527708aa48662626a6a744098cadccee8d040dad2e6dac2e8c6d60431b6044820152606401610387565b8067ffffffffffffffff8111156104f8576104f8611783565b604051908082528060200260200182016040528015610521578160200160208202803683370190505b50915060005b818110156105d3576002600088888481811061054557610545611799565b905060200201602081019061055a91906117af565b6001600160a01b03166001600160a01b03168152602001908152602001600020600086868481811061058e5761058e611799565b905060200201358152602001908152602001600020548382815181106105b6576105b6611799565b6020908102919091010152806105cb816117e2565b915050610527565b5050949350505050565b3360008181526001602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6000600185600481111561065f5761065f611593565b148061067c5750600285600481111561067a5761067a611593565b145b806106985750600385600481111561069657610696611593565b145b6106e45760405162461bcd60e51b815260206004820152601f60248201527f41737365744d616e616765723a2063616e6e6f7420616464204e6174697665006044820152606401610387565b6106f085858585610ab7565b95945050505050565b600554821061074a5760405162461bcd60e51b815260206004820152601d60248201527f41737365744d616e616765723a206173736574206e6f742076616c69640000006044820152606401610387565b336000818152602081815260408083206001600160a01b038816808552908352818420878552835292819020805460ff19168615159081179091558151878152928301529192917f6aceb1b079beeabdd8c2f30cd221ca27ec52e9d0aef6bb229cc175cf15dd778b910160405180910390a3505050565b600581815481106107d157600080fd5b600091825260209091206003909102018054600182015460029092015460ff821693506101009091046001600160a01b0390811692169084565b6001600160a01b038616600090815260208181526040808320338452825280832087845290915290205461084390879060ff16610ff0565b61084f8686868661107d565b6001600160a01b0385163b156109355760405163f23a6e6160e01b808252906001600160a01b0387169063f23a6e61906108979033908b908a908a908a908a906004016117fd565b602060405180830381600087803b1580156108b157600080fd5b505af11580156108c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e99190611766565b6001600160e01b031916146109355760405162461bcd60e51b815260206004820152601260248201527157726f6e672072657475726e2076616c756560701b6044820152606401610387565b505050505050565b6001600160a01b0385166109825760405162461bcd60e51b815260206004820152600c60248201526b4e6f2030206164647265737360a01b6044820152606401610387565b8260005b81811015610a525760008686838181106109a2576109a2611799565b90506020020135905060008585848181106109bf576109bf611799565b6001600160a01b038d166000908152600260209081526040808320888452825282208054939091029490940135945084939250906109fe908490611844565b90915550506001600160a01b038916600090815260026020908152604080832085845290915281208054839290610a3690849061185b565b9250508190555050508080610a4a906117e2565b915050610986565b50856001600160a01b0316876001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb88888888604051610aa69493929190611873565b60405180910390a450505050505050565b600060046000866004811115610acf57610acf611593565b6004811115610ae057610ae0611593565b8152602080820192909252604090810160009081206001600160a01b03808916835290845282822090871682528352818120858252909252902054905080610fe857811580610b4157506001856004811115610b3e57610b3e611593565b14155b610b8d5760405162461bcd60e51b815260206004820152601e60248201527f5969656c64426f783a204e6f20746f6b656e496420666f7220455243323000006044820152606401610387565b6000856004811115610ba157610ba1611593565b1480610d455750826001600160a01b03166330fa738c6040518163ffffffff1660e01b815260040160206040518083038186803b158015610be157600080fd5b505afa158015610bf5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c1991906118a5565b6004811115610c2a57610c2a611593565b856004811115610c3c57610c3c611593565b148015610cca5750826001600160a01b031663f6b4dfb46040518163ffffffff1660e01b815260040160206040518083038186803b158015610c7d57600080fd5b505afa158015610c91573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb591906118c2565b6001600160a01b0316846001600160a01b0316145b8015610d455750826001600160a01b03166317d70f7c6040518163ffffffff1660e01b815260040160206040518083038186803b158015610d0a57600080fd5b505afa158015610d1e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d4291906118df565b82145b610d915760405162461bcd60e51b815260206004820152601b60248201527f5969656c64426f783a205374726174656779206d69736d6174636800000000006044820152606401610387565b6000856004811115610da557610da5611593565b148015610db957506001600160a01b038416155b80610dcd57506001600160a01b0384163b15155b610e115760405162461bcd60e51b81526020600482015260156024820152742cb4b2b6322137bc1d102737ba1030903a37b5b2b760591b6044820152606401610387565b600580549050905060056040518060800160405280876004811115610e3857610e38611593565b81526001600160a01b038088166020808401919091529087166040830152606090910185905282546001818101855560009485529190932082516003909402018054929390929091839160ff191690836004811115610e9957610e99611593565b021790555060208201518154610100600160a81b0319166101006001600160a01b039283160217825560408301516001830180546001600160a01b0319169190921617905560609091015160029091015580600460008782811115610f0057610f00611593565b6004811115610f1157610f11611593565b8152602080820192909252604090810160009081206001600160a01b0389811683529084528282209088168252835281812086825283528181209390935580518281529182019290925282917f6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b910160405180910390a281846001600160a01b0316866004811115610fa557610fa5611593565b604080516001600160a01b0388168152602081018690527f30605d4cd099421ed12ca1ba642a1ea2659f679b5cdd0ccd032586640eeaff43910160405180910390a45b949350505050565b6001600160a01b0382163314806110045750805b8061103657506001600160a01b03821660009081526001602081815260408084203385529091529091205460ff161515145b6110795760405162461bcd60e51b8152602060048201526014602482015273151c985b9cd9995c881b9bdd08185b1b1bddd95960621b6044820152606401610387565b5050565b6001600160a01b0383166110c25760405162461bcd60e51b815260206004820152600c60248201526b4e6f2030206164647265737360a01b6044820152606401610387565b6001600160a01b0384166000908152600260209081526040808320858452909152812080548392906110f5908490611844565b90915550506001600160a01b03831660009081526002602090815260408083208584529091528120805483929061112d90849061185b565b909155505060408051838152602081018390526001600160a01b03808616929087169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a450505050565b6001600160a01b038116811461119857600080fd5b50565b600080604083850312156111ae57600080fd5b82356111b981611183565b946020939093013593505050565b6001600160e01b03198116811461119857600080fd5b6000602082840312156111ef57600080fd5b81356111fa816111c7565b9392505050565b60006020828403121561121357600080fd5b5035919050565b600060208083528351808285015260005b818110156112475785810183015185820160400152820161122b565b81811115611259576000604083870101525b50601f01601f1916929092016040019392505050565b6005811061119857600080fd5b6000806000806080858703121561129257600080fd5b843561129d8161126f565b935060208501356112ad81611183565b925060408501356112bd81611183565b9396929550929360600135925050565b60008083601f8401126112df57600080fd5b50813567ffffffffffffffff8111156112f757600080fd5b6020830191508360208260051b850101111561131257600080fd5b9250929050565b60008083601f84011261132b57600080fd5b50813567ffffffffffffffff81111561134357600080fd5b60208301915083602082850101111561131257600080fd5b60008060008060008060008060a0898b03121561137757600080fd5b883561138281611183565b9750602089013561139281611183565b9650604089013567ffffffffffffffff808211156113af57600080fd5b6113bb8c838d016112cd565b909850965060608b01359150808211156113d457600080fd5b6113e08c838d016112cd565b909650945060808b01359150808211156113f957600080fd5b506114068b828c01611319565b999c989b5096995094979396929594505050565b6000806000806040858703121561143057600080fd5b843567ffffffffffffffff8082111561144857600080fd5b611454888389016112cd565b9096509450602087013591508082111561146d57600080fd5b5061147a878288016112cd565b95989497509550505050565b6020808252825182820181905260009190848201906040850190845b818110156114be578351835292840192918401916001016114a2565b50909695505050505050565b803580151581146114da57600080fd5b919050565b600080604083850312156114f257600080fd5b82356114fd81611183565b915061150b602084016114ca565b90509250929050565b60008060006060848603121561152957600080fd5b833561153481611183565b9250602084013561154481611183565b929592945050506040919091013590565b60008060006060848603121561156a57600080fd5b833561157581611183565b92506020840135915061158a604085016114ca565b90509250925092565b634e487b7160e01b600052602160045260246000fd5b60808101600586106115cb57634e487b7160e01b600052602160045260246000fd5b9481526001600160a01b0393841660208201529190921660408201526060015290565b6000806040838503121561160157600080fd5b823561160c81611183565b9150602083013561161c81611183565b809150509250929050565b60008060008060008060a0878903121561164057600080fd5b863561164b81611183565b9550602087013561165b81611183565b94506040870135935060608701359250608087013567ffffffffffffffff81111561168557600080fd5b61169189828a01611319565b979a9699509497509295939492505050565b81835260006001600160fb1b038311156116bc57600080fd5b8260051b8083602087013760009401602001938452509192915050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6001600160a01b0389811682528816602082015260a06040820181905260009061172f908301888a6116a3565b82810360608401526117428187896116a3565b905082810360808401526117578185876116d9565b9b9a5050505050505050505050565b60006020828403121561177857600080fd5b81516111fa816111c7565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6000602082840312156117c157600080fd5b81356111fa81611183565b634e487b7160e01b600052601160045260246000fd5b60006000198214156117f6576117f66117cc565b5060010190565b6001600160a01b03878116825286166020820152604081018590526060810184905260a06080820181905260009061183890830184866116d9565b98975050505050505050565b600082821015611856576118566117cc565b500390565b6000821982111561186e5761186e6117cc565b500190565b6040815260006118876040830186886116a3565b828103602084015261189a8185876116a3565b979650505050505050565b6000602082840312156118b757600080fd5b81516111fa8161126f565b6000602082840312156118d457600080fd5b81516111fa81611183565b6000602082840312156118f157600080fd5b505191905056fea264697066735822122041d546d95d67614e56dd981867fc538b293cace381a65ac57f9eda26a6ebf85764736f6c63430008090033";

type AssetRegisterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetRegisterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetRegister__factory extends ContractFactory {
  constructor(...args: AssetRegisterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AssetRegister";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AssetRegister> {
    return super.deploy(overrides || {}) as Promise<AssetRegister>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AssetRegister {
    return super.attach(address) as AssetRegister;
  }
  connect(signer: Signer): AssetRegister__factory {
    return super.connect(signer) as AssetRegister__factory;
  }
  static readonly contractName: "AssetRegister";
  public readonly contractName: "AssetRegister";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetRegisterInterface {
    return new utils.Interface(_abi) as AssetRegisterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetRegister {
    return new Contract(address, _abi, signerOrProvider) as AssetRegister;
  }
}

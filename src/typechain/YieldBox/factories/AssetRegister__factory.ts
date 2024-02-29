/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
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
    name: "ids",
    outputs: [
      {
        internalType: "uint256",
        name: "assetId",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060408051608081018252600480825260006020830181905292820183905260608201839052600580546001808201835591909452825160039094027f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0018054939490939092849260ff1990921691908490811115610091576100916100e7565b021790555060208201518154610100600160a81b0319166101006001600160a01b039283160217825560408301516001830180546001600160a01b031916919092161790556060909101516002909101556100fd565b634e487b7160e01b600052602160045260246000fd5b6119ba8061010c6000396000f3fe608060405234801561001057600080fd5b50600436106100f45760003560e01c8063a75fcb1e11610097578063cf35bdd011610066578063cf35bdd014610283578063e985e9c5146102a6578063eafe7a74146102d4578063f242432a146102dc57600080fd5b8063a75fcb1e1461020a578063b061db941461023d578063b8489fb514610250578063bd85b0391461026357600080fd5b80632d4e1d52116100d35780632d4e1d52146101885780632eb2c2d6146101c25780634e1273f4146101d7578063a22cb465146101f757600080fd5b8062fdd58e146100f957806301ffc9a7146101375780630e89341c1461015a575b600080fd5b61012461010736600461123e565b600260209081526000928352604080842090915290825290205481565b6040519081526020015b60405180910390f35b61014a610145366004611280565b6102ef565b604051901515815260200161012e565b61017b6101683660046112a4565b5060408051602081019091526000815290565b60405161012e91906112bd565b610124610196366004611319565b600460209081526000948552604080862082529385528385208152918452828420909152825290205481565b6101d56101d03660046113f8565b61038c565b005b6101ea6101e53660046114b7565b6104f7565b60405161012e9190611523565b6101d561020536600461157c565b61063d565b61014a6102183660046115b1565b6000602081815293815260408082208552928152828120909352825290205460ff1681565b61012461024b366004611319565b6106a9565b6101d561025e3660046115f2565b610759565b6101246102713660046112a4565b60036020526000908152604090205481565b6102966102913660046112a4565b610821565b60405161012e9493929190611646565b61014a6102b436600461168b565b600160209081526000928352604080842090915290825290205460ff1681565b600554610124565b6101d56102ea3660046116c4565b61086b565b60006001600160e01b031982167f01ffc9a700000000000000000000000000000000000000000000000000000000148061035257507fd9b67a26000000000000000000000000000000000000000000000000000000006001600160e01b03198316145b8061038657507f0e89341c000000000000000000000000000000000000000000000000000000006001600160e01b03198316145b92915050565b8483146103e05760405162461bcd60e51b815260206004820152601860248201527f455243313135353a204c656e677468206d69736d61746368000000000000000060448201526064015b60405180910390fd5b6103ee8888888888886109b2565b6001600160a01b0387163b156104ed576040517fbc197c8100000000000000000000000000000000000000000000000000000000808252906001600160a01b0389169063bc197c81906104539033908d908c908c908c908c908c908c906004016117b4565b6020604051808303816000875af1158015610472573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104969190611818565b6001600160e01b031916146104ed5760405162461bcd60e51b815260206004820152601260248201527f57726f6e672072657475726e2076616c7565000000000000000000000000000060448201526064016103d7565b5050505050505050565b6060838281146105495760405162461bcd60e51b815260206004820152601860248201527f455243313135353a204c656e677468206d69736d61746368000000000000000060448201526064016103d7565b8067ffffffffffffffff81111561056257610562611835565b60405190808252806020026020018201604052801561058b578160200160208202803683370190505b50915060005b8181101561063357600260008888848181106105af576105af61184b565b90506020020160208101906105c49190611861565b6001600160a01b03166001600160a01b0316815260200190815260200160002060008686848181106105f8576105f861184b565b905060200201358152602001908152602001600020548382815181106106205761062061184b565b6020908102919091010152600101610591565b5050949350505050565b3360008181526001602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b600060018560048111156106bf576106bf611630565b14806106dc575060028560048111156106da576106da611630565b145b806106f8575060038560048111156106f6576106f6611630565b145b6107445760405162461bcd60e51b815260206004820152601f60248201527f41737365744d616e616765723a2063616e6e6f7420616464204e61746976650060448201526064016103d7565b61075085858585610b34565b95945050505050565b60055482106107aa5760405162461bcd60e51b815260206004820152601d60248201527f41737365744d616e616765723a206173736574206e6f742076616c696400000060448201526064016103d7565b336000818152602081815260408083206001600160a01b038816808552908352818420878552835292819020805460ff19168615159081179091558151878152928301529192917f6aceb1b079beeabdd8c2f30cd221ca27ec52e9d0aef6bb229cc175cf15dd778b910160405180910390a3505050565b6005818154811061083157600080fd5b600091825260209091206003909102018054600182015460029092015460ff821693506101009091046001600160a01b0390811692169084565b6001600160a01b03861660009081526020818152604080832033845282528083208784529091529020546108a390879060ff16611079565b6108af8686868661110f565b6001600160a01b0385163b156109aa576040517ff23a6e6100000000000000000000000000000000000000000000000000000000808252906001600160a01b0387169063f23a6e61906109109033908b908a908a908a908a9060040161187e565b6020604051808303816000875af115801561092f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109539190611818565b6001600160e01b031916146109aa5760405162461bcd60e51b815260206004820152601260248201527f57726f6e672072657475726e2076616c7565000000000000000000000000000060448201526064016103d7565b505050505050565b6001600160a01b038516610a085760405162461bcd60e51b815260206004820152600c60248201527f4e6f20302061646472657373000000000000000000000000000000000000000060448201526064016103d7565b8260005b81811015610acf576000868683818110610a2857610a2861184b565b9050602002013590506000858584818110610a4557610a4561184b565b6001600160a01b038d16600090815260026020908152604080832088845282528220805493909102949094013594508493925090610a849084906118d9565b90915550506001600160a01b038916600090815260026020908152604080832085845290915281208054839290610abc9084906118ec565b909155505060019092019150610a0c9050565b50856001600160a01b0316876001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb88888888604051610b2394939291906118ff565b60405180910390a450505050505050565b600060046000866004811115610b4c57610b4c611630565b6004811115610b5d57610b5d611630565b8152602080820192909252604090810160009081206001600160a01b03808916835290845282822090871682528352818120858252909252812054915081900361107157811580610bc057506001856004811115610bbd57610bbd611630565b14155b610c0c5760405162461bcd60e51b815260206004820152601e60248201527f5969656c64426f783a204e6f20746f6b656e496420666f72204552433230000060448201526064016103d7565b6000856004811115610c2057610c20611630565b1480610d975750826001600160a01b03166330fa738c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c65573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c899190611931565b6004811115610c9a57610c9a611630565b856004811115610cac57610cac611630565b148015610d2b5750826001600160a01b031663f6b4dfb46040518163ffffffff1660e01b8152600401602060405180830381865afa158015610cf2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d16919061194e565b6001600160a01b0316846001600160a01b0316145b8015610d975750826001600160a01b03166317d70f7c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d70573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d94919061196b565b82145b610de35760405162461bcd60e51b815260206004820152601b60248201527f5969656c64426f783a205374726174656779206d69736d61746368000000000060448201526064016103d7565b6000856004811115610df757610df7611630565b148015610e0b57506001600160a01b038416155b80610e1f57506001600160a01b0384163b15155b610e6b5760405162461bcd60e51b815260206004820152601560248201527f5969656c64426f783a204e6f74206120746f6b656e000000000000000000000060448201526064016103d7565b600580549050905060056040518060800160405280876004811115610e9257610e92611630565b81526001600160a01b038088166020808401919091529087166040830152606090910185905282546001818101855560009485529190932082516003909402018054929390929091839160ff191690836004811115610ef357610ef3611630565b0217905550602082015181547fffffffffffffffffffffff0000000000000000000000000000000000000000ff166101006001600160a01b039283160217825560408301516001830180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169190921617905560609091015160029091015580600460008782811115610f8957610f89611630565b6004811115610f9a57610f9a611630565b8152602080820192909252604090810160009081206001600160a01b0389811683529084528282209088168252835281812086825283528181209390935580518281529182019290925282917f6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b910160405180910390a281846001600160a01b031686600481111561102e5761102e611630565b604080516001600160a01b0388168152602081018690527f30605d4cd099421ed12ca1ba642a1ea2659f679b5cdd0ccd032586640eeaff43910160405180910390a45b949350505050565b6001600160a01b03821633148061108d5750805b806110bf57506001600160a01b03821660009081526001602081815260408084203385529091529091205460ff161515145b61110b5760405162461bcd60e51b815260206004820152601460248201527f5472616e73666572206e6f7420616c6c6f77656400000000000000000000000060448201526064016103d7565b5050565b6001600160a01b0383166111655760405162461bcd60e51b815260206004820152600c60248201527f4e6f20302061646472657373000000000000000000000000000000000000000060448201526064016103d7565b6001600160a01b0384166000908152600260209081526040808320858452909152812080548392906111989084906118d9565b90915550506001600160a01b0383166000908152600260209081526040808320858452909152812080548392906111d09084906118ec565b909155505060408051838152602081018390526001600160a01b03808616929087169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a450505050565b6001600160a01b038116811461123b57600080fd5b50565b6000806040838503121561125157600080fd5b823561125c81611226565b946020939093013593505050565b6001600160e01b03198116811461123b57600080fd5b60006020828403121561129257600080fd5b813561129d8161126a565b9392505050565b6000602082840312156112b657600080fd5b5035919050565b60006020808352835180602085015260005b818110156112eb578581018301518582016040015282016112cf565b506000604082860101526040601f19601f8301168501019250505092915050565b6005811061123b57600080fd5b6000806000806080858703121561132f57600080fd5b843561133a8161130c565b9350602085013561134a81611226565b9250604085013561135a81611226565b9396929550929360600135925050565b60008083601f84011261137c57600080fd5b50813567ffffffffffffffff81111561139457600080fd5b6020830191508360208260051b85010111156113af57600080fd5b9250929050565b60008083601f8401126113c857600080fd5b50813567ffffffffffffffff8111156113e057600080fd5b6020830191508360208285010111156113af57600080fd5b60008060008060008060008060a0898b03121561141457600080fd5b883561141f81611226565b9750602089013561142f81611226565b9650604089013567ffffffffffffffff8082111561144c57600080fd5b6114588c838d0161136a565b909850965060608b013591508082111561147157600080fd5b61147d8c838d0161136a565b909650945060808b013591508082111561149657600080fd5b506114a38b828c016113b6565b999c989b5096995094979396929594505050565b600080600080604085870312156114cd57600080fd5b843567ffffffffffffffff808211156114e557600080fd5b6114f18883890161136a565b9096509450602087013591508082111561150a57600080fd5b506115178782880161136a565b95989497509550505050565b6020808252825182820181905260009190848201906040850190845b8181101561155b5783518352928401929184019160010161153f565b50909695505050505050565b8035801515811461157757600080fd5b919050565b6000806040838503121561158f57600080fd5b823561159a81611226565b91506115a860208401611567565b90509250929050565b6000806000606084860312156115c657600080fd5b83356115d181611226565b925060208401356115e181611226565b929592945050506040919091013590565b60008060006060848603121561160757600080fd5b833561161281611226565b92506020840135915061162760408501611567565b90509250925092565b634e487b7160e01b600052602160045260246000fd5b608081016005861061166857634e487b7160e01b600052602160045260246000fd5b9481526001600160a01b0393841660208201529190921660408201526060015290565b6000806040838503121561169e57600080fd5b82356116a981611226565b915060208301356116b981611226565b809150509250929050565b60008060008060008060a087890312156116dd57600080fd5b86356116e881611226565b955060208701356116f881611226565b94506040870135935060608701359250608087013567ffffffffffffffff81111561172257600080fd5b61172e89828a016113b6565b979a9699509497509295939492505050565b81835260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83111561177257600080fd5b8260051b80836020870137939093016020019392505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60006001600160a01b03808b168352808a1660208401525060a060408301526117e160a08301888a611740565b82810360608401526117f4818789611740565b9050828103608084015261180981858761178b565b9b9a5050505050505050505050565b60006020828403121561182a57600080fd5b815161129d8161126a565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b60006020828403121561187357600080fd5b813561129d81611226565b60006001600160a01b03808916835280881660208401525085604083015284606083015260a060808301526118b760a08301848661178b565b98975050505050505050565b634e487b7160e01b600052601160045260246000fd5b81810381811115610386576103866118c3565b80820180821115610386576103866118c3565b604081526000611913604083018688611740565b8281036020840152611926818587611740565b979650505050505050565b60006020828403121561194357600080fd5b815161129d8161130c565b60006020828403121561196057600080fd5b815161129d81611226565b60006020828403121561197d57600080fd5b505191905056fea26469706673582212200ad3b5f4b0ff4421a752bee15d31b9083dc11476c51bb2345a24ccb5ac9814d564736f6c63430008160033";

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

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AssetRegister> {
    return super.deploy(overrides || {}) as Promise<AssetRegister>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AssetRegister {
    return super.attach(address) as AssetRegister;
  }
  override connect(signer: Signer): AssetRegister__factory {
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

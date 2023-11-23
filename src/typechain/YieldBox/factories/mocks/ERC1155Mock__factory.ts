/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  ERC1155Mock,
  ERC1155MockInterface,
} from "../../mocks/ERC1155Mock";

const _abi = [
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
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
    ],
    name: "transferBatch",
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
    ],
    name: "transferSingle",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x608060405234801561001057600080fd5b5061132f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100e95760003560e01c80634e1273f41161008c578063bd85b03911610066578063bd85b03914610231578063e985e9c514610251578063f242432a1461027f578063f5298aca1461029257600080fd5b80634e1273f4146101cb578063a22cb465146101eb578063a75fcb1e146101fe57600080fd5b80630e89341c116100c85780630e89341c14610164578063156e29f6146101925780631aec811b146101a55780632eb2c2d6146101b857600080fd5b8062fdd58e146100ee57806301ffc9a71461012c5780630731a3691461014f575b600080fd5b6101196100fc366004610bee565b600260209081526000928352604080842090915290825290205481565b6040519081526020015b60405180910390f35b61013f61013a366004610c31565b6102a5565b6040519015158152602001610123565b61016261015d366004610ca1565b6102f7565b005b610185610172366004610d32565b5060408051602081019091526000815290565b6040516101239190610d4b565b6101626101a0366004610da0565b61030d565b6101626101b3366004610dd3565b61031d565b6101626101c6366004610e57565b61032f565b6101de6101d9366004610f12565b610480565b6040516101239190610f7e565b6101626101f9366004610fc2565b6105cb565b61013f61020c366004610ffe565b6000602081815293815260408082208552928152828120909352825290205460ff1681565b61011961023f366004610d32565b60036020526000908152604090205481565b61013f61025f36600461103a565b600160209081526000928352604080842090915290825290205460ff1681565b61016261028d36600461106d565b610637565b6101626102a0366004610da0565b610761565b60006001600160e01b031982166301ffc9a760e01b14806102d65750636cdb3d1360e11b6001600160e01b03198316145b806102f157506303a24d0760e21b6001600160e01b03198316145b92915050565b61030586868686868661076c565b505050505050565b6103188383836108c7565b505050565b61032984848484610997565b50505050565b84831461037e5760405162461bcd60e51b815260206004820152601860248201527708aa48662626a6a744098cadccee8d040dad2e6dac2e8c6d60431b60448201526064015b60405180910390fd5b61038c88888888888861076c565b6001600160a01b0387163b156104765760405163bc197c8160e01b808252906001600160a01b0389169063bc197c81906103d89033908d908c908c908c908c908c908c90600401611132565b602060405180830381600087803b1580156103f257600080fd5b505af1158015610406573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061042a9190611196565b6001600160e01b031916146104765760405162461bcd60e51b815260206004820152601260248201527157726f6e672072657475726e2076616c756560701b6044820152606401610375565b5050505050505050565b6060838281146104cd5760405162461bcd60e51b815260206004820152601860248201527708aa48662626a6a744098cadccee8d040dad2e6dac2e8c6d60431b6044820152606401610375565b8067ffffffffffffffff8111156104e6576104e66111b3565b60405190808252806020026020018201604052801561050f578160200160208202803683370190505b50915060005b818110156105c15760026000888884818110610533576105336111c9565b905060200201602081019061054891906111df565b6001600160a01b03166001600160a01b03168152602001908152602001600020600086868481811061057c5761057c6111c9565b905060200201358152602001908152602001600020548382815181106105a4576105a46111c9565b6020908102919091010152806105b981611210565b915050610515565b5050949350505050565b3360008181526001602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6001600160a01b038616600090815260208181526040808320338452825280832087845290915290205461066f90879060ff16610a7e565b61067b86868686610997565b6001600160a01b0385163b156103055760405163f23a6e6160e01b808252906001600160a01b0387169063f23a6e61906106c39033908b908a908a908a908a9060040161122b565b602060405180830381600087803b1580156106dd57600080fd5b505af11580156106f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107159190611196565b6001600160e01b031916146103055760405162461bcd60e51b815260206004820152601260248201527157726f6e672072657475726e2076616c756560701b6044820152606401610375565b610318838383610b0b565b6001600160a01b0385166107925760405162461bcd60e51b815260040161037590611272565b8260005b818110156108625760008686838181106107b2576107b26111c9565b90506020020135905060008585848181106107cf576107cf6111c9565b6001600160a01b038d1660009081526002602090815260408083208884528252822080549390910294909401359450849392509061080e908490611298565b90915550506001600160a01b0389166000908152600260209081526040808320858452909152812080548392906108469084906112af565b925050819055505050808061085a90611210565b915050610796565b50856001600160a01b0316876001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb888888886040516108b694939291906112c7565b60405180910390a450505050505050565b6001600160a01b0383166108ed5760405162461bcd60e51b815260040161037590611272565b6001600160a01b0383166000908152600260209081526040808320858452909152812080548392906109209084906112af565b9091555050600082815260036020526040812080548392906109439084906112af565b909155505060408051838152602081018390526001600160a01b0385169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6001600160a01b0383166109bd5760405162461bcd60e51b815260040161037590611272565b6001600160a01b0384166000908152600260209081526040808320858452909152812080548392906109f0908490611298565b90915550506001600160a01b038316600090815260026020908152604080832085845290915281208054839290610a289084906112af565b909155505060408051838152602081018390526001600160a01b03808616929087169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a450505050565b6001600160a01b038216331480610a925750805b80610ac457506001600160a01b03821660009081526001602081815260408084203385529091529091205460ff161515145b610b075760405162461bcd60e51b8152602060048201526014602482015273151c985b9cd9995c881b9bdd08185b1b1bddd95960621b6044820152606401610375565b5050565b6001600160a01b038316610b315760405162461bcd60e51b815260040161037590611272565b6001600160a01b038316600090815260026020908152604080832085845290915281208054839290610b64908490611298565b909155505060008281526003602052604081208054839290610b87908490611298565b909155505060408051838152602081018390526000916001600160a01b0386169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910161098a565b80356001600160a01b0381168114610be957600080fd5b919050565b60008060408385031215610c0157600080fd5b610c0a83610bd2565b946020939093013593505050565b6001600160e01b031981168114610c2e57600080fd5b50565b600060208284031215610c4357600080fd5b8135610c4e81610c18565b9392505050565b60008083601f840112610c6757600080fd5b50813567ffffffffffffffff811115610c7f57600080fd5b6020830191508360208260051b8501011115610c9a57600080fd5b9250929050565b60008060008060008060808789031215610cba57600080fd5b610cc387610bd2565b9550610cd160208801610bd2565b9450604087013567ffffffffffffffff80821115610cee57600080fd5b610cfa8a838b01610c55565b90965094506060890135915080821115610d1357600080fd5b50610d2089828a01610c55565b979a9699509497509295939492505050565b600060208284031215610d4457600080fd5b5035919050565b600060208083528351808285015260005b81811015610d7857858101830151858201604001528201610d5c565b81811115610d8a576000604083870101525b50601f01601f1916929092016040019392505050565b600080600060608486031215610db557600080fd5b610dbe84610bd2565b95602085013595506040909401359392505050565b60008060008060808587031215610de957600080fd5b610df285610bd2565b9350610e0060208601610bd2565b93969395505050506040820135916060013590565b60008083601f840112610e2757600080fd5b50813567ffffffffffffffff811115610e3f57600080fd5b602083019150836020828501011115610c9a57600080fd5b60008060008060008060008060a0898b031215610e7357600080fd5b610e7c89610bd2565b9750610e8a60208a01610bd2565b9650604089013567ffffffffffffffff80821115610ea757600080fd5b610eb38c838d01610c55565b909850965060608b0135915080821115610ecc57600080fd5b610ed88c838d01610c55565b909650945060808b0135915080821115610ef157600080fd5b50610efe8b828c01610e15565b999c989b5096995094979396929594505050565b60008060008060408587031215610f2857600080fd5b843567ffffffffffffffff80821115610f4057600080fd5b610f4c88838901610c55565b90965094506020870135915080821115610f6557600080fd5b50610f7287828801610c55565b95989497509550505050565b6020808252825182820181905260009190848201906040850190845b81811015610fb657835183529284019291840191600101610f9a565b50909695505050505050565b60008060408385031215610fd557600080fd5b610fde83610bd2565b915060208301358015158114610ff357600080fd5b809150509250929050565b60008060006060848603121561101357600080fd5b61101c84610bd2565b925061102a60208501610bd2565b9150604084013590509250925092565b6000806040838503121561104d57600080fd5b61105683610bd2565b915061106460208401610bd2565b90509250929050565b60008060008060008060a0878903121561108657600080fd5b61108f87610bd2565b955061109d60208801610bd2565b94506040870135935060608701359250608087013567ffffffffffffffff8111156110c757600080fd5b610d2089828a01610e15565b81835260006001600160fb1b038311156110ec57600080fd5b8260051b8083602087013760009401602001938452509192915050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6001600160a01b0389811682528816602082015260a06040820181905260009061115f908301888a6110d3565b82810360608401526111728187896110d3565b90508281036080840152611187818587611109565b9b9a5050505050505050505050565b6000602082840312156111a857600080fd5b8151610c4e81610c18565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6000602082840312156111f157600080fd5b610c4e82610bd2565b634e487b7160e01b600052601160045260246000fd5b6000600019821415611224576112246111fa565b5060010190565b6001600160a01b03878116825286166020820152604081018590526060810184905260a0608082018190526000906112669083018486611109565b98975050505050505050565b6020808252600c908201526b4e6f2030206164647265737360a01b604082015260600190565b6000828210156112aa576112aa6111fa565b500390565b600082198211156112c2576112c26111fa565b500190565b6040815260006112db6040830186886110d3565b82810360208401526112ee8185876110d3565b97965050505050505056fea26469706673582212206343834806caa003de6b4ac96e10f0e95a144f95628e2f89318a9696562b88ea64736f6c63430008090033";

type ERC1155MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155Mock__factory extends ContractFactory {
  constructor(...args: ERC1155MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC1155Mock";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC1155Mock> {
    return super.deploy(overrides || {}) as Promise<ERC1155Mock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC1155Mock {
    return super.attach(address) as ERC1155Mock;
  }
  override connect(signer: Signer): ERC1155Mock__factory {
    return super.connect(signer) as ERC1155Mock__factory;
  }
  static readonly contractName: "ERC1155Mock";

  public readonly contractName: "ERC1155Mock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155MockInterface {
    return new utils.Interface(_abi) as ERC1155MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC1155Mock;
  }
}

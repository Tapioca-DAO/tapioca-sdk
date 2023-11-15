/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  MarketERC20,
  MarketERC20Interface,
} from "../../markets/MarketERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
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
        indexed: true,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "ApprovalBorrow",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowanceBorrow",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approveBorrow",
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
        internalType: "address",
        name: "owner",
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
        name: "owner",
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
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint16",
        name: "actionType",
        type: "uint16",
      },
    ],
    name: "permitAction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
    name: "permitBorrow",
    outputs: [],
    stateMutability: "nonpayable",
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
] as const;

const _bytecode =
  "0x61014060409080825234610198576110b5803803809161001f828561019d565b83398101602080838303126101985782516001600160401b0393848211610198570182601f820112156101985780519084821161016e5785519361006c601f8401601f191685018661019d565b82855283838301011161019857829060005b8381106101845750506000918401015283518481018181108582111761016e57600191839187528281520192603160f81b84528281519101209220908260e052610100948286524660a0528051918201927f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f948585528284015260608301524660808301523060a083015260a0825260c08201948286109086111761016e578490525190206080523060c052610120908152610ef492836101c1843960805183610a9f015260a05183610b6b015260c05183610a69015260e05183610aee01525182610b1401525181610acb0152f35b634e487b7160e01b600052604160045260246000fd5b81810183015186820184015284920161007e565b600080fd5b601f909101601f19168101906001600160401b0382119082101761016e5760405256fe608080604052600436101561001357600080fd5b600090813560e01c908162a02a201461094b57508063095ea7b31461092457806318160ddd146109085780631da8bf101461084857806323b872dd146106ab5780633644e5151461068857806370a082311461064f5780637ecebe00146106165780637fa0b84e146105e4578063910dd7c814610384578063a9059cbb146102a1578063d505accf146100fc5763dd62ed3e146100af57600080fd5b346100f95760403660031901126100f95760406020916100cd610997565b6100d56109b2565b6001600160a01b039182168352600285528383209116825283522054604051908152f35b80fd5b50346100f95761010b366109c8565b9083959495421161025c576001600160a01b03878116808a52600460205260408a208054919692959290600019831461024857826101f19694928d9260016101e998960190556040519160208301937f9cc5629bbe7baa98a89f6f8c2c396b83ab62dbb6cbb12f17f1d6ba7e6f53e266855260408401528a6060840152898c1660808401528c60a084015260c083015260e082015260e081526101ad81610a17565b5190206101b8610a66565b9060405190602082019261190160f01b845260228301526042820152604281526101e181610a4a565b519020610d74565b919091610c5f565b16036102035761020092610e47565b80f35b60405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152606490fd5b634e487b7160e01b8c52601160045260248cfd5b60405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606490fd5b50346100f95760403660031901126100f9576102bb610997565b60243580928115801590610372575b610302575b50506040519182526001600160a01b0316903390600080516020610e9f83398151915290602090a3602060405160018152f35b3381526001602052604081205461031b83821015610b91565b6001600160a01b0384169033829003610336575b50506102cf565b60409361034d91610348841515610bd6565b610c1b565b338352600160205283832055815220610367838254610c3e565b90558138808061032f565b50336001600160a01b038416146102ca565b50346100f95760403660031901126100f95767ffffffffffffffff6004358181116105b857366023820112156105b8578060040135908282116105d05760405192601f8301601f19908116603f01168401908111848210176105bc57908491604052828452602084019236602482840101116105b8578060246020930185378401015260243561ffff811681036105b4576101009182848051810103126105b0575180151581036105b05761043b60408501610c4b565b9161044860608601610c4b565b9460808101519460a08201519260c08301519160ff831683036105ac5760e08401519301519380421161025c578515610585577f9cc5629bbe7baa98a89f6f8c2c396b83ab62dbb6cbb12f17f1d6ba7e6f53e266915b6001600160a01b0388168b52600460205260408b20805491906000198314610571579161ffff61052e989694926101e998969460018401905560405194602086015216604084015260018060a01b038a16606084015260018060a01b038c1660808401528a60a084015260c083015260e082015260e0815261051f81610a17565b602081519101206101b8610a66565b6001600160a01b03838116911603610203571561055b57610200926001600160a01b039081169116610e47565b610200926001600160a01b039081169116610df9565b634e487b7160e01b8d52601160045260248dfd5b7f5c9ba5f0d101616843d7918f48ea857d6da95e04ac6d719e105e50a355e7c5d69161049e565b8980fd5b8480fd5b8380fd5b8280fd5b634e487b7160e01b85526041600452602485fd5b634e487b7160e01b84526041600452602484fd5b50346100f95760403660031901126100f95761060b610601610997565b6024359033610df9565b602060405160018152f35b50346100f95760203660031901126100f9576020906040906001600160a01b0361063e610997565b168152600483522054604051908152f35b50346100f95760203660031901126100f9576020906040906001600160a01b03610677610997565b168152600183522054604051908152f35b50346100f957806003193601126100f95760206106a3610a66565b604051908152f35b50346100f95760603660031901126100f9576106c5610997565b906106ce6109b2565b604435918261070c575b506040519182526001600160a01b03908116921690600080516020610e9f83398151915290602090a3602060405160018152f35b6001600160a01b0384811680835260016020908152604084205492869061073582861015610b91565b86169384840361074a575b50505050506106d8565b8386526002835260408087203388528452862054600181016107b4575b50926001602096936107928794604097610348600080516020610e9f8339815191529c9a1515610bd6565b92855252838320558152206107a8858254610c3e565b90559138808581610740565b9091811061080857926001602096936107928a600080516020610e9f8339815191529a98956107e58260409a610c1b565b86895260028552898920338a528552898920559497509497995050939650610767565b60405162461bcd60e51b815260048101849052601860248201527745524332303a20616c6c6f77616e636520746f6f206c6f7760401b6044820152606490fd5b50346100f957610857366109c8565b9083959495421161025c576001600160a01b03878116808a52600460205260408a208054919692959290600019831461024857826108f99694928d9260016101e998960190556040519160208301937f5c9ba5f0d101616843d7918f48ea857d6da95e04ac6d719e105e50a355e7c5d6855260408401528a6060840152898c1660808401528c60a084015260c083015260e082015260e081526101ad81610a17565b16036102035761020092610df9565b50346100f957806003193601126100f957602090604051908152f35b50346100f95760403660031901126100f95761060b610941610997565b6024359033610e47565b90503461099357604036600319011261099357604060209261096b610997565b6109736109b2565b6001600160a01b0391821683526003865283832091168252845220548152f35b5080fd5b600435906001600160a01b03821682036109ad57565b600080fd5b602435906001600160a01b03821682036109ad57565b60e09060031901126109ad576001600160a01b039060043582811681036109ad579160243590811681036109ad5790604435906064359060843560ff811681036109ad579060a4359060c43590565b610100810190811067ffffffffffffffff821117610a3457604052565b634e487b7160e01b600052604160045260246000fd5b6080810190811067ffffffffffffffff821117610a3457604052565b307f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161480610b68575b15610ac1577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f000000000000000000000000000000000000000000000000000000000000000082527f000000000000000000000000000000000000000000000000000000000000000060408201527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260a0815260c0810181811067ffffffffffffffff821117610a345760405251902090565b507f00000000000000000000000000000000000000000000000000000000000000004614610a98565b15610b9857565b60405162461bcd60e51b815260206004820152601660248201527545524332303a2062616c616e636520746f6f206c6f7760501b6044820152606490fd5b15610bdd57565b60405162461bcd60e51b815260206004820152601660248201527545524332303a206e6f207a65726f206164647265737360501b6044820152606490fd5b91908203918211610c2857565b634e487b7160e01b600052601160045260246000fd5b91908201809211610c2857565b51906001600160a01b03821682036109ad57565b6005811015610d5e5780610c705750565b60018103610cb85760405162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b6044820152606490fd5b60028103610d055760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b600314610d0e57565b60405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608490fd5b634e487b7160e01b600052602160045260246000fd5b9291906fa2a8918ca85bafe22016d0b997e4df60600160ff1b038311610ded5791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa15610de05781516001600160a01b03811615610dda579190565b50600190565b50604051903d90823e3d90fd5b50505050600090600390565b7fe50de2333c10a9502fcb1d8ae13a51bbf423153dfc63c2b8997665b32154afc360018060a01b038092169160009083825260036020526040822094169384825260205284604082205580a4565b909160207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259160018060a01b03809416938460005260028352604060002095169485600052825280604060002055604051908152a356feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa264697066735822122016cc024f749c768f11ee5e9fb75a7ea580fb627e06bedbcf0e3f1717802ff8fa64736f6c63430008120033";

type MarketERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MarketERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MarketERC20__factory extends ContractFactory {
  constructor(...args: MarketERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MarketERC20";
  }

  override deploy(
    name: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MarketERC20> {
    return super.deploy(name, overrides || {}) as Promise<MarketERC20>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, overrides || {});
  }
  override attach(address: string): MarketERC20 {
    return super.attach(address) as MarketERC20;
  }
  override connect(signer: Signer): MarketERC20__factory {
    return super.connect(signer) as MarketERC20__factory;
  }
  static readonly contractName: "MarketERC20";

  public readonly contractName: "MarketERC20";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MarketERC20Interface {
    return new utils.Interface(_abi) as MarketERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MarketERC20 {
    return new Contract(address, _abi, signerOrProvider) as MarketERC20;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  SavingsDaiMock,
  SavingsDaiMockInterface,
} from "../SavingsDaiMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_dai",
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
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
    ],
    name: "convertToShares",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "dai",
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
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "deposit",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "maxRedeem",
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
    ],
    name: "maxWithdraw",
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
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
    ],
    name: "previewRedeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
    ],
    name: "previewWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "redeem",
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
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "withdraw",
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
] as const;

const _bytecode =
  "0x60c0346100f0576001600160401b0390601f6110c238819003918201601f1916830191848311848410176100da578084926020946040528339810103126100f057516001600160a01b038116908190036100f0574660a05260405160208101907f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a794692188252466040820152306060820152606081526080810193818510908511176100da578360405251902060805260018060a01b03196004541617600455610fcc90816100f6823960805181610e62015260a05181610e3c0152f35b634e487b7160e01b600052604160045260246000fd5b600080fdfe608060408181526004918236101561001657600080fd5b600090813560e01c90816306fdde0314610ad957508063095ea7b314610a675780630a28a477146104f457806318160ddd14610a4857806323b872dd14610877578063313ce5671461085b5780633644e515146108375780634cdad506146104f45780636e553f651461068657806370a08231146106505780637ecebe001461061957806395d89b41146105d8578063a9059cbb146104fe578063b460af94146104f9578063ba087652146104f9578063c6e6f592146104f4578063ce96cb77146104cb578063d505accf1461021b578063d905777e14610180578063dd62ed3e146101335763f4b9fa751461010b57600080fd5b34610130578060031936011261013057506001600160a01b0360209254169051908152f35b80fd5b50903461017c578060031936011261017c5780602092610151610b7d565b610159610b98565b6001600160a01b0391821683526001865283832091168252845220549051908152f35b5080fd5b50903461017c57602092836003193601126102175761019d610b7d565b50836001600160a01b038254169160248451809481936370a0823160e01b835230908301525afa92831561020c5780936101da575b505051908152f35b909192508382813d8311610205575b6101f38183610f1c565b810103126101305750519038806101d2565b503d6101e9565b8251903d90823e3d90fd5b8280fd5b509190346102175760e036600319011261021757610237610b7d565b90610240610b98565b9060443590606435946084359460ff86168096036104c7576001600160a01b0380911695861561048457874210156104415786895260209560028752848a20988954996000198b1461042e5760018b01905585519084898301937f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c985528b89850152169a8b606084015288608084015260a083015260c082015260c0815260e081019181831067ffffffffffffffff84111761041b57928260809261035d60608f968d98610100918d52845190209361031886610ece565b60028652019361190160f01b855261032e610e39565b8c519485926103458c850198899251928391610b2e565b8301918b8301528d820152038b810184520182610f1c565b5190209087519182528482015260a4358782015260c435606082015282805260015afa15610411578590885116036103d05750907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259291848752600183528087208688528352818188205551908152a380f35b83606492519162461bcd60e51b8352820152601860248201527f45524332303a20496e76616c6964205369676e617475726500000000000000006044820152fd5b82513d89823e3d90fd5b634e487b7160e01b8c526041865260248cfd5b634e487b7160e01b8c526011865260248cfd5b835162461bcd60e51b8152602081850152600e60248201527f45524332303a20457870697265640000000000000000000000000000000000006044820152606490fd5b835162461bcd60e51b8152602081850152601860248201527f45524332303a204f776e65722063616e6e6f74206265203000000000000000006044820152606490fd5b8780fd5b50903461017c57602036600319011261017c576020906104e9610b7d565b506003549051908152f35b610bae565b610bcb565b50903461017c578060031936011261017c576020916001600160a01b03610523610b7d565b836024359384158015906105cd575b61056a575b505192835216907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef843392a35160018152f35b3381528087528181205461058086821015610d71565b8484169086823303610595575b505050610537565b6105a9916105a4841515610dbd565b610e09565b338352828952838320558152206105c1848254610e2c565b9055838680808661058d565b508383163314610532565b5091903461021757826003193601126102175761061592508051916105fc83610ece565b8252637344616960e01b60208301525191829182610b51565b0390f35b50903461017c57602036600319011261017c57806020926001600160a01b03610640610b7d565b1681526002845220549051908152f35b50903461017c57602036600319011261017c57806020926001600160a01b03610677610b7d565b16815280845220549051908152f35b509190346102175780600319360112610217578135916106a4610b98565b936003546106b28582610e2c565b9081106107f4576003556001600160a01b03809516948582526020958287528483206106df878254610e2c565b9055827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef888751898152a38254168351868101906323b872dd60e01b82523360248201523060448201528660648201526064815260a0810181811067ffffffffffffffff8211176107e157849392918491885251925af161075e610f3e565b816107b1575b5015610771575051908152f35b8380606493519262461bcd60e51b845283015260248201527f426f72696e6745524332303a205472616e7366657246726f6d206661696c65646044820152fd5b805180159250869083156107c9575b50505038610764565b6107d99350820181019101610f7e565b3885816107c0565b634e487b7160e01b855260418652602485fd5b835162461bcd60e51b8152602081850152600d60248201527f4d696e74206f766572666c6f77000000000000000000000000000000000000006044820152606490fd5b50903461017c578160031936011261017c57602090610854610e39565b9051908152f35b50903461017c578160031936011261017c576020905160128152f35b503461013057606036600319011261013057610891610b7d565b9061089a610b98565b60443591826108e7575b5060208095507fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9185519384526001600160a01b03809116941692a35160018152f35b6001600160a01b039586851696878352602090838252878420549061090e87831015610d71565b851692838a03610922575b505050506108a4565b8985526001835288852033865283528885205490600019820361099e575b50509282602099828a9461097d8a8e996105a47fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9c9a1515610dbd565b9282525283832055815220610993858254610e2c565b905591388080610919565b878210610a05575092602099858a9461097d8a8e99966109e0827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9d9b610e09565b8686526001855289862033875285528986205596505050945095509981949650610940565b895162461bcd60e51b8152908101849052601860248201527f45524332303a20616c6c6f77616e636520746f6f206c6f7700000000000000006044820152606490fd5b50903461017c578160031936011261017c576020906003549051908152f35b50903461017c578060031936011261017c5760209181610a85610b7d565b91602435918291338152600187526001600160a01b038282209516948582528752205582519081527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925843392a35160018152f35b905082346102175782600319360112610217576106159250610afa82610ece565b600a82527f7344414920746f6b656e0000000000000000000000000000000000000000000060208301525191829182610b51565b60005b838110610b415750506000910152565b8181015183820152602001610b31565b60409160208252610b718151809281602086015260208686019101610b2e565b601f01601f1916010190565b600435906001600160a01b0382168203610b9357565b600080fd5b602435906001600160a01b0382168203610b9357565b34610b93576020366003190112610b935760206040516004358152f35b34610b93576060366003190112610b9357600435602435906001600160a01b03808316809303610b935760443590808216809203610b9357600454166040918251946020958681019163a9059cbb60e01b8352602482015285604482015260448152610c3681610f00565b600093849283809351925af1610c4a610f3e565b81610d41575b5015610cfd57808252818552838383205410610cb957610c7284600354610e09565b600355808252818552828220610c89858254610e09565b90557fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef858451868152a351908152f35b825162461bcd60e51b815260048101869052600d60248201527f4275726e20746f6f206d756368000000000000000000000000000000000000006044820152606490fd5b825162461bcd60e51b815260048101869052601c60248201527f426f72696e6745524332303a205472616e73666572206661696c6564000000006044820152606490fd5b80518015925087908315610d59575b50505038610c50565b610d699350820181019101610f7e565b388681610d50565b15610d7857565b60405162461bcd60e51b815260206004820152601660248201527f45524332303a2062616c616e636520746f6f206c6f77000000000000000000006044820152606490fd5b15610dc457565b60405162461bcd60e51b815260206004820152601660248201527f45524332303a206e6f207a65726f2061646472657373000000000000000000006044820152606490fd5b91908203918211610e1657565b634e487b7160e01b600052601160045260246000fd5b91908201809211610e1657565b467f000000000000000000000000000000000000000000000000000000000000000003610e84577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a79469218825246604082015230606082015260608152610ec881610f00565b51902090565b6040810190811067ffffffffffffffff821117610eea57604052565b634e487b7160e01b600052604160045260246000fd5b6080810190811067ffffffffffffffff821117610eea57604052565b90601f8019910116810190811067ffffffffffffffff821117610eea57604052565b3d15610f79573d9067ffffffffffffffff8211610eea5760405191610f6d601f8201601f191660200184610f1c565b82523d6000602084013e565b606090565b90816020910312610b9357518015158103610b93579056fea26469706673582212200918e1887c97d80499627e3624a9c3b22981fe5e6a403eb59a5d01740abda01864736f6c63430008120033";

type SavingsDaiMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SavingsDaiMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SavingsDaiMock__factory extends ContractFactory {
  constructor(...args: SavingsDaiMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "SavingsDaiMock";
  }

  override deploy(
    _dai: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SavingsDaiMock> {
    return super.deploy(_dai, overrides || {}) as Promise<SavingsDaiMock>;
  }
  override getDeployTransaction(
    _dai: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_dai, overrides || {});
  }
  override attach(address: string): SavingsDaiMock {
    return super.attach(address) as SavingsDaiMock;
  }
  override connect(signer: Signer): SavingsDaiMock__factory {
    return super.connect(signer) as SavingsDaiMock__factory;
  }
  static readonly contractName: "SavingsDaiMock";

  public readonly contractName: "SavingsDaiMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SavingsDaiMockInterface {
    return new utils.Interface(_abi) as SavingsDaiMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SavingsDaiMock {
    return new Contract(address, _abi, signerOrProvider) as SavingsDaiMock;
  }
}

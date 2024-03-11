/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ERC20Mock,
  ERC20MockInterface,
} from "../../../contracts/mocks/ERC20Mock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
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
        name: "account",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
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
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "freeMint",
    outputs: [],
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
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
    stateMutability: "view",
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
    stateMutability: "view",
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
  "0x60806040523480156200001157600080fd5b5060405162000f7e38038062000f7e833981016040819052620000349162000126565b8181600362000044838262000221565b50600462000053828262000221565b5050505050620002ed565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200008657600080fd5b81516001600160401b0380821115620000a357620000a36200005e565b604051601f8301601f19908116603f01168101908282118183101715620000ce57620000ce6200005e565b8160405283815260209250866020858801011115620000ec57600080fd5b600091505b83821015620001105785820183015181830184015290820190620000f1565b6000602085830101528094505050505092915050565b600080604083850312156200013a57600080fd5b82516001600160401b03808211156200015257600080fd5b620001608683870162000074565b935060208501519150808211156200017757600080fd5b50620001868582860162000074565b9150509250929050565b600181811c90821680620001a557607f821691505b602082108103620001c657634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200021c576000816000526020600020601f850160051c81016020861015620001f75750805b601f850160051c820191505b81811015620002185782815560010162000203565b5050505b505050565b81516001600160401b038111156200023d576200023d6200005e565b62000255816200024e845462000190565b84620001cc565b602080601f8311600181146200028d5760008415620002745750858301515b600019600386901b1c1916600185901b17855562000218565b600085815260208120601f198616915b82811015620002be578886015182559484019460019091019084016200029d565b5085821015620002dd5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610c8180620002fd6000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c806340c10f191161008c57806395d89b411161006657806395d89b41146101ca578063a457c2d7146101d2578063a9059cbb146101e5578063dd62ed3e146101f857600080fd5b806340c10f191461016c57806370a08231146101815780637c928fe9146101b757600080fd5b806323b872dd116100bd57806323b872dd14610137578063313ce5671461014a578063395093511461015957600080fd5b806306fdde03146100e4578063095ea7b31461010257806318160ddd14610125575b600080fd5b6100ec61023e565b6040516100f99190610a54565b60405180910390f35b610115610110366004610aea565b6102d0565b60405190151581526020016100f9565b6002545b6040519081526020016100f9565b610115610145366004610b14565b6102ea565b604051601281526020016100f9565b610115610167366004610aea565b61030e565b61017f61017a366004610aea565b61035a565b005b61012961018f366004610b50565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b61017f6101c5366004610b72565b610368565b6100ec610375565b6101156101e0366004610aea565b610384565b6101156101f3366004610aea565b61045a565b610129610206366004610b8b565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b60606003805461024d90610bbe565b80601f016020809104026020016040519081016040528092919081815260200182805461027990610bbe565b80156102c65780601f1061029b576101008083540402835291602001916102c6565b820191906000526020600020905b8154815290600101906020018083116102a957829003601f168201915b5050505050905090565b6000336102de818585610468565b60019150505b92915050565b6000336102f885828561061b565b6103038585856106f2565b506001949350505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091906102de9082908690610355908790610c11565b610468565b6103648282610961565b5050565b6103723382610961565b50565b60606004805461024d90610bbe565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091908381101561044d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6103038286868403610468565b6000336102de8185856106f2565b73ffffffffffffffffffffffffffffffffffffffff831661050a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610444565b73ffffffffffffffffffffffffffffffffffffffff82166105ad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610444565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146106ec57818110156106df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610444565b6106ec8484848403610468565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610795576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610444565b73ffffffffffffffffffffffffffffffffffffffff8216610838576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610444565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260208190526040902054818110156108ee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610444565b73ffffffffffffffffffffffffffffffffffffffff848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a36106ec565b73ffffffffffffffffffffffffffffffffffffffff82166109de576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610444565b80600260008282546109f09190610c11565b909155505073ffffffffffffffffffffffffffffffffffffffff8216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b60006020808352835180602085015260005b81811015610a8257858101830151858201604001528201610a66565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610ae557600080fd5b919050565b60008060408385031215610afd57600080fd5b610b0683610ac1565b946020939093013593505050565b600080600060608486031215610b2957600080fd5b610b3284610ac1565b9250610b4060208501610ac1565b9150604084013590509250925092565b600060208284031215610b6257600080fd5b610b6b82610ac1565b9392505050565b600060208284031215610b8457600080fd5b5035919050565b60008060408385031215610b9e57600080fd5b610ba783610ac1565b9150610bb560208401610ac1565b90509250929050565b600181811c90821680610bd257607f821691505b602082108103610c0b577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b808201808211156102e4577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea26469706673582212207c7eabd8b4ecd08fbe37ae02d08c68480a813ef94f8dc877dfcd0a88bad114e364736f6c63430008160033";

type ERC20MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Mock__factory extends ContractFactory {
  constructor(...args: ERC20MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC20Mock";
  }

  override deploy(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20Mock> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC20Mock>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override attach(address: string): ERC20Mock {
    return super.attach(address) as ERC20Mock;
  }
  override connect(signer: Signer): ERC20Mock__factory {
    return super.connect(signer) as ERC20Mock__factory;
  }
  static readonly contractName: "ERC20Mock";

  public readonly contractName: "ERC20Mock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20MockInterface {
    return new utils.Interface(_abi) as ERC20MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC20Mock;
  }
}

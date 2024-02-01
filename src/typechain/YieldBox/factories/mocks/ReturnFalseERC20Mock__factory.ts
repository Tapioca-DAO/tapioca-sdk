/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  ReturnFalseERC20Mock,
  ReturnFalseERC20MockInterface,
} from "../../mocks/ReturnFalseERC20Mock";

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
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "supply",
        type: "uint256",
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
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
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
        name: "_value",
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
        name: "success",
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
        name: "success",
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
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162000e4338038062000e43833981016040819052620000349162000140565b60016200004285826200025c565b5060006200005184826200025c565b5060ff90911660805260028190553360009081526003602052604090205550620003289050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620000a057600080fd5b81516001600160401b0380821115620000bd57620000bd62000078565b604051601f8301601f19908116603f01168101908282118183101715620000e857620000e862000078565b81604052838152602092508660208588010111156200010657600080fd5b600091505b838210156200012a57858201830151818301840152908201906200010b565b6000602085830101528094505050505092915050565b600080600080608085870312156200015757600080fd5b84516001600160401b03808211156200016f57600080fd5b6200017d888389016200008e565b955060208701519150808211156200019457600080fd5b50620001a3878288016200008e565b935050604085015160ff81168114620001bb57600080fd5b6060959095015193969295505050565b600181811c90821680620001e057607f821691505b6020821081036200020157634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111562000257576000816000526020600020601f850160051c81016020861015620002325750805b601f850160051c820191505b8181101562000253578281556001016200023e565b5050505b505050565b81516001600160401b0381111562000278576200027862000078565b6200029081620002898454620001cb565b8462000207565b602080601f831160018114620002c85760008415620002af5750858301515b600019600386901b1c1916600185901b17855562000253565b600085815260208120601f198616915b82811015620002f957888601518255948401946001909101908401620002d8565b5085821015620003185787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b608051610aff6200034460003960006101490152610aff6000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c806370a0823111610081578063a9059cbb1161005b578063a9059cbb14610222578063d505accf14610235578063dd62ed3e1461024a57600080fd5b806370a08231146101da5780637ecebe00146101fa57806395d89b411461021a57600080fd5b806323b872dd116100b257806323b872dd14610131578063313ce567146101445780633644e5151461017d57600080fd5b806306fdde03146100d9578063095ea7b3146100f757806318160ddd1461011a575b600080fd5b6100e1610275565b6040516100ee91906108a8565b60405180910390f35b61010a610105366004610913565b610303565b60405190151581526020016100ee565b61012360025481565b6040519081526020016100ee565b61010a61013f36600461093d565b610370565b61016b7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff90911681526020016100ee565b610123604080517f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a79469218602082015246918101829052306060820152600091906080016040516020818303038152906040528051906020012091505090565b6101236101e8366004610979565b60036020526000908152604090205481565b610123610208366004610979565b60056020526000908152604090205481565b6100e16104e1565b61010a610230366004610913565b6104ee565b610248610243366004610994565b6105d4565b005b610123610258366004610a07565b600460209081526000928352604080842090915290825290205481565b6001805461028290610a3a565b80601f01602080910402602001604051908101604052809291908181526020018280546102ae90610a3a565b80156102fb5780601f106102d0576101008083540402835291602001916102fb565b820191906000526020600020905b8154815290600101906020018083116102de57829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061035e9086815260200190565b60405180910390a35060015b92915050565b6001600160a01b03831660009081526003602052604081205482118015906103bb57506001600160a01b03841660009081526004602090815260408083203384529091529020548211155b80156103e857506001600160a01b0383166000908152600360205260409020546103e58382610a8a565b10155b156104d6576001600160a01b03841660009081526003602052604081208054849290610415908490610a9d565b90915550506001600160a01b03841660009081526004602090815260408083203384529091528120805484929061044d908490610a9d565b90915550506001600160a01b0383166000908152600360205260408120805484929061047a908490610a8a565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516104c691815260200190565b60405180910390a35060016104da565b5060005b9392505050565b6000805461028290610a3a565b33600090815260036020526040812054821180159061052e57506001600160a01b03831660009081526003602052604090205461052b8382610a8a565b10155b156105cc573360009081526003602052604081208054849290610552908490610a9d565b90915550506001600160a01b0383166000908152600360205260408120805484929061057f908490610a8a565b90915550506040518281526001600160a01b0384169033907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a350600161036a565b50600061036a565b8342106106285760405162461bcd60e51b815260206004820152601960248201527f52657475726e46616c736545524332303a20457870697265640000000000000060448201526064015b60405180910390fd5b6000610687604080517f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a79469218602082015246918101829052306060820152600091906080016040516020818303038152906040528051906020012091505090565b6001600160a01b038916600090815260056020526040812080547f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9928c928c928c929091906106d583610ab0565b909155506040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810187905260e001604051602081830303815290604052805190602001206040516020016107699291907f190100000000000000000000000000000000000000000000000000000000000081526002810192909252602282015260420190565b60408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156107d4573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b0316146108415760405162461bcd60e51b815260206004820152601d60248201527f52657475726e46616c736545524332303a20496e76616c696420536967000000604482015260640161061f565b6001600160a01b038981166000818152600460209081526040808320948d16808452948252918290208b905590518a81527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050505050505050565b60006020808352835180602085015260005b818110156108d6578581018301518582016040015282016108ba565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b038116811461090e57600080fd5b919050565b6000806040838503121561092657600080fd5b61092f836108f7565b946020939093013593505050565b60008060006060848603121561095257600080fd5b61095b846108f7565b9250610969602085016108f7565b9150604084013590509250925092565b60006020828403121561098b57600080fd5b6104da826108f7565b600080600080600080600060e0888a0312156109af57600080fd5b6109b8886108f7565b96506109c6602089016108f7565b95506040880135945060608801359350608088013560ff811681146109ea57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610a1a57600080fd5b610a23836108f7565b9150610a31602084016108f7565b90509250929050565b600181811c90821680610a4e57607f821691505b602082108103610a6e57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561036a5761036a610a74565b8181038181111561036a5761036a610a74565b600060018201610ac257610ac2610a74565b506001019056fea26469706673582212206e226509bf5b85134f17ae2f5ed039f94760ab3e85b0d1d6aaecb5c1883d839f64736f6c63430008160033";

type ReturnFalseERC20MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReturnFalseERC20MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReturnFalseERC20Mock__factory extends ContractFactory {
  constructor(...args: ReturnFalseERC20MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ReturnFalseERC20Mock";
  }

  override deploy(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    decimals_: PromiseOrValue<BigNumberish>,
    supply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ReturnFalseERC20Mock> {
    return super.deploy(
      name_,
      symbol_,
      decimals_,
      supply,
      overrides || {}
    ) as Promise<ReturnFalseERC20Mock>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    decimals_: PromiseOrValue<BigNumberish>,
    supply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      decimals_,
      supply,
      overrides || {}
    );
  }
  override attach(address: string): ReturnFalseERC20Mock {
    return super.attach(address) as ReturnFalseERC20Mock;
  }
  override connect(signer: Signer): ReturnFalseERC20Mock__factory {
    return super.connect(signer) as ReturnFalseERC20Mock__factory;
  }
  static readonly contractName: "ReturnFalseERC20Mock";

  public readonly contractName: "ReturnFalseERC20Mock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReturnFalseERC20MockInterface {
    return new utils.Interface(_abi) as ReturnFalseERC20MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReturnFalseERC20Mock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ReturnFalseERC20Mock;
  }
}

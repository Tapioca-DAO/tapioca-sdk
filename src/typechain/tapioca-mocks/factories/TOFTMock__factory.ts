/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { TOFTMock, TOFTMockInterface } from "../TOFTMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_erc20",
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
    inputs: [],
    name: "erc20",
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
    name: "erc20_",
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
        name: "_toAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "unwrap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_fromAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_toAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "wrap",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60c060405234801561001057600080fd5b506040516115ae3803806115ae83398101604081905261002f916100bb565b4660a081905261009281604080517f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a794692186020820152908101829052306060820152600090608001604051602081830303815290604052805190602001209050919050565b60805250600480546001600160a01b0319166001600160a01b03929092169190911790556100eb565b6000602082840312156100cd57600080fd5b81516001600160a01b03811681146100e457600080fd5b9392505050565b60805160a05161149e6101106000396000610c2c01526000610c61015261149e6000f3fe6080604052600436106100d65760003560e01c806370a082311161007f578063a9059cbb11610059578063a9059cbb1461024b578063d505accf1461026b578063dd62ed3e1461028b578063e2eec30b146102c357600080fd5b806370a08231146101a5578063785e9e86146101d25780637ecebe001461021e57600080fd5b80633644e515116100b05780633644e5151461015b57806339f4769314610170578063623556381461019257600080fd5b8063095ea7b3146100e257806318160ddd1461011757806323b872dd1461013b57600080fd5b366100dd57005b600080fd5b3480156100ee57600080fd5b506101026100fd366004611224565b6102f0565b60405190151581526020015b60405180910390f35b34801561012357600080fd5b5061012d60035481565b60405190815260200161010e565b34801561014757600080fd5b5061010261015636600461124e565b61036a565b34801561016757600080fd5b5061012d61062e565b34801561017c57600080fd5b5061019061018b366004611224565b61063d565b005b6101906101a036600461124e565b610742565b3480156101b157600080fd5b5061012d6101c036600461128a565b60006020819052908152604090205481565b3480156101de57600080fd5b5060045473ffffffffffffffffffffffffffffffffffffffff165b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161010e565b34801561022a57600080fd5b5061012d61023936600461128a565b60026020526000908152604090205481565b34801561025757600080fd5b50610102610266366004611224565b6107de565b34801561027757600080fd5b506101906102863660046112ac565b610984565b34801561029757600080fd5b5061012d6102a636600461131f565b600160209081526000928352604080842090915290825290205481565b3480156102cf57600080fd5b506004546101f99073ffffffffffffffffffffffffffffffffffffffff1681565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906103589086815260200190565b60405180910390a35060015b92915050565b600081156105bd5773ffffffffffffffffffffffffffffffffffffffff8416600090815260208190526040902054828110156103ed5760405162461bcd60e51b815260206004820152601660248201527f45524332303a2062616c616e636520746f6f206c6f770000000000000000000060448201526064015b60405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16146105bb5773ffffffffffffffffffffffffffffffffffffffff851660009081526001602090815260408083203384529091529020547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461050457838110156104c85760405162461bcd60e51b815260206004820152601860248201527f45524332303a20616c6c6f77616e636520746f6f206c6f77000000000000000060448201526064016103e4565b6104d28482611381565b73ffffffffffffffffffffffffffffffffffffffff871660009081526001602090815260408083203384529091529020555b73ffffffffffffffffffffffffffffffffffffffff85166105675760405162461bcd60e51b815260206004820152601660248201527f45524332303a206e6f207a65726f20616464726573730000000000000000000060448201526064016103e4565b6105718483611381565b73ffffffffffffffffffffffffffffffffffffffff80881660009081526020819052604080822093909355908716815290812080548692906105b4908490611394565b9091555050505b505b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161061c91815260200190565b60405180910390a35060019392505050565b6000610638610c27565b905090565b6106473382610c87565b60045473ffffffffffffffffffffffffffffffffffffffff161561068d576004546106899073ffffffffffffffffffffffffffffffffffffffff168383610d9f565b5050565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146106e7576040519150601f19603f3d011682016040523d82523d6000602084013e6106ec565b606091505b505090508061073d5760405162461bcd60e51b815260206004820181905260248201527f544f46544d6f636b3a206661696c656420746f207472616e736665722045544860448201526064016103e4565b505050565b61074c8282610ef5565b60045473ffffffffffffffffffffffffffffffffffffffff161561078f5760045461073d9073ffffffffffffffffffffffffffffffffffffffff16843084610feb565b80341461073d5760405162461bcd60e51b815260206004820181905260248201527f544f46544d6f636b3a206661696c656420746f2072656365697665642045544860448201526064016103e4565b60008115158061080357503373ffffffffffffffffffffffffffffffffffffffff8416145b1561093a5733600090815260208190526040902054828110156108685760405162461bcd60e51b815260206004820152601660248201527f45524332303a2062616c616e636520746f6f206c6f770000000000000000000060448201526064016103e4565b3373ffffffffffffffffffffffffffffffffffffffff8516146109385773ffffffffffffffffffffffffffffffffffffffff84166108e85760405162461bcd60e51b815260206004820152601660248201527f45524332303a206e6f207a65726f20616464726573730000000000000000000060448201526064016103e4565b6108f28382611381565b336000908152602081905260408082209290925573ffffffffffffffffffffffffffffffffffffffff861681529081208054859290610932908490611394565b90915550505b505b60405182815273ffffffffffffffffffffffffffffffffffffffff84169033907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610358565b73ffffffffffffffffffffffffffffffffffffffff87166109e75760405162461bcd60e51b815260206004820152601860248201527f45524332303a204f776e65722063616e6e6f742062652030000000000000000060448201526064016103e4565b834210610a365760405162461bcd60e51b815260206004820152600e60248201527f45524332303a204578706972656400000000000000000000000000000000000060448201526064016103e4565b73ffffffffffffffffffffffffffffffffffffffff871660008181526002602052604081208054600192610afa927f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9928d928d928d9291610a96836113a7565b9091555060408051602081019690965273ffffffffffffffffffffffffffffffffffffffff94851690860152929091166060840152608083015260a082015260c0810188905260e0016040516020818303038152906040528051906020012061114a565b6040805160008152602081018083529290925260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610b48573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff1614610bb55760405162461bcd60e51b815260206004820152601860248201527f45524332303a20496e76616c6964205369676e6174757265000000000000000060448201526064016103e4565b73ffffffffffffffffffffffffffffffffffffffff8781166000818152600160209081526040808320948b168084529482529182902089905590518881527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b6000467f00000000000000000000000000000000000000000000000000000000000000008114610c5f57610c5a816111ba565b610c81565b7f00000000000000000000000000000000000000000000000000000000000000005b91505090565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260208190526040902054811115610cfc5760405162461bcd60e51b815260206004820152600d60248201527f4275726e20746f6f206d7563680000000000000000000000000000000000000060448201526064016103e4565b8060036000828254610d0e9190611381565b909155505073ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604081208054839290610d48908490611381565b909155505060405181815260009073ffffffffffffffffffffffffffffffffffffffff8416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790529151600092839290871691610e369190611403565b6000604051808303816000865af19150503d8060008114610e73576040519150601f19603f3d011682016040523d82523d6000602084013e610e78565b606091505b5091509150818015610ea2575080511580610ea2575080806020019051810190610ea2919061141f565b610eee5760405162461bcd60e51b815260206004820152601c60248201527f426f72696e6745524332303a205472616e73666572206661696c65640000000060448201526064016103e4565b5050505050565b600081600354610f059190611394565b9050600354811015610f595760405162461bcd60e51b815260206004820152600d60248201527f4d696e74206f766572666c6f770000000000000000000000000000000000000060448201526064016103e4565b600381905573ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604081208054849290610f93908490611394565b909155505060405182815273ffffffffffffffffffffffffffffffffffffffff8416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b6040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd00000000000000000000000000000000000000000000000000000000179052915160009283929088169161108a9190611403565b6000604051808303816000865af19150503d80600081146110c7576040519150601f19603f3d011682016040523d82523d6000602084013e6110cc565b606091505b50915091508180156110f65750805115806110f65750808060200190518101906110f6919061141f565b6111425760405162461bcd60e51b815260206004820181905260248201527f426f72696e6745524332303a205472616e7366657246726f6d206661696c656460448201526064016103e4565b505050505050565b60006040518060400160405280600281526020017f190100000000000000000000000000000000000000000000000000000000000081525061118a610c27565b8360405160200161119d93929190611441565b604051602081830303815290604052805190602001209050919050565b604080517f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a79469218602082015290810182905230606082015260009060800161119d565b803573ffffffffffffffffffffffffffffffffffffffff8116811461121f57600080fd5b919050565b6000806040838503121561123757600080fd5b611240836111fb565b946020939093013593505050565b60008060006060848603121561126357600080fd5b61126c846111fb565b925061127a602085016111fb565b9150604084013590509250925092565b60006020828403121561129c57600080fd5b6112a5826111fb565b9392505050565b600080600080600080600060e0888a0312156112c757600080fd5b6112d0886111fb565b96506112de602089016111fb565b95506040880135945060608801359350608088013560ff8116811461130257600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561133257600080fd5b61133b836111fb565b9150611349602084016111fb565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561036457610364611352565b8082018082111561036457610364611352565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036113d8576113d8611352565b5060010190565b60005b838110156113fa5781810151838201526020016113e2565b50506000910152565b600082516114158184602087016113df565b9190910192915050565b60006020828403121561143157600080fd5b815180151581146112a557600080fd5b600084516114538184602089016113df565b9190910192835250602082015260400191905056fea2646970667358221220ff307378e4c467e646a4a6c62086593818d4c6871856a175d8247012b512133464736f6c63430008160033";

type TOFTMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TOFTMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TOFTMock__factory extends ContractFactory {
  constructor(...args: TOFTMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TOFTMock";
  }

  override deploy(
    _erc20: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TOFTMock> {
    return super.deploy(_erc20, overrides || {}) as Promise<TOFTMock>;
  }
  override getDeployTransaction(
    _erc20: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_erc20, overrides || {});
  }
  override attach(address: string): TOFTMock {
    return super.attach(address) as TOFTMock;
  }
  override connect(signer: Signer): TOFTMock__factory {
    return super.connect(signer) as TOFTMock__factory;
  }
  static readonly contractName: "TOFTMock";

  public readonly contractName: "TOFTMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TOFTMockInterface {
    return new utils.Interface(_abi) as TOFTMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TOFTMock {
    return new Contract(address, _abi, signerOrProvider) as TOFTMock;
  }
}

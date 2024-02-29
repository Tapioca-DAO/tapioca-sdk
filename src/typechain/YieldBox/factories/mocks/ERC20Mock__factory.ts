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
import type { ERC20Mock, ERC20MockInterface } from "../../mocks/ERC20Mock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_initialAmount",
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
] as const;

const _bytecode =
  "0x60c060405234801561001057600080fd5b50604051610c2d380380610c2d83398101604081905261002f916100b0565b4660a081905261009281604080517f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a794692186020820152908101829052306060820152600090608001604051602081830303815290604052805190602001209050919050565b608052503360009081526020819052604090208190556003556100c9565b6000602082840312156100c257600080fd5b5051919050565b60805160a051610b3f6100ee600039600061080e015260006108430152610b3f6000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c806370a0823111610076578063a9059cbb1161005b578063a9059cbb14610142578063d505accf14610155578063dd62ed3e1461016a57600080fd5b806370a08231146101025780637ecebe001461012257600080fd5b8063095ea7b3146100a857806318160ddd146100d057806323b872dd146100e75780633644e515146100fa575b600080fd5b6100bb6100b6366004610936565b610195565b60405190151581526020015b60405180910390f35b6100d960035481565b6040519081526020016100c7565b6100bb6100f5366004610960565b610202565b6100d9610433565b6100d961011036600461099c565b60006020819052908152604090205481565b6100d961013036600461099c565b60026020526000908152604090205481565b6100bb610150366004610936565b610442565b6101686101633660046109be565b6105a7565b005b6100d9610178366004610a31565b600160209081526000928352604080842090915290825290205481565b3360008181526001602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906101f09086815260200190565b60405180910390a35060015b92915050565b600081156103dc576001600160a01b038416600090815260208190526040902054828110156102785760405162461bcd60e51b815260206004820152601660248201527f45524332303a2062616c616e636520746f6f206c6f770000000000000000000060448201526064015b60405180910390fd5b836001600160a01b0316856001600160a01b0316146103da576001600160a01b0385166000908152600160209081526040808320338452909152902054600019811461033d578381101561030e5760405162461bcd60e51b815260206004820152601860248201527f45524332303a20616c6c6f77616e636520746f6f206c6f770000000000000000604482015260640161026f565b6103188482610a93565b6001600160a01b03871660009081526001602090815260408083203384529091529020555b6001600160a01b0385166103935760405162461bcd60e51b815260206004820152601660248201527f45524332303a206e6f207a65726f206164647265737300000000000000000000604482015260640161026f565b61039d8483610a93565b6001600160a01b0380881660009081526020819052604080822093909355908716815290812080548692906103d3908490610aa6565b9091555050505b505b826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161042191815260200190565b60405180910390a35060019392505050565b600061043d610809565b905090565b60008115158061045a5750336001600160a01b038416145b1561056a5733600090815260208190526040902054828110156104bf5760405162461bcd60e51b815260206004820152601660248201527f45524332303a2062616c616e636520746f6f206c6f7700000000000000000000604482015260640161026f565b336001600160a01b03851614610568576001600160a01b0384166105255760405162461bcd60e51b815260206004820152601660248201527f45524332303a206e6f207a65726f206164647265737300000000000000000000604482015260640161026f565b61052f8382610a93565b33600090815260208190526040808220929092556001600160a01b03861681529081208054859290610562908490610aa6565b90915550505b505b6040518281526001600160a01b0384169033907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016101f0565b6001600160a01b0387166105fd5760405162461bcd60e51b815260206004820152601860248201527f45524332303a204f776e65722063616e6e6f7420626520300000000000000000604482015260640161026f565b83421061064c5760405162461bcd60e51b815260206004820152600e60248201527f45524332303a2045787069726564000000000000000000000000000000000000604482015260640161026f565b6001600160a01b038716600081815260026020526040812080546001926106f6927f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9928d928d928d929161069f83610ab9565b909155506040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810188905260e00160405160208183030381529060405280519060200120610869565b6040805160008152602081018083529290925260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610744573d6000803e3d6000fd5b505050602060405103516001600160a01b0316146107a45760405162461bcd60e51b815260206004820152601860248201527f45524332303a20496e76616c6964205369676e61747572650000000000000000604482015260640161026f565b6001600160a01b038781166000818152600160209081526040808320948b168084529482529182902089905590518881527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b6000467f000000000000000000000000000000000000000000000000000000000000000081146108415761083c816108d9565b610863565b7f00000000000000000000000000000000000000000000000000000000000000005b91505090565b60006040518060400160405280600281526020017f19010000000000000000000000000000000000000000000000000000000000008152506108a9610809565b836040516020016108bc93929190610ad2565b604051602081830303815290604052805190602001209050919050565b604080517f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a7946921860208201529081018290523060608201526000906080016108bc565b80356001600160a01b038116811461093157600080fd5b919050565b6000806040838503121561094957600080fd5b6109528361091a565b946020939093013593505050565b60008060006060848603121561097557600080fd5b61097e8461091a565b925061098c6020850161091a565b9150604084013590509250925092565b6000602082840312156109ae57600080fd5b6109b78261091a565b9392505050565b600080600080600080600060e0888a0312156109d957600080fd5b6109e28861091a565b96506109f06020890161091a565b95506040880135945060608801359350608088013560ff81168114610a1457600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610a4457600080fd5b610a4d8361091a565b9150610a5b6020840161091a565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156101fc576101fc610a64565b808201808211156101fc576101fc610a64565b600060018201610acb57610acb610a64565b5060010190565b6000845160005b81811015610af35760208188018101518583015201610ad9565b509190910192835250602082015260400191905056fea26469706673582212202a82a5f9b824d1c7440e24b6dd967bb0d0799d496f9ce3bb1e3c657abbb9c17e64736f6c63430008160033";

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
    _initialAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20Mock> {
    return super.deploy(_initialAmount, overrides || {}) as Promise<ERC20Mock>;
  }
  override getDeployTransaction(
    _initialAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_initialAmount, overrides || {});
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

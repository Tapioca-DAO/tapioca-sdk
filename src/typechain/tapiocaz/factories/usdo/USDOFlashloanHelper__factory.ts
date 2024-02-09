/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  USDOFlashloanHelper,
  USDOFlashloanHelperInterface,
} from "../../usdo/USDOFlashloanHelper";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IUSDO",
        name: "_usdo",
        type: "address",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AddressZero",
    type: "error",
  },
  {
    inputs: [],
    name: "AllowanceNotValid",
    type: "error",
  },
  {
    inputs: [],
    name: "AmountTooBig",
    type: "error",
  },
  {
    inputs: [],
    name: "Failed",
    type: "error",
  },
  {
    inputs: [],
    name: "NotValid",
    type: "error",
  },
  {
    inputs: [],
    name: "Paused",
    type: "error",
  },
  {
    inputs: [],
    name: "Reentrancy",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_old",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_new",
        type: "uint256",
      },
    ],
    name: "FlashMintFeeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_old",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_new",
        type: "uint256",
      },
    ],
    name: "MaxFlashMintUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
        name: "_usdo",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "flashFee",
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
        internalType: "contract IERC3156FlashBorrower",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "flashLoan",
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
    inputs: [],
    name: "flashMintFee",
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
    name: "maxFlashLoan",
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
    name: "maxFlashMint",
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
    name: "owner",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_val",
        type: "uint256",
      },
    ],
    name: "setFlashMintFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_val",
        type: "uint256",
      },
    ],
    name: "setMaxFlashMintable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "usdo",
    outputs: [
      {
        internalType: "contract IUSDO",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040526004805460ff1916905534801561001a57600080fd5b50604051610f1b380380610f1b833981016040819052610039916100d9565b61004233610071565b6001600160a01b0382166080526001805569152d02c7e14af680000060025561006a81610071565b5050610113565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146100d657600080fd5b50565b600080604083850312156100ec57600080fd5b82516100f7816100c1565b6020840151909250610108816100c1565b809150509250929050565b608051610db561016660003960008181610139015281816103010152818161048d015281816104ff0152818161064a0152818161070c015281816107a60152818161083601526108ce0152610db56000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c8063715018a61161008c5780639d3f4d1a116100665780639d3f4d1a146101c9578063d9d98ce4146101d2578063dd62ed3e146101e5578063f2fde38b1461021e57600080fd5b8063715018a6146101a75780638da5cb5b146101af578063940a1dc0146101c057600080fd5b80634c6bb35d116100bd5780634c6bb35d146101345780635cffe9de14610173578063613255ab1461018657600080fd5b8063095ea7b3146100e457806316d995a91461010c5780631d2a0e3d14610121575b600080fd5b6100f76100f2366004610b68565b610231565b60405190151581526020015b60405180910390f35b61011f61011a366004610b94565b610248565b005b61011f61012f366004610b94565b610291565b61015b7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610103565b6100f7610181366004610bad565b6102fd565b610199610194366004610c4c565b61079f565b604051908152602001610103565b61011f6108b6565b6000546001600160a01b031661015b565b61019960015481565b61019960025481565b6101996101e0366004610b68565b6108ca565b6101996101f3366004610c69565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205490565b61011f61022c366004610c4c565b610941565b600061023e3384846109bf565b5060015b92915050565b610250610a39565b60025460408051918252602082018390527f7d04cf410385806a9ac3566ac4cca4e5eaba6cc242abbf98f4f44e4ac6f3e8ff910160405180910390a1600255565b610299610a39565b620186a081106102bc5760405163f1640ae160e01b815260040160405180910390fd5b60015460408051918252602082018390527fb3a985697c0361591fe9933703eb14ce1d74444a2d349080b6dec8da77a4082b910160405180910390a1600155565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635c975abb6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561035d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103819190610ca2565b1561039f576040516313d0ff5960e31b815260040160405180910390fd5b6001600160a01b03861633146103fe576001600160a01b03861660009081526003602090815260408083203384529091529020548411156103f35760405163fb165f2360e01b815260040160405180910390fd5b6103fe863386610a93565b60045460ff16156104225760405163558a1e0360e11b815260040160405180910390fd5b6004805460ff19166001179055836104398661079f565b101561045857604051636b2f218360e01b815260040160405180910390fd5b600061046486866108ca565b6040516340c10f1960e01b81526001600160a01b038981166004830152602482018890529192507f0000000000000000000000000000000000000000000000000000000000000000909116906340c10f1990604401600060405180830381600087803b1580156104d357600080fd5b505af11580156104e7573d6000803e3d6000fd5b505060405163028f6c4560e31b8152600481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316925063147b62289150602401600060405180830381600087803b15801561054d57600080fd5b505af1158015610561573d6000803e3d6000fd5b50506040516323e30c8b60e01b81527f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd992506001600160a01b038a1691506323e30c8b906105bd9033908b908b9088908c908c90600401610cc4565b6020604051808303816000875af11580156105dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106009190610d1f565b1461061e5760405163312d207360e11b815260040160405180910390fd5b6040516323b872dd60e01b81526001600160a01b038881166004830152306024830152604482018790527f000000000000000000000000000000000000000000000000000000000000000016906323b872dd906064016020604051808303816000875af1158015610693573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106b79190610ca2565b50604051632770a7eb60e21b815230600482015260248101869052600080604483828b5af1806106e657600080fd5b506044810160408190526323b872dd60e01b90526001600160a01b0388811660488301527f0000000000000000000000000000000000000000000000000000000000000000166068820181905260888201839052906323b872dd9060a8016020604051808303816000875af1158015610763573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107879190610ca2565b50506004805460ff1916905550600195945050505050565b60006002547f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610802573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108269190610d1f565b111561083457505060025490565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610892573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102429190610d1f565b6108be610a39565b6108c86000610af6565b565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316836001600160a01b03161461091e5760405163f1640ae160e01b815260040160405180910390fd5b620186a0600154836109309190610d38565b61093a9190610d5d565b9392505050565b610949610a39565b6001600160a01b0381166109b35760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6109bc81610af6565b50565b6001600160a01b0383166109e657604051639fabe1c160e01b815260040160405180910390fd5b6001600160a01b038216610a0d57604051639fabe1c160e01b815260040160405180910390fd5b6001600160a01b0392831660009081526003602090815260408083209490951682529290925291902055565b6000546001600160a01b031633146108c85760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016109aa565b6001600160a01b038381166000908152600360209081526040808320938616835292905220546000198114610af05781811015610ae35760405163fb165f2360e01b815260040160405180910390fd5b610af084848484036109bf565b50505050565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146109bc57600080fd5b60008060408385031215610b7b57600080fd5b8235610b8681610b53565b946020939093013593505050565b600060208284031215610ba657600080fd5b5035919050565b600080600080600060808688031215610bc557600080fd5b8535610bd081610b53565b94506020860135610be081610b53565b935060408601359250606086013567ffffffffffffffff80821115610c0457600080fd5b818801915088601f830112610c1857600080fd5b813581811115610c2757600080fd5b896020828501011115610c3957600080fd5b9699959850939650602001949392505050565b600060208284031215610c5e57600080fd5b813561093a81610b53565b60008060408385031215610c7c57600080fd5b8235610c8781610b53565b91506020830135610c9781610b53565b809150509250929050565b600060208284031215610cb457600080fd5b8151801515811461093a57600080fd5b60006001600160a01b03808916835280881660208401525085604083015284606083015260a060808301528260a0830152828460c0840137600060c0848401015260c0601f19601f8501168301019050979650505050505050565b600060208284031215610d3157600080fd5b5051919050565b808202811582820484141761024257634e487b7160e01b600052601160045260246000fd5b600082610d7a57634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212206afbc25c8918ad705975ec97d5e79c476f85fff35e4f2399f637db0492a137b564736f6c63430008160033";

type USDOFlashloanHelperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: USDOFlashloanHelperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class USDOFlashloanHelper__factory extends ContractFactory {
  constructor(...args: USDOFlashloanHelperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "USDOFlashloanHelper";
  }

  override deploy(
    _usdo: PromiseOrValue<string>,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<USDOFlashloanHelper> {
    return super.deploy(
      _usdo,
      _owner,
      overrides || {}
    ) as Promise<USDOFlashloanHelper>;
  }
  override getDeployTransaction(
    _usdo: PromiseOrValue<string>,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_usdo, _owner, overrides || {});
  }
  override attach(address: string): USDOFlashloanHelper {
    return super.attach(address) as USDOFlashloanHelper;
  }
  override connect(signer: Signer): USDOFlashloanHelper__factory {
    return super.connect(signer) as USDOFlashloanHelper__factory;
  }
  static readonly contractName: "USDOFlashloanHelper";

  public readonly contractName: "USDOFlashloanHelper";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): USDOFlashloanHelperInterface {
    return new utils.Interface(_abi) as USDOFlashloanHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): USDOFlashloanHelper {
    return new Contract(address, _abi, signerOrProvider) as USDOFlashloanHelper;
  }
}
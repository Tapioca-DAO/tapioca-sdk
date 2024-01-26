/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  USDOFlashloanHelper,
  USDOFlashloanHelperInterface,
} from "../../usd0/USDOFlashloanHelper";

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
    inputs: [],
    name: "claimOwnership",
    outputs: [],
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
    name: "pendingOwner",
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
      {
        internalType: "bool",
        name: "direct",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "renounce",
        type: "bool",
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
  "0x60a06040526005805460ff1916905534801561001a57600080fd5b50604051611589380380611589833981016040819052610039916100c8565b600080546001600160a01b0319163390811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3600080546001600160a01b0319166001600160a01b0392831617905516608052600160025569152d02c7e14af6800000600355610102565b6001600160a01b03811681146100c557600080fd5b50565b600080604083850312156100db57600080fd5b82516100e6816100b0565b60208401519092506100f7816100b0565b809150509250929050565b6080516114346101556000396000818161015701528181610767015281816109c201528181610a4d01528181610c0a01528181610d0b01528181610dc301528181610e600152610ef101526114346000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063613255ab1161008c5780639d3f4d1a116100665780639d3f4d1a14610203578063d9d98ce41461020c578063dd62ed3e1461021f578063e30c39781461026557600080fd5b8063613255ab146101b95780638da5cb5b146101da578063940a1dc0146101fa57600080fd5b80631d2a0e3d116100c85780631d2a0e3d1461013f5780634c6bb35d146101525780634e71e0c81461019e5780635cffe9de146101a657600080fd5b8063078dfbe7146100ef578063095ea7b31461010457806316d995a91461012c575b600080fd5b6101026100fd366004611144565b610285565b005b61011761011236600461118f565b610476565b60405190151581526020015b60405180910390f35b61010261013a3660046111bb565b61048d565b61010261014d3660046111bb565b61054f565b6101797f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610123565b61010261064d565b6101176101b43660046111d4565b610763565b6101cc6101c7366004611273565b610dbc565b604051908152602001610123565b6000546101799073ffffffffffffffffffffffffffffffffffffffff1681565b6101cc60025481565b6101cc60035481565b6101cc61021a36600461118f565b610eed565b6101cc61022d366004611290565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260046020908152604080832093909416825291909152205490565b6001546101799073ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff16331461030b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b811561042f5773ffffffffffffffffffffffffffffffffffffffff83161515806103325750805b610398576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4f776e61626c653a207a65726f206164647265737300000000000000000000006044820152606401610302565b6000805460405173ffffffffffffffffffffffffffffffffffffffff808716939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff85167fffffffffffffffffffffffff000000000000000000000000000000000000000091821617909155600180549091169055505050565b6001805473ffffffffffffffffffffffffffffffffffffffff85167fffffffffffffffffffffffff0000000000000000000000000000000000000000909116179055505050565b6000610483338484610f97565b5060015b92915050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461050e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610302565b60035460408051918252602082018390527f7d04cf410385806a9ac3566ac4cca4e5eaba6cc242abbf98f4f44e4ac6f3e8ff910160405180910390a1600355565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105d0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610302565b620186a0811061060c576040517ff1640ae100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60025460408051918252602082018390527fb3a985697c0361591fe9933703eb14ce1d74444a2d349080b6dec8da77a4082b910160405180910390a1600255565b60015473ffffffffffffffffffffffffffffffffffffffff163381146106cf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152606401610302565b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635c975abb6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107f491906112c9565b1561082b576040517f9e87fac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff861633146108bd5773ffffffffffffffffffffffffffffffffffffffff861660009081526004602090815260408083203384529091529020548411156108b2576040517ffb165f2300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108bd86338661106a565b60055460ff16156108fa576040517fab143c0600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600580547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790558361092f86610dbc565b1015610967576040517f6b2f218300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006109738686610eed565b6040517f40c10f1900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8981166004830152602482018890529192507f0000000000000000000000000000000000000000000000000000000000000000909116906340c10f1990604401600060405180830381600087803b158015610a0857600080fd5b505af1158015610a1c573d6000803e3d6000fd5b50506040517f147b6228000000000000000000000000000000000000000000000000000000008152600481018490527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16925063147b62289150602401600060405180830381600087803b158015610aa857600080fd5b505af1158015610abc573d6000803e3d6000fd5b50506040517f23e30c8b0000000000000000000000000000000000000000000000000000000081527f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd9925073ffffffffffffffffffffffffffffffffffffffff8a1691506323e30c8b90610b3e9033908b908b9088908c908c906004016112e6565b6020604051808303816000875af1158015610b5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b81919061136c565b14610bb8576040517f625a40e600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f23b872dd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8881166004830152306024830152604482018790527f000000000000000000000000000000000000000000000000000000000000000016906323b872dd906064016020604051808303816000875af1158015610c53573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c7791906112c9565b506040517f9dc29fac00000000000000000000000000000000000000000000000000000000815230600482015260248101869052600080604483828b5af180610cbf57600080fd5b506044810160408190527f23b872dd00000000000000000000000000000000000000000000000000000000905273ffffffffffffffffffffffffffffffffffffffff88811660488301527f0000000000000000000000000000000000000000000000000000000000000000166068820181905260888201839052906323b872dd9060a8016020604051808303816000875af1158015610d62573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8691906112c9565b5050600580547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905550600195945050505050565b60006003547f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e50919061136c565b1115610e5e57505060035490565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ec9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610487919061136c565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610f74576040517ff1640ae100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b620186a060025483610f869190611385565b610f9091906113c3565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff8316610fe4576040517f9fabe1c100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611031576040517f9fabe1c100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff92831660009081526004602090815260408083209490951682529290925291902055565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600460209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461110b57818110156110fe576040517ffb165f2300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61110b8484848403610f97565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461113357600080fd5b50565b801515811461113357600080fd5b60008060006060848603121561115957600080fd5b833561116481611111565b9250602084013561117481611136565b9150604084013561118481611136565b809150509250925092565b600080604083850312156111a257600080fd5b82356111ad81611111565b946020939093013593505050565b6000602082840312156111cd57600080fd5b5035919050565b6000806000806000608086880312156111ec57600080fd5b85356111f781611111565b9450602086013561120781611111565b935060408601359250606086013567ffffffffffffffff8082111561122b57600080fd5b818801915088601f83011261123f57600080fd5b81358181111561124e57600080fd5b89602082850101111561126057600080fd5b9699959850939650602001949392505050565b60006020828403121561128557600080fd5b8135610f9081611111565b600080604083850312156112a357600080fd5b82356112ae81611111565b915060208301356112be81611111565b809150509250929050565b6000602082840312156112db57600080fd5b8151610f9081611136565b600073ffffffffffffffffffffffffffffffffffffffff808916835280881660208401525085604083015284606083015260a060808301528260a0830152828460c0840137600060c0848401015260c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8501168301019050979650505050505050565b60006020828403121561137e57600080fd5b5051919050565b8082028115828204841417610487577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000826113f9577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b50049056fea2646970667358221220af25e1a6afc945be139269a15094e86321a055a5ce7178285fdb95c967e8734264736f6c63430008160033";

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

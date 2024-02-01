/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  ERC20WithoutStrategy,
  ERC20WithoutStrategyInterface,
} from "../../strategies/ERC20WithoutStrategy";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IYieldBox",
        name: "_yieldBox",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "cheapWithdrawable",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractAddress",
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
    name: "currentBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposited",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
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
    name: "tokenId",
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
    name: "tokenType",
    outputs: [
      {
        internalType: "enum TokenType",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawable",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "yieldBox",
    outputs: [
      {
        internalType: "contract IYieldBox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c060405234801561001057600080fd5b5060405161082138038061082183398101604081905261002f9161005e565b6001600160a01b039182166080521660a052610098565b6001600160a01b038116811461005b57600080fd5b50565b6000806040838503121561007157600080fd5b825161007c81610046565b602084015190925061008d81610046565b809150509250929050565b60805160a0516107486100d9600039600081816101bf015281816102e3015261031601526000818161016d015281816101fb015261026a01526107486000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c8063afa91cc611610081578063e3575f051161005b578063e3575f051461014b578063f3fef3a3146101a7578063f6b4dfb4146101ba57600080fd5b8063afa91cc614610153578063ce845d1d1461014b578063de4065771461016857600080fd5b806330fa738c116100b257806330fa738c14610136578063501883011461014b5780637284e416146100ce57600080fd5b806306fdde03146100ce57806317d70f7c14610120575b600080fd5b61010a6040518060400160405280600b81526020017f4e6f20737472617465677900000000000000000000000000000000000000000081525081565b60405161011791906105ef565b60405180910390f35b610128600081565b604051908152602001610117565b61013e600181565b6040516101179190610622565b6101286101e1565b610166610161366004610663565b6101f0565b005b61018f7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610117565b6101666101b536600461067c565b61025f565b61018f7f000000000000000000000000000000000000000000000000000000000000000081565b60006101eb6102d4565b905090565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461025c5760405162461bcd60e51b815260206004820152600c60248201526b09cdee840b2d2cad8c884def60a31b60448201526064015b60405180910390fd5b50565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146102c65760405162461bcd60e51b815260206004820152600c60248201526b09cdee840b2d2cad8c884def60a31b6044820152606401610253565b6102d08282610309565b5050565b60006101eb6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163061033d565b6102d06001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168383610482565b604080516001600160a01b0383811660248084019190915283518084039091018152604490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f70a0823100000000000000000000000000000000000000000000000000000000179052915160009283928392918716916103c591906106b4565b600060405180830381855afa9150503d8060008114610400576040519150601f19603f3d011682016040523d82523d6000602084013e610405565b606091505b509150915081801561041957506020815110155b6104655760405162461bcd60e51b815260206004820152601d60248201527f426f72696e6745524332303a2042616c616e63654f66206661696c65640000006044820152606401610253565b8080602001905181019061047991906106d0565b95945050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000179052915160009283929087169161050c91906106b4565b6000604051808303816000865af19150503d8060008114610549576040519150601f19603f3d011682016040523d82523d6000602084013e61054e565b606091505b509150915081801561057857508051158061057857508080602001905181019061057891906106e9565b6105c45760405162461bcd60e51b815260206004820152601c60248201527f426f72696e6745524332303a205472616e73666572206661696c6564000000006044820152606401610253565b5050505050565b60005b838110156105e65781810151838201526020016105ce565b50506000910152565b602081526000825180602084015261060e8160408501602087016105cb565b601f01601f19169190910160400192915050565b602081016005831061065d577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b91905290565b60006020828403121561067557600080fd5b5035919050565b6000806040838503121561068f57600080fd5b82356001600160a01b03811681146106a657600080fd5b946020939093013593505050565b600082516106c68184602087016105cb565b9190910192915050565b6000602082840312156106e257600080fd5b5051919050565b6000602082840312156106fb57600080fd5b8151801515811461070b57600080fd5b939250505056fea2646970667358221220f487b2c5bb70c2bd825f0631c0d0e74707b603525e477d0c0db3d065653eff5964736f6c63430008160033";

type ERC20WithoutStrategyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20WithoutStrategyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20WithoutStrategy__factory extends ContractFactory {
  constructor(...args: ERC20WithoutStrategyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC20WithoutStrategy";
  }

  override deploy(
    _yieldBox: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20WithoutStrategy> {
    return super.deploy(
      _yieldBox,
      token,
      overrides || {}
    ) as Promise<ERC20WithoutStrategy>;
  }
  override getDeployTransaction(
    _yieldBox: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_yieldBox, token, overrides || {});
  }
  override attach(address: string): ERC20WithoutStrategy {
    return super.attach(address) as ERC20WithoutStrategy;
  }
  override connect(signer: Signer): ERC20WithoutStrategy__factory {
    return super.connect(signer) as ERC20WithoutStrategy__factory;
  }
  static readonly contractName: "ERC20WithoutStrategy";

  public readonly contractName: "ERC20WithoutStrategy";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20WithoutStrategyInterface {
    return new utils.Interface(_abi) as ERC20WithoutStrategyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20WithoutStrategy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC20WithoutStrategy;
  }
}

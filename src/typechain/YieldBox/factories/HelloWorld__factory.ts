/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { HelloWorld, HelloWorldInterface } from "../HelloWorld";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract YieldBox",
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
    name: "assetId",
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
    name: "balance",
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
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "yieldBox",
    outputs: [
      {
        internalType: "contract YieldBox",
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
    name: "yieldBoxShares",
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
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b5060405161069b38038061069b83398101604081905261002f916100dc565b6001600160a01b0382166080819052604051632c1876e560e21b815263b061db94906100679060019085906000908190600401610116565b602060405180830381600087803b15801561008157600080fd5b505af1158015610095573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100b9919061015b565b60a052506101749050565b6001600160a01b03811681146100d957600080fd5b50565b600080604083850312156100ef57600080fd5b82516100fa816100c4565b602084015190925061010b816100c4565b809150509250929050565b608081016005861061013857634e487b7160e01b600052602160045260246000fd5b9481526001600160a01b0393841660208201529190921660408201526060015290565b60006020828403121561016d57600080fd5b5051919050565b60805160a0516104da6101c1600039600081816076015281816101440152818161023b015261030601526000818160eb0152818161018501528181610270015261034901526104da6000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80633ccfd60b1461006757806344de240a146100715780637a435753146100ab578063b69ef8a8146100cb578063b6b55f25146100d3578063de406577146100e6575b600080fd5b61006f610125565b005b6100987f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b6100986100b93660046103f8565b60006020819052908152604090205481565b61009861021c565b61006f6100e1366004610428565b6102f7565b61010d7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100a2565b336000818152602081905260408082205490516311a5cc7760e31b81527f000000000000000000000000000000000000000000000000000000000000000060048201523060248201526044810193909352606483019190915260848201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638d2e63b89060a4016040805180830381600087803b1580156101d057600080fd5b505af11580156101e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102089190610441565b505033600090815260208190526040812055565b3360009081526020819052604080822054905163442c159960e01b81527f000000000000000000000000000000000000000000000000000000000000000060048201526024810191909152604481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063442c15999060640160206040518083038186803b1580156102ba57600080fd5b505afa1580156102ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102f29190610465565b905090565b604051634d4d7cbd60e11b81527f0000000000000000000000000000000000000000000000000000000000000000600482015233602482015230604482015260648101829052600060848201819052907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690639a9af97a9060a4016040805180830381600087803b15801561039457600080fd5b505af11580156103a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103cc9190610441565b3360009081526020819052604081208054929450849350916103ef90849061047e565b90915550505050565b60006020828403121561040a57600080fd5b81356001600160a01b038116811461042157600080fd5b9392505050565b60006020828403121561043a57600080fd5b5035919050565b6000806040838503121561045457600080fd5b505080516020909101519092909150565b60006020828403121561047757600080fd5b5051919050565b6000821982111561049f57634e487b7160e01b600052601160045260246000fd5b50019056fea26469706673582212202021976447311608f5108c7caa4b62a9140b5acf13314f210bcfae2d817e59a164736f6c63430008090033";

type HelloWorldConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HelloWorldConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HelloWorld__factory extends ContractFactory {
  constructor(...args: HelloWorldConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "HelloWorld";
  }

  deploy(
    _yieldBox: string,
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<HelloWorld> {
    return super.deploy(
      _yieldBox,
      token,
      overrides || {}
    ) as Promise<HelloWorld>;
  }
  getDeployTransaction(
    _yieldBox: string,
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_yieldBox, token, overrides || {});
  }
  attach(address: string): HelloWorld {
    return super.attach(address) as HelloWorld;
  }
  connect(signer: Signer): HelloWorld__factory {
    return super.connect(signer) as HelloWorld__factory;
  }
  static readonly contractName: "HelloWorld";
  public readonly contractName: "HelloWorld";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HelloWorldInterface {
    return new utils.Interface(_abi) as HelloWorldInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HelloWorld {
    return new Contract(address, _abi, signerOrProvider) as HelloWorld;
  }
}

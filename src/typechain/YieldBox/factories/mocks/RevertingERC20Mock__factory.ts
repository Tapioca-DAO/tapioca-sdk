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
  RevertingERC20Mock,
  RevertingERC20MockInterface,
} from "../../mocks/RevertingERC20Mock";

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
  "0x60a06040523480156200001157600080fd5b5060405162000b9e38038062000b9e833981016040819052620000349162000174565b600162000042858262000290565b50600062000051848262000290565b5060ff82166080526002819055336000818152600360209081526040808320859055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3505050506200035c565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620000d457600080fd5b81516001600160401b0380821115620000f157620000f1620000ac565b604051601f8301601f19908116603f011681019082821181831017156200011c576200011c620000ac565b81604052838152602092508660208588010111156200013a57600080fd5b600091505b838210156200015e57858201830151818301840152908201906200013f565b6000602085830101528094505050505092915050565b600080600080608085870312156200018b57600080fd5b84516001600160401b0380821115620001a357600080fd5b620001b188838901620000c2565b95506020870151915080821115620001c857600080fd5b50620001d787828801620000c2565b935050604085015160ff81168114620001ef57600080fd5b6060959095015193969295505050565b600181811c908216806200021457607f821691505b6020821081036200023557634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200028b576000816000526020600020601f850160051c81016020861015620002665750805b601f850160051c820191505b81811015620002875782815560010162000272565b5050505b505050565b81516001600160401b03811115620002ac57620002ac620000ac565b620002c481620002bd8454620001ff565b846200023b565b602080601f831160018114620002fc5760008415620002e35750858301515b600019600386901b1c1916600185901b17855562000287565b600085815260208120601f198616915b828110156200032d578886015182559484019460019091019084016200030c565b50858210156200034c5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805161082662000378600039600061011801526108266000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c8063313ce5671161007657806395d89b411161005b57806395d89b411461016c578063a9059cbb14610174578063dd62ed3e1461018757600080fd5b8063313ce5671461011357806370a082311461014c57600080fd5b806306fdde03146100a8578063095ea7b3146100c657806318160ddd146100e957806323b872dd14610100575b600080fd5b6100b06101b2565b6040516100bd9190610654565b60405180910390f35b6100d96100d43660046106bf565b610240565b60405190151581526020016100bd565b6100f260025481565b6040519081526020016100bd565b6100d961010e3660046106e9565b6102ad565b61013a7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff90911681526020016100bd565b6100f261015a366004610725565b60036020526000908152604090205481565b6100b06104e9565b6100d96101823660046106bf565b6104f6565b6100f2610195366004610747565b600460209081526000928352604080842090915290825290205481565b600180546101bf9061077a565b80601f01602080910402602001604051908101604052809291908181526020018280546101eb9061077a565b80156102385780601f1061020d57610100808354040283529160200191610238565b820191906000526020600020905b81548152906001019060200180831161021b57829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061029b9086815260200190565b60405180910390a35060015b92915050565b6001600160a01b03831660009081526003602052604081205482111561031a5760405162461bcd60e51b815260206004820152601760248201527f546f6b656e423a2062616c616e636520746f6f206c6f7700000000000000000060448201526064015b60405180910390fd5b6001600160a01b038416600090815260046020908152604080832033845290915290205482111561038d5760405162461bcd60e51b815260206004820152601960248201527f546f6b656e423a20616c6c6f77616e636520746f6f206c6f77000000000000006044820152606401610311565b6001600160a01b0383166000908152600360205260409020546103b083826107ca565b10156103fe5760405162461bcd60e51b815260206004820152601960248201527f546f6b656e423a206f766572666c6f77206465746563746564000000000000006044820152606401610311565b6001600160a01b038416600090815260036020526040812080548492906104269084906107dd565b90915550506001600160a01b03841660009081526004602090815260408083203384529091528120805484929061045e9084906107dd565b90915550506001600160a01b0383166000908152600360205260408120805484929061048b9084906107ca565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516104d791815260200190565b60405180910390a35060019392505050565b600080546101bf9061077a565b336000908152600360205260408120548211156105555760405162461bcd60e51b815260206004820152601760248201527f546f6b656e423a2062616c616e636520746f6f206c6f770000000000000000006044820152606401610311565b6001600160a01b03831660009081526003602052604090205461057883826107ca565b10156105c65760405162461bcd60e51b815260206004820152601960248201527f546f6b656e423a206f766572666c6f77206465746563746564000000000000006044820152606401610311565b33600090815260036020526040812080548492906105e59084906107dd565b90915550506001600160a01b038316600090815260036020526040812080548492906106129084906107ca565b90915550506040518281526001600160a01b0384169033907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200161029b565b60006020808352835180602085015260005b8181101561068257858101830151858201604001528201610666565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b03811681146106ba57600080fd5b919050565b600080604083850312156106d257600080fd5b6106db836106a3565b946020939093013593505050565b6000806000606084860312156106fe57600080fd5b610707846106a3565b9250610715602085016106a3565b9150604084013590509250925092565b60006020828403121561073757600080fd5b610740826106a3565b9392505050565b6000806040838503121561075a57600080fd5b610763836106a3565b9150610771602084016106a3565b90509250929050565b600181811c9082168061078e57607f821691505b6020821081036107ae57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156102a7576102a76107b4565b818103818111156102a7576102a76107b456fea2646970667358221220b475ce5ef524b10622ca7906da64f817f1ee16f3f7d1bf4671f83d00e13bc5c164736f6c63430008160033";

type RevertingERC20MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RevertingERC20MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RevertingERC20Mock__factory extends ContractFactory {
  constructor(...args: RevertingERC20MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "RevertingERC20Mock";
  }

  override deploy(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    decimals_: PromiseOrValue<BigNumberish>,
    supply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RevertingERC20Mock> {
    return super.deploy(
      name_,
      symbol_,
      decimals_,
      supply,
      overrides || {}
    ) as Promise<RevertingERC20Mock>;
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
  override attach(address: string): RevertingERC20Mock {
    return super.attach(address) as RevertingERC20Mock;
  }
  override connect(signer: Signer): RevertingERC20Mock__factory {
    return super.connect(signer) as RevertingERC20Mock__factory;
  }
  static readonly contractName: "RevertingERC20Mock";

  public readonly contractName: "RevertingERC20Mock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RevertingERC20MockInterface {
    return new utils.Interface(_abi) as RevertingERC20MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RevertingERC20Mock {
    return new Contract(address, _abi, signerOrProvider) as RevertingERC20Mock;
  }
}

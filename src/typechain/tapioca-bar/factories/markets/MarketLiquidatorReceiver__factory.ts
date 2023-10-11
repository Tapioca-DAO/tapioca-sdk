/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  MarketLiquidatorReceiver,
  MarketLiquidatorReceiverInterface,
} from "../../markets/MarketLiquidatorReceiver";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oracle",
        type: "address",
      },
    ],
    name: "OracleAssigned",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "swapper",
        type: "address",
      },
    ],
    name: "SwapperAssigned",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
    ],
    name: "allowances",
    outputs: [
      {
        internalType: "uint256",
        name: "allowance",
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
        name: "_tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "_oracle",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_precision",
        type: "uint256",
      },
    ],
    name: "assignOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "_swapper",
        type: "address",
      },
    ],
    name: "assignSwapper",
    outputs: [],
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
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "collateralAmount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onCollateralReceiver",
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
        name: "tokenIn",
        type: "address",
      },
    ],
    name: "oracles",
    outputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "precision",
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
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
    ],
    name: "swappers",
    outputs: [
      {
        internalType: "address",
        name: "swapper",
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
] as const;

const _bytecode =
  "0x6080806040523461005757600080546001600160a01b0319919082169033907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a333913316171760005561131a908161005d8239f35b600080fdfe6080604052600436101561001257600080fd5b60003560e01c8063078dfbe71461104e578063124c238314610e2b5780634e71e0c814610d8f57806355b6ed5c14610d3e5780635cd3dc15146103985780636c43a2ca146103315780638cad7fbe146102f65780638da5cb5b146102cd578063addd5099146101a5578063bbcd821e1461011f578063d73b1dc9146100ce5763e30c3978146100a057600080fd5b346100c95760003660031901126100c9576001546040516001600160a01b039091168152602090f35b600080fd5b346100c9576100dc366111c9565b9160018060a01b0380916100f582600054163314611238565b1660005260046020526040600020911660005260205261011b6040600020918254611283565b9055005b346100c95760403660031901126100c957610138611144565b61014061115a565b9060018060a01b03809161015982600054163314611238565b16600081815260036020526040812080546001600160a01b03191694909316938417909255907fa02b5255ee60d1f9af74443960734d51468cf7ee586533c5b820a8cadd53cc6a9080a3005b346100c9576020806003193601126100c9576001600160a01b03806101c8611144565b166000526002825260406000206040519060009281546101e7816111fe565b8085526001918783821691826000146102ae575050600114610277575b5061021584600294959603866111a6565b8301541691015492604051938492606084528451928360608601526000955b84871061025e57506080955060008685870101528401526040830152601f80199101168101030190f35b8681018201518888016080015295810195879550610234565b94508260005285806000206000905b87821061029b57508501019450610215610204565b8054878301840152908201908301610286565b60ff19168188015291151560051b860190910195506102159050610204565b346100c95760003660031901126100c9576000546040516001600160a01b039091168152602090f35b346100c95760203660031901126100c95760206001600160a01b038061031a611144565b166000526003825260406000205416604051908152f35b346100c95761033f366111c9565b9160018060a01b03809161035882600054163314611238565b16600052600460205260406000209116600052602052604060002080549182018092116103825755005b634e487b7160e01b600052601160045260246000fd5b346100c95760a03660031901126100c9576103b1611144565b6103b961115a565b90604435906001600160a01b03821682036100c9576001600160401b03608435116100c9573660236084350112156100c95760046084350135906001600160401b0382116100c957366024836084350101116100c957600554610ced5760016005556000546001600160a01b0390811690821603610c97576040516370a0823160e01b81523060048201526020816024816001600160a01b0389165afa90811561079757600091610c65575b5060643511610c14576001600160a01b038481166000908152600260205260409020600101541615610bba576001600160a01b038481166000908152600360205260409020541615610b5f576001600160a01b03163303610aa1575b602090608435906084350103126100c95760018060a01b0382166000526002602052604060002060018060a01b03600182015416604051809263d6d7d52560e01b82526020600483015260009080549061051a826111fe565b91826024860152600181169081600014610a7b5750600114610a3e575b5050918160008160409503925af1908115610797576000906000926109fd575b50156109a157801561094b5761056f906064356112b1565b60018060a01b03831660005260026020526002604060002001548015610935576105ae91046127106105a760246084350135836112b1565b0490611283565b9182156108d9576001600160a01b03818116600081815260036020526040808220549051631fd177af60e11b81526004810193909352948316602483015260648035604484015282018190526084820181905260a482015292610140918291859160c4918391165afa928315610797576000936107a3575b50506001600160a01b03908116600090815260036020908152604080832054815163efa84c6d60e01b815286518051871660048301528085015160248301528084015187166044830152606090810151606483015284880151805160848401528086015160a48401528085015160c4840152015160e48201529582015180511515610104880152909201511515610124860152610144850195909552336101648501526101a06101848501526101a4840182905292939284926101c49284929091165af190811561079757600091610762575b501561070f576000600555602060405160018152f35b60405162461bcd60e51b815260206004820152602560248201527f4d61726b65744c697175696461746f7252656365697665723a20537761702066604482015264185a5b195960da1b6064820152608490fd5b90506040813d60401161078f575b8161077d604093836111a6565b810103126100c95760200151816106f9565b3d9150610770565b6040513d6000823e3d90fd5b81819294503d85116108d2575b6107ba81836111a6565b8101039283126100c957604051926107d184611170565b608081126100c9576040516107e58161118b565b6107ee83611290565b81526020830151602082015261080660408401611290565b60408201526060830151606082015284526080607f198201126100c95760409081516108318161118b565b6080840151815260a0840151602082015260c08401518382015260e08401516060820152602086015260ff1901126100c95760408051929083016001600160401b038111848210176108bc5760209560409586956108a96101206101c4976000968a526108a161010082016112a4565b8452016112a4565b8982015286820152955095505091610626565b634e487b7160e01b600052604160045260246000fd5b503d6107b0565b60405162461bcd60e51b815260206004820152602e60248201527f4d61726b65744c697175696461746f7252656365697665723a206d696e20616d60448201526d1bdd5b9d081b9bdd081d985b1a5960921b6064820152608490fd5b634e487b7160e01b600052601260045260246000fd5b60405162461bcd60e51b815260206004820152602860248201527f4d61726b65744c697175696461746f7252656365697665723a2072617465206e6044820152671bdd081d985b1a5960c21b6064820152608490fd5b60405162461bcd60e51b815260206004820152602e60248201527f4d61726b65744c697175696461746f7252656365697665723a206f7261636c6560448201526d0818d85b1b19590819985a5b195960921b6064820152608490fd5b9150506040813d604011610a36575b81610a19604093836111a6565b810103126100c9576020610a2c826112a4565b9101519084610557565b3d9150610a0c565b6000908152602081209092505b818310610a615750508101604401816000610537565b805460448488010152859350602090920191600101610a4b565b60ff191660448087019190915292151560051b8501909201925083915060009050610537565b336000526004602052604060002060018060a01b03841660005260205260643560406000205410610b05576020903360005260048252604060002060018060a01b03851660005282526040600020610afc6064358254611283565b905590506104c1565b60405162461bcd60e51b815260206004820152602c60248201527f4d61726b65744c697175696461746f7252656365697665723a2073656e64657260448201526b081b9bdd08185b1b1bddd95960a21b6064820152608490fd5b60405162461bcd60e51b815260206004820152602d60248201527f4d61726b65744c697175696461746f7252656365697665723a206e6f2073776160448201526c1c1c195c88185cdcda59db9959609a1b6064820152608490fd5b60405162461bcd60e51b815260206004820152602c60248201527f4d61726b65744c697175696461746f7252656365697665723a206e6f206f726160448201526b18db1948185cdcda59db995960a21b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f4d61726b65744c697175696461746f7252656365697665723a206e6f7420656e6044820152630deeaced60e31b6064820152608490fd5b90506020813d602011610c8f575b81610c80602093836111a6565b810103126100c9575185610465565b3d9150610c73565b60405162461bcd60e51b815260206004820152602860248201527f4d61726b65744c697175696461746f7252656365697665723a206e6f742061756044820152671d1a1bdc9a5e995960c21b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f4d61726b65744c697175696461746f7252656365697665723a207265656e7472604482015263616e637960e01b6064820152608490fd5b346100c95760403660031901126100c957610d57611144565b610d5f61115a565b9060018060a01b038091166000526004602052604060002091166000526020526020604060002054604051908152f35b346100c95760003660031901126100c9576001546001600160a01b039081811633819003610de757806000549384166000805160206112c5833981519152600080a36001600160a01b03199283161760005516600155005b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152fd5b346100c95760803660031901126100c957610e44611144565b610e4c61115a565b6001600160401b0391906044358381116100c957366023820112156100c9578060040135928484116108bc5760405192602094601f1993610e948786601f85011601876111a6565b81865236602483830101116100c95781600092602489930183890137860101526000546001600160a01b0390610ecd9082163314611238565b60405194610eda86611170565b8552808686019216968783528160408701946064358652169687600052600281526040600020965180519283116108bc57610f1588546111fe565b601f8111611008575b5081601f8411600114610f9a5750600296506000919083610f8f575b50508160011b916000199060031b1c19161785555b6001850191511660018060a01b0319825416179055519101557fd35615cf633cdd04206b370029477f61d6ad0a5bac9f345812359d782d14e89c600080a3005b015190508980610f3a565b929394959684168860005283600020936000905b828210610ff05750509160019391856002999897969410610fd7575b505050811b018555610f4f565b015160001960f88460031b161c19169055898080610fca565b80600186978294978701518155019601940190610fae565b8860005282600020601f850160051c810191848610611044575b601f0160051c01905b8181106110385750610f1e565b6000815560010161102b565b9091508190611022565b346100c95760603660031901126100c957611067611144565b60243580151581036100c9576044359081151582036100c95760018060a01b0392839161109983600054163314611238565b1561112b571690811590811591611123575b50156110e657806000549283166000805160206112c5833981519152600080a36001600160a01b031991821617600055600180549091169055005b60405162461bcd60e51b81526020600482015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152606490fd5b9050836110ab565b9150501660018060a01b03196001541617600155600080f35b600435906001600160a01b03821682036100c957565b602435906001600160a01b03821682036100c957565b606081019081106001600160401b038211176108bc57604052565b608081019081106001600160401b038211176108bc57604052565b601f909101601f19168101906001600160401b038211908210176108bc57604052565b60609060031901126100c9576001600160a01b039060043582811681036100c9579160243590811681036100c9579060443590565b90600182811c9216801561122e575b602083101461121857565b634e487b7160e01b600052602260045260246000fd5b91607f169161120d565b1561123f57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b9190820391821161038257565b51906001600160a01b03821682036100c957565b519081151582036100c957565b818102929181159184041417156103825756fe8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0a26469706673582212207f8d4b0c72b523385e43a1cffb103b75a8178d3573b8625d62fe04d2fbb372bc64736f6c63430008120033";

type MarketLiquidatorReceiverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MarketLiquidatorReceiverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MarketLiquidatorReceiver__factory extends ContractFactory {
  constructor(...args: MarketLiquidatorReceiverConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MarketLiquidatorReceiver";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MarketLiquidatorReceiver> {
    return super.deploy(overrides || {}) as Promise<MarketLiquidatorReceiver>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MarketLiquidatorReceiver {
    return super.attach(address) as MarketLiquidatorReceiver;
  }
  override connect(signer: Signer): MarketLiquidatorReceiver__factory {
    return super.connect(signer) as MarketLiquidatorReceiver__factory;
  }
  static readonly contractName: "MarketLiquidatorReceiver";

  public readonly contractName: "MarketLiquidatorReceiver";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MarketLiquidatorReceiverInterface {
    return new utils.Interface(_abi) as MarketLiquidatorReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MarketLiquidatorReceiver {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MarketLiquidatorReceiver;
  }
}
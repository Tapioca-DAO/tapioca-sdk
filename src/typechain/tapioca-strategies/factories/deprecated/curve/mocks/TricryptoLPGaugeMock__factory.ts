/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  TricryptoLPGaugeMock,
  TricryptoLPGaugeMockInterface,
} from "../../../../deprecated/curve/mocks/TricryptoLPGaugeMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_lpToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rewardToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    name: "claimable_tokens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "crv_token",
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
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lpToken",
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
    name: "rewardToken",
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
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161074c38038061074c83398101604081905261002f9161007c565b600080546001600160a01b039384166001600160a01b031991821617909155600180549290931691161790556100af565b80516001600160a01b038116811461007757600080fd5b919050565b6000806040838503121561008f57600080fd5b61009883610060565b91506100a660208401610060565b90509250929050565b61068e806100be6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806370a082311161005b57806370a08231146100f057806376d8b1171461010357806383df674714610114578063f7c618c11461012757600080fd5b8063331345831461008257806338d07436146100b05780635fcbd285146100c5575b600080fd5b61009d61009036600461050c565b50678ac7230489e8000090565b6040519081526020015b60405180910390f35b6100c36100be36600461053f565b61013a565b005b6000546100d8906001600160a01b031681565b6040516001600160a01b0390911681526020016100a7565b61009d6100fe36600461050c565b610155565b6001546001600160a01b03166100d8565b6100c361012236600461056f565b6101c8565b6001546100d8906001600160a01b031681565b600054610151906001600160a01b031633846101e5565b5050565b600080546040516370a0823160e01b81523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa15801561019e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101c291906105af565b92915050565b6000546101e0906001600160a01b0316333086610248565b505050565b6040516001600160a01b0383166024820152604481018290526101e090849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610286565b6040516001600160a01b03808516602483015283166044820152606481018290526102809085906323b872dd60e01b90608401610211565b50505050565b60006102db826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166103609092919063ffffffff16565b90508051600014806102fc5750808060200190518101906102fc91906105c8565b6101e05760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084015b60405180910390fd5b606061036f8484600085610377565b949350505050565b6060824710156103d85760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610357565b600080866001600160a01b031685876040516103f49190610609565b60006040518083038185875af1925050503d8060008114610431576040519150601f19603f3d011682016040523d82523d6000602084013e610436565b606091505b509150915061044787838387610452565b979650505050505050565b606083156104c15782516000036104ba576001600160a01b0385163b6104ba5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610357565b508161036f565b61036f83838151156104d65781518083602001fd5b8060405162461bcd60e51b81526004016103579190610625565b80356001600160a01b038116811461050757600080fd5b919050565b60006020828403121561051e57600080fd5b610527826104f0565b9392505050565b801515811461053c57600080fd5b50565b6000806040838503121561055257600080fd5b8235915060208301356105648161052e565b809150509250929050565b60008060006060848603121561058457600080fd5b83359250610594602085016104f0565b915060408401356105a48161052e565b809150509250925092565b6000602082840312156105c157600080fd5b5051919050565b6000602082840312156105da57600080fd5b81516105278161052e565b60005b838110156106005781810151838201526020016105e8565b50506000910152565b6000825161061b8184602087016105e5565b9190910192915050565b60208152600082518060208401526106448160408501602087016105e5565b601f01601f1916919091016040019291505056fea264697066735822122081e7bcbf67f476b2b1dc54eeab9dba2403e93624bbdc58d532028ce2041e021564736f6c63430008120033";

type TricryptoLPGaugeMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TricryptoLPGaugeMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TricryptoLPGaugeMock__factory extends ContractFactory {
  constructor(...args: TricryptoLPGaugeMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TricryptoLPGaugeMock";
  }

  override deploy(
    _lpToken: PromiseOrValue<string>,
    _rewardToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TricryptoLPGaugeMock> {
    return super.deploy(
      _lpToken,
      _rewardToken,
      overrides || {}
    ) as Promise<TricryptoLPGaugeMock>;
  }
  override getDeployTransaction(
    _lpToken: PromiseOrValue<string>,
    _rewardToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_lpToken, _rewardToken, overrides || {});
  }
  override attach(address: string): TricryptoLPGaugeMock {
    return super.attach(address) as TricryptoLPGaugeMock;
  }
  override connect(signer: Signer): TricryptoLPGaugeMock__factory {
    return super.connect(signer) as TricryptoLPGaugeMock__factory;
  }
  static readonly contractName: "TricryptoLPGaugeMock";

  public readonly contractName: "TricryptoLPGaugeMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TricryptoLPGaugeMockInterface {
    return new utils.Interface(_abi) as TricryptoLPGaugeMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TricryptoLPGaugeMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TricryptoLPGaugeMock;
  }
}
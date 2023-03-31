/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TapiocaDeployerMock,
  TapiocaDeployerMockInterface,
} from "../../../utils/mocks/TapiocaDeployerMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "bytecodeHash",
        type: "bytes32",
      },
    ],
    name: "computeAddress",
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
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "bytecodeHash",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "deployer",
        type: "address",
      },
    ],
    name: "computeAddress",
    outputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "bytecode",
        type: "bytes",
      },
      {
        internalType: "string",
        name: "contractName",
        type: "string",
      },
    ],
    name: "deploy",
    outputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60808060405234610016576103cc908161001c8239f35b600080fdfe60406080815260048036101561001457600080fd5b600091823560e01c8063481286e61461027c578063780653061461022c57638f3b65931461004157600080fd5b60803660031901126102285760443591803567ffffffffffffffff808511610224573660238601121561022457610082602495369087818701359101610307565b95606435918211610221573660238301121561022157506100ab90369086818601359101610307565b908047106101df5785511561019e578573ffffffffffffffffffffffffffffffffffffffff916020975190888835930190f516938351610155604382898101957f437265617465323a204661696c6564206465706c6f79696e6720636f6e74726187527f637420000000000000000000000000000000000000000000000000000000000089830152610145815180928d8686019101610353565b81010360238101845201826102b6565b8515610165575050505051908152f35b604495506101909293945196879562461bcd60e51b8752860152519283809286015285850190610353565b601f01601f19168101030190fd5b6064836020878188519362461bcd60e51b85528401528201527f437265617465323a2062797465636f6465206c656e677468206973207a65726f6044820152fd5b606483601d87602088519362461bcd60e51b85528401528201527f437265617465323a20696e73756666696369656e742062616c616e63650000006044820152fd5b80fd5b8580fd5b8280fd5b508234610221576060366003190112610221576044359273ffffffffffffffffffffffffffffffffffffffff9182851685036102215750602093610274916024359035610376565b915191168152f35b5082346102215781600319360112610221575073ffffffffffffffffffffffffffffffffffffffff61027460209330906024359035610376565b90601f8019910116810190811067ffffffffffffffff8211176102d857604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b92919267ffffffffffffffff82116102d85760405191610331601f8201601f1916602001846102b6565b82948184528183011161034e578281602093846000960137010152565b600080fd5b60005b8381106103665750506000910152565b8181015183820152602001610356565b90605592600b92604051926040840152602083015281520160ff8153209056fea26469706673582212205f06427853c216adf128ed98db4a8ae19b8c61e84084ae82d5b8373391bda8da64736f6c63430008120033";

type TapiocaDeployerMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TapiocaDeployerMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TapiocaDeployerMock__factory extends ContractFactory {
  constructor(...args: TapiocaDeployerMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TapiocaDeployerMock";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TapiocaDeployerMock> {
    return super.deploy(overrides || {}) as Promise<TapiocaDeployerMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TapiocaDeployerMock {
    return super.attach(address) as TapiocaDeployerMock;
  }
  override connect(signer: Signer): TapiocaDeployerMock__factory {
    return super.connect(signer) as TapiocaDeployerMock__factory;
  }
  static readonly contractName: "TapiocaDeployerMock";

  public readonly contractName: "TapiocaDeployerMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TapiocaDeployerMockInterface {
    return new utils.Interface(_abi) as TapiocaDeployerMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TapiocaDeployerMock {
    return new Contract(address, _abi, signerOrProvider) as TapiocaDeployerMock;
  }
}

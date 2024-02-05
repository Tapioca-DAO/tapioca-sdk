/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  VulnMultiSwapper,
  VulnMultiSwapperInterface,
} from "../VulnMultiSwapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IPenroseMock",
        name: "penrose",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "counterfeitSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610388806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806347feaff914610030575b600080fd5b61004361003e3660046102af565b610045565b005b8273ffffffffffffffffffffffffffffffffffffffff1663de4065776040518163ffffffff1660e01b8152600401602060405180830381865afa158015610090573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100b491906102f1565b73ffffffffffffffffffffffffffffffffffffffff16638d2e63b88383338773ffffffffffffffffffffffffffffffffffffffff1663de4065776040518163ffffffff1660e01b8152600401602060405180830381865afa15801561011d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061014191906102f1565b6040517f54317d1600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8881166004830152602482018a905291909116906354317d1690604401602060405180830381865afa1580156101b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101da9190610315565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b168152600481019490945273ffffffffffffffffffffffffffffffffffffffff92831660248501529116604483015260648201526000608482015260a40160408051808303816000875af115801561025f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610283919061032e565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff811681146102ac57600080fd5b50565b6000806000606084860312156102c457600080fd5b83356102cf8161028a565b92506020840135915060408401356102e68161028a565b809150509250925092565b60006020828403121561030357600080fd5b815161030e8161028a565b9392505050565b60006020828403121561032757600080fd5b5051919050565b6000806040838503121561034157600080fd5b50508051602090910151909290915056fea2646970667358221220024b4f9bb78efefe94ce2ddd0f8428011def0d71b589c46c0870bcecf651e18e64736f6c63430008160033";

type VulnMultiSwapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VulnMultiSwapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VulnMultiSwapper__factory extends ContractFactory {
  constructor(...args: VulnMultiSwapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "VulnMultiSwapper";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<VulnMultiSwapper> {
    return super.deploy(overrides || {}) as Promise<VulnMultiSwapper>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): VulnMultiSwapper {
    return super.attach(address) as VulnMultiSwapper;
  }
  override connect(signer: Signer): VulnMultiSwapper__factory {
    return super.connect(signer) as VulnMultiSwapper__factory;
  }
  static readonly contractName: "VulnMultiSwapper";

  public readonly contractName: "VulnMultiSwapper";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VulnMultiSwapperInterface {
    return new utils.Interface(_abi) as VulnMultiSwapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VulnMultiSwapper {
    return new Contract(address, _abi, signerOrProvider) as VulnMultiSwapper;
  }
}

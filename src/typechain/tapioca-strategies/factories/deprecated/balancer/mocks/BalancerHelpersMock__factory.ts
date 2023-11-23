/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  BalancerHelpersMock,
  BalancerHelpersMockInterface,
} from "../../../../deprecated/balancer/mocks/BalancerHelpersMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
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
      {
        components: [
          {
            internalType: "address[]",
            name: "assets",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "minAmountsOut",
            type: "uint256[]",
          },
          {
            internalType: "bytes",
            name: "userData",
            type: "bytes",
          },
          {
            internalType: "bool",
            name: "toInternalBalance",
            type: "bool",
          },
        ],
        internalType: "struct IBalancerVault.ExitPoolRequest",
        name: "",
        type: "tuple",
      },
    ],
    name: "queryExit",
    outputs: [
      {
        internalType: "uint256",
        name: "bptIn",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "amountsOut",
        type: "uint256[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
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
      {
        components: [
          {
            internalType: "address[]",
            name: "assets",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "maxAmountsIn",
            type: "uint256[]",
          },
          {
            internalType: "bytes",
            name: "userData",
            type: "bytes",
          },
          {
            internalType: "bool",
            name: "fromInternalBalance",
            type: "bool",
          },
        ],
        internalType: "struct IBalancerVault.JoinPoolRequest",
        name: "",
        type: "tuple",
      },
    ],
    name: "queryJoin",
    outputs: [
      {
        internalType: "uint256",
        name: "bptOut",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "amountsIn",
        type: "uint256[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610461806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80639ebbf05d1461003b578063c7b2c52c14610065575b600080fd5b61004e610049366004610375565b610078565b60405161005c9291906103dd565b60405180910390f35b61004e610073366004610375565b6100aa565b604080516002808252606080830184526000939092919060208301908036833701905050600097909650945050505050565b604080516002808252606080830184526000939092919060208301908036833701905050905094509492505050565b80356001600160a01b03811681146100f057600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff8111828210171561012e5761012e6100f5565b60405290565b604051601f8201601f1916810167ffffffffffffffff8111828210171561015d5761015d6100f5565b604052919050565b600067ffffffffffffffff82111561017f5761017f6100f5565b5060051b60200190565b600082601f83011261019a57600080fd5b813560206101af6101aa83610165565b610134565b82815260059290921b840181019181810190868411156101ce57600080fd5b8286015b848110156101e957803583529183019183016101d2565b509695505050505050565b600082601f83011261020557600080fd5b813567ffffffffffffffff81111561021f5761021f6100f5565b610232601f8201601f1916602001610134565b81815284602083860101111561024757600080fd5b816020850160208301376000918101602001919091529392505050565b803580151581146100f057600080fd5b60006080828403121561028657600080fd5b61028e61010b565b9050813567ffffffffffffffff808211156102a857600080fd5b818401915084601f8301126102bc57600080fd5b813560206102cc6101aa83610165565b82815260059290921b840181019181810190888411156102eb57600080fd5b948201945b8386101561031057610301866100d9565b825294820194908201906102f0565b8652508581013593508284111561032657600080fd5b61033287858801610189565b9085015250604084013591508082111561034b57600080fd5b50610358848285016101f4565b60408301525061036a60608301610264565b606082015292915050565b6000806000806080858703121561038b57600080fd5b8435935061039b602086016100d9565b92506103a9604086016100d9565b9150606085013567ffffffffffffffff8111156103c557600080fd5b6103d187828801610274565b91505092959194509250565b6000604082018483526020604081850152818551808452606086019150828701935060005b8181101561041e57845183529383019391830191600101610402565b509097965050505050505056fea264697066735822122054f214adf2cc239c10a35f46a2c39ba20cf7322b7fcbb1896247d356c722253464736f6c63430008120033";

type BalancerHelpersMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BalancerHelpersMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BalancerHelpersMock__factory extends ContractFactory {
  constructor(...args: BalancerHelpersMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "BalancerHelpersMock";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BalancerHelpersMock> {
    return super.deploy(overrides || {}) as Promise<BalancerHelpersMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BalancerHelpersMock {
    return super.attach(address) as BalancerHelpersMock;
  }
  override connect(signer: Signer): BalancerHelpersMock__factory {
    return super.connect(signer) as BalancerHelpersMock__factory;
  }
  static readonly contractName: "BalancerHelpersMock";

  public readonly contractName: "BalancerHelpersMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BalancerHelpersMockInterface {
    return new utils.Interface(_abi) as BalancerHelpersMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BalancerHelpersMock {
    return new Contract(address, _abi, signerOrProvider) as BalancerHelpersMock;
  }
}
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
  "0x60a060405234620003685762000ba1803803806200001d816200036d565b928339810190608081830312620003685780516001600160401b0392908381116200036857816200005091840162000393565b91602091828201519085821162000368576200006e91830162000393565b60408201519160ff83168303620003685760600151938051918683116200027d576001928354928484811c941680156200035d575b878510146200025c578190601f9485811162000307575b5087908583116001146200029f5760009262000293575b5050600019600383901b1c191690841b1783555b80519687116200027d576000548381811c9116801562000272575b868210146200025c5782811162000211575b50849187116001146200019557958060008051602062000b81833981519152959493819360009899899462000189575b50501b9186199060031b1c19161784555b60805283600255338352600381528360408420556040519384523393a360405161077b90816200040682396080518161030e0152f35b01519250388062000142565b90601f1987169160008052856000209260005b818110620001fb57509160008051602062000b818339815191529695949391896000999a9410620001e2575b505050811b01845562000153565b0151871960f88460031b161c19169055388080620001d4565b82840151855593850193928701928701620001a8565b600080528560002083808a0160051c820192888b1062000252575b0160051c019084905b8281106200024557505062000112565b6000815501849062000235565b925081926200022c565b634e487b7160e01b600052602260045260246000fd5b90607f169062000100565b634e487b7160e01b600052604160045260246000fd5b015190503880620000d1565b90869350601f1983169184600052896000209260005b8b828210620002f05750508411620002d6575b505050811b018355620000e5565b015160001960f88460031b161c19169055388080620002c8565b8385015186558a97909501949384019301620002b5565b90915085600052876000208580850160051c8201928a861062000353575b918891869594930160051c01915b82811062000343575050620000ba565b6000815585945088910162000333565b9250819262000325565b93607f1693620000a3565b600080fd5b6040519190601f01601f191682016001600160401b038111838210176200027d57604052565b919080601f84011215620003685782516001600160401b0381116200027d57602090620003c9601f8201601f191683016200036d565b92818452828287010111620003685760005b818110620003f157508260009394955001015290565b8581018301518482018401528201620003db56fe6080604081815260048036101561001557600080fd5b600092833560e01c90816306fdde031461050f57508063095ea7b3146104a057806318160ddd1461048157806323b872dd14610332578063313ce567146102f457806370a08231146102bd57806395d89b411461019d578063a9059cbb146100d15763dd62ed3e1461008657600080fd5b346100cd57816003193601126100cd5760209282916100a361064c565b6100ab610667565b916001600160a01b038092168452865283832091168252845220549051908152f35b8280fd5b5050346101995780600319360112610199576100eb61064c565b91602435338252826001600160a01b03602095600387526101118484872054101561067d565b16928381526003865261013c61012a84848420546106c9565b858352600388528383205411156106ec565b33815260038652818120610151848254610738565b905583815260038652206101668282546106c9565b905582519081527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef843392a35160018152f35b5080fd5b50919034610199578160031936011261019957805190828354600181811c908083169283156102b3575b60209384841081146102a057838852908115610284575060011461022f575b505050829003601f01601f191682019267ffffffffffffffff84118385101761021c5750829182610218925282610603565b0390f35b634e487b7160e01b815260418552602490fd5b8680529192508591837f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5635b83851061027057505050508301013880806101e6565b80548886018301529301928490820161025a565b60ff1916878501525050151560051b84010190503880806101e6565b634e487b7160e01b895260228a52602489fd5b91607f16916101c7565b50503461019957602036600319011261019957806020926001600160a01b036102e461064c565b1681526003845220549051908152f35b5050346101995781600319360112610199576020905160ff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b50346100cd5760603660031901126100cd5761034c61064c565b610354610667565b93604435906001600160a01b03809316928382526020966003885261037e8488852054101561067d565b848352858852868320338452885283878420541061043e5787927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef949288921696878252600385526103e86103d685858520546106c9565b898452600387528484205411156106ec565b868252600385528282206103fd858254610738565b90558682528452818120338252845281812061041a848254610738565b9055868152600384522061042f8282546106c9565b90558551908152a35160018152f35b865162461bcd60e51b8152808701899052601960248201527f546f6b656e423a20616c6c6f77616e636520746f6f206c6f77000000000000006044820152606490fd5b5050346101995781600319360112610199576020906002549051908152f35b50346100cd57816003193601126100cd576020926104bc61064c565b918360243592839233825287526001600160a01b038282209516948582528752205582519081527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925843392a35160018152f35b84915083346100cd57826003193601126100cd5782600180549081811c908083169283156105f9575b60209384841081146102a0578388529081156105dd575060011461058857505050829003601f01601f191682019267ffffffffffffffff84118385101761021c5750829182610218925282610603565b8087529192508591837fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b8385106105c957505050508301018580806101e6565b8054888601830152930192849082016105b3565b60ff1916878501525050151560051b84010190508580806101e6565b91607f1691610538565b6020808252825181830181905290939260005b82811061063857505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501610616565b600435906001600160a01b038216820361066257565b600080fd5b602435906001600160a01b038216820361066257565b1561068457565b60405162461bcd60e51b815260206004820152601760248201527f546f6b656e423a2062616c616e636520746f6f206c6f770000000000000000006044820152606490fd5b919082018092116106d657565b634e487b7160e01b600052601160045260246000fd5b156106f357565b60405162461bcd60e51b815260206004820152601960248201527f546f6b656e423a206f766572666c6f77206465746563746564000000000000006044820152606490fd5b919082039182116106d65756fea26469706673582212207be7478d6e51cd7a2d1a6b334af0ae1714457b0a1d4986999b8359869091ab1d64736f6c63430008120033ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";

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

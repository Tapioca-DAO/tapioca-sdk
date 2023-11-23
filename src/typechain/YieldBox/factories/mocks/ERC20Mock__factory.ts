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
import type { ERC20Mock, ERC20MockInterface } from "../../mocks/ERC20Mock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_initialAmount",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
    name: "nonces",
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
        name: "owner_",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c0346100e1576001600160401b0390601f610a8038819003918201601f1916830191848311848410176100cb578084926020946040528339810103126100e157514660a05260405160208101907f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a794692188252466040820152306060820152606081526080810193818510908511176100cb57836040525190206080523360005260006020528060406000205560035561099990816100e78239608051816108d0015260a051816108a90152f35b634e487b7160e01b600052604160045260246000fd5b600080fdfe608060408181526004918236101561001657600080fd5b600092833560e01c918263095ea7b31461073a5750816318160ddd1461071b57816323b872dd146105465781633644e5151461052257816370a08231146104ec5781637ecebe00146104b5578163a9059cbb146103db578163d505accf146100d3575063dd62ed3e1461008857600080fd5b346100cf57806003193601126100cf57806020926100a46107ab565b6100ac6107c6565b6001600160a01b0391821683526001865283832091168252845220549051908152f35b5080fd5b919050346103d75760e03660031901126103d7576100ef6107ab565b6100f76107c6565b9160443590606435946084359360ff85168095036103d3576001600160a01b03809116958615610390578742101561034d5786895260209560028752848a20988954996000198b1461033a5760018b01905585519084898301947f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c986528b89850152169a8b606084015288608084015260a083015260c082015260c0815260e081019067ffffffffffffffff9381831085841117610327578288528151902061012082018381108682111761031457908a9392918952600283528d6101009261190160f01b848201526101e86108a4565b938b5196879651935b8481106102fd575050505083018b81019290925288820152038087018252607f01601f19168101928311818410176102ea57828b926080928a95895285815191012082528482015260a4358782015260c435606082015282805260015afa156102e05785908851160361029f5750907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259291848752600183528087208688528352818188205551908152a380f35b83606492519162461bcd60e51b8352820152601860248201527f45524332303a20496e76616c6964205369676e617475726500000000000000006044820152fd5b82513d89823e3d90fd5b634e487b7160e01b8b526041855260248bfd5b8381018301518982018301528897508f91016101f1565b634e487b7160e01b8e526041885260248efd5b634e487b7160e01b8d526041875260248dfd5b634e487b7160e01b8c526011865260248cfd5b835162461bcd60e51b8152602081850152600e60248201527f45524332303a20457870697265640000000000000000000000000000000000006044820152606490fd5b835162461bcd60e51b8152602081850152601860248201527f45524332303a204f776e65722063616e6e6f74206265203000000000000000006044820152606490fd5b8780fd5b8280fd5b5050346100cf57806003193601126100cf576020916001600160a01b036104006107ab565b836024359384158015906104aa575b610447575b505192835216907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef843392a35160018152f35b3381528087528181205461045d868210156107dc565b8484169086823303610472575b505050610414565b61048691610481841515610828565b610874565b3383528289528383205581522061049e848254610897565b9055833880808661046a565b50838316331461040f565b5050346100cf5760203660031901126100cf57806020926001600160a01b036104dc6107ab565b1681526002845220549051908152f35b5050346100cf5760203660031901126100cf57806020926001600160a01b036105136107ab565b16815280845220549051908152f35b5050346100cf57816003193601126100cf5760209061053f6108a4565b9051908152f35b828434610718576060366003190112610718576105616107ab565b9061056a6107c6565b60443591826105b7575b5060208095507fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9185519384526001600160a01b03809116941692a35160018152f35b6001600160a01b03958685169687835260209083825287842054906105de878310156107dc565b851692838a036105f2575b50505050610574565b8985526001835288852033865283528885205490600019820361066e575b50509282602099828a9461064d8a8e996104817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9c9a1515610828565b9282525283832055815220610663858254610897565b9055918780806105e9565b8782106106d5575092602099858a9461064d8a8e99966106b0827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9d9b610874565b8686526001855289862033875285528986205596505050945095509981949650610610565b895162461bcd60e51b8152908101849052601860248201527f45524332303a20616c6c6f77616e636520746f6f206c6f7700000000000000006044820152606490fd5b80fd5b5050346100cf57816003193601126100cf576020906003549051908152f35b915050346103d757816003193601126103d757916020928261075a6107ab565b92602435918291338152600188526001600160a01b038282209616958682528852205581527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925843392a35160018152f35b600435906001600160a01b03821682036107c157565b600080fd5b602435906001600160a01b03821682036107c157565b156107e357565b60405162461bcd60e51b815260206004820152601660248201527f45524332303a2062616c616e636520746f6f206c6f77000000000000000000006044820152606490fd5b1561082f57565b60405162461bcd60e51b815260206004820152601660248201527f45524332303a206e6f207a65726f2061646472657373000000000000000000006044820152606490fd5b9190820391821161088157565b634e487b7160e01b600052601160045260246000fd5b9190820180921161088157565b6000467f0000000000000000000000000000000000000000000000000000000000000000036108f257507f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101917f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a79469218835246604083015230606083015260608252608082019082821067ffffffffffffffff83111761094f575060405251902090565b634e487b7160e01b81526041600452602490fdfea2646970667358221220ea0607dcf8801c8cf884f8d124c35c53391b106858834a30119aaba28ec4a2b964736f6c63430008120033";

type ERC20MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Mock__factory extends ContractFactory {
  constructor(...args: ERC20MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC20Mock";
  }

  override deploy(
    _initialAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20Mock> {
    return super.deploy(_initialAmount, overrides || {}) as Promise<ERC20Mock>;
  }
  override getDeployTransaction(
    _initialAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_initialAmount, overrides || {});
  }
  override attach(address: string): ERC20Mock {
    return super.attach(address) as ERC20Mock;
  }
  override connect(signer: Signer): ERC20Mock__factory {
    return super.connect(signer) as ERC20Mock__factory;
  }
  static readonly contractName: "ERC20Mock";

  public readonly contractName: "ERC20Mock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20MockInterface {
    return new utils.Interface(_abi) as ERC20MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC20Mock;
  }
}
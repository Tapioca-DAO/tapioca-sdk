/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  HelloWorld,
  HelloWorldInterface,
} from "../../../samples/helloworld.sol/HelloWorld";

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
] as const;

const _bytecode =
  "0x60c08060405234610122576040816105da803803809161001f8285610127565b8339810103126101225780516001600160a01b038082169290919083820361012257602001519182168092036101225760805260405190632c1876e560e21b8252600160048301526024820152602081608481600080968160448401528160648401525af19182156101165780926100df575b8260a05260405161047990816101618239608051818181608701528181610116015281816102270152610388015260a05181818160d0015281816101ea015281816102ef015261033e0152f35b9091506020823d821161010e575b816100fa60209383610127565b8101031261010b5750513880610092565b80fd5b3d91506100ed565b604051903d90823e3d90fd5b600080fd5b601f909101601f19168101906001600160401b0382119082101761014a57604052565b634e487b7160e01b600052604160045260246000fdfe608060408181526004918236101561001657600080fd5b60009283803560e01c9283633ccfd60b14610312575050816344de240a146102d75781637a4357531461029f578163b69ef8a8146101bc578163b6b55f25146100af575063de4065771461006957600080fd5b346100ab57816003193601126100ab57602090516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b5080fd5b9050346101b85760203660031901126101b8578151634d4d7cbd60e11b81527f000000000000000000000000000000000000000000000000000000000000000082820152336024820152306044820152813560648201526084810184905291808360a481877f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165af19283156101ae57849361017d575b5033845283602052832090815492830180931161016a57505580f35b634e487b7160e01b845260119052602483fd5b8161019e9294503d85116101a7575b61019681836103f0565b810190610428565b9050913861014e565b503d61018c565b81513d86823e3d90fd5b8280fd5b8383346100ab57816003193601126100ab573382526020928284528183205482519163442c159960e01b83527f000000000000000000000000000000000000000000000000000000000000000090830152602482015282604482015283816064816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa92831561029457809361025f575b505051908152f35b909192508382813d831161028d575b61027881836103f0565b8101031261028a575051908380610257565b80fd5b503d61026e565b8251903d90823e3d90fd5b9050346101b85760203660031901126101b857356001600160a01b0381168091036101b8578282916020945280845220549051908152f35b5050346100ab57816003193601126100ab57602090517f00000000000000000000000000000000000000000000000000000000000000008152f35b84908293346103eb57836003193601126103eb573384528360205282842054906311a5cc7760e31b83527f0000000000000000000000000000000000000000000000000000000000000000908301523060248301523360448301528360648301526084820152818160a481866001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165af180156103df576103c3575b503382528160205281205580f35b6103d990823d84116101a75761019681836103f0565b506103b5565b505051903d90823e3d90fd5b505050fd5b90601f8019910116810190811067ffffffffffffffff82111761041257604052565b634e487b7160e01b600052604160045260246000fd5b919082604091031261043e576020825192015190565b600080fdfea2646970667358221220811c48203130d26e540fce1a979aace59c9ab504ebac1a949ad8119c2b48147964736f6c63430008120033";

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

  override deploy(
    _yieldBox: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<HelloWorld> {
    return super.deploy(
      _yieldBox,
      token,
      overrides || {}
    ) as Promise<HelloWorld>;
  }
  override getDeployTransaction(
    _yieldBox: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_yieldBox, token, overrides || {});
  }
  override attach(address: string): HelloWorld {
    return super.attach(address) as HelloWorld;
  }
  override connect(signer: Signer): HelloWorld__factory {
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
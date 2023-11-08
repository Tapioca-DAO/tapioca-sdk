/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  SimpleLeverageExecutor,
  SimpleLeverageExecutorInterface,
} from "../../../markets/leverage/SimpleLeverageExecutor";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract YieldBox",
        name: "_yb",
        type: "address",
      },
      {
        internalType: "contract ISwapper",
        name: "_swapper",
        type: "address",
      },
      {
        internalType: "contract ICluster",
        name: "_cluster",
        type: "address",
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
    inputs: [
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
        name: "amountIn",
        type: "uint256",
      },
    ],
    name: "buildSwapDefaultData",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
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
    inputs: [],
    name: "cluster",
    outputs: [
      {
        internalType: "contract ICluster",
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
        name: "assetId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "collateralAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "assetAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "collateralAmountIn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "getAsset",
    outputs: [
      {
        internalType: "uint256",
        name: "assetAmountOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "collateralId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "assetAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "collateralAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "assetAmountIn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "getCollateral",
    outputs: [
      {
        internalType: "uint256",
        name: "collateralAmountOut",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
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
        internalType: "contract ICluster",
        name: "_cluster",
        type: "address",
      },
    ],
    name: "setCluster",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISwapper",
        name: "_swapper",
        type: "address",
      },
    ],
    name: "setSwapper",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "swapper",
    outputs: [
      {
        internalType: "contract ISwapper",
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
] as const;

const _bytecode =
  "0x60a0346100e957601f61101038819003918201601f19168301916001600160401b038311848410176100ee578084926060946040528339810103126100e9578051906001600160a01b039081831683036100e9576020810151908282168092036100e957604001519182168092036100e95760008054604051946001600160a01b03199491851693919233907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a3608052836003541617600355826002541617600255339133161717600055610f0b908161010582396080518181816102a80152610ae30152f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe6040608081526004908136101561001557600080fd5b600091823560e01c908163078dfbe7146104d45781630fb5d60d146104be5781632b3297f914610495578163437be622146104495781634e71e0c8146103965781638da5cb5b1461036e5781639c82f2a414610322578163c990ad1c14610300578163dbd01de1146102d7578163de40657714610293578163e2211658146100d2575063e30c3978146100a757600080fd5b346100ce57816003193601126100ce5760015490516001600160a01b039091168152602090f35b5080fd5b9190503461028f57606036600319011261028f576100ee6105e6565b602435936001600160a01b0393909190848616860361028f5783519584870187811067ffffffffffffffff82111761027c5785526002875260209561060f60f31b878901526003541690855190631fd177af60e11b8252818061015c61014097889460443591898501610877565b0381855afa9384156102725790879392918695610243575b50506101908651948593630b7ecdc960e31b85528401906108ae565b61016061014483015281806101a961016482018b610682565b03915afa918215610238578092610201575b5050906101ee6101fd926101e083519687928784015284808401526060830190610682565b03601f19810186528561073f565b51928284938452830190610682565b0390f35b9091508382813d8311610231575b610219818361073f565b8101031261022e5750516101ee6101fd6101bb565b80fd5b503d61020f565b8351903d90823e3d90fd5b610263929550803d1061026b575b61025b818361073f565b810190610782565b923880610174565b503d610251565b86513d87823e3d90fd5b634e487b7160e01b855260418352602485fd5b8280fd5b5050346100ce57816003193601126100ce57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5050346100ce57816003193601126100ce5760025490516001600160a01b039091168152602090f35b60208361031b61030f36610601565b95949094939193610930565b9051908152f35b8390346100ce5760203660031901126100ce57356001600160a01b038181169182900361028f576103579083541633146106c2565b600380546001600160a01b03191691909117905580f35b5050346100ce57816003193601126100ce57905490516001600160a01b039091168152602090f35b9190503461028f578260031936011261028f576001546001600160a01b039290918383169190338390036104065750508084549384167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08680a36001600160a01b03199283161783551660015580f35b906020606492519162461bcd60e51b8352820152602060248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152fd5b8390346100ce5760203660031901126100ce57356001600160a01b038181169182900361028f5761047e9083541633146106c2565b600280546001600160a01b03191691909117905580f35b5050346100ce57816003193601126100ce5760035490516001600160a01b039091168152602090f35b5050346100ce5760209061031b61030f36610601565b9190503461028f57606036600319011261028f576104f06105e6565b916024359182151583036105e2576044359283151584036105de5760018060a01b039485916105238389541633146106c2565b156105c55716928315908115916105bd575b50156105825750508083549283167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a36001600160a01b031991821617825560018054909116905580f35b906020606492519162461bcd60e51b835282015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152fd5b905038610535565b93505050501660018060a01b0319600154161760015580f35b8580fd5b8480fd5b600435906001600160a01b03821682036105fc57565b600080fd5b9060c06003198301126105fc57600435916001600160a01b0360243581811681036105fc579260443582811681036105fc57926064359260843590811681036105fc579160a43567ffffffffffffffff928382116105fc57806023830112156105fc5781600401359384116105fc57602484830101116105fc576024019190565b919082519283825260005b8481106106ae575050826000602080949584010152601f8019910116010190565b60208183018101518483018201520161068d565b156106c957565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b6080810190811067ffffffffffffffff82111761072957604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff82111761072957604052565b51906001600160a01b03821682036105fc57565b519081151582036105fc57565b80910361014081126105fc57604080519267ffffffffffffffff92606085018481118682101761072957808452608082126105fc576107c08161070d565b6107c983610761565b8152602083015160808701526107e0848401610761565b60a0870152606083015160c087015285526080607f198201126105fc578290815161080a8161070d565b6080840151815260a0840151602082015260c08401518382015260e08401516060820152602087015260ff1901126105fc57815192838301908111848210176107295761086c916101209184526108646101008201610775565b855201610775565b602083015282015290565b6001600160a01b0391821681529116602082015260408101919091526000606082018190526080820181905260a082015260c00190565b60206040610120926060815160018060a01b03808251168852858201518689015284820151168488015201516060860152606083820151805160808801528481015160a08801528381015160c0880152015160e086015201518051151561010085015201511515910152565b91908260409103126105fc576020825192015190565b9392969590949660018060a01b0360035416908115610e8457600254604051633a304d8b60e21b8152600060048201526024810184905290602090829060449082906001600160a01b03165afa908115610be557600091610e4a575b5015610df45760408984810103126105fc57602089013567ffffffffffffffff8082116105fc57848b01601f838d010112156105fc57818b01351161072957604051936109e6828c0135601f01601f19166020018661073f565b8a82018035808752918c019101602001116105fc576000906020908b81018035908301878401378b013585010152604051631fd177af60e11b8152966101408880610a3685898660048501610877565b0381865afa978815610be557600098610dd1575b506001600160a01b031680610cd6575b505050604090610ab595610a92600060018060a01b0360035416928551998a958694859363efa84c6d60e01b855260048501906108ae565b8d35610144840152306101648401526101a06101848401526101a4830190610682565b03925af1938415610be557600094610cb4575b508395358410610c6f5760018060a01b031660018060a01b037f0000000000000000000000000000000000000000000000000000000000000000169060405163095ea7b360e01b808252836004830152600060248301526020826044816000875af18015610be557610c35575b6040519081526001600160a01b0384166004820152602481018790529160209150829060449082906000905af18015610be557610bf1575b50604092600060a49285519687958694634d4d7cbd60e11b8652600486015230602486015260018060a01b0316604485015260648401528160848401525af18015610be557610bb95750565b610bda9060403d604011610bde575b610bd2818361073f565b81019061091a565b5050565b503d610bc8565b6040513d6000823e3d90fd5b926020843d602011610c2d575b81610c0b6020938361073f565b810103126105fc57600060a492610c23604096610775565b5092505092610b6d565b3d9150610bfe565b6020823d602011610c67575b81610c4e6020938361073f565b810103126105fc57610c61602092610775565b50610b35565b3d9150610c41565b60405162461bcd60e51b815260206004820152601c60248201527f4c657665726167654578656375746f723a206e6f7420656e6f756768000000006044820152606490fd5b610cce91945060403d604011610bde57610bd2818361073f565b509238610ac8565b60405163095ea7b360e01b938482526004820152600060248201526020816044816000865af18015610be557610d8d575b506003546040519384526001600160a01b031660048401526024830191909152602090829081600081604481015b03925af18015610be557610d4b575b8080610a5a565b906020823d602011610d85575b81610d656020938361073f565b810103126105fc57610ab595610d7c604093610775565b50955090610d44565b3d9150610d58565b91906020833d602011610dc9575b81610da86020938361073f565b810103126105fc57610d3593610dbf602094610775565b5093509091610d07565b3d9150610d9b565b610ded9198506101403d6101401161026b5761025b818361073f565b9638610a4a565b60405162461bcd60e51b815260206004820152602860248201527f4c657665726167654578656375746f723a2073776170706572206e6f742061756044820152671d1a1bdc9a5e995960c21b6064820152608490fd5b90506020813d602011610e7c575b81610e656020938361073f565b810103126105fc57610e7690610775565b3861098c565b3d9150610e58565b60405162461bcd60e51b815260206004820152602360248201527f4c657665726167654578656375746f723a2073776170706572206e6f742076616044820152621b1a5960ea1b6064820152608490fdfea2646970667358221220197cdf8d7c80460c76e7e2972f9257be711c1552bfc62a8933a7321fa826c79b64736f6c63430008120033";

type SimpleLeverageExecutorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleLeverageExecutorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleLeverageExecutor__factory extends ContractFactory {
  constructor(...args: SimpleLeverageExecutorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "SimpleLeverageExecutor";
  }

  override deploy(
    _yb: PromiseOrValue<string>,
    _swapper: PromiseOrValue<string>,
    _cluster: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SimpleLeverageExecutor> {
    return super.deploy(
      _yb,
      _swapper,
      _cluster,
      overrides || {}
    ) as Promise<SimpleLeverageExecutor>;
  }
  override getDeployTransaction(
    _yb: PromiseOrValue<string>,
    _swapper: PromiseOrValue<string>,
    _cluster: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_yb, _swapper, _cluster, overrides || {});
  }
  override attach(address: string): SimpleLeverageExecutor {
    return super.attach(address) as SimpleLeverageExecutor;
  }
  override connect(signer: Signer): SimpleLeverageExecutor__factory {
    return super.connect(signer) as SimpleLeverageExecutor__factory;
  }
  static readonly contractName: "SimpleLeverageExecutor";

  public readonly contractName: "SimpleLeverageExecutor";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleLeverageExecutorInterface {
    return new utils.Interface(_abi) as SimpleLeverageExecutorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleLeverageExecutor {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SimpleLeverageExecutor;
  }
}
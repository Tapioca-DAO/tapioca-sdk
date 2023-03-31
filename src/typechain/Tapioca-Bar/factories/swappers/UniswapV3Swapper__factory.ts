/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  UniswapV3Swapper,
  UniswapV3SwapperInterface,
} from "../../swappers/UniswapV3Swapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IYieldBox",
        name: "_yieldBox",
        type: "address",
      },
      {
        internalType: "contract ISwapRouter",
        name: "_swapRouter",
        type: "address",
      },
      {
        internalType: "contract IUniswapV3Factory",
        name: "_factory",
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
        indexed: false,
        internalType: "uint256",
        name: "_old",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_new",
        type: "uint256",
      },
    ],
    name: "PoolFee",
    type: "event",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "contract IUniswapV3Factory",
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
        name: "tokenOutId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareOut",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "dexData",
        type: "bytes",
      },
    ],
    name: "getInputAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
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
        name: "tokenInId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareIn",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "dexData",
        type: "bytes",
      },
    ],
    name: "getOutputAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
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
    name: "poolFee",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint24",
        name: "_newFee",
        type: "uint24",
      },
    ],
    name: "setPoolFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenInId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenOutId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareIn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "dexData",
        type: "bytes",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "swapRouter",
    outputs: [
      {
        internalType: "contract ISwapRouter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e0346100fb57601f611b7b38819003918201601f19168301916001600160401b03831184841017610100578084926060946040528339810103126100fb578051906001600160a01b039081831683036100fb5760208101519082821682036100fb576040015191821682036100fb576000549260805260a05260c05261017760a31b90339060018060b81b0319161717600055604051611a649081610117823960805181818160a2015281816104f801528181610548015281816105d60152818161081f015281816108d10152610aca015260a0518181816103490152818161062201526107c9015260c05181818161019a01526103050152f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe608080604052600436101561001357600080fd5b60003560e01c908163089fe6aa14610c3e57508063532bb19214610a9f57806355a68e101461048b57806373dd250c146103945780638da5cb5b1461036d578063c31c9c0714610329578063c45a0155146102e55763c6fe95491461007757600080fd5b346102415761008536610c8f565b9080939291602094859181010312610241576001600160a01b03807f0000000000000000000000000000000000000000000000000000000000000000169360405193630cf35bdd60e41b9384865235600486015260809182866024818a5afa95861561024d576000966102c2575b5060405194855280600486015282856024818a5afa94851561024d57889360009661028a575b5050606490604051978893849263442c159960e01b845260048401526024830152600060448301525afa90811561024d578590600092610259575b600054604051630b4c774160e11b81526001600160a01b0380881660048301528616602482015260a09190911c62ffffff166044820152955085908180606481015b03917f0000000000000000000000000000000000000000000000000000000000000000165afa93841561024d576000946101fa575b506fffffffffffffffffffffffffffffffff6101e96101f295610dae565b50911690611128565b604051908152f35b93508484813d8311610246575b6102118183610cc6565b81010312610241576fffffffffffffffffffffffffffffffff6101e96102396101f296610ce8565b9550506101cb565b600080fd5b503d610207565b6040513d6000823e3d90fd5b915084813d8311610283575b61026f8183610cc6565b810103126102415784610196945191610154565b503d610265565b606492965090816102af92903d106102bb575b6102a78183610cc6565b810190610cfc565b50509050949038610119565b503d61029d565b6102da919650833d85116102bb576102a78183610cc6565b5050905094386100f3565b346102415760003660031901126102415760206040516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b346102415760003660031901126102415760206040516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b346102415760003660031901126102415760206001600160a01b0360005416604051908152f35b346102415760203660031901126102415760043562ffffff80821680830361024157600054926001600160a01b0384163303610447577f2bff118b9b9e3deb4fc5204e6ba828351c954685d0b119d0e21add79f878339960407fffffffffffffffffff000000ffffffffffffffffffffffffffffffffffffffff9476ffffff0000000000000000000000000000000000000000948251918860a01c1682526020820152a160a01b16911617600055600080f35b606460405162461bcd60e51b815260206004820152602060248201527f556e69737761705633537761707065723a206e6f7420617574686f72697a65646044820152fd5b346102415760c0366003190112610241576064356001600160a01b03811681036102415760a43567ffffffffffffffff8111610241576104cf903690600401610c61565b9060405191630cf35bdd60e41b9182845260043560048501526080846024816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa93841561024d57600094610a7a575b5060405192835260243560048401526080836024816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa92831561024d57600093610a55575b50604051917f8d2e63b8000000000000000000000000000000000000000000000000000000008352600435600484015230602484015230604484015260006064840152604435608484015260408360a48160006001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165af192831561024d57600093610a33575b5060405163095ea7b360e01b60208201526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166024820152604480820185905281526000908190610661606482610cc6565b60208151910182895af13d15610a2c573d67ffffffffffffffff81116109a35760405190610699601f8201601f191660200183610cc6565b81523d6000602083013e5b816109fd575b50156109b95781602091810103126102415760005493604051948561010081011067ffffffffffffffff610100880111176109a3576001600160a01b0362ffffff9261010088016040521686526001600160a01b038516602087015260a01c16604085015230606085015235608084015260a083015260843560c0830152600060e08301526001600160a01b0360e0604051937f414bf38900000000000000000000000000000000000000000000000000000000855282815116600486015282602082015116602486015262ffffff60408201511660448601528260608201511660648601526080810151608486015260a081015160a486015260c081015160c486015201511660e48301526020826101048160006001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165af191821561024d5760009261096f575b506020604051809263095ea7b360e01b82528160006001600160a01b038261085e89837f00000000000000000000000000000000000000000000000000000000000000001660048401602090939291936001600160a01b0360408201951681520152565b0393165af1801561024d57610940575b506001600160a01b03604051927f9a9af97a00000000000000000000000000000000000000000000000000000000845260243560048501523060248501521660448301528060648301526000608483015260408260a48160006001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165af1801561024d57604092600091610911575b5082519182526020820152f35b6109319150833d8511610939575b6109298183610cc6565b810190610d35565b905083610904565b503d61091f565b6109619060203d602011610968575b6109598183610cc6565b810190610d4b565b508261086e565b503d61094f565b9091506020813d60201161099b575b8161098b60209383610cc6565b81010312610241575190836107fa565b3d915061097e565b634e487b7160e01b600052604160045260246000fd5b606460405162461bcd60e51b815260206004820152600260248201527f53410000000000000000000000000000000000000000000000000000000000006044820152fd5b8051801592508215610a12575b5050876106aa565b610a259250602080918301019101610d4b565b8780610a0a565b60606106a4565b610a4d91935060403d604011610939576109298183610cc6565b509186610607565b610a6f91935060803d6080116102bb576102a78183610cc6565b505090509185610579565b610a9491945060803d6080116102bb576102a78183610cc6565b505090509285610529565b3461024157610aad36610c8f565b9181939192602094859181010312610241576001600160a01b03807f0000000000000000000000000000000000000000000000000000000000000000169360405192630cf35bdd60e41b9485855280600486015260809283866024818b5afa95861561024d57600096610c1b575b5060405196875235600487015282866024818a5afa95861561024d578893600097610bf3575b5050606490604051978893849263442c159960e01b845260048401526024830152600060448301525afa90811561024d578590600092610bc2575b600054604051630b4c774160e11b81526001600160a01b0380871660048301528716602482015260a09190911c62ffffff16604482015295508590818060648101610196565b915084813d8311610bec575b610bd88183610cc6565b810103126102415784610196945191610b7c565b503d610bce565b60649297509081610c0f92903d106102bb576102a78183610cc6565b50509050959089610b41565b610c33919650843d86116102bb576102a78183610cc6565b505090509489610b1b565b346102415760003660031901126102415760209062ffffff60005460a01c168152f35b9181601f840112156102415782359167ffffffffffffffff8311610241576020838186019501011161024157565b60606003198201126102415760043591602435916044359067ffffffffffffffff821161024157610cc291600401610c61565b9091565b90601f8019910116810190811067ffffffffffffffff8211176109a357604052565b51906001600160a01b038216820361024157565b919082608091031261024157815160058110156102415791610d2060208201610ce8565b916060610d2f60408401610ce8565b92015190565b9190826040910312610241576020825192015190565b90816020910312610241575180151581036102415790565b67ffffffffffffffff81116109a35760051b60200190565b805115610d885760200190565b634e487b7160e01b600052603260045260246000fd5b805160011015610d885760400190565b9060009160408051916060830167ffffffffffffffff90848110828211176110eb579186928452600285526020918286019480368737603c610def88610d7b565b5284610dfa88610d9e565b5280519485937f883bdbfd00000000000000000000000000000000000000000000000000000000855260249788860160049a888c89015251809152604487019190845b898282106110cb5750505050908580926001600160a01b03998a910392165afa9283156110c15789928a94610fae575b505050610e83610e7c82610d9e565b5191610d7b565b5160060b9060060b0390667fffffffffffff8213667fffffffffffff19831217610f9c5783610ebd81610eb584610d9e565b511692610d7b565b51169003928311610f765760060b95603c870560020b96600081129081610f88575b50610f60575b80610f4e57501b77ffffffffffffffffffffffffffffffffffffffff0000000016918215610f3b575050743bffffffffffffffffffffffffffffffffffffffc4046fffffffffffffffffffffffffffffffff1690565b601290634e487b7160e01b600052526000fd5b80601186634e487b7160e01b87945252fd5b95627fffff198114610f76576000190195610ee5565b8387601187634e487b7160e01b835252fd5b915050603c6000910760060b151538610edf565b8488601188634e487b7160e01b835252fd5b91935091503d808a843e610fc28184610cc6565b820190838383031261109c5782518181116110985783019282601f8501121561109857835193610ff185610d63565b94610ffe87519687610cc6565b808652878087019160051b830101918583116110bd578801905b8282106110a05750505085810151918211611098570181601f8201121561109c5780519061105161104883610d63565b95519586610cc6565b818552858086019260051b820101928311611098578501905b82821061107c57505050388080610e6d565b8151878116810361109457815290850190850161106a565b8b80fd5b8a80fd5b8980fd5b81518060060b81036110b9578152908801908801611018565b8e80fd5b8d80fd5b81513d8b823e3d90fd5b835163ffffffff1685528b99508f96509384019390920191600101610e3d565b602487634e487b7160e01b81526041600452fd5b8181029291811591840414171561111257565b634e487b7160e01b600052601160045260246000fd5b9291909260020b9060008212600014611706577f8000000000000000000000000000000000000000000000000000000000000000821461111257816000035b620d89e881116116c25760018116156116a65770ffffffffffffffffffffffffffffffffff6ffffcb933bd6fad37aa2d162d1a5940015b16926002821661167a575b60049182811661164e575b60088116611622575b601081166115f6575b602081166115ca575b6040811661159e575b608090818116611573575b6101008116611548575b610200811661151d575b61040081166114f2575b61080081166114c7575b611000811661149c575b6120008116611471575b6140008116611446575b618000811661141b575b6201000081166113f0575b6202000081166113c6575b620400008116611388575b6208000016611349575b50600012611323575b63ffffffff8360201c93161560001461131a5760ff60005b16830180931161130557506fffffffffffffffffffffffffffffffff916001600160a01b0390819081168481116112dc57806112ba916110ff565b9416911610156112d2576112cf9216906119b8565b90565b6112cf921661195d565b806112e69161170c565b9416911610156112fb576112cf9216906118ee565b6112cf921661179a565b601190634e487b7160e01b6000525260246000fd5b60ff600161127f565b918015611334576000190491611267565b601283634e487b7160e01b6000525260246000fd5b6b048a170391f7dc42444e8fa294919491828102928184041490151715611373571c92600061125e565b601183634e487b7160e01b6000525260246000fd5b946d2216e584f5fa1ea926041bedfe98908181029181830414901517156113b157811c94611254565b601184634e487b7160e01b6000525260246000fd5b946e5d6af8dedb81196699c329225ee604908181029181830414901517156113b157811c94611249565b946f09aa508b5b7a84e1c677de54f3e99bc9908181029181830414901517156113b157811c9461123e565b946f31be135f97d08fd981231505542fcfa6908181029181830414901517156113b157811c94611233565b946f70d869a156d2a1b890bb3df62baf32f7908181029181830414901517156113b157811c94611229565b946fa9f746462d870fdf8a65dc1f90e061e5908181029181830414901517156113b157811c9461121f565b946fd097f3bdfd2022b8845ad8f792aa5825908181029181830414901517156113b157811c94611215565b946fe7159475a2c29b7443b29c7fa6e889d9908181029181830414901517156113b157811c9461120b565b946ff3392b0822b70005940c7a398e4b70f3908181029181830414901517156113b157811c94611201565b946ff987a7253ac413176f2b074cf7815e54908181029181830414901517156113b157811c946111f7565b946ffcbe86c7900a88aedcffc83b479aa3a4908181029181830414901517156113b157811c946111ed565b946ffe5dee046a99a2a811c461f1969c3053908181029181830414901517156113b157811c946111e3565b936fff2ea16466c96a3843ec78b326b52861908181029181830414901517156113735760801c936111d8565b936fff973b41fa98c081472e6896dfb254c0908181029181830414901517156113735760801c936111cf565b936fffcb9843d60f6159c9db58835c926644908181029181830414901517156113735760801c936111c6565b936fffe5caca7e10e4e61c3624eaa0941cd0908181029181830414901517156113735760801c936111bd565b936ffff2e50f5f656932ef12357cf3c7fdcc908181029181830414901517156113735760801c936111b4565b926ffff97272373d413259a46990580e213a908181029181830414901517156111125760801c926111a9565b70ffffffffffffffffffffffffffffffffff600160801b61119e565b606460405162461bcd60e51b815260206004820152600160248201527f54000000000000000000000000000000000000000000000000000000000000006044820152fd5b81611167565b600019828209908281029081808410930393838503936000951461178f5768010000000000000000918483111561178b570991818311848183039561177757508460c01b948504600160c01b1491141715611112570360401c17808004600114811517156111125790565b80634e487b7160e01b602492526011600452fd5b8580fd5b505060401c92915050565b600160801b9291600019828509938260801b928380871096039580870396146118df57858311156102415782910990801960018101809111611112578116809104916117f5600096600184808a0304019086841190036110ff565b92806003029660038804820361177757600280981861181481846110ff565b8903908982116118cb5790611828916110ff565b61183281846110ff565b8903908982116118cb5790611846916110ff565b61185081846110ff565b8903908982116118cb5790611864916110ff565b61186e81846110ff565b8903908982116118cb5790611882916110ff565b61188c81846110ff565b8903908982116118cb576118aa916118a3916110ff565b80936110ff565b880397881161177757506112cf95966118c2916110ff565b930304176110ff565b602483634e487b7160e01b81526011600452fd5b50508092935015610241570490565b6000198282098282029081808210910393818503916000951461195257600160801b938285111561178b57908491099282841190858284039661177757508560801b9586041491141715611112570360801c17808004600114811517156111125790565b505060801c92915050565b600160c01b9291600019828509938260c01b928380871096039580870396146118df57858311156102415782910990801960018101809111611112578116809104916117f5600096600184808a0304019086841190036110ff565b6000198282099082810290818084109303938385039360009514611a2357600160c01b918483111561178b570991818311848183039561177757508460401b948504680100000000000000001491141715611112570360c01c17808004600114811517156111125790565b505060c01c9291505056fea264697066735822122000949c482d931501b113ac7242333a2f9db22ecfcf21c983c96032432f24f1a664736f6c63430008120033";

type UniswapV3SwapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniswapV3SwapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniswapV3Swapper__factory extends ContractFactory {
  constructor(...args: UniswapV3SwapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "UniswapV3Swapper";
  }

  override deploy(
    _yieldBox: PromiseOrValue<string>,
    _swapRouter: PromiseOrValue<string>,
    _factory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UniswapV3Swapper> {
    return super.deploy(
      _yieldBox,
      _swapRouter,
      _factory,
      overrides || {}
    ) as Promise<UniswapV3Swapper>;
  }
  override getDeployTransaction(
    _yieldBox: PromiseOrValue<string>,
    _swapRouter: PromiseOrValue<string>,
    _factory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _yieldBox,
      _swapRouter,
      _factory,
      overrides || {}
    );
  }
  override attach(address: string): UniswapV3Swapper {
    return super.attach(address) as UniswapV3Swapper;
  }
  override connect(signer: Signer): UniswapV3Swapper__factory {
    return super.connect(signer) as UniswapV3Swapper__factory;
  }
  static readonly contractName: "UniswapV3Swapper";

  public readonly contractName: "UniswapV3Swapper";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapV3SwapperInterface {
    return new utils.Interface(_abi) as UniswapV3SwapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV3Swapper {
    return new Contract(address, _abi, signerOrProvider) as UniswapV3Swapper;
  }
}

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
import type { PromiseOrValue } from "../../../../common";
import type {
  CurveStableToUsdoBidder,
  CurveStableToUsdoBidderInterface,
} from "../../../../contracts/LiquidationQueue/bidders/CurveStableToUsdoBidder";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ICurveSwapper",
        name: "curveSwapper_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "curvePoolAssetCount_",
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
        name: "_old",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_new",
        type: "address",
      },
    ],
    name: "CurveSwapperUpdated",
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
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "curveSwapper",
    outputs: [
      {
        internalType: "contract ICurveSwapper",
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
        internalType: "contract ISingularity",
        name: "singularity",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenInId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "getInputAmount",
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
        internalType: "contract ISingularity",
        name: "singularity",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenInId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "getOutputAmount",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
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
        internalType: "contract ICurveSwapper",
        name: "_swapper",
        type: "address",
      },
    ],
    name: "setCurveSwapper",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISingularity",
        name: "singularity",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenInId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
  "0x6080346100ab57601f61198838819003918201601f19168301916001600160401b038311848410176100b05780849260409485528339810103126100ab5780516001600160a01b03811691908290036100ab576020015160008054336001600160a01b03199182168117835560405194927f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a360025416176002556003556118c190816100c78239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe60806040818152600436101561001457600080fd5b600091823560e01c90816306fdde031461038057508063078dfbe71461027d5780634e71e0c8146101e25780635810e7ec146101695780635dd82b361461014c5780638da5cb5b14610125578063b691d78c14610107578063e30c3978146100df578063e91f9961146100b75763fef744fa1461009057600080fd5b346100b3576020906100ac6100a43661041e565b5050916107fc565b9051908152f35b5080fd5b50346100b357816003193601126100b35760025490516001600160a01b039091168152602090f35b50346100b357816003193601126100b35760015490516001600160a01b039091168152602090f35b50346100b3576020906100ac61011c3661041e565b939290926109ff565b50346100b357816003193601126100b357905490516001600160a01b039091168152602090f35b50346100b3576020906100ac6101613661041e565b5050916105de565b82346101df5760203660031901126101df576004356001600160a01b03818116918290036101db5761019f818454163314610488565b816002549182167faa9eb2cf6e6a7bce28901c01eb97556feb7824a5a9b13df2c67580509a62633f8580a36001600160a01b0319161760025580f35b8280fd5b80fd5b50346100b357816003193601126100b3576001546001600160a01b0391828216903382900361023a575080845493841660008051602061186c8339815191528680a36001600160a01b03199283161783551660015580f35b5162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152606490fd5b50346100b35760603660031901126100b3576001600160a01b0390600435828116919082900361037c57602435801515810361037857604435908115158203610374576102ce858754163314610488565b1561035b57821590811591610353575b5015610318575080835492831660008051602061186c8339815191528580a36001600160a01b031991821617825560018054909116905580f35b5162461bcd60e51b81526020600482015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152606490fd5b9050386102de565b5050600180546001600160a01b03191690911790555080f35b8580fd5b8480fd5b8380fd5b919050346101db57826003193601126101db576103da92506103a1826104d3565b601a825279737461626c65202d3e205553444f2028334372762b5553444f2960301b6020830152519182916020835260208301906103de565b0390f35b919082519283825260005b84811061040a575050826000602080949584010152601f8019910116010190565b6020818301810151848301820152016103e9565b6080600319820112610483576004356001600160a01b0381168103610483579160243591604435916001600160401b03916064359083821161048357806023830112156104835781600401359384116104835760248483010111610483576024019190565b600080fd5b1561048f57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b604081019081106001600160401b038211176104ee57604052565b634e487b7160e01b600052604160045260246000fd5b6001600160401b0381116104ee57604052565b608081019081106001600160401b038211176104ee57604052565b606081019081106001600160401b038211176104ee57604052565b601f909101601f19168101906001600160401b038211908210176104ee57604052565b51906001600160a01b038216820361048357565b1561058b57565b60405162461bcd60e51b815260206004820152600c60248201526b1554d113c81b9bdd081cd95d60a21b6044820152606490fd5b9081602091031261048357516001600160a01b03811681036104835790565b60408051636c3d8b8f60e01b808252919594936001600160a01b03939092916020918516908281600481855afa9081156107b957869184916000916107c4575b5060048b5180948193631192124760e11b8352165afa80156107b9578690600090610780575b6106519250161515610584565b87519283528183600481845afa8015610700578593600091610744575b50829060048a51809881936386c8e21d60e01b8352165afa94851561070057600095610715575b5084841461070b578160049189519283809263de40657760e01b82525afa918215610700576106d09798506000926106d3575b50501661144f565b90565b6106f29250803d106106f9575b6106ea818361054d565b8101906105bf565b38806106c8565b503d6106e0565b88513d6000823e3d90fd5b5093955050505050565b90948282813d831161073d575b61072c818361054d565b810103126101df5750519338610695565b503d610722565b919280945082813d8311610779575b61075d818361054d565b810103126101df57509082610773869493610570565b9061066e565b503d610753565b90508382813d83116107b2575b610797818361054d565b810103126101df5750856107ad61065192610570565b610644565b503d61078d565b89513d6000823e3d90fd5b92509082813d81116107f5575b6107db818361054d565b810103126101df5750826107ef8792610570565b3861061e565b503d6107d1565b60408051636c3d8b8f60e01b80825291959493926001600160a01b0392916020918416908281600481855afa9081156107b95785918491600091610990575b5060048b5180948193631192124760e11b8352165afa80156107b9578590600090610957575b61086e9250161515610584565b87519283528183600481845afa801561070057849360009161091b575b50829060048a51809781936386c8e21d60e01b8352165afa938415610700576000946108ec575b5083851461070b578160049189519283809263de40657760e01b82525afa918215610700576106d09798506000926106d35750501661144f565b90938282813d8311610914575b610903818361054d565b810103126101df57505192386108b2565b503d6108f9565b919280945082813d8311610950575b610934818361054d565b810103126101df5750908261094a859493610570565b9061088b565b503d61092a565b90508382813d8311610989575b61096e818361054d565b810103126101df57508461098461086e92610570565b610861565b503d610964565b92509082813d81116109c1575b6109a7818361054d565b810103126101df5750826109bb8692610570565b3861083b565b503d61099d565b5190811515820361048357565b6001600160a01b039182168152911660208201526040810191909152606081019190915260800190565b604051636c3d8b8f60e01b8082529496956000959490939290916001600160a01b0390911690602081600481855afa908115610e54578791611214575b50604051631192124760e11b815298906001600160a01b031660208a600481845afa998a15610e9357889a6111cc575b50610a866020969798999a60018060a01b03161515610584565b6040519586809263473ec51560e11b825285600483015260249889915afa908115610f26578991611192575b501561115b5760405163de40657760e01b815291602083600481845afa928315610f2657899361113a575b5060405163c23ea21f60e01b815297602089600481855afa988915610ee0578a99611118575b5060209060046040518094819382525afa908115610f265789916110d7575b506040516386c8e21d60e01b81529190602090839060049082906001600160a01b03165afa918215610f2657899261109f575b506001600160a01b038816330361107157818514610f8257889680610f69575b5050600254604051638eb22cdd60e01b815260048101869052868101859052604481018a9052906001600160a01b03908116906020908390606490829088165afa918215610ee0578a92610f35575b506001600160a01b0384163b15610f3157858a91610bf76040519485938493630208d92960e11b855230600486016109d5565b0381836001600160a01b0388165af18015610f2657908991610f0e575b5050604051630cf35bdd60e41b80825260048201869052939060808188816001600160a01b0388165afa908115610ee0578a91610eeb575b506040519485526004850183905260808588816001600160a01b0388165afa948515610ee0578a95610e9e575b5090610c8f610c896020936116f4565b956116f4565b60405195610c9c87610532565b6002875260403685890137610cb08761128b565b52610cba866112ae565b52606460405180958193638eb22cdd60e01b83528960048401528a8301528c604483015260018060a01b03165afa918215610e93578892610e5f575b5060018060a01b03600254169460405194633d9545e960e11b86526004860152840152866044840152606483015260016084830152600160a483015261014091828160c481875afa928315610e545792610d9d92889260409796958493610e19575b5050610d72610d80610dc6928951928391602083016113a8565b03601f19810183528261054d565b875163efa84c6d60e01b81529889978896879560048701906113e3565b6101448501526001600160a01b03166101648401526101a06101848401526101a48301906103de565b03925af1918215610e0d578092610ddc57505090565b9091506040823d604011610e05575b81610df86040938361054d565b810103126101df57505190565b3d9150610deb565b604051903d90823e3d90fd5b610dc6929350610e45610d729282610d8093903d10610e4d575b610e3d818361054d565b8101906112be565b939250610d58565b503d610e33565b6040513d89823e3d90fd5b9091506020813d602011610e8b575b81610e7b6020938361054d565b8101031261048357519038610cf6565b3d9150610e6e565b6040513d8a823e3d90fd5b602092919550610c89610ecb610c8f9260803d608011610ed9575b610ec3818361054d565b810190611252565b505090509692935050610c79565b503d610eb9565b6040513d8c823e3d90fd5b610f04915060803d608011610ed957610ec3818361054d565b5050905038610c4c565b610f1790610504565b610f22578738610c14565b8780fd5b6040513d8b823e3d90fd5b8980fd5b9091506020813d602011610f61575b81610f516020938361054d565b8101031261048357519038610bc4565b3d9150610f44565b819297509060209181010312610f225735943880610b75565b5050604051638eb22cdd60e01b815260048101849052938401829052604484018790529095949293506001600160a01b031691602084606481865afa938415611066578594611032575b50823b1561037857604051630208d92960e11b8152938593859390928492869284926110079291906001600160a01b031630600486016109d5565b03925af180156110275761101a57505090565b61102390610504565b5090565b6040513d84823e3d90fd5b9093506020813d60201161105e575b8161104e6020938361054d565b8101031261037857519238610fcc565b3d9150611041565b6040513d87823e3d90fd5b60405162461bcd60e51b815260206004820152600781880152666f6e6c79204c5160c81b6044820152606490fd5b9091506020813d6020116110cf575b816110bb6020938361054d565b810103126110cb57519038610b55565b8880fd5b3d91506110ae565b90506020813d602011611110575b816110f26020938361054d565b810103126110cb57906020611108600493610570565b919250610b22565b3d91506110e5565b602091995061113390823d84116106f9576106ea818361054d565b9890610b03565b61115491935060203d6020116106f9576106ea818361054d565b9138610add565b60405162461bcd60e51b8152602060048201526010818701526f13585c9ad95d081b9bdd081d985b1a5960821b6044820152606490fd5b90506020813d6020116111c4575b816111ad6020938361054d565b810103126110cb576111be906109c8565b38610ab2565b3d91506111a0565b995060208a3d60201161120c575b816111e76020938361054d565b81010312610f2257610a8661120160209798999a9b610570565b9a9998979650610a6c565b3d91506111da565b90506020813d60201161124a575b8161122f6020938361054d565b810103126112465761124090610570565b38610a3c565b8680fd5b3d9150611222565b91908260809103126104835781516005811015610483579161127660208201610570565b91606061128560408401610570565b92015190565b8051156112985760200190565b634e487b7160e01b600052603260045260246000fd5b8051600110156112985760400190565b809103906101408212610483576040805192606084016001600160401b038111858210176104ee5780835260808212610483576112fa81610517565b61130384610570565b81526020840151608086015261131a838501610570565b60a0860152606084015160c086015284526080607f19820112610483578190815161134481610517565b6080850151815260a0850151602082015260c08501518382015260e08501516060820152602086015260ff1901126104835761139d610120825193611388856104d3565b61139561010082016109c8565b8552016109c8565b602083015282015290565b6020908160408183019282815285518094520193019160005b8281106113cf575050505090565b8351855293810193928101926001016113c1565b60206040610120926060815160018060a01b03808251168852858201518689015284820151168488015201516060860152606083820151805160808801528481015160a08801528381015160c0880152015160e086015201518051151561010085015201511515910152565b60408051630cf35bdd60e41b808252600482018590529496959194608094936001600160a01b03908116939290918682602481885afa918215610700576000926116d1575b5087519081528960048201528681602481885afa9687156107005760009761169f575b5050906114cf6114c9606494936116f4565b966116f4565b958751946114dc86610532565b6002865260209788928a36858a01376114f48861128b565b526114fe876112ae565b52885194858092638eb22cdd60e01b8252896004830152866024830152600060448301525afa92831561169457600093611665575b506002541697865194633d9545e960e11b8652600486015260248501526044840152606483015260016084830152600160a483015261014091828160c4818a5afa92831561165a5784936115a6936115e59899936115d193600093611635575b50506115b49088519586918883016113a8565b03601f19810186528561054d565b8651630b7ecdc960e31b81529788948593849360048501906113e3565b6101606101448401526101648301906103de565b03915afa91821561162b57506000916115ff575b50905090565b82813d8311611624575b611613818361054d565b810103126101df57505180386115f9565b503d611609565b513d6000823e3d90fd5b6115b4929350908161165292903d10610e4d57610e3d818361054d565b919038611593565b85513d6000823e3d90fd5b90928682813d831161168d575b61167c818361054d565b810103126101df5750519138611533565b503d611672565b87513d6000823e3d90fd5b606494939297506116c36114cf92826114c993903d10610ed957610ec3818361054d565b5050905097929394506114b7565b6116e9919250873d8911610ed957610ec3818361054d565b505090509038611494565b600254604080516310c3a8d960e11b8152600492602092916001600160a01b0391849082908790829086165afa90811561186057908291600091611829575b50169060001995600092600354935b84811061179157505050505060001984131561175e5750505090565b5162461bcd60e51b815291820152600f60248201526e185cdcd95d081b9bdd08199bdd5b99608a1b604482015260649150fd5b855163c661065760e01b81528881018290528781602481865afa908115611694576000916117f4575b508416838516146117ec575b60001981146117d757600101611742565b601188634e487b7160e01b6000525260246000fd5b9750876117c6565b908882813d8311611822575b61180a818361054d565b810103126101df575061181c90610570565b386117ba565b503d611800565b91508482813d8311611859575b611840818361054d565b810103126101df57506118538291610570565b38611733565b503d611836565b83513d6000823e3d90fdfe8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0a26469706673582212204079e23ce1e3cfd5b78c82af4e0a0433ef7bcce40771b67b76b369f7f5cf5f5a64736f6c63430008130033";

type CurveStableToUsdoBidderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CurveStableToUsdoBidderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CurveStableToUsdoBidder__factory extends ContractFactory {
  constructor(...args: CurveStableToUsdoBidderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "CurveStableToUsdoBidder";
  }

  override deploy(
    curveSwapper_: PromiseOrValue<string>,
    curvePoolAssetCount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CurveStableToUsdoBidder> {
    return super.deploy(
      curveSwapper_,
      curvePoolAssetCount_,
      overrides || {}
    ) as Promise<CurveStableToUsdoBidder>;
  }
  override getDeployTransaction(
    curveSwapper_: PromiseOrValue<string>,
    curvePoolAssetCount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      curveSwapper_,
      curvePoolAssetCount_,
      overrides || {}
    );
  }
  override attach(address: string): CurveStableToUsdoBidder {
    return super.attach(address) as CurveStableToUsdoBidder;
  }
  override connect(signer: Signer): CurveStableToUsdoBidder__factory {
    return super.connect(signer) as CurveStableToUsdoBidder__factory;
  }
  static readonly contractName: "CurveStableToUsdoBidder";

  public readonly contractName: "CurveStableToUsdoBidder";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CurveStableToUsdoBidderInterface {
    return new utils.Interface(_abi) as CurveStableToUsdoBidderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CurveStableToUsdoBidder {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CurveStableToUsdoBidder;
  }
}

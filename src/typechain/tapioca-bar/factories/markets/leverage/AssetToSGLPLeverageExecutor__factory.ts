/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  AssetToSGLPLeverageExecutor,
  AssetToSGLPLeverageExecutorInterface,
} from "../../../markets/leverage/AssetToSGLPLeverageExecutor";

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
      {
        internalType: "contract IERC20",
        name: "_usdc",
        type: "address",
      },
      {
        internalType: "contract IGmxRewardRouterV2",
        name: "_glpRewardRouter",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "GlpNotValid",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "NotEnough",
    type: "error",
  },
  {
    inputs: [],
    name: "SenderNotValid",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapperNotAuthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapperNotValid",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenNotValid",
    type: "error",
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
        name: "to",
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
        name: "to",
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
    name: "usdc",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
  "0x6101008060405234620001bf5760a081620014b58038038091620000248285620001c4565b833981010312620001bf5780516001600160a01b03918282168203620001bf57602081015191838316809303620001bf57604082015192848416809403620001bf576060830151928584168403620001bf576080015185811692838203620001bf5760209360049260018060a01b031996600097808954166040519a8b988997338d7f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a3608052836003541617600355826002541617600255339133161717885560a05260e052633e9b6c6f60e21b82525afa918215620001b257819262000166575b50501660c0526040516112b69081620001ff82396080518181816102d40152610c77015260a0518181816103c9015281816106ec01526107e7015260c0518181816103fe015261080b015260e05181818161044f015261085d0152f35b9091506020813d8211620001a9575b816200018460209383620001c4565b81010312620001a55751908282168203620001a25750388062000109565b80fd5b5080fd5b3d915062000175565b50604051903d90823e3d90fd5b600080fd5b601f909101601f19168101906001600160401b03821190821017620001e857604052565b634e487b7160e01b600052604160045260246000fdfe6040608081526004908136101561001557600080fd5b600091823560e01c908163078dfbe7146109535781630fb5d60d146107445781632b3297f91461071b5781633e413bee146106d7578163437be6221461068b5781634e71e0c8146105d85781638da5cb5b146105b05781639c82f2a414610564578163c990ad1c1461032c578163dbd01de114610303578163de406577146102bf578163e2211658146100dd575063e30c3978146100b257600080fd5b346100d957816003193601126100d95760015490516001600160a01b039091168152602090f35b5080fd5b919050346102bb5760603660031901126102bb576100f9610a61565b602435936001600160a01b039390919084861686036102bb578351958487018781106001600160401b038211176102a85785526002875261060f60f31b602080890191909152600354865163678a252760e11b81526001600160a01b0395861685820190815293909516838301526044356040840152600060608401529096610140949116918490829081906080010381855afa93841561029e579087939291869561026f575b50506101bc8651948593630b7ecdc960e31b8552840190610e19565b61016061014483015281806101d561016482018b610afc565b03915afa91821561026457809261022d575b50509061021a6102299261020c83519687928784015284808401526060830190610afc565b03601f198101865285610bb8565b51928284938452830190610afc565b0390f35b9091508382813d831161025d575b6102458183610bb8565b8101031261025a57505161021a6102296101e7565b80fd5b503d61023b565b8351903d90823e3d90fd5b61028f929550803d10610297575b6102878183610bb8565b810190610d25565b9238806101a0565b503d61027d565b86513d87823e3d90fd5b634e487b7160e01b855260418352602485fd5b8280fd5b5050346100d957816003193601126100d957517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5050346100d957816003193601126100d95760025490516001600160a01b039091168152602090f35b838361033736610a7c565b989290919594600160a01b600190039283600254169a8951809c633a304d8b60e21b82528c8883015233602483015260209d8e91815a91604492fa90811561055a578c91610521575b50156105115761038e610fce565b81019060608183031261050d578035918c8201356001600160401b038111610509578b6103c2849386936103f09601610c01565b92013595877f0000000000000000000000000000000000000000000000000000000000000000168096610e85565b9081106104f25761042481857f000000000000000000000000000000000000000000000000000000000000000016846110fc565b88519163364e231160e01b835285830152602482015288604482015281606482015289816084818c877f0000000000000000000000000000000000000000000000000000000000000000165af19889156104e75780996104b5575b5050871061049d575050918491610497933091610c5e565b51908152f35b85516328e217f560e01b815292169082015260249150fd5b909198508982813d83116104e0575b6104ce8183610bb8565b8101031261025a57505196898061047f565b503d6104c4565b8851903d90823e3d90fd5b88516328e217f560e01b8152808601839052602490fd5b8c80fd5b8a80fd5b89516303482c7160e21b81528690fd5b90508c81813d8311610553575b6105388183610bb8565b8101031261054f5761054990610bd9565b8d610380565b8b80fd5b503d61052e565b8b513d8e823e3d90fd5b8390346100d95760203660031901126100d957356001600160a01b03818116918290036102bb57610599908354163314610b3c565b600380546001600160a01b03191691909117905580f35b5050346100d957816003193601126100d957905490516001600160a01b039091168152602090f35b919050346102bb57826003193601126102bb576001546001600160a01b039290918383169190338390036106485750508084549384167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08680a36001600160a01b03199283161783551660015580f35b906020606492519162461bcd60e51b8352820152602060248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152fd5b8390346100d95760203660031901126100d957356001600160a01b03818116918290036102bb576106c0908354163314610b3c565b600280546001600160a01b03191691909117905580f35b5050346100d957816003193601126100d957517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5050346100d957816003193601126100d95760035490516001600160a01b039091168152602090f35b8383346100d95761075436610a7c565b98929097600160a0979693971b600190039283600254169a8951809c633a304d8b60e21b8252848883015233602483015260209d8e91815a91604492fa908115610949578491610910575b5015610511576107ad610fce565b8a0160608b8203126102bb578a35908c8c01359b8b810135906001600160401b03821161090c576107df929101610c01565b9361083181877f00000000000000000000000000000000000000000000000000000000000000001694887f000000000000000000000000000000000000000000000000000000000000000016906110fc565b8a51906303cea95560e21b8252838883015260248201528160448201523060648201528c81608481878a7f0000000000000000000000000000000000000000000000000000000000000000165af19384156109015780946108cf575b505082106108b9576108a29291868b92610e85565b96871061049d575050918491610497933091610c5e565b846024918a51916328e217f560e01b8352820152fd5b909193508c82813d83116108fa575b6108e88183610bb8565b8101031261025a575051918c8061088d565b503d6108de565b8b51903d90823e3d90fd5b8580fd5b90508c81813d8311610942575b6109278183610bb8565b8101031261093e5761093890610bd9565b8d61079f565b8380fd5b503d61091d565b8b513d86823e3d90fd5b919050346102bb5760603660031901126102bb5761096f610a61565b91602435918215158303610a5d5760443592831515840361090c5760018060a01b039485916109a2838954163314610b3c565b15610a44571692831590811591610a3c575b5015610a015750508083549283167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a36001600160a01b031991821617825560018054909116905580f35b906020606492519162461bcd60e51b835282015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152fd5b9050386109b4565b93505050501660018060a01b0319600154161760015580f35b8480fd5b600435906001600160a01b0382168203610a7757565b600080fd5b9060c0600319830112610a7757600435916001600160a01b036024358181168103610a7757926044358281168103610a775792606435926084359081168103610a77579160a4356001600160401b0392838211610a775780602383011215610a77578160040135938411610a775760248483010111610a77576024019190565b919082519283825260005b848110610b28575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201610b07565b15610b4357565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b608081019081106001600160401b03821117610ba257604052565b634e487b7160e01b600052604160045260246000fd5b90601f801991011681019081106001600160401b03821117610ba257604052565b51908115158203610a7757565b6001600160401b038111610ba257601f01601f191660200190565b81601f82011215610a7757803590610c1882610be6565b92610c266040519485610bb8565b82845260208383010111610a7757816000926020809301838601378301015290565b9190826040910312610a77576020825192015190565b600060a4926040959660018060a01b038098610c9e83837f00000000000000000000000000000000000000000000000000000000000000001680966110fc565b8851998a988997634d4d7cbd60e11b8952600489015216602487015216604485015260648401528160848401525af18015610d0557610cda5750565b610cfa9060403d8111610cfe575b610cf28183610bb8565b810190610c48565b5050565b503d610ce8565b6040513d6000823e3d90fd5b51906001600160a01b0382168203610a7757565b8091036101408112610a775760408051926001600160401b03926060850184811186821017610ba25780845260808212610a7757610d6281610b87565b610d6b83610d11565b815260208301516080870152610d82848401610d11565b60a0870152606083015160c087015285526080607f19820112610a775782908151610dac81610b87565b6080840151815260a0840151602082015260c08401518382015260e08401516060820152602087015260ff190112610a775781519283830190811184821017610ba257610e0e91610120918452610e066101008201610bd9565b855201610bd9565b602083015282015290565b60206040610120926060815160018060a01b03808251168852858201518689015284820151168488015201516060860152606083820151805160808801528481015160a08801528381015160c0880152015160e086015201518051151561010085015201511515910152565b6003546040805163678a252760e11b81526001600160a01b0384811660048301529485166024820152604481018690526000606482015261014098979196919591949093909290919083168985608481845afa948515610fc35788999a600099989996610f95575b5050918391600093610f28958316610f84575b5050506003541692610f4986519788968795869463efa84c6d60e01b86526004860190610e19565b610144840152306101648401526101a06101848401526101a4830190610afc565b03925af1918215610f7a57600092610f6057505090565b610f769250803d10610cfe57610cf28183610bb8565b5090565b513d6000823e3d90fd5b610f8d926110fc565b388080610f00565b600094929650610f2895939181610fb792903d10610297576102878183610bb8565b95919381939550610eed565b88513d6000823e3d90fd5b6003546001600160a01b0390811690811561106e576020906002541691604460405180948193633a304d8b60e21b83526000600484015260248301525afa908115610d0557600091611035575b501561102357565b60405163086a95e160e21b8152600490fd5b906020823d8211611066575b8161104e60209383610bb8565b8101031261025a575061106090610bd9565b3861101b565b3d9150611041565b604051631da137b560e01b8152600490fd5b3d156110ab573d9061109182610be6565b9161109f6040519384610bb8565b82523d6000602084013e565b606090565b156110b757565b60405162461bcd60e51b815260206004820152601b60248201527f53616665417070726f76653a20617070726f7665206661696c656400000000006044820152606490fd5b91823b15611240576040516020938482019363095ea7b360e01b9081865260018060a01b0316928360248201526000809682826044819501526044815261114281610b87565b519082865af1611150611080565b9080611205575b61116191506110b0565b8361116f575b505050505050565b84809493819460405191898301948552602483015260448201526044815261119681610b87565b51925af1906111a3611080565b826111c0575b50506111b591506110b0565b388080808080611167565b80919250519182159283156111df575b5050506111b5915038806111a9565b829350918491928101031261025a57506111b5916111fd9101610bd9565b3880806111d0565b50805187811591821561121f575b50506111619150611157565b838092935001031261090c57611239876111619201610bd9565b8738611213565b60405162461bcd60e51b815260206004820152601860248201527714d85999505c1c1c9bdd994e881b9bc818dbdb9d1c9858dd60421b6044820152606490fdfea2646970667358221220675781a50af4339b3621d70467eae766aea88449bb4ac0b3745ccce102bd674a64736f6c63430008130033";

type AssetToSGLPLeverageExecutorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetToSGLPLeverageExecutorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetToSGLPLeverageExecutor__factory extends ContractFactory {
  constructor(...args: AssetToSGLPLeverageExecutorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AssetToSGLPLeverageExecutor";
  }

  override deploy(
    _yb: PromiseOrValue<string>,
    _swapper: PromiseOrValue<string>,
    _cluster: PromiseOrValue<string>,
    _usdc: PromiseOrValue<string>,
    _glpRewardRouter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AssetToSGLPLeverageExecutor> {
    return super.deploy(
      _yb,
      _swapper,
      _cluster,
      _usdc,
      _glpRewardRouter,
      overrides || {}
    ) as Promise<AssetToSGLPLeverageExecutor>;
  }
  override getDeployTransaction(
    _yb: PromiseOrValue<string>,
    _swapper: PromiseOrValue<string>,
    _cluster: PromiseOrValue<string>,
    _usdc: PromiseOrValue<string>,
    _glpRewardRouter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _yb,
      _swapper,
      _cluster,
      _usdc,
      _glpRewardRouter,
      overrides || {}
    );
  }
  override attach(address: string): AssetToSGLPLeverageExecutor {
    return super.attach(address) as AssetToSGLPLeverageExecutor;
  }
  override connect(signer: Signer): AssetToSGLPLeverageExecutor__factory {
    return super.connect(signer) as AssetToSGLPLeverageExecutor__factory;
  }
  static readonly contractName: "AssetToSGLPLeverageExecutor";

  public readonly contractName: "AssetToSGLPLeverageExecutor";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetToSGLPLeverageExecutorInterface {
    return new utils.Interface(_abi) as AssetToSGLPLeverageExecutorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetToSGLPLeverageExecutor {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AssetToSGLPLeverageExecutor;
  }
}

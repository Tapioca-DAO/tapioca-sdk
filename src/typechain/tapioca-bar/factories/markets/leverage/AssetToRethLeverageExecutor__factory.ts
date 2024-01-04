/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  AssetToRethLeverageExecutor,
  AssetToRethLeverageExecutorInterface,
} from "../../../markets/leverage/AssetToRethLeverageExecutor";

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
        internalType: "address",
        name: "_weth",
        type: "address",
      },
      {
        internalType: "address",
        name: "_balancerVault",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_balancerPoolId",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Failed",
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
    inputs: [],
    name: "poolId",
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
    name: "vault",
    outputs: [
      {
        internalType: "contract IBalancerVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "weth",
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
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60c0346200013957601f6200171938819003918201601f19168301916001600160401b038311848410176200013e5780849260c09460405283398101031262000139578051906001600160a01b03908183168303620001395760208101519180831680930362000139576040820151918183168093036200013957620000886060820162000154565b60a0620000986080840162000154565b9201519460018060a01b031994856000541691604051983360007f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a36080528660035416176003558560025416176002553390853316171760005560a052169060045416176004556005556115af90816200016a82396080518181816102e201526112e4015260a0518181816103d30152818161074101526108c70152f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b0382168203620001395756fe60406080815260049081361015610020575b5050361561001e57600080fd5b005b600091823560e01c8063078dfbe714610a0a5780630fb5d60d146107b85780632b3297f91461078f5780633e0dc34e146107705780633fc8cef31461072c578063437be622146106e05780634e71e0c81461062e5780638da5cb5b146106065780639c82f2a4146105ba578063c990ad1c1461033a578063dbd01de114610311578063de406577146102cd578063e221165814610129578063e30c3978146100fc5763fbfa77cf146100d25750610011565b346100f857826003193601126100f8575490516001600160a01b03909116815260209150f35b8280fd5b50503461012557816003193601126101255760015490516001600160a01b039091168152602090f35b5080fd5b5091346102ca5760603660031901126102ca57610144610b17565b6001600160a01b0393909290602435858116810361027a57610164610d20565b600354845163678a252760e11b81526001600160a01b039788168582019081529390971660208401526044356040840152600060608401529096610140969116918690829081906080010381855afa9586156102c0578596610291575b50506101dd8351958693630b7ecdc960e31b855284019061103e565b610160610144830152602094859181806101fb61016482018b610bad565b03915afa9283156102865792610250575b5061023d61024c9261022f83519687928784015284808401526060830190610bad565b03601f198101865285610c7c565b51928284938452830190610bad565b0390f35b91508282813d831161027f575b6102678183610c7c565b8101031261027a5790519061023d61020c565b600080fd5b503d61025d565b8251903d90823e3d90fd5b6102b1929650803d106102b9575b6102a98183610c7c565b810190610f4a565b9338806101c1565b503d61029f565b84513d87823e3d90fd5b80fd5b505034610125578160031936011261012557517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b50503461012557816003193601126101255760025490516001600160a01b039091168152602090f35b509061034536610b2d565b98959397919490600160a01b600190039182600254169a8951809c633a304d8b60e21b82528a8783015233602483015260209d8e91815a91604492fa90811561054b578a91610585575b50156105755761039d611219565b820194606083870312610571578235958c8401356001600160401b03811161056d576103d06103f9939289928701610cc5565b917f000000000000000000000000000000000000000000000000000000000000000080956110c0565b948510610555578851633c2f4f4360e11b81528a84169590938c8587818a5afa94851561054b578a95610510575b5080851615610500578161043e91875416846113de565b6102584201928342116104ed57928492610463928d9897968d61046b97013592610d4e565b998a916113de565b813b156104e95785916064839289519889938492630c46aac760e31b845230908401523060248401528c60448401525af180156104dd579087949392916104c0575b506104ba945030916112cb565b51908152f35b91935091936104cf8291610c38565b6102ca5791839186936104ad565b508551903d90823e3d90fd5b8580fd5b634e487b7160e01b8a526011865260248afd5b8a516358700a0160e11b81528690fd5b9094508c81813d8311610544575b6105288183610c7c565b810103126105405761053990610d0c565b9338610427565b8980fd5b503d61051e565b8b513d8c823e3d90fd5b88516328e217f560e01b815290831681850152602490fd5b8a80fd5b8880fd5b89516303482c7160e21b81528590fd5b90508c81813d83116105b3575b61059c8183610c7c565b81010312610540576105ad90610c9d565b3861038f565b503d610592565b83823461012557602036600319011261012557356001600160a01b03818116918290036100f8576105ef908354163314610bed565b600380546001600160a01b03191691909117905580f35b505034610125578160031936011261012557905490516001600160a01b039091168152602090f35b5090346100f857826003193601126100f8576001546001600160a01b0392909183831691903383900361069d5750508084549384167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08680a36001600160a01b03199283161783551660015580f35b906020606492519162461bcd60e51b8352820152602060248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152fd5b83823461012557602036600319011261012557356001600160a01b03818116918290036100f857610715908354163314610bed565b600280546001600160a01b03191691909117905580f35b505034610125578160031936011261012557517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5050346101255781600319360112610125576020906005549051908152f35b50503461012557816003193601126101255760035490516001600160a01b039091168152602090f35b50919034610125576107c936610b2d565b6002548851633a304d8b60e21b8152808c018b905233602482015260209b959a9498976001600160a01b039590949390929091908d9082908816815a91604492fa90811561099a5783916109d5575b50156109c557610826611219565b8201996060838c0312610125578b8301359a8a8401356001600160401b0381116109c1578691610857918601610cc5565b9416803b156100f8578a516339f4769360e01b81523088820190815260208101849052849082908190604001038183865af180156109b757918e918994936109a4575b508c51633c2f4f4360e11b815293849182905afa91821561099a578392610963575b5085821615610953577f00000000000000000000000000000000000000000000000000000000000000009361025842019384421161094057508c9385938a93610911989761090b943592610d4e565b916110c0565b9687106109285750509184916104ba9330916112cb565b85516328e217f560e01b815292169082015260249150fd5b634e487b7160e01b815260118952602490fd5b8a516358700a0160e11b81528790fd5b9091508c81813d8311610993575b61097b8183610c7c565b810103126100f85761098c90610d0c565b90386108bc565b503d610971565b8b513d85823e3d90fd5b6109b090959195610c38565b933861089a565b8c513d86823e3d90fd5b8380fd5b89516303482c7160e21b81528690fd5b90508c81813d8311610a03575b6109ec8183610c7c565b810103126100f8576109fd90610c9d565b38610818565b503d6109e2565b5090346100f85760603660031901126100f857610a25610b17565b91602435918215158303610b13576044359283151584036104e95760018060a01b03948591610a58838954163314610bed565b15610afa571692831590811591610af2575b5015610ab75750508083549283167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a36001600160a01b031991821617825560018054909116905580f35b906020606492519162461bcd60e51b835282015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152fd5b905038610a6a565b93505050501660018060a01b0319600154161760015580f35b8480fd5b600435906001600160a01b038216820361027a57565b9060c060031983011261027a57600435916001600160a01b03602435818116810361027a5792604435828116810361027a579260643592608435908116810361027a579160a4356001600160401b039283821161027a578060238301121561027a57816004013593841161027a576024848301011161027a576024019190565b919082519283825260005b848110610bd9575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201610bb8565b15610bf457565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b6001600160401b038111610c4b57604052565b634e487b7160e01b600052604160045260246000fd5b608081019081106001600160401b03821117610c4b57604052565b90601f801991011681019081106001600160401b03821117610c4b57604052565b5190811515820361027a57565b6001600160401b038111610c4b57601f01601f191660200190565b81601f8201121561027a57803590610cdc82610caa565b92610cea6040519485610c7c565b8284526020838301011161027a57816000926020809301838601378301015290565b51906001600160a01b038216820361027a57565b60405190604082018281106001600160401b03821117610c4b576040526002825261060f60f31b6020830152565b909194939460405190610d6082610c61565b3082526020820193600085526040830193308552606084019360008552600554996040519560c087019b8c6001600160401b03898210911117610c4b5760e49c604052875260208701976000895260018060a01b0385169860408901958a875260608a019760018060a01b0316885260808a0198808a52610ddf610d20565b9b60a08c019c8d52610f2b575b505060018060a01b0360045416986040519e8f916352bbbe2960e01b835260e0600484015251910152519960028b1015610f1557610e708e9a8b996000998b9960209f6101048c015260018060a01b039051166101248b015260018060a01b039051166101448a0152516101648901525160c06101848901526101a4880190610bad565b94516001600160a01b0390811660248801529051151560448701529051166064850152511515608484015260a4830189905260c483015203925af1928315610f0957600093610ed5575b508210610ec357565b60405163312d207360e11b8152600490fd5b9092506020813d602011610f01575b81610ef160209383610c7c565b8101031261027a57519138610eba565b3d9150610ee4565b6040513d6000823e3d90fd5b634e487b7160e01b600052602160045260246000fd5b600454610f43926001600160a01b03909116906113de565b3880610dec565b809103610140811261027a5760408051926001600160401b03926060850184811186821017610c4b578084526080821261027a57610f8781610c61565b610f9083610d0c565b815260208301516080870152610fa7848401610d0c565b60a0870152606083015160c087015285526080607f1982011261027a5782908151610fd181610c61565b6080840151815260a0840151602082015260c08401518382015260e08401516060820152602087015260ff19011261027a5781519283830190811184821017610c4b576110339161012091845261102b6101008201610c9d565b855201610c9d565b602083015282015290565b60206040610120926060815160018060a01b03808251168852858201518689015284820151168488015201516060860152606083820151805160808801528481015160a08801528381015160c0880152015160e086015201518051151561010085015201511515910152565b919082604091031261027a576020825192015190565b6003546040805163678a252760e11b81526001600160a01b0384811660048301529485166024820152604481018690526000606482015261014098979196919591949093909290919083168985608481845afa94851561120e5788999a6000999899966111e0575b50509183916000936111639583166111cf575b505050600354169261118486519788968795869463efa84c6d60e01b8652600486019061103e565b610144840152306101648401526101a06101848401526101a4830190610bad565b03925af19182156111c55760009261119b57505090565b6111ba9250803d106111be575b6111b28183610c7c565b8101906110aa565b5090565b503d6111a8565b513d6000823e3d90fd5b6111d8926113de565b38808061113b565b6000949296506111639593918161120292903d106102b9576102a98183610c7c565b95919381939550611128565b88513d6000823e3d90fd5b6003546001600160a01b039081169081156112b9576020906002541691604460405180948193633a304d8b60e21b83526000600484015260248301525afa908115610f0957600091611280575b501561126e57565b60405163086a95e160e21b8152600490fd5b906020823d82116112b1575b8161129960209383610c7c565b810103126102ca57506112ab90610c9d565b38611266565b3d915061128c565b604051631da137b560e01b8152600490fd5b600060a4926040959660018060a01b03809861130b83837f00000000000000000000000000000000000000000000000000000000000000001680966113de565b8851998a988997634d4d7cbd60e11b8952600489015216602487015216604485015260648401528160848401525af18015610f09576113475750565b61135e9060403d81116111be576111b28183610c7c565b5050565b3d1561138d573d9061137382610caa565b916113816040519384610c7c565b82523d6000602084013e565b606090565b1561139957565b60405162461bcd60e51b815260206004820152601b60248201527f53616665417070726f76653a20617070726f7665206661696c656400000000006044820152606490fd5b9190823b156115395760405163095ea7b360e01b60208083018281526001600160a01b038516602485015260006044808601829052855291969195939192918691829161142a81610c61565b519082865af1611438611362565b90806114fe575b6114499150611392565b82611457575b505050505050565b6040518681019182526001600160a01b039490941660248501526044808501939093529183528392839290839061148f606482610c7c565b51925af19061149c611362565b826114b9575b50506114ae9150611392565b38808080808061144f565b80919250519182159283156114d8575b5050506114ae915038806114a2565b82935091849192810103126102ca57506114ae916114f69101610c9d565b3880806114c9565b508051878115918215611518575b5050611449915061143f565b83809293500103126104e957611532876114499201610c9d565b873861150c565b60405162461bcd60e51b815260206004820152601860248201527714d85999505c1c1c9bdd994e881b9bc818dbdb9d1c9858dd60421b6044820152606490fdfea264697066735822122014585f37b79f5cda57b556ba59748e300b8d62e6a4b6bb7ca6278001455f3a9b64736f6c63430008130033";

type AssetToRethLeverageExecutorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetToRethLeverageExecutorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetToRethLeverageExecutor__factory extends ContractFactory {
  constructor(...args: AssetToRethLeverageExecutorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AssetToRethLeverageExecutor";
  }

  override deploy(
    _yb: PromiseOrValue<string>,
    _swapper: PromiseOrValue<string>,
    _cluster: PromiseOrValue<string>,
    _weth: PromiseOrValue<string>,
    _balancerVault: PromiseOrValue<string>,
    _balancerPoolId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AssetToRethLeverageExecutor> {
    return super.deploy(
      _yb,
      _swapper,
      _cluster,
      _weth,
      _balancerVault,
      _balancerPoolId,
      overrides || {}
    ) as Promise<AssetToRethLeverageExecutor>;
  }
  override getDeployTransaction(
    _yb: PromiseOrValue<string>,
    _swapper: PromiseOrValue<string>,
    _cluster: PromiseOrValue<string>,
    _weth: PromiseOrValue<string>,
    _balancerVault: PromiseOrValue<string>,
    _balancerPoolId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _yb,
      _swapper,
      _cluster,
      _weth,
      _balancerVault,
      _balancerPoolId,
      overrides || {}
    );
  }
  override attach(address: string): AssetToRethLeverageExecutor {
    return super.attach(address) as AssetToRethLeverageExecutor;
  }
  override connect(signer: Signer): AssetToRethLeverageExecutor__factory {
    return super.connect(signer) as AssetToRethLeverageExecutor__factory;
  }
  static readonly contractName: "AssetToRethLeverageExecutor";

  public readonly contractName: "AssetToRethLeverageExecutor";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetToRethLeverageExecutorInterface {
    return new utils.Interface(_abi) as AssetToRethLeverageExecutorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetToRethLeverageExecutor {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AssetToRethLeverageExecutor;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  StargateLbpHelper,
  StargateLbpHelperInterface,
} from "../../contracts/StargateLbpHelper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lbpPool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_vault",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "BalanceTooLow",
    type: "error",
  },
  {
    inputs: [],
    name: "NotAuthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "RouterNotValid",
    type: "error",
  },
  {
    inputs: [],
    name: "TokensMismatch",
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
        internalType: "uint16",
        name: "_srcPoolId",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "_amountLP",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "instantRedeemLocal",
    outputs: [
      {
        internalType: "uint256",
        name: "amountSD",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lbpPool",
    outputs: [
      {
        internalType: "contract ILiquidityBootstrappingPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lbpVault",
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
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "srcToken",
            type: "address",
          },
          {
            internalType: "address",
            name: "targetToken",
            type: "address",
          },
          {
            internalType: "uint16",
            name: "dstChainId",
            type: "uint16",
          },
          {
            internalType: "address",
            name: "peer",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "slippage",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "srcPoolId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dstPoolId",
            type: "uint256",
          },
        ],
        internalType: "struct StargateLbpHelper.StargateData",
        name: "stargateData",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "assetIn",
            type: "address",
          },
          {
            internalType: "address",
            name: "assetOut",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "poolId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minAmountOut",
            type: "uint256",
          },
        ],
        internalType: "struct StargateLbpHelper.ParticipateData",
        name: "lbpData",
        type: "tuple",
      },
    ],
    name: "participate",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "_srcPoolId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_dstPoolId",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "_refundAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountLP",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_to",
        type: "bytes",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "dstGasForCall",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dstNativeAmount",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "dstNativeAddr",
            type: "bytes",
          },
        ],
        internalType: "struct IStargateRouterBase.lzTxObj",
        name: "_lzTxParams",
        type: "tuple",
      },
    ],
    name: "redeemLocal",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "_srcPoolId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_dstPoolId",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "_refundAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountLP",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minAmountLD",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_to",
        type: "bytes",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "dstGasForCall",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dstNativeAmount",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "dstNativeAddr",
            type: "bytes",
          },
        ],
        internalType: "struct IStargateRouterBase.lzTxObj",
        name: "_lzTxParams",
        type: "tuple",
      },
    ],
    name: "redeemRemote",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "srcChainId",
        type: "uint16",
      },
      {
        internalType: "bytes",
        name: "srcAddress",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    name: "retryRevert",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "contract IStargateRouter",
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
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountLD",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
    ],
    name: "sgReceive",
    outputs: [],
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
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60e03461014a57601f620015ea38819003918201601f19168301916001600160401b0383118484101761014f5780849260609460405283398101031261014a5761004881610165565b90610061604061005a60208401610165565b9201610165565b60008054336001600160a01b03198216811783556040516001600160a01b0396949594909387939192918416907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a3600180551690811561013b5750608052821660a0521660c05260405161147090816200017a823960805181818160cf0152818161026f015281816103c60152818161052f01528181610659015281816108200152610ed5015260a0518181816101d70152610ff5015260c051818181610b77015281816110e30152818161115901526112800152f35b630801eaf160e01b8152600490fd5b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b038216820361014a5756fe6080604081815260049182361015610022575b505050361561002057600080fd5b005b600092833560e01c918263505941e514610b63575081635443a1c4146106e05783826360a3b95c1461061857508163715018a6146105d05783826384d0dba3146104bc575081638da5cb5b14610494578382638f2e1d181461035757508163ab8236f3146102e7578163c4de93a514610206578163e91a6a53146101c2578163f2fde38b14610102575063f887ea40146100bc5780610012565b346100fe57816003193601126100fe57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5080fd5b919050346101be5760203660031901126101be576001600160a01b038235818116939192908490036101b957610136610d2c565b83156101675750506000548260018060a01b03198216176000551660008051602061141b833981519152600080a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b600080fd5b8280fd5b5050346100fe57816003193601126100fe57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b8383346100fe5760603660031901126100fe57610221610ba6565b6044356001600160a01b03818116918290036101b9576020928560649261ffff9461024a610d2c565b8751998a96879563c4de93a560e01b87521690850152602435602485015260448401527f0000000000000000000000000000000000000000000000000000000000000000165af19182156102dc57916102a8575b6020925051908152f35b90506020823d82116102d4575b816102c260209383610c59565b810103126101b957602091519061029e565b3d91506102b5565b9051903d90823e3d90fd5b8390346100fe5760c03660031901126100fe57610302610ba6565b506001600160401b03602435818111610353576103229036908401610c97565b5061032b610be4565b9060a435908111610353576103509261034691369101610c97565b9060843590610ed2565b80f35b8380fd5b80918460031960e08136011261048f5761036f610ba6565b92610378610be4565b936001600160401b0360a43581811161048b576103989036908501610bb7565b92909160c435908111610487576103b29036908601610cde565b926103bb610d2c565b6001600160a01b03957f0000000000000000000000000000000000000000000000000000000000000000871694853b156104835761044361ffff95610452948d9a8c519d8e9b8c9a8b9a6311e5c3a360e31b8c5216908a015260243560248a015260443560448a0152166064880152608435608488015260e060a488015260e48701916113f9565b918483030160c4850152610df7565b039134905af190811561047a57506104675750f35b61047090610c2b565b6104775780f35b80fd5b513d84823e3d90fd5b8a80fd5b8880fd5b8780fd5b505050fd5b5050346100fe57816003193601126100fe57905490516001600160a01b039091168152602090f35b809184610100916003199083823601126105cc576104d8610ba6565b916104e1610be4565b946001600160401b039360c435858111610487576105029036908601610bb7565b92909560e4359081116105c85761051c9036908701610cde565b93610525610d2c565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169590863b156105c4578b9861ffff96610452956105b5938d519e8f9c8d9b8c9b6384d0dba360e01b8d5216908b015260243560248b015260443560448b0152166064890152608435608489015260a43560a489015260c48801526101048701916113f9565b918483030160e4850152610df7565b8b80fd5b8980fd5b8480fd5b83346104775780600319360112610477576105e9610d2c565b600080546001600160a01b0319811682556001600160a01b031660008051602061141b8339815191528280a380f35b80918460606003193601126106dc5761062f610ba6565b6024356001600160401b0381116105cc5761064d9036908501610bb7565b9390610657610d2c565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690813b156106d85786936106bb61ffff92875198899687958695631828ee5760e21b875216908501526060602485015260648401916113f9565b6044356044830152039134905af190811561047a57506104675750f35b8680fd5b5050fd5b838336600319016101a081126101be57610100136100fe5760a0366101031901126100fe57600260015414610b215760026001556001600160a01b0383358181169290839003610353576084358151926020808501976323b872dd60e01b8952602498338a880152306044880152846064880152606487528860a088019160018060401b03988084108a851117610b0f5791809184936107e1958b5261078585610c3e565b8785527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656460c08201525190828d5af13d15610b07573d906107c582610c7c565b916107d28a519384610c59565b82523d8c8784013e5b8a610e21565b8051908382610a98575b50505060a435808502908582041485151715610a8657620186a09004840391848311610a8657855163095ea7b360e01b8082527f00000000000000000000000000000000000000000000000000000000000000008616848301819052828d018c90529899979896979183816044818f875af18015610a7c5790849291610a5f575b5089519283918252818d816108848d8d8b8401610d9c565b03925af18015610a5557610a28575b5060443561ffff81168091036105c85787516108ae81610bfa565b8a81528a8382015288516108c181610c3e565b600381526203078360ec1b84820152898201528851943360601b84870152601486526108ec86610c3e565b89519461010494853590898216809203610a2457870152610124978835908116809103610a20578b870152610144998a3560608801526101648035608089015261018492833560a08a01523360c08a015260c0895260e089019e8f908a8210911117610a0757508e9f508d9e9c9d8e528a3b15610a03578e9b8c9a6109c0986109ac988d6327efc43f60e21b905260e48c015260c435908b015260e435908a015233908901528701528501526101206101a4850152610204840190610df7565b60e3199384848303016101c4850152610db7565b91818303016101e48201526109d860df199282610db7565b03019134905af190811561047a57506109f4575b506001805580f35b6109fd90610c2b565b816109ec565b8c80fd5b90508f93508e925060419150634e487b7160e01b835252fd5b8d80fd5b8e80fd5b610a4790823d8411610a4e575b610a3f8183610c59565b810190610d84565b508a610893565b503d610a35565b88513d8c823e3d90fd5b610a7590833d8511610a4e57610a3f8183610c59565b508d61086c565b8a513d8e823e3d90fd5b634e487b7160e01b8952601182528989fd5b80610aa7938301019101610d84565b15610ab4578980836107eb565b602a8960849387519362461bcd60e51b85528401528201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152fd5b6060906107db565b634e487b7160e01b8352604185528c83fd5b5162461bcd60e51b8152602081840152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fd5b8490346100fe57816003193601126100fe577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b6004359061ffff821682036101b957565b9181601f840112156101b9578235916001600160401b0383116101b957602083818601950101116101b957565b606435906001600160a01b03821682036101b957565b606081019081106001600160401b03821117610c1557604052565b634e487b7160e01b600052604160045260246000fd5b6001600160401b038111610c1557604052565b604081019081106001600160401b03821117610c1557604052565b601f909101601f19168101906001600160401b03821190821017610c1557604052565b6001600160401b038111610c1557601f01601f191660200190565b81601f820112156101b957803590610cae82610c7c565b92610cbc6040519485610c59565b828452602083830101116101b957816000926020809301838601378301015290565b91906060838203126101b95760405190610cf782610bfa565b8193803583526020810135602084015260408101359160018060401b0383116101b957604092610d279201610c97565b910152565b6000546001600160a01b03163303610d4057565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b908160209103126101b9575180151581036101b95790565b6001600160a01b039091168152602081019190915260400190565b919082519283825260005b848110610de3575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201610dc2565b9060606040610e1e9380518452602081015160208501520151918160408201520190610db7565b90565b91929015610e835750815115610e35575090565b3b15610e3e5790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b825190915015610e965750805190602001fd5b60405162461bcd60e51b815260206004820152908190610eba906024830190610db7565b0390fd5b51906001600160a01b03821682036101b957565b917f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031633036113e757805160288111156113e157819081010360c081126101b95760a0136101b9576040516001600160401b039390929060a0840185811185821017610c1557604052610f4f60208401610ebe565b80855260c0610f6060408601610ebe565b9460208701958652606081015160408801526080810151606088015260a0810151608088015201519160018060a01b03831683036101b9576001600160a01b03908116911681036113cf576020602491604051928380926370a0823160e01b82523060048301525afa80156112d657839160009161139a575b50106113885760405163038fff2d60e41b8152926020846004817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa9384156112d657600094611354575b5084519051604051946001600160a01b03918216929091169060c0860188811187821017610c15576040528552600060208601526040850152606084015281608084015260405161107e81610c3e565b6002815261060f60f31b602082015260a08401526040519485608081011090608087011117610c1557608085016040908152308652600060208088018290526001600160a01b0393841683890152606088018290528651925163095ea7b360e01b81527f0000000000000000000000000000000000000000000000000000000000000000851660048201526024810183905293909284926044928492165af180156112d65760009260209261118292611337575b50855160405163095ea7b360e01b81529485936001600160a01b03928316938593849291907f00000000000000000000000000000000000000000000000000000000000000001660048401610d9c565b03925af180156112d657611318575b506080820151606090920151801561130e57905b81420142116112f857604051936352bbbe2960e01b855260e06004860152815160e486015260208201519260028410156112e257602094606061123160a08997968897610104890152600180831b03604082015116610124890152600180831b0384820151166101448901526080810151610164890152015160c06101848801526101a4870190610db7565b9360018060a01b038151166024870152878101511515604487015260018060a01b03604082015116606487015201511515608485015260a4840152420160c48301520381600060018060a01b037f0000000000000000000000000000000000000000000000000000000000000000165af180156112d6576112af5750565b602090813d83116112cf575b6112c58183610c59565b810103126101b957565b503d6112bb565b6040513d6000823e3d90fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b50610258906111a5565b6113309060203d602011610a4e57610a3f8183610c59565b5038611191565b61134d90843d8611610a4e57610a3f8183610c59565b5038611132565b90936020823d602011611380575b8161136f60209383610c59565b81010312610477575051923861102e565b3d9150611362565b6040516351940b3960e11b8152600490fd5b91506020823d6020116113c7575b816113b560209383610c59565b81010312610477575082905138610fd9565b3d91506113a8565b604051637aa1a10560e01b8152600490fd5b50505050565b60405163ea8e4eb560e01b8152600490fd5b908060209392818452848401376000828201840152601f01601f191601019056fe8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0a26469706673582212209e0646cf730377badb1a33622757cfdf0e0bc27abeb6c3cfba302dea594ab94164736f6c63430008120033";

type StargateLbpHelperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StargateLbpHelperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StargateLbpHelper__factory extends ContractFactory {
  constructor(...args: StargateLbpHelperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "StargateLbpHelper";
  }

  override deploy(
    _router: PromiseOrValue<string>,
    _lbpPool: PromiseOrValue<string>,
    _vault: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StargateLbpHelper> {
    return super.deploy(
      _router,
      _lbpPool,
      _vault,
      overrides || {}
    ) as Promise<StargateLbpHelper>;
  }
  override getDeployTransaction(
    _router: PromiseOrValue<string>,
    _lbpPool: PromiseOrValue<string>,
    _vault: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _router,
      _lbpPool,
      _vault,
      overrides || {}
    );
  }
  override attach(address: string): StargateLbpHelper {
    return super.attach(address) as StargateLbpHelper;
  }
  override connect(signer: Signer): StargateLbpHelper__factory {
    return super.connect(signer) as StargateLbpHelper__factory;
  }
  static readonly contractName: "StargateLbpHelper";

  public readonly contractName: "StargateLbpHelper";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StargateLbpHelperInterface {
    return new utils.Interface(_abi) as StargateLbpHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StargateLbpHelper {
    return new Contract(address, _abi, signerOrProvider) as StargateLbpHelper;
  }
}
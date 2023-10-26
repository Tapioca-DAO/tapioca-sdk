/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  UniswapV3Swapper,
  UniswapV3SwapperInterface,
} from "../../../contracts/Swapper/UniswapV3Swapper";

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
    inputs: [],
    name: "AddressNotValid",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_old",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_new",
        type: "uint256",
      },
    ],
    name: "PoolFee",
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
      {
        internalType: "uint256",
        name: "shareIn",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "withdrawFromYb",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "depositToYb",
        type: "bool",
      },
    ],
    name: "buildSwapData",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "tokenIn",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenInId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenOutId",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapTokensData",
            name: "tokensData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareIn",
                type: "uint256",
              },
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
            internalType: "struct ISwapper.SwapAmountData",
            name: "amountData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "withdrawFromYb",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "depositToYb",
                type: "bool",
              },
            ],
            internalType: "struct ISwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct ISwapper.SwapData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
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
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareIn",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "withdrawFromYb",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "depositToYb",
        type: "bool",
      },
    ],
    name: "buildSwapData",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "tokenIn",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenInId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenOutId",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapTokensData",
            name: "tokensData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareIn",
                type: "uint256",
              },
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
            internalType: "struct ISwapper.SwapAmountData",
            name: "amountData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "withdrawFromYb",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "depositToYb",
                type: "bool",
              },
            ],
            internalType: "struct ISwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct ISwapper.SwapData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
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
    inputs: [],
    name: "getDefaultDexOptions",
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
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "tokenIn",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenInId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenOutId",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapTokensData",
            name: "tokensData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareIn",
                type: "uint256",
              },
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
            internalType: "struct ISwapper.SwapAmountData",
            name: "amountData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "withdrawFromYb",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "depositToYb",
                type: "bool",
              },
            ],
            internalType: "struct ISwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct ISwapper.SwapData",
        name: "swapData",
        type: "tuple",
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
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "tokenIn",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenInId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenOutId",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapTokensData",
            name: "tokensData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareIn",
                type: "uint256",
              },
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
            internalType: "struct ISwapper.SwapAmountData",
            name: "amountData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "withdrawFromYb",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "depositToYb",
                type: "bool",
              },
            ],
            internalType: "struct ISwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct ISwapper.SwapData",
        name: "swapData",
        type: "tuple",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "tokenIn",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenInId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenOutId",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapTokensData",
            name: "tokensData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareIn",
                type: "uint256",
              },
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
            internalType: "struct ISwapper.SwapAmountData",
            name: "amountData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "withdrawFromYb",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "depositToYb",
                type: "bool",
              },
            ],
            internalType: "struct ISwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct ISwapper.SwapData",
        name: "swapData",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
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
    stateMutability: "payable",
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
    inputs: [],
    name: "twapDuration",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e0346200016a57601f6200267b38819003918201601f19168301916001600160401b038311848410176200016f578084926060946040528339810103126200016a5780516001600160a01b038082169291908382036200016a57602083015192818416908185036200016a576040015194828616918287036200016a57620000e8620000e892620000f095600054903360018060a01b03198316176000553391167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a360018055633c000bb866ffffffffffffff196002541617600255151562000185565b151562000185565b60805260a05260c0526040516124a89081620001d38239608051818181610251015281816104410152818161075701528181610803015281816108a901528181610903015281816109cb0152610d69015260a05181818161029a015281816103ef0152610b46015260c051818181610a3c0152610b010152f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b156200018d57565b60405162461bcd60e51b815260206004820152601a60248201527f537761707065723a2061646472657373206e6f742076616c69640000000000006044820152606490fdfe608080604052600436101561001357600080fd5b60003560e01c908163089fe6aa14610ec4575080631a16321014610e9457806326d8954514610e6d5780633fa2ef5e14610dd85780635bf66e4814610d57578063715018a614610d1057806373dd250c14610cae5780637b2a8bd214610b9e5780638da5cb5b14610b75578063c31c9c0714610b30578063c45a015514610aeb578063e3c711a0146109b6578063efa84c6d1461016d5763f2fde38b146100b957600080fd5b34610168576020366003190112610168576100d2610f24565b6100da611007565b6001600160a01b03908116908115610114576000548260018060a01b031982161760005516600080516020612453833981519152600080a3005b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b600080fd5b36600319016101a08112610168576101401361016857610164356001600160a01b038116900361016857610184356001600160401b03811161016857366023820112156101685780600401356101c281610fec565b916101d06040519384610fc9565b8183523660248383010111610168578160009260246020930183860137830101528060006004356001600160a01b0381168082036101685715801590610999575b1561088a57916044356001600160a01b038116810361016857935b6000608435801580158161087f575b15610703575061027591505b60a43590602435877f0000000000000000000000000000000000000000000000000000000000000000611550565b60405163095ea7b360e01b602082019081529193916000918291906102d9816102cb897f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031660248401611490565b03601f198101835282610fc9565b519082895af16102e76114ab565b816106d4575b50156106aa57511561069c575b602081805181010312610168576020015162ffffff6002541661031b61146a565b156106925730905b604051956001600160401b0361010088019081119088111761060c57610100870160409081526001600160a01b0391821688528882166020808a01918252828a0194855294831660608a0190815260808a0196875260a08a019788526101443560c08b01908152600060e08c01818152945163414bf38960e01b81529b51861660048d01529251851660248c0152945162ffffff1660448b015251831660648a015294516084890152945160a4880152905160c48701529251831660e4860152918491610104918391907f0000000000000000000000000000000000000000000000000000000000000000165af19182156105a25760009261065e575b5061042961146a565b61043e575b6040809350519182526020820152f35b507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031691803b156106225760405163095ea7b360e01b6020820190815260248201859052600060448084019190915282526080820194916001600160401b0386118187101761060c5760006040946104de828061051996819b9682978b52519082865af16104d26114ab565b816105dd575b506114f3565b855182602082019163095ea7b360e01b8352610502816102cb8c8b60248401611490565b51925af161050e6114ab565b816105ae57506114f3565b8151634d4d7cbd60e11b8152606480356004830152306024830152610164356001600160a01b0316604483015281018490526084810185905293849160a49183915af180156105a257604092600091610573575b5061042e565b6105939150833d851161059b575b61058b8183610fc9565b81019061147a565b90508361056d565b503d610581565b6040513d6000823e3d90fd5b80518015925082156105c3575b5050866104d8565b6105d692506020809183010191016114db565b86806105bb565b80518015925082156105f2575b50508a6104d8565b61060592506020809183010191016114db565b8a806105ea565b634e487b7160e01b600052604160045260246000fd5b60405162461bcd60e51b815260206004820152601460248201527314ddd85c1c195c8e881b9bc818dbdb9d1c9858dd60621b6044820152606490fd5b9091506020813d60201161068a575b8161067a60209383610fc9565b8101031261016857519083610420565b3d915061066d565b6101643590610323565b506106a5611101565b6102fa565b60405162461bcd60e51b8152602060048201526002602482015261534160f01b6044820152606490fd5b80518015925082156106e9575b5050876102ed565b6106fc92506020809183010191016114db565b87806106e1565b9060243591826107cd575b50505060643580610724575b5061027590610247565b60c4356107c35760405163442c159960e01b8152600481019190915260e4356024820152600060448201526020816064817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa80156105a257610798575b50610275905b9061071a565b602090813d83116107bc575b6107ae8183610fc9565b81010312610168578661078c565b503d6107a4565b5061027590610792565b9192509015610878575060405163442c159960e01b8152600481019190915260a4356024820152600060448201526020816064817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa9081156105a257600091610846575b505b86808061070e565b90506020813d602011610870575b8161086160209383610fc9565b8101031261016857518661083c565b3d9150610854565b905061083e565b5060c435151561023b565b50604051630cf35bdd60e41b81526024803560048301526080908290817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa9081156105a257600091610976575b50604051630cf35bdd60e41b815260643560048201529092906080816024817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa9081156105a257600091610943575b509361022c565b610965915060803d60801161096f575b61095d8183610fc9565b81019061118a565b505090508561093c565b503d610953565b61098f915060803d60801161096f5761095d8183610fc9565b50509050846108e2565b506044356001600160a01b03811690819003610168571515610211565b34610168576109c436610f58565b5050610a0d7f00000000000000000000000000000000000000000000000000000000000000006109f481846111c3565b92909160209460608101359060808782013591016112b7565b600254604051630b4c774160e11b815290949250858180610a3862ffffff8916878960048501611150565b03817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa9081156105a257600091610aa7575b50610a8d9063ffffffff610a9f9660181c1690611962565b506001600160801b0390911690611cd1565b604051908152f35b90508581813d8311610ae4575b610abe8183610fc9565b8101031261016857610a9f9463ffffffff610adb610a8d9361113c565b92505094610a75565b503d610ab4565b34610168576000366003190112610168576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b34610168576000366003190112610168576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b34610168576000366003190112610168576000546040516001600160a01b039091168152602090f35b346101685760c036600319011261016857610caa610bba610f3a565b610bc2610f49565b90610bcb6110bd565b50610bd46110bd565b91610bdd61105f565b9060443582526064356020830152610bf361105f565b90600082526000604083015260043560208301526024356060830152610c17611094565b93151584521515602084015283526020830152604082015260405191829182919091610120602060406101408401956060815160018060a01b03808251168852858201518689015284820151168488015201516060860152606083820151805160808801528481015160a08801528381015160c0880152015160e086015201518051151561010085015201511515910152565b0390f35b346101685760203660031901126101685760043562ffffff80821680920361016857610cd8611007565b816002549182167f2bff118b9b9e3deb4fc5204e6ba828351c954685d0b119d0e21add79f8783399600080a362ffffff191617600255005b3461016857600036600319011261016857610d29611007565b600080546001600160a01b0319811682556001600160a01b03166000805160206124538339815191528280a3005b3461016857610d6536610f58565b50507f0000000000000000000000000000000000000000000000000000000000000000610dae610d9582846111c3565b91909260209460608101359060808782013591016112b7565b509160025492604051630b4c774160e11b8152858180610a3862ffffff8916888860048501611150565b346101685760c036600319011261016857610df1610f24565b6001600160a01b0390602435828116919082900361016857610caa92610e15610f3a565b91610e1e610f49565b610e266110bd565b50610e2f6110bd565b94610e3861105f565b9360443585526064356020860152610e4e61105f565b9316835260408301526000602083015260006060830152610c17611094565b3461016857600036600319011261016857602063ffffffff60025460181c16604051908152f35b3461016857600036600319011261016857610caa610eb0611101565b604051918291602083526020830190610ee4565b346101685760003660031901126101685760209062ffffff600254168152f35b919082519283825260005b848110610f10575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201610eef565b600435906001600160a01b038216820361016857565b60843590811515820361016857565b60a43590811515820361016857565b600319810161016081126101685761014013610168576004916001600160401b03916101443590838211610168578060238301121561016857818501359384116101685760248483010111610168576024019190565b604081019081106001600160401b0382111761060c57604052565b601f909101601f19168101906001600160401b0382119082101761060c57604052565b6001600160401b03811161060c57601f01601f191660200190565b6000546001600160a01b0316330361101b57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b60405190608082016001600160401b0381118382101761060c5760405260006060838281528260208201528260408201520152565b60408051919082016001600160401b0381118382101761060c5760405260006020838281520152565b60405190606082016001600160401b0381118382101761060c57604052816110e361105f565b81526110ed61105f565b602082015260406110fc611094565b910152565b610e104201804211611126576040519060208201526020815261112381610fae565b90565b634e487b7160e01b600052601160045260246000fd5b51906001600160a01b038216820361016857565b6001600160a01b0391821681529116602082015262ffffff909116604082015260600190565b356001600160a01b03811681036101685790565b9190826080910312610168578151600581101561016857916111ae6020820161113c565b9160606111bd6040840161113c565b92015190565b91906001600160a01b0390816111d885611176565b16158015906112a1575b156111fe57505061112360406111f784611176565b9301611176565b1691604051630cf35bdd60e41b90818152602083013560048201526080928382602481895afa9182156105a2576060938593602492600091611280575b509760405195869485938452013560048301525afa9182156105a25760009261126357505090565b6112799250803d1061096f5761095d8183610fc9565b5050905090565b6112979150853d871161096f5761095d8183610fc9565b505090503861123b565b50816112af60408601611176565b1615156111e2565b93928435926000928392839291861580158161145d575b156112e3575050505050505060409092013590565b819293949699959897916113bb575b50505081611301575b50505050565b909192939450604083013580156000146113b1575060405163442c159960e01b8152600481019290925260609092013560248201526044810183905290602090829060649082906001600160a01b03165afa9182156113a557809261136e575b50505b90388080806112fb565b9091506020823d821161139d575b8161138960209383610fc9565b8101031261139a5750513880611361565b80fd5b3d915061137c565b604051903d90823e3d90fd5b9350505050611364565b929850909115611456575060405163442c159960e01b81526004810191909152602083810135602483015260448201859052816064816001600160a01b038b165afa90811561144b578491611416575b505b953880806112f2565b90506020813d8211611443575b8161143060209383610fc9565b8101031261143f57513861140b565b8380fd5b3d9150611423565b6040513d86823e3d90fd5b905061140d565b5060408a013515156112ce565b6101243580151581036101685790565b9190826040910312610168576020825192015190565b6001600160a01b039091168152602081019190915260400190565b3d156114d6573d906114bc82610fec565b916114ca6040519384610fc9565b82523d6000602084013e565b606090565b90816020910312610168575180151581036101685790565b156114fa57565b60405162461bcd60e51b815260206004820152602860248201527f42617365537761707065723a3a73616665417070726f76653a20617070726f76604482015267194819985a5b195960c21b6064820152608490fd5b93919092936101043580151581036101685761180a5750505081156117ce5760018060a01b031690604080516370a0823160e01b8082526004923084840152602091602495838588818b5afa9485156117c357600095611794575b5082516323b872dd60e01b858201908152338983015230604483015260648083019390935291815260a0810191906001600160401b0383118184101761178057916000808b61164094828a9897868b5261160487610fae565b8987527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656460c082015251925af16116396114ab565b908b61187b565b80518061170c575b505086835180998193825230898301525afa958615611701576000966116d2575b5082861115611695575050830392831161168257505090565b601190634e487b7160e01b600052526000fd5b5162461bcd60e51b8152808401919091526018818501527714ddd85c1c195c8e881d1c985b9cd9995c8819985a5b195960421b6044820152606490fd5b90958282813d83116116fa575b6116e98183610fc9565b8101031261139a5750519438611669565b503d6116df565b50513d6000823e3d90fd5b928061171d939483010191016114db565b1561172b5782903880611648565b815162461bcd60e51b8152808601849052602a818801527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608490fd5b88604189634e487b7160e01b600052526000fd5b90948482813d83116117bc575b6117ab8183610fc9565b8101031261139a57505193386115ab565b503d6117a1565b83513d6000823e3d90fd5b60405162461bcd60e51b81526020600482015260146024820152730537761707065723a20616d6f756e7420697320360641b6044820152606490fd5b6040935090600060a492859694965196879586946311a5cc7760e31b865260048601523060248601523060448601526064850152608484015260018060a01b03165af19081156105a25760009161185f575090565b611877915060403d811161059b5761058b8183610fc9565b5090565b919290156118dd575081511561188f575090565b3b156118985790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b8251909150156118f05750805190602001fd5b60405162461bcd60e51b815260206004820152908190611914906024830190610ee4565b0390fd5b6001600160401b03811161060c5760051b60200190565b80511561193c5760200190565b634e487b7160e01b600052603260045260246000fd5b80516001101561193c5760400190565b63ffffffff92918316908115611ca75760408051909490916001600160401b03606084018181118582101761060c5787929752600284526020908185019083368337866119ae8761192f565b52600093846119bc88611952565b528481519a8b9463883bdbfd60e01b865260249889870160049b898d8a01525180915260448801929185905b8a838310611c7e5750505050509085809260018060a01b039e8f910392165afa928315611c745785928694611b61575b505050611a2e611a2782611952565b519161192f565b5160060b9060060b0397667fffffffffffff1991667fffffffffffff8a13838b1217611b1c5781611a6a81611a6284611952565b51169261192f565b5116900391818311611b1c578760030b9960060b8a15611b4f576000199181148b831416611b3d578a810560020b9a8682129182611b2e575b5050611b07575b508681026001600160c01b031696870403611af557901b600160201b600160c01b0316928315611ae55750505090046001600160801b031690565b634e487b7160e01b825260129052fd5b5050634e487b7160e01b815260118352fd5b9098627fffff198114611b1c57019738611aaa565b634e487b7160e01b8552601187528585fd5b0760060b151590503880611aa3565b634e487b7160e01b8652601188528686fd5b634e487b7160e01b8652601288528686fd5b91935091503d8086843e611b758184610fc9565b8201908383830312611c4f578251818111611c4b5783019282601f85011215611c4b57835193611ba485611918565b94611bb187519687610fc9565b808652878087019160051b83010191858311611c70578801905b828210611c535750505085810151918211611c4b570181601f82011215611c4f57805190611c04611bfb83611918565b95519586610fc9565b818552858086019260051b820101928311611c4b578501905b828210611c2f57505050388080611a18565b81518c81168103611c47578152908501908501611c1d565b8780fd5b8680fd5b8580fd5b81518060060b8103611c6c578152908801908801611bcb565b8a80fd5b8980fd5b81513d87823e3d90fd5b91946001939698999a5084975081839295511681520195019201928e979695938a9593926119e8565b60405162461bcd60e51b8152602060048201526002602482015261042560f41b6044820152606490fd5b9291909260020b906000821260001461226757600160ff1b82146111265781600003915b620d89e8831161223e576001831615612234576ffffcb933bd6fad37aa2d162d1a5940015b6001600160881b03166002841661220a575b6004938481166121de575b600881166121b2575b60108116612186575b6020811661215a575b6040811661212e575b608090818116612103575b61010081166120d8575b61020081166120ad575b6104008116612082575b6108008116612057575b611000811661202c575b6120008116612001575b6140008116611fd6575b6180008116611fab575b620100008116611f80575b620200008116611f56575b620400008116611f18575b6208000016611edd575b5090600012611eb9575b63ffffffff8160201c911615600014611eb05760ff60005b168101809111611e9b576001600160a01b03908116936001600160801b0393848611611e6f5785800295808704811490151715611e5a5750811691161015611e5057611123921690612407565b611123921661238c565b601190634e487b7160e01b6000525260246000fd5b5093611e7c81839261226d565b941691161015611e9157611123921690612341565b61112392166122b8565b601183634e487b7160e01b6000525260246000fd5b60ff6001611e03565b8015611ec85760001904611deb565b601283634e487b7160e01b6000525260246000fd5b6b048a170391f7dc42444e8fa291828102928184041490151715611f03571c6000611de1565b601185634e487b7160e01b6000525260246000fd5b916d2216e584f5fa1ea926041bedfe9890818102918183041490151715611f4157811c91611dd7565b601186634e487b7160e01b6000525260246000fd5b916e5d6af8dedb81196699c329225ee60490818102918183041490151715611f4157811c91611dcc565b916f09aa508b5b7a84e1c677de54f3e99bc990818102918183041490151715611f4157811c91611dc1565b916f31be135f97d08fd981231505542fcfa690818102918183041490151715611f4157811c91611db6565b916f70d869a156d2a1b890bb3df62baf32f790818102918183041490151715611f4157811c91611dac565b916fa9f746462d870fdf8a65dc1f90e061e590818102918183041490151715611f4157811c91611da2565b916fd097f3bdfd2022b8845ad8f792aa582590818102918183041490151715611f4157811c91611d98565b916fe7159475a2c29b7443b29c7fa6e889d990818102918183041490151715611f4157811c91611d8e565b916ff3392b0822b70005940c7a398e4b70f390818102918183041490151715611f4157811c91611d84565b916ff987a7253ac413176f2b074cf7815e5490818102918183041490151715611f4157811c91611d7a565b916ffcbe86c7900a88aedcffc83b479aa3a490818102918183041490151715611f4157811c91611d70565b916ffe5dee046a99a2a811c461f1969c305390818102918183041490151715611f4157811c91611d66565b906fff2ea16466c96a3843ec78b326b5286190818102918183041490151715611f035760801c90611d5b565b906fff973b41fa98c081472e6896dfb254c090818102918183041490151715611f035760801c90611d52565b906fffcb9843d60f6159c9db58835c92664490818102918183041490151715611f035760801c90611d49565b906fffe5caca7e10e4e61c3624eaa0941cd090818102918183041490151715611f035760801c90611d40565b906ffff2e50f5f656932ef12357cf3c7fdcc90818102918183041490151715611f035760801c90611d37565b6ffff97272373d413259a46990580e213a908181029181830414901517156111265760801c611d2c565b600160801b611d1a565b60405162461bcd60e51b81526020600482015260016024820152601560fa1b6044820152606490fd5b81611cf5565b60001982820990828102928380841093039183830393600093146122ad57600160401b928484111561139a57500990828211900360c01b910360401c1790565b505090505060401c90565b600160801b91600019828409928260801b9283808610950394808603951461233357848311156101685782910981806000031680920460028082600302188083028203028083028203028083028203028083028203028083028203028092029003029360018380600003040190848311900302920304170290565b505080925015610168570490565b600019828209908281029283808410930391838303936000931461238157600160801b928484111561139a57500990828211900360801b910360801c1790565b505090505060801c90565b600160c01b91600019828409928260c01b9283808610950394808603951461233357848311156101685782910981806000031680920460028082600302188083028203028083028203028083028203028083028203028083028203028092029003029360018380600003040190848311900302920304170290565b600019828209908281029283808410930391838303936000931461244757600160c01b928484111561139a57500990828211900360401b910360c01c1790565b505090505060c01c9056fe8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0a2646970667358221220962a399ed65c6ba53082a41b0c2c488e88f3f2b1f0a8c8765c5b617a9b9b2cb064736f6c63430008120033";

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

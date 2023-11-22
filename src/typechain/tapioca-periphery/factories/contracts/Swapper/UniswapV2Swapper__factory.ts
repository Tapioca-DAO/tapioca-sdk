/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  UniswapV2Swapper,
  UniswapV2SwapperInterface,
} from "../../../contracts/Swapper/UniswapV2Swapper";

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
        name: "_factory",
        type: "address",
      },
      {
        internalType: "contract IYieldBox",
        name: "_yieldBox",
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
    inputs: [],
    name: "AmountZero",
    type: "error",
  },
  {
    inputs: [],
    name: "Failed",
    type: "error",
  },
  {
    inputs: [],
    name: "NoContract",
    type: "error",
  },
  {
    inputs: [],
    name: "NotValid",
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
        internalType: "contract IUniswapV2Factory",
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
    name: "renounceOwnership",
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
        internalType: "contract IUniswapV2Router02",
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
    name: "yieldBox",
    outputs: [
      {
        internalType: "contract IYieldBox",
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
  "0x60e034620001a457601f62001e3738819003918201601f191683019291906001600160401b03841183851017620001a9578160609284926040968752833981010312620001a4576200005181620001bf565b90826200006160208301620001bf565b910151916001600160a01b0380841692838503620001a45760008054336001600160a01b0319821681178355885195859390928416907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a3600180551692831562000195575016918215620001845715620001735760805260a05260c05251611c629081620001d582396080518181816102fb0152818161057b015281816105e5015281816106c10152818161075401528181610b3c01528181610c460152610e68015260a05181610c01015260c05181818161024b015281816103fb0152818161049801528181610836015281816108e20152818161098901528181610ac701528181610bbc0152610e0f0152f35b835163d23f952160e01b8152600490fd5b845163d23f952160e01b8152600490fd5b63d23f952160e01b8152600490fd5b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b0382168203620001a45756fe6080604052600436101561001b575b361561001957600080fd5b005b60003560e01c80631a16321014610f5d5780633fa2ef5e14610ec85780635bf66e4814610df5578063715018a614610dae5780637b2a8bd214610c9e5780638da5cb5b14610c75578063c31c9c0714610c30578063c45a015514610beb578063de40657714610ba6578063e3c711a014610aad578063efa84c6d146101585763f2fde38b0361000e5734610153576020366003190112610153576100bd610fc9565b6100c56110dd565b6001600160a01b039081169081156100ff576000548260018060a01b031982161760005516600080516020611c0d833981519152600080a3005b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b600080fd5b36600319016101a08112610153576101401361015357610164356001600160a01b038116810361015357610184356001600160401b03811161015357366023820112156101535780600401356101ad816110c2565b916101bb604051938461109f565b818352366024838301011161015357816000926024602093018386013783010152600260015414610a685760026001556000816004356001600160a01b0381168082036101535715801590610a4b575b1561096957926044356001600160a01b038116810361015357905b6000608435801580158161095e575b156107e2575061026f91505b60a43590602435887f000000000000000000000000000000000000000000000000000000000000000061183a565b9251156107d4575b6020818051810103126101535760200151906102938186611603565b9461029c611653565b156107cd5730915b6001600160a01b0382161561073f57815b6001600160a01b038216156106ab576102cf908290611603565b906001600160a01b03831680151590610699575b15610507575060008561032282969760018060a01b037f000000000000000000000000000000000000000000000000000000000000000016809661171e565b610347604051978896879586946338ed173960e01b8652610144359060048701611bd3565b03925af1801561046457610363916000916104e4575b506112b4565b519161036d611653565b610386575b604083836001805582519182526020820152f35b80915051600019908181019081116104ce576001600160a01b03906103ab90846112e7565b5116610470575b505060408051634d4d7cbd60e11b81526064803560048301523060248301526001600160a01b03948516604483015281018390526000608482018190529093849160a4918391907f0000000000000000000000000000000000000000000000000000000000000000165af1801561046457604092600091610435575b5083610372565b6104559150833d851161045d575b61044d818361109f565b810190611663565b90508361042e565b503d610443565b6040513d6000823e3d90fd5b81519081019081116104ce576104c79183916001600160a01b039161049591906112e7565b517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316911661171e565b82806103b2565b634e487b7160e01b600052601160045260246000fd5b61050191503d806000833e6104f9818361109f565b8101906111fc565b8561035d565b94929392916001600160a01b0381161580610687575b156105b45750604051637ff36ab560e01b8152610144356004820152608060248201529450600093859384928392919061055b906084850190611277565b6001600160a01b03928316604485015260648401919091529190910392907f0000000000000000000000000000000000000000000000000000000000000000165af1801561046457610363916000916104e457506112b4565b9294919392916001600160a01b0383168015159190610675575b50156106315760008461060c829660018060a01b037f000000000000000000000000000000000000000000000000000000000000000016809661171e565b610347604051978896879586946318cbafe560e01b8652610144359060048701611bd3565b606460405162461bcd60e51b815260206004820152602060248201527f556e69737761705632537761707065723a2073776170206e6f742076616c69646044820152fd5b6001600160a01b0316159050896105ce565b506001600160a01b038616151561051d565b506001600160a01b03811615156102e3565b6040516315ab88c960e31b8152906020826004817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa801561046457600090610704575b6102cf925090611603565b506020823d602011610737575b8161071e6020938361109f565b81010312610153576107326102cf9261130f565b6106f9565b3d9150610711565b6040516315ab88c960e31b81526020816004817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa90811561046457600091610793575b506102b5565b90506020813d6020116107c5575b816107ae6020938361109f565b81010312610153576107bf9061130f565b8961078d565b3d91506107a1565b86916102a4565b506107dd6111d7565b610277565b9060243591826108ac575b50505060643580610803575b5061026f90610241565b60c4356108a25760405163442c159960e01b8152600481019190915260e4356024820152600060448201526020816064817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa801561046457610877575b5061026f905b906107f9565b602090813d831161089b575b61088d818361109f565b81010312610153578761086b565b503d610883565b5061026f90610871565b9192509015610957575060405163442c159960e01b8152600481019190915260a4356024820152600060448201526020816064817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa90811561046457600091610925575b505b8780806107ed565b90506020813d60201161094f575b816109406020938361109f565b8101031261015357518761091b565b3d9150610933565b905061091d565b5060c4351515610235565b50604051630cf35bdd60e41b8082526024803560048401529094916080917f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031691908390829081855afa8015610464578391600091610a2a575b5096602460405180948193825260643560048301525afa918215610464576000926109f9575b505090610226565b610a189250803d10610a23575b610a10818361109f565b810190611323565b5050905086806109f1565b503d610a06565b610a419150823d8411610a2357610a10818361109f565b50509050896109cb565b506044356001600160a01b0381169081900361015357151561020b565b60405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fd5b3461015357610b386000610ac036610ffd565b5050610b0e7f0000000000000000000000000000000000000000000000000000000000000000610af9610af3828561135c565b90611603565b92606081013590608060208201359101611450565b905060405193849283926307c0329d60e21b84526004840152604060248401526044830190611277565b03817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa90811561046457602091610b8291600091610b8b575b506112da565b51604051908152f35b610ba091503d806000833e6104f9818361109f565b83610b7c565b34610153576000366003190112610153576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b34610153576000366003190112610153576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b34610153576000366003190112610153576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b34610153576000366003190112610153576000546040516001600160a01b039091168152602090f35b346101535760c036600319011261015357610daa610cba610fdf565b610cc2610fee565b90610ccb611193565b50610cd4611193565b91610cdd611135565b9060443582526064356020830152610cf3611135565b90600082526000604083015260043560208301526024356060830152610d1761116a565b93151584521515602084015283526020830152604082015260405191829182919091610120602060406101408401956060815160018060a01b03808251168852858201518689015284820151168488015201516060860152606083820151805160808801528481015160a08801528381015160c0880152015160e086015201518051151561010085015201511515910152565b0390f35b3461015357600036600319011261015357610dc76110dd565b600080546001600160a01b0319811682556001600160a01b0316600080516020611c0d8339815191528280a3005b3461015357610e646000610e0836610ffd565b5050610e3b7f0000000000000000000000000000000000000000000000000000000000000000610af9610af3828561135c565b50604051938492839263d06ca61f60e01b84526004840152604060248401526044830190611277565b03817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa90811561046457602091610b8291600091610ead57506112b4565b610ec291503d806000833e6104f9818361109f565b8361035d565b346101535760c036600319011261015357610ee1610fc9565b6001600160a01b0390602435828116919082900361015357610daa92610f05610fdf565b91610f0e610fee565b610f16611193565b50610f1f611193565b94610f28611135565b9360443585526064356020860152610f3e611135565b9316835260408301526000602083015260006060830152610d1761116a565b3461015357600036600319011261015357610daa610f796111d7565b6040519182916020835260208301905b919082519283825260005b848110610fb5575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201610f94565b600435906001600160a01b038216820361015357565b60843590811515820361015357565b60a43590811515820361015357565b600319810161016081126101535761014013610153576004916001600160401b03916101443590838211610153578060238301121561015357818501359384116101535760248483010111610153576024019190565b604081019081106001600160401b0382111761106e57604052565b634e487b7160e01b600052604160045260246000fd5b608081019081106001600160401b0382111761106e57604052565b601f909101601f19168101906001600160401b0382119082101761106e57604052565b6001600160401b03811161106e57601f01601f191660200190565b6000546001600160a01b031633036110f157565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b60405190608082016001600160401b0381118382101761106e5760405260006060838281528260208201528260408201520152565b60408051919082016001600160401b0381118382101761106e5760405260006020838281520152565b60405190606082016001600160401b0381118382101761106e57604052816111b9611135565b81526111c3611135565b602082015260406111d261116a565b910152565b610e1042018042116104ce57604051906020820152602081526111f981611053565b90565b9060209081838203126101535782516001600160401b0393848211610153570181601f8201121561015357805193841161106e578360051b90604051946112458584018761109f565b85528380860192820101928311610153578301905b828210611268575050505090565b8151815290830190830161125a565b90815180825260208080930193019160005b828110611297575050505090565b83516001600160a01b031685529381019392810192600101611289565b8051600110156112c45760400190565b634e487b7160e01b600052603260045260246000fd5b8051156112c45760200190565b80518210156112c45760209160051b010190565b356001600160a01b03811681036101535790565b51906001600160a01b038216820361015357565b9190826080910312610153578151600581101561015357916113476020820161130f565b9160606113566040840161130f565b92015190565b91906001600160a01b039081611371856112fb565b161580159061143a575b156113975750506111f96040611390846112fb565b93016112fb565b1691604051630cf35bdd60e41b90818152602083013560048201526080928382602481895afa918215610464576060938593602492600091611419575b509760405195869485938452013560048301525afa918215610464576000926113fc57505090565b6114129250803d10610a2357610a10818361109f565b5050905090565b6114309150853d8711610a2357610a10818361109f565b50509050386113d4565b5081611448604086016112fb565b16151561137b565b9392843592600092839283929186158015816115f6575b1561147c575050505050505060409092013590565b81929394969995989791611554575b5050508161149a575b50505050565b9091929394506040830135801560001461154a575060405163442c159960e01b8152600481019290925260609092013560248201526044810183905290602090829060649082906001600160a01b03165afa91821561153e578092611507575b50505b9038808080611494565b9091506020823d8211611536575b816115226020938361109f565b8101031261153357505138806114fa565b80fd5b3d9150611515565b604051903d90823e3d90fd5b93505050506114fd565b9298509091156115ef575060405163442c159960e01b81526004810191909152602083810135602483015260448201859052816064816001600160a01b038b165afa9081156115e45784916115af575b505b9538808061148b565b90506020813d82116115dc575b816115c96020938361109f565b810103126115d85751386115a4565b8380fd5b3d91506115bc565b6040513d86823e3d90fd5b90506115a6565b5060408a01351515611467565b604051929190606084016001600160401b0381118582101761106e5760405260028452604036602086013761164d8461163b816112da565b6001600160a01b0393841690526112b4565b91169052565b6101243580151581036101535790565b9190826040910312610153576020825192015190565b3d156116a4573d9061168a826110c2565b91611698604051938461109f565b82523d6000602084013e565b606090565b90816020910312610153575180151581036101535790565b156116c857565b60405162461bcd60e51b815260206004820152602860248201527f42617365537761707065723a3a73616665417070726f76653a20617070726f76604482015267194819985a5b195960c21b6064820152608490fd5b803b15611828576117c49261178991604051936020948581019363095ea7b360e01b9283865260018060a01b0316908160248401526000968780809886826044819901526044815261176f81611084565b5190828a5af161177d611679565b816117f8575b506116c1565b6040519188830194855260248301526044820152604481526117aa81611084565b51925af1906117b7611679565b826117c6575b50506116c1565b565b80919250519182159283156117e0575b50505038806117bd565b6117f093508201810191016116a9565b3880806117d6565b8051801592508b908315611810575b50505038611783565b61182093508201810191016116a9565b388a81611807565b60405163030ed58f60e21b8152600490fd5b939190929361010435801515810361015357611ac5575050508115611ab3576001600160a01b0316908115611a955760409182516370a0823160e01b93848252600492308484015260209560249587858881865afa948515611a8a57600095611a5b575b5083516323b872dd60e01b898201908152338983015230604483015260648083019390935291815260a0810191906001600160401b03831181841017611a475791600080611933938c9695848a526118f585611053565b8785527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656460c0820152519082895af161192c611679565b9086611b36565b8051806119d3575b505086845180948193825230898301525afa9586156119c857600096611997575b5050818511156119885750830392831161197557505090565b601190634e487b7160e01b600052526000fd5b5163312d207360e11b81529050fd5b8181979293973d83116119c1575b6119af818361109f565b8101031261153357505193388061195c565b503d6119a5565b82513d6000823e3d90fd5b92806119e4939483010191016116a9565b156119f2578690388061193b565b825162461bcd60e51b8152808601889052602a818801527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608490fd5b88604189634e487b7160e01b600052526000fd5b90948882813d8311611a83575b611a72818361109f565b81010312611533575051933861189e565b503d611a68565b84513d6000823e3d90fd5b8091503403611aa15790565b60405163f1640ae160e01b8152600490fd5b6040516365e52d5160e11b8152600490fd5b6040935090600060a492859694965196879586946311a5cc7760e31b865260048601523060248601523060448601526064850152608484015260018060a01b03165af190811561046457600091611b1a575090565b611b32915060403d811161045d5761044d818361109f565b5090565b91929015611b985750815115611b4a575090565b3b15611b535790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b825190915015611bab5750805190602001fd5b60405162461bcd60e51b815260206004820152908190611bcf906024830190610f89565b0390fd5b9192608093611bf892979695978452602084015260a0604084015260a0830190611277565b6001600160a01b039095166060820152015256fe8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0a2646970667358221220189223a93022bc712adfe8505418de45c889a77c2be8fd9a135f9d7046da401a64736f6c63430008120033";

type UniswapV2SwapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniswapV2SwapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniswapV2Swapper__factory extends ContractFactory {
  constructor(...args: UniswapV2SwapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "UniswapV2Swapper";
  }

  override deploy(
    _router: PromiseOrValue<string>,
    _factory: PromiseOrValue<string>,
    _yieldBox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UniswapV2Swapper> {
    return super.deploy(
      _router,
      _factory,
      _yieldBox,
      overrides || {}
    ) as Promise<UniswapV2Swapper>;
  }
  override getDeployTransaction(
    _router: PromiseOrValue<string>,
    _factory: PromiseOrValue<string>,
    _yieldBox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _router,
      _factory,
      _yieldBox,
      overrides || {}
    );
  }
  override attach(address: string): UniswapV2Swapper {
    return super.attach(address) as UniswapV2Swapper;
  }
  override connect(signer: Signer): UniswapV2Swapper__factory {
    return super.connect(signer) as UniswapV2Swapper__factory;
  }
  static readonly contractName: "UniswapV2Swapper";

  public readonly contractName: "UniswapV2Swapper";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapV2SwapperInterface {
    return new utils.Interface(_abi) as UniswapV2SwapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV2Swapper {
    return new Contract(address, _abi, signerOrProvider) as UniswapV2Swapper;
  }
}

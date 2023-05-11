/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  CurveSwapper,
  CurveSwapperInterface,
} from "../../Swapper/CurveSwapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ICurvePool",
        name: "_curvePool",
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
    name: "NotImplemented",
    type: "error",
  },
  {
    inputs: [],
    name: "Undefined",
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
    name: "curvePool",
    outputs: [
      {
        internalType: "contract ICurvePool",
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
    stateMutability: "pure",
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
        name: "",
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
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
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
        name: "dexOptions",
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
] as const;

const _bytecode =
  "0x60a03461011a57601f61176338819003918201601f19168301916001600160401b0383118484101761011f57808492604094855283398101031261011a5780516001600160a01b03918282169182900361011a57602001519180831680840361011a576000549160018060a01b0319923384821617600055604051913391167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a360018055831561010b5750156100f957600254161760025560805260405161162d90816101368239608051818181610303015281816105010152818161084f0152818161090b01528181610a240152610c730152f35b60405163d23f952160e01b8152600490fd5b63d23f952160e01b8152600490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe608080604052600436101561001357600080fd5b600090813560e01c9081631a16321014610fac57508063218751b214610f835780633fa2ef5e14610eef5780635bf66e4814610be2578063715018a614610b885780637b2a8bd214610a7a5780638da5cb5b14610a53578063de40657714610a0e578063e3c711a0146109ea578063efa84c6d146101675763f2fde38b1461009a57600080fd5b34610164576020366003190112610164576100b3610fcd565b6100bb6110a8565b6001600160a01b0390811690811561011057600054826bffffffffffffffffffffffff60a01b821617600055167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a380f35b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b80fd5b50346101645736600319016101a081126109e6576101401361016457610164356001600160a01b038116900361016457610184356001600160401b0381116109e657366023820112156109e657806004013590826101c48361108d565b916101d26040519384611056565b838352602083019336602482840101116109e257806024602093018637830101528290805181019260208281860195031261070c5751906001600160401b03821161070c57019180603f840112156106da576020830151610232816111a2565b936102406040519586611056565b8185526040602086019260051b8201019283116108b457604001905b8282106109d25750506002546001600160a01b031691905061027d836111b9565b516040519063c661065760e01b82526004820152602081602481865afa9081156106985785916109b3575b5060206102b4856111dc565b5160246040518096819363c661065760e01b835260048301525afa928315610698578593610992575b5084906084358015801581610987575b156107fb575061032792505b60a43591602435907f0000000000000000000000000000000000000000000000000000000000000000611509565b61033a610333856111b9565b51946111dc565b519060018060a01b03600254166040519263c661065760e01b84526fffffffffffffffffffffffffffffffff968781166004860152602085602481865afa9485156107cf5789956107da575b5060405163c661065760e01b81529782166004890152602088602481865afa9788156107cf57899861079e575b50604051635e0d443f60e01b8152600f82810b600483015283900b602482015260448101859052602081606481875afa908115610793578a9161075d575b506101443511610718576040516370a0823160e01b8152306004820152948993906020876024816001600160a01b038e165afa9687156106985785976106de575b5061043e918691611428565b6002546001600160a01b031690813b156106da57836084926040519687958694630f7c084960e21b8652600f0b6004860152600f0b602485015260448401526101443560648401525af180156106cf576106a3575b506040516370a0823160e01b815230600482015293602090859060249082906001600160a01b03165afa938415610698578594610664575b508084111561063157830392831161061d5761012435801515810361061857156105c35750604083916105288460018060a01b037f0000000000000000000000000000000000000000000000000000000000000000168093611428565b8151634d4d7cbd60e11b8152606480356004830152306024830152610164356001600160a01b0316604483015281018590526084810184905292839160a49183915af19081156105b85760409391610589575b505b82519182526020820152f35b6105a99150833d85116105b1575b6105a18183611056565b81019061120b565b90503861057b565b503d610597565b6040513d85823e3d90fd5b6040805163a9059cbb60e01b6020820152610164356001600160a01b031660248201526044808201869052815290945090916106139190610605606483611056565b6001600160a01b0316611239565b61057d565b600080fd5b634e487b7160e01b84526011600452602484fd5b60405162461bcd60e51b815260206004820152600b60248201526a1cddd85c0819985a5b195960aa1b6044820152606490fd5b9093506020813d602011610690575b8161068060209383611056565b81010312610618575192386104cb565b3d9150610673565b6040513d87823e3d90fd5b6001600160401b0381116106bb576040526020610493565b634e487b7160e01b86526041600452602486fd5b6040513d88823e3d90fd5b8380fd5b9096506020813d602011610710575b816106fa60209383611056565b8101031261070c57519561043e610432565b8480fd5b3d91506106ed565b60405162461bcd60e51b815260206004820152601760248201527f696e73756666696369656e742d616d6f756e742d6f75740000000000000000006044820152606490fd5b90506020813d60201161078b575b8161077860209383611056565b810103126107875751386103f1565b8980fd5b3d915061076b565b6040513d8c823e3d90fd5b6107c191985060203d6020116107c8575b6107b98183611056565b8101906111ec565b96386103b3565b503d6107af565b6040513d8b823e3d90fd5b6107f491955060203d6020116107c8576107b98183611056565b9338610386565b9060243591826108d4575b5050506064358061081c575b50610327916102f9565b60c4356108ca5760405163442c159960e01b8152600481019190915260e4356024820152604481018790526020816064817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa80156108bf57610890575b50610327915b91610812565b602090813d83116108b8575b6108a68183611056565b810103126108b45738610884565b8580fd5b503d61089c565b6040513d89823e3d90fd5b506103279161088a565b929350909115610980575060405163442c159960e01b8152600481019190915260a4356024820152604481018690526020816064817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa9081156106cf57869161094e575b505b90388080610806565b90506020813d602011610978575b8161096960209383611056565b810103126108b4575138610943565b3d915061095c565b9050610945565b5060c43515156102ed565b6109ac91935060203d6020116107c8576107b98183611056565b91386102dd565b6109cc915060203d6020116107c8576107b98183611056565b386102a8565b815181526020918201910161025c565b8280fd5b5080fd5b5034610164576109f936611001565b505060405163d623472560e01b815260049150fd5b50346101645780600319360112610164576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5034610164578060031936011261016457546040516001600160a01b039091168152602090f35b50346101645760c036600319011261016457610b8490610a98610fe3565b610aa0610ff2565b610aa861115e565b50610ab161115e565b92610aba611100565b9160443583526064356020840152610ad0611100565b91808352604083015260043560208301526024356060830152610af1611135565b93151584521515602084015283526020830152604082015260405191829182919091610120602060406101408401956060815160018060a01b03808251168852858201518689015284820151168488015201516060860152606083820151805160808801528481015160a08801528381015160c0880152015160e086015201518051151561010085015201511515910152565b0390f35b5034610164578060031936011261016457610ba16110a8565b80546001600160a01b03198116825581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b503461016457610bf136611001565b819392910160209384818303126106da578035906001600160401b03821161070c57019080601f830112156106da578135610c2b816111a2565b92610c396040519485611056565b818452868085019260051b8201019283116108b4579086808095949301915b838310610edf575060608601359560808101359350879250907f0000000000000000000000000000000000000000000000000000000000000000908201358415801581610ed2575b15610d60575050505050610d089350905b6002546001600160a01b031690610cd1610cca826111b9565b51916111dc565b51604051635e0d443f60e01b8152600f92830b6004820152910b602482015260448101929092529092839190829081906064820190565b03915afa918215610d54578092610d24575b5050604051908152f35b9091508282813d8311610d4d575b610d3c8183611056565b810103126101645750513880610d1a565b503d610d32565b604051903d90823e3d90fd5b81929394969591610e2a575b50505085610d81575b5050610d089350610cb1565b9293919260c0820135610e1c5760405163442c159960e01b8152600481019690965260e09190910135602486015260448501869052849060649082906001600160a01b03165afa8015610e115790859291610de4575b610d0893505b3880610d75565b919092813d8311610e0a575b610dfa8183611056565b810103126109e257818491610dd7565b503d610df0565b6040513d86823e3d90fd5b50509190610d089350610ddd565b929694955092939092909115610ec757505060405163442c159960e01b8152600481019190915260a082013560248201526044810186905286816064816001600160a01b0388165afa9081156106cf579087949392918791610e92575b505b92388080610d6c565b85819394959692503d8311610ec0575b610eac8183611056565b810103126108b45790869392915138610e87565b503d610ea2565b909493929150610e89565b5060c08401351515610ca0565b8235815291810191859101610c58565b50346101645760c036600319011261016457610f09610fcd565b906024356001600160a01b0381811692918390036109e657610b8493610f2d610fe3565b92610f36610ff2565b90610f3f61115e565b50610f4861115e565b95610f51611100565b9460443586526064356020870152610f67611100565b9416845260408401528060208401526060830152610af1611135565b50346101645780600319360112610164576002546040516001600160a01b039091168152602090f35b9050346109e657816003193601126109e657633937a73d60e01b8152600490fd5b600435906001600160a01b038216820361061857565b60843590811515820361061857565b60a43590811515820361061857565b60031981016101608112610618576101401361061857600491610144356001600160401b0392838211610618578060238301121561061857818501359384116106185760248483010111610618576024019190565b90601f801991011681019081106001600160401b0382111761107757604052565b634e487b7160e01b600052604160045260246000fd5b6001600160401b03811161107757601f01601f191660200190565b6000546001600160a01b031633036110bc57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b60405190608082018281106001600160401b038211176110775760405260006060838281528260208201528260408201520152565b60405190604082018281106001600160401b038211176110775760405260006020838281520152565b60405190606082018281106001600160401b038211176110775760405281611184611100565b815261118e611100565b6020820152604061119d611135565b910152565b6001600160401b0381116110775760051b60200190565b8051156111c65760200190565b634e487b7160e01b600052603260045260246000fd5b8051600110156111c65760400190565b9081602091031261061857516001600160a01b03811681036106185790565b9190826040910312610618576020825192015190565b90816020910312610618575180151581036106185790565b60408051908101916001600160a01b03166001600160401b03831182841017611077576112a8926040526000806020958685527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656487860152868151910182855af16112a2611324565b91611354565b805190816112b557505050565b82806112c5938301019101611221565b156112cd5750565b6084906040519062461bcd60e51b82526004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152fd5b3d1561134f573d906113358261108d565b916113436040519384611056565b82523d6000602084013e565b606090565b919290156113b65750815115611368575090565b3b156113715790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b8251909150156113c95750805190602001fd5b6040519062461bcd60e51b82528160208060048301528251908160248401526000935b82851061140f575050604492506000838284010152601f80199101168101030190fd5b84810182015186860160440152938101938593506113ec565b60405163095ea7b360e01b602082019081526001600160a01b03939093166024820152604480820194909452928352600092839290839061146a606482611056565b51925af1611476611324565b816114da575b501561148457565b60405162461bcd60e51b815260206004820152602860248201527f42617365537761707065723a3a73616665417070726f76653a20617070726f76604482015267194819985a5b195960c21b6064820152608490fd5b80518015925082156114ef575b50503861147c565b6115029250602080918301019101611221565b38806114e7565b93919092936101043580151581036106185761157a575050506040516323b872dd60e01b60208201523360248201523060448201528260648201526064815260a08101918183106001600160401b0384111761107757604092909252611577916001600160a01b0316611239565b90565b6040935090600060a492859694965196879586946311a5cc7760e31b865260048601523060248601523060448601526064850152608484015260018060a01b03165af19081156115eb576000916115cf575090565b6115e7915060403d81116105b1576105a18183611056565b5090565b6040513d6000823e3d90fdfea2646970667358221220357f03a42bb718fed52aa1314a1724291ee6566f5d4eae95ab433bc55379805364736f6c63430008120033";

type CurveSwapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CurveSwapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CurveSwapper__factory extends ContractFactory {
  constructor(...args: CurveSwapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "CurveSwapper";
  }

  override deploy(
    _curvePool: PromiseOrValue<string>,
    _yieldBox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CurveSwapper> {
    return super.deploy(
      _curvePool,
      _yieldBox,
      overrides || {}
    ) as Promise<CurveSwapper>;
  }
  override getDeployTransaction(
    _curvePool: PromiseOrValue<string>,
    _yieldBox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_curvePool, _yieldBox, overrides || {});
  }
  override attach(address: string): CurveSwapper {
    return super.attach(address) as CurveSwapper;
  }
  override connect(signer: Signer): CurveSwapper__factory {
    return super.connect(signer) as CurveSwapper__factory;
  }
  static readonly contractName: "CurveSwapper";

  public readonly contractName: "CurveSwapper";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CurveSwapperInterface {
    return new utils.Interface(_abi) as CurveSwapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CurveSwapper {
    return new Contract(address, _abi, signerOrProvider) as CurveSwapper;
  }
}

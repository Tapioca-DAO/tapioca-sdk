/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { MockSwapper, MockSwapperInterface } from "../MockSwapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract YieldBox",
        name: "_yieldBox",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
            internalType: "struct MockSwapper.SwapTokensData",
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
            internalType: "struct MockSwapper.SwapAmountData",
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
            internalType: "struct MockSwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct MockSwapper.SwapData",
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
            internalType: "struct MockSwapper.SwapTokensData",
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
            internalType: "struct MockSwapper.SwapAmountData",
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
            internalType: "struct MockSwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct MockSwapper.SwapData",
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
            internalType: "struct MockSwapper.SwapTokensData",
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
            internalType: "struct MockSwapper.SwapAmountData",
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
            internalType: "struct MockSwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct MockSwapper.SwapData",
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
            internalType: "struct MockSwapper.SwapTokensData",
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
            internalType: "struct MockSwapper.SwapAmountData",
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
            internalType: "struct MockSwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct MockSwapper.SwapData",
        name: "",
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
            internalType: "struct MockSwapper.SwapTokensData",
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
            internalType: "struct MockSwapper.SwapAmountData",
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
            internalType: "struct MockSwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct MockSwapper.SwapData",
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
        name: "",
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
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60a03461006a57601f61085b38819003918201601f19168301916001600160401b0383118484101761006f5780849260209460405283398101031261006a57516001600160a01b038116810361006a576080526040516107d590816100868239608051816101080152f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe60406080815260048036101561001f575b5050361561001d57600080fd5b005b600090813560e01c80635bf66e48146105ff5780637b2a8bd2146104f2578063cf144a4e146103db578063e3c711a0146103d65763efa84c6d146100635750610010565b36600319016101a081126103d2576101401361033557610144359161016435916001600160a01b03918284169182850361033557610184359367ffffffffffffffff908186116103ce57366023870112156103ce5785830135956100c687610698565b966100d38b519889610660565b808852602497368983850101116103ca57918187969594938a989360209b8c94018483013701015260643597881561021f57507f00000000000000000000000000000000000000000000000000000000000000001696895195638eb22cdd60e01b8752818488015289868801526001604488015287876064818c5afa9687156102155785976101e2575b508698803b156101de57859291836084928e519a8b958694630208d92960e11b8652308b8701528c860152604485015260648401525af180156101d4576101af575b50505050505b8351928352820152f35b84116101c4575050508452388080808061019f565b634e487b7160e01b825260419052fd5b89513d85823e3d90fd5b8580fd5b9096508781813d831161020e575b6101fa8183610660565b8101031261020a5751953861015d565b8480fd5b503d6101f0565b8b513d87823e3d90fd5b97506305f5e10095919295808a02908a8204148a1517156103b85789859199836102476106b4565b161561034b575050506102586106b4565b16918951908782019263a9059cbb60e01b84528683015289604483015260448252608082019082821090821117610339578a5251839283929083905af19061029e6106ca565b826102f2575b5050156102b25750506101a5565b601c9060649387519362461bcd60e51b85528401528201527f426f72696e6745524332303a205472616e73666572206661696c6564000000006044820152fd5b805192508215919086831561030e575b505050905038806102a4565b91938180945001031261033557840151908115158203610332575080388086610302565b80fd5b5080fd5b634e487b7160e01b8552604187528585fd5b909194508493508392505af161035f6106ca565b501561036c5750506101a5565b60239060849387519362461bcd60e51b85528401528201527f4d6f636b537761707065723a206661696c656420746f207472616e736665722060448201526208aa8960eb1b6064820152fd5b634e487b7160e01b8552601187528585fd5b8680fd5b8380fd5b8280fd5b6105ff565b508290346103d25760803660031901126103d25735906001600160a01b038083168093036103ce576024359081168091036103ce57926104ee9361041d61075a565b5061042661075a565b9361042f6106fa565b91604435835260643560208401526104456106fa565b91825284820152826020820152826060820152610460610730565b9280845260208401528452602084015281830152519182918291909161012060206040610140840195606081516001600160a01b03808251168852858201518689015284820151168488015201516060860152606083820151805160808801528481015160a08801528381015160c0880152015160e086015201518051151561010085015201511515910152565b0390f35b5082346103d25760c03660031901126103d2576084358015158091036103ce5760a4359283151580940361020a576104ee9461052c61075a565b5061053561075a565b9461053e6106fa565b92604435845260643560208501526105546106fa565b92808452868401523560208301526024356060830152610572610730565b93845260208401528452602084015281830152519182918291909161012060206040610140840195606081516001600160a01b03808251168852858201518689015284820151168488015201516060860152606083820151805160808801528481015160a08801528381015160c0880152015160e086015201518051151561010085015201511515910152565b3461065b573660031901610160811261065b576101401361065b576101443567ffffffffffffffff80821161065b573660238301121561065b57816004013590811161065b573691016024011161065b57602060405160008152f35b600080fd5b90601f8019910116810190811067ffffffffffffffff82111761068257604052565b634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff811161068257601f01601f191660200190565b6044356001600160a01b038116810361065b5790565b3d156106f5573d906106db82610698565b916106e96040519384610660565b82523d6000602084013e565b606090565b604051906080820182811067ffffffffffffffff8211176106825760405260006060838281528260208201528260408201520152565b604051906040820182811067ffffffffffffffff8211176106825760405260006020838281520152565b604051906060820182811067ffffffffffffffff82111761068257604052816107816106fa565b815261078b6106fa565b6020820152604061079a610730565b91015256fea2646970667358221220dda8f29ebdc2552727a65ed0c0455062e39d65227224e3f58839e2777171345b64736f6c63430008120033";

type MockSwapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockSwapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockSwapper__factory extends ContractFactory {
  constructor(...args: MockSwapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MockSwapper";
  }

  override deploy(
    _yieldBox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockSwapper> {
    return super.deploy(_yieldBox, overrides || {}) as Promise<MockSwapper>;
  }
  override getDeployTransaction(
    _yieldBox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_yieldBox, overrides || {});
  }
  override attach(address: string): MockSwapper {
    return super.attach(address) as MockSwapper;
  }
  override connect(signer: Signer): MockSwapper__factory {
    return super.connect(signer) as MockSwapper__factory;
  }
  static readonly contractName: "MockSwapper";

  public readonly contractName: "MockSwapper";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockSwapperInterface {
    return new utils.Interface(_abi) as MockSwapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockSwapper {
    return new Contract(address, _abi, signerOrProvider) as MockSwapper;
  }
}

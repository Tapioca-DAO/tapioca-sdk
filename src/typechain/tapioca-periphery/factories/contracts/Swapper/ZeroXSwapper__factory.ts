/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ZeroXSwapper,
  ZeroXSwapperInterface,
} from "../../../contracts/Swapper/ZeroXSwapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_zeroXProxy",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidProxy",
    type: "error",
  },
  {
    inputs: [],
    name: "MinSwapFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddress",
    type: "error",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20",
            name: "sellToken",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "buyToken",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "swapTarget",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "swapCallData",
            type: "bytes",
          },
        ],
        internalType: "struct SZeroXSwapData",
        name: "swapData",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minAmountOut",
        type: "uint256",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "zeroXProxy",
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
] as const;

const _bytecode =
  "0x60803461008c57601f61072638819003918201601f19168301916001600160401b038311848410176100915780849260209460405283398101031261008c57516001600160a01b0381169081900361008c57801561007a57600080546001600160a01b03191691909117905560405161067e90816100a88239f35b60405163d92e233d60e01b8152600490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe608060408181526004918236101561001657600080fd5b600090813560e01c9081637a08c56714610398575063d9c4ff871461003a57600080fd5b600319916060368401126103945783356001600160401b03808211610390578186019560808336039687011261038c57602492833596604482019361007e856103bc565b88546001600160a01b0396919087169087160361037c5761009e8b6103bc565b99885160209b6323b872dd60e01b8d830152338a8301523060448301528260648301526064825260a082018281108682111761036a578d9e6100ed8d9e9f9c9d93948c956100f2948652610468565b6103bc565b809a8c8a85610100896103bc565b1695869488159687156102f0575b505050505050501561028e57916100ed8a8e61014261015b958f978d985194859463095ea7b360e01b90860152840161044d565b039a610156601f199c8d81018452836103d5565b610468565b16916064840135906022190181121561028a5783018481013591821161028a578701813603811361028a5791818a809481948c519384928337810182815203925af16101a561040e565b501561027b578785809201936101ba856103bc565b168751928380926370a0823160e01b825230878301525afa96871561027057809761023b575b5050604435861061022e57509161015685926101fe610228956103bc565b9261021c875195869263a9059cbb60e01b8c8501523390840161044d565b039081018452836103d5565b51908152f35b8451620833c960e21b8152fd5b909196508782813d8311610269575b61025481836103d5565b810103126102665750519438806101e0565b80fd5b503d61024a565b8651903d90823e3d90fd5b50845163081ceff360e41b8152fd5b8980fd5b50895162461bcd60e51b81528087018d90526036818b01527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b6064820152608490fd5b60449495969750519687958694636eb1769f60e11b86523090860152840152165afa908115610360578d9161032f575b5015818e8c8a8f8e8e9161010e565b90508d81813d8311610359575b61034681836103d5565b81010312610355575138610320565b8c80fd5b503d61033c565b8c513d8f823e3d90fd5b634e487b7160e01b8d52604189528a8dfd5b8751632e7973df60e21b81528590fd5b8480fd5b8380fd5b5080fd5b90503461039457816003193601126103945790546001600160a01b03168152602090f35b356001600160a01b03811681036103d05790565b600080fd5b601f909101601f19168101906001600160401b038211908210176103f857604052565b634e487b7160e01b600052604160045260246000fd5b3d15610448573d906001600160401b0382116103f8576040519161043c601f8201601f1916602001846103d5565b82523d6000602084013e565b606090565b6001600160a01b039091168152602081019190915260400190565b604080516001600160a01b03929092169291908101906001600160401b038211818310176103f8576104de916040526020938482527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564858301526000808587829751910182855af16104d861040e565b91610574565b805191821591848315610550575b5050509050156104f95750565b6084906040519062461bcd60e51b82526004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152fd5b919381809450010312610394578201519081151582036102665750803880846104ec565b919290156105d65750815115610588575090565b3b156105915790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b8251909150156105e95750805190602001fd5b6040519062461bcd60e51b82528160208060048301528251908160248401526000935b82851061062f575050604492506000838284010152601f80199101168101030190fd5b848101820151868601604401529381019385935061060c56fea26469706673582212204722d7eec844166c49c642482ae9c309b2d696c0479d0b26fd5d26863d28890664736f6c63430008130033";

type ZeroXSwapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZeroXSwapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZeroXSwapper__factory extends ContractFactory {
  constructor(...args: ZeroXSwapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ZeroXSwapper";
  }

  override deploy(
    _zeroXProxy: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ZeroXSwapper> {
    return super.deploy(_zeroXProxy, overrides || {}) as Promise<ZeroXSwapper>;
  }
  override getDeployTransaction(
    _zeroXProxy: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_zeroXProxy, overrides || {});
  }
  override attach(address: string): ZeroXSwapper {
    return super.attach(address) as ZeroXSwapper;
  }
  override connect(signer: Signer): ZeroXSwapper__factory {
    return super.connect(signer) as ZeroXSwapper__factory;
  }
  static readonly contractName: "ZeroXSwapper";

  public readonly contractName: "ZeroXSwapper";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZeroXSwapperInterface {
    return new utils.Interface(_abi) as ZeroXSwapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZeroXSwapper {
    return new Contract(address, _abi, signerOrProvider) as ZeroXSwapper;
  }
}

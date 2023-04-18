/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TapiocaWrapper,
  TapiocaWrapperInterface,
} from "../TapiocaWrapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_erc20",
        type: "address",
      },
    ],
    name: "TapiocaWrapper__AlreadyDeployed",
    type: "error",
  },
  {
    inputs: [],
    name: "TapiocaWrapper__FailedDeploy",
    type: "error",
  },
  {
    inputs: [],
    name: "TapiocaWrapper__MngmtFeeTooHigh",
    type: "error",
  },
  {
    inputs: [],
    name: "TapiocaWrapper__NoTOFTDeployed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "TapiocaWrapper__TOFTExecutionFailed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract ITapiocaOFT",
        name: "_tapiocaOFT",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_erc20",
        type: "address",
      },
    ],
    name: "CreateOFT",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_caller",
        type: "address",
      },
    ],
    name: "HarvestFees",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_newFee",
        type: "uint256",
      },
    ],
    name: "SetFees",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_erc20",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_bytecode",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "_salt",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "_linked",
        type: "bool",
      },
    ],
    name: "createTOFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "toft",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "bytecode",
            type: "bytes",
          },
          {
            internalType: "bool",
            name: "revertOnFailure",
            type: "bool",
          },
        ],
        internalType: "struct TapiocaWrapper.ExecutionCall[]",
        name: "_call",
        type: "tuple[]",
      },
    ],
    name: "executeCalls",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_toft",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_bytecode",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "_revertOnFailure",
        type: "bool",
      },
    ],
    name: "executeTOFT",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "result",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "harvestFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "harvestableTapiocaOFTsLength",
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
    name: "lastTOFT",
    outputs: [
      {
        internalType: "contract ITapiocaOFT",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tapiocaOFTLength",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tapiocaOFTs",
    outputs: [
      {
        internalType: "contract ITapiocaOFT",
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
        name: "",
        type: "address",
      },
    ],
    name: "tapiocaOFTsByErc20",
    outputs: [
      {
        internalType: "contract ITapiocaOFT",
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
] as const;

const _bytecode =
  "0x60803461007057601f610e1e38819003918201601f19168301916001600160401b038311848410176100755780849260209460405283398101031261007057516001600160a01b0381168103610070576100619061005c3361008b565b61008b565b604051610d4b90816100d38239f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b600080546001600160a01b039283166001600160a01b03198216811783559216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a356fe6040608081526004908136101561001557600080fd5b600091823560e01c8063138cc18f146109295780632f3e1b911461090a57806339930d73146108eb5780633b6ac5a3146108b1578063715018a61461085f5780638da5cb5b14610839578063b3c7d6a314610501578063b8454db814610437578063c5181c70146103da578063c99e12b214610396578063e4c47206146101775763f2fde38b146100a557600080fd5b34610173576020366003190112610173576100be610a0d565b906100c7610ae3565b6001600160a01b03809216928315610121575050825473ffffffffffffffffffffffffffffffffffffffff19811683178455167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b8280fd5b506020806003193601126103735781359067ffffffffffffffff808311610392573660238401121561039257828401359381851161038e576024808501948136918860051b01011161038a579296939491906101d1610ae3565b84936101dc84610be4565b966101e989519889610b60565b848852601f196101f886610be4565b01875b81811061037b57505086945b80861061027557505050505050835193808501911515855285850152825180915260608401948060608360051b870101940192955b8287106102495785850386f35b909192938280610265600193605f198a82030186528851610a56565b960192019601959291909261023c565b909192939496809a965061028a888385610bfc565b356001600160a01b038116809103610377576102a7898486610bfc565b8881013590601e1981360301821215610373570190813591888311610373578901918036038313610373578392818e5192839283378101848152039134905af1966102f0610bb4565b6102fa828b610c1e565b52878a610308838587610bfc565b013590811515820361036f5781610366575b506103365761032890610b3b565b949392919099969599610207565b846103628b866103478b958e610c1e565b5191519485946310847b0960e01b8652850152830190610a56565b0390fd5b9050153861031a565b8c80fd5b8380fd5b5080fd5b60608a82018d01528b016101fb565b8780fd5b8680fd5b8580fd5b50346101735760203660031901126101735735916001548310156103d757506001600160a01b036103c8602093610a96565b92905490519260031b1c168152f35b80fd5b5091346103d757806003193601126103d757600154928315610429576000198401938411610416576020836001600160a01b036103c887610a96565b634e487b7160e01b825260119052602490fd5b8251634df930f160e01b8152fd5b508260603660031901126103d75761044d610a0d565b9060243567ffffffffffffffff81116103775761046d9036908501610a28565b604435939184151585036103735790839291610487610ae3565b8188519283928337810184815203916001600160a01b033491165af1916104ac610bb4565b91806104f9575b6104d757506104d390835193849315158452806020850152830190610a56565b0390f35b61036260209285519384936310847b0960e01b85528401526024830190610a56565b5082156104b3565b5090346101735760803660031901126101735761051c610a0d565b60243567ffffffffffffffff81116108355761053b9036908501610a28565b919093604435946064359384159485150361038a57610558610ae3565b6001600160a01b039384811697888a526020966003885286898c20541661081e57869492888695938b936000146107fc57916105f761060294926105e961060898956105a5368a89610c32565b838151910120955194859384019630908892606894929184526bffffffffffffffffffffffff19809260601b16602085015260601b16603483015260488201520190565b03601f198101835282610b60565b519020923691610c32565b90610c69565b165b16938051633c2f4f4360e11b815284818481895afa9081156107f257879185918a916107b7575b5016036107aa57600154926801000000000000000093848110156107975780600161065f9201600155610a96565b819291549060031b9188831b921b191617905585875260038452808720936001600160a01b03199486868254161790558151906363be14b960e11b8252808285818a5afa92831561078e57508892610757575b50506106e3575b5050507f7512d1d2a31be00735451a10b76db5dca1e1581b1cb23d7910b4741e8eb148768380a380f35b60025491821015610744576001820180600255821015610731575082907f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace01918254161790553880806106b9565b634e487b7160e01b865260329052602485fd5b634e487b7160e01b865260419052602485fd5b90809250813d8311610787575b61076e8183610b60565b8101031261038e5751801515810361038e5738806106b2565b503d610764565b513d8a823e3d90fd5b634e487b7160e01b895260418452602489fd5b5163f083e5f760e01b8152fd5b925050508481813d83116107eb575b6107d08183610b60565b8101031261038a5751838116810361038a5783879138610631565b503d6107c6565b82513d8a823e3d90fd5b916105f761060294926105e961081898956105a5368a89610c32565b1661060a565b8851638a8d142560e01b81528087018b9052602490fd5b8480fd5b5050346103775781600319360112610377576001600160a01b0360209254169051908152f35b83346103d757806003193601126103d757610878610ae3565b806001600160a01b038154811981168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b50503461037757602036600319011261037757602091816001600160a01b0391826108da610a0d565b168152600385522054169051908152f35b5050346103775781600319360112610377576020906002549051908152f35b5050346103775781600319360112610377576020906001549051908152f35b5091346103d757806003193601126103d757805b600280548210156109e45782526001600160a01b03817f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace015416803b15610173578280918686518094819363138cc18f60e01b83525af180156109da576109ae575b506109a990610b3b565b61093d565b67ffffffffffffffff81116109c75783526109a961099f565b634e487b7160e01b835260418552602483fd5b84513d85823e3d90fd5b82337ffafa110fb81a7f88423c7aa6e23116f2fbbc14aa953f81c5b5bf1571647f76b98280a280f35b600435906001600160a01b0382168203610a2357565b600080fd5b9181601f84011215610a235782359167ffffffffffffffff8311610a235760208381860195010111610a2357565b919082519283825260005b848110610a82575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201610a61565b600154811015610acd5760016000527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60190600090565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b03600054163303610af757565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b6000198114610b4a5760010190565b634e487b7160e01b600052601160045260246000fd5b90601f8019910116810190811067ffffffffffffffff821117610b8257604052565b634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff8111610b8257601f01601f191660200190565b3d15610bdf573d90610bc582610b98565b91610bd36040519384610b60565b82523d6000602084013e565b606090565b67ffffffffffffffff8111610b825760051b60200190565b9190811015610acd5760051b81013590605e1981360301821215610a23570190565b8051821015610acd5760209160051b010190565b929192610c3e82610b98565b91610c4c6040519384610b60565b829481845281830111610a23578281602093846000960137010152565b90805115610cd1576020815191016000f5906001600160a01b03821615610c8c57565b60405162461bcd60e51b815260206004820152601960248201527f437265617465323a204661696c6564206f6e206465706c6f79000000000000006044820152606490fd5b606460405162461bcd60e51b815260206004820152602060248201527f437265617465323a2062797465636f6465206c656e677468206973207a65726f6044820152fdfea26469706673582212206fd6affede43dc411cf2eb600f3417dd2beb6ca5fbcf979dbab8ca1cc0735b5164736f6c63430008120033";

type TapiocaWrapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TapiocaWrapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TapiocaWrapper__factory extends ContractFactory {
  constructor(...args: TapiocaWrapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TapiocaWrapper";
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TapiocaWrapper> {
    return super.deploy(_owner, overrides || {}) as Promise<TapiocaWrapper>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  override attach(address: string): TapiocaWrapper {
    return super.attach(address) as TapiocaWrapper;
  }
  override connect(signer: Signer): TapiocaWrapper__factory {
    return super.connect(signer) as TapiocaWrapper__factory;
  }
  static readonly contractName: "TapiocaWrapper";

  public readonly contractName: "TapiocaWrapper";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TapiocaWrapperInterface {
    return new utils.Interface(_abi) as TapiocaWrapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TapiocaWrapper {
    return new Contract(address, _abi, signerOrProvider) as TapiocaWrapper;
  }
}

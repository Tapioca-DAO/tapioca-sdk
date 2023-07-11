/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  SGOracle,
  SGOracleInterface,
} from "../../../../contracts/oracle/implementations/SGOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "__name",
        type: "string",
      },
      {
        internalType: "string",
        name: "__symbol",
        type: "string",
      },
      {
        internalType: "contract IStargatePool",
        name: "pool",
        type: "address",
      },
      {
        internalType: "contract AggregatorV2V3Interface",
        name: "_underlying",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "SG_POOL",
    outputs: [
      {
        internalType: "contract IStargatePool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UNDERLYING",
    outputs: [
      {
        internalType: "contract AggregatorV2V3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "get",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "peek",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "peekSpot",
    outputs: [
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c060405234620003755762000cbe803803806200001d816200037a565b928339810190608081830312620003755780516001600160401b03908181116200037557836200004f918401620003a0565b602093848401519083821162000375576200006c918501620003a0565b60408401516001600160a01b0394909391908585168503620003755760600151948516850362000375578251908282116200035f5760008054926001958685811c9516801562000354575b8a86101462000340578190601f95868111620002ed575b508a90868311600114620002885784926200027c575b5050600019600383901b1c191690861b1781555b8151938411620002685784548581811c911680156200025d575b89821014620002495783811162000201575b50879284116001146200019a57839495969750926200018e575b5050600019600383901b1c191690821b1790555b60805260a0526040516108ab908162000413823960805181818160b50152610518015260a051818181610180015281816101e301526105830152f35b0151905038806200013e565b9190601f1984169785845280842093905b898210620001e9575050838596979810620001cf575b505050811b01905562000152565b015160001960f88460031b161c19169055388080620001c1565b808785968294968601518155019501930190620001ab565b8582528882208480870160051c8201928b88106200023f575b0160051c019086905b8281106200023357505062000124565b83815501869062000223565b925081926200021a565b634e487b7160e01b82526022600452602482fd5b90607f169062000112565b634e487b7160e01b81526041600452602490fd5b015190503880620000e4565b8480528b85208994509190601f198416868e5b828210620002d55750508411620002bb575b505050811b018155620000f8565b015160001960f88460031b161c19169055388080620002ad565b8385015186558c979095019493840193018e6200029b565b9091508380528a84208680850160051c8201928d861062000336575b918a91869594930160051c01915b82811062000327575050620000ce565b8681558594508a910162000317565b9250819262000309565b634e487b7160e01b83526022600452602483fd5b94607f1694620000b7565b634e487b7160e01b600052604160045260246000fd5b600080fd5b6040519190601f01601f191682016001600160401b038111838210176200035f57604052565b919080601f84011215620003755782516001600160401b0381116200035f57602090620003d6601f8201601f191683016200037a565b92818452828287010111620003755760005b818110620003fe57508260009394955001015290565b8581018301518482018401528201620003e856fe60806040818152600436101561001457600080fd5b600090813560e01c928363313ce567146101c057508263b09f1266146101a4578263c5d664c614610162578263c699c4d614610146578263d28d88521461012a578263d39bbef014610108578263d568866c146100dd578263d6d7d52514610092578263daefe5651461009757505063eeb8a8d31461009257600080fd5b6104e4565b346100d957816003193601126100d957602090516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b5080fd5b346100d957610104906100ef36610495565b50506100f961039c565b90519182918261044c565b0390f35b346100d95760209061011936610495565b505061012361050c565b9051908152f35b346100d957816003193601126100d957610104906100f961039c565b346100d9576101049061015836610495565b50506100f96102b4565b346100d957816003193601126100d957602090516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b346100d957816003193601126100d957610104906100f96102b4565b913461026157806003193601126102615763313ce56760e01b83526020836004817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa928315610270578193610228575b60208460ff855191168152f35b9092506020813d8211610268575b816102436020938361027c565b8101031261026457519160ff83168303610261575060ff602061021b565b80fd5b8280fd5b3d9150610236565b509051903d90823e3d90fd5b90601f8019910116810190811067ffffffffffffffff82111761029e57604052565b634e487b7160e01b600052604160045260246000fd5b60405190600060019081549182811c90808416938415610392575b602094858410811461037e578388528794939291811561035e5750600114610302575b50506103009250038361027c565b565b60008181527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf695935091905b818310610346575050610300935082010138806102f2565b8554888401850152948501948794509183019161032e565b91505061030094925060ff191682840152151560051b82010138806102f2565b634e487b7160e01b85526022600452602485fd5b91607f16916102cf565b604051906000805490600182811c90808416938415610442575b602094858410811461037e578388528794939291811561035e57506001146103e65750506103009250038361027c565b60008080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56395935091905b81831061042a575050610300935082010138806102f2565b85548884018501529485019487945091830191610412565b91607f16916103b6565b6020808252825181830181905290939260005b82811061048157505060409293506000838284010152601f8019910116010190565b81810186015184820160400152850161045f565b9060206003198301126104df5760043567ffffffffffffffff928382116104df57806023830112156104df5781600401359384116104df57602484830101116104df576024019190565b600080fd5b346104df576104f236610495565b505060406104fe61050c565b815190600182526020820152f35b6001600160a01b0390817f0000000000000000000000000000000000000000000000000000000000000000166040908151906318160ddd60e01b80835260209060049382818681875afa9081156107ee57600091610831575b50156107f95760a085969785965196878092633fabe5a360e21b82527f0000000000000000000000000000000000000000000000000000000000000000165afa80156107ee576000908196829161079a575b50600087131561075757156107145769ffffffffffffffffffff16156106d1578551630abb87c960e11b815282818681875afa9081156106c657600091610699575b508581029581870414901517156106845781908487518095819382525afa94851561067a5750600094610649575b5050821561063457500490565b601290634e487b7160e01b6000525260246000fd5b8181959293953d8311610673575b610661818361027c565b81010312610261575051913880610627565b503d610657565b513d6000823e3d90fd5b601184634e487b7160e01b6000525260246000fd5b908382813d83116106bf575b6106af818361027c565b81010312610261575051386105f9565b503d6106a5565b87513d6000823e3d90fd5b855162461bcd60e51b8152808501839052601560248201527f53474f7261636c653a207374616c6520726f756e6400000000000000000000006044820152606490fd5b865162461bcd60e51b8152808601849052601560248201527f53474f7261636c653a207374616c6520707269636500000000000000000000006044820152606490fd5b875162461bcd60e51b8152808701859052601660248201527f53474f7261636c653a20666565642070726963652030000000000000000000006044820152606490fd5b96505060a0863d82116107e6575b816107b560a0938361027c565b8101031261026157506107c78561085e565b82860151906107dd60806060890151980161085e565b509095386105b7565b3d91506107a8565b86513d6000823e3d90fd5b845162461bcd60e51b81528085018390526012602482015271053474f7261636c653a20737570706c7920360741b6044820152606490fd5b908382813d8311610857575b610847818361027c565b8101031261026157505138610565565b503d61083d565b519069ffffffffffffffffffff821682036104df5756fea2646970667358221220a31c5b47054887e67215fed093e356e3cf87aaa8b24910b4f6bf0d72856d242d64736f6c63430008120033";

type SGOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SGOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SGOracle__factory extends ContractFactory {
  constructor(...args: SGOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "SGOracle";
  }

  override deploy(
    __name: PromiseOrValue<string>,
    __symbol: PromiseOrValue<string>,
    pool: PromiseOrValue<string>,
    _underlying: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SGOracle> {
    return super.deploy(
      __name,
      __symbol,
      pool,
      _underlying,
      overrides || {}
    ) as Promise<SGOracle>;
  }
  override getDeployTransaction(
    __name: PromiseOrValue<string>,
    __symbol: PromiseOrValue<string>,
    pool: PromiseOrValue<string>,
    _underlying: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      __name,
      __symbol,
      pool,
      _underlying,
      overrides || {}
    );
  }
  override attach(address: string): SGOracle {
    return super.attach(address) as SGOracle;
  }
  override connect(signer: Signer): SGOracle__factory {
    return super.connect(signer) as SGOracle__factory;
  }
  static readonly contractName: "SGOracle";

  public readonly contractName: "SGOracle";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SGOracleInterface {
    return new utils.Interface(_abi) as SGOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SGOracle {
    return new Contract(address, _abi, signerOrProvider) as SGOracle;
  }
}

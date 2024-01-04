/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Salary,
  SalaryInterface,
} from "../../../samples/salary.sol/Salary";

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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "salaryId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "share",
        type: "uint256",
      },
    ],
    name: "LogCancel",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "funder",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "cliffTimestamp",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "endTimestamp",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "cliffPercent",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalShare",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "salaryId",
        type: "uint256",
      },
    ],
    name: "LogCreate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "salaryId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "share",
        type: "uint256",
      },
    ],
    name: "LogWithdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "salaryId",
        type: "uint256",
      },
    ],
    name: "available",
    outputs: [
      {
        internalType: "uint256",
        name: "share",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "calls",
        type: "bytes[]",
      },
      {
        internalType: "bool",
        name: "revertOnFail",
        type: "bool",
      },
    ],
    name: "batch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "salaryId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "cliffTimestamp",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "endTimestamp",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "cliffPercent",
        type: "uint32",
      },
      {
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
    ],
    name: "create",
    outputs: [
      {
        internalType: "uint256",
        name: "salaryId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "share",
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
        name: "salaryId",
        type: "uint256",
      },
    ],
    name: "info",
    outputs: [
      {
        internalType: "address",
        name: "funder",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "withdrawnAmount",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "cliffTimestamp",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "endTimestamp",
        type: "uint32",
      },
      {
        internalType: "uint64",
        name: "cliffPercent",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "availableAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permitToken",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "salaries",
    outputs: [
      {
        internalType: "address",
        name: "funder",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "withdrawnShare",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "cliffTimestamp",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "endTimestamp",
        type: "uint32",
      },
      {
        internalType: "uint64",
        name: "cliffPercent",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "share",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "salaryCount",
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
        name: "salaryId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x60803461007457601f6113d338819003918201601f19168301916001600160401b038311848410176100795780849260209460405283398101031261007457516001600160a01b0381169081900361007457600080546001600160a01b03191691909117905560405161134390816100908239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600436101561001257600080fd5b6000803560e01c908162f714ce146100b9575080632e340599146100b457806357d682c4146100af578063610addba146100aa5780637c516e94146100a557806392155898146100a057806396e494e81461009b578063b10ba65e14610096578063d2423b51146100915763de4065771461008c57600080fd5b610ab1565b610a53565b6107fe565b610799565b61077b565b6106b0565b610606565b610430565b610160565b34610147576040366003190112610147576004356024356100d98161014a565b6001600160a01b0360016100ec846105b5565b500154163303610102576100ff9161121f565b80f35b60405162461bcd60e51b815260206004820152601560248201527f53616c6172793a206e6f7420726563697069656e7400000000000000000000006044820152606490fd5b80fd5b6001600160a01b0381160361015b57565b600080fd5b3461015b5760208060031936011261015b57600490813590610192610184836105b5565b50546001600160a01b031690565b916102876101b360016101a4846105b5565b5001546001600160a01b031690565b9460026101bf846105b5565b500154906101dc816101d0866105b5565b50015463ffffffff1690565b6101f8826101e9876105b5565b50015460201c63ffffffff1690565b9161021981610206886105b5565b50015460401c67ffffffffffffffff1690565b9361023b61022f6000546001600160a01b031690565b6001600160a01b031690565b6002610246896105b5565b50015497896005610256836105b5565b500154604051809a819263442c159960e01b9d8e845289840160409060009294936060820195825260208201520152565b0381855afa9788156103ed57600098610411575b5060026102a7826105b5565b500154918a60036102b7846105b5565b500154604080518d8152888101968752602087019290925260009086015293849081906060010381845afa9485156103ed578b936000966103f2575b5061031c6103176103116002610308876105b5565b500154956105b5565b50610fe8565b61110c565b604080519c8d52918c01938452602084015260009083015289918290819060600103915afa9687156103ed576103ba986000986103be575b5050604051998a998a959093610100979367ffffffffffffffff959b9a9996939b61012089019c6001600160a01b038092168a521660208901526040880152606087015263ffffffff80921660808701521660a08501521660c083015260e08201520152565b0390f35b6103de929850803d106103e6575b6103d68183610b64565b810190610e3b565b953880610354565b503d6103cc565b610d97565b61040a919650843d86116103e6576103d68183610b64565b94386102f3565b6104299198508a3d8c116103e6576103d68183610b64565b963861029b565b3461015b57604036600319011261015b576004356024356104508161014a565b610459826105b5565b50916001600160a01b038093541633036105705761048461047e60016101a4846105b5565b8261121f565b6104a96005610492836105b5565b50015460036104a0846105b5565b50015490611090565b916000936104c161022f86546001600160a01b031690565b918560026104ce866105b5565b500154843b1561056c57604051630208d92960e11b81523060048201526001600160a01b0384166024820152604481019190915260648101879052938490608490829084905af19283156103ed577fcabe9e1784950547285194bcd0e3c0fc267db2c6c6b7e6a913ab88754f9fb3a593610553575b506040519485521692602090a380f35b8061056061056692610b12565b80610770565b38610543565b5080fd5b60405162461bcd60e51b815260206004820152601260248201527f53616c6172793a206e6f742066756e64657200000000000000000000000000006044820152606490fd5b6001548110156105f0576006906001600052027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60190600090565b634e487b7160e01b600052603260045260246000fd5b3461015b57602036600319011261015b5760043560015481101561015b5761062d906105b5565b5080546001820154600283015460038401546004850154600590950154604080516001600160a01b0396871681529590941660208087019190915285850193909352606085019190915263ffffffff80861660808601529185901c90911660a084015292901c67ffffffffffffffff1660c082015260e081019190915261010090f35b3461015b5761010036600319011261015b576004356106ce8161014a565b6024356106da8161014a565b604435916106e78361014a565b60a4359160ff831680930361015b576001600160a01b0380921690813b1561015b57600060e492819585604051988997889663d505accf60e01b885216600487015216602485015260643560448501526084356064850152608484015260c43560a4840152833560c48401525af180156103ed5761076157005b8061056061076e92610b12565b005b600091031261015b57565b3461015b57600036600319011261015b576020600154604051908152f35b3461015b57602036600319011261015b5760206107bd6103176103116004356105b5565b604051908152f35b6044359063ffffffff8216820361015b57565b6064359063ffffffff8216820361015b57565b6084359063ffffffff8216820361015b57565b3461015b5760c036600319011261015b5760043561081b8161014a565b602435906108276107c5565b916108306107d8565b6108386107eb565b9360a4356fffffffffffffffffffffffffffffffff8116810361015b576108df9563ffffffff61086e8186168286161115610da3565b811695610885670de0b6b3a7640000881115610def565b600092602061089e61022f86546001600160a01b031690565b604051638eb22cdd60e01b8152600481018a90526fffffffffffffffffffffffffffffffff90931660248401526000604484015291998a9081906064820190565b0381845afa9889156103ed578499610a33575b50803b15610a2f57604051630208d92960e11b815233600482015230602482015260448101889052606481018a905293908490608490829084905af19283156103ed576109ce97896001600160a01b0394610a08937f566fadf304d912585711774a94350d1323ff36f50cf3ed054a60f76d1695473597610a1c575b506001549a8b936109c3610980610e4a565b338152916001600160a01b0389166020840152604083018e905263ffffffff8c16608084015263ffffffff8d1660a084015267ffffffffffffffff1660c0830152565b8360e0820152610e88565b604051958695169833988691608093969594919660a084019763ffffffff9283809216865216602085015216604083015260608201520152565b0390a4604080519182526020820192909252f35b80610560610a2992610b12565b3861096e565b8380fd5b610a4c91995060203d81116103e6576103d68183610b64565b97386108f2565b604036600319011261015b5760043567ffffffffffffffff80821161015b573660238301121561015b57816004013590811161015b573660248260051b8401011161015b5760243590811515820361015b57602461076e9301610c21565b3461015b57600036600319011261015b5760206001600160a01b0360005416604051908152f35b634e487b7160e01b600052601160045260246000fd5b908092918237016000815290565b634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff8111610b2657604052565b610afc565b610100810190811067ffffffffffffffff821117610b2657604052565b6040810190811067ffffffffffffffff821117610b2657604052565b90601f8019910116810190811067ffffffffffffffff821117610b2657604052565b67ffffffffffffffff8111610b2657601f01601f191660200190565b3d15610bcd573d90610bb382610b86565b91610bc16040519384610b64565b82523d6000602084013e565b606090565b60005b838110610be55750506000910152565b8181015183820152602001610bd5565b60409160208252610c158151809281602086015260208686019101610bd2565b601f01601f1916010190565b91909160005b838110610c345750505050565b8060051b820135601e198336030181121561015b57820180359067ffffffffffffffff821161015b5760200190803603821361015b5760008091604093610c7f855180938193610aee565b0390305af4610c8c610ba2565b901580610cd8575b610cb05750506000198114610cab57600101610c27565b610ad8565b90610cbd610cd492610cdf565b905162461bcd60e51b815291829160048301610bf5565b0390fd5b5084610c94565b6044815110610d5d5760048101518101906020816024840193031261015b5760248101519067ffffffffffffffff821161015b57018160438201121561015b576024810151610d2d81610b86565b92610d3b6040519485610b64565b8184526044828401011161015b57610d5a916044602085019101610bd2565b90565b50604051610d6a81610b48565b601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6040513d6000823e3d90fd5b15610daa57565b60405162461bcd60e51b815260206004820152601360248201527f53616c6172793a20636c696666203e20656e64000000000000000000000000006044820152606490fd5b15610df657565b60405162461bcd60e51b815260206004820152601760248201527f53616c6172793a20636c69666620746f6f206c617267650000000000000000006044820152606490fd5b9081602091031261015b575190565b60405190610e5782610b2b565b8160e06000918281528260208201528260408201528260608201528260808201528260a08201528260c08201520152565b60015468010000000000000000811015610b2657806001610eac92016001556105b5565b919091610fd2578051825473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b039190911617825560059060e090610f19610efa60208301516001600160a01b031690565b60018601906001600160a01b03166001600160a01b0319825416179055565b6040810151600285015560608101516003850155610fcb60048501610f5e610f48608085015163ffffffff1690565b825463ffffffff191663ffffffff909116178255565b610f94610f7260a085015163ffffffff1690565b825467ffffffff00000000191660209190911b67ffffffff0000000016178255565b60c083015181546fffffffffffffffff0000000000000000191660409190911b6fffffffffffffffff000000000000000016179055565b0151910155565b634e487b7160e01b600052600060045260246000fd5b90604051610ff581610b2b565b60e06005829461101c61100f82546001600160a01b031690565b6001600160a01b03168552565b61104361103360018301546001600160a01b031690565b6001600160a01b03166020860152565b600281015460408581019190915260038201546060860152600482015463ffffffff8082166080880152602082901c1660a0870152901c67ffffffffffffffff1660c08501520154910152565b91908203918211610cab57565b63ffffffff9182169082160391908211610cab57565b9067ffffffffffffffff809216606403918211610cab57565b81810292918115918404141715610cab57565b81156110e9570490565b634e487b7160e01b600052601260045260246000fd5b91908201809211610cab57565b610d5a906080810161112e611125825163ffffffff1690565b63ffffffff1690565b9081421060001461114957505060606000915b015190611090565b60a083019161115f611125845163ffffffff1690565b421061117557505050606060e082015191611141565b6060926111b16111256111dc946111ab6111a06111956111d59742611090565b955163ffffffff1690565b915163ffffffff1690565b9061109d565b60c086015167ffffffffffffffff169182816111e2575b50505060e08501516110cc565b6064900490565b91611141565b9161120c611211926112076111fa61121797966110b3565b67ffffffffffffffff1690565b6110cc565b6110df565b906110ff565b3880806111c8565b61122e610317610311836105b5565b91600361123a836105b5565b50016112478482546110ff565b905561125e61022f6000546001600160a01b031690565b90600261126a846105b5565b50015491803b1561015b57604051630208d92960e11b81523060048201526001600160a01b03831660248201526044810193909352606483018590526000908390608490829084905af19081156103ed577f125e889e0ad284210ec4c8448f648c2a782a6d7f2f9d607aefd518485a78c7f4926001600160a01b03926112fa575b506040519485521692602090a3565b8061056061130792610b12565b386112eb56fea2646970667358221220c18d491d889c9cce5550cad8f2efde1a8c6b9091a5a758ee57c798b6a37bb8ba64736f6c63430008120033";

type SalaryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SalaryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Salary__factory extends ContractFactory {
  constructor(...args: SalaryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Salary";
  }

  override deploy(
    _yieldBox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Salary> {
    return super.deploy(_yieldBox, overrides || {}) as Promise<Salary>;
  }
  override getDeployTransaction(
    _yieldBox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_yieldBox, overrides || {});
  }
  override attach(address: string): Salary {
    return super.attach(address) as Salary;
  }
  override connect(signer: Signer): Salary__factory {
    return super.connect(signer) as Salary__factory;
  }
  static readonly contractName: "Salary";

  public readonly contractName: "Salary";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SalaryInterface {
    return new utils.Interface(_abi) as SalaryInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Salary {
    return new Contract(address, _abi, signerOrProvider) as Salary;
  }
}

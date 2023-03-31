/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  CurveStableToUsdoBidder,
  CurveStableToUsdoBidderInterface,
} from "../../../liquidationQueue/bidders/CurveStableToUsdoBidder";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ISwapper",
        name: "curveSwapper_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "curvePoolAssetCount_",
        type: "uint256",
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
        internalType: "address",
        name: "_old",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_new",
        type: "address",
      },
    ],
    name: "CurveSwapperUpdated",
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
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "curveSwapper",
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
        internalType: "contract ISingularity",
        name: "singularity",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenInId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISingularity",
        name: "singularity",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenInId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
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
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
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
    inputs: [
      {
        internalType: "contract ISwapper",
        name: "_swapper",
        type: "address",
      },
    ],
    name: "setCurveSwapper",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISingularity",
        name: "singularity",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenInId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
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
        name: "",
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
] as const;

const _bytecode =
  "0x6080346100ab57601f61169e38819003918201601f19168301916001600160401b038311848410176100b05780849260409485528339810103126100ab5780516001600160a01b03811691908290036100ab576020015160008054336001600160a01b03199182168117835560405194927f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a360025416176002556003556115d790816100c78239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe608060408181526004918236101561001657600080fd5b600092833560e01c91826306fdde03146103dc57508163078dfbe7146102a75781634e71e0c8146101ea5781635810e7ec14610168575080635dd82b361461014b5780638da5cb5b14610126578063b691d78c14610108578063e30c3978146100e1578063e91f9961146100ba5763fef744fa1461009357600080fd5b346100b6576020906100af6100a7366104a3565b50509161085b565b9051908152f35b5080fd5b50346100b657816003193601126100b6576020906001600160a01b03600254169051908152f35b50346100b657816003193601126100b6576020906001600160a01b03600154169051908152f35b50346100b6576020906100af61011d366104a3565b93929092610a26565b50346100b657816003193601126100b6576001600160a01b0360209254169051908152f35b50346100b6576020906100af610160366104a3565b50509161063e565b8390346100b65760203660031901126100b657356001600160a01b038082168092036101e657806101b373ffffffffffffffffffffffffffffffffffffffff1992855416331461050d565b826002549182167faa9eb2cf6e6a7bce28901c01eb97556feb7824a5a9b13df2c67580509a62633f8680a3161760025580f35b8280fd5b919050346101e657826003193601126101e657600154906001600160a01b0392838316918233036102645750508084549384167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08680a373ffffffffffffffffffffffffffffffffffffffff198093161783551660015580f35b906020606492519162461bcd60e51b8352820152602060248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152fd5b9050346101e65760603660031901126101e6578035906001600160a01b03928383168093036103d85760243580151581036103d4576044359081151582036103d0576102f786885416331461050d565b156103aa578315908115916103a2575b501561035f5750508083549283167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a373ffffffffffffffffffffffffffffffffffffffff198092161782556001541660015580f35b906020606492519162461bcd60e51b8352820152601560248201527f4f776e61626c653a207a65726f206164647265737300000000000000000000006044820152fd5b905038610307565b505050905073ffffffffffffffffffffffffffffffffffffffff19600154161760015580f35b8680fd5b8580fd5b8480fd5b8385346104605780600319360112610460578183019083821067ffffffffffffffff83111761044d575061044993508152601a82527f737461626c65202d3e205553444f2028334372762b5553444f29000000000000602083015251918291602083526020830190610463565b0390f35b80604186634e487b7160e01b6024945252fd5b80fd5b919082519283825260005b84811061048f575050826000602080949584010152601f8019910116010190565b60208183018101518483018201520161046e565b6080600319820112610508576004356001600160a01b03811681036105085791602435916044359160643567ffffffffffffffff9283821161050857806023830112156105085781600401359384116105085760248483010111610508576024019190565b600080fd5b1561051457565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b67ffffffffffffffff811161056c57604052565b634e487b7160e01b600052604160045260246000fd5b6060810190811067ffffffffffffffff82111761056c57604052565b90601f8019910116810190811067ffffffffffffffff82111761056c57604052565b51906001600160a01b038216820361050857565b156105db57565b606460405162461bcd60e51b815260206004820152600c60248201527f5553444f206e6f742073657400000000000000000000000000000000000000006044820152fd5b9081602091031261050857516001600160a01b03811681036105085790565b929190926001600160a01b03809116936040948551636c3d8b8f60e01b918282526020918281600481855afa9081156108185786918491600091610823575b5060048b5180948193631192124760e11b8352165afa80156108185786906000906107df575b6106b092501615156105d4565b87519283528183600481845afa801561075f5785936000916107a3575b50829060048a51809881936386c8e21d60e01b8352165afa94851561075f57600095610774575b5084841461076a578160049189519283809263de40657760e01b82525afa91821561075f5761072f979850600092610732575b5050166111b8565b90565b6107519250803d10610758575b610749818361059e565b81019061061f565b3880610727565b503d61073f565b88513d6000823e3d90fd5b5093955050505050565b90948282813d831161079c575b61078b818361059e565b8101031261046057505193386106f4565b503d610781565b919280945082813d83116107d8575b6107bc818361059e565b81010312610460575090826107d28694936105c0565b906106cd565b503d6107b2565b90508382813d8311610811575b6107f6818361059e565b8101031261046057508561080c6106b0926105c0565b6106a3565b503d6107ec565b89513d6000823e3d90fd5b92509082813d8111610854575b61083a818361059e565b8101031261046057508261084e87926105c0565b3861067d565b503d610830565b9291906001600160a01b03809416936040948551636c3d8b8f60e01b918282526020918281600481855afa90811561081857859184916000916109ee575b5060048b5180948193631192124760e11b8352165afa80156108185785906000906109b5575b6108cc92501615156105d4565b87519283528183600481845afa801561075f578493600091610979575b50829060048a51809781936386c8e21d60e01b8352165afa93841561075f5760009461094a575b5083851461076a578160049189519283809263de40657760e01b82525afa91821561075f5761072f979850600092610732575050166111b8565b90938282813d8311610972575b610961818361059e565b810103126104605750519238610910565b503d610957565b919280945082813d83116109ae575b610992818361059e565b81010312610460575090826109a88594936105c0565b906108e9565b503d610988565b90508382813d83116109e7575b6109cc818361059e565b810103126104605750846109e26108cc926105c0565b6108bf565b503d6109c2565b92509082813d8111610a1f575b610a05818361059e565b81010312610460575082610a1986926105c0565b38610899565b503d6109fb565b90936001600160a01b0380921691604095865192636c3d8b8f60e01b9586855260009660209586816004818b5afa90811561102157869188918b916110da575b5060048d5180948193631192124760e11b8352165afa80156110215786908a906110a2575b610a9892501615156105d4565b895163de40657760e01b815286816004818b5afa908115611021579086918a91611085575b5016968a51917fc23ea21f0000000000000000000000000000000000000000000000000000000083528783600481855afa928315610e5f579088918b94611066575b5060048d518094819382525afa908115611021578693929188918b9161102b575b5060048d51809981936386c8e21d60e01b8352165afa958615611021578996610ff2575b50821698893303610faf57858514610ec25786899480610ea6575b50505081600254168a51638eb22cdd60e01b918282528660048301528360248301528a604483015288826064818d5afa918215610e9c578b92610e6d575b50893b15610e69578c51630208d92960e11b81523060048201526001600160a01b039190911660248201526044810187905260648101919091528981608481838d5af18015610e5f57908a91610e47575b50508a5180630cf35bdd60e41b8082528760048301528a82602460809586935afa918215610e17578b918f85928f95610e21575b50602490518094819382528d60048301525afa928315610e1757926064928f98979694928c96938f93610ddc575b5050610c5e610c64916113f0565b916113f0565b90885198610c718a610582565b60028a5236878b0137610c838961114a565b52610c8d8861116d565b528d519a8b938492835289600484015260248301528c60448301525afa968715610dd257918893918b98979695938598610d97575b5090610cee610d4493926002541697610ce08b51948592830161117d565b03601f19810184528361059e565b88519a8b98899788967f55a68e100000000000000000000000000000000000000000000000000000000088526004880152602487015260448601526064850152608484015260c060a484015260c4830190610463565b03925af1928315610d8d578193610d5c575b50505090565b9091809350813d8311610d86575b610d74818361059e565b81010312610460575051388080610d56565b503d610d6a565b51903d90823e3d90fd5b929850965092508481813d8311610dcb575b610db3818361059e565b81010312610508575189969095889390610cee610cc2565b503d610da9565b8a513d8a823e3d90fd5b610c64929350610c5e9181610e0592903d10610e10575b610dfd818361059e565b810190611111565b505090509291610c50565b503d610df3565b8e513d8e823e3d90fd5b6024919550610e3c90843d8611610e1057610dfd818361059e565b505090509490610c22565b610e5090610558565b610e5b578838610bee565b8880fd5b8c513d8c823e3d90fd5b8a80fd5b9091508881813d8311610e95575b610e85818361059e565b8101031261050857519038610b9d565b503d610e7b565b8d513d8d823e3d90fd5b82809496509192010312610ebe573591388681610b5f565b8780fd5b5098969792935050508493929351638eb22cdd60e01b81528260048201528760248201528660448201528481606481875afa948515610fa5578795610f75575b5050823b156103d4578451630208d92960e11b81523060048201526001600160a01b039190911660248201526044810191909152606481019290925290919083908390608490829084905af1908115610f6c5750610f5f57505090565b610f6890610558565b5090565b513d84823e3d90fd5b9080929550813d8311610f9e575b610f8d818361059e565b810103126103d45751923880610f02565b503d610f83565b86513d89823e3d90fd5b6064878c519062461bcd60e51b82526004820152600760248201527f6f6e6c79204c51000000000000000000000000000000000000000000000000006044820152fd5b9095508681813d831161101a575b61100a818361059e565b81010312610e5b57519482610b44565b503d611000565b8b513d8b823e3d90fd5b929394505081813d831161105f575b611044818361059e565b81010312610e5b5790866110598794936105c0565b38610b20565b503d61103a565b61107e919450823d841161075857610749818361059e565b9238610aff565b61109c9150883d8a1161075857610749818361059e565b38610abd565b50508681813d83116110d3575b6110b9818361059e565b81010312610e5b57856110ce610a98926105c0565b610a8b565b503d6110af565b92505081813d831161110a575b6110f1818361059e565b81010312610e5b578661110487926105c0565b38610a66565b503d6110e7565b919082608091031261050857815160058110156105085791611135602082016105c0565b916060611144604084016105c0565b92015190565b8051156111575760200190565b634e487b7160e01b600052603260045260246000fd5b8051600110156111575760400190565b6020908160408183019282815285518094520193019160005b8281106111a4575050505090565b835185529381019392810192600101611196565b91909392936001600160a01b03809316906040938451630cf35bdd60e41b8082528360048301526080958683602481895afa92831561075f576000936113cd575b50875191825260048201528581602481885afa9586156113c257600096611397575b505061122961122f916113f0565b946113f0565b9385519761123c89610582565b6002895260209586928836858d01376112548b61114a565b5261125e8a61116d565b526064875180968193638eb22cdd60e01b83528760048401526024830152600060448301525afa92831561138c5760009361135b575b509583926112b6926112c461130b98996002541693885195869188830161117d565b03601f19810186528561059e565b8651978894859384937f532bb19200000000000000000000000000000000000000000000000000000000855260048501526024840152606060448401526064830190610463565b03915afa9182156113515750600091611325575b50905090565b82813d831161134a575b611339818361059e565b81010312610460575051803861131f565b503d61132f565b513d6000823e3d90fd5b90928482813d8311611385575b611372818361059e565b810103126104605750519161130b611294565b503d611368565b85513d6000823e3d90fd5b61122f92965061122991816113b792903d10610e1057610dfd818361059e565b50509050959161121b565b87513d6000823e3d90fd5b6113e5919350873d8911610e1057610dfd818361059e565b5050905091386111f9565b6001600160a01b03806002541660408051928380937f218751b2000000000000000000000000000000000000000000000000000000008252602094859160049788915afa90811561159657600091611560575b506003546000199690929160005b8481106114ae57505050505060001984131561146d5750505090565b60649350519162461bcd60e51b8352820152600f60248201527f6173736574206e6f7420666f756e6400000000000000000000000000000000006044820152fd5b85517fc6610657000000000000000000000000000000000000000000000000000000008152818982015287816024818887165afa9081156113c25760009161152b575b50841683851614611523575b600019811461150e57600101611451565b601188634e487b7160e01b6000525260246000fd5b9750876114fd565b908882813d8311611559575b611541818361059e565b810103126104605750611553906105c0565b386114f1565b503d611537565b8481813d831161158f575b611575818361059e565b810103126100b65751908282168203610460575038611443565b503d61156b565b83513d6000823e3d90fdfea264697066735822122077dcd74e5fec8b173c014a17509a300e6347777aa09f691b1e9000bf67863d6764736f6c63430008120033";

type CurveStableToUsdoBidderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CurveStableToUsdoBidderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CurveStableToUsdoBidder__factory extends ContractFactory {
  constructor(...args: CurveStableToUsdoBidderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "CurveStableToUsdoBidder";
  }

  override deploy(
    curveSwapper_: PromiseOrValue<string>,
    curvePoolAssetCount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CurveStableToUsdoBidder> {
    return super.deploy(
      curveSwapper_,
      curvePoolAssetCount_,
      overrides || {}
    ) as Promise<CurveStableToUsdoBidder>;
  }
  override getDeployTransaction(
    curveSwapper_: PromiseOrValue<string>,
    curvePoolAssetCount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      curveSwapper_,
      curvePoolAssetCount_,
      overrides || {}
    );
  }
  override attach(address: string): CurveStableToUsdoBidder {
    return super.attach(address) as CurveStableToUsdoBidder;
  }
  override connect(signer: Signer): CurveStableToUsdoBidder__factory {
    return super.connect(signer) as CurveStableToUsdoBidder__factory;
  }
  static readonly contractName: "CurveStableToUsdoBidder";

  public readonly contractName: "CurveStableToUsdoBidder";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CurveStableToUsdoBidderInterface {
    return new utils.Interface(_abi) as CurveStableToUsdoBidderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CurveStableToUsdoBidder {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CurveStableToUsdoBidder;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Magnetar,
  MagnetarInterface,
} from "../../../utils/Magnetar/Magnetar";

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
        components: [
          {
            internalType: "uint16",
            name: "id",
            type: "uint16",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "allowFailure",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "call",
            type: "bytes",
          },
        ],
        internalType: "struct MagnetarData.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "burst",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes",
          },
        ],
        internalType: "struct MagnetarData.Result[]",
        name: "returnData",
        type: "tuple[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBasefee",
    outputs: [
      {
        internalType: "uint256",
        name: "basefee",
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
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBlockNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "chainid",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockCoinbase",
    outputs: [
      {
        internalType: "address",
        name: "coinbase",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockDifficulty",
    outputs: [
      {
        internalType: "uint256",
        name: "difficulty",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockGasLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "gaslimit",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getEthBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
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
  "0x6080346200012757601f620024a238819003918201601f19168301916001600160401b038311848410176200012c578084926020946040528339810103126200012757516001600160a01b03808216908183036200012757620000623362000142565b33906000541603620000e357156200008f576200007f9062000142565b60405161231890816200018a8239f35b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b600080fd5b634e487b7160e01b600052604160045260246000fd5b600080546001600160a01b039283166001600160a01b03198216811783559216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a356fe6080604052600436101561001257600080fd5b60003560e01c8063013546e1146100f75780630f28c97d146100f257806327e86d6e146100ed5780633408e470146100e85780633e64a696146100e357806342cbb15c146100de5780634d2301cc146100d9578063715018a6146100d457806372425d9d146100cf57806386d516e8146100ca5780638da5cb5b146100c5578063a8b0574e146100c0578063ee82ac5e146100bb5763f2fde38b146100b657600080fd5b610f4a565b610f2c565b610f11565b610eea565b610ecf565b610eb4565b610e5e565b610e36565b610dfd565b610de2565b610dc7565b610da7565b610d8c565b6101bb565b60005b83811061010f5750506000910152565b81810151838201526020016100ff565b90602091610138815180928185528580860191016100fc565b601f01601f1916010190565b602080820190808352835180925260409283810182858560051b8401019601946000925b858410610179575050505050505090565b9091929394959685806101aa600193603f1986820301885286838d518051151584520151918185820152019061011f565b990194019401929594939190610168565b60203660031901126104015760043567ffffffffffffffff80821161040157366023830112156104015781600401351161040157366024826004013560051b8301011161040157600090610212816004013561119f565b90825b8160040135811061023f5761023b8361022f863414611fc7565b60405191829182610144565b0390f35b90926102538285600401356024870161124d565b9160608084019061026a6102668361127e565b1590565b610d41575b600161028461027d87611370565b61ffff1690565b036102cb5750836102b86102be926102b06102a560206102c398990161147e565b93608081019061128b565b92909161127e565b92612125565b611212565b929092610215565b61ffff6002816102da88611370565b1603610303575050836102fd6102be926102b06102a560206102c398990161147e565b92612051565b909150600a8161031287611370565b160361048857505061033c61033461032d608086018661128b565b809161137a565b810190611e09565b61035561035082516001600160a01b031690565b6121ae565b60408481013593841561040657602061038761037b61037b838961039696019a0161147e565b6001600160a01b031690565b9301516001600160a01b031690565b91803b15610401579051632479d86360e01b81526001600160a01b03909216600483015290926000918491829081602481015b03925af19182156103fc576102c3926103e3575b50611212565b806103f06103f69261107e565b80610d81565b386103dd565b6114d6565b600080fd5b9461041d9192945061037b602061037b920161147e565b8161043260208601516001600160a01b031690565b94015190803b15610401579151630c46aac760e31b81523360048201526001600160a01b0394909416602485015260448401526000908390606490829084905af19182156103fc576102c3926103e35750611212565b600b81610496879697611370565b160361051957505081926001600160a01b036104c66104be61032d60806104d397018861128b565b810190611ecd565b97919293949094166121ae565b6040936104ef61037b61037b6020888c01358095019b0161147e565b92833b15610401576103c9600096519889968795869463695ef6bf60e01b86523360048701611f6e565b600381610527869496611370565b1603610673575060009060809061057661037b61037b602061055961055161032d8888018861128b565b810190611e62565b94610570610350838801516001600160a01b031690565b0161147e565b8151956040948594610591868601516001600160a01b031690565b928501519401518551634d4d7cbd60e11b815260048101999099523360248a01526001600160a01b03909216604489015260648801939093526084870152859160a4918391905af180156103fc576102c393600090819261063b575b5091516020810192909252604082015261061481606081015b03601f198101835282611124565b61061c611146565b600181529060208201526106308286611d4e565b526103dd8185611d4e565b6106149250610606915061066490843d861161066c575b61065c8183611124565b810190611e4c565b9250906105ed565b503d610652565b60058161067f84611370565b160361073257506106c161037b61037b60206106ac6106a461032d608088018861128b565b810190611ce8565b9461057061035087516001600160a01b031690565b906106d660208201516001600160a01b031690565b916040946106e686840151151590565b92015191813b1561040157945163096f9e0960e21b81523360048201526001600160a01b03909316602484015293151560448301526064820152916000908390818381608481016103c9565b60068161074184979694611370565b16036108215750508261076c61037b61037b60206106ac61033461032d60806107c49a9b018861128b565b9061078160208201516001600160a01b031690565b60409182015182516314890dcb60e21b81523360048201526001600160a01b03909216602483015260448201529390918291859190829060009082906064820190565b03925af180156103fc576102c39360009081926107f9575b509151602081019290925260408201526106148160608101610606565b6106149250610606915061081990843d861161066c5761065c8183611124565b9250906107dc565b60078161082d87611370565b16036108b257505061086b916001600160a01b0361085c61085461032d608088018861128b565b810190611d62565b969293949891959098166121ae565b60409261088761037b61037b6020878d01358096019c0161147e565b93843b15610401576000966103c99151998a97889687956307e76fc160e21b87523360048801611dc3565b6008816108be87611370565b16036109af57506020846108e961037b61037b846106ac6106a461032d608061094c9c9d018861128b565b818301516001600160a01b031691600060409561090887840151151590565b9201518651630cb0f5b760e31b81523360048201526001600160a01b0390951660248601529115156044850152606484019190915291958692839182906084820190565b03925af19283156103fc576102c393610606926106149260009261097e575b5051928391602083019190602083019252565b6109a191925060203d6020116109a8575b6109998183611124565b810190611d3f565b903861096b565b503d61098f565b6009816109bb87611370565b1603610a4957506020846109e661037b61037b846106ac6106a461032d608061094c9c9d018861128b565b818301516001600160a01b0316916000604095610a0587840151151590565b920151865163cd0211eb60e01b81523360048201526001600160a01b0390951660248601529115156044850152606484019190915291958692839182906084820190565b9081600d8693610a5885611370565b1603610ae457505061037b81602061037b95610ab6610a8a610a8261032d6080604099018761128b565b810190611aa0565b9597949b939e929699919c909a610aaa6001600160a01b03809c166121ae565b01358098019e0161147e565b95863b15610401576000986103c9936040519c8d9a8b998a9863284e0d6960e01b8a52163360048a01611c2a565b909181610af2600e92611370565b1603610b9e5750506001600160a01b03610b31610b20610b1861032d608088018861128b565b8101906116e3565b9994989295919896909396166121ae565b60408301350196610b4a61037b61037b6020860161147e565b90813b1561040157600095610b826040926001600160a01b039584519b8c998a98899663e91ca19560e01b885216336004880161178f565b03930135905af19182156103fc576102c3926103e35750611212565b600f81610baa87611370565b1603610c5957506080610bcd610bc561032d8388018861128b565b810190611526565b93610be261035086516001600160a01b031690565b604092610bfe61037b61037b6020878b01358096019a0161147e565b91610c1360208801516001600160a01b031690565b60a0610c2b878a0151948a0151968a015161ffff1690565b98015195843b15610401576000966103c99151998a978896879563343b766560e01b8752336004880161159a565b60109150610c68859495611370565b1603610cf857816001600160a01b03610c95610c8d61032d6080610ca697018561128b565b810190611410565b9497959a9299919396909a166121ae565b60408401350197610cbf61037b61037b6020870161147e565b91823b1561040157610b826001600160a01b039460409360009985519c8d9a8b998a97639f3a056d60e01b895216923360048901611488565b60405162461bcd60e51b815260206004820152601a60248201527f4d61676e657461723a20616374696f6e206e6f742076616c69640000000000006044820152606490fd5b0390fd5b610d7c610d51608087018761128b565b9050610d74604051610d6f8161060689602083019190602083019252565b6112be565b901515611338565b61026f565b600091031261040157565b34610401576000366003190112610401576020604051428152f35b346104015760003660031901126104015760206040516000194301408152f35b34610401576000366003190112610401576020604051468152f35b34610401576000366003190112610401576020604051488152f35b34610401576000366003190112610401576020604051438152f35b6001600160a01b0381160361040157565b3590610e3482610e18565b565b34610401576020366003190112610401576020600435610e5581610e18565b31604051908152f35b3461040157600080600319360112610eb157610e78611010565b806001600160a01b038154811981168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b80fd5b34610401576000366003190112610401576020604051448152f35b34610401576000366003190112610401576020604051458152f35b346104015760003660031901126104015760206001600160a01b0360005416604051908152f35b34610401576000366003190112610401576020604051418152f35b34610401576020366003190112610401576020604051600435408152f35b3461040157602036600319011261040157600435610f6781610e18565b610f6f611010565b6001600160a01b038091168015610fbc576000918254826001600160a01b03198216178455167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b6001600160a01b0360005416330361102457565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff811161109257604052565b611068565b6060810190811067ffffffffffffffff82111761109257604052565b60c0810190811067ffffffffffffffff82111761109257604052565b610100810190811067ffffffffffffffff82111761109257604052565b6080810190811067ffffffffffffffff82111761109257604052565b60e0810190811067ffffffffffffffff82111761109257604052565b90601f8019910116810190811067ffffffffffffffff82111761109257604052565b604051906040820182811067ffffffffffffffff82111761109257604052565b60405190610120820182811067ffffffffffffffff82111761109257604052565b67ffffffffffffffff81116110925760051b60200190565b906111a982611187565b6040906111b882519182611124565b83815280936111c9601f1991611187565b0190600090815b8381106111de575050505050565b8451908582019180831067ffffffffffffffff841117611092576020928752848152826060818301528285010152016111d0565b60001981146112215760010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b919081101561126f5760051b81013590609e1981360301821215610401570190565b611237565b8015150361040157565b3561128881611274565b90565b903590601e1981360301821215610401570180359067ffffffffffffffff82116104015760200191813603831361040157565b90610e34604c60405180947f4d61676e657461723a204d697373696e672063616c6c20666f7220616374696f60208301526b0dc40eed2e8d040d2dcc8caf60a31b604083015261131781518092602086860191016100fc565b810103602c810185520183611124565b90602061128892818152019061011f565b156113405750565b60405162461bcd60e51b815260206004820152908190610d3d90602483019061011f565b61ffff81160361040157565b3561128881611364565b909291928360041161040157831161040157600401916003190190565b3590610e3482611364565b67ffffffffffffffff811161109257601f01601f191660200190565b81601f82011215610401578035906113d5826113a2565b926113e36040519485611124565b8284526020838301011161040157816000926020809301838601378301015290565b3590610e3482611274565b60e08183031261040157803561142581610e18565b92602082013592604083013592606081013561144081611364565b92608082013561144f81610e18565b9260a083013567ffffffffffffffff81116104015760c0916114729185016113be565b92013561128881611274565b3561128881610e18565b95926114ce9461ffff9160c09793949a999a6001600160a01b038096168a5260208a0152604089015216606087015216608085015260e060a085015260e084019061011f565b931515910152565b6040513d6000823e3d90fd5b9190826060910312610401576040516114fa81611097565b604080829480358452602081013561151181610e18565b602085015201359161152283611274565b0152565b9061010082820312610401576115929060a060405193611545856110b3565b803561155081610e18565b8552602081013561156081610e18565b60208601526040810135604086015260608101356060860152608081013561158781611364565b6080860152016114e2565b60a082015290565b9196959394610e349560a09461ffff9361010086019a6001600160a01b03809216875216602086015260408501526060840152166080820152019060408091805184526001600160a01b03602082015116602085015201511515910152565b359060ff8216820361040157565b81601f820112156104015780359061161e82611187565b9260409261162e84519586611124565b808552602091828087019260081b85010193818511610401578301915b84831061165b5750505050505090565b610100838303126104015783610100918751611676816110cf565b61167f86610e29565b815261168c838701610e29565b8382015261169b898701610e29565b89820152606080870135908201526080808701359082015260a06116c08188016115f9565b9082015260c0808701359082015260e0808701359082015281520192019161164b565b9190918083039061014082126104015780356116fe81610e18565b93602082013561170d81610e18565b936060604084013561171e81611364565b94605f1901126104015760405161173481611097565b60608401358152608084013561174981610e18565b602082015260a084013561175c81610e18565b60408201529261176f8360c083016114e2565b9261012082013567ffffffffffffffff8111610401576112889201611607565b94929192610140808701956001600160a01b03809416885283602096168689015261ffff60409516858901528561016082519960609a8b820152868881858701511695608096878501520151169460a0958683015261181260c0978884019060408091805184526001600160a01b03602082015116602085015201511515910152565b6101208201528b51809a52019901976000955b888710611839575050505050505050505090565b90919293949596979899886101006001928d518a81511682528a8482015116848301528a86820151168683015286810151878301528781015188830152611888898201518a84019060ff169052565b808a0151828b015260e09081015190820152019b0199989701959493929190611825565b9190826080910312610401576040516118c4816110ec565b6060808294803584526020810135602085015260408101356118e581610e18565b604085015201359161152283610e18565b9190608083820312610401576040519061190f826110ec565b819380358352602081013561192381611274565b6020840152604081013561193681611364565b604084015260608101359167ffffffffffffffff83116104015760609261195d92016113be565b910152565b91908260809103126104015760405161197a816110ec565b606080829480358452602081013561199181610e18565b602085015260408101356119a481611274565b604085015201359161152283611274565b81601f82011215610401578035906119cc82611187565b926040906119dc82519586611124565b838552602091828601918361012080970286010194818611610401578401925b858410611a0d575050505050505090565b868483031261040157848791611a21611166565b611a2a87610e29565b8152611a37838801611405565b83820152611a46868801610e29565b868201526060611a57818901610e29565b908201526080808801359082015260a0808801359082015260c0611a7c8189016115f9565b9082015260e0808801359082015261010080880135908201528152019301926119fc565b906101c08282031261040157611ab582610e29565b92611ac260208401610e29565b92611acf60408201611397565b9267ffffffffffffffff60608301358181116104015782611af19185016113be565b93611aff83608086016118ac565b936101008101358381116104015784611b199183016118f6565b93611b28816101208401611962565b936101a08301359081116104015761128892016119b5565b9060806060611288938051845260208101511515602085015261ffff6040820151166040850152015191816060820152019061011f565b90815180825260208080930193019160005b828110611b97575050505090565b909192938261012060019287516001600160a01b03815116825283810151151584830152611bd5604080830151908401906001600160a01b03169052565b6060818101516001600160a01b0316908301526080818101519083015260a0808201519083015260c08082015160ff169083015260e08181015190830152610100908101519082015201950193929101611b89565b94916060611c6d611cda9661ffff611ca1976112889d9b966001600160a01b0396878092168d521660208c01521660408a01526101c080848b015289019061011f565b9380516080890152602081015160a08901528260408201511660c089015201511660e0860152848203610100860152611b40565b845161012084015260208501516001600160a01b0316610140840152604085015115156101608401526060909401511515610180830152565b6101a0818403910152611b77565b9081608091031261040157606060405191611d02836110ec565b8035611d0d81610e18565b83526020810135611d1d81610e18565b60208401526040810135611d3081611274565b60408401520135606082015290565b90816020910312610401575190565b805182101561126f5760209160051b010190565b909160c082840312610401578135611d7981610e18565b926020830135611d8881611364565b92604081013592606082013592608083013567ffffffffffffffff81116104015760a091611db79185016113be565b92013561128881610e18565b9490929360a09461ffff611e02949998996001600160a01b0380971689521660208801526040870152606086015260c0608086015260c085019061011f565b9416910152565b90816060910312610401576040805191611e2283611097565b8035611e2d81610e18565b83526020810135611e3d81610e18565b60208401520135604082015290565b9190826040910312610401576020825192015190565b908160a0910312610401576040519060a082019082821067ffffffffffffffff83111761109257608091604052803583526020810135611ea181610e18565b60208401526040810135611eb481610e18565b6040840152606081013560608401520135608082015290565b91909160a081840312610401578035611ee581610e18565b926020820135611ef481611364565b92604083013592606081013592608082013567ffffffffffffffff928382116104015701906060828203126104015760405192611f3084611097565b8235611f3b81610e18565b84526020830135611f4b81610e18565b6020850152604083013590811161040157611f6692016113be565b604082015290565b939061128895916101009461ffff6040956001600160a01b03809516895216602088015284870152606086015260a060808601528082511660a086015260208201511660c0850152015191606060e0820152019061011f565b15611fce57565b60405162461bcd60e51b815260206004820152601860248201527f4d61676e657461723a2076616c7565206d69736d6174636800000000000000006044820152606490fd5b908092918237016000815290565b3d1561204c573d90612032826113a2565b916120406040519384611124565b82523d6000602084013e565b606090565b826004116104015760e060031983858101030112610401576000928380936120ea6001600160a01b0360405161208681611108565b60048401359061209582610e18565b81815260248501356120a681610e18565b602082015260448501356040820152606485013560608201526120cb608486016115f9565b608082015260a485013560a082015260c060c4860135910152166121ae565b6120f960405180948193612013565b03925af190612106612021565b9115908161211c575b506121175750565b612204565b9050153861210f565b60c09261213381808561137a565b90809591810103126104015760008094936120ea6001600160a01b03839660405161215d816110b3565b60a08083359361216c85610e18565b848452602081013561217d81610e18565b602085015260408101356040850152612198606082016115f9565b6060850152608081013560808501520135910152165b6001600160a01b031633036121bf57565b60405162461bcd60e51b815260206004820152601660248201527f4d61676e657461723a20756e617574686f72697a6564000000000000000000006044820152606490fd5b604481511061229d576004810151810190602081602484019303126104015760248101519067ffffffffffffffff82116104015701908060438301121561040157602482015191612254836113a2565b916122626040519384611124565b8383526044848301011161040157610d3d926122859160446020850191016100fc565b60405162461bcd60e51b815291829160048301611327565b60405162461bcd60e51b815260206004820152600e60248201527f526561736f6e20756e6b6e6f776e0000000000000000000000000000000000006044820152606490fdfea2646970667358221220e9721016d658c6c5ebe4a02a26b5b7b3320431616da721773e3faf529e365e0664736f6c63430008120033";

type MagnetarConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MagnetarConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Magnetar__factory extends ContractFactory {
  constructor(...args: MagnetarConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Magnetar";
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Magnetar> {
    return super.deploy(_owner, overrides || {}) as Promise<Magnetar>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  override attach(address: string): Magnetar {
    return super.attach(address) as Magnetar;
  }
  override connect(signer: Signer): Magnetar__factory {
    return super.connect(signer) as Magnetar__factory;
  }
  static readonly contractName: "Magnetar";

  public readonly contractName: "Magnetar";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MagnetarInterface {
    return new utils.Interface(_abi) as MagnetarInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Magnetar {
    return new Contract(address, _abi, signerOrProvider) as Magnetar;
  }
}
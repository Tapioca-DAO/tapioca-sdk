/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  TricryptoLiquidityPoolMock,
  TricryptoLiquidityPoolMockInterface,
} from "../../../../deprecated/curve/mocks/TricryptoLiquidityPoolMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_weth",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256[3]",
        name: "amounts",
        type: "uint256[3]",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "add_liquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[3]",
        name: "amounts",
        type: "uint256[3]",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    name: "calc_token_amount",
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
        internalType: "uint256",
        name: "token_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "calc_withdraw_one_coin",
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
        internalType: "uint256",
        name: "_token_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "remove_liquidity_one_coin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract ERC20Mock",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "weth",
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
  "0x608060405234801561001057600080fd5b506040516130e43803806130e483398101604081905261002f916101dd565b600180546001600160a01b0319166001600160a01b03831617905560405169021e19e0c9bab2400000906012903090610067906101d0565b60a0808252600e908201526d496e707574546f6b656e4d6f636b60901b60c082015260e0602082018190526003908201526249544d60e81b610100820152604081019390935260ff90911660608301526001600160a01b0316608082015261012001604051809103906000f0801580156100e5573d6000803e3d6000fd5b50600080546001600160a01b0319166001600160a01b0392909216918217815560408051636a53a25d60e11b8152905191929163d4a744ba916004808201926020929091908290030181865afa158015610143573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610167919061020d565b905080156101c9576000805460408051631d0dc26760e01b815290516001600160a01b0390921692631d0dc2679260048084019382900301818387803b1580156101b057600080fd5b505af11580156101c4573d6000803e3d6000fd5b505050505b505061022f565b61275d8061098783390190565b6000602082840312156101ef57600080fd5b81516001600160a01b038116811461020657600080fd5b9392505050565b60006020828403121561021f57600080fd5b8151801515811461020657600080fd5b6107498061023e6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80633883e119146100675780633fc8cef31461008d5780634515cef3146100b85780634fb08c5e146100cd578063f1dc3cc9146100df578063fc0c546a146100f2575b600080fd5b61007a6100753660046105cb565b610105565b6040519081526020015b60405180910390f35b6001546100a0906001600160a01b031681565b6040516001600160a01b039091168152602001610084565b6100cb6100c6366004610603565b610111565b005b61007a6100db36600461062e565b5090565b6100cb6100ed366004610650565b61020b565b6000546100a0906001600160a01b031681565b60408201355b92915050565b60015461012d906001600160a01b03163330604086013561029e565b60005460408051637c928fe960e01b81529084013560048201526001600160a01b0390911690637c928fe990602401600060405180830381600087803b15801561017657600080fd5b505af115801561018a573d6000803e3d6000fd5b50506000546040805163a9059cbb60e01b81523360048201529086013560248201526001600160a01b03909116925063a9059cbb91506044016020604051808303816000875af11580156101e2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610206919061067c565b505050565b6000546040516323b872dd60e01b8152336004820152306024820152604481018590526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610262573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610286919061067c565b50600154610206906001600160a01b0316338561030f565b6040516001600160a01b03808516602483015283166044820152606481018290526103099085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915261033f565b50505050565b6040516001600160a01b03831660248201526044810182905261020690849063a9059cbb60e01b906064016102d2565b6000610394826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166104199092919063ffffffff16565b90508051600014806103b55750808060200190518101906103b5919061067c565b6102065760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084015b60405180910390fd5b60606104288484600085610430565b949350505050565b6060824710156104915760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610410565b600080866001600160a01b031685876040516104ad91906106c4565b60006040518083038185875af1925050503d80600081146104ea576040519150601f19603f3d011682016040523d82523d6000602084013e6104ef565b606091505b50915091506105008783838761050b565b979650505050505050565b6060831561057a578251600003610573576001600160a01b0385163b6105735760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610410565b5081610428565b610428838381511561058f5781518083602001fd5b8060405162461bcd60e51b815260040161041091906106e0565b806060810183101561010b57600080fd5b80151581146105c857600080fd5b50565b600080608083850312156105de57600080fd5b6105e884846105a9565b915060608301356105f8816105ba565b809150509250929050565b6000806080838503121561061657600080fd5b61062084846105a9565b946060939093013593505050565b6000806040838503121561064157600080fd5b50508035926020909101359150565b60008060006060848603121561066557600080fd5b505081359360208301359350604090920135919050565b60006020828403121561068e57600080fd5b8151610699816105ba565b9392505050565b60005b838110156106bb5781810151838201526020016106a3565b50506000910152565b600082516106d68184602087016106a0565b9190910192915050565b60208152600082518060208401526106ff8160408501602087016106a0565b601f01601f1916919091016040019291505056fea264697066735822122041713089d4bbb025c19ff7e08621856e519323d4376e6ac3b0d5c03e7c11c65c64736f6c63430008120033610160604052600c8054600160301b600160d01b03191690553480156200002557600080fd5b506040516200275d3803806200275d833981016040819052620000489162000521565b6040805180820190915260018152603160f81b602082015285908190818760036200007483826200065f565b5060046200008382826200065f565b505050620000a1600583620001c360201b62000e5d1790919060201c565b61012052620000be816006620001c3602090811b62000e5d17901c565b61014052815160208084019190912060e052815190820120610100524660a0526200014c60e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c05250620001613362000213565b600c805460ff191660ff84169081179091556200018090600a6200083e565b6200018e906103e862000856565b600b556200019c8162000265565b620001a83084620002e8565b5050600c805461ff00191661010017905550620008e0915050565b6000602083511015620001e357620001db83620003ab565b90506200020d565b82620001fa83620003ee60201b62000e8e1760201c565b906200020790826200065f565b5060ff90505b92915050565b600980546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6200026f620003f1565b6001600160a01b038116620002da5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b620002e58162000213565b50565b6001600160a01b038216620003405760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401620002d1565b806002600082825462000354919062000870565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b600080829050601f81511115620003d9578260405163305a27a960e01b8152600401620002d1919062000886565b8051620003e682620008bb565b179392505050565b90565b6009546001600160a01b031633146200044d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401620002d1565b565b505050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004875781810151838201526020016200046d565b50506000910152565b600082601f830112620004a257600080fd5b81516001600160401b0380821115620004bf57620004bf62000454565b604051601f8301601f19908116603f01168101908282118183101715620004ea57620004ea62000454565b816040528381528660208588010111156200050457600080fd5b620005178460208301602089016200046a565b9695505050505050565b600080600080600060a086880312156200053a57600080fd5b85516001600160401b03808211156200055257600080fd5b6200056089838a0162000490565b965060208801519150808211156200057757600080fd5b50620005868882890162000490565b94505060408601519250606086015160ff81168114620005a557600080fd5b60808701519092506001600160a01b0381168114620005c357600080fd5b809150509295509295909350565b600181811c90821680620005e657607f821691505b6020821081036200060757634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200044f57600081815260208120601f850160051c81016020861015620006365750805b601f850160051c820191505b81811015620006575782815560010162000642565b505050505050565b81516001600160401b038111156200067b576200067b62000454565b62000693816200068c8454620005d1565b846200060d565b602080601f831160018114620006cb5760008415620006b25750858301515b600019600386901b1c1916600185901b17855562000657565b600085815260208120601f198616915b82811015620006fc57888601518255948401946001909101908401620006db565b50858210156200071b5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b600181815b80851115620007825781600019048211156200076657620007666200072b565b808516156200077457918102915b93841c939080029062000746565b509250929050565b6000826200079b575060016200020d565b81620007aa575060006200020d565b8160018114620007c35760028114620007ce57620007ee565b60019150506200020d565b60ff841115620007e257620007e26200072b565b50506001821b6200020d565b5060208310610133831016604e8410600b841016171562000813575081810a6200020d565b6200081f838362000741565b80600019048211156200083657620008366200072b565b029392505050565b60006200084f60ff8416836200078a565b9392505050565b80820281158282048414176200020d576200020d6200072b565b808201808211156200020d576200020d6200072b565b6020815260008251806020840152620008a78160408501602087016200046a565b601f01601f19169190910160400192915050565b80516020808301519190811015620006075760001960209190910360031b1b16919050565b60805160a05160c05160e051610100516101205161014051611e226200093b6000396000610a7301526000610a48015260006114370152600061140f0152600061136a01526000611394015260006113be0152611e226000f3fe6080604052600436106101f25760003560e01c80637c928fe91161010d578063acb2ad6f116100a0578063d6b5a2db1161006f578063d6b5a2db146105a4578063dd62ed3e146105c4578063e01d55c5146105e4578063e74b981b14610604578063f2fde38b1461062457600080fd5b8063acb2ad6f14610525578063d0e30db01461055d578063d4a744ba14610565578063d505accf1461058457600080fd5b806395d89b41116100dc57806395d89b41146104ba578063996517cf146104cf578063a457c2d7146104e5578063a9059cbb1461050557600080fd5b80637c928fe9146104345780637ecebe001461045457806384b0196e146104745780638da5cb5b1461049c57600080fd5b80632e9ef97611610185578063449a52f811610154578063449a52f81461038a57806346904840146103aa57806370a08231146103e9578063715018a61461041f57600080fd5b80632e9ef97614610313578063313ce567146103335780633644e51514610355578063395093511461036a57600080fd5b806321442ec9116101c157806321442ec91461028f57806322ae81af146102bc57806323b872dd146102d35780632e1a7d4d146102f357600080fd5b806306fdde03146101fe578063095ea7b31461022957806318160ddd146102595780631d0dc2671461027857600080fd5b366101f957005b600080fd5b34801561020a57600080fd5b50610213610644565b60405161022091906119b3565b60405180910390f35b34801561023557600080fd5b506102496102443660046119e9565b6106d6565b6040519015158152602001610220565b34801561026557600080fd5b506002545b604051908152602001610220565b34801561028457600080fd5b5061028d6106f0565b005b34801561029b57600080fd5b5061026a6102aa366004611a13565b600a6020526000908152604090205481565b3480156102c857600080fd5b5061026a6201518081565b3480156102df57600080fd5b506102496102ee366004611a2e565b610715565b3480156102ff57600080fd5b5061028d61030e366004611a6a565b61079b565b34801561031f57600080fd5b5061028d61032e366004611a83565b610857565b34801561033f57600080fd5b50600c5460405160ff9091168152602001610220565b34801561036157600080fd5b5061026a6108db565b34801561037657600080fd5b506102496103853660046119e9565b6108ea565b34801561039657600080fd5b5061028d6103a53660046119e9565b61090c565b3480156103b657600080fd5b50600c546103d190600160301b90046001600160a01b031681565b6040516001600160a01b039091168152602001610220565b3480156103f557600080fd5b5061026a610404366004611a13565b6001600160a01b031660009081526020819052604090205490565b34801561042b57600080fd5b5061028d610922565b34801561044057600080fd5b5061028d61044f366004611a6a565b610936565b34801561046057600080fd5b5061026a61046f366004611a13565b610a1c565b34801561048057600080fd5b50610489610a3a565b6040516102209796959493929190611aa9565b3480156104a857600080fd5b506009546001600160a01b03166103d1565b3480156104c657600080fd5b50610213610ac3565b3480156104db57600080fd5b5061026a600b5481565b3480156104f157600080fd5b506102496105003660046119e9565b610ad2565b34801561051157600080fd5b506102496105203660046119e9565b610b58565b34801561053157600080fd5b50600c546105489062010000900463ffffffff1681565b60405163ffffffff9091168152602001610220565b61028d610bc0565b34801561057157600080fd5b50600c5461024990610100900460ff1681565b34801561059057600080fd5b5061028d61059f366004611b3f565b610c01565b3480156105b057600080fd5b5061028d6105bf366004611a6a565b610d65565b3480156105d057600080fd5b5061026a6105df366004611bb2565b610d78565b3480156105f057600080fd5b5061028d6105ff366004611a6a565b610da3565b34801561061057600080fd5b5061028d61061f366004611a13565b610db0565b34801561063057600080fd5b5061028d61063f366004611a13565b610de7565b60606003805461065390611be5565b80601f016020809104026020016040519081016040528092919081815260200182805461067f90611be5565b80156106cc5780601f106106a1576101008083540402835291602001916106cc565b820191906000526020600020905b8154815290600101906020018083116106af57829003601f168201915b5050505050905090565b6000336106e4818585610e91565b60019150505b92915050565b6106f8610fb6565b600c805461ff001981166101009182900460ff1615909102179055565b600c546000908190620186a0906107389062010000900463ffffffff1685611c2f565b6107429190611c46565b905060006107508285611c68565b90503361075e878284611010565b61076987878461108a565b821561078e57600c5461078e908890600160301b90046001600160a01b03168561108a565b5060019695505050505050565b336000908152602081905260409020548111156107e75760405162461bcd60e51b815260206004820152600560248201526422b93937b960d91b60448201526064015b60405180910390fd5b6107f1338261122e565b604051339082156108fc029083906000818181858888f1935050505015801561081e573d6000803e3d6000fd5b5060405181815233907f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b659060200160405180910390a250565b61085f610fb6565b620186a063ffffffff8216106108b75760405162461bcd60e51b815260206004820152601760248201527f45524332304d6f636b3a2066656520746f6f206869676800000000000000000060448201526064016107de565b600c805463ffffffff909216620100000265ffffffff000019909216919091179055565b60006108e561135d565b905090565b6000336106e48185856108fd8383610d78565b6109079190611c7b565b610e91565b610914610fb6565b61091e8282611488565b5050565b61092a610fb6565b6109346000611547565b565b600c54610100900460ff16156109fd57600b548111156109985760405162461bcd60e51b815260206004820152601960248201527f45524332304d6f636b3a20616d6f756e7420746f6f206269670000000000000060448201526064016107de565b336000908152600a602052604090205442906109b8906201518090611c7b565b11156109fd5760405162461bcd60e51b815260206004820152601460248201527345524332304d6f636b3a20746f6f206561726c7960601b60448201526064016107de565b336000818152600a60205260409020429055610a199082611488565b50565b6001600160a01b0381166000908152600760205260408120546106ea565b600060608082808083610a6e7f00000000000000000000000000000000000000000000000000000000000000006005611599565b610a997f00000000000000000000000000000000000000000000000000000000000000006006611599565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b60606004805461065390611be5565b60003381610ae08286610d78565b905083811015610b405760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016107de565b610b4d8286868403610e91565b506001949350505050565b600c546000908190620186a090610b7b9062010000900463ffffffff1685611c2f565b610b859190611c46565b9050610b9b3385610b968487611c68565b61108a565b80156106e457600c546106e4903390600160301b90046001600160a01b03168361108a565b610bca3334611488565b60405134815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a2565b83421115610c515760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e6500000060448201526064016107de565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9888888610c808c61163d565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000610cdb82611665565b90506000610ceb82878787611692565b9050896001600160a01b0316816001600160a01b031614610d4e5760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e6174757265000060448201526064016107de565b610d598a8a8a610e91565b50505050505050505050565b610d6d610fb6565b610a1930338361108a565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610dab610fb6565b600b55565b610db8610fb6565b600c80546001600160a01b03909216600160301b026601000000000000600160d01b0319909216919091179055565b610def610fb6565b6001600160a01b038116610e545760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016107de565b610a1981611547565b6000602083511015610e7957610e72836116ba565b90506106ea565b81610e848482611cf2565b5060ff90506106ea565b90565b6001600160a01b038316610ef35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016107de565b6001600160a01b038216610f545760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016107de565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6009546001600160a01b031633146109345760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016107de565b600061101c8484610d78565b9050600019811461108457818110156110775760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016107de565b6110848484848403610e91565b50505050565b6001600160a01b0383166110ee5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016107de565b6001600160a01b0382166111505760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016107de565b6001600160a01b038316600090815260208190526040902054818110156111c85760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016107de565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3611084565b6001600160a01b03821661128e5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016107de565b6001600160a01b038216600090815260208190526040902054818110156113025760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016107de565b6001600160a01b0383166000818152602081815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9101610fa9565b505050565b6000306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480156113b657507f000000000000000000000000000000000000000000000000000000000000000046145b156113e057507f000000000000000000000000000000000000000000000000000000000000000090565b6108e5604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b6001600160a01b0382166114de5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016107de565b80600260008282546114f09190611c7b565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b600980546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b606060ff83146115ac57610e72836116f8565b8180546115b890611be5565b80601f01602080910402602001604051908101604052809291908181526020018280546115e490611be5565b80156116315780601f1061160657610100808354040283529160200191611631565b820191906000526020600020905b81548152906001019060200180831161161457829003601f168201915b505050505090506106ea565b6001600160a01b03811660009081526007602052604090208054600181018255905b50919050565b60006106ea61167261135d565b8360405161190160f01b8152600281019290925260228201526042902090565b60008060006116a387878787611737565b915091506116b0816117fb565b5095945050505050565b600080829050601f815111156116e5578260405163305a27a960e01b81526004016107de91906119b3565b80516116f082611db2565b179392505050565b6060600061170583611945565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561176e57506000905060036117f2565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156117c2573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166117eb576000600192509250506117f2565b9150600090505b94509492505050565b600081600481111561180f5761180f611dd6565b036118175750565b600181600481111561182b5761182b611dd6565b036118785760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016107de565b600281600481111561188c5761188c611dd6565b036118d95760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016107de565b60038160048111156118ed576118ed611dd6565b03610a195760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016107de565b600060ff8216601f8111156106ea57604051632cd44ac360e21b815260040160405180910390fd5b6000815180845260005b8181101561199357602081850181015186830182015201611977565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006119c6602083018461196d565b9392505050565b80356001600160a01b03811681146119e457600080fd5b919050565b600080604083850312156119fc57600080fd5b611a05836119cd565b946020939093013593505050565b600060208284031215611a2557600080fd5b6119c6826119cd565b600080600060608486031215611a4357600080fd5b611a4c846119cd565b9250611a5a602085016119cd565b9150604084013590509250925092565b600060208284031215611a7c57600080fd5b5035919050565b600060208284031215611a9557600080fd5b813563ffffffff811681146119c657600080fd5b60ff60f81b881681526000602060e081840152611ac960e084018a61196d565b8381036040850152611adb818a61196d565b606085018990526001600160a01b038816608086015260a0850187905284810360c0860152855180825283870192509083019060005b81811015611b2d57835183529284019291840191600101611b11565b50909c9b505050505050505050505050565b600080600080600080600060e0888a031215611b5a57600080fd5b611b63886119cd565b9650611b71602089016119cd565b95506040880135945060608801359350608088013560ff81168114611b9557600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215611bc557600080fd5b611bce836119cd565b9150611bdc602084016119cd565b90509250929050565b600181811c90821680611bf957607f821691505b60208210810361165f57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176106ea576106ea611c19565b600082611c6357634e487b7160e01b600052601260045260246000fd5b500490565b818103818111156106ea576106ea611c19565b808201808211156106ea576106ea611c19565b634e487b7160e01b600052604160045260246000fd5b601f82111561135857600081815260208120601f850160051c81016020861015611ccb5750805b601f850160051c820191505b81811015611cea57828155600101611cd7565b505050505050565b815167ffffffffffffffff811115611d0c57611d0c611c8e565b611d2081611d1a8454611be5565b84611ca4565b602080601f831160018114611d555760008415611d3d5750858301515b600019600386901b1c1916600185901b178555611cea565b600085815260208120601f198616915b82811015611d8457888601518255948401946001909101908401611d65565b5085821015611da25787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b8051602080830151919081101561165f5760001960209190910360031b1b16919050565b634e487b7160e01b600052602160045260246000fdfea2646970667358221220b39087db47c6b4396ddc99e9215c3935bef0f2ebc4257b37b69cebde8cb5be0464736f6c63430008120033";

type TricryptoLiquidityPoolMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TricryptoLiquidityPoolMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TricryptoLiquidityPoolMock__factory extends ContractFactory {
  constructor(...args: TricryptoLiquidityPoolMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TricryptoLiquidityPoolMock";
  }

  override deploy(
    _weth: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TricryptoLiquidityPoolMock> {
    return super.deploy(
      _weth,
      overrides || {}
    ) as Promise<TricryptoLiquidityPoolMock>;
  }
  override getDeployTransaction(
    _weth: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_weth, overrides || {});
  }
  override attach(address: string): TricryptoLiquidityPoolMock {
    return super.attach(address) as TricryptoLiquidityPoolMock;
  }
  override connect(signer: Signer): TricryptoLiquidityPoolMock__factory {
    return super.connect(signer) as TricryptoLiquidityPoolMock__factory;
  }
  static readonly contractName: "TricryptoLiquidityPoolMock";

  public readonly contractName: "TricryptoLiquidityPoolMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TricryptoLiquidityPoolMockInterface {
    return new utils.Interface(_abi) as TricryptoLiquidityPoolMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TricryptoLiquidityPoolMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TricryptoLiquidityPoolMock;
  }
}

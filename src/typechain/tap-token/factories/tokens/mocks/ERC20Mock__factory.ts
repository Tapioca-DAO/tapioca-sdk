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
  ERC20Mock,
  ERC20MockInterface,
} from "../../../tokens/mocks/ERC20Mock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_initialAmount",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
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
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
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
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINT_WINDOW",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "extractTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_val",
        type: "uint256",
      },
    ],
    name: "freeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintLimit",
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
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mintTo",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "mintedAt",
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
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
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
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
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_newVal",
        type: "uint256",
      },
    ],
    name: "updateMintLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6101406040818152346200066b5762001b06803803809162000022828662000670565b843982019060a0838303126200066b5782516001600160401b0381116200066b57826200005191850162000694565b602084015190926001600160401b0382116200066b576200007491850162000694565b818401519060608501519460ff86168096036200066b5760800151906001600160a01b03821682036200066b578351948585016001600160401b038111878210176200041a57855260018652603160f81b6020870190815281519092906001600160401b0381116200041a57600354600181811c9116801562000660575b60208210146200054057601f8111620005f6575b50806020601f82116001146200056d5760009162000561575b508160011b916000199060031b1c1916176003555b8051906001600160401b0382116200041a5760045490600182811c9216801562000556575b6020831014620005405781601f849311620004cb575b50602090601f83116001146200043c5760009262000430575b50508160011b916000199060031b1c1916176004555b60208151910120945190208460e052610100958187524660a05284519060208201927f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f978885528784015260608301524660808301523060a083015260a0825260c082019282841060018060401b038511176200041a57838752825190206080523060c05261012096875262000234336200070b565b8060ff19600a541617600a55604d81116200032a57600a0a6103e890808202918204036200032a57600955600754336001600160a01b0390911603620003d75750506001600160a01b03811615620003845762000291906200070b565b301562000340576002548181018091116200032a5760025530600052600060205281600020818154019055815190815260007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60203093a351906113b19283620007558439608051836111e7015260a051836112b3015260c051836111b8015260e051836112360152518261125c015251816112130152f35b634e487b7160e01b600052601160045260246000fd5b815162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606490fd5b825162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b907f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657261010460649362461bcd60e51b8452602060c4820152602060e48201520152fd5b634e487b7160e01b600052604160045260246000fd5b01519050388062000188565b6004600090815293507f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b91905b601f1984168510620004af576001945083601f1981161062000495575b505050811b016004556200019e565b015160001960f88460031b161c1916905538808062000486565b8181015183556020948501946001909301929091019062000469565b60046000529091507f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b601f840160051c8101916020851062000535575b90601f859493920160051c01905b8181106200052557506200016f565b6000815584935060010162000516565b909150819062000508565b634e487b7160e01b600052602260045260246000fd5b91607f169162000159565b9050830151386200011f565b600360009081527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b9250601f198416905b818110620005dd57509083600194939210620005c3575b5050811b0160035562000134565b85015160001960f88460031b161c191690553880620005b5565b9192602060018192868a0151815501940192016200059e565b60036000527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b601f830160051c8101916020841062000655575b601f0160051c01905b81811062000648575062000106565b6000815560010162000639565b909150819062000630565b90607f1690620000f2565b600080fd5b601f909101601f19168101906001600160401b038211908210176200041a57604052565b919080601f840112156200066b578251906001600160401b0382116200041a5760405191602091620006d0601f8301601f191684018562000670565b8184528282870101116200066b5760005b818110620006f757508260009394955001015290565b8581018301518482018401528201620006e1565b600780546001600160a01b039283166001600160a01b0319821681179092559091167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a356fe6080604081815260048036101561001557600080fd5b600092833560e01c90816306fdde0314610ae257508063095ea7b314610ab857806318160ddd14610a9957806321442ec914610a6257806322ae81af14610a4457806323b872dd14610979578063313ce567146109575780633644e5151461093357806339509351146108e4578063449a52f8146108b757806370a0823114610881578063715018a6146108195780637c928fe9146107285780637ecebe00146106f15780638da5cb5b146106c957806395d89b41146105c5578063996517cf146105a6578063a457c2d7146104e6578063a9059cbb146104b5578063d505accf146102af578063d6b5a2db14610285578063dd62ed3e1461023c578063e01d55c5146102165763f2fde38b1461012b57600080fd5b3461021257602036600319011261021257610144610c21565b9061014d610c52565b6001600160a01b038092169283156101a95750506007548273ffffffffffffffffffffffffffffffffffffffff19821617600755167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152fd5b8280fd5b83823461023857602036600319011261023857610231610c52565b3560095580f35b5080fd5b5050346102385780600319360112610238578060209261025a610c21565b610262610c3c565b6001600160a01b0391821683526001865283832091168252845220549051908152f35b838234610238576020366003190112610238576102ac906102a4610c52565b353330610d05565b80f35b508290346102385760e0366003190112610238576102cb610c21565b6102d3610c3c565b90604435926064356084359060ff821682036104b15780421161046e576001600160a01b03908185169283895260056020528989208054906001820190558a519260208401917f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98352868d860152858a1660608601528a608086015260a085015260c084015260c0835260e083019267ffffffffffffffff938181108582111761045b578c52519020906103856111ae565b928b519260208401947f19010000000000000000000000000000000000000000000000000000000000008652602285015260428401526042835260808301908382109082111761044857916103f393916103eb938d5260c4359260a4359251902061111f565b919091610fed565b160361040557506102ac939450610eb9565b606490602087519162461bcd60e51b8352820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152fd5b60248b604189634e487b7160e01b835252fd5b60248c60418a634e487b7160e01b835252fd5b60648360208a519162461bcd60e51b8352820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152fd5b8680fd5b5050346102385780600319360112610238576020906104df6104d5610c21565b6024359033610d05565b5160018152f35b5082346105a357826003193601126105a357610500610c21565b91836024359233815260016020528181206001600160a01b038616825260205220549082821061053a576020856104df8585038733610eb9565b608490602086519162461bcd60e51b8352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152fd5b80fd5b5050346102385781600319360112610238576020906009549051908152f35b50919034610238578160031936011261023857805191809380549160019083821c928285169485156106bf575b60209586861081146106ac578589529081156106885750600114610630575b61062c8787610622828c0383610caa565b5191829182610bd8565b0390f35b81529295507f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b828410610675575050508261062c9461062292820101943880610611565b8054868501880152928601928101610657565b60ff19168887015250505050151560051b83010192506106228261062c3880610611565b602484602285634e487b7160e01b835252fd5b93607f16936105f2565b5050346102385781600319360112610238576020906001600160a01b03600754169051908152f35b50503461023857602036600319011261023857806020926001600160a01b03610718610c21565b1681526005845220549051908152f35b508290346102385760203660031901126102385780359060095482116107d6573383526008602052838320546201518081018091116107c357421061078057506102ac919233845260086020524290842055336112d9565b606490602085519162461bcd60e51b8352820152601460248201527f45524332304d6f636b3a20746f6f206561726c790000000000000000000000006044820152fd5b602484601184634e487b7160e01b835252fd5b606490602085519162461bcd60e51b8352820152601960248201527f45524332304d6f636b3a20616d6f756e7420746f6f20626967000000000000006044820152fd5b83346105a357806003193601126105a357610832610c52565b806001600160a01b0360075473ffffffffffffffffffffffffffffffffffffffff198116600755167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b50503461023857602036600319011261023857806020926001600160a01b036108a8610c21565b16815280845220549051908152f35b505034610238573660031901126105a3576102ac6108d3610c21565b6108db610c52565b602435906112d9565b5050346102385780600319360112610238576104df60209261092c610907610c21565b91338152600186528481206001600160a01b0384168252865284602435912054610ce2565b9033610eb9565b5050346102385781600319360112610238576020906109506111ae565b9051908152f35b50503461023857816003193601126102385760209060ff600a54169051908152f35b5082903461023857606036600319011261023857610995610c21565b61099d610c3c565b9184604435946001600160a01b0384168152600160205281812033825260205220549060001982036109d8575b6020866104df878787610d05565b848210610a0157509183916109f6602096956104df95033383610eb9565b9193948193506109ca565b606490602087519162461bcd60e51b8352820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152fd5b50503461023857816003193601126102385760209051620151808152f35b50503461023857602036600319011261023857806020926001600160a01b03610a89610c21565b1681526008845220549051908152f35b5050346102385781600319360112610238576020906002549051908152f35b5050346102385780600319360112610238576020906104df610ad8610c21565b6024359033610eb9565b9291905034610bd45783600319360112610bd457600354600181811c9186908281168015610bca575b6020958686108214610bb75750848852908115610b955750600114610b3c575b61062c8686610622828b0383610caa565b929550600383527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b828410610b82575050508261062c94610622928201019438610b2b565b8054868501880152928601928101610b65565b60ff191687860152505050151560051b83010192506106228261062c38610b2b565b836022602492634e487b7160e01b835252fd5b93607f1693610b0b565b8380fd5b6020808252825181830181905290939260005b828110610c0d57505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501610beb565b600435906001600160a01b0382168203610c3757565b600080fd5b602435906001600160a01b0382168203610c3757565b6001600160a01b03600754163303610c6657565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b90601f8019910116810190811067ffffffffffffffff821117610ccc57604052565b634e487b7160e01b600052604160045260246000fd5b91908201809211610cef57565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03809116918215610e4f5716918215610de557600082815280602052604081205491808310610d7b57604082827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef958760209652828652038282205586815220818154019055604051908152a3565b608460405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152fd5b608460405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152fd5b608460405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152fd5b6001600160a01b03809116918215610f845716918215610f1a5760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260018252604060002085600052825280604060002055604051908152a3565b608460405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152fd5b608460405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152fd5b60058110156111095780610ffe5750565b6001810361104a57606460405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152fd5b6002810361109657606460405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152fd5b60031461109f57565b608460405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152fd5b634e487b7160e01b600052602160045260246000fd5b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083116111a25791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa156111955781516001600160a01b0381161561118f579190565b50600190565b50604051903d90823e3d90fd5b50505050600090600390565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163014806112b0575b15611209577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f000000000000000000000000000000000000000000000000000000000000000082527f000000000000000000000000000000000000000000000000000000000000000060408201527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260a0815260c0810181811067ffffffffffffffff821117610ccc5760405251902090565b507f000000000000000000000000000000000000000000000000000000000000000046146111e0565b6001600160a01b0316908115611337577fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60208261131b600094600254610ce2565b60025584845283825260408420818154019055604051908152a3565b606460405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fdfea264697066735822122080390f951b312b96c0e605056055cdc21f2e64f1848b5123a2ce8bbccfcc5b3464736f6c63430008120033";

type ERC20MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Mock__factory extends ContractFactory {
  constructor(...args: ERC20MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC20Mock";
  }

  override deploy(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _initialAmount: PromiseOrValue<BigNumberish>,
    decimals_: PromiseOrValue<BigNumberish>,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20Mock> {
    return super.deploy(
      _name,
      _symbol,
      _initialAmount,
      decimals_,
      _owner,
      overrides || {}
    ) as Promise<ERC20Mock>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _initialAmount: PromiseOrValue<BigNumberish>,
    decimals_: PromiseOrValue<BigNumberish>,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _initialAmount,
      decimals_,
      _owner,
      overrides || {}
    );
  }
  override attach(address: string): ERC20Mock {
    return super.attach(address) as ERC20Mock;
  }
  override connect(signer: Signer): ERC20Mock__factory {
    return super.connect(signer) as ERC20Mock__factory;
  }
  static readonly contractName: "ERC20Mock";

  public readonly contractName: "ERC20Mock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20MockInterface {
    return new utils.Interface(_abi) as ERC20MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC20Mock;
  }
}

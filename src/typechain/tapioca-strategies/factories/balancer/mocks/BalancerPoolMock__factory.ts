/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  BalancerPoolMock,
  BalancerPoolMockInterface,
} from "../../../balancer/mocks/BalancerPoolMock";

const _abi = [
  {
    inputs: [],
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
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Deposit",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
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
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
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
    inputs: [],
    name: "getRate",
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
    inputs: [],
    name: "hasMintRestrictions",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    name: "toggleRestrictions",
    outputs: [],
    stateMutability: "nonpayable",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x61014060409080825234620005975762000019816200059c565b600f81526020918282016e42616c616e6365506f6f6c4d6f636b60881b815281519362000046856200059c565b60049182865263424c504d60e01b8287015283519462000066866200059c565b60019182875283870191603160f81b835280519360018060401b03998a8611620005825760038054968388811c9816801562000577575b898910146200056257601f9788811162000517575b508089898211600114620004b257600091620004a6575b5060001982841b1c191690841b1781555b8151918c8311620004915789548481811c9116801562000486575b8a821014620004715788811162000426575b508890888411600114620003bb57938394918492600095620003af575b50501b92600019911b1c19161786555b51902095519020958560e052610100968088524660a052855190848201907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f988983528884015260608301524660808301523060a083015260a0825260c0820192828410908411176200039a57828752815190206080523060c052610120968752620001c033620005ce565b600a805460ff19166012179055683635c9adc5dea00000600955600754336001600160a01b03919091160362000359575050331562000309576200020433620005ce565b3015620002ca57506002546a52b7d2dcc80cd2e400000092838201809211620002b557506000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9160025530835282815284832084815401905584519384523093a38261ff0019600a541617600a55519061156f9283620006188439608051836113a4015260a05183611470015260c0518361136e015260e051836113f301525182611419015251816113d00152f35b601190634e487b7160e01b6000525260246000fd5b90606493519262461bcd60e51b845283015260248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b50608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b907f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726101046064938662461bcd60e51b85528060c483015260e48201520152fd5b604186634e487b7160e01b6000525260246000fd5b01519350388062000124565b9190601f198416928b600052848b6000209460005b8d898383106200040e5750505010620003f3575b50505050811b01865562000134565b01519060f884600019921b161c1916905538808080620003e4565b868601518955909701969485019488935001620003d0565b8a600052896000208980860160051c8201928c871062000467575b0160051c019085905b8281106200045a57505062000107565b600081550185906200044a565b9250819262000441565b60228b634e487b7160e01b6000525260246000fd5b90607f1690620000f5565b60418a634e487b7160e01b6000525260246000fd5b905085015138620000c9565b859250601f19821690846000528b6000209160005b8d828210620005005750508311620004e7575b5050811b018155620000da565b87015160001983861b60f8161c191690553880620004da565b838b015185558996909401939283019201620004c7565b82600052896000208980840160051c8201928c851062000558575b0160051c019085905b8281106200054b575050620000b2565b600081550185906200053b565b9250819262000532565b60228a634e487b7160e01b6000525260246000fd5b97607f16976200009d565b604188634e487b7160e01b6000525260246000fd5b600080fd5b604081019081106001600160401b03821117620005b857604052565b634e487b7160e01b600052604160045260246000fd5b600780546001600160a01b039283166001600160a01b0319821681179092559091167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a356fe60806040818152600480361015610021575b505050361561001f57600080fd5b005b600092833560e01c90816306fdde0314610d3357508063095ea7b314610d0957806318160ddd14610cea5780631d0dc26714610cb257806321442ec914610c7a57806322ae81af14610c5c57806323b872dd14610b925780632e1a7d4d146109f2578063313ce567146109d05780633644e515146109ac578063395093511461095c578063449a52f81461092f578063679aefce1461090c57806370a08231146108d5578063715018a6146108785780637c928fe9146107815780637ecebe00146107495780638da5cb5b1461072057806395d89b411461061c578063996517cf146105fd578063a457c2d714610556578063a9059cbb14610525578063d0e30db0146104e1578063d4a744ba146104ba578063d505accf146102d0578063d6b5a2db146102a6578063dd62ed3e1461025d578063e01d55c5146102375763f2fde38b03610011573461023357602036600319011261023357610182610e6e565b9061018b610e9f565b6001600160a01b039182169283156101e1575050600754826bffffffffffffffffffffffff60a01b821617600755167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b8280fd5b83823461025957602036600319011261025957610252610e9f565b3560095580f35b5080fd5b5050346102595780600319360112610259578060209261027b610e6e565b610283610e89565b6001600160a01b0391821683526001865283832091168252845220549051908152f35b838234610259576020366003190112610259576102cd906102c5610e9f565b353330610f52565b80f35b508290346102595760e0366003190112610259576102ec610e6e565b6102f4610e89565b90604435926064356084359060ff821682036104b6578042116104735760018060a01b03908185169283895260056020528989208054906001820190558a519260208401917f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98352868d860152858a1660608601528a608086015260a085015260c084015260c0835260e083019267ffffffffffffffff9381811085821117610460578c52519020906103a561136b565b928b5192602084019461190160f01b8652602285015260428401526042835260808301908382109082111761044d57916103f893916103f0938d5260c4359260a435925190206112dc565b9190916111c2565b160361040a57506102cd9394506110c0565b606490602087519162461bcd60e51b8352820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152fd5b634e487b7160e01b8b526041875260248bfd5b634e487b7160e01b8c526041885260248cfd5b875162461bcd60e51b8152602081850152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606490fd5b8680fd5b50503461025957816003193601126102595760209060ff600a5460081c1690519015158152f35b505081600319360112610259576104f83433611496565b513481527fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c60203392a280f35b50503461025957806003193601126102595760209061054f610545610e6e565b6024359033610f52565b5160018152f35b5082346105fa57826003193601126105fa57610570610e6e565b918360243592338152600160205281812060018060a01b03861682526020522054908282106105a95760208561054f85850387336110c0565b608490602086519162461bcd60e51b8352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152fd5b80fd5b5050346102595781600319360112610259576020906009549051908152f35b50919034610259578160031936011261025957805191809380549160019083821c92828516948515610716575b6020958686108114610703578589529081156106df5750600114610687575b6106838787610679828c0383610ef7565b5191829182610e25565b0390f35b81529295507f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b8284106106cc57505050826106839461067992820101943880610668565b80548685018801529286019281016106ae565b60ff19168887015250505050151560051b8301019250610679826106833880610668565b634e487b7160e01b845260228352602484fd5b93607f1693610649565b50503461025957816003193601126102595760075490516001600160a01b039091168152602090f35b5050346102595760203660031901126102595760209181906001600160a01b03610771610e6e565b1681526005845220549051908152f35b508290346102595760203660031901126102595780359060ff600a5460081c166107bf575b506102cd91923384526008602052429084205533611496565b600954821161083557338352600860205283832054620151808101809111610822574210156107a657606490602085519162461bcd60e51b8352820152601460248201527345524332304d6f636b3a20746f6f206561726c7960601b6044820152fd5b634e487b7160e01b845260118252602484fd5b606490602085519162461bcd60e51b8352820152601960248201527f45524332304d6f636b3a20616d6f756e7420746f6f20626967000000000000006044820152fd5b83346105fa57806003193601126105fa57610891610e9f565b600780546001600160a01b0319811690915581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b5050346102595760203660031901126102595760209181906001600160a01b036108fd610e6e565b16815280845220549051908152f35b50503461025957816003193601126102595760209051670de0b6b3a76400008152f35b505034610259573660031901126105fa576102cd61094b610e6e565b610953610e9f565b60243590611496565b50503461025957806003193601126102595761054f6020926109a561097f610e6e565b338352600186528483206001600160a01b03821684528652918490205460243590610f2f565b90336110c0565b5050346102595781600319360112610259576020906109c961136b565b9051908152f35b50503461025957816003193601126102595760209060ff600a54169051908152f35b503461023357602080600319360112610b8e57813591338552848252828486205410610b65573315610b1a573385528482528385205490838210610acc57508290338652858352038385205581600254036002558383518381527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef833392a38380838015610ac2575b8280929181923390f115610ab6577f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b659192519283523392a280f35b505051903d90823e3d90fd5b6108fc9150610a7b565b845162461bcd60e51b8152908101839052602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608490fd5b60849184519162461bcd60e51b8352820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152fd5b60649184519162461bcd60e51b8352820152600560248201526422b93937b960d91b6044820152fd5b8380fd5b5082903461025957606036600319011261025957610bae610e6e565b610bb6610e89565b91846044359460018060a01b038416815260016020528181203382526020522054906000198203610bf0575b60208661054f878787610f52565b848210610c195750918391610c0e6020969561054f950333836110c0565b919394819350610be2565b606490602087519162461bcd60e51b8352820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152fd5b50503461025957816003193601126102595760209051620151808152f35b5050346102595760203660031901126102595760209181906001600160a01b03610ca2610e6e565b1681526008845220549051908152f35b83346105fa57806003193601126105fa57610ccb610e9f565b600a5461ff0060ff8260081c161560081b169061ff00191617600a5580f35b5050346102595781600319360112610259576020906002549051908152f35b50503461025957806003193601126102595760209061054f610d29610e6e565b60243590336110c0565b9291905034610b8e5783600319360112610b8e57600354600181811c9186908281168015610e1b575b6020958686108214610e085750848852908115610de65750600114610d8d575b6106838686610679828b0383610ef7565b929550600383527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b828410610dd3575050508261068394610679928201019438610d7c565b8054868501880152928601928101610db6565b60ff191687860152505050151560051b83010192506106798261068338610d7c565b634e487b7160e01b845260229052602483fd5b93607f1693610d5c565b6020808252825181830181905290939260005b828110610e5a57505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501610e38565b600435906001600160a01b0382168203610e8457565b600080fd5b602435906001600160a01b0382168203610e8457565b6007546001600160a01b03163303610eb357565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b90601f8019910116810190811067ffffffffffffffff821117610f1957604052565b634e487b7160e01b600052604160045260246000fd5b91908201809211610f3c57565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0390811691821561106d571691821561101c57600082815280602052604081205491808310610fc857604082827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef958760209652828652038282205586815220818154019055604051908152a3565b60405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608490fd5b60405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608490fd5b6001600160a01b0390811691821561117157169182156111215760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260018252604060002085600052825280604060002055604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b60058110156112c657806111d35750565b600181036112205760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606490fd5b6002810361126d5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b60031461127657565b60405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608490fd5b634e487b7160e01b600052602160045260246000fd5b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831161135f5791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa156113525781516001600160a01b0381161561134c579190565b50600190565b50604051903d90823e3d90fd5b50505050600090600390565b307f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316148061146d575b156113c6577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f000000000000000000000000000000000000000000000000000000000000000082527f000000000000000000000000000000000000000000000000000000000000000060408201527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260a0815260c0810181811067ffffffffffffffff821117610f195760405251902090565b507f0000000000000000000000000000000000000000000000000000000000000000461461139d565b6001600160a01b03169081156114f4577fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6020826114d8600094600254610f2f565b60025584845283825260408420818154019055604051908152a3565b60405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606490fdfea26469706673582212208d44fc890034366867815f2e124824d9784028e2bda583445dcf3d8dd695266a64736f6c63430008120033";

type BalancerPoolMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BalancerPoolMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BalancerPoolMock__factory extends ContractFactory {
  constructor(...args: BalancerPoolMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "BalancerPoolMock";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BalancerPoolMock> {
    return super.deploy(overrides || {}) as Promise<BalancerPoolMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BalancerPoolMock {
    return super.attach(address) as BalancerPoolMock;
  }
  override connect(signer: Signer): BalancerPoolMock__factory {
    return super.connect(signer) as BalancerPoolMock__factory;
  }
  static readonly contractName: "BalancerPoolMock";

  public readonly contractName: "BalancerPoolMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BalancerPoolMockInterface {
    return new utils.Interface(_abi) as BalancerPoolMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BalancerPoolMock {
    return new Contract(address, _abi, signerOrProvider) as BalancerPoolMock;
  }
}

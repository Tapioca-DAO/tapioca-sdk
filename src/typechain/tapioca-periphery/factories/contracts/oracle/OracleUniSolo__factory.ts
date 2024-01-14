/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  OracleUniSolo,
  OracleUniSoloInterface,
} from "../../../contracts/oracle/OracleUniSolo";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "addressInAndOutUni",
        type: "address[]",
      },
      {
        internalType: "contract IUniswapV3Pool[]",
        name: "_circuitUniswap",
        type: "address[]",
      },
      {
        internalType: "uint8[]",
        name: "_circuitUniIsMultiplied",
        type: "uint8[]",
      },
      {
        internalType: "uint32",
        name: "_twapPeriod",
        type: "uint32",
      },
      {
        internalType: "uint16",
        name: "observationLength",
        type: "uint16",
      },
      {
        internalType: "address[]",
        name: "guardians",
        type: "address[]",
      },
      {
        internalType: "bytes32",
        name: "_description",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_sequencerUptimeFeed",
        type: "address",
      },
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "schedule",
        type: "uint48",
      },
    ],
    name: "AccessControlEnforcedDefaultAdminDelay",
    type: "error",
  },
  {
    inputs: [],
    name: "AccessControlEnforcedDefaultAdminRules",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "defaultAdmin",
        type: "address",
      },
    ],
    name: "AccessControlInvalidDefaultAdmin",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "GracePeriodNotOver",
    type: "error",
  },
  {
    inputs: [],
    name: "SequencerDown",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [],
    name: "DefaultAdminDelayChangeCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint48",
        name: "newDelay",
        type: "uint48",
      },
      {
        indexed: false,
        internalType: "uint48",
        name: "effectSchedule",
        type: "uint48",
      },
    ],
    name: "DefaultAdminDelayChangeScheduled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "DefaultAdminTransferCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint48",
        name: "acceptSchedule",
        type: "uint48",
      },
    ],
    name: "DefaultAdminTransferScheduled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "BASE",
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
    name: "DEFAULT_ADMIN_ROLE",
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
    name: "GRACE_PERIOD_TIME",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GUARDIAN_ROLE_UNISWAP",
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
    name: "SEQUENCER_ROLE",
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
    name: "SEQUENCER_UPTIME_FEED",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "acceptDefaultAdminTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "beginDefaultAdminTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cancelDefaultAdminTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "newDelay",
        type: "uint48",
      },
    ],
    name: "changeDefaultAdminDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_gracePeriod",
        type: "uint32",
      },
    ],
    name: "changeGracePeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_twapPeriod",
        type: "uint32",
      },
    ],
    name: "changeTwapPeriod",
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
    name: "circuitUniIsMultiplied",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "circuitUniswap",
    outputs: [
      {
        internalType: "contract IUniswapV3Pool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultAdmin",
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
    name: "defaultAdminDelay",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultAdminDelayIncreaseWait",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
    inputs: [],
    name: "inBase",
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
        internalType: "uint16",
        name: "newLengthStored",
        type: "uint16",
      },
    ],
    name: "increaseTWAPStore",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "outBase",
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
    inputs: [],
    name: "pendingDefaultAdmin",
    outputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
      {
        internalType: "uint48",
        name: "schedule",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingDefaultAdminDelay",
    outputs: [
      {
        internalType: "uint48",
        name: "newDelay",
        type: "uint48",
      },
      {
        internalType: "uint48",
        name: "schedule",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "read",
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
    name: "readAll",
    outputs: [
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "readLower",
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
        internalType: "uint256",
        name: "quoteAmount",
        type: "uint256",
      },
    ],
    name: "readQuote",
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
        name: "quoteAmount",
        type: "uint256",
      },
    ],
    name: "readQuoteLower",
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
    name: "readUpper",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rollbackDefaultAdminDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [],
    name: "twapPeriod",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c080604052346200065b57620026e78038038091620000208285620008e1565b8339810190610120818303126200065b5780516001600160401b0381116200065b57826200005091830162000932565b60208201519091906001600160401b0381116200065b5781019183601f840112156200065b57825191620000848362000905565b93620000946040519586620008e1565b83855260208501906020829560051b820101908782116200065b57602001915b818310620008bf5750505060408101516001600160401b0381116200065b5781019480601f870112156200065b578551620000ef8162000905565b96620000ff6040519889620008e1565b818852602088016020819360051b830101918483116200065b57602001905b828210620008a45750505060608301519063ffffffff821682036200065b5760808401519261ffff841684036200065b5760a0850151906001600160401b0382116200065b576200017191860162000932565b9760c085015196620001956101006200018d60e089016200091d565b97016200091d565b6001600160a01b038116156200088b57600380546001600160d01b03166107e960d71b179055600454906001600160a01b03821662000879576001600160a01b03199091166001600160a01b03821617600455620001f39062000a17565b508951156200084e5760005b8a5181101562000280576001600160a01b036200021d828d620009b1565b511615620002575762000251906200024a6001600160a01b0362000242838f620009b1565b511662000a98565b50620009ee565b620001ff565b60405162461bcd60e51b81526020600482015260016024820152600360fc1b6044820152606490fd5b5088600080516020620026c783398151915260005260026020526001604060002001600080516020620026c783398151915281549155600080516020620026c783398151915260405191817fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff600080a4600063ffffffff871660030b13156200082657508051948515620007fb5783518603620007d05763ffffffff1663ffffffff196005541617600555519060018060401b0382116200076f576801000000000000000082116200076f5760065482600655808310620007a3575b506006600052602060002060005b838110620007855750509151929150506001600160401b0382116200076f576801000000000000000082116200076f5760075482600755808310620006f6575b5090600760005260206000209060005b8160051c8110620006b35750601f198116810362000660575b50505060005b818110620005b15750506008805463ffffffff1916610e10179055506001600160a01b031660805260016009558051600119016200058657805115620005705760018060a01b03602082015116908051600110156200057057604060018060a01b03910151169060405160208160048163313ce56760e01b958682525afa908115620005195760009162000525575b509062000477602092620009c6565b60005560046040518094819382525afa80156200051957600090620004d2575b620004a39150620009c6565b60a052600155604051611b5c908162000b2b82396080518161048b015260a051818181610c6f0152610e820152f35b6020823d60201162000510575b81620004ee60209383620008e1565b810103126200050d575062000507620004a391620009a2565b62000497565b80fd5b3d9150620004df565b6040513d6000823e3d90fd5b906020823d60201162000567575b816200054260209383620008e1565b810103126200050d575090620004776200055e602093620009a2565b91925062000468565b3d915062000533565b634e487b7160e01b600052603260045260246000fd5b60405162461bcd60e51b815260206004820152600360248201526231303760e81b6044820152606490fd5b60065481101562000570576006600052600080516020620026a78339815191528101546001600160a01b0316803b156200065b5760008060405180936332148f6760e01b825261ffff881660048301528160249485925af18015620005195762000629575b50506200062390620009ee565b620003d9565b6001600160401b038211620006475750604052620006238762000616565b634e487b7160e01b60009081526041600452fd5b600080fd5b600092835b601f198316830381106200068357505060051c0155858080620003d3565b90936020620006a96001928460ff895116919060ff809160031b9316831b921b19161790565b9501910162000665565b6000805b60208110620006ce575083820155600101620003ba565b855190959160019160209160ff60038a901b81811b199092169216901b1792019501620006b7565b600760005262000745907fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c68890601f90858216806200074c575b500160051c810190601f850160051c01620009fe565b87620003aa565b600019908184890160051c8601019182549160200360031b1c1690558b6200072f565b634e487b7160e01b600052604160045260246000fd5b82516001600160a01b0316818301556020909201916001016200036a565b6006600052620007c990600080516020620026a7833981519152908101908401620009fe565b896200035c565b60405162461bcd60e51b81526020600482015260036024820152620c4c0d60ea1b6044820152606490fd5b60405162461bcd60e51b815260206004820152600360248201526231303360e81b6044820152606490fd5b62461bcd60e51b815260206004820152600360248201526218981960e91b6044820152606490fd5b60405162461bcd60e51b815260206004820152600360248201526231303160e81b6044820152606490fd5b604051631fe1e13d60e11b8152600490fd5b604051636116401160e11b815260006004820152602490fd5b60208091620008b384620009a2565b8152019101906200011e565b82516001600160a01b03811681036200065b57815260209283019201620000b4565b601f909101601f19168101906001600160401b038211908210176200076f57604052565b6001600160401b0381116200076f5760051b60200190565b51906001600160a01b03821682036200065b57565b81601f820112156200065b578051916200094c8362000905565b926200095c6040519485620008e1565b808452602092838086019260051b8201019283116200065b578301905b82821062000988575050505090565b83809162000996846200091d565b81520191019062000979565b519060ff821682036200065b57565b8051821015620005705760209160051b010190565b60ff16604d8111620009d857600a0a90565b634e487b7160e01b600052601160045260246000fd5b6000198114620009d85760010190565b81811062000a0a575050565b60008155600101620009fe565b6001600160a01b031660008181527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b602052604081205490919060ff1662000a945781805260026020526040822081835260205260408220600160ff198254161790553391600080516020620026878339815191528180a4600190565b5090565b6001600160a01b031660008181527fe414d6e9efd528fe34946c9948de56cf8a209abe14dcce3202417cd89e77a63b6020526040812054909190600080516020620026c78339815191529060ff1662000b255780835260026020526040832082845260205260408320600160ff1982541617905560008051602062002687833981519152339380a4600190565b50509056fe608060408181526004918236101561001657600080fd5b600092833560e01c91826301ffc9a714610d3257508163022d63fb14610d145781630aa6220b14610c9257816322834baa14610c57578163240fd5ab14610b8b578163248a9ca314610c2c5781632b271dde14610bf05781632f2ff15d14610bab5781633593ba7b14610b8b57816336568abe14610aa3578163408b054614610a2257816341f654f7146109f9578163442133bd146106325781634842855c146109d057816357de26a414610632578163634e93da14610906578163649a5ec7146107aa57816365cf10b6146106e55781637284e416146106c657816384ef8ffc1461069e5781638da5cb5b1461069e57816391d148541461065757816392611e33146106325781639aefb5c314610615578163a1eda53c146105b5578163a217fddf1461059a578163a47b5a7c14610571578163b31dbb9f146104ba578163c598018214610476578163cc8463c81461044a578163cefc142914610368578163cf6eefb71461032d578163d547741f146102d6578163d602b9fd1461027c578163d74febcb1461023457508063ec342ad014610212578063ed2f8603146101ee5763f6207326146101c757600080fd5b346101ea57816003193601126101ea5760209063ffffffff600554169051908152f35b5080fd5b50346101ea57816003193601126101ea5760209063ffffffff600854169051908152f35b50346101ea57816003193601126101ea5760209051670de0b6b3a76400008152f35b905034610278576020366003190112610278573591600654831015610275575061025f602092610e27565b905491519160018060a01b039160031b1c168152f35b80fd5b8280fd5b8334610275578060031936011261027557610295611581565b65ffffffffffff6102a46117d9565b600380546001600160d01b03191690559190911690506102c15780f35b600080516020611aa78339815191528180a180f35b839150346101ea57826003193601126101ea5780356102f3610df3565b91811561031f5750610316600184958361031b96526002602052862001546115c7565b6116c8565b5080f35b8451631fe1e13d60e11b8152fd5b8284346102755780600319360112610275575065ffffffffffff61034f6117d9565b83516001600160a01b0390921682529091166020820152f35b839150346101ea57816003193601126101ea576103836117d9565b506001600160a01b03939084163303610433579065ffffffffffff916103a76117d9565b90931680158015610429575b610414575081546001600160a01b03198082168455906103d490871661170d565b5082549186831661040557506103f19495841691161790556115ed565b50600380546001600160d01b031916905580f35b51631fe1e13d60e11b81528390fd5b90516319ca5ebb60e01b815291820152602490fd5b50428110156103b3565b602492505190636116401160e11b82523390820152fd5b5050346101ea57816003193601126101ea5760209065ffffffffffff61046e6117f8565b915191168152f35b5050346101ea57816003193601126101ea57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b9050346102785760203660031901126102785780359163ffffffff831680930361056d57600080516020611b07833981519152808552600260205281852033865260205260ff8286205416156105515750838360030b131561052957505063ffffffff19600554161760055580f35b906020606492519162461bcd60e51b83528201526002602482015261393960f01b6044820152fd5b60449291519163e2517d3f60e01b835233908301526024820152fd5b8380fd5b5050346101ea57816003193601126101ea5760209051600080516020611b078339815191528152f35b5050346101ea57816003193601126101ea5751908152602090f35b839150346101ea57816003193601126101ea57548060d01c918215158061060b575b156105fd575065ffffffffffff6105f99160a01c1691925b5192839283610e0e565b0390f35b928392506105f991506105ef565b50428310156105d7565b5050346101ea57816003193601126101ea57602091549051908152f35b5050346101ea57816003193601126101ea5761065060209254610e42565b9051908152f35b9050346102785781600319360112610278578160209360ff92610678610df3565b90358252600286528282206001600160a01b039091168252855220549151911615158152f35b9050346102785782600319360112610278575490516001600160a01b03909116815260209150f35b5050346101ea57816003193601126101ea576020906001549051908152f35b919050346102785760203660031901126102785781359061ffff821680920361056d5783805b60065481101561031b5761071e81610e27565b905460039190911b1c6001600160a01b0316803b15610278578280855180936332148f6760e01b8252888a8301528160249485925af180156107a05761076f575b505061076a906118b2565b61070b565b919250906001600160401b03821161078f57508252849061076a3861075f565b634e487b7160e01b87526041865286fd5b85513d86823e3d90fd5b839150346101ea5760203660031901126101ea57803565ffffffffffff80821690818303610902576107da611581565b6107e34261184b565b91816107ed6117f8565b16808211156108c857506108719286979261082a92600080516020611ae78339815191529850620697808082106000146108c157505b1690611831565b9380548060d01c80610877575b505080546001600160a01b031660a085901b65ffffffffffff60a01b161760d086901b6001600160d01b0319161790555192839283610e0e565b0390a180f35b4211156108a957600380546001600160d01b031660309290921b6001600160d01b0319169190911790555b8780610837565b50600080516020611a878339815191528780a16108a2565b9050610823565b039081116108ef579461082a61087192600080516020611ae7833981519152969790611831565b634e487b7160e01b855260118452602485fd5b8480fd5b90503461027857602036600319011261027857356001600160a01b03811691908290036102785760207f3377dc44241e779dd06afab5b788a35ca5f3b778836e2990bdb26a2a4b2e5ed691610959611581565b6109736109654261184b565b61096d6117f8565b90611831565b9061097c6117d9565b600380546001600160d01b031916881760a086901b65ffffffffffff60a01b1617905565ffffffffffff92915082166109b9575b5191168152a280f35b600080516020611aa78339815191528780a16109b0565b5050346101ea57816003193601126101ea5760209051600080516020611a678339815191528152f35b828434610275578060031936011261027557610a159054610e42565b8151908082526020820152f35b9050346102785760203660031901126102785780359163ffffffff831680930361056d57600080516020611a6783398151915290818552600260205280852033865260205260ff818620541615610a875750505063ffffffff19600854161760085580f35b60449350519163e2517d3f60e01b835233908301526024820152fd5b8383346101ea57806003193601126101ea578235610abf610df3565b91811580610b75575b610af7575b336001600160a01b03841603610ae857509061031b916116c8565b5163334bd91960e11b81528490fd5b610aff6117d9565b906001600160a01b031615801590610b65575b8015610b53575b610b3557506003805465ffffffffffff60a01b19169055610acd565b8565ffffffffffff60249351926319ca5ebb60e01b84521690820152fd5b504265ffffffffffff82161015610b19565b5065ffffffffffff811615610b12565b5084546001600160a01b03848116911614610ac8565b828434610275576020366003190112610275575061065060209235610e42565b839150346101ea57826003193601126101ea578035610bc8610df3565b91811561031f5750610beb600184958361031b96526002602052862001546115c7565b61165a565b905034610278576020366003190112610278573591600754831015610275575060ff610c1d602093610d9f565b92905490519260031b1c168152f35b9050346102785760203660031901126102785781602093600192358152600285522001549051908152f35b5050346101ea57816003193601126101ea57602090517f00000000000000000000000000000000000000000000000000000000000000008152f35b8390346101ea57816003193601126101ea57610cac611581565b80548060d01c80610cca575b505080546001600160a01b0316905580f35b421115610cfc57600380546001600160d01b031660309290921b6001600160d01b0319169190911790555b8280610cb8565b50600080516020611a878339815191528280a1610cf5565b5050346101ea57816003193601126101ea5760209051620697808152f35b849134610278576020366003190112610278573563ffffffff60e01b811680910361027857602092506318a4c3c360e11b8114908115610d74575b5015158152f35b637965db0b60e01b811491508115610d8e575b5083610d6d565b6301ffc9a760e01b14905083610d87565b90600754821015610ddd576007600052600582901c7fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6880191601f1690565b634e487b7160e01b600052603260045260246000fd5b602435906001600160a01b0382168203610e0957565b600080fd5b65ffffffffffff91821681529116602082015260400190565b600654811015610ddd57600660005260206000200190600090565b600060065463ffffffff600554169060039180830b15925b828510610ed8575050505050670de0b6b3a764000090818102918183041490151715610ec2577f0000000000000000000000000000000000000000000000000000000000000000908115610eac570490565b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b9091929394610ee686610e27565b905490831b1c6001600160a01b03169060ff610f0188610d9f565b905460405191861b1c9190911692606082016001600160401b0381118382101761156b57604052600282526020820191604036843786610f40826118fb565b526000610f4c82611908565b5260405163883bdbfd60e01b815260206004820152905160248201819052909283916044830191906000905b8082106115495750505091818060009403915afa90811561153d576000916113f3575b50610fb2610fa882611908565b5160060b916118fb565b5160060b9003667fffffffffffff198112667fffffffffffff821317610ec25786610eac57600681900b667fffffffffffff191485850b6000191416610ec25784840b8160060b0560020b9060008160060b1290816113da575b506113c6575b60020b9160008312156113c05782600003925b620d89e88411611397576001908482161561138d576ffff97272373d413259a46990580e213a5b6001600160881b03169460028116611371575b60048116611355575b60088116611339575b6010811661131d575b60208116611301575b604081166112e5575b6080908181166112ca575b61010081166112af575b6102008116611294575b6104008116611279575b610800811661125e575b6110008116611243575b6120008116611228575b614000811661120d575b61800081166111f2575b6201000081166111d8575b6202000081166111bf575b6204000081166111a7575b6208000016611191575b5060001261117e575b61115f93670de0b6b3a7640000906001600160451b0381166111765760ff60005b169060451c0102603b1c91146000146111685790611159916119a5565b956118b2565b93929190610e5a565b61117191611918565b611159565b60ff8361113c565b8315610eac57600019939093049261111b565b66149b34ee7ac2626000929602901c9490611112565b6b048a170391f7dc42444e8fa2909602811c95611108565b956d2216e584f5fa1ea926041bedfe9802811c956110fd565b956e5d6af8dedb81196699c329225ee60402811c956110f2565b956f09aa508b5b7a84e1c677de54f3e99bc902811c956110e7565b956f31be135f97d08fd981231505542fcfa602811c956110dd565b956f70d869a156d2a1b890bb3df62baf32f702811c956110d3565b956fa9f746462d870fdf8a65dc1f90e061e502811c956110c9565b956fd097f3bdfd2022b8845ad8f792aa582502811c956110bf565b956fe7159475a2c29b7443b29c7fa6e889d902811c956110b5565b956ff3392b0822b70005940c7a398e4b70f302811c956110ab565b956ff987a7253ac413176f2b074cf7815e5402811c956110a1565b956ffcbe86c7900a88aedcffc83b479aa3a402811c95611097565b946ffe5dee046a99a2a811c461f1969c30530260801c9461108c565b946fff2ea16466c96a3843ec78b326b528610260801c94611083565b946fff973b41fa98c081472e6896dfb254c00260801c9461107a565b946fffcb9843d60f6159c9db58835c9266440260801c94611071565b946fffe5caca7e10e4e61c3624eaa0941cd00260801c94611068565b946ffff2e50f5f656932ef12357cf3c7fdcc0260801c9461105f565b600160801b61104c565b60405162461bcd60e51b81526020600482015260016024820152601560fa1b6044820152606490fd5b82611025565b627fffff198114610ec25760001901611012565b97505060009685850b9060060b0760060b15153861100c565b3d908183823e61140382826118c1565b6040818381010312610278578051926001600160401b03841161027557828201601f85840101121561027557838201519361143d856118e4565b9461144b60405196876118c1565b808652602086019185850160208360051b83880101011161056d57602081860101925b60208360051b8388010101841061151f57505050506020820151916001600160401b0383116101ea57838101601f8483010112156101ea57828101519260206114b6856118e4565b6114c360405191826118c1565b8581520194820160208560051b83850101011161027857602081830101945b60208560051b838501010186106114ff5750505050505038610f9b565b85516001600160a01b0381168103610902578152602095860195016114e2565b83518060060b81036115395781526020938401930161146e565b8580fd5b6040513d6000823e3d90fd5b9193509160208060019263ffffffff8751168152019401920185939291610f78565b634e487b7160e01b600052604160045260246000fd5b336000908152600080516020611a47833981519152602052604081205460ff16156115a95750565b6044906040519063e2517d3f60e01b82523360048301526024820152fd5b80600052600260205260406000203360005260205260ff60406000205416156115a95750565b6001600160a01b03166000818152600080516020611a47833981519152602052604081205490919060ff166116565781805260026020526040822081835260205260408220600160ff198254161790553391600080516020611a278339815191528180a4600190565b5090565b906000918083526002602052604083209160018060a01b03169182845260205260ff604084205416156000146116c35780835260026020526040832082845260205260408320600160ff19825416179055600080516020611a27833981519152339380a4600190565b505090565b906116de918015806116f6575b6116e157611774565b90565b600480546001600160a01b0319169055611774565b506004546001600160a01b038381169116146116d5565b6001600160a01b03166000818152600080516020611a47833981519152602052604081205490919060ff1615611656578180526002602052604082208183526020526040822060ff1981541690553391600080516020611ac78339815191528180a4600190565b906000918083526002602052604083209160018060a01b03169182845260205260ff6040842054166000146116c3578083526002602052604083208284526020526040832060ff198154169055600080516020611ac7833981519152339380a4600190565b6003546001600160a01b0381169160a09190911c65ffffffffffff1690565b6004548060d01c8015159081611827575b501561181d5760a01c65ffffffffffff1690565b5060035460d01c90565b9050421138611809565b91909165ffffffffffff80809416911601918211610ec257565b65ffffffffffff9081811161185e571690565b60405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203460448201526538206269747360d01b6064820152608490fd5b6000198114610ec25760010190565b601f909101601f19168101906001600160401b0382119082101761156b57604052565b6001600160401b03811161156b5760051b60200190565b805115610ddd5760200190565b805160011015610ddd5760400190565b670de0b6b3a76400009160001982840992828102928380861095039480860395146119975784831115610e09578291096001821901821680920460028082600302188083028203028083028203028083028203028083028203028083028203028092029003029360018380600003040190848311900302920304170290565b505080925015610e09570490565b90919060001983820983820291828083109203948286039260009614611a1357670de0b6b3a76400009183831115611a0f577faccb18165bd6fe31ae1cf318dc5b51eee0e1ba569b88cd74c1773b91fac106699596500990828211900360ee1b910360121c170290565b8680fd5b505050670de0b6b3a7640000919250049056fe2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0dac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077bac4f1890dc96c9a02330d1fa696648a38f3b282d2449c2d8e6f10507488c84c82b1fa2edafe6f7b9e97c1a9e0c3660e645beb2dcaa2d45bdbf9beaf5472e1ec58886ebfc4259abdbc16601dd8fb5678e54878f47b3c34836cfc51154a9605109f6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171bf1038c18cf84a56e432fdbfaf746924b7ea511dfe03a6506a0ceba4888788d9b55435dd261a4b9b3364963f7738a7a662ad9c84396d64be3365284bb7f0a5041a2646970667358221220a55c4a0c9bacc50f05f5ade013a0ac11899a20d7679bafe8d1ad53f922fa718b64736f6c634300081300332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0df652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f55435dd261a4b9b3364963f7738a7a662ad9c84396d64be3365284bb7f0a5041";

type OracleUniSoloConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OracleUniSoloConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OracleUniSolo__factory extends ContractFactory {
  constructor(...args: OracleUniSoloConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "OracleUniSolo";
  }

  override deploy(
    addressInAndOutUni: PromiseOrValue<string>[],
    _circuitUniswap: PromiseOrValue<string>[],
    _circuitUniIsMultiplied: PromiseOrValue<BigNumberish>[],
    _twapPeriod: PromiseOrValue<BigNumberish>,
    observationLength: PromiseOrValue<BigNumberish>,
    guardians: PromiseOrValue<string>[],
    _description: PromiseOrValue<BytesLike>,
    _sequencerUptimeFeed: PromiseOrValue<string>,
    _admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OracleUniSolo> {
    return super.deploy(
      addressInAndOutUni,
      _circuitUniswap,
      _circuitUniIsMultiplied,
      _twapPeriod,
      observationLength,
      guardians,
      _description,
      _sequencerUptimeFeed,
      _admin,
      overrides || {}
    ) as Promise<OracleUniSolo>;
  }
  override getDeployTransaction(
    addressInAndOutUni: PromiseOrValue<string>[],
    _circuitUniswap: PromiseOrValue<string>[],
    _circuitUniIsMultiplied: PromiseOrValue<BigNumberish>[],
    _twapPeriod: PromiseOrValue<BigNumberish>,
    observationLength: PromiseOrValue<BigNumberish>,
    guardians: PromiseOrValue<string>[],
    _description: PromiseOrValue<BytesLike>,
    _sequencerUptimeFeed: PromiseOrValue<string>,
    _admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      addressInAndOutUni,
      _circuitUniswap,
      _circuitUniIsMultiplied,
      _twapPeriod,
      observationLength,
      guardians,
      _description,
      _sequencerUptimeFeed,
      _admin,
      overrides || {}
    );
  }
  override attach(address: string): OracleUniSolo {
    return super.attach(address) as OracleUniSolo;
  }
  override connect(signer: Signer): OracleUniSolo__factory {
    return super.connect(signer) as OracleUniSolo__factory;
  }
  static readonly contractName: "OracleUniSolo";

  public readonly contractName: "OracleUniSolo";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OracleUniSoloInterface {
    return new utils.Interface(_abi) as OracleUniSoloInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OracleUniSolo {
    return new Contract(address, _abi, signerOrProvider) as OracleUniSolo;
  }
}

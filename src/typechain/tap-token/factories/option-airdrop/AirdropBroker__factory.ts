/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  AirdropBroker,
  AirdropBrokerInterface,
} from "../../option-airdrop/AirdropBroker";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_aoTAP",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_tapOFT",
        type: "address",
      },
      {
        internalType: "address",
        name: "_pcnft",
        type: "address",
      },
      {
        internalType: "address",
        name: "_paymentTokenBeneficiary",
        type: "address",
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
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract ERC20",
        name: "paymentToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "aoTapTokenID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ExerciseOption",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "epochTAPValuation",
        type: "uint256",
      },
    ],
    name: "NewEpoch",
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
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "aoTAPTokenID",
        type: "uint256",
      },
    ],
    name: "Participate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract ERC20",
        name: "paymentToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IOracle",
        name: "oracle",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "oracleData",
        type: "bytes",
      },
    ],
    name: "SetPaymentToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IOracle",
        name: "oracle",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "oracleData",
        type: "bytes",
      },
    ],
    name: "SetTapOracle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "EPOCH_DURATION",
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
    name: "PCNFT",
    outputs: [
      {
        internalType: "contract IERC721",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PHASE_1_DISCOUNT",
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
    name: "PHASE_2_AMOUNT_PER_USER",
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
    name: "PHASE_2_DISCOUNT_PER_USER",
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
    inputs: [],
    name: "PHASE_3_AMOUNT_PER_USER",
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
    name: "PHASE_3_DISCOUNT",
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
    name: "PHASE_4_DISCOUNT",
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
    name: "aoTAP",
    outputs: [
      {
        internalType: "contract AOTAP",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "aoTAPBrokerClaim",
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "aoTAPCalls",
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
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_paymentTokens",
        type: "address[]",
      },
    ],
    name: "collectPaymentTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "epoch",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "epochTAPValuation",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_aoTAPTokenID",
        type: "uint256",
      },
      {
        internalType: "contract ERC20",
        name: "_paymentToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tapAmount",
        type: "uint256",
      },
    ],
    name: "exerciseOption",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_aoTAPTokenID",
        type: "uint256",
      },
      {
        internalType: "contract ERC20",
        name: "_paymentToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tapAmount",
        type: "uint256",
      },
    ],
    name: "getOTCDealDetails",
    outputs: [
      {
        internalType: "uint256",
        name: "eligibleTapAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "paymentTokenAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tapAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastEpochUpdate",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "newEpoch",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "participate",
    outputs: [
      {
        internalType: "uint256",
        name: "aoTAPTokenID",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    name: "paymentTokenBeneficiary",
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
        internalType: "contract ERC20",
        name: "",
        type: "address",
      },
    ],
    name: "paymentTokens",
    outputs: [
      {
        internalType: "contract IOracle",
        name: "oracle",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "oracleData",
        type: "bytes",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "phase1Users",
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
    name: "phase2MerkleRoots",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "phase4Users",
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
        name: "_phase",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "_users",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
    ],
    name: "registerUserForPhase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ERC20",
        name: "_paymentToken",
        type: "address",
      },
      {
        internalType: "contract IOracle",
        name: "_oracle",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_oracleData",
        type: "bytes",
      },
    ],
    name: "setPaymentToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_paymentTokenBeneficiary",
        type: "address",
      },
    ],
    name: "setPaymentTokenBeneficiary",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[4]",
        name: "_merkleRoots",
        type: "bytes32[4]",
      },
    ],
    name: "setPhase2MerkleRoots",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOracle",
        name: "_tapOracle",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_tapOracleData",
        type: "bytes",
      },
    ],
    name: "setTapOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tapOFT",
    outputs: [
      {
        internalType: "contract TapOFT",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tapOracle",
    outputs: [
      {
        internalType: "contract IOracle",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tapOracleData",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userParticipation",
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
] as const;

const _bytecode =
  "0x60e0346200025257601f62002af738819003918201601f19168301916001600160401b03831184841017620002575780849260a09460405283398101031262000252576200004d816200028d565b60208281015190916001600160a01b03808316929091908390036200025257816200007b604087016200028d565b916200009860806200009060608a016200028d565b98016200028d565b94600097885497338a7f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a3620000cf6200026d565b60c8815260be8282015260c8604082015260be60608201528a908b5b6004811062000215575050600e55620001036200026d565b6032815260288282015260286040820152602160608201528a918b905b60048210620001da57505050600f55600680546001600160a01b0319169185169190911790556080521660a0521660c0526001600160a81b031990911660089190911b610100600160a81b03161790556040516128549081620002a38239608051818181610f95015261147a015260a051818181610566015281816107b2015281816109e401528181610afd01528181610d5601528181611563015281816118de0152611b85015260c0518181816109140152610c840152f35b82949596975062000204829460019360ff84965116919060ff809160031b9316831b921b19161790565b940192018896959493929162000120565b91839495969750926200024082948460ff6001955116919060ff809160031b9316831b921b19161790565b930191019088969594939291620000eb565b600080fd5b634e487b7160e01b600052604160045260246000fd5b60405190608082016001600160401b038111838210176200025757604052565b51906001600160a01b0382168203620002525756fe6040608081526004908136101561001557600080fd5b6000803560e01c8063078dfbe7146120645780630edb93ca1461203357806310f95fbe14611e205780631595cef314611e0357806318f5e0ab14611c1057806319b657df14611b6f5780631fe8023714611aa057806320b86b8314611a7857806325b6ac1b14611a5a5780632d0012c314611a30578063422007c2146119f85780634e71e0c81461192f5780635c975abb1461190d5780637932431a146101fd5780637a8541b7146118c95780637f5ee6d01461177b5780638590f41314611527578063862dae99146114d25780638676950f146114a95780638b0c2dfc146114655780638da5cb5b14611439578063900cf0cf1461141857806392e038ef146113e0578063933f6da5146113b757806397d63d43146111ea578063a1bef73414610d29578063a70b9f0c14610d0b578063c3b88b4214610cb3578063c44ea57514610c6f578063c707ea3f14610c28578063c9eed54614610be1578063d7d491231461049b578063e30c397814610472578063e4ed31f81461025f578063f044f6231461022f578063f13d177414610202578063fae7e997146101fd5763fb4aaaac146101c257600080fd5b346101fa5760203660031901126101fa578235928310156101fa575060ff6101eb60209361236c565b92905490519260031b1c168152f35b80fd5b612384565b50903461022b578160031936011261022b5760065490516001600160a01b039091168152602090f35b5080fd5b50913461025b57602036600319011261025b5780359081101561025b5760209250600a01549051908152f35b8280fd5b50823461022b57606036600319011261022b5761027a612189565b926001600160a01b03602435818116929083900361046d576001600160401b0392604435848111610469576102b2903690870161219f565b9390976102c682895460081c1633146123fc565b168087526005602090815283882080546001600160a01b0319168417815590969195600191820192908611610456575061030082546121cc565b601f811161040f575b5087601f8611600114610386579260609286808b9c979461037599977fd70ea94304204d2530588b0d70f2ee633331140b793571367a494b7709768a629d9361037b575b501b906000198760031b1c19161790555b815197889788528701528501526060840191612658565b0390a180f35b89013592508e61034d565b82895287892090601f1987168a5b8181106103fa57509287959260609592610375997fd70ea94304204d2530588b0d70f2ee633331140b793571367a494b7709768a629d9e9996106103e0575b505085811b01905561035e565b880135600019600389901b60f8161c191690558c806103d3565b8c830135845592840192918a01918a01610394565b828952878920601f870160051c81019189881061044c575b601f0160051c019082905b828110610440575050610309565b60008155018290610432565b9091508190610427565b634e487b7160e01b895260419052602488fd5b8680fd5b600080fd5b50903461022b578160031936011261022b5760015490516001600160a01b039091168152602090f35b5091903461025b57602092836003193601126101fa576001600160401b0392803584811161025b576104d0903690830161219f565b9483835460c01c968715610ba357848811610b6b5788600192838a1460001461061957505033865250506009875284842054915061050f8215156126ac565b338452600987528385812055825460801c166202a300810180911161060657845163048e609360e21b815233938101939093526001600160801b031660248301526207a120604483015260648201528481608481857f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165af19182156105fb57916105ce575b50915b7fc1f179f14f884c05fb311c81504f038c245915305130f066c96a1a3ae9a4e4e7848351858152a251908152f35b90508381813d83116105f4575b6105e58183612237565b8101031261046d57513861059d565b503d6105db565b8351903d90823e3d90fd5b634e487b7160e01b845260118352602484fd5b60028a036108d5575050830186848203126108d15783359389810135908482116108cd57019080601f830112156104695781358481116108ba578851926005929180841b919061066b838f0187612237565b85528c808601928201019283116108b657908c809201905b8382106108a7575050505087518a8101903360601b8252601481526106a781612206565b51902091868610156108945783809187600a015494938a935b610843575b50505050906106d491146126ac565b826014018060141161081d573386526008895286862081875289526106ff60ff8888205416156126ec565b3386526008895286862090865288528585209060ff19825416179055825460801c166202a30081018091116106065760ff6107398361233e565b90549060031b1c1691670de0b6b3a7640000928381029381850414901517156108305760ff61076a6127109261236c565b90549060031b1c16029060018060801b039081831692830361081d57865163048e609360e21b81523395810195909552166024840152604483015260648201528481608481857f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165af19182156105fb57916107f0575b50916105a0565b90508381813d8311610816575b6108078183612237565b8101031261046d5751386107e9565b503d6107fd565b634e487b7160e01b865260118552602486fd5b634e487b7160e01b855260118452602485fd5b90919293825185101561088b5784821b83018e0151908181101561087b578b528d526108728b8b205b94612679565b929190826106c0565b908b528d526108728b8b2061086c565b938392506106c5565b634e487b7160e01b885260328752602488fd5b81358152908201908201610683565b8980fd5b634e487b7160e01b885260418752602488fd5b8780fd5b8580fd5b9295949290919060038a03610a73575082908101031261046d5785516331a9108f60e11b815290358382018190526001600160a01b03949189816024817f00000000000000000000000000000000000000000000000000000000000000008a165afa908115610a6957908692918891610a2c575b5061095790831633146126ac565b168086526008895286862060038752895261097860ff8888205416156126ec565b8552600888528585206003865288528585209060ff19825416179055815460801c16906202a3008201809211610a19579060848792858751958694859363048e609360e21b8552339085015260018060801b031660248401526207a12060448401526102ca60648401527f0000000000000000000000000000000000000000000000000000000000000000165af19182156105fb57916107f05750916105a0565b634e487b7160e01b845260119052602483fd5b809293508b8092503d8311610a62575b610a468183612237565b810103126104695790610957610a5c8793612447565b90610949565b503d610a3c565b88513d89823e3d90fd5b98969550505050818414610a8a575b5050506105a0565b9091929450338352601086528383205490610aa68215156126ac565b338452601087528385812055825460801c166202a300810180911161060657845163048e609360e21b815233938101939093526001600160801b0316602483015262050910604483015260648201528481608481857f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165af19182156105fb5791610b3e575b5091388080610a82565b90508381813d8311610b64575b610b558183612237565b8101031261046d575138610b34565b503d610b4b565b865162461bcd60e51b81528086018a905260126024820152711859188e88105a5c991c9bdc08195b99195960721b6044820152606490fd5b865162461bcd60e51b81528086018a905260186024820152771859188e88105a5c991c9bdc081b9bdd081cdd185c9d195960421b6044820152606490fd5b50346101fa5760203660031901126101fa57610bfb612189565b60018060a01b0390610c1482845460081c1633146123fc565b1660018060a01b0319600654161760065580f35b50903461022b578060031936011261022b5760209160ff9082906001600160a01b03610c52612189565b168152600885528181206024358252855220541690519015158152f35b50903461022b578160031936011261022b57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b50346101fa5760203660031901126101fa57610d07610cf2600184818060a01b039485610cde612189565b168152600560205220938454169301612258565b835193849384528060208501528301906122fe565b0390f35b50903461022b578160031936011261022b57602090516202a3008152f35b5091903461025b57610d3a366123d2565b835163682ee63560e11b81528581018490526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811696949593949093926080836024818b5afa9283156111e05787929185918b956111ae575b5084516001600160801b03918891610db690841642106124db565b8c610e2b83875460c01c9c169d8e8352602098899160058352610e03610df260018b88209b519b610de68d612206565b8a8154168d5201612258565b97848b019889528a5116151561251d565b8c5163430c208160e01b8152338b820190815260208101939093529384928391829160400190565b03915afa9182156111a3579161116a575b501561112757868801518b8e5260078752888e208b8f528752888e2054610e6291612568565b90610e6f8183101561258b565b8061111f5750955b610e8b670de0b6b3a76400008810156125c7565b8a8d52600786528c8a89822091528652878d2080549088820180921161110a57928a8f94868a8d96610eef96610ec99455015116968954168b612602565b9651169051835194858094819363d6d7d52560e01b83528c8c84015260248301906122fe565b03925af1908115611100578c916110d1575b50865163313ce56760e01b8152858186818f5afa908d82156110c657610f359594939260ff9290611099575b501692612754565b8451906323b872dd60e01b82523383830152306024830152604482015282816064818d8d5af1801561108f57611051575b50835163a9059cbb60e01b8152339181019182526020820184905294829186919082908c9082906040015b03927f0000000000000000000000000000000000000000000000000000000000000000165af1801561104757610ff3575b7fad9eeb6ac9c439fe4e01f186d3a05d5d27ec1f2449bd4042ec40224b5894b8dd935082519586528501523393a480f35b8084813d8311611040575b6110088183612237565b810103126108cd5761103a7fad9eeb6ac9c439fe4e01f186d3a05d5d27ec1f2449bd4042ec40224b5894b8dd94612615565b50610fc2565b503d610ffe565b83513d8a823e3d90fd5b8281813d8311611088575b6110668183612237565b810103126108b657610f9195839261107e8693612615565b5092509550610f66565b503d61105c565b85513d8c823e3d90fd5b6110b99150883d8a116110bf575b6110b18183612237565b81019061263f565b38610f2d565b503d6110a7565b8951903d90823e3d90fd5b6110f19150873d89116110f9575b6110e98183612237565b810190612622565b905038610f01565b503d6110df565b87513d8e823e3d90fd5b601187634e487b7160e01b6000525260246000fd5b905095610e77565b875162461bcd60e51b8152808601879052601a60248201527f6164623a204e6f7420617070726f766564206f72206f776e65720000000000006044820152606490fd5b90508681813d831161119c575b6111818183612237565b810103126111985761119290612615565b38610e3c565b8d80fd5b503d611177565b8a51903d90823e3d90fd5b6111d091955060803d81116111d9575b6111c88183612237565b81019061246f565b90509338610d9b565b503d6111be565b84513d8b823e3d90fd5b50913461025b576020806003193601126113b35781356001600160401b0381116113af5761121b90369084016123a2565b93909260018060a01b0361123681885460081c1633146123fc565b600695818754161561135d57875b81811061124f578880f35b8261126361125e83858b612688565b612698565b1690838954168651906370a0823160e01b825230878301528882602481875afa91821561135357908992918d92611320575b50885163a9059cbb60e01b81526001600160a01b03909116888201908152602081019290925293849182908e9082906040015b03925af18015611316576112e1575b6001915001611244565b8682813d831161130f575b6112f68183612237565b810103126108b657611309600192612615565b506112d7565b503d6112ec565b86513d8c823e3d90fd5b8381949293503d831161134c575b6113388183612237565b8101031261046d57905188916112c8611295565b503d61132e565b88513d8e823e3d90fd5b835162461bcd60e51b8152808401869052602660248201527f6164623a205061796d656e7420746f6b656e2062656e6566696369617279206e6044820152651bdd081cd95d60d21b6064820152608490fd5b8480fd5b8380fd5b50903461022b578160031936011261022b5760035490516001600160a01b039091168152602090f35b50903461022b57602036600319011261022b5760209181906001600160a01b03611408612189565b1681526010845220549051908152f35b50913461025b578260031936011261025b57602092505460c01c9051908152f35b50903461022b578160031936011261022b579054905160089190911c6001600160a01b03168152602090f35b50903461022b578160031936011261022b57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b50346101fa57806003193601126101fa57506001600160401b036020925460801c169051908152f35b50823461022b57608036600319011261022b573660841161022b5761150460018060a01b03835460081c1633146123fc565b80825b828110611512578380f35b6001906020833593019281600a015501611507565b509182913461177757611539366123d2565b835163682ee63560e11b815280860184905290956001600160a01b039590939290916080816024817f00000000000000000000000000000000000000000000000000000000000000008b165afa90811561176d57918793918793879161174d575b5080516001600160801b0394859390916115b790851642106124db565b84549a8b911696878a528c60209a60058c528481209a85519b6115d98d612206565b848154168d526001016115eb90612258565b948d8d01958652848d511615156116019061251d565b8d87890151928452600790528683209060c01c83528d528582205461162591612568565b9e8f10156116329061258b565b508061173157508c9b61168697611660916116598f670de0b6b3a7640000905b10156125c7565b168d612602565b9851169051908251808098819463eeb8a8d360e01b83528d8a84015260248301906122fe565b03915afa93841561172757908792918c95611704575b50820151169387519283809263313ce56760e01b82525afa9081156116fa576116d59493929160ff9160609b916116e357501692612754565b908251948552840152820152f35b6110b99150873d89116110bf576110b18183612237565b86513d8b823e3d90fd5b8391955061171e908a3d8c116110f9576110e98183612237565b9050949061169c565b88513d8d823e3d90fd5b9b61168697611660916116598f670de0b6b3a764000090611652565b611765915060803d81116111d9576111c88183612237565b90503861159a565b86513d87823e3d90fd5b5050fd5b5091903461025b57606036600319011261025b576001600160401b039082356024358381116108d1576117b190369086016123a2565b9093604435908111610469576117ca90369087016123a2565b909560018060a01b03936117e5858a5460081c1633146123fc565b828403611891576001810361183e575050865b828110611809575050505050505080f35b8061181861183992848a612688565b358561182861125e84888c612688565b168a526009602052868a2055612679565b6117f8565b1461184d575b50505050505080f35b865b82811061185c5750611844565b8061186b61188c92848a612688565b358561187b61125e84888c612688565b168a526010602052868a2055612679565b61184f565b855162461bcd60e51b815260208184015260126024820152711859188e881a5b9d985b1a59081a5b9c1d5d60721b6044820152606490fd5b50903461022b578160031936011261022b57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b50903461022b578160031936011261022b5760ff602092541690519015158152f35b50913461025b578260031936011261025b57600154916001600160a01b039182841691338390036119b55750508354918260081c167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a3610100600160a81b031916600882901b610100600160a81b03161782556001600160a01b03191660015580f35b906020606492519162461bcd60e51b8352820152602060248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152fd5b50903461022b57602036600319011261022b5760209181906001600160a01b03611a20612189565b1681526009845220549051908152f35b50346101fa5760203660031901126101fa578235928310156101fa575060ff6101eb60209361233e565b50903461022b578160031936011261022b5760209051620509108152f35b50913461025b578260031936011261025b575490516001600160801b03909116815260209150f35b50346101fa57806003193601126101fa57508051600091600254611ac3816121cc565b808452600191808316908115611b475750600114611aff575b5050611aed82610d07940383612237565b519182916020835260208301906122fe565b6002600090815260209550916000805160206127ff8339815191525b828410611b3457505050820190920191611aed82611adc565b8054868501880152928601928101611b1b565b610d079650611aed93506020915091859260ff191682840152151560051b8201019450611adc565b50809183346117775782600319360112611777577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316803b15611c0b578390828451809681936307ab01c760e21b83525af18015611c0157611bd7578380f35b6001600160401b038311611bee5750528180808380f35b634e487b7160e01b845260419052602483fd5b82513d86823e3d90fd5b505050fd5b50903461022b578060031936011261022b57611c2a612189565b6001600160401b03906024358281116113af57611c4a903690870161219f565b95909160018060a01b0390611c6682885460081c1633146123fc565b16928360018060a01b031960035416176003558611611df05750611c8b6002546121cc565b601f8111611d9f575b5083601f8611600114611d065790858596610375937f9b50fe786df475d101ca932bdbd73b94ccd27d5ca5677a776bca1d6dc52afb769791611cfb575b508160011b906000198360031b1c1916176002555b84519485948552806020860152840191612658565b905082013538611cd1565b600285526000805160206127ff83398151915290601f1987168660205b828210611d875750509187917f9b50fe786df475d101ca932bdbd73b94ccd27d5ca5677a776bca1d6dc52afb769798610375959410611d6d575b5050600181811b01600255611ce6565b830135600019600384901b60f8161c191690553880611d5d565b80600185968294968901358155019501930190611d23565b600285526000805160206127ff833981519152601f870160051c81019160208810611de6575b601f0160051c01905b818110611ddb5750611c94565b858155600101611dce565b9091508190611dc5565b634e487b7160e01b855260419052602484fd5b50903461022b578160031936011261022b57602090516102ca8152f35b50913461025b578260031936011261025b5780546001600160401b0391828260801c166202a3008101809111611fed5742106120005767ffffffffffffffff60801b4260801b1667ffffffffffffffff60801b198316811760c01c939092908414611fed576001600160801b03908116909217600193840160c01b6001600160c01b031916178155600354845163d6d7d52560e01b815260208184018190526002549195909492879287926001600160a01b0392909216918a918291611ee5826121cc565b91826024880152868282169182600014611fca575050600114611f88575b50509083809203925af18015611f7e577f3ef85928df9ae51bdb3eb4c00ec73b92b82307f319ac1b029de14796a0972609948791611f5f575b5082546001600160801b031916911690811791829055935193845260c01c92a280f35b611f769150863d88116110f9576110e98183612237565b905038611f3c565b85513d88823e3d90fd5b600284528984208493508a905b838510611fac575050505083016044018380611f03565b80548d8601604401528d98508c97508e95509301928a908201611f95565b90959450604492508593915060ff191682840152151560051b8201019192611f03565b634e487b7160e01b865260118252602486fd5b606490602085519162461bcd60e51b8352820152600d60248201526c30b2311d103a37b79039b7b7b760991b6044820152fd5b50913461025b578160031936011261025b576020928291358152600784528181206024358252845220549051908152f35b5091903461025b57606036600319011261025b57612080612189565b906024359283151584036113af576044359182151583036108d15760018060a01b03946120b486885460081c1633146123fc565b15612172578484169283159081159161216a575b501561212f5750508354928360081c167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a3610100600160a81b031990911660089190911b610100600160a81b0316178155600180546001600160a01b031916905580f35b906020606492519162461bcd60e51b835282015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152fd5b9050386120c8565b5050501660018060a01b0319600154161760015580f35b600435906001600160a01b038216820361046d57565b9181601f8401121561046d578235916001600160401b03831161046d576020838186019501011161046d57565b90600182811c921680156121fc575b60208310146121e657565b634e487b7160e01b600052602260045260246000fd5b91607f16916121db565b604081019081106001600160401b0382111761222157604052565b634e487b7160e01b600052604160045260246000fd5b90601f801991011681019081106001600160401b0382111761222157604052565b906040519182600082549261226c846121cc565b9081845260019485811690816000146122db5750600114612298575b505061229692500383612237565b565b9093915060005260209081600020936000915b8183106122c357505061229693508201013880612288565b855488840185015294850194879450918301916122ab565b91505061229694506020925060ff191682840152151560051b8201013880612288565b919082519283825260005b84811061232a575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201612309565b90600482101561235657601f8260051c600e01921690565b634e487b7160e01b600052603260045260246000fd5b90600482101561235657601f8260051c600f01921690565b3461046d57600036600319011261046d5760206040516207a1208152f35b9181601f8401121561046d578235916001600160401b03831161046d576020808501948460051b01011161046d57565b606090600319011261046d57600435906024356001600160a01b038116810361046d579060443590565b1561240357565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b51906001600160a01b038216820361046d57565b51906001600160801b038216820361046d57565b80929103916080831261046d57606061248782612447565b93601f19011261046d576040519060608201908282106001600160401b03831117612221576060916040526124be6020820161245b565b83526124cc6040820161245b565b60208401520151604082015290565b156124e257565b60405162461bcd60e51b81526020600482015260136024820152721859188e8813dc1d1a5bdb88195e1c1a5c9959606a1b6044820152606490fd5b1561252457565b606460405162461bcd60e51b815260206004820152602060248201527f6164623a205061796d656e7420746f6b656e206e6f7420737570706f727465646044820152fd5b9190820391821161257557565b634e487b7160e01b600052601160045260246000fd5b1561259257565b60405162461bcd60e51b815260206004820152600d60248201526c0c2c8c47440a8dede40d0d2ced609b1b6044820152606490fd5b156125ce57565b60405162461bcd60e51b815260206004820152600c60248201526b6164623a20546f6f206c6f7760a01b6044820152606490fd5b8181029291811591840414171561257557565b5190811515820361046d57565b919082604091031261046d57602061263983612615565b92015190565b9081602091031261046d575160ff8116810361046d5790565b908060209392818452848401376000828201840152601f01601f1916010190565b60001981146125755760010190565b91908110156123565760051b0190565b356001600160a01b038116810361046d5790565b156126b357565b60405162461bcd60e51b81526020600482015260116024820152706164623a204e6f7420656c696769626c6560781b6044820152606490fd5b156126f357565b60405162461bcd60e51b81526020600482015260196024820152781859188e88105b1c9958591e481c185c9d1a58da5c185d1959603a1b6044820152606490fd5b811561273e570490565b634e487b7160e01b600052601260045260246000fd5b612765612772939261276c92612734565b9182612797565b90612568565b90601203906012821161257557604d82116125755761279491600a0a90612734565b90565b90919060001983820992808202928380861095039480860395146127f15750620f4240918285101561046d5709118082038060fa1b04600160fa1b149114171561257557634e487b7160e01b600052601160045260246000fd5b93505050620f424090049056fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea26469706673582212200c91b88561e78613a12136f3ecb511f6898fec35a9493442dc7cf757be68ab0a64736f6c63430008120033";

type AirdropBrokerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AirdropBrokerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AirdropBroker__factory extends ContractFactory {
  constructor(...args: AirdropBrokerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AirdropBroker";
  }

  override deploy(
    _aoTAP: PromiseOrValue<string>,
    _tapOFT: PromiseOrValue<string>,
    _pcnft: PromiseOrValue<string>,
    _paymentTokenBeneficiary: PromiseOrValue<string>,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AirdropBroker> {
    return super.deploy(
      _aoTAP,
      _tapOFT,
      _pcnft,
      _paymentTokenBeneficiary,
      _owner,
      overrides || {}
    ) as Promise<AirdropBroker>;
  }
  override getDeployTransaction(
    _aoTAP: PromiseOrValue<string>,
    _tapOFT: PromiseOrValue<string>,
    _pcnft: PromiseOrValue<string>,
    _paymentTokenBeneficiary: PromiseOrValue<string>,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _aoTAP,
      _tapOFT,
      _pcnft,
      _paymentTokenBeneficiary,
      _owner,
      overrides || {}
    );
  }
  override attach(address: string): AirdropBroker {
    return super.attach(address) as AirdropBroker;
  }
  override connect(signer: Signer): AirdropBroker__factory {
    return super.connect(signer) as AirdropBroker__factory;
  }
  static readonly contractName: "AirdropBroker";

  public readonly contractName: "AirdropBroker";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AirdropBrokerInterface {
    return new utils.Interface(_abi) as AirdropBrokerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AirdropBroker {
    return new Contract(address, _abi, signerOrProvider) as AirdropBroker;
  }
}

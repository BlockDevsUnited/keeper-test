let provider
let signer
let accounts

let overrides = {gasLimit:300000}

let AgreementStoreManagerAddress = "0x111d0cFbC2A9bBb646813Da380A78685045b8316"
let AgreementStoreManagerABI = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "bytes32"
			}
		],
		"name": "getAgreementDIDOwner",
		"outputs": [
			{
				"name": "didOwner",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_templateId",
				"type": "bytes32"
			}
		],
		"name": "getAgreementIdsForTemplateId",
		"outputs": [
			{
				"name": "",
				"type": "bytes32[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "bytes32"
			}
		],
		"name": "getAgreementActors",
		"outputs": [
			{
				"name": "actors",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getDIDRegistryAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_did",
				"type": "bytes32"
			}
		],
		"name": "getAgreementIdsForDID",
		"outputs": [
			{
				"name": "",
				"type": "bytes32[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getAgreementListSize",
		"outputs": [
			{
				"name": "size",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "bytes32"
			},
			{
				"name": "_did",
				"type": "bytes32"
			},
			{
				"name": "_templateId",
				"type": "bytes32"
			},
			{
				"name": "_conditionIds",
				"type": "bytes32[]"
			},
			{
				"name": "_timeLocks",
				"type": "uint256[]"
			},
			{
				"name": "_timeOuts",
				"type": "uint256[]"
			},
			{
				"name": "_actors",
				"type": "address[]"
			}
		],
		"name": "createAgreement",
		"outputs": [
			{
				"name": "size",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "isOwner",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "bytes32"
			},
			{
				"name": "_did",
				"type": "bytes32"
			},
			{
				"name": "_conditionTypes",
				"type": "address[]"
			},
			{
				"name": "_conditionIds",
				"type": "bytes32[]"
			},
			{
				"name": "_timeLocks",
				"type": "uint256[]"
			},
			{
				"name": "_timeOuts",
				"type": "uint256[]"
			}
		],
		"name": "createAgreement",
		"outputs": [
			{
				"name": "size",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "bytes32"
			},
			{
				"name": "_actor",
				"type": "address"
			}
		],
		"name": "getActorType",
		"outputs": [
			{
				"name": "actorType",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "sender",
				"type": "address"
			}
		],
		"name": "initialize",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "bytes32"
			},
			{
				"name": "_provider",
				"type": "address"
			}
		],
		"name": "isAgreementDIDProvider",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "bytes32"
			},
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "isAgreementDIDOwner",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "bytes32"
			}
		],
		"name": "getAgreement",
		"outputs": [
			{
				"name": "did",
				"type": "bytes32"
			},
			{
				"name": "didOwner",
				"type": "address"
			},
			{
				"name": "templateId",
				"type": "bytes32"
			},
			{
				"name": "conditionIds",
				"type": "bytes32[]"
			},
			{
				"name": "lastUpdatedBy",
				"type": "address"
			},
			{
				"name": "blockNumberUpdated",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			},
			{
				"name": "_conditionStoreManagerAddress",
				"type": "address"
			},
			{
				"name": "_templateStoreManagerAddress",
				"type": "address"
			},
			{
				"name": "_didRegistryAddress",
				"type": "address"
			}
		],
		"name": "initialize",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "agreementId",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"name": "did",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"name": "createdBy",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "createdAt",
				"type": "uint256"
			}
		],
		"name": "AgreementCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "agreementId",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"name": "actor",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "actorType",
				"type": "bytes32"
			}
		],
		"name": "AgreementActorAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	}
]
let AgreementStoreManager

let ConditionStoreManagerAddress = "0xb7a13678868f5aD564aC5977CE25cfc62BB46410"
let ConditionStoreManagerABI = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "addr",
				"type": "address"
			}
		],
		"name": "isContract",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "bytes32"
			}
		],
		"name": "getCondition",
		"outputs": [
			{
				"name": "typeRef",
				"type": "address"
			},
			{
				"name": "state",
				"type": "uint8"
			},
			{
				"name": "timeLock",
				"type": "uint256"
			},
			{
				"name": "timeOut",
				"type": "uint256"
			},
			{
				"name": "blockNumber",
				"type": "uint256"
			},
			{
				"name": "lastUpdatedBy",
				"type": "address"
			},
			{
				"name": "blockNumberUpdated",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "bytes32"
			}
		],
		"name": "getConditionState",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "delegatee",
				"type": "address"
			}
		],
		"name": "delegateCreateRole",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "bytes32"
			},
			{
				"name": "_newState",
				"type": "uint8"
			}
		],
		"name": "updateConditionState",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "bytes32"
			}
		],
		"name": "isConditionTimeLocked",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "bytes32"
			}
		],
		"name": "isConditionTimedOut",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getCurrentBlockNumber",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "isOwner",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getCreateRole",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "initialize",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "bytes32"
			},
			{
				"name": "delegatee",
				"type": "address"
			}
		],
		"name": "delegateUpdateRole",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "bytes32"
			},
			{
				"name": "_typeRef",
				"type": "address"
			}
		],
		"name": "createCondition",
		"outputs": [
			{
				"name": "size",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "bytes32"
			},
			{
				"name": "_typeRef",
				"type": "address"
			},
			{
				"name": "_timeLock",
				"type": "uint256"
			},
			{
				"name": "_timeOut",
				"type": "uint256"
			}
		],
		"name": "createCondition",
		"outputs": [
			{
				"name": "size",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getConditionListSize",
		"outputs": [
			{
				"name": "size",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_id",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"name": "_typeRef",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_who",
				"type": "address"
			}
		],
		"name": "ConditionCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_id",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"name": "_typeRef",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_state",
				"type": "uint8"
			},
			{
				"indexed": false,
				"name": "_who",
				"type": "address"
			}
		],
		"name": "ConditionUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	}
]
let ConditionStoreManager

let TemplateStoreManagerAddress = "0x5D1297d1bF40279Bc36185315844C80A537dA94C"
let TemplateStoreManagerABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "bytes32"
			}
		],
		"name": "approveTemplate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_Id",
				"type": "bytes32"
			}
		],
		"name": "deregisterTemplateActorType",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "address"
			},
			{
				"name": "_conditionTypes",
				"type": "address[]"
			},
			{
				"name": "_actorTypeIds",
				"type": "bytes32[]"
			},
			{
				"name": "name",
				"type": "string"
			}
		],
		"name": "proposeTemplate",
		"outputs": [
			{
				"name": "size",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "bytes32"
			},
			{
				"name": "_conditionTypes",
				"type": "address[]"
			},
			{
				"name": "_actorTypeIds",
				"type": "bytes32[]"
			},
			{
				"name": "name",
				"type": "string"
			}
		],
		"name": "proposeTemplate",
		"outputs": [
			{
				"name": "size",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_actorType",
				"type": "string"
			}
		],
		"name": "registerTemplateActorType",
		"outputs": [
			{
				"name": "actorTypeId",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "bytes32"
			}
		],
		"name": "revokeTemplate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "Id",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "conditionTypes",
				"type": "address[]"
			},
			{
				"indexed": false,
				"name": "actorTypeIds",
				"type": "bytes32[]"
			}
		],
		"name": "TemplateProposed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "Id",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "state",
				"type": "bool"
			}
		],
		"name": "TemplateApproved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "Id",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "state",
				"type": "bool"
			}
		],
		"name": "TemplateRevoked",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "templateName",
				"type": "string"
			}
		],
		"name": "generateId",
		"outputs": [
			{
				"name": "Id",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "bytes32"
			}
		],
		"name": "getTemplate",
		"outputs": [
			{
				"name": "state",
				"type": "uint8"
			},
			{
				"name": "owner",
				"type": "address"
			},
			{
				"name": "lastUpdatedBy",
				"type": "address"
			},
			{
				"name": "blockNumberUpdated",
				"type": "uint256"
			},
			{
				"name": "conditionTypes",
				"type": "address[]"
			},
			{
				"name": "actorTypes",
				"type": "bytes32[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "actorType",
				"type": "string"
			}
		],
		"name": "getTemplateActorTypeId",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getTemplateActorTypeIds",
		"outputs": [
			{
				"name": "actorTypes",
				"type": "bytes32[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_Id",
				"type": "bytes32"
			}
		],
		"name": "getTemplateActorTypeState",
		"outputs": [
			{
				"name": "state",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_Id",
				"type": "bytes32"
			}
		],
		"name": "getTemplateActorTypeValue",
		"outputs": [
			{
				"name": "actorType",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getTemplateListSize",
		"outputs": [
			{
				"name": "size",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "address"
			}
		],
		"name": "isTemplateApproved",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "bytes32"
			}
		],
		"name": "isTemplateIdApproved",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
let TemplateStoreManager

let DIDRegistryAddress = "0x2e793e9d4D48E0Cc2Dd947E12cB262120e82Df9a"
let DIDRegistryABI = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "_did",
				"type": "bytes32"
			}
		],
		"name": "getDIDRegister",
		"outputs": [
			{
				"name": "owner",
				"type": "address"
			},
			{
				"name": "lastChecksum",
				"type": "bytes32"
			},
			{
				"name": "lastUpdatedBy",
				"type": "address"
			},
			{
				"name": "blockNumberUpdated",
				"type": "uint256"
			},
			{
				"name": "providers",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getDIDRegistrySize",
		"outputs": [
			{
				"name": "size",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_did",
				"type": "bytes32"
			},
			{
				"name": "_provider",
				"type": "address"
			}
		],
		"name": "isDIDProvider",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_did",
				"type": "bytes32"
			},
			{
				"name": "_checksum",
				"type": "bytes32"
			},
			{
				"name": "_providers",
				"type": "address[]"
			},
			{
				"name": "_value",
				"type": "string"
			}
		],
		"name": "registerAttribute",
		"outputs": [
			{
				"name": "size",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_did",
				"type": "bytes32"
			},
			{
				"name": "_grantee",
				"type": "address"
			}
		],
		"name": "getPermission",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_did",
				"type": "bytes32"
			}
		],
		"name": "getDIDOwner",
		"outputs": [
			{
				"name": "didOwner",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getDIDRegisterIds",
		"outputs": [
			{
				"name": "",
				"type": "bytes32[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_did",
				"type": "bytes32"
			},
			{
				"name": "_provider",
				"type": "address"
			}
		],
		"name": "removeDIDProvider",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "isOwner",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_did",
				"type": "bytes32"
			},
			{
				"name": "_provider",
				"type": "address"
			}
		],
		"name": "addDIDProvider",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_did",
				"type": "bytes32"
			},
			{
				"name": "_grantee",
				"type": "address"
			}
		],
		"name": "revokePermission",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_did",
				"type": "bytes32"
			}
		],
		"name": "getBlockNumberUpdated",
		"outputs": [
			{
				"name": "blockNumberUpdated",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_did",
				"type": "bytes32"
			},
			{
				"name": "_grantee",
				"type": "address"
			}
		],
		"name": "grantPermission",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "initialize",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_did",
				"type": "bytes32"
			},
			{
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "transferDIDOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_did",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_checksum",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "_value",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_lastUpdatedBy",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_blockNumberUpdated",
				"type": "uint256"
			}
		],
		"name": "DIDAttributeRegistered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_did",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "_provider",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "state",
				"type": "bool"
			}
		],
		"name": "DIDProviderRemoved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_did",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "_provider",
				"type": "address"
			}
		],
		"name": "DIDProviderAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_did",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "_previousOwner",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "DIDOwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_did",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_grantee",
				"type": "address"
			}
		],
		"name": "DIDPermissionGranted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_did",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_grantee",
				"type": "address"
			}
		],
		"name": "DIDPermissionRevoked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	}
]
let DIDRegistry

let HashLockConditionAddress = "0x61acC5382f42172efD052E54800a0ffcd8F2BB59"
let HashLockConditionABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "bytes32"
			}
		],
		"name": "abortByTimeOut",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_agreementId",
				"type": "bytes32"
			},
			{
				"name": "_preimage",
				"type": "bytes32"
			}
		],
		"name": "fulfill",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_agreementId",
				"type": "bytes32"
			},
			{
				"name": "_preimage",
				"type": "string"
			}
		],
		"name": "fulfill",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_agreementId",
				"type": "bytes32"
			},
			{
				"name": "_preimage",
				"type": "uint256"
			}
		],
		"name": "fulfill",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			},
			{
				"name": "_conditionStoreManagerAddress",
				"type": "address"
			}
		],
		"name": "initialize",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "sender",
				"type": "address"
			}
		],
		"name": "initialize",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_agreementId",
				"type": "bytes32"
			},
			{
				"name": "_valueHash",
				"type": "bytes32"
			}
		],
		"name": "generateId",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_preimage",
				"type": "bytes32"
			}
		],
		"name": "hashValues",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_preimage",
				"type": "uint256"
			}
		],
		"name": "hashValues",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_preimage",
				"type": "string"
			}
		],
		"name": "hashValues",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "isOwner",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
let HashLockCondition

let TestCashAddress = "0x90c53c88aF5D4D95a6B10caE9d7FF5AA965677ca"
let TestCashABI = [
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_spender",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "balances",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "allowed",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "balance",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "bountyHunter",
				"type": "address"
			},
			{
				"name": "bounty",
				"type": "uint256"
			}
		],
		"name": "payBounty",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			},
			{
				"name": "_spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"name": "remaining",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_spender",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	}
]
let TestCash

let EscrowRewardAddress = "0xFCE472Aa4c254042A286AA807bDD81Cfecf412e4"
let EscrowRewardABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "bytes32"
			}
		],
		"name": "abortByTimeOut",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_agreementId",
				"type": "bytes32"
			},
			{
				"name": "_amount",
				"type": "uint256"
			},
			{
				"name": "_receiver",
				"type": "address"
			},
			{
				"name": "_sender",
				"type": "address"
			},
			{
				"name": "_lockCondition",
				"type": "bytes32"
			},
			{
				"name": "_releaseCondition",
				"type": "bytes32"
			}
		],
		"name": "fulfill",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_amount",
				"type": "uint256"
			},
			{
				"name": "_receiver",
				"type": "address"
			},
			{
				"name": "_sender",
				"type": "address"
			},
			{
				"name": "_lockCondition",
				"type": "bytes32"
			},
			{
				"name": "_releaseCondition",
				"type": "bytes32"
			}
		],
		"name": "hashValues",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "isOwner",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			},
			{
				"name": "_conditionStoreManagerAddress",
				"type": "address"
			},
			{
				"name": "_tokenAddress",
				"type": "address"
			}
		],
		"name": "initialize",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "sender",
				"type": "address"
			}
		],
		"name": "initialize",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_agreementId",
				"type": "bytes32"
			},
			{
				"name": "_valueHash",
				"type": "bytes32"
			}
		],
		"name": "generateId",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_agreementId",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"name": "_receiver",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_conditionId",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "Fulfilled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	}
]
let EscrowReward

let LockRewardAddress = "0x4b7D787F10ec1d6fbfe7EBE2B33632eEFc768908"
let LockRewardABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "bytes32"
			}
		],
		"name": "abortByTimeOut",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_agreementId",
				"type": "bytes32"
			},
			{
				"name": "_rewardAddress",
				"type": "address"
			},
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "fulfill",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_agreementId",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"name": "_rewardAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_conditionId",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "Fulfilled",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			},
			{
				"name": "_conditionStoreManagerAddress",
				"type": "address"
			},
			{
				"name": "_tokenAddress",
				"type": "address"
			}
		],
		"name": "initialize",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "sender",
				"type": "address"
			}
		],
		"name": "initialize",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_agreementId",
				"type": "bytes32"
			},
			{
				"name": "_valueHash",
				"type": "bytes32"
			}
		],
		"name": "generateId",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_rewardAddress",
				"type": "address"
			},
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "hashValues",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "isOwner",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
let LockReward

async function initialize(web3) {
  await ethereum.enable()
  provider = new ethers.providers.Web3Provider(web3.currentProvider)
  accounts = await provider.listAccounts()
  signer = provider.getSigner(accounts[0])

  AgreementStoreManager = new ethers.Contract(AgreementStoreManagerAddress, AgreementStoreManagerABI, signer);
  ConditionStoreManager = new ethers.Contract(ConditionStoreManagerAddress, ConditionStoreManagerABI, signer);
  TemplateStoreManager = new ethers.Contract(TemplateStoreManagerAddress, TemplateStoreManagerABI, signer);
  DIDRegistry = new ethers.Contract(DIDRegistryAddress, DIDRegistryABI, signer);
  HashLockCondition = new ethers.Contract(HashLockConditionAddress, HashLockConditionABI, signer);
	TestCash = new ethers.Contract(TestCashAddress,TestCashABI,signer)
	EscrowReward = new ethers.Contract(EscrowRewardAddress,EscrowRewardABI,signer)
	LockReward = new ethers.Contract(LockRewardAddress,LockRewardABI,signer)


}

async function createAgreement(did,templateId,agreementId) {
	let escrowAmount = 25000000000000
	let secret = "0x0000000000000000000000000000000000000000000000000000000000000007"
	let sender = signer._address
	let receiver = "0x81695e4aCb75dFdd714b50877c9277312398387c"
	const conditionIdLock = await LockReward.generateId(agreementId, await LockReward.hashValues(EscrowRewardAddress, escrowAmount))
	const conditionIdHashLock = await HashLockCondition.generateId(agreementId, await HashLockCondition.hashValues(secret))
	const conditionIdEscrow = await EscrowReward.generateId(agreementId, await EscrowReward.hashValues(escrowAmount, receiver, sender, conditionIdLock, conditionIdHashLock))


	let agreement = {
			            did: did,
			            templateId: templateId,
			            conditionIds: [
			                conditionIdLock,
			                conditionIdHashLock,
			                conditionIdEscrow
			            ],
			            timeLocks: [0, 0, 0],
			            timeOuts: [0, 0, 0],
			            actors: []
			        }

		console.log(agreement)

		await AgreementStoreManager.createAgreement(agreementId,
                ...Object.values(agreement))


}

async function proposeTemplate() {
	let conditionTypes = [
						LockRewardAddress,
						HashLockConditionAddress,
						EscrowRewardAddress
				]
}

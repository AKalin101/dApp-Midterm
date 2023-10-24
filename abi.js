let contractAddress = "0x7f1DEE6150E15F794100622E02E6F5F37905282E"
let abi = 
[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "voter",
				"type": "address"
			}
		],
		"name": "VotedPlayStation",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "voter",
				"type": "address"
			}
		],
		"name": "VotedXbox",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "getVotes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "playstation",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "xbox",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "hasVoted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "votePlayStation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "voteXbox",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "votes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "playstationVotes",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "xboxVotes",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
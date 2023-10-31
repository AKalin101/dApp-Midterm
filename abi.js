let contractAddress = "0xf397373d55735eee0DDFcc9C5c5fb68d7212218e"
let abi = 
[
	{
		"inputs": [],
		"name": "voteNintendo",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"name": "voteSteam",
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
		"name": "getVotes",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "playstation",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "xbox",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "steam",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "nintendo",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
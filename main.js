// Check if Web3 has been injected by the browser (Mist/MetaMask)
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    // Set the provider you want from Web3.providers (e.g. if you're using Ganache for local development)
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }
  
  // Check if user is connected to Ethereum
  web3.eth.getAccounts(function(err, accounts){
    if (err != null) {
        alert("Error retrieving accounts.");
        return;
    }
    if (accounts.length === 0) {
        alert("No accounts found. Make sure Ethereum client is connected.");
        return;
    }
  
    let account = accounts[0]; // The first account
  
    // Contract ABI (from your Solidity contract, can be generated using Remix or truffle compile)
    let abi = [
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
  
    // Contract address (replace with the address after deploying your contract)
    let contractAddress = "0x7E23B900576423eFe5F69944dc94cF836f42CF36";
  
    // Create a new contract instance with the provided ABI and address
    let consoleVoteContract = new web3.eth.Contract(abi, contractAddress);
  
    $('#voteForPlayStation').on("click", function() {
      voteForPlayStation()
    })
  
    $('#voteForXbox').on("click", function() {
      voteForXbox()
    })
  
    // Function to vote for PlayStation
    function voteForPlayStation() {
        consoleVoteContract.methods.votePlayStation().send({from: account}, function(error, transactionHash) {
            if (error) {
                console.log("Error: ", error);
            } else {
                console.log("Vote for PlayStation successful! Transaction Hash: ", transactionHash);
            }
        });
    }
  
    // Function to vote for Xbox
    function voteForXbox() {
        consoleVoteContract.methods.voteXbox().send({from: account}, function(error, transactionHash) {
            if (error) {
                console.log("Error: ", error);
            } else {
                console.log("Vote for Xbox successful! Transaction Hash: ", transactionHash);
            }
        });
    }
  
    // Function to retrieve the current vote counts
    function getVoteCounts() {
        consoleVoteContract.methods.getVotes().call().then(function(result) {
            console.log("PlayStation Votes: ", result[0]);
            console.log("Xbox Votes: ", result[1]);
        });
    }
  });
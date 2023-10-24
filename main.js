    //Dougs Code 
let contract;
let signer;
let contractWithSigner;

main();

async function main() {
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  await provider.send("eth_requestAccounts", []);
  signer = provider.getSigner();
  contract = new ethers.Contract(contractAddress, abi, provider);
  contractWithSigner = contract.connect(signer);

  $('#voteForPlayStation').on("click", function() {
    contractWithSigner.votePlayStation()
  })

  $('#voteForXbox').on("click", function() {
    contractWithSigner.voteXbox()
  })

  $('#voteForSteam').on("click", function() {
    contractWithSigner.voteSteam()
  })

  $('#voteForNintendo').on("click", function() {
    contractWithSigner.voteNintendo()
  })

  getVotes()
}

async function getVotes(){
  const votes = await contract.getVotes()

  for (let i = 0; i < $('.vote').length; i++) {
    const consoleName = $('.vote')[i].id.replace('Votes', "")
    $('.vote')[i].textContent = votes[consoleName].toString()
  }
}
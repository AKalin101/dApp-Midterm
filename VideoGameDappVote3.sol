// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract VideoGameDappVoteV4 {
    uint8 playstationVotes;
    uint8 xboxVotes;
    uint8 steamVotes;
    uint8 nintendoVotes;

    // Function to cast a vote for PlayStation
    function votePlayStation() public {
        playstationVotes += 1;
    }

    // Function to cast a vote for Xbox
    function voteXbox() public {
        xboxVotes += 1;
    }

      // Function to cast a vote for Steam
    function voteSteam() public {
        steamVotes += 1;
    }

       // Function to cast a vote for Nintendo
    function voteNintendo() public {
        nintendoVotes += 1;
    }

    // Getter function to retrieve the current vote counts
    function getVotes() public view returns (uint playstation, uint xbox,  uint steam, uint nintendo) {
        return (playstationVotes, xboxVotes, steamVotes, nintendoVotes);
    }
}

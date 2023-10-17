// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ConsoleVote {

    // Data structure to hold the number of votes for each console
    struct VoteCount {
        uint playstationVotes;
        uint xboxVotes;
    }

    VoteCount public votes;

    // Keep track of addresses that have voted to prevent double voting
    mapping(address => bool) public hasVoted;

    // Events to log when a vote is cast
    event VotedPlayStation(address indexed voter);
    event VotedXbox(address indexed voter);

    // Function to cast a vote for PlayStation
    function votePlayStation() public {
        require(!hasVoted[msg.sender], "You have already voted!");

        votes.playstationVotes += 1;
        hasVoted[msg.sender] = true;

        emit VotedPlayStation(msg.sender);
    }

    // Function to cast a vote for Xbox
    function voteXbox() public {
        require(!hasVoted[msg.sender], "You have already voted!");

        votes.xboxVotes += 1;
        hasVoted[msg.sender] = true;

        emit VotedXbox(msg.sender);
    }

    // Getter function to retrieve the current vote counts
    function getVotes() public view returns (uint playstation, uint xbox) {
        return (votes.playstationVotes, votes.xboxVotes);
    }
}

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Potato {
    uint256 potato;
    uint256 sourcream;
    uint256 cheese;
    uint256 bacon;
    uint256 chives;

    // Function to add ingredients
    function addingredients(uint256 _potato, uint256 _sourcream, uint256 _cheese, uint256 _bacon, uint256 _chives) public {
        potato += _potato;
        sourcream += _sourcream;
        cheese += _cheese;
        bacon += _bacon;
        chives += _chives;
    }

    // Function to get ingredient values as an array
    function getIngredients() public view returns (uint256[] memory) {
        uint256[] memory ingredients = new uint256[](5);
        ingredients[0] = potato;
        ingredients[1] = sourcream;
        ingredients[2] = cheese;
        ingredients[3] = bacon;
        ingredients[4] = chives;
        return ingredients;
    }

    // Function to buy a potato with optional ingredients
    function buyPotato(uint256 _sourcream, uint256 _cheese, uint256 _bacon, uint256 _chives) public payable {
        require(potato >= 1, "Not enough potatoes available.");
        require(sourcream >= _sourcream, "Not enough sour cream available.");
        require(cheese >= _cheese, "Not enough cheese available.");
        require(bacon >= _bacon, "Not enough bacon available.");
        require(chives >= _chives, "Not enough chives available.");

        // Calculate the total cost
        uint256 totalCost = 0.005 ether + (_sourcream + _cheese + _bacon + _chives) * 0.001 ether;

        // Check if the user sent enough ETH
        require(msg.value >= totalCost, "Not enough ETH sent.");

        // Decrease the ingredient counts
        potato -= 1; // Must buy at least one potato
        sourcream -= _sourcream;
        cheese -= _cheese;
        bacon -= _bacon;
        chives -= _chives;
    }
}

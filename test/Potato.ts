import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";
import { ethers } from "hardhat";

describe("Potato", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployPotato() {

    // Contracts are deployed using the first signer/account by default
    const [owner] = await hre.ethers.getSigners();

    const Potato = await hre.ethers.getContractFactory("Potato");
    const potato = await Potato.deploy();

    return potato;
  }

  it("should add five potatoes and one bacon and get the item counts", async function () {
    const potato = await deployPotato();

    // Add five potatoes
    await potato.addIngredient(5, 0, 0, 0, 0);
    // Add one bacon
    await potato.addIngredient(0, 0, 0, 1, 0);

    // Get the ingredient counts
    const ingredientCounts = await potato.getIngredients();

    // Check the counts
    expect(ingredientCounts[0]).to.equal(5);
    expect(ingredientCounts[3]).to.equal(1);
  });

  it("should buy 1 potato and one bacon and get the item counts", async function () {
    const potato = await deployPotato();

    await potato.addIngredient(5, 0, 0, 0, 0);
    // Add one bacon
    await potato.addIngredient(0, 0, 0, 1, 0);
    
    const price = ethers.parseEther("0.1");
    await potato.buyPotato(1, 0, 0, 1, 0, { value: price });

    const ingredientCounts = await potato.getIngredients();

    // Check the counts
    expect(ingredientCounts[0]).to.equal(4);
    expect(ingredientCounts[3]).to.equal(0);
  })







});

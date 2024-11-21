import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
const { vars } = require("hardhat/config");
require("@nomicfoundation/hardhat-toolbox");
import dotenv from "dotenv"; // Import dotenv

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    eth_sepolia: {
      url: "https://eth-mainnet.g.alchemy.com/v2/bQAnnzf9rbunRR02-xrDgFnkQy_z8l8d",
      accounts: [process.env.PRIVATE_KEY!]
    }
  },
};

export default config;

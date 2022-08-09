import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import * as dotenv from 'dotenv'

dotenv.config()

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: process.env.INFURA,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasPrice: 1000
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};

export default config;

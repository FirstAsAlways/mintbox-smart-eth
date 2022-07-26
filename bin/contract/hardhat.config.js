require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: {
    version: "0.8.13",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    mainnet: {
      url: "https://mainnet." + process.env.PROVIDER,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY]
    },
    rinkeby: {
      url: "https://rinkeby." + process.env.PROVIDER,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY]
    },
    hardhat: {}
  },
  gasReporter: {
    enabled: true,
    currency: "USD"
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};

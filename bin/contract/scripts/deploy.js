const { ethers } = require("hardhat");
require("dotenv").config("../.env");

async function deploy() {
  const [deployer] = await ethers.getSigners();
  console.log(`deploying with ${deployer.address}`);

  const MintBox = await ethers.getContractFactory("MintBox");
  const mintBox = await MintBox.deploy();
  await mintBox.deployed();

  console.log(`MintBox contract address: ${mintBox.address}`);

  // set signer
  console.log("setting signers");
  const setSigner = await mintBox.setSigner(process.env.SIGNER_ADDRESS);
  await setSigner.wait();
  console.log("set signer as " + process.env.SIGNER_ADDRESS);
}

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

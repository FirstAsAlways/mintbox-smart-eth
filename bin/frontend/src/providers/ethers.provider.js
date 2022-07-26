import { ethers } from "ethers";
// import DollIslandJSON from "./DollIsland.json";
// const DollIslandAddress = "0xC2e24a0d8c30f8b65813781b88317980972E5973";

let provider;
if (window.ethereum) {
  provider = new ethers.providers.Web3Provider(window.ethereum, "any");
} else {
  provider = null;
}

const signer = provider?.getSigner();

// const dollIslandContract = new ethers.Contract(
//   DollIslandAddress,
//   DollIslandJSON.abi,
//   signer
// );

// export { provider, dollIslandContract };
export { provider };

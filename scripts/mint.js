const hre = require("hardhat");
const contractJSON = require("../artifacts/contracts/NFT.sol/NFT.json");
require('dotenv').config()

const contractAddress = "0x227158d8Bcb32b84a2A0BC11B7E0B7cA500Ad1F0"; // ERC contract address
const contractABI = contractJSON.abi;
const walletAddress = "0x69667b36755222864cfa8ACB3777a5842C4c8a51"; // Own public address
let noOfNFTs = 5;
async function main() {

    const contract = await hre.ethers.getContractAt(contractABI, contractAddress);
  
    const tx = await contract.mint(walletAddress, noOfNFTs);
    await tx.wait();

    console.log(walletAddress + " now has: " + await contract.balanceOf(walletAddress) + " NFTs");
  }

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
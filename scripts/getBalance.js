const hre = require("hardhat");
const contractJSON = require("../artifacts/contracts/NFT.sol/NFT.json");

const contractAddress = "Address"; // place your polygon contract address here
const contractABI = contractJSON.abi;
const walletAddress = "Address"; // place the public address for your wallet here

async function main() {

    const contract = await hre.ethers.getContractAt(contractABI, contractAddress);

    console.log(`${walletAddress} has: ${await contract.balanceOf(walletAddress)} NFTs`);

  }

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

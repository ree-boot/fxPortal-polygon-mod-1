const hre = require("hardhat");
const contractJSON = require("../artifacts/contracts/NFT.sol/NFT.json");

const contractAddress = "0x7c950A0f8cAcbf5CEc57C0B7B488baA6e1555B96"; // place your poly contract address here
const contractABI = contractJSON.abi;
const walletAddress = "0x69667b36755222864cfa8ACB3777a5842C4c8a51"; // place your public address for your wallet here

async function main() {

    const contract = await hre.ethers.getContractAt(contractABI, contractAddress);

    console.log(`${walletAddress} has: ${await contract.balanceOf(walletAddress)} NFTs`);

  }

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const contractJSON = require("../artifacts/contracts/NFT.sol/NFT.json");

const contractAddress = "Address"; // ERC721 contract address
const contractABI = contractJSON.abi;
const fxERC721ContractAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de"; // default value no need to change
const walletAddress = "Address"; // place your public address for your wallet here

async function main() {

    const contract = await hre.ethers.getContractAt(contractABI, contractAddress);
    const fxContract = 
      await hre.ethers.getContractAt(fxRootContractABI, fxERC721ContractAddress);
    const totalNFTs = await contract.totalSupply();
    for (let i = 0; i < totalNFTs; i++) {
        const approveTx = await contract.approve(fxERC721ContractAddress, i);
        await approveTx.wait();
        console.log(`NFT with tokenId ${i} approved`);
    }
    console.log("NFTs approved");
    
    for (let i = 0; i< totalNFTs;i++) {
      const depositTx = 
        await fxContract.deposit(contractAddress, walletAddress, i, "0x6556");
        await depositTx.wait();
        console.log(`NFT with TokenId ${i} deposited`);
    }

    console.log("NFTs deposited");
  
  }

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

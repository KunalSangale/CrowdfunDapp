const hre = require("hardhat");
const {network}= require("hardhat")
const { ethers, getNamedAccounts } = require("hardhat")
async function main() {

  // We get the contract to deploy
  const Crowdfunding = await hre.ethers.getContractFactory("Crowdfunding");
  //const Project= await hre.ethers.getContractFactory("Project");
  const crowdfunding = await Crowdfunding.deploy();
  //const project=await Project.deploy();
  await crowdfunding.deployed();
  //await project.deployed();
  console.log("Crowdfunding deployed to:", crowdfunding.address);
  const { deployer } = await await ethers.getSigners();
    const chainId = network.config.chainId
    // log("----------------------------------------------------")
    // log("Deploying Project and waiting for confirmations...")
    // const project = await deploy("Project", {
    //     from: deployer,
    //     args: [deployer],
    //     //log: true,
    //     // we need to wait if on a live network so we can verify properly
    //     waitConfirmations: network.config.blockConfirmations || 1,
    // })
    // console.log(`Project deployed at ${project.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

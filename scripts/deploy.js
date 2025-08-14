const hre = require("hardhat");
//0x5FbDB2315678afecb367f032d93F642f64180aa3

async function main() {
  // We get the contract to deploy
  const CrowdHelp = await hre.ethers.getContractFactory("CrowdHelp");
  const crowdHelp = await CrowdHelp.deploy();

  await crowdHelp.deployed();

  console.log("CrowdHelp deployed to:", crowdHelp.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

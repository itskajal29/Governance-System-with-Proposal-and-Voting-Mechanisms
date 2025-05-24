const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  const GovernanceSystem = await ethers.getContractFactory("GovernanceSystem");
  const contract = await GovernanceSystem.deploy(deployer.address);
  await contract.deployed();

  console.log("GovernanceSystem deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

const { ethers } = require("hardhat");

async function main() {
  // create instance of contract
  const whitelistontract = await ethers.getContractFactory("Whitelist");

  // run constructor and eploy contract
  const deployedWhitelistContract = await whitelistontract.deploy(10);

  await deployedWhitelistContract.deployed();

  console.log(
    "whitelist contract address is : ",
    deployedWhitelistContract.address
  );
}

// calling the above main function

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
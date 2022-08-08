import { ethers } from "hardhat";
import { StanNFT__factory, Stan__factory } from "../typechain-types";

async function main() {

  const [signer] = await ethers.getSigners()

  const stanToken = await new Stan__factory(signer).deploy()

  await stanToken.deployed()

  console.log('StanToken deployed to: ', stanToken.address)

  const stanNFT = await new StanNFT__factory(signer).deploy()

  await stanNFT.deployed()

  console.log('StanNFT deployed to: ', stanNFT.address)

  await stanNFT.safeMint(
    signer.address,
    ''
  )

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

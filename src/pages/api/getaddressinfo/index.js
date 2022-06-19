import { ethers } from 'ethers';


async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(400).json({
      error: "Invalid method. Only GET supported.",
    });
  }

  const API_KEY = process.env.ETHERSCAN_API_KEY;
  if (!API_KEY) {
    console.error("Missing ETHERSCAN_API_KEY environment variable");
    return res.status(500).json({
      error: "Admin private key not set",
    });
  }

  const userAddress = req.query.useradd;
  // const userAddress = "0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae";

  let response = await fetch(
    "https://api-goerli.etherscan.io/api?module=account&action=balance&address=" +
      userAddress +
      "&tag=latest&apikey=" +
      API_KEY,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  
  const parsedEth = ethers.utils.formatEther(data.result);
  console.log(parsedEth);
  res.status(200).json(parsedEth);
}

export default handler;

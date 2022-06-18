

const getaddressinfo = async (req, res) => {
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

  const userAddress = "0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae";
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
  console.log(data);
  res.status(200).json(data);
};

export default getaddressinfo;

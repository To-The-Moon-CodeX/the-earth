import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { serialize } from "cookie";

const login = async (req,res) => {
  if (req.method !== "POST") {
    return res.status(400).json({
      error: "Invalid method. Only POST supported.",
    });
  }

  const PRIVATE_KEY = process.env.ADMIN_PRIVATE_KEY;
  if (!PRIVATE_KEY) {
    console.error("Missing ADMIN_PRIVATE_KEY environment variable");
    return res.status(500).json({
      error: "Admin private key not set",
    });
  }

  const sdk = ThirdwebSDK.fromPrivateKey(
    process.env.ADMIN_PRIVATE_KEY,
    "goerli"
  );

  // Get signed login payload from the frontend
  const payload = req.body.payload;
  if (!payload) {
    return res.status(400).json({
      error: "Must provide a login payload to generate a token",
    });
  }

  // Generate an access token with the SDK using the signed payload
  const domain = "localhost";
  const token = await sdk.auth.generate(domain, payload);

  // Securely set httpOnly cookie on request to prevent XSS on frontend
  res.setHeader(
    "Set-Cookie",
    serialize("access_token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    })
  );

  res.status(200).json("Successfully logged in.");
};;

export default login;

import "../styles/globals.css";
import { Layout } from "../containers";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

// This is the chainId the dApp will work on.
function MyApp({ Component, pageProps }) {
  const activeChainId = ChainId.Goerli;
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThirdwebProvider>
  );
}

export default MyApp;

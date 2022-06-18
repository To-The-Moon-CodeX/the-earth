import React from "react";
import styles from "./SignIn.module.css";
import { CustomSignInButton, Card, Text } from "../../../components";
import Image from "next/image";

import useAuthenticate from "../../../hooks/useAuthenticate";
import { useRouter } from "next/router";

export const SignIn = () => {
  const router = useRouter();
  const { login, authenticate, logout } = useAuthenticate();

  React.useEffect(() => {
    if (localStorage.getItem("user_token")) {
      router.replace("./dashboard");
    }
  }, [router]);

  const signInWithEthereum = async () => {
    await login();
  };

  const authenticatedRequest = async () => {
    await authenticate();
  };

  const logoutWallet = async () => {
    await logout();
  };

  return (
    <div className={styles.container}>
      <Card>
        <Text text="Portfolio"></Text>
        <CustomSignInButton type="binance">
          <Image src="/binance.png" alt="me" width="40" height="40" />
        </CustomSignInButton>
        <CustomSignInButton type="coinbase">
          <Image src="/coinbase.png" alt="me" width="130" height="40" />
        </CustomSignInButton>
        <CustomSignInButton type="metamask" onClick={signInWithEthereum}>
          <Image src="/metamask.png" alt="me" width="40" height="40" />
        </CustomSignInButton>
        <CustomSignInButton type="connectWallet">
          + Connect Wallet
        </CustomSignInButton>
      </Card>
    </div>
  );
};

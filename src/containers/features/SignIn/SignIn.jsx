import React from "react";
import styles from "./SignIn.module.css";
import { CustomSignInButton, Card, Text } from "../../../components";
import Image from "next/image";
export const SignIn = () => {
  return (
    <div className={styles.container}>
      <Card>
        <Text text="Portfolio">
        </Text>
        <CustomSignInButton type="binance"> <Image src="/binance.png" alt="me" width="40" height="40"/></CustomSignInButton>
        <CustomSignInButton type="coinbase"><Image src="/coinbase.png" alt="me" width="130" height="40"/></CustomSignInButton>
        <CustomSignInButton type="metamask"><Image src="/metamask.png" alt="me" width="40" height="40"/></CustomSignInButton>
        <CustomSignInButton type="connectWallet">
          + Connect Wallet
        </CustomSignInButton>
      </Card>
    </div>
  );
};

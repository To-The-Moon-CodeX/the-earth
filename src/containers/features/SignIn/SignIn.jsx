import React from "react";
import styles from "./SignIn.module.css";
import { CustomSignInButton, Card, Text } from "../../../components";
export const SignIn = () => {
  return (
    <div className={styles.container}>
      <Card>
        <Text text="Portfolio"></Text>
        <CustomSignInButton type="binance">Binance</CustomSignInButton>
        <CustomSignInButton type="coinbase">coinbase</CustomSignInButton>
        <CustomSignInButton type="metamask">metamask</CustomSignInButton>
        <CustomSignInButton type="connectWallet">+ Connect Wallet</CustomSignInButton>
      </Card>
    </div>
  );
};

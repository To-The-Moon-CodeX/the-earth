import React from "react";
import styles from "./CustomSignInButton.module.css";
export const CustomSignInButton = ({ type, onClick, children }) => {
  const binanceButtonStyle = styles.binanceButton;
  const coinbaseButtonStyle = styles.coinbaseButton;
  const metamaskButtonStyle = styles.metamaskButton;
  const connectWalletButtonStyle = styles.connectWalletButton;
  let finalStyle;
  
  switch (type) {
    case "binance":
      finalStyle = binanceButtonStyle;
      break;
    case "coinbase":
      finalStyle = coinbaseButtonStyle;
      break;
    case "metamask":
      finalStyle = metamaskButtonStyle;
      break;
    case "connectWallet":
      finalStyle = connectWalletButtonStyle;
      break;
    default:
      return "";
  }

  return (
    <button className={finalStyle} onClick={onClick}>
      {children}
    </button>
  );
};

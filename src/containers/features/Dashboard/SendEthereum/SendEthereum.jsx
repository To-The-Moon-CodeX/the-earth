import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import styles from "./SendEthereum.module.css";


export const SendEthereum = () => {

    const [transactionId, setTransactionId] = useState(null);

    //Goerli test net chain
    const chainUsed = 5;


    async function checkChainIsCorrect() {
      const chainToHex = ethers.utils.hexValue(chainUsed);

      return await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [
          {
            chainId: chainToHex,
          },
        ],
      });
    }

  /**
   *
   * Send ethereum to our bot account.
   *
   * @param {string} _quantity Quantity in usd to convert to ethereum
   */

  async function sendButton(_quantity) {
    try {

    //   First, I need to check if the ethereum chain is Goerli, the correct one.
      if (window.ethereum) {

        let ethereum = window.ethereum;
         await checkChainIsCorrect();

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });


        const usdToEthDone = await fetch("/api/getcryptoprice")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            let dividedQuantity = (_quantity / data.ethereum.usd).toFixed(16);
            return dividedQuantity;
          })
          .catch((err) => console.error(err));

        console.log(usdToEthDone.toString());

        const quantity = ethers.utils.parseEther(usdToEthDone.toString());

        const tx = await signer
          .sendTransaction({
            to: "0x62d356E48f7204A2b036De2Baf85263997B019F6",
            value: quantity,
          })
          .catch((error) => console.error(error));

        console.log("tx:", tx);
        transactionId = setTransactionId(tx);
      } else {
        alert('You are not prepared for the Web3 world');
        console.log("Ethereum object doesn't exist!");
      }

    } catch (error) {
      console.log("Try, catch error =>", error);
    }
  }

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={async () => {
          await sendButton(1);
        }}
      >
        SEND 5€
      </button>
      <button
        className={styles.button}
        onClick={async () => {
          await sendButton(10);
        }}
      >
        SEND 10$
      </button>
      <button
        className={styles.button}
        onClick={async () => {
          await sendButton(20);
        }}
      >
        SEND 20$
      </button>
      <button
        className={styles.button}
        onClick={async () => {
          await sendButton(30);
        }}
      >
        SEND 30$
      </button>

      <p></p>
      {transactionId ? (
        <a
          href={"https://goerli.etherscan.io/tx/" + transactionId.hash}
        >
          {transactionId.hash}
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

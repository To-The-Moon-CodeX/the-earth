import { ethers } from "ethers";
import React, { useEffect, useState } from "react";


export const SendEthereum = () => {
    

   /**
    * 
    * Quantity in usd to convert to ethereum
    * @param {string} _quantity 
    */

   async function getEthPrice() {        
        fetch("/api/getcryptoprice")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            return data.ethereum.usd;
        })
        .catch((err) => console.error(err));
        
   }
  async function sendButton(_quantity) {



    try {
      let ethereum = window.ethereum;

      if (ethereum) {

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const accounts = await ethereum.request({
        method: "eth_requestAccounts",
        });

        
        //const usdToEthDone = await getEthPrice().then((res) => {console.log(res); return res});
         
        // const quantity = "";

        const usdToEthDone = await fetch("/api/getcryptoprice")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);            
            let dividedQuantity = (_quantity/data.ethereum.usd);
            quantity = ethers.utils.parseEther(dividedQuantity.toString());
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

      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button
        onClick={async () => {
          await sendButton(10);
        }}
      >
        SEND 10$
      </button>
      <button
        onClick={async () => {
          await sendButton(20);
        }}
      >
        SEND 20$
      </button>
      <button
        onClick={async () => {
          await sendButton(30);
        }}
      >
        SEND 30$
      </button>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import styles from "./AddressInfo.module.css"

import { Centered, Loader } from "../../../../components";

export const AddressInfo = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [userAddress, setUserAddress] = useState(null);
  const [ethQuantity, setEthQuantity] = useState(null);

  async function getUserAddress() {
    let accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    return accounts[0];
  }


  useEffect(() => {
    setLoading(true);
    const gettingEthereumQuantity = async() => {
      const useradd = await getUserAddress();
      userAddress = setUserAddress(useradd);
      fetch("/api/getaddressinfo?useradd=" + useradd)
        .then((res) => res.json())
        .then((data) => {
          ethQuantity = setEthQuantity(data);
          setLoading(false);
        });
    }
    gettingEthereumQuantity();

  }, []);

  if (isLoading)
    return (
      <Centered>
        <Loader />
      </Centered>
    );
    
  if (!ethQuantity)
    return (
      <Centered>
        <h1>No profile data</h1>
      </Centered>
    );

  return (
    <div className={styles.container}>
      <p className={styles.item}>{userAddress}</p>
      <p className={styles.item}>Ethereum</p>
      <p className={styles.item}>{ethQuantity} ETH</p>

      {/* <p>{data.bio}</p> */}
    </div>
  );
};

import React, { useEffect, useState } from "react";
import styles from "./AddressTransactions.module.css";
import Image from "next/image";

export const AddressTransactions = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/getaddresstransactions")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div className={styles.balanceCard}>
      {data.result?.map((nums, index) => (
        <li key={index}> {nums.hash}</li>
      ))}
      <div className={styles.balanceContentsTop}>
        <h3>Balance</h3>
        <h1>135.01$</h1>
        <div>
          <div className={styles.balanceContentsBottom}>
            <div>
              <h4>135.01 USDT</h4>
              <h4>Address: 3kU...0wH</h4>
            </div>
            <div className={styles.icon}>
              <Image src={"../../../../../../../public/binance.png"} width= {50} height= {50} alt= "currency" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

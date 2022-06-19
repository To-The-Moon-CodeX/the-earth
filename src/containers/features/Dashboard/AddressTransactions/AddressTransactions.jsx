import React, { useEffect, useState } from "react";
import styles from "./AddressTransactions.module.css";
import Image from "next/image";
import { Centered, Loader } from "../../../../components";
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

  if (isLoading)
    return (
      <Centered>
        <Loader />
      </Centered>
    );
  if (!data)
    return (
      <Centered>
        <h1>No profile data</h1>
      </Centered>
    );

  return (
    <div className={styles.container}>
      <div className={styles.balanceCard}>
        {/* {data.result?.map((nums, index) => (
        <li key={index}> {nums.hash}</li>
      ))} */}
        <div className={styles.balanceContentsTop}>
          <h3>Balance</h3>
          <h1>135.01$</h1>
          <div>
            <div className={styles.balanceContentsBottom}>
              <div className={styles.texts}>
                <h4>135.01 USDT</h4>
                <h4>Address: 3kU...0wH</h4>
              </div>
              <div className={styles.icon}>
                <Image
                  src="/binance.png"
                  width={40}
                  height={40}
                  alt="currency"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

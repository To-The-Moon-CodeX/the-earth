import React, { useEffect, useState } from "react";
import styles from "./AddressTransactions.module.css";
import Image from "next/image";

export const AddressTransactions = () => {
  const [data, setData] = useState(null);
  console.log(
    "🚀 ~ file: AddressTransactions.jsx ~ line 5 ~ AddressTransactions ~ data",
    data
  );
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

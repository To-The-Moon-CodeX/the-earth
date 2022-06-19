import React, { useEffect, useState } from "react";
import styles from "./TransactionHistory.module.css";

export const TransactionHistory = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  async function getUserAddress() {
    let accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    return accounts[0];
  }

  useEffect(() => {
    setLoading(true);
    const gettingTransactionHistory = async () => {
      const useradd = await getUserAddress();
      fetch("/api/getaddresstransactions?useradd=" + useradd)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    };
    gettingTransactionHistory();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  //  type,  date,  address,  status,  fiat,  eth,

  return (
    <div className={styles.tableContainer}>
      <table className={styles.container}>
        <thead>
          <tr>
            <th className={styles.th}>Type</th>
            <th className={styles.th}>Date</th>
            <th className={styles.th}>Address</th>
            <th className={styles.th}>Status</th>
            <th className={styles.th}>Fiat</th>
            <th className={styles.th}>Eth</th>
          </tr>
        </thead>
        <tbody>
          {data.map((array, index) => {
            return (
              <tr className={styles.tr}>
                {/* <td className={styles.td}>{type}</td> */}
                <td className={styles.td}>{array.timestamp}</td>
                {/* <td className={styles.td}>{address}</td>
                <td className={styles.td}>{status}</td>
                <td className={styles.td}>{fiat}</td>
                <td className={styles.td}>{eth}</td> */}
              </tr>
            )
          })}


        </tbody>
      </table>
    </div>
  );
};

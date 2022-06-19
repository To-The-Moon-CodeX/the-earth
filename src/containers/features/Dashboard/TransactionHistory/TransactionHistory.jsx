import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { Centered, Loader } from "../../../../components";
import styles from "./TransactionHistory.module.css";

export const TransactionHistory = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [ethPrice, setEthPrice] = useState(null);

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
      const getEthPrice = await fetch("/api/getcryptoprice")
        .then((res) => res.json())
        .then((data) => {
          console.log(data.ethereum.usd);
          ethPrice = setEthPrice(data.ethereum.usd);
        })
        .catch((err) => console.error(err));
    };
    gettingTransactionHistory();
    console.log(data);
  }, []);

  if (isLoading)
    return (
      <Centered>
        <Loader />
      </Centered>
    );

  if (!data) return <Centered>
     <h1>No profile data</h1>
  </Centered>

  return (
    <div className={styles.tableContainer}>
      <h1 className={styles.tableTitle}>Transaction history</h1>
      <div style={{ height: 150, overflow: "scroll" }}>
        <table className={styles.container}>
          <thead>
            <tr>
              <th className={styles.th}>Type</th>
              <th className={styles.th}>Day of transaction</th>
              <th className={styles.th}>Hour of transaction</th>
              <th className={styles.th}>Status</th>
              <th className={styles.th}>Fiat</th>
              <th className={styles.th}>Eth</th>
            </tr>
          </thead>
          <tbody>
            {data.result.slice(0, 5).map((transaction, index) => {
              let eth_quantity = ethers.utils.formatEther(transaction.value);
              let parsed_quantity = (+eth_quantity).toFixed(5);

              let dividedQuantity = (eth_quantity * ethPrice).toFixed(5);
              return (
                <tr className={styles.tr} key={index}>
                  <td className={styles.td}>
                    {transaction.from ==
                    0x23f388132901df3fac19cc7915b199be1bc48959n
                      ? "Send"
                      : "Recieve"}
                  </td>
                  <td className={styles.td}>
                    {new Date(+transaction.timeStamp * 1000).toLocaleDateString(
                      "en-UK",
                      {
                        // en-US can be set to 'default' to use user's browser settings
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      }
                    )}
                  </td>
                  <td className={styles.td}>
                    {new Date(+transaction.timeStamp * 1000).toLocaleTimeString(
                      "en-UK",
                      {
                        // en-US can be set to 'default' to use user's browser settings
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    )}
                  </td>
                  <td className={styles.td}>
                    {transaction.isError == 0 ? "Done" : "Pending"}
                  </td>
                  <td className={styles.td}>{dividedQuantity + " $"}</td>
                  <td className={styles.td}>{parsed_quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

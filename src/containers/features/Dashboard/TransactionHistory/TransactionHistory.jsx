import React from "react";
import styles from "./TransactionHistory.module.css";
export const TransactionHistory = ({
  type,
  date,
  address,
  status,
  fiat,
  eth,
}) => {
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
          <tr className={styles.tr}>
            <td className={styles.td}>{type}</td>
            <td className={styles.td}>{date}</td>
            <td className={styles.td}>{address}</td>
            <td className={styles.td}>{status}</td>
            <td className={styles.td}>{fiat}</td>
            <td className={styles.td}>{eth}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

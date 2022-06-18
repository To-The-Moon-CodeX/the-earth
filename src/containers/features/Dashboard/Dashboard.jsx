import { useRouter } from "next/router";
import React from "react";
import styles from "./Dashboard.module.css";
import { AddressInfo } from "./AddressInfo";
import { AddressTransactions } from "./AddressTransactions";
import { SendEthereum } from "./SendEthereum";
import { TransactionHistory } from "./TransactionHistory";

export const Dashboard = () => {
  const router = useRouter();
  return (
    <section className={styles.dashboardC}>
      <div className={styles.dashboardCardItem}>
        <AddressInfo />
      </div>
      <div className={styles.dashboardCardItem}>
        <AddressTransactions />
      </div>
      <div className={styles.dashboardCardItem}>
        <TransactionHistory />
      </div>
      <div className={styles.dashboardCardItem}>
        <h1 className={styles.cardHeader}>Payment Value Options</h1>
        <SendEthereum />
      </div>
    </section>
  );
};
/*
 */
/*
import React from "react";
import { AddressTransactions } from "./AddressTransactions";
import {SendEthereum} from "./SendEthereum"


export const Dashboard = () => {
  return (
    <div>
      <AddressInfo />
      <AddressTransactions />
      <SendEthereum/>
    </div>
  );
  */

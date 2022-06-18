import { useRouter } from "next/router";
import React from "react";
import styles from "./Dashboard.module.css";
import { AddressInfo } from "./AddressInfo";
import { AddressTransactions } from "./AddressTransactions";
import {SendEthereum} from "./SendEthereum"

export const Dashboard = () => {
  const router = useRouter();
  return (
    /*
    <section className={styles.dashboardC}>
      <div className={styles.dashboardCardItem}>
        <AddressInfo />
      </div>
      <div className={styles.dashboardCardItem}>
        <p>tests</p>
      </div>
      <div className={styles.dashboardCardItem}>
        <h1 className={styles.cardHeader}>Payment Value Options</h1>
        <SendEthereum/>
      </div>
      </section>
      */
      <div className={styles.dashboardCardItem}>
        <div className={styles.balance}>
          <AddressTransactions />
        </div>
      </div>
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

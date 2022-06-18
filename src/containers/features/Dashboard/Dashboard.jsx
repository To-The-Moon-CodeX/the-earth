import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import styles from "./Dashboard.module.css";
import { AddressInfo } from "./AddressInfo";

export const Dashboard = () => {
  const router = useRouter();
  return (
    <section className={styles.dashboardC}>
      <div className={styles.dashboardCardItem}>
        <AddressInfo />
      </div>
      <div className={styles.dashboardCardItem}>
        <p>tests</p>
      </div>
      <div className={styles.dashboardCardItem}>
        <p>tests</p>
      </div>
      <div className={styles.dashboardCardItem}>
        <p>tests</p>
      </div>
    </section>
  );
};
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

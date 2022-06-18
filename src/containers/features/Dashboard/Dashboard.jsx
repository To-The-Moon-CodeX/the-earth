import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import styles from "./Dashboard.module.css";

export const Dashboard = () => {
  const router = useRouter();
  return (
    <section className={styles.dashboardC}>
      <div className={styles.dashboardC}>
        <p className={styles.text}>tests</p>
      </div>
      <div className={styles.dashboardC}>
        <p className={styles.text}>tests</p>
      </div>
      <div className={styles.dashboardC}>
        <p className={styles.text}>tests</p>
      </div>
      <div className={styles.dashboardC}>
        <p className={styles.text}>tests</p>
      </div>
    </section>
  )
};

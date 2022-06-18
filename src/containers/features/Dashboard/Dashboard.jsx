import { useRouter } from "next/router";
import React from "react";
import styles from "./Dashboard.module.css";

export const Dashboard = () => {
  const router = useRouter();
  return (
    <section className={styles.dashboardC}>
      <div className={styles.container}>
      <p className={styles.text}>testssssssssssssssssssssssssssssssssss</p>
      </div>
      <div className={styles.container}>
        <p className={styles.text}>testssssssssssssssssssssssssssssssssss</p>
      </div>
      <div className={styles.container}>
        <p className={styles.text}>testssssssssssssssssssssssssssssssssss</p>
      </div>
      <div className={styles.container}>
        <p className={styles.text}>testssssssssssssssssssssssssssssssssss</p>
      </div>
    </section>
  )
};

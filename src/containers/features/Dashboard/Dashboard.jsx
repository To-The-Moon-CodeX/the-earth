import { useRouter } from "next/router";
import React from "react";
import styles from "./Dashboard.module.css";

export const Dashboard = () => {
  const router = useRouter();
  return (
    <p className={styles.test}>testssssssssssssssssssssssssssssssssss</p>
    /*<section id="dashboard">
      <div className="container dashboard__container">

      </div>
    </section>
    */
  )
};

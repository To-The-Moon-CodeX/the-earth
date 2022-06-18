import React from "react";
import styles from "./Text.module.css"
export const Text = ({text}) => {
  return <div className={styles.text}>{text}</div>;
};

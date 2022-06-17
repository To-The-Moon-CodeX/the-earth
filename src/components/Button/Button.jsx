import React from "react";
import styles from "./Button.module.css"
export const Button = ({ onClick, text }) => {
  return <button className={styles.button} onClick={onClick}>{text}</button>;
};

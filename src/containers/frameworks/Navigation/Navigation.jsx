import React from "react";
import Link from "next/link";
import { Logo } from "../../../components";
import styles from "./Navigation.module.css";
export const Navigation = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>

      <nav></nav>
    </header>
  );
};

import Link from "next/link";
import React from "react";
import { Logo } from "../../../components";
import styles from "./Navigation.module.css";
export const Navigation = () => {
  return (
    <header className={styles.header}>
      <a href="#">
        <Logo />
      </a>
      <nav>
        <li>
          <Link href="#">Sign in</Link>
        </li>
        <li>
          <Link href="#">Sign up</Link>
        </li>
      </nav>
    </header>
  );
};

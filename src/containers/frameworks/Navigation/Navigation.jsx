import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "../../../components";
import styles from "./Navigation.module.css";
import useAuthenticate from "../../../hooks/useAuthenticate";

export const Navigation = () => {
  const { logout, user } = useAuthenticate();
  console.log("🚀 ~ file: Navigation.jsx ~ line 9 ~ Navigation ~ user", user)

  const handleSignOut = async () => {
    await logout();
  };

  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>

      {user && (
        <nav>
          <li>
            <Link href="/">
              <a onClick={handleSignOut}>Sign out</a>
            </Link>
          </li>
        </nav>
      )}
    </header>
  );
};

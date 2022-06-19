import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "../../../components";
import styles from "./Navigation.module.css";
import useAuthenticate from "../../../hooks/useAuthenticate";

export const Navigation = () => {
  const [user, setUser] = useState(null);
  const { logout } = useAuthenticate();

  const handleSignOut = async () => {
    await logout();
  };

  useEffect(() => {
    setUser(localStorage.getItem("user_token").toString());
  }, [setUser]);

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

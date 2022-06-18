import React from "react";
import { Navigation } from "../Navigation";
import styles from "./Layout.module.css";
export const Layout = (props) => {
  return (
    <main>
      <Navigation />
      {props.children}
    </main>
  );
};

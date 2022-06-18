import React from "react";
import { Navigation } from "../Navigation";
import styles from "./Layout.module.css";
export const Layout = (props) => {
  return (
    <React.Fragment>
      <Navigation /> <main>{props.children}</main>
    </React.Fragment>
  );
};

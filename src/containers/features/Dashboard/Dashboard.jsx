import React from "react";
import { MetamaskLogin } from "../SignIn/MetamaskLogin/MetamaskLogin";
import { AddressInfo } from "./AddressInfo";
import { AddressTransactions } from "./AddressTransactions";

export const Dashboard = () => {
  return (
    <div>
      <AddressInfo />
      <AddressTransactions />
      <MetamaskLogin/>
    </div>
  );
};

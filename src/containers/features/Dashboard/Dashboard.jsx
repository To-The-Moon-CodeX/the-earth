import React from "react";
import { AddressInfo } from "./AddressInfo";
import { AddressTransactions } from "./AddressTransactions";
import {SendEthereum} from "./SendEthereum"

export const Dashboard = () => {
  return (
    <div>
      <AddressInfo />
      <AddressTransactions />
      <SendEthereum/>
    </div>
  );
};

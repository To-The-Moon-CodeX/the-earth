import { useRouter } from "next/router";
import React from "react";
import { CustomSignInButton } from "../../../components";
import styles from "./Landing.module.css";
export const Landing = () => {
  const router = useRouter();
  return <CustomSignInButton onClick={() => router.push("/dashboard")} type="metamask">Get started </CustomSignInButton>;
};

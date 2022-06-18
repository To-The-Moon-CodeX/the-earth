import React from "react";
import axios from "axios";
import { useSDK } from "@thirdweb-dev/react";

import { useEffect } from "react";
import { useRouter } from "next/router";

import {
  useAddress,
  useBalance,
  useDisconnect,
  useMetamask,
} from "@thirdweb-dev/react";

const sign_in_url = "/api/sign-in";
const sign_out_url = "/api/sign-out";
const authenticate_url = "/api/authenticate";
export default function useAuthenticate() {
  const [user, setUser] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const address = useAddress();
  const disconnect = useDisconnect();
  const connectWithMetamask = useMetamask();
  const sdk = useSDK();
  const domain = "localhost";
  const router = useRouter();
  
  useEffect(() => {
    if (localStorage.getItem("user_token")) {
      router.push("/dashboard");
      setUser(true);
    }
  }, [router]);


  const login = async () => {
    setIsLoading(true);
    try {
      await connectWithMetamask();
      const payload = await sdk?.auth.login(domain);
      const res = await axios.post(sign_in_url, { payload });
      console.log("🚀 ~ file: useAuthenticate.js ~ line 41 ~ login ~ res", res)
      localStorage.setItem("user_token", res.data.message);
      router.push("/dashboard");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(error);
      setUser(false);
    }
  };

  const authenticate = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post(authenticate_url);
      if (res.ok) {
        const address = await res.data();
        setMessage(
          `Succesfully authenticated to backend with address ${address}`
        );
      }
      setIsLoading(false);
      return res;
    } catch (error) {
      setMessage(error);
      setIsLoading(false);
    }
  };

  const logout = () => {
    setIsLoading(true);
    try {
      localStorage.removeItem("user_token");
      setUser(false);
      router.push("/");
    } catch (error) {
      setMessage(error);
      setIsLoading(false);
    }
  };

  return {
    login,
    logout,
    authenticate,
    isLoading,
    message,
    user,
  };
}

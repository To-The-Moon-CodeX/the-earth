import React, { useEffect, useState } from "react";
import { Centered, Loader } from "../../../../components";
import styles from "./AddressInfo.module.css";
export const AddressInfo = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/getaddressinfo")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <Centered>
        <Loader />
      </Centered>
    );
    
  if (!data)
    return (
      <Centered>
        <h1>No profile data</h1>
      </Centered>
    );

  return (
    <div className={styles.container}>
      <p className={styles.item}>Address</p>
      <p className={styles.item}>Crypto</p>
      <p className={styles.item}>{data.result}</p>

      {/* <p>{data.bio}</p> */}
    </div>
  );
};

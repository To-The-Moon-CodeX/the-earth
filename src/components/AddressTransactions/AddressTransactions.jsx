import React, { useEffect, useState } from "react";

export const AddressTransactions = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/getaddresstransactions")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div>
      {data.result.map((nums, index) => (
        <li key={index}>    {nums.hash}
                </li>
      ))}
    </div>
  );
  }
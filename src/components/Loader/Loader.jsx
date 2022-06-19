import React from "react";
import { ClipLoader } from "react-spinners";

export const Loader = (loading) => {
  return (
    <ClipLoader
      color="purple"
      loading={loading}
      size={150}
    />
  );
};

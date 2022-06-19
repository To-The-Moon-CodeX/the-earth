import React from "react";
import { Centered, Loader } from "../../../components";
import useAuthenticate from "../../../hooks/useAuthenticate";
import { Navigation } from "../Navigation";
export const Layout = (props) => {
  const { isLoading } = useAuthenticate();
  if (isLoading) return;
  return (
    <React.Fragment>
      <Navigation />
      <hr style={{ marginBottom: 0 }} />

      <main>
        {isLoading ? (
          <Centered>
            <Loader />
          </Centered>
        ) : (
          props.children
        )}
      </main>
    </React.Fragment>
  );
};

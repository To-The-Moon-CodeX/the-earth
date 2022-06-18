import { useRouter } from "next/router";
import React from "react";
import styles from "./Dashboard.module.css";

export const Dashboard = () => {
  const router = useRouter();
  return (
    <div>
      <p className={styles.test}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime laborum
        officia, repellat possimus ipsum magni tempore totam molestiae
        blanditiis voluptate qui ratione sapiente, laudantium amet eaque atque
        vitae adipisci ducimus?
      </p>
    </div>
  );
};

{
  /* /*
<section id="dashboard">
  <div className="container dashboard__container"></div>
</section>
*/
}

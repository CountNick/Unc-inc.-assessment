import React from "react";

import Layout from "../../Layout/Layout/Layout";

import styles from "./styles.module.scss";

export default function Home() {
  return (
    <Layout>
      <div className={styles["home"]}>Home Page</div>
    </Layout>
  );
}

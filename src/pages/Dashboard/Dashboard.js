import React from "react";

import Layout from "../../Layout/Layout/Layout";

import styles from "./styles.module.scss";

export default function Dashboard() {
  return (
    <Layout>
      <div className={styles["dashboard"]}>Dashboard Page</div>
    </Layout>
  );
}

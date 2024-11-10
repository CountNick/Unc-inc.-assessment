import React from "react";

import Layout from "../../Layout/Layout/Layout";

import styles from "./styles.module.scss";

export default function Login() {
  return (
    <Layout>
      <div className={styles["login"]}>Login Component</div>
    </Layout>
  );
}

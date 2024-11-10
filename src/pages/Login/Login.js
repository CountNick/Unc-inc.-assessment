import React from "react";

import Layout from "../../Layout/Layout/Layout";

import SiteHeader from "../../Components/SiteHeader/SiteHeader";

import styles from "./styles.module.scss";

export default function Login() {
  return (
    <Layout>
      <SiteHeader />
      <div className={styles["login"]}>Login Component</div>
    </Layout>
  );
}

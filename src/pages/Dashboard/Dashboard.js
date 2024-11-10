import React from "react";

import Layout from "../../Layout/Layout/Layout";

import SiteHeader from "../../Components/SiteHeader/SiteHeader";

import styles from "./styles.module.scss";

export default function Dashboard() {
  return (
    <Layout>
      <SiteHeader />
      <div className={styles["dashboard"]}>Dashboard Page</div>
    </Layout>
  );
}

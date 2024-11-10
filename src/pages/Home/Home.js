import React from "react";

import Layout from "../../Layout/Layout/Layout";

import SiteHeader from "../../Components/SiteHeader/SiteHeader";

import styles from "./styles.module.scss";

export default function Home() {
  return (
    <Layout>
      <SiteHeader />
      <div className={styles["home"]}>Home Page</div>
    </Layout>
  );
}

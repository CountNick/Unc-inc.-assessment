import React from "react";

import Layout from "../../Layout/Layout/Layout";

import SiteHeader from "../../Components/SiteHeader/SiteHeader";

import styles from "./styles.module.scss";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <Layout>
        <div className={styles["home"]}>
          <h1>Welcome to the unc inc routing demo</h1>
        </div>
      </Layout>
    </>
  );
}

import React, { useContext, useEffect } from "react";
import Layout from "../../Layout/Layout/Layout";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import { UserContext } from "../../context/user";

import SiteHeader from "../../Components/SiteHeader/SiteHeader";

import styles from "./styles.module.scss";

export default function Dashboard() {
  const { isLoggedIn, user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <SiteHeader />
      <Layout>
        <div className={styles["dashboard"]}>
          <section className={styles["dashboard__inner"]}>
            {isLoggedIn && (
              <h1>{`Welcome ${user.username} to the dashboard`}</h1>
            )}

            {!isLoggedIn && (
              <>
                <h1>You must be logged in to view the contents of this page</h1>
                <Link to="/login">Login</Link>
              </>
            )}
          </section>
        </div>
      </Layout>
    </>
  );
}

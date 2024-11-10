import React from "react";

import { useContext } from "react";

import { Link } from "react-router-dom";

import { UIContext } from "../../context/ui";

import styles from "./styles.module.scss";

export default function NavBarMenu() {
  const { menuIsOpen } = useContext(UIContext);

  return (
    <nav role="navigation" className={styles["navbar-menu"]}>
      <Link
        scroll={false}
        href={"/"}
        className={styles["navbar-menu__logo"]}
        tabIndex={0}
      >
        {/* <SiteLogo aria-label={"site logoi"} role="img" /> */}
        Home
      </Link>

      <ul
        className={styles["navbar-menu__navigation-list"]}
        data-menu-is-open={menuIsOpen}
      >
        <li>
          <Link
            to={"/login"}
            className={styles["navbar-menu__navigation-list-item"]}
            tabIndex={0}
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to={"/dashboard"}
            className={styles["navbar-menu__navigation-list-item"]}
            tabIndex={0}
          >
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
}

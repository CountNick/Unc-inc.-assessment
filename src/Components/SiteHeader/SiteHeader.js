import React from "react";

import NavBarMenu from "../NavBarMenu/NavBarMenu";
import MenuOverlayToggle from "../MenuOverlayToggle/MenuOverlayToggle";

import styles from "./styles.module.scss";

export default function SiteHeader() {
  return (
    <header className={styles["site-header"]} role="banner">
      <div className={styles["site-header__inner"]}>
        <NavBarMenu />
        <MenuOverlayToggle />
      </div>
    </header>
  );
}

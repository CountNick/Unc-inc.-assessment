import { useEffect, useContext } from "react";

// import Hamburger from "components/partials/Hamburger";

import { UIContext } from "../../context/ui";

import styles from "./styles.module.scss";

export default function MenuOverlayToggle() {
  const { menuIsOpen, setMenuIsOpen } = useContext(UIContext);

  console.log(menuIsOpen);

  const toggleMenuVisibility = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <button
      type="button"
      onClick={toggleMenuVisibility}
      aria-expanded={menuIsOpen}
      className={styles["menu-overlay-toggle"]}
      aria-haspopup="true"
    >
      <span>{menuIsOpen === false ? "menu" : "close"}</span>
      {/* <Hamburger isCross={menuIsOpen} /> */}
    </button>
  );
}

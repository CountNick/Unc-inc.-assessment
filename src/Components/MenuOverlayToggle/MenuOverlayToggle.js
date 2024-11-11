import { useContext } from "react";

import { ReactComponent as HamburgerIcon } from "../../icons/hamburger.svg";
import { ReactComponent as CloseIcon } from "../../icons/close.svg";

import { UIContext } from "../../context/ui";

import styles from "./styles.module.scss";

export default function MenuOverlayToggle() {
  const { menuIsOpen, setMenuIsOpen } = useContext(UIContext);

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
      <span className={styles["menu-overlay-toggle__icon-wrapper"]}>
        {menuIsOpen === false ? <HamburgerIcon /> : <CloseIcon />}
      </span>
    </button>
  );
}

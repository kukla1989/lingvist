import React from "react";
import styles from "./MobileWelcomeMenu.module.scss";
import { Link } from "react-router-dom";

interface MobileWelcomeMenuProps {
  closeMenu: () => void;
}

const MobileWelcomeMenu: React.FC<MobileWelcomeMenuProps> = React.memo(({ closeMenu }) => {
  return (
    <div className={styles.mobileWelcomeMenu}>
      <div className={styles.overlay} />

      <ul className={styles.menu}>
        <li className={styles.menuItem}>business</li>
        <li className={styles.menuItem}>blog</li>
      </ul>

      <div className={styles.auth}>
        <Link to="/welcome/signup" className={styles.signUp} onClick={closeMenu}>
          sign up
        </Link>
        <Link to="/welcome/login" className={styles.logIn} onClick={closeMenu}>
          log in
        </Link>
      </div>
    </div>
  );
});

MobileWelcomeMenu.displayName = "MobileWelcomeMenu";

export default MobileWelcomeMenu;

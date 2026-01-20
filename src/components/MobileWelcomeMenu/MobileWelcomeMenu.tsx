import React from "react";
import styles from "./MobileWelcomeMenu.module.scss";
import { Link } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode.tsx";

interface MobileWelcomeMenuProps {
  closeMenu: () => void;
}

const MobileWelcomeMenu: React.FC<MobileWelcomeMenuProps> = React.memo(({ closeMenu }) => {
  return (
    <div className={styles.mobileWelcomeMenu}>
      <div className={styles.overlay} />
      <Link to="/welcome/article/3" className={styles.menuItem}
            onClick={closeMenu}>
        About
      </Link>

      <Link to="/welcome/blog" className={styles.menuItem} onClick={closeMenu}>
        blog
      </Link>

      <div className={styles.auth}>
        <Link to="/welcome/signup" className={styles.signUp}
              onClick={closeMenu}>
          sign up
        </Link>

        <Link to="/welcome/login" className={styles.logIn} onClick={closeMenu}>
          log in
        </Link>
      </div>

      <DarkMode size={2.5} />
    </div>
  );
});

MobileWelcomeMenu.displayName = "MobileWelcomeMenu";

export default MobileWelcomeMenu;

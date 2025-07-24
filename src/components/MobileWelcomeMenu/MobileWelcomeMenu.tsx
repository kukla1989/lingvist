import React from "react";
import styles from "./MobileWelcomeMenu.module.scss";

const MobileWelcomeMenu = React.memo(() => {
  return (
    <div className={styles.mobileWelcomeMenu}>
      <div className={styles.overlay} />

      <ul className={styles.menu}>
        <li className={styles.menuItem}>business</li>
        <li className={styles.menuItem}>blog</li>
      </ul>

      <div className={styles.auth}>
        <div className={styles.signUp}>sign up</div>
        <div className={styles.logIn}>log in</div>
      </div>
    </div>
  );
});

MobileWelcomeMenu.displayName = "MobileWelcomeMenu";

export default MobileWelcomeMenu;

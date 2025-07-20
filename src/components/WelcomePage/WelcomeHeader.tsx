import WelcomeLogoSVG from "../../assets/icons/WelcomeLogoSVG";
import styles from "./WelcomeHeader.module.scss";

const WelcomeHeader = () => {
  return (
    <div className={styles.welcomeHeader}>
      <div className={styles.desktopHeader}>
        <WelcomeLogoSVG />

        <div className={styles.menu}>
          <div className={styles.menuItem}>Business</div>
          <div className={styles.menuItem}>Blog</div>
        </div>

        <div className={styles.auth}>
          <div className={styles.signUp}>sign up</div>
          <div className={styles.logIn}>log in</div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHeader;

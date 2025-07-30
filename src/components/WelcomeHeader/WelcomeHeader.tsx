import { Link } from "react-router-dom";
import WelcomeLogoSVG from "../../assets/icons/WelcomeLogoSVG";
import MobileWelcomeHeader from "../MobileWelcomeHeader/MobileWelcomeHeader";
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
          <Link to="/welcome/signup" className={styles.signUp}>
            sign up
          </Link>

          <Link to="/welcome/login" className={styles.logIn}>
            log in
          </Link>
        </div>
      </div>

      <div className={styles.mobileHeader}>
        <MobileWelcomeHeader />
      </div>
    </div>
  );
};

export default WelcomeHeader;

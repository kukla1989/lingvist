import { Link } from "react-router-dom";
import WelcomeLogoSVG from "../../assets/icons/WelcomeLogoSVG";
import MobileWelcomeHeader from "../MobileWelcomeHeader/MobileWelcomeHeader";
import styles from "./WelcomeHeader.module.scss";
import DarkMode from "../DarkMode/DarkMode.tsx";
import { useIsDark } from "../../hooks/useIsDark.ts";

const WelcomeHeader = () => {
  const isDark = useIsDark();
  return (
    <div className={styles.welcomeHeader}>
      <div className={styles.desktopHeader}>
        <WelcomeLogoSVG />

        <div className={styles.menu}>
          <div className={styles.menuItem}>Business</div>
          <div className={styles.menuItem}>Blog</div>
        </div>

        <div className={styles.auth}>
          <DarkMode size={2.5}/>
          <Link to="/welcome/signup" className={styles.signUp}>
            sign up
          </Link>

          <Link to="/welcome/login" className={`${styles.logIn} ${isDark && styles['logIn--dark']}`}>
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

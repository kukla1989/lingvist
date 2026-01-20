import { Link, NavLink } from "react-router-dom";
import WelcomeLogoSVG from "../../assets/icons/WelcomeLogoSVG";
import MobileWelcomeHeader from "../MobileWelcomeHeader/MobileWelcomeHeader";
import styles from "./WelcomeHeader.module.scss";
import DarkMode from "../DarkMode/DarkMode.tsx";
import { darkStyle } from "../../_utils/helpers.ts";

const WelcomeHeader = () => {
  return (
    <div className={styles.welcomeHeader}>
      <div className={styles.desktopHeader}>
        <NavLink to='/'>
          <WelcomeLogoSVG />
        </NavLink>

        <div className={styles.menu}>
          <Link to="/welcome/article/3" className={styles.menuItem}>
            About
          </Link>
          <Link to="/welcome/blog" className={styles.menuItem}>
            Blog
          </Link>
        </div>

        <div className={styles.auth}>
          <DarkMode size={2.5} />
          <Link to="/welcome/signup" className={styles.signUp}>
            sign up
          </Link>

          <Link to="/welcome/login"
            className={darkStyle('logIn', styles)}>
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

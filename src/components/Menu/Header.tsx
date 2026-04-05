import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import CardsSVG from "../../assets/icons/CardsSVG";
import AddSVG from "../../assets/icons/AddSVG";
import LogoSVG from "../../assets/icons/LogoSVG";
import BlogSVG from "../../assets/icons/BlogSVG.tsx";
import LingvistSVG from "../../assets/icons/LingvistSVG";
import WordsListSVG from "../../assets/icons/WordsListSVG";
import LogOutSVG from "../../assets/icons/LogOutSVG.tsx";

import MobileHeader from "../MobileHeader/MobileHeader.tsx";
import styles from "./Header.module.scss";
import DarkMode from "../DarkMode/DarkMode.tsx";
import { variables as vars } from "../../_utils/variables.tsx";
import { logout } from "../../store/authSlice.ts";
import SettingsSVG from "../../assets/icons/SettingsSVG.tsx";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <div className={styles.desktopMenu}>
        <Link to="/" className={styles.logo}>
          <div className={styles.iconWrapper}>
            <LogoSVG />
          </div>
          <LingvistSVG />
        </Link>

        <nav className={styles.nav}>
          <ul className={styles.navlist}>
            <li className={styles.navitem}>
              <NavLink
                to="/"
                className={({ isActive }) => `${styles.navlink} ${isActive ? styles.active : ""}`}
              >
                <div className={styles.iconWrapper}>
                  <CardsSVG iconColor={vars.cBlueGray} />
                </div>
                learn words
              </NavLink>
            </li>

            <li className={styles.navitem}>
              <NavLink
                to="/dictionary"
                className={({ isActive }) => `${styles.navlink} ${isActive ? styles.active : ""}`}
              >
                <AddSVG iconColor={vars.cBlueGray} />
                dictionary
              </NavLink>
            </li>

            <li className={styles.navitem}>
              <NavLink
                to="/words-list"
                className={({ isActive }) => `${styles.navlink} ${isActive ? styles.active : ""}`}
              >
                <div className={styles.iconWrapper}>
                  <WordsListSVG />
                </div>
                words list
              </NavLink>
            </li>

            <li className={styles.navitem}>
              <NavLink
                to="/blog"
                className={({ isActive }) => `${styles.navlink} ${isActive ? styles.active : ""}`}
              >
                <div className={styles.iconWrapper}>
                  <BlogSVG iconColor={vars.cBlueGray} />
                </div>
                blog
              </NavLink>
            </li>

            <li className={styles.navitem}>
              <NavLink
                to="/settings"
                className={({ isActive }) => `${styles.navlink} ${isActive ? styles.active : ""}`}
              >
                <SettingsSVG iconColor={vars.cBlueGray} />
                settings
              </NavLink>
            </li>

            <li className={styles.navitem}>
              <NavLink className={styles.navlink} to="/welcome"
                       onClick={() => dispatch(logout())}
              >
                <div className={styles.iconWrapper}>
                  <LogOutSVG iconColor={vars.cBlueGray} />
                </div>
                log out
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className={styles.darkMode}>
          <DarkMode size={2.3} />
        </div>
      </div>

      <div className={styles.phoneMenu}>
        <MobileHeader />
      </div>
    </header>
  );
};

export default Header;

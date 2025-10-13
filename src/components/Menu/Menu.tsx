import { NavLink } from "react-router-dom";
import styles from "./Menu.module.scss";
import CardsSVG from "../../assets/icons/CardsSVG";
import AddSVG from "../../assets/icons/AddSVG";
import LogoSVG from "../../assets/icons/LogoSVG";
import { variables as vars } from "../../_utils/variables";
import LingvistSVG from "../../assets/icons/LingvistSVG";
import { Link } from "react-router-dom";
import WordsListSVG from "../../assets/icons/WordsListSVG";
import LogOutSVG from "../../assets/icons/LogOutSVG.tsx";
import DarkMode from "../DarkMode/DarkMode.tsx";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice.ts";
import { RootState } from "../../store/store.ts";

const Menu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <header className={styles.menu}>
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
              to="/add-words"
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

      <div className={styles.userInfo}>{`${user?.name} ${user?.email}`}</div>
    </header>
  );
};

export default Menu;

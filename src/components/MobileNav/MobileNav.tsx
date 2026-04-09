import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./mobileNav.module.scss";
import DarkMode from "../DarkMode/DarkMode.tsx";
import { logout } from "../../store/authSlice.ts";
import { useDispatch } from "react-redux";

interface MobileNavProps {
  closeMenu: () => void;
}

const MobileNav: React.FC<MobileNavProps> = React.memo(({ closeMenu }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.mobileNav}>
      <div className={styles.overlay} />

      <NavLink to="/"
               className={({ isActive }) => `${styles.menuItem} ${isActive ? styles.active : ""}`}
               onClick={closeMenu}>
        learn words
      </NavLink>

      <NavLink to="/dictionary"
               className={({ isActive }) => `${styles.menuItem} ${isActive ? styles.active : ""}`}
               onClick={closeMenu}>
        dictionary
      </NavLink>

      <NavLink to="/words-list"
               className={({ isActive }) => `${styles.menuItem} ${isActive ? styles.active : ""}`}
               onClick={closeMenu}>
        words list
      </NavLink>

      <NavLink to="/blog"
               className={({ isActive }) => `${styles.menuItem} ${isActive ? styles.active : ""}`}

               onClick={closeMenu}>
        blog
      </NavLink>

      <NavLink to="/settings"
               className={({ isActive }) => `${styles.menuItem} ${isActive ? styles.active : ""}`}
               onClick={closeMenu}>
        settings
      </NavLink>

      <NavLink className={`${styles.menuItem} ${styles.logOut}`} to="/welcome"
               onClick={() => dispatch(logout())}
      >
        log out
      </NavLink>

      <DarkMode size={2.5} />
    </div>
  );
});

MobileNav.displayName = "MobileNav";

export default MobileNav;

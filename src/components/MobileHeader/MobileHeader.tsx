import { useState } from "react";
import styles from "./MobileHeader.module.scss";
import CloseButtonSVG from "../../assets/icons/CloseButtonSVG.tsx";
import BurgerMenuSVG from "../../assets/icons/BurgerMenuSVG.tsx";
import WelcomeLogoSVG from "../../assets/icons/WelcomeLogoSVG.tsx";
import MobileNav from "../MobileNav/MobileNav.tsx";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className={styles.mobileHeader}>
      <div className={styles.burgerMenu} onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <CloseButtonSVG /> : <BurgerMenuSVG />}
      </div>
      {isOpen && <MobileNav closeMenu={closeMenu} />}
      <div className={styles.logo}>
        <WelcomeLogoSVG iconColor="#2C3143"/>
      </div>
    </div>
  );
};

export default MobileHeader;
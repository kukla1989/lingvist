import { useState } from "react";
import BurgerMenuSVG from "../../assets/icons/BurgerMenuSVG";
import WelcomeLogoSVG from "../../assets/icons/WelcomeLogoSVG";
import styles from "./MobileWelcomeHeader.module.scss";
import MobileWelcomeMenu from "../MobileWelcomeMenu/MobileWelcomeMenu";
import CloseButtonSVG from "../../assets/icons/CloseButtonSVG";

const MobileWelcomeHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className={styles.mobileWelcomeHeader}>
      <div className={styles.burgerMenu} onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <CloseButtonSVG /> : <BurgerMenuSVG />}
      </div>
      {isOpen && <MobileWelcomeMenu closeMenu={closeMenu} />}
      <div className={styles.logo}>
        <WelcomeLogoSVG />
      </div>
    </div>
  );
};

export default MobileWelcomeHeader;

import BurgerMenuSVG from "../../assets/icons/BurgerMenuSVG";
import WelcomeLogoSVG from "../../assets/icons/WelcomeLogoSVG";
import styles from "./MobileWelcomeHeader.module.scss";

const MobileWelcomeHeader = () => {
  return (
    <div className={styles.mobileWelcomeHeader}>
      <BurgerMenuSVG />

      <div className={styles.logo}>
        <WelcomeLogoSVG />
      </div>
    </div>
  );
};

export default MobileWelcomeHeader;

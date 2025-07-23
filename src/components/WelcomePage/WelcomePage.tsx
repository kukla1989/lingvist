import WelcomeHeader from "../WelcomeHeader/WelcomeHeader";
import styles from "./WelcomePage.module.scss";

const WelcomePage = () => {
  return (
    <div className={styles.welcomePage}>
      <WelcomeHeader />
    </div>
  );
};

export default WelcomePage;

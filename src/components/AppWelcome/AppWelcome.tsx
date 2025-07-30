import { Outlet } from "react-router-dom";
import WelcomeHeader from "../WelcomeHeader/WelcomeHeader";
import styles from "./AppWelcome.module.scss";

const AppWelcome = () => {
  return (
    <div className={styles.appWelcome}>
      <WelcomeHeader />
      <Outlet />
    </div>
  );
};

export default AppWelcome;

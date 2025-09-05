import { Outlet } from "react-router-dom";
import WelcomeHeader from "../WelcomeHeader/WelcomeHeader";
import styles from "./AppWelcome.module.scss";
import { useIsDark } from "../../hooks/useIsDark.ts";

const AppWelcome = () => {
  const isDark = useIsDark();
  return (
    <div className={`${styles.appWelcome} ${isDark ? styles.dark : ""}`}>
      <WelcomeHeader />

      <Outlet />
    </div>
  );
};

export default AppWelcome;

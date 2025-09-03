import { Outlet } from "react-router-dom";
import styles from "./App.module.scss";
import Menu from "./components/Menu/Menu";
import { useIsDark } from "./hooks/useIsDark.ts";

export const App: React.FC = () => {
  const isDark = useIsDark();

  return (
    <div className={`${styles.app} ${isDark ? styles.dark : ""}`}>
      <Menu />
      <div className={styles.mainContent}>
        <Outlet />
      </div>
    </div>
  );
};

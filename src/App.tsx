import { Outlet } from "react-router-dom";
import styles from "./App.module.scss";
import Menu from "./components/Menu/Menu";

export const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Menu />
      <div className={styles.mainContent}>
        <Outlet />
      </div>
    </div>
  );
};

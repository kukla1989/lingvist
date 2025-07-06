import { Outlet } from "react-router-dom";
import style from "./App.module.scss";
import Menu from "./components/Menu/Menu";

export const App: React.FC = () => {
  return (
    <div className={style.app}>
      <Menu />
      <Outlet />
    </div>
  );
};

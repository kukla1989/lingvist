import { Outlet } from "react-router-dom";
import style from "./App.module.scss";

export const App: React.FC = () => {
  return (
    <div className={style.app}>
      <Outlet />
    </div>
  );
};

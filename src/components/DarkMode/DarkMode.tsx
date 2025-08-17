import { useDispatch } from "react-redux";
import styles from "./DarkMode.module.scss";
import { AppDispatch, toggle } from "../../store.ts";
import { useIsLight } from "../../hooks/useIsLight";

function DarkMode() {
  const isLight = useIsLight();
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div
      className={`${styles.themeToggle} ${isLight ? styles.day : ""}`}
      onClick={() => dispatch(toggle())}
    >
      <div className={`${styles.moon} ${isLight ? styles.sun : ""}`} />
    </div>
  );
}

export default DarkMode;

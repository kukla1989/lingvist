import { useDispatch } from "react-redux";
import styles from "./DarkMode.module.scss";
import { AppDispatch, toggle } from "../../store.ts";
import { useIsDark } from "../../hooks/useIsDark.ts";

function DarkMode() {
  const isDark = useIsDark();
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div
      className={`${styles.themeToggle} ${isDark ? "" : styles.day}`}
      onClick={() => dispatch(toggle())}
    >
      <div className={`${styles.moon} ${isDark ? "active" : styles.sun}`} />
    </div>
  );
}

export default DarkMode;

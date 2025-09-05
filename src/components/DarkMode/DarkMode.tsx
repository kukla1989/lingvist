import { useDispatch } from "react-redux";
import styles from "./DarkMode.module.scss";
import { AppDispatch, toggle } from "../../store.ts";
import { useIsDark } from "../../hooks/useIsDark.ts";

type DarkModeProps = {
  size?: number;
};

function DarkMode({ size = 1.7 }: DarkModeProps) {
  const isDark = useIsDark();
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div
      className={`${styles.themeToggle} ${isDark ? "" : styles.day}`}
      style={{ fontSize: (size + 'px') }}
      onClick={() => dispatch(toggle())}
    >
      <div className={`${styles.moon} ${isDark ? "active" : styles.sun}`} />
    </div>
  );
}

export default DarkMode;

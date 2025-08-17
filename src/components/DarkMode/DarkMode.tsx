import styles from "./DarkMode.module.scss";
import { useState } from "react";

function DarkMode() {
  const [isLight, setIsLight] = useState(false);

  return (
    <div
      className={`${styles.themeToggle} ${isLight ? styles.day : ""}`}
      onClick={() => setIsLight(!isLight)}
    >
      <div className={`${styles.moon} ${isLight ? styles.sun : ""}`} />
    </div>
  );
}

export default DarkMode;

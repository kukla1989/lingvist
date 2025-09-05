import styles from "./addWordsPage.module.scss";
import { useIsDark } from "../../hooks/useIsDark.ts";

const addWordsPage = () => {
  const isDark = useIsDark();
  return (
    <div className={styles.addWordsPage}>
      <div className={styles.card}>
        <div className="add-words-page__title">
          pls add words that you want to learn and press enter
        </div>
        <input type="text" className={`${styles.input} ${isDark && styles['input--dark']}`} />
      </div>
    </div>
  );
};

export default addWordsPage;

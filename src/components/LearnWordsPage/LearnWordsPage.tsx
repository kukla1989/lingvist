import { useState } from "react";
import WordProgress from "../WordProgress/WordProgress";
import styles from "./LearnWordsPage.module.scss";
import { useIsDark } from "../../hooks/useIsDark.ts";

const sentence1 = "Where are you? – I am at";
const sentence2 = '.';
const word = "home";
const wordTranslate = 'дім';

const LearnWordsPage = () => {
  const [userWord, setUserWord] = useState("");
  const onSetWord = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserWord(e.target.value);
  const isDark = useIsDark();

  return (
    <div className={styles.learnWordsPage}>
      <div
        className={`${styles.card} ${styles.learnCard} ${isDark && styles['card--dark']}`}
      >
        <WordProgress level={4} />
        <div className={styles.sentence}>
          <span className={styles.senteceBegin}>{sentence1}</span>
          <input
            className={`${styles.input} ${isDark && styles['input--dark']}`}
            value={userWord}
            onChange={onSetWord}
            style={{width: 8 * word.length + 30 + "px"}}
          />
          <span className={styles.senteceEnd}>{sentence2}</span>
        </div>

        <div className={`${styles.wordTranslate} ${isDark && styles['wordTranslate--dark']}`}>
          {wordTranslate}
        </div>
      </div>
    </div>
  );
};

export default LearnWordsPage;

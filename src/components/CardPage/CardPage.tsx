import { useState } from "react";
import WordProgress from "../WordProgress/WordProgress";
import styles from "./CardPage.module.scss";
const sentence1 = "Where are you? – I am at";
const sentence2 = '.';
const word = "home";
const wordTranslate = 'дім';

const CardPage = () => {
  const [userWord, setUserWord] = useState("");
  const onSetWord = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserWord(e.target.value);

  return (
    <div className={styles.cardPage}>
      <div className={styles.card}>
        <WordProgress level={4} />
        <div className={styles.sentence}>
          <span className={styles.senteceBegin}>{sentence1}</span>
          <input
            className={styles.input}
            value={userWord}
            onChange={onSetWord}
            style={{ width: 8 * word.length + 30 + "px" }}
          />
          <span className={styles.senteceEnd}>{sentence2}</span>
        </div>

        <div className={styles.wordTranslate}>
          {wordTranslate}
        </div>
      </div>
    </div>
  );
};

export default CardPage;

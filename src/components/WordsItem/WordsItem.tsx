import styles from "./WordsItem.module.scss";
import React from "react";

interface WordProps {
  word: string;
  translation: string;
  repetitions: number;
  lastDate: Date;
}

const WordsItem: React.FC<WordProps> = ({
  word,
  translation,
  repetitions,
  lastDate,
}) => {
  return (
    <div className={styles.wordsItem}>
      <div className={styles.word}>{word}</div>

      <div className={styles.translation}>{translation}</div>

      <div className={styles.bottom}>
        <div className={styles.bottomElement}>
          Остання спроба:{lastDate.toDateString()}
        </div>

        <div className={styles.verticalBar}>|</div>

        <div className={styles.bottomElement}>Повторень: {repetitions}</div>
      </div>

      <div className={styles.bottomLine}></div>
    </div>
  );
};

export default WordsItem;

import styles from "./WordsItem.module.scss";
import React from "react";
import { Word } from "../../assets/types.tsx";

interface WordProps {
  word: Word;
}

const WordsItem: React.FC<WordProps> = ({
word: { word, definition, translation, lastDate, count_repeat },
}) => {
  return (
    <div className={styles.wordsItem}>
      <div className={styles.word}>{word}</div>
      <div className={styles.word}>{definition}</div>

      <div className={styles.translation}>{translation}</div>

      <div className={styles.bottom}>
        <div className={styles.bottomElement}>
          Остання спроба:{new Date(lastDate).toLocaleDateString("uk-UA")}
        </div>

        <div className={styles.verticalBar}>|</div>

        <div className={styles.bottomElement}>Повторень: {count_repeat}</div>
      </div>

      <div className={styles.bottomLine}></div>
    </div>
  );
};

export default WordsItem;

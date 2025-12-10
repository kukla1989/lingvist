import styles from "./WordsItem.module.scss";
import React from "react";
import { Word } from "../../assets/types.tsx";
import CloseButtonSVG from "../../assets/icons/CloseButtonSVG.tsx";

interface WordProps {
  word: Word;
  deleteUserWord: (wordId: string | null) => void;
}

const WordsItem: React.FC<WordProps> = ({
  word: {
    word,
    definition, translation,
    lastDate,
    countRepeat,
    wordId,
  },
  deleteUserWord
}) => {

  return (
    <div className={styles.wordsItem}>
      <div className={styles.wordWrapper}>
        <div className={styles.word}>{word}</div>


        <div className={styles.delete} onClick={() => {
          deleteUserWord(wordId || null)
        }}>
          <CloseButtonSVG />
        </div>
      </div>

      <div className={styles.word}>{definition}</div>

      <div className={styles.translation}>{translation}</div>

      <div className={styles.bottom}>
        <div className={styles.bottomElement}>
          Остання спроба:{new Date(lastDate).toLocaleDateString("uk-UA")}
        </div>

        <div className={styles.verticalBar}>|</div>

        <div className={styles.bottomElement}>Повторень: {countRepeat}</div>
      </div>

      <div className={styles.bottomLine}></div>
    </div>
  );
};

export default WordsItem;

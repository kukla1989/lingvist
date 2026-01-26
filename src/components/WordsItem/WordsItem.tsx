import React, { useState } from "react";

import styles from "./WordsItem.module.scss";
import { Word } from "../../assets/types.tsx";
import CloseButtonSVG from "../../assets/icons/CloseButtonSVG.tsx";
import { increaseWordCountRepeat } from "../../_utils/helpers.ts";

interface WordProps {
  word: Word;
  deleteUserWord: (wordId: number | null) => void;
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
  const [count, setCount] = useState(countRepeat);

  function setCounterRepeatToZero(wordId: number) {
    increaseWordCountRepeat(wordId, 0);
    setCount(0);
  }

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
        {count == 5 ? (
            <button onClick={() => setCounterRepeatToZero(wordId)}
                    className={styles.learnAgain}>learn again</button>)
          : (<div
            className={styles.bottomElement}>Повторень: {count}</div>)
        }
      </div>

      <div className={styles.bottomLine}></div>
    </div>
  );
};

export default WordsItem;

import styles from "./WordInfo.module.scss";
import { WordType } from "../../assets/types.tsx";
import { v4 as uuidv4 } from "uuid";

function WordInfo({ wordInfo }: { wordInfo: WordType }) {
  const { word, pronunciation, translations, wordTranslation } = wordInfo;

  return (
    <div className={styles.wordInfo}>
      <div className={styles.top}>
        <div className={styles.word}>{word}</div>

        <div className={styles.pronunciation}>{pronunciation}</div>

        <div className={styles.wordTranslation}>{wordTranslation}</div>
      </div>

      <div className={styles.translations}>{translations.map(pair => {
        return (
          <div className={styles.table} key={uuidv4()}>
            <div className={styles.partOfSpeech} key={uuidv4()}>
              {pair[0]}
            </div>

            <div className={styles.definitions} key={uuidv4()}>
              {pair[1].map(sentences => sentences
                .map((translation, ind) => (
                  <div key={uuidv4()}
                       className={ind % 2 ? styles.even : ''}>{translation}</div>
                )))}
            </div>
          </div>
        )
      })}</div>

    </div>
  );
}

export default WordInfo;
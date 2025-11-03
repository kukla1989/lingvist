import styles from "./WordInfo.module.scss";
import { WordType } from "../../assets/types.tsx";
import { v4 as uuidv4 } from "uuid";
import { removeBraces } from "../../_utils/helpers.ts";
import DividerLine from "../DividerLine/DividerLine.tsx";

function WordInfo({ wordInfo }: { wordInfo: WordType }) {
  const { word, pronunciation, translations, wordTranslation } = wordInfo;

  return (
    <div className={styles.wordInfo}>
      <div className={styles.top}>
        <div className={styles.word}>{word}</div>

        <div className={styles.pronunciation}>{pronunciation}</div>

        <div className={styles.wordTranslation}>{wordTranslation}</div>
      </div>

      <div className={styles.translations}>
        {Object.entries(translations).map(([partOfSpeech, definitionsArr]) => (
          <div className={styles.table} key={uuidv4()}>
            <div className={styles.partOfSpeech}>{partOfSpeech}</div>

            <div className={styles.definitions}>
              {definitionsArr.map(definitionGroup => (
                <div key={uuidv4()} className={styles.definitionGroup}>
                  {definitionGroup.map(definitionEntry => (
                    <div key={uuidv4()} className={styles.definitionItem}>
                      <div className={styles.definition}>{removeBraces(definitionEntry.definition)}</div>

                      {definitionEntry.example && (
                        <div className={styles.example}>{removeBraces(definitionEntry.example)}</div>
                      )}
                      <DividerLine />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default WordInfo;
import styles from "./WordInfo.module.scss";
import { WordType } from "../../assets/types.tsx";
import { v4 as uuidv4 } from "uuid";
import { darkStyle, removeBraces } from "../../_utils/helpers.ts";
import DividerLine from "../DividerLine/DividerLine.tsx";

function WordInfo({ wordInfo, searchWord }: {
  wordInfo: WordType;
  searchWord: (word: string) => void
}) {
  const {
    word,
    pronunciation,
    translations,
    wordTranslation,
    misspelled,
    notFound,
    similarWords,
  } = wordInfo;

  console.log(wordInfo, 'wordInfo');
  return (
    <div className={styles.wordInfo}>
      {notFound ? (<div className={styles.notFound}>Not found</div>) : (
        (
          misspelled ? (<>
            <div className="similarWordsWarning">The word you&#39;ve entered
              isn&#39;t
              in the dictionary. Click on a spelling suggestion below or try
              again using the search bar above.
            </div>

            {similarWords?.map(similarWord => (
              <button className={darkStyle('similarWord', styles)}

                      key={uuidv4()}
                      onClick={() => searchWord(similarWord)}>
                {similarWord}
              </button>
            ))}</>) : (<>
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
                            <div
                              className={styles.definition}>{removeBraces(definitionEntry.definition)}</div>

                            {definitionEntry.example && (
                              <div
                                className={styles.example}>{removeBraces(definitionEntry.example)}</div>
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
          </>)
        )
      )}
    </div>
  );
}

export default WordInfo;
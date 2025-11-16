import styles from "./WordInfo.module.scss";
import { TranslationEntry, WordType } from "../../assets/types.tsx";
import { v4 as uuidv4 } from "uuid";
import { getBackendApi, removeBraces } from "../../_utils/helpers.ts";
import DividerLine from "../DividerLine/DividerLine.tsx";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal.tsx";
import TextWithLinks from "../TextWithLinks/TextWithLinks.tsx";

interface WordInfoProps {
  wordInfo: WordType;
  searchWord: (word: string) => void
}

interface ShowMoreType {
  [key: string]: boolean;
}

function WordInfo({ wordInfo, searchWord }: WordInfoProps) {
  const [showMore, setShowMore] = useState<ShowMoreType>({});
  const [showModal, setShowModal] = useState(false);
  const [modalMsg, setModalMsg] = useState('');
  const {
    word,
    pronunciation,
    translations,
    wordTranslation,
    misspelled,
    notFound,
    similarWords,
  } = wordInfo;

  useEffect(() => {
    if (!(wordInfo.notFound || wordInfo.misspelled)) {
      const showMoreObj: ShowMoreType = {};

      Object.entries(wordInfo.translations)
        .forEach(([partOfSpeech, definitionsByPartOfSpeech]) => {
          if (definitionsByPartOfSpeech.length > 2) {
            showMoreObj[partOfSpeech] = false;
          }
        })
      setShowMore(showMoreObj);
    }
  }, [wordInfo])

  const handleAddWord = async (word: string, definition: string, translation: string, example: string | null) => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error("No token found");
    }

    const res = await fetch(`${getBackendApi()}/userWords/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        word,
        definition,
        translation,
        example: example || null
      }),
    })

    const result = await res.json()
    setModalMsg(result.error || result.msg)
    setShowModal(true)
  }

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
              <button className={styles.similarWord}

                      key={uuidv4()}
                      onClick={() => searchWord(similarWord)}>
                {similarWord}
              </button>
            ))}
          </>) : (<>
            <div className={styles.top}>
              <div className={styles.word}>{word}</div>

              <div className={styles.pronunciation}>{pronunciation}</div>

              <div className={styles.wordTranslation}>{wordTranslation}</div>
            </div>

            <div className={styles.translations}>
              {Object.entries(translations || {}).map(([partOfSpeech, definitionsByPartOfSpeech]) => (
                <div className={styles.table} key={uuidv4()}>
                  <div className={styles.partOfSpeech}>{partOfSpeech}</div>

                  <div className={styles.definitions}>
                    {definitionsByPartOfSpeech.slice(0, (showMore[partOfSpeech] ? 20 : 2))
                      .map((definitionGroup, ind) => (
                        <div className={styles.definitionSection}
                             key={uuidv4()}>
                          <p className={styles.ind}>{ind + 1}</p>

                          <div key={uuidv4()}
                               className={styles.definitionGroup}>
                            {definitionGroup.map(definition => (
                              <div key={uuidv4()}
                                   className={styles.definitionItem}

                                   onClick={() => handleAddWord(word, definition.definition,
                                     wordTranslation, definition.example || null)}
                              >
                                <div
                                   className={styles.definition}><TextWithLinks text={definition.definition} />
                                </div>

                                {definition.example && (
                                  <div
                                    className={styles.example}>{removeBraces(definition.example)}</div>
                                )}

                                <DividerLine />

                                <div
                                  className={styles.addWord}> add word
                                </div>

                                <Modal
                                  onClose={(e?: React.MouseEvent<HTMLElement> | React.KeyboardEvent) => {
                                    setShowModal(false);
                                    e?.stopPropagation();
                                  }}
                                  msg={modalMsg}
                                  isOpen={showModal}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                  </div>
                  {(showMore[partOfSpeech] !== undefined) && (
                    <button className={styles.showMore}
                            onClick={() => setShowMore({
                              ...showMore,
                              [partOfSpeech]: !showMore[partOfSpeech]
                            })}
                    >
                      {showMore[partOfSpeech]
                        ? 'hide'
                        : ('show more ' + calculateRemainingShowMore(definitionsByPartOfSpeech.slice(2)))}
                    </button>)}
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

function calculateRemainingShowMore(strs: TranslationEntry[][]) {
  return strs.reduce((length, el) => length + el.length, 0);
}
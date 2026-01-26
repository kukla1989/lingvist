import { useState } from "react";
import styles from "./DictionaryPage.module.scss";
import { darkStyle, getBackendApi } from "../../_utils/helpers.ts";
import WordInfo from "../WordInfo/WordInfo.tsx";
const api = getBackendApi();

async function getWordInfo(word: string) {
  const res = await fetch(`${api}/words/new`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ word }),
  })

  return await res.json()
}

const DictionaryPage = () => {
  const [wordInfo, setWordInfo] = useState(null)
  const [word, setWord] = useState("")

  const handleSubmit = async (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault()
    if (!word) {
      return;
    }

    await searchWord(word)
  }

  async function searchWord(word: string) {
    const wordInfo = await getWordInfo(word);
    setWordInfo(wordInfo)

    if (wordInfo.notFound || wordInfo.misspelled) {
      return;
    }

    setWord('')
  }


  return (
    <div className={styles.addWordsPage}>
      <div className={styles.card}>
        <div className="add-words-page__title">
          enter words to learn
        </div>

        <input type="text"
               className={darkStyle('input', styles)}
               placeholder="word"
               value={word}
               onChange={(e) => setWord(e.target.value)}
               onKeyDown={(e) => {
                 if (e.key === 'Enter') {
                   handleSubmit(e)
                 }
               }}
        />

        <button
          className={darkStyle('submit', styles)}
          onClick={handleSubmit}
        >translate
        </button>
      </div>

      <div className={styles.note}>to add word for learning pls press on it
      </div>

      {wordInfo && <WordInfo wordInfo={wordInfo} searchWord={searchWord} />}
    </div>
  );
};

export default DictionaryPage;
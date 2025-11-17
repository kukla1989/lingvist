import { v4 as uuidv4 } from "uuid";

import styles from "./WordsListPage.module.scss";
import WordsItem from "../WordsItem/WordsItem";
import { Word } from "../../assets/types";
import { useEffect, useState } from "react";
import { getAuthorization, getBackendApi } from "../../_utils/helpers.ts";

async function getWords() {
  const api = getBackendApi();
  const res = await fetch(`${api}/userwords`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: getAuthorization(),
    },
  })

  return await res.json()
}

const WordsListPage = () => {
  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    const load = async () => {
      const wordsResponse = await getWords();
      setWords(wordsResponse)
    }
    load();
  }, [])


  console.log(words, 'words')
  return (
    <div className={styles.wordsListPage}>
      <div className={styles.list}>
        {words.length === 0
          ? <div className={styles.noWords}>no words yet</div>
          : words.map((word) => (
          <WordsItem word={word} key={uuidv4()} />
        ))}
      </div>
    </div>
  );
};

export default WordsListPage;
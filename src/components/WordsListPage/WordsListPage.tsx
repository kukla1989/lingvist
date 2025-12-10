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
      ...getAuthorization(),
    },
  })

  return await res.json()
}


const WordsListPage = () => {
  const [words, setWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState(true);

  async function deleteUserWord(wordId: string | null) {
    if (!wordId) {
      console.error('wordId not found')
      return;
    }

    const res = await fetch(`${getBackendApi()}/userwords/${wordId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...getAuthorization(),
      },
    })
    setWords(words.filter(word => word.wordId !== wordId))
    console.log(await res.json())
  }

  useEffect(() => {
    const load = async () => {
      const wordsResponse = await getWords();
      if (wordsResponse.error) {
        console.error(wordsResponse.error)
        return;
      }

      setWords(wordsResponse.reverse())
      setLoading(false);
    }
    load();
  }, [])

  if (loading) return <div className={styles.loading}>loading...</div>;

  return (
    <div className={styles.wordsListPage}>

      <div className={styles.list}>
        {words.length === 0
          ? <div className={styles.noWords}>no words yet</div>
          : words.map((word) => (
            <WordsItem deleteUserWord={deleteUserWord} word={word}
                       key={uuidv4()} />
          ))
        }
      </div>
    </div>
  );
};

export default WordsListPage;
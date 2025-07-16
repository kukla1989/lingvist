import { Word } from "../../assets/types";
import WordsItem from "../WordsItem/WordsItem";
import styles from "./WordsListPage.module.scss";
import { v4 as uuidv4 } from "uuid";

const today = new Date();
const words: Word[] = [
  {
    word: "persistence",
    translation: "наполеглевість",
    repetitions: 3,
    lastDate: new Date(today.setDate(1)),
  },
  {
    word: "key",
    translation: "ключ",
    repetitions: 4,
    lastDate: new Date(today.setDate(2)),
  },
  {
    word: "true",
    translation: "правда",
    repetitions: 1,
    lastDate: new Date(today.setDate(3)),
  },
];

const WordsListPage = () => {
  return (
    <div className={styles.wordsListPage}>
      <div className={styles.list}>
        {words.map((word) => (
          <WordsItem {...word} key={uuidv4()} />
        ))}
      </div>
    </div>
  );
};

export default WordsListPage;

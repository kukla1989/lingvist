import { useEffect, useState } from "react";
import WordProgress from "../WordProgress/WordProgress";
import styles from "./LearnWordsPage.module.scss";
import { useIsDark } from "../../hooks/useIsDark.ts";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal.tsx";
import { darkStyle, getUserWords } from "../../_utils/helpers.ts";
import { Word } from "../../assets/types.tsx";

const LearnWordsPage = () => {
  const [userWord, setUserWord] = useState("");
  const [words, setWords] = useState<Word[]>([]);
  const [isIncorrectWord, setIsIncorrectWord] = useState<boolean>(false);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.showModal === true) {
      setIsLoginModalOpen(true)
      navigate(location.pathname, {
        state: { ...location.state, showModal: false, msg: null },
        replace: true
      });
    }

    const load = async () => {
      const wordsResponse = await getUserWords();
      if (wordsResponse.error) {
        console.error(wordsResponse.error)
        return;
      }

      setWords(wordsResponse.reverse())
    }
    load();

  }, [])

  const checkWord = () => {
    if (userWord === currentWord.word) {
      currentWord.countRepeat++;
      setWords([...words]
        .sort((wordA, wordB) => wordA.countRepeat - wordB.countRepeat));
      setUserWord('');

      return;
    }

    setIsIncorrectWord(true);
    setUserWord(currentWord.word);
    setTimeout(() => {
      setIsIncorrectWord(false)
      setUserWord('')
    }, 800)
  }

  const isDark = useIsDark();
  const currentWord = words[0];
  let sentenceBeg: string = "";
  let sentenceEnd: string = "";

  if (currentWord?.sentence &&
    typeof currentWord.word_place === "number") {
    const sentenceArr = currentWord?.sentence.split(" ");
    sentenceBeg = sentenceArr.slice(0, currentWord.word_place).join(' ');
    sentenceEnd = sentenceArr.slice(currentWord.word_place + 1).join(' ');
  }

  return (
    <div className={styles.learnWordsPage}>
      <div
        className={`${darkStyle('card', styles)} ${styles.learnCard}`}
      >
        <WordProgress level={currentWord?.countRepeat} />

        <div className={styles.sentence}>
          <span className={styles.senteceBegin}>{sentenceBeg}</span>

          <input
            className={`${styles.userWord} ${isIncorrectWord ? styles.incorrectWord : ''} ${isDark && styles['input--dark']}`}
            value={userWord}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserWord(e.target.value)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === 'Enter') {
                checkWord();
              }
            }}
            style={{ width: 8 * currentWord?.word?.length + 30 + "px" }}
          />
          <span className={styles.senteceEnd}>{sentenceEnd}</span>
        </div>

        <div className={styles.definition}>{currentWord?.definition}</div>

        <button
          className={darkStyle('submit', styles)}
          onClick={() => checkWord()}
        >check
        </button>

        <div
          className={`${styles.wordTranslate} ${isDark && styles['wordTranslate--dark']}`}>
          {currentWord?.translation}
        </div>
      </div>

      {isLoginModalOpen && <Modal onClose={() => setIsLoginModalOpen(false)}
                                  msg={location.state?.msg} />}
    </div>
  );
};

export default LearnWordsPage;

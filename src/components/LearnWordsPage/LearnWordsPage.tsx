import { useEffect, useState } from "react";
import WordProgress from "../WordProgress/WordProgress";
import styles from "./LearnWordsPage.module.scss";
import { useIsDark } from "../../hooks/useIsDark.ts";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal.tsx";
import {
  darkClass,
  getUserWords,
  increaseWordCountRepeat
} from "../../_utils/helpers.ts";
import { Word } from "../../assets/types.tsx";
import Loading from "../Loading/Loading.tsx";
import ToastModal from "../ToastModal/ToastModal.tsx";

const LearnWordsPage = () => {
  const [userWord, setUserWord] = useState("");
  const [words, setWords] = useState<Word[]>([]);
  const [isIncorrectWord, setIsIncorrectWord] = useState<boolean>(false);
  const [isNoWords, setIsNoWords] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [showCongratsModal, setShowCongratsModal] = useState(false);

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

      const wordsLoaded = wordsResponse.filter((word: Word) => word.countRepeat < 5)
        .reverse()
        .sort((wordA: Word, wordB: Word) =>
          wordA.countRepeat - wordB.countRepeat)
      setWords(wordsLoaded)
      if (wordsLoaded.length === 0) {
        setIsNoWords(true)
      }

      setLoading(false);
    }
    load();
  }, [])

  const checkWord = () => {
    if (userWord === currentWord.word.trim()) {
      currentWord.countRepeat++;
      if (!currentWord.wordId) {
        console.error('currentWord.wordId is undefined');
        return;
      }

      increaseWordCountRepeat(currentWord.wordId, currentWord.countRepeat);
      if (currentWord.countRepeat === 5) {
        setWords(words.filter(word => word.wordId !== currentWord.wordId));
        setShowCongratsModal(true);
      } else {
        setWords([...words]
          .sort((wordA, wordB) => wordA.countRepeat - wordB.countRepeat));
      }

      setUserWord('');

      return;
    }

    setIsIncorrectWord(true);
    setUserWord(currentWord.word);
    setTimeout(() => {
      setIsIncorrectWord(false)
      setUserWord('')
    }, 1100)
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

  if (loading) return <Loading />

  if (isNoWords || words.length === 0) return (
    <div className={styles.noWords}>
      No words to learn yet. Go to the{' '}
      <Link className={styles.link} to="/dictionary"
      >dictionary</Link> to add some

      {showCongratsModal &&
        <ToastModal msg={'congratulations you learned this word!'} time={3000}
                    afterClose={() => setShowCongratsModal(false)}
        />}
    </div>
  )

  return (
    <div className={styles.learnWordsPage}>
      <div
        className={`${darkClass('card', styles, isDark)} ${styles.learnCard}`}
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
            style={{ width: 8 * currentWord?.word?.length + 50 + "px" }}
          />
          <span className={styles.senteceEnd}>{sentenceEnd}</span>
        </div>

        <div className={styles.definition}>{currentWord?.definition}</div>

        <button
          className={darkClass('submit', styles, isDark)}
          onClick={() => checkWord()}
        >check
        </button>

        {showCongratsModal &&
          <ToastModal msg={'congratulations you learned this word!'} time={3000}
                      afterClose={() => setShowCongratsModal(false)}
          />}

        <div
          className={`${styles.wordTranslate} ${isDark && styles['wordTranslate--dark']}`}
          style={{ marginTop: currentWord?.definition?.length > 140 ? 17 : 70 }}
        >
          {currentWord?.translation}
        </div>
      </div>

      {isLoginModalOpen && <Modal onClose={() => setIsLoginModalOpen(false)}
                                  msg={location.state?.msg} />}
    </div>
  );
};

export default LearnWordsPage;

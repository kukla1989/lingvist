import { useEffect, useState } from "react";
import WordProgress from "../WordProgress/WordProgress";
import styles from "./LearnWordsPage.module.scss";
import { useIsDark } from "../../hooks/useIsDark.ts";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal.tsx";
import { darkStyle } from "../../_utils/helpers.ts";

const sentenceBeg = "Where are you? – I am at";
const sentenceEnd = '.';
const word = "home";
const wordTranslate = 'дім';

const LearnWordsPage = () => {
  const [userWord, setUserWord] = useState("");
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
  }, [])

  const onSetWord = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserWord(e.target.value);
  const isDark = useIsDark();

  return (
    <div className={styles.learnWordsPage}>
      <div
        className={`${darkStyle('card', styles)} ${styles.learnCard}`}
      >
        <WordProgress level={4} />

        <div className={styles.sentence}>
          <span className={styles.senteceBegin}>{sentenceBeg}</span>

          <input
            className={`${styles.userWord} ${isDark && styles['input--dark']}`}
            value={userWord}
            onChange={onSetWord}
            style={{ width: 8 * word.length + 30 + "px" }}
          />
          <span className={styles.senteceEnd}>{sentenceEnd}</span>
        </div>

        <div
          className={`${styles.wordTranslate} ${isDark && styles['wordTranslate--dark']}`}>
          {wordTranslate}
        </div>
      </div>

      {isLoginModalOpen && <Modal onClose={() => setIsLoginModalOpen(false)}
                             msg={location.state?.msg} />}
    </div>
  );
};

export default LearnWordsPage;

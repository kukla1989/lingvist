import { useEffect, useState } from "react";
import WordProgress from "../WordProgress/WordProgress";
import styles from "./LearnWordsPage.module.scss";
import { useIsDark } from "../../hooks/useIsDark.ts";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal.tsx";

const sentence1 = "Where are you? – I am at";
const sentence2 = '.';
const word = "home";
const wordTranslate = 'дім';

const LearnWordsPage = () => {
  const [userWord, setUserWord] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false)
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.showModal === true) {
      setIsModalOpen(true)
      navigate(location.pathname, {
        state: { ...location.state, showModal: false },
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
        className={`${styles.card} ${styles.learnCard} ${isDark && styles['card--dark']}`}
      >
        <WordProgress level={4} />
        <div className={styles.sentence}>
          <span className={styles.senteceBegin}>{sentence1}</span>
          <input
            className={`${styles.input} ${isDark && styles['input--dark']}`}
            value={userWord}
            onChange={onSetWord}
            style={{ width: 8 * word.length + 30 + "px" }}
          />
          <span className={styles.senteceEnd}>{sentence2}</span>
        </div>

        <div
          className={`${styles.wordTranslate} ${isDark && styles['wordTranslate--dark']}`}>
          {wordTranslate}
        </div>
      </div>

      {isModalOpen && (<Modal onClose={() => setIsModalOpen(false)}>
        <p>Welcome {location?.state?.user} - your registration is complete!</p>
      </Modal>)}
    </div>
  );
};

export default LearnWordsPage;

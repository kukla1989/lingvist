import styles from "./WordProgressInfo.module.scss";
import Line from "../Line/Line.tsx";
import WordProgress from "../WordProgress/WordProgress.tsx";
import { useEffect } from "react";

interface WordProgressInfoProps {
  onClose: () => void;
}

function WordProgressInfo({ onClose }: WordProgressInfoProps) {

  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <>
      <div className={styles.wordProgressInfo}>
        <div className={styles.top}>
          Lingvist learning levels
        </div>

        <div className={styles.p}>
          Lingvist's algorithms use a spaced repetition system: we show you
          words
          to repeat and recall. The scores on this scale can either increase or
          decrease over time.
        </div>

        <div className={styles.p}>Take the lessons as often as possible and
          always
          try to answer correctly.
        </div>

        <Line />

        <div className={styles.progress}>
          <div className={styles.progressLevel}>
            <WordProgress level={5} />

            <div className={styles.progressLevelInfo}>
              you learned this word
            </div>
          </div>

          <div className={styles.progressLevel}>
            <WordProgress level={4} />

            <div className={styles.progressLevelInfo}>
              almost done
            </div>
          </div>

          <div className={styles.progressLevel}>
            <WordProgress level={3} />

            <div className={styles.progressLevelInfo}>
              You are still learning this word.
            </div>
          </div>

          <div className={styles.progressLevel}>
            <WordProgress level={2} />

            <div className={styles.progressLevelInfo}>
              you repeat this word 2 times
            </div>
          </div>

          <div className={styles.progressLevel}>
            <WordProgress level={1} />

            <div className={styles.progressLevelInfo}>
              you repeat this word first time
            </div>
          </div>
        </div>
      </div>

      <div className={styles.backdrop} onClick={onClose}></div>
    </>
  );
}

export default WordProgressInfo;
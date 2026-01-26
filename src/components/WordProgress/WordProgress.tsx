import styles from "./WordProgress.module.scss";
import { v4 as uuidv4 } from "uuid";

const maxLevel = 5;

interface WordProgressProps {
  level: 0 | 1 | 2 | 3 | 4 | 5;
}

const WordProgress: React.FC<WordProgressProps> = ({ level }) => {
  const levels = [];
  for (let ind = 0; ind < maxLevel; ind++) {
    let levelClassName = "";

    if (ind < level) {
      switch (level) {
        case 1:
          levelClassName = "orange";
          break;

        case 2:
          levelClassName += "orange";
          break;

        case 3:
          levelClassName += "blue";
          break;

        case 4:
          levelClassName += "darkBlue";
          break;

        case 5:
          levelClassName += "green";
          break;
      }
    }

    levels.push(
      <div
        key={uuidv4()}
        className={`${styles.level} ${
          levelClassName && styles[levelClassName]
        }`}
      />
    );
  }

  return <div className={styles.wordProgress}>
    {levels}
    <div className={styles.learnMore}>дізнатися більше</div>
    
    </div>;
};

export default WordProgress;

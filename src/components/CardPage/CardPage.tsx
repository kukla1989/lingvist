import RepeatRemain from '../WordProgress/WordProgress';
import styles from './CardPage.module.scss';

const CardPage = () => {
  return (
    <div className={styles.cardPage}>
      <div className={styles.card}>
        <RepeatRemain level={4}/>
        <div className="info">cardPage</div>
      </div>
    </div>
  );
};

export default CardPage;

import styles from './addWordsPage.module.scss';

const addWordsPage = () => {
  return (
    <div className={styles.addWordsPage}>
      <div className="add-words-page__title">pls add words that you want to learn and press enter</div>
      <input type="text" className={styles.input} />
    </div>
  );
};

export default addWordsPage;

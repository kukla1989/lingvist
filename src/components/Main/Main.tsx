import AddWordsPage from '../AddWordsPage/addWordsPage';
import CardPage from '../CardPage/CardPage';
import styles from './Main.module.scss';

export const Main = () => (
  <div className={styles.main}>
    <AddWordsPage />
    <CardPage />
  </div>
);

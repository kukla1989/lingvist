import style from './App.module.scss';
import AddWordsPage from "./components/AddWordsPage/addWordsPage";
import CardPage from "./components/CardPage/CardPage";

export const App: React.FC = () => {
  return (
    <div className={style.app}>
      <AddWordsPage />
      <CardPage />
    </div>
  );
};

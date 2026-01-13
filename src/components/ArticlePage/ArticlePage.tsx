import classNames from "classnames";
import { useParams } from "react-router-dom";

import Article1 from "../Article1/Article1.tsx";
import styles from "./ArticlePage.module.scss";
import { articles } from "../../_utils/variables.tsx";

function ArticlePage() {
  const { id } = useParams();

  const { title, author, image } = articles[Number(id || 1)]
  return (
    <div className={styles.articlePage}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <h1
            className={classNames(styles.title, styles.articleElement)}>{title}
          </h1>

          <p className={classNames(styles.author, styles.articleElement)}>{author}</p>

          <div className={styles.line}></div>
        </div>

        <img src={image} alt={title} className={styles.topImg} />
      </div>

      <Article1 />
    </div>
  );
}

export default ArticlePage;
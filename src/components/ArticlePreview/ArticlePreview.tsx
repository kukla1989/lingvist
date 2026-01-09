import styles from "./ArticlePreview.module.scss";
import classNames from "classnames";

interface ArticlePreviewProps {
  title: string;
  author: string;
  description: string;
  image: string;
}

function ArticlePreview({ title, author, description, image }: ArticlePreviewProps) {
  return (
    <div className={styles.articlePreview}>
      <img src={image} alt="img" className={styles.img} />
      <p className={classNames(styles.title, styles.articleElement)}>{title}</p>
      <p className={classNames(styles.author, styles.articleElement)}>{author}</p>
      <p className={classNames(styles.description, styles.articleElement)}>{description}</p>
    </div>
  );
}

export default ArticlePreview;
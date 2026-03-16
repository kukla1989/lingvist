import styles from "./ArticlePreview.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";

interface ArticlePreviewProps {
  title: string;
  author: string;
  description: string;
  image: string;
  id: number;
}

function ArticlePreview({
  title,
  author,
  description,
  image,
  id
}: ArticlePreviewProps) {
  const link = localStorage.getItem('user')
    ? '/article/'
    : '/welcome/article/'

  return (
    <Link to={link + id} className={styles.articlePreview}>
      <img src={image} alt="img" className={styles.img} />
      <p className={classNames(styles.title, styles.articleElement)}>{title}</p>
      <p
        className={classNames(styles.author, styles.articleElement)}>{author}</p>
      <p
        className={classNames(styles.description, styles.articleElement)}>{description}</p>
    </Link>
  );
}

export default ArticlePreview;
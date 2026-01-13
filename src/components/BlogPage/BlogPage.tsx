import styles from "./BlogPage.module.scss";
import ArticlePreview from "../ArticlePreview/ArticlePreview.tsx";
import { articles } from "../../_utils/variables.tsx";


function BlogPage() {
  return (
    <div className={styles.blogPage}>
      {articles.map(article => <ArticlePreview {...article} key={article.id} />
      )}
    </div>
  );
}

export default BlogPage;
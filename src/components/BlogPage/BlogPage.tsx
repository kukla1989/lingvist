import styles from "./BlogPage.module.scss";
import ArticlePreview from "../ArticlePreview/ArticlePreview.tsx";
import img1 from "../../assets/images/article_small_1.jpg"
import img2 from "../../assets/images/article_small_2.jpg"
import img3 from "../../assets/images/article_small_3.jpeg"


const articles = [
  {
    key: 1,
    title: '3 Great Tips for Learning Two Languages (or More!) at Once',
    author: 'by Aubrie Amstutz | May 5, 2025',
    description: 'Follow these three great tips to stay sane while you tackle the challenge of learning multiple languages at once.',
    image: img1,
  },
  {
    key: 2,
    title: 'How a French Teacher Uses Lingvist in the Classroom',
    author: 'by Alejandra Fonseca De Franco | Apr 15, 2025 | Case-studies',
    description: 'Sara works as a French language teacher at Desert Ridge High School in the United States. She has been using Lingvist to complement her French classes since 2018 and says that her students are “learning tons of vocabulary very quickly.” ',
    image: img2,
  },
  {
    key: 3,
    title: 'Which Scandinavian Language Should You Learn?',
    author: 'by Sigrid Laurent | Mar 19, 2025',
    description: 'Thinking about learning a Scandinavian language? This article will help you choose the right one for you, based on your interests and goals.',
    image: img3,
  },
];

function BlogPage() {
  return (
    <div className={styles.blogPage}>
      {articles.map(article => <ArticlePreview {...article} key={article.key} />
      )}
    </div>
  );
}

export default BlogPage;
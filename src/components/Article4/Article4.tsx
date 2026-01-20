import styles from "./Article4.module.scss";
import img1 from "../../assets/images/article4_2.png";
import img2 from "../../assets/images/article4_3.jpg";
import SelfAd from "../SelfAd/SelfAd.tsx";

function Article4() {
  return (
    <div className={styles.article4}>
      <p className={styles.p}>Language learning researchers estimate that
        someone who knows between 800–1,000 words can successfully participate
        in basic, everyday conversations. After learning 2,000 words, research
        suggests you can understand about 80% of a text. Considering that you
        probably want to have some time left over to actually use your second
        language (before you’re in retirement), how can you learn one to two
        thousand words in a reasonable time frame? The key is forgetting to
        remember, or using your brain’s natural cyclical processes for moving
        new information into long-term storage to your advantage.</p>

      <p className={styles.p}>It sounds odd, but in order to cement something in
        your memory, you have to allow yourself to start to forget it. It turns
        out that there is actually a very specific window of time in which it’s
        best to review information that you’ve just begun to forget. But how are
        you supposed to know whether or not you’ve forgotten something? How can
        you pin down this optimal time frame? Luckily, researchers have
        developed a mathematical model that can track and predict this curve.
        Even better, with technology, we are finally able to put these findings
        into practice.
      </p>

      <h2 className={styles.title}>What Is Spaced Repetition?</h2>

      <p className={styles.p}>Experimental psychologists have been trying to pin
        down the exact behavior of items in our memory for over a century. In
        the late nineteenth and early twentieth century, Hermann Ebbinghaus
        discovered several patterns with regard to how quickly people are able
        to memorize information. He also tracked when that information starts to
        “decay” or become more difficult to call up. He described these patterns
        and findings as the learning curve, the forgetting curve, and the
        spacing effect. These patterns are foundational to the concept of spaced
        repetition (a.k.a. repetition scheduling and repetition learning), which
        is the usage of gradually increasing intervals to create an optimal
        learning schedule.
      </p>

      <img src={img1} alt="forgetting curve" className={styles.img} />

      <SelfAd />

      <h2 className={styles.title}>Early Applications</h2>

      <p className={styles.p}>Several memory researchers have attempted to apply
        the concept of spaced repetition in a practical system. In the 1970s,
        Sebastian Leitner designed a flashcard system in which incorrectly
        answered cards were shuffled back into the deck to allow someone to
        review items that they had missed. Unfortunately, the application was
        too complex for the average person to implement in real life, as it
        required a lot of effort to correctly organize the cards, as well as
        keep track of the increasing intervals for cards which had a higher
        frequency of being incorrectly guessed. Around the same time, Paul
        Pimsleur was the first to apply these discoveries to language learning
        via audio tapes. Though his program was an improvement on rote textbook
        memorization of foreign language vocabulary, it lacked the
        personalization of Leitner’s flashcard system.
      </p>

      <h2 className={styles.title}>Spaced Repetition Today</h2>

      <img src={img2} alt="lingvist person" className={styles.img} />

      <p className={styles.p}>Fast forward to present day, and spaced repetition
        software and computer programs remove the need for static learning
        techniques such as flashcards or audiotapes. Learners are now able to
        directly interact with the learning “recipe” without even being aware
        that they are doing so. Algorithms that power online language learning
        platforms are aided by artificial intelligence and machine learning,
        allowing them to be responsive to the needs of the learner and analyze
        massive data sets for significant statistical patterns. Both the
        systematically increasing time intervals of spaced repetition and the
        personalization of the flashcard system can be realistically achieved.
      </p>

      <p className={styles.p}>Spaced repetition is at the heart of Lingvist’s
        language courses, which adapt their curricular content in real time,
        meaning that the lessons proceed at your pace. Though language teachers
        are fantastic for conversation practice and coaching, the reality is
        that in a traditional 30-person classroom they are not able to adapt the
        lessons to everyone’s needs. The result is that some lessons move too
        quickly or include too much information for some and move too slowly for
        others. This is especially true if you’re learning a language in a class
        of mixed native language speakers, whose languages may or may not
        overlap in similarities in grammatical structures or related words
        (cognates). When you’re using a Lingvist course you tend to score better
        on words or with features that are similar between your language and the
        language you want to learn, so the spaced repetition algorithm allows
        you to focus on what’s different.
      </p>
    </div>
  );
}

export default Article4;
import styles from "./Article1.module.scss";
import img from "../../assets/images/article1.jpg";
import SelfAd from "../SelfAd/SelfAd.tsx";

const title = "Can You Learn Two Languages at Once?";

function Article1() {
  return (
    <div className={styles.article1}>
      <h2 className={styles.title}>
        {title}
      </h2>

      <p className={styles.p}>
        There’s a long-standing consensus among language learning enthusiasts
        that learning multiple languages simultaneously is more difficult than
        learning multiple languages sequentially. When asked, most people who
        have learned to speak one language at a time reply that they don’t think
        it’s a good idea. Those that have learned several languages at once say
        it’s not for the faint of heart: It takes a serious amount of dedication
        and time management skills to pull off. It’s difficult to make any
        blanket statement about learning a language because contextual factors,
        such as method of learning (classroom, language learning apps, tutors,
        etc.) and your personal motivation for learning that language, have such
        a huge impact on success.

        Despite the intuition many multilinguals share that simultaneous
        learning would be extremely difficult, a recent study of native Persian
        speakers (ages 20–29) learning French and English in a classroom setting
        found that “not only is simultaneous learning not an impeding factor but
        also it reinforces learning of the two languages.” These researchers go
        on to mention that other factors, such as pre-study proficiency levels
        and development of personal learning strategies are also relevant, but
        that more studies in other contexts are needed to determine whether
        learning multiple languages at once can actually be a net benefit.
      </p>

      <img src={img} alt={title} className={styles.img} />

      <p className={styles.p}>
        It’s not uncommon to be required to learn multiple languages in a short
        period of time for a certain degree or career opportunity. Maybe you
        want to learn the native language of a fellow expat romantic partner
        while you’re both living abroad and learning the local language. Perhaps
        you’re just the type of person that gets bored easily and is more
        engaged when challenged.

        Whatever the reason, if you’ve decided that simultaneous study of
        multiple languages is right for you, you’ll want to plan carefully to
        avoid burnout or wasted energy. We’ve narrowed it down to three basic
        rules to stay sane while you tackle this new challenge:
      </p>

      <div className={styles.anchorLink}>1. Choose your languages wisely</div>

      <div className={styles.anchorLink}>2. Make a realistic plan</div>

      <div className={styles.anchorLink}>3. Stay motivated</div>

      <SelfAd />

      <h3 className={styles.subtitle}>Don’t get carried away
      </h3>

      <h3 className={styles.subtitle}></h3>
    </div>
  );
}

export default Article1;
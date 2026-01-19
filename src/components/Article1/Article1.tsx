import styles from "./Article1.module.scss";
import img from "../../assets/images/article1.jpg";
import img2 from "../../assets/images/article_small_1_2.jpg";
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
      </p>

      <p className={styles.p}>
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

      <div className={styles.anchorLink}
           onClick={() => scrollTo('1')}
      >1. Choose your languages wisely
      </div>

      <div onClick={() => scrollTo('2')} className={styles.anchorLink}>2. Make
        a realistic plan
      </div>

      <div id="1" onClick={() => scrollTo('3')} className={styles.anchorLink}>3.
        Stay motivated
      </div>

      <SelfAd />

      <h2 className={styles.title}>
        1. Choose your languages wisely
      </h2>

      <h3 className={styles.subtitle}>Don’t get carried away
      </h3>

      <p className={styles.p}>According to the testimonials of those that have
        tried it, it’s not recommended to study more than two languages at once.
        Even if you are a full-time language learner, there are simply not
        enough hours in a day (or week) for your brain to rest when switching
        between four languages (three new languages + your native one).
      </p>

      <h3 className={styles.subtitle}>One similar, one different
      </h3>

      <p className={styles.p}>Some people find that studying similar languages
        at the same time is too confusing. If you have a choice in the matter
        (maybe you have a list of languages on your New Year’s resolutions you
        plan to eventually get through), you may want to start with two very
        different languages, such as learning Russian while also studying
        French. This will also make switching between the two more
        “refreshing.”</p>

      <h3 className={styles.subtitle}>One easy, one hard
      </h3>

      <p className={styles.p}>
        If possible, choose one “easier” language that’s closer to your native
        language. If English is your native language, you’re in luck, because
        you have lots of languages with features or words in common, since
        English has a history of contact with many other languages. Romance
        languages like French, Spanish, Italian, and Portuguese will have many
        cognates, or similar words. Germanic languages like German, Swedish,
        Danish, and Dutch will also have many cognates, as well as similar
        grammatical features. At the very least, it’s probably best to pick only
        one language with a different writing system at a time.
      </p>

      <img id="2" src={img2} alt="planning" className={styles.img} />

      <h2 className={styles.title}>
        2. Make a realistic plan
      </h2>

      <h3 className={styles.subtitle}>Be generous
      </h3>

      <p className={styles.p}>Learning two languages at once will take longer
        than learning one, so give yourself some wiggle room. This may seem
        obvious, but remind yourself of this when you feel like things are
        taking longer to click in your head than you’d like. Decide how much
        time you can realistically spend per day (or per week) studying, then
        subtract something like 5% to allow for fatigue (or just for unexpected
        life events!). If you reach your goal and decide to spend more time
        studying, you’ll feel extra productive. Remember that it’s best to leave
        yourself wanting more when you begin in order to avoid burning out
        during the honeymoon stage of learning a language.</p>

      <p className={styles.p}>How you divide your allotted study time between
        the two languages is something you may want to test out for the first
        few weeks, but it also depends on your goals for using the language.
        Some people like to do 50/50, switching between their two languages
        every few days or doing one in the morning and one at night. Others
        prefer to have one main language at around an 80/20 ratio for a long
        period of time and then switch.</p>

      <h3 className={styles.subtitle}>Take note of strategies that work for you
      </h3>

      <p className={styles.p}>Though the concept of aligning activities
        to
        learning styles has recently been criticized as not actually
        contributing to enhanced retention, you may still notice that certain
        activities help you remember things better. For example, perhaps drawing
        illustrations of words instead of the English translation on flashcards
        helps you visualize the meaning of the word instead of just the
        translation. If you’re someone who gets distracted easily, you may
        prefer to listen to podcasts while you do another activity with your
        hands, like knitting or cleaning. If you’re a musician, listening to
        music and following along with lyrics in your target language may be the
        most enjoyable and therefore memorable for you. If you’re a social
        butterfly and love finding out about others’ lives, a local or online
        tutor or language exchange may be best for you. If you’ve found that
        teaching material to someone else helps you remember it best, then try
        creating a course and sharing it with a community online. Lingvist’s
        Custom Decks tool, which allows you to automatically create and
        customize decks, is perfect for this. </p>

      <p id="3" className={styles.p}>The more time you spend learning
        languages, the more you’ll start to notice which methods are most
        effective for you and be able to adjust accordingly.</p>

      <h2 className={styles.title}>
        3. Stay motivated
      </h2>

      <h3 className={styles.subtitle}>Limit distractions and immerse yourself
      </h3>

      <p className={styles.p}>Though multi-tasking has become a standard way of
        life for most people in this day and age, distractions will drain your
        focus and use up your study time. If you’re the type of person that
        needs a few streams of information to stay focused, make sure they’re
        all in the language you’re learning. During your allotted study time you
        can listen to music in your target language, or if you need a break,
        take a look at news articles or social media in your target language.
        Close all other tabs on your computer (or switch your browser language
        to the one you’re learning!). If you’re using a language learning app,
        turn your phone on Do Not Disturb to avoid notifications popping up in
        your native language.</p>

      <p className={styles.p}>The more you can simulate immersion for that time
        period, the better. Once you get to a certain level of competence, try
        to avoid thinking in your native language and then translating. Instead,
        relax the native voice in your head and let the foreign voice do the
        thinking. The more you listen to music, watch films, etc. in the foreign
        language, the more you will start to associate words with their meaning,
        rather than their translation, and this will become easier. This is
        ideal because apart from concrete nouns (like “tree” or “cat”), words
        rarely have a perfect one-to-one translation.</p>

      <h3 className={styles.subtitle}>Ready to be a polyglot?
      </h3>

      <p className={styles.p}>Though the definition of a polyglot can shift
        depending on who you consult, the usual answer is someone with basic
        proficiency in six languages. If you’ve decided to learn two languages
        at once (plus your native language), you’re already on track to getting
        halfway there! If you’re interested in the minds and habits of
        successful polyglots throughout history, check out the book Babel No
        More. If you’re interested in jump-starting your journey to multiple
        languages, Lingvist is the fastest way to increase your vocabulary. With
        a subscription, you can learn different languages at once and keep track
        of your progress in the Insights tab, allowing you to stick to your
        language learning schedule. Congratulations on taking the first step
        (the planning step!) to becoming multilingual and good luck!</p>

    </div>
  );
}

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export default Article1;
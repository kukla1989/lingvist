import styles from "./Article3.module.scss";
import SelfAd from "../SelfAd/SelfAd.tsx";
import img from "../../assets/images/article3_2.jpeg";

function Article3() {
  return (
    <div className={styles.article3}>

      <p className={styles.p}>Hej! Velkommen! Välkommen! Greetings from the
        enchanting world of Scandinavia! If you’re thinking about embarking on a
        journey to learn a Scandinavian language, you’re in for an adventure
        that combines linguistic richness with the allure of Nordic culture.
        Scandinavia is more than just meatballs, fjords, and a certain Swedish
        furniture giant. It is a region with a rich history, vibrant arts and
        culture, and stunning natural beauty.
      </p>

      <p className={styles.p}>But the question remains: Which Scandinavian
        language should you choose? There are three main Scandinavian languages
        – Swedish, Norwegian, and Danish. Each language has its own unique charm
        and nuances.
      </p>

      <p className={styles.p}>In this article, we’ll help you explore the
        different Scandinavian languages and choose the one that’s right for
        you. By the end of this article, you’ll have a clear understanding of
        each language and be ready to begin your Scandinavian language learning
        journey.
      </p>

      <SelfAd />

      <h2 className={styles.title}>What are the Scandinavian languages?</h2>

      <p className={styles.p}>The Scandinavian languages are a group of North
        Germanic languages spoken in Northern Europe. The main Scandinavian
        languages are Danish, Norwegian, and Swedish. Icelandic, Faroese,
        Gutnish, and Elfdalian are also considered to be Scandinavian languages,
        although they are more distantly related to Danish, Norwegian, and
        Swedish.
      </p>

      <p className={styles.p}>Scandinavian languages have a number of
        similarities. They all share a common vocabulary and grammar, and they
        are all relatively easy for speakers of other Germanic languages – such
        as English, German, and Dutch – to learn.
      </p>

      <img src={img} alt="icelend" className={styles.img} />

      <h2 className={styles.title}>How similar are the Scandinavian
        languages?</h2>

      <p className={styles.p}>The Scandinavian languages are very similar to
        each other, both in terms of vocabulary and grammar. This is because
        they all developed from Old Norse, a language that was spoken in
        Scandinavia a long time ago during the Viking Age.
      </p>

      <p className={styles.p}>Danish, Norwegian, and Swedish are the most
        similar of the Scandinavian languages, and they are mutually
        intelligible to a large extent. This means that speakers of one of these
        languages can generally understand the other two languages without much
        difficulty.
      </p>

      <p className={styles.p}>The most similar among the Scandinavian languages
        are Danish and Norwegian, and here is a great video which illustrates
        that. The similarities most likely come from their shared history, when
        Norway was part of a union with Denmark. During that time, the Danish
        language and culture was predominant in Norway.
      </p>

      <h2 className={styles.title}>Total numbers of L1 and L2 speakers of each
        language
      </h2>

      <p className={styles.p}>As of 2023, there are about 21.5 million people
        who speak Scandinavian languages. Swedish is the largest of them all,
        with 10 million L1 (native language) speakers. Danish and Norwegian have
        around 6 million and 4.32 million native speakers, respectively.
      </p>


      <p className={styles.p}>The total number of L2 (second language) speakers
        of Scandinavian languages is difficult to estimate, as there is no
        reliable data available. It’s estimated, however, that Swedish has about
        3 million L2 speakers. This might come from the fact that Sweden has the
        largest population out of all the Scandinavian countries. This makes it
        easier to find Swedish language resources and to find people with whom
        to practice Swedish. Sweden is also a relatively wealthy country with a
        high standard of living, making it an attractive destination for
        immigrants and students, who may want to learn Swedish in order to live
        and work in Sweden.
      </p>

      <h2 className={styles.title}>The status of English in the Scandinavian
        countries
      </h2>

      <p className={styles.p}>English is widely spoken in the Scandinavian
        countries, and they rank among the top countries for English proficiency
        among non-native English-speaking countries. That’s because compared to
        English, all of the Scandinavian languages are relatively small, and
        knowing English gives you an advantage in many areas of life.
      </p>

      <p className={styles.p}>However, this doesn’t mean that you shouldn’t
        study these languages. Studying a language helps you to communicate with
        the locals, whether you just want to travel there or move there for
        work. Additionally, it shows appreciation for the language and culture,
        even if you’re able to communicate only on the most basic level. This
        shows that you’re at least making an effort to understand the language.
      </p>

      <h2 className={styles.title}>Knowledge of Scandinavian languages in
        neighboring countries
      </h2>

      <h3 className={styles.subtitle}>Iceland</h3>

      <p className={styles.p}>Danish is usually one of the compulsory languages
        for schoolchildren in Iceland, although this doesn’t necessarily mean
        that Icelanders speak Danish or any other Scandinavian language all that
        well.
      </p>

      <h3 className={styles.subtitle}>Finland</h3>

      <p className={styles.p}>Finland is a Nordic country that has two official
        languages: Finnish and Swedish. Finnish is part of the Finno-Ugric
        language family, so it’s not related to any Scandinavian languages.
        Swedish is the native language of 5.2% and is taught in Finnish schools.
        Despite that, not many Finns actually speak Swedish.
      </p>

      <h3 className={styles.subtitle}>The Baltic countries</h3>

      <p className={styles.p}>Of the three Baltic countries, Estonia and Latvia
        have the closest ties to Sweden, since both countries were ruled by
        Sweden at one point. Estonia has a Swedish-speaking minority group
        called Estonian Swedes (eestirootslased). Most Estonian Swedes used to
        live in Noarootsi parish (now part of Lääne-Nigula parish), where place
        names still have both Estonian and Swedish versions. None of the
        Scandinavian languages are mandatory in school, but you might find
        people here and there who speak them to some extent.</p>

      <h2 className={styles.title}></h2>

      <p className={styles.p}></p>

      <p className={styles.p}></p>

      <h2 className={styles.title}></h2>


      <h3 className={styles.subtitle}></h3>


    </div>
  );
}

export default Article3;
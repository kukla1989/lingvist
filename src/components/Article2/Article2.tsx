import styles from "./Article2.module.scss";

import img from "../../assets/images/article_small_2_2.jpg";

function Article2() {
  return (
    <div className={styles.article2}>
      <p className={styles.p}> Sara Cooper has been teaching language for the
        past 29 years. She’s from the generation of teachers that preceded the
        use of technology in the classroom – when all they had to work with was
        a textbook and a list of words for their students to memorize. However,
        she has embraced the use of digital devices and mobile apps to help her
        students improve their experience while learning a new language, and
        she’s done so successfully.
      </p>

      <p className={styles.p}>Currently, Sara works as a French language teacher
        at Desert Ridge High
        School in the Gilbert Public School District in Mesa, Arizona, United
        States. She has been using Lingvist to complement her French classes
        since 2018 and says that her students are “learning tons of vocabulary
        very quickly.”</p>

      <p className={styles.p}> Keep reading to learn more about her positive
        experience with Lingvist
        and how it has changed her teaching game and benefited her students.</p>


      <h2 className={styles.title}>Introducing technology and Lingvist to the
        classroom</h2>

      <p className={styles.p}>It was 2017 when the school district first
        introduced the use of Chromebooks at Desert Ridge High School. Sara
        began exploring the use of digital tools and language content from
        YouTube videos, and her students could now watch other people speaking
        French in different parts of the world.</p>

      <p className={styles.p}>“The textbooks were just these little cartoon
        characters that made it look as though this is what everyone in France
        looked like, and even though I tried to explain that it’s very diverse
        in France, now they can actually see that,” Sara explains. </p>

      <p className={styles.p}>But it wasn’t until one of her older students,
        Ryan, a language enthusiast and polyglot himself, introduced her to a
        frequency list and eventually to Lingvist, that Sara decided to change
        everything in her classroom.</p>

      <img src={img} alt="lemons" className={styles.img} />

      <h3 className={styles.subtitle}>
        The frequency list – “Why are you teaching mango?”
      </h3>

      <p className={styles.p}>“Why are you teaching mango? That’s not a very
        important word,” Ryan asked Sara one day. He told her about how
        polyglots learn languages and introduced her to the concept of
        frequency: a list of the most common words and how frequently they
        appear in everyday language. A frequency list can help language learners
        identify important words to learn and forms an important basis for
        Lingvist.
      </p>

      <p className={styles.p}>“When we were using the textbook, you just had a
        list of vocabulary, and that is all that students had to go by. Unless
        they would look up extra words in a dictionary, that was really it. So
        now, they’ll throw a new word at me every day, and I’ll say, ‘Where did
        you get that? Lingvist?’”
      </p>

      <p className={styles.p}>“The textbook is very slow compared to what we do
        now, and it’s very limited in what you teach them. Now, with technology,
        especially Lingvist, it goes so much faster. I feel so much more
        successful, more progress than with the little bit of vocabulary they
        got from the textbook. So I would say technology has been the big
        difference.”</p>

      <h2 className={styles.title}>
        Benefits for all
      </h2>

      <p className={styles.p}>In the first ten minutes of class, Sara’s students
        sit in silence with their Chromebooks open while completing their daily
        Lingvist session. They are assigned fifty minutes of Lingvist every
        week, which is divided into ten minutes a day, five days a week. This
        vocabulary practice also comprises part of their grade, so Lingvist is
        now a part of the daily routine in Sara’s French class.</p>

      <h3 className={styles.subtitle}>1. Quiet time while learning
      </h3>

      <p className={styles.p}>“It’s amazing for my classroom, because they come
        in – it’s high school, they’re wild, they’re chatty, they’re talking to
        their friends – and they come in, sit down to start doing Lingvist, and
        the bell rings and it’s just quiet in my room for 10 minutes.”
      </p>

      <p className={styles.p}>While her students are learning new vocabulary and
        getting their brains into “French mode,” she has the opportunity to
        focus on other important things. “But it also provides ‘me time’ to take
        attendance, talk to a kid that was absent yesterday, or do all of those
        managerial things you have to do in a classroom that you usually don’t
        have time for when you’re teaching,” Sara explains.
      </p>

      <h3 className={styles.subtitle}>2. It’s easy to use
      </h3>

      <p className={styles.p}>“This product is already ready to go: you just
        have to create a classroom, get the kids to sign up, and then it’s
        pretty magical,” says Sara.
      </p>

      <p className={styles.p}>In the Classroom view, teachers can easily check
        their students’ data, including how many minutes they have done and how
        many words they have encountered. They can also choose to assign
        specific vocabulary decks or create their own by uploading a list of
        words.
      </p>

      <h3 className={styles.subtitle}>3. Improved reading</h3>

      <p className={styles.p}>In her years as a language teacher before
        introducing Lingvist, Sara had experienced some resistance from her
        students toward reading assignments. The textbooks, as she mentioned,
        only provide teachers with a limited list of vocabulary based on
        specific themes, like food or family, not enough of the important words
        that they need to know to be able to understand a text.
      </p>

      <p className={styles.p}>“How do you teach them ‘but,’ ‘and,’ or ‘for’ and
        have that make sense for them?” Sara asks.
      </p>

      <p className={styles.p}>“You really have to know the little conjunctions,
        those little words that help get you through, and so they would get
        pretty frustrated with reading. Now I give them reading and they just
        tell me it’s so easy.”
      </p>


      <h3 className={styles.subtitle}>4. Achieving new goals and passing tests
      </h3>

      <p className={styles.p}>Now, for the past couple of years, Sara has
        encouraged her French level 3 students to take the AAPPL test
        (Assessment of Performance toward Proficiency in Languages) at the end
        of the course.
      </p>

      <p className={styles.p}>Even though this isn’t mandatory in American
        schools to be able to graduate, if a student takes the test and achieves
        an intermediate level – B2 in the Common European Framework of Reference
        (CEFR) – it gives them a so-called “Seal of Biliteracy” on their high
        school diploma.
      </p>
    </div>
  );
}

export default Article2;
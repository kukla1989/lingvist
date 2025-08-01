import GoogleSVG from "../../assets/icons/GoogleSVG";
import UkrainianFlagSVG from "../../assets/icons/UkrainianFlagSVG";
import ArrowSVG from "../../assets/icons/ArrowSVG";
import BritainFlagSVG from "../../assets/icons/BritainFlagSVG";
import styles from "./SignupPage.module.scss";

const SignupPage = () => {
  return (
    <div className={styles.signupPage}>
      <h1 className={styles.top}>Реєстрація</h1>

      <div className={styles.language}>
        <UkrainianFlagSVG />
        <ArrowSVG />
        <BritainFlagSVG />
      </div>

      <div className={styles.auth}>
        <div className={styles.signupGoogle}>
          <GoogleSVG />
          Зареєструватися через Google
        </div>

        <div className={styles.agreement}>
          Реєструючись, ви погоджуєтеся з
          <span className={styles.underline}>Умовами надання послуг</span> {" "}i{" "}
          <span className={styles.underline}>Політикою Конфіденційності Lingvist.</span>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

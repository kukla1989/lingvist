import GoogleSVG from "../../assets/icons/GoogleSVG";
import styles from "./SignupPage.module.scss";

const SignupPage = () => {
  return (
    <div className={styles.signupPage}>
      <div className={styles.top}>Реєстрація</div>

      <div className={styles.main}>
        <div className={styles.signupGoogle}>
          <GoogleSVG />
          Зареєструватися через Google
        </div>

        <div className={styles.agreement}>
          Реєструючись, ви погоджуєтеся з
          <span className={styles.underline}>Умовами надання послуг</span>i
          <span className={styles.underline}>Політикою Конфіденційності Lingvist.</span>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

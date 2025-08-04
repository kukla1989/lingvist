import GoogleButton from "../GoogleButton/GoogleButton";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  return <div className={styles.loginPage}>
    <GoogleButton name="Увійти через Google" className={styles.loginBtn} />
    <div className={styles.register}>Зареєструватися</div>
  </div>;
};

export default LoginPage;

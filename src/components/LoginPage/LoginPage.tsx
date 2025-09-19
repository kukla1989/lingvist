import styles from "./LoginPage.module.scss";
import { NavLink } from "react-router-dom";
import { useIsDark } from "../../hooks/useIsDark.ts";

const LoginPage = () => {
  const isDark = useIsDark();
  return <div className={styles.loginPage}>
    <NavLink to='/'>
      {/*<GoogleButton name="Увійти через Google" className={styles.loginBtn}/>*/}
    </NavLink>
    <NavLink to="/welcome/signup" className={`${styles.register} ${isDark ? styles['register--dark'] : ''}`}>
      Зареєструватися
    </NavLink>
  </div>;
};

export default LoginPage;

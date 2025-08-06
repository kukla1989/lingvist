import GoogleButton from "../GoogleButton/GoogleButton";

import styles from "./LoginPage.module.scss";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  return <div className={styles.loginPage}>
    <NavLink to='/'>
      <GoogleButton name="Увійти через Google" className={styles.loginBtn}/>
    </NavLink>
    <NavLink to="/welcome/signup" className={styles.register}>
      Зареєструватися
    </NavLink>
  </div>;
};

export default LoginPage;

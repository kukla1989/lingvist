import styles from "./LoginPage.module.scss";
import { NavLink } from "react-router-dom";
import { useIsDark } from "../../hooks/useIsDark.ts";
import UserSVG from "../../assets/icons/UserSVG.tsx";
import PasswordSVG from "../../assets/icons/PasswordSVG.tsx";
import MailSVG from "../../assets/icons/MailSVG.tsx";
import { useState } from "react";

const LoginPage = () => {
  const isDark = useIsDark();
  const [formData, setFormData] = useState({ namEmail: "", password: "" })

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return <div className={styles.loginPage}>
    <form onSubmit={handleSubmit} className={styles.auth}>
      <div className={`${styles['input-wrapper']}`}>
        <MailSVG />
        <UserSVG />
        <input
          type="namEmail"
          name="namEmail"
          placeholder="username or email"
          className={`${styles.input} ${isDark && styles['input--dark']}`}
          value={formData.namEmail}
          onChange={handleChange}
          autoComplete="email"
          required
        />
      </div>

      <div className={`${styles['input-wrapper']}`}>
        <PasswordSVG />
        <input
          type="password"
          name="password"
          placeholder="password"
          className={`${styles.input} ${isDark && styles['input--dark']}`}
          value={formData.password}
          onChange={handleChange}
          minLength={8}
          autoComplete="new-password"
          required
        />
      </div>

      <button
        className={`${styles.submit} ${isDark && styles['submit--dark']}`}
        type="submit"
      > log in
      </button>

      <NavLink to="/welcome/signup"
               className={`${styles.signup} ${isDark ? styles['signup--dark'] : ''}`}>
        sign up
      </NavLink>
    </form>
  </div>;
};

export default LoginPage;

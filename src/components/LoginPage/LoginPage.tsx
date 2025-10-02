import styles from "./LoginPage.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useIsDark } from "../../hooks/useIsDark.ts";
import UserSVG from "../../assets/icons/UserSVG.tsx";
import PasswordSVG from "../../assets/icons/PasswordSVG.tsx";
import MailSVG from "../../assets/icons/MailSVG.tsx";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store/authSlice.ts";

const api = import.meta.env.VITE_API_URL

const LoginPage = () => {
  const isDark = useIsDark();
  const [formData, setFormData] = useState({ namEmail: "", password: "" })
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();


  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const res = await fetch(api + "/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Invalid credentials");
      } else {
        dispatch(loginSuccess({ token: data.token, user: data.user }));
        navigate("/", {
          state: {
            showModal: true,
            user: formData.namEmail,
            msg: (`You are logged in as ${data.user.name}`)
          }
        });
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong, try again later");
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError("");
  }

  return <div className={styles.loginPage}>
    <div className={styles.error}>
      {error}
    </div>
    <form onSubmit={handleSubmit} className={styles.auth}>
      <div className={`${styles['input-wrapper']}`}>
        <MailSVG />
        <UserSVG />
        <input
          type="text"
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

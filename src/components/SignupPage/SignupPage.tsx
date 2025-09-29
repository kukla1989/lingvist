import UkrainianFlagSVG from "../../assets/icons/UkrainianFlagSVG";
import ArrowSVG from "../../assets/icons/ArrowSVG";
import BritainFlagSVG from "../../assets/icons/BritainFlagSVG";
import styles from "./SignupPage.module.scss";
import { useIsDark } from "../../hooks/useIsDark.ts";
import { useState } from "react";
import UserSVG from "../../assets/icons/UserSVG.tsx";
import MailSVG from "../../assets/icons/MailSVG.tsx";
import PasswordSVG from "../../assets/icons/PasswordSVG.tsx";
import { useNavigate } from 'react-router-dom';
const api = import.meta.env.VITE_API_URL

interface FormData {
  name: string;
  email: string;
  password: string;
}

const SignupPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  })
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(api + '/auth/register', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong, pls try again");
      } else {
        navigate("/", {state: { showModal: true, user: formData.name }});
      }
    } catch (err) {
      console.error(err);
    }
  }

  const isDark = useIsDark();

  return (
    <div className={styles.signupPage}>
      <h1 className={styles.top}>Реєстрація</h1>

      <div className={styles.language}>
        <UkrainianFlagSVG />
        <ArrowSVG />
        <BritainFlagSVG />
      </div>

      <div className={styles.error}>
        {error}
      </div>
      <form onSubmit={handleSubmit} className={styles.auth}>
        <div className={`${styles['input-wrapper']}`}>
          <UserSVG />
          <input
            type="text"
            name="name"
            placeholder="username"
            className={`${styles.input} ${isDark && styles['input--dark']}`}
            value={formData.name}
            onChange={handleChange}
            autoComplete="username"
            required
          />
        </div>

        <div className={`${styles['input-wrapper']}`}>
          <MailSVG />
          <input
            type="email"
            name="email"
            placeholder="email"
            className={`${styles.input} ${isDark && styles['input--dark']}`}
            value={formData.email}
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
        > create an account
        </button>

        <div className={styles.agreement}>
          Реєструючись, ви погоджуєтеся з{" "}
          <span
            className={styles.underline}>Умовами надання послуг</span> i{" "}
          <span className={styles.underline}>Політикою Конфіденційності</span>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;

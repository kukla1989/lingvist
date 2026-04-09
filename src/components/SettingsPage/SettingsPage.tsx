import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";

import styles from "./SettingsPage.module.scss";
import { useState } from "react";
import {
  getIsBlurUkrTranslation,
  switchBlurUkrTranslation
} from "../../_utils/helpers.ts";

function SettingsPage() {
  const user = useSelector((state: RootState) => state.auth.user);
  const [isBlurUkrTranslation, setIsBlurUkrTranslation] = useState(getIsBlurUkrTranslation());

  const switchBlurUkrTranslationHandler = () => {
    switchBlurUkrTranslation();
    setIsBlurUkrTranslation(!isBlurUkrTranslation);
  }
  return (
    <div className={styles.settingsPage}>
      <h2 className={styles.title}>Account settings</h2>

      <div className={styles.row}>
        <div className={styles.left}>username</div>
        <div className={styles.right}>{user?.name}</div>
      </div>

      <div className={styles.row}>
        <div className={styles.left}>email</div>
        <div className={styles.right}>{user?.email}</div>
      </div>

      <div className={styles.row}>
        <div className={styles.left}>toggle Ukrainian translation blur in learn words</div>
        <button onClick={switchBlurUkrTranslationHandler}
                className={`${styles.right} ${styles.button}`}
        >{isBlurUkrTranslation ? 'unblur' : 'blur'}</button>
      </div>
    </div>
  );
}

export default SettingsPage;
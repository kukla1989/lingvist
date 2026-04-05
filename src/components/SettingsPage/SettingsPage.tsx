import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";

import styles from "./SettingsPage.module.scss";

function SettingsPage() {
  const user = useSelector((state: RootState) => state.auth.user);

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
    </div>
  );
}

export default SettingsPage;
import styles from "./SelfAd.module.scss";
import PcSVG from "../../assets/icons/pcSVG.tsx";

function SelfAd() {
  return (
    <div className={styles.selfAd}>
      <PcSVG />

      <div className={styles.middle}>
        <div className={styles.title}>Learn a new language with Lingvist</div>

        <div className={styles.subtitle}>
          Learn the words you actually need, when you need them!
        </div>
      </div>

      <button className={styles.getStarted}>get started</button>
    </div>
  );
}

export default SelfAd;
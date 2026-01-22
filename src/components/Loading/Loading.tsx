import styles from "./Loading.module.scss";
interface LoadingProps {
  text?: string;
}
function Loading({ text = 'Loading...' }: LoadingProps) {

  return (
    <div className={styles.loading}>{text}.</div>
  );
}

export default Loading;
import styles from "./Loading.module.scss";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.tsx";

interface LoadingProps {
  text?: string;
  loadingSpinnerSize?: number;
}

function Loading({ text = 'Loading...', loadingSpinnerSize = 40 }: LoadingProps) {

  return (
    <div className={styles.loading}>
      {text}

      <LoadingSpinner size={loadingSpinnerSize} />
    </div>
  );
}

export default Loading;
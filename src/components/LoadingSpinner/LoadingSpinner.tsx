import styles from "./LoadingSpinner.module.scss";

interface LoadingSpinnerProps {
  size?: number;
}

function LoadingSpinner({ size = 40 }: LoadingSpinnerProps) {
  const spinnerSize = {
    '--spinner-size': `${size}px`
  } as React.CSSProperties;

  return (
    <div className={styles.loadingSpinnerContainer} style={spinnerSize}>
      <div className={styles.loadingSpinner}></div>
    </div>
  );
}

export default LoadingSpinner;

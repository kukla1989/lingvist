import styles from './ToastModal.module.scss';
import { useEffect, useState } from "react";

interface ToastModalProps {
  msg: string;
  time?: number;
  afterClose?: () => void;
}

function ToastModal({ msg, time, afterClose }: ToastModalProps = { msg: "", time: 2000 }) {
  const [showToast, setShowToast] = useState(true);
  useEffect(() => {
    setTimeout(() => {setShowToast(false)
      afterClose?.()
    }, time);
  }, [])

  if (!showToast) return null;

  return (
    <div className={styles.toastModal}>
      <div className={styles.msg}>
        {msg}
      </div>
    </div>
  );
}

export default ToastModal;
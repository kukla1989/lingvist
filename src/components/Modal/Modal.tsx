import styles from "./Modal.module.scss";
import { useEffect } from "react";

interface ModalProps {
  isOpen?: boolean;
  msg: string;
  onClose: (
    e?: React.MouseEvent<HTMLElement> | React.KeyboardEvent
  ) => void;
}

function Modal({ onClose, isOpen = true, msg }: ModalProps) {
  if (!isOpen) return null;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <>
      <div className={styles.modal}>
        <div>{msg}</div>

        <button className={styles.ok} onClick={onClose}>ok</button>
      </div>

      <div className={styles.backdrop} onClick={onClose}></div>
    </>
  );
}

export default Modal;
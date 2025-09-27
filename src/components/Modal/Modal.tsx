import styles from "./Modal.module.scss";
import { useEffect } from "react";

interface ModalProps {
  children: React.ReactNode,
  onClose: () => void;
  isOpen?: boolean;
}

function Modal({ children, onClose, isOpen = true }: ModalProps) {
  if (!isOpen) return null;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <>
      <div className={styles.modal}>
        {children}

        <button className={styles.ok} onClick={onClose}>ok</button>
      </div>

      <div className={styles.backdrop} onClick={onClose}></div>
    </>
  );
}

export default Modal;
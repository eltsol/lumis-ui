import { useEffect, useRef, ReactNode } from "react";
import styles from "./Snackbar.module.css";
import { SnackbarProps } from "./Snackbar.types";

export const Snackbar = ({
  message,
  actionLabel,
  onAction,
  onClose,
  duration = 4000,
  isOpen,
}: SnackbarProps) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isOpen && duration) {
      timerRef.current = setTimeout(() => {
        onClose?.();
      }, duration);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.snackbar}>
      <span className={styles.message}>{message}</span>
      {actionLabel && (
        <button className={styles.action} onClick={onAction}>
          {actionLabel}
        </button>
      )}
      {onClose && !actionLabel && (
        <button className={styles.close} onClick={onClose} aria-label="Close">
          ✕
        </button>
      )}
    </div>
  );
};

import { useEffect, useRef } from "react";
import "./Snackbar.scss";
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
    <div className="Snackbar Snackbar__root">
      <span className="Snackbar__message">{message}</span>
      {actionLabel && (
        <button className="Snackbar__action" onClick={onAction}>
          {actionLabel}
        </button>
      )}
      {onClose && !actionLabel && (
        <button
          className="Snackbar__close"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
      )}
    </div>
  );
};

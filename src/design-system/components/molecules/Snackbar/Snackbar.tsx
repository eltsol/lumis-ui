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
    <div className="snackbar snackbar__root">
      <span className="snackbar__message">{message}</span>
      {actionLabel && (
        <button className="snackbar__action" onClick={onAction}>
          {actionLabel}
        </button>
      )}
      {onClose && !actionLabel && (
        <button
          className="snackbar__close"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
      )}
    </div>
  );
};

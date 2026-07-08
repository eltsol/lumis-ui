import { useEffect, useCallback } from "react";
import "./Modal.scss";
import { ModalProps } from "./Modal.types";

export const Modal = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = "md",
  closeOnOverlayClick = true,
}: ModalProps) => {
  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (closeOnOverlayClick && e.target === e.currentTarget) {
        onClose();
      }
    },
    [closeOnOverlayClick, onClose],
  );

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="Modal__overlay" onClick={handleOverlayClick}>
      <div className={`Modal__root Modal--${size}`}>
        {(title || description) && (
          <div className="Modal__header">
            <div>
              {title && <h2 className="Modal__title">{title}</h2>}
              {description && (
                <p className="Modal__description">{description}</p>
              )}
            </div>
            <button
              className="Modal__close"
              onClick={onClose}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        )}
        <div className="Modal__content">{children}</div>
      </div>
    </div>
  );
};

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
    <div className="modal__overlay" onClick={handleOverlayClick}>
      <div className={`modal__root modal--${size}`}>
        {(title || description) && (
          <div className="modal__header">
            <div>
              {title && <h2 className="modal__title">{title}</h2>}
              {description && (
                <p className="modal__description">{description}</p>
              )}
            </div>
            <button
              className="modal__close"
              onClick={onClose}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        )}
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
};

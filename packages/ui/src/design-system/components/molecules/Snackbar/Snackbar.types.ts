import { ReactNode } from "react";

export interface SnackbarProps {
  message: ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  onClose?: () => void;
  duration?: number;
  isOpen: boolean;
}

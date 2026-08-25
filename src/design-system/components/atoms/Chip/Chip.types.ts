import { HTMLAttributes, ReactNode } from "react";

export type ChipVariants =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "error";
export type ChipSizes = "sm" | "md";

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: ChipVariants;
  size?: ChipSizes;
  label: string;
  icon?: ReactNode;
  onDelete?: () => void;
  selectable?: boolean;
  selected?: boolean;
  onClick?: () => void;
}

import { HTMLAttributes, ReactNode } from "react";

export type BadgeVariants =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error";
export type BadgeSizes = "sm" | "md";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariants;
  size?: BadgeSizes;
  children: ReactNode;
  dot?: boolean;
}

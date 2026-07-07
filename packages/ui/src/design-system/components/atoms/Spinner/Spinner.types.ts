import { HTMLAttributes } from "react";

export type SpinnerSizes = "sm" | "md" | "lg";

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  size?: SpinnerSizes;
  label?: string;
}

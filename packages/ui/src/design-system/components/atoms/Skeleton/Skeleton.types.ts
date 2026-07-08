import { HTMLAttributes } from "react";

export interface SkeletonProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "text" | "circular" | "rectangular";
  width?: string;
  height?: string;
}

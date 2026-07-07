import { HTMLAttributes, ReactNode } from "react";

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: number | string;
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  children: ReactNode;
}

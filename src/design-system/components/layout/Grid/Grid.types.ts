import { HTMLAttributes, ReactNode } from "react";

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: number | string;
  direction?: "row" | "column";
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between";
  wrap?: boolean;
  children: ReactNode;
}

import { HTMLAttributes, ReactNode } from "react";

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  label?: string;
}

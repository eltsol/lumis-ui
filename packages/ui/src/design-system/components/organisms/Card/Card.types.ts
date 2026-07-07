import { HTMLAttributes, ReactNode } from "react";

export type CardPadding = "none" | "sm" | "md" | "lg";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  clickable?: boolean;
  padding?: CardPadding;
  children: ReactNode;
}

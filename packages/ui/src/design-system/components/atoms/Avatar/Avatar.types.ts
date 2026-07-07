import { HTMLAttributes, ReactNode } from "react";

export type AvatarSizes = "xs" | "sm" | "md" | "lg" | "xl";

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSizes;
  fallbackIcon?: ReactNode;
}

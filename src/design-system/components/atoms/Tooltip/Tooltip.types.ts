import { HTMLAttributes, ReactNode } from "react";

export interface TooltipProps extends Omit<
  HTMLAttributes<HTMLSpanElement>,
  "content"
> {
  content: ReactNode;
  children: ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  visible?: boolean;
}

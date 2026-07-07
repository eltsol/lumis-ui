import { HTMLAttributes, ReactNode } from "react";

export type TypographyVariants =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "caption";

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
    variant?: TypographyVariants;
    children: ReactNode;
}
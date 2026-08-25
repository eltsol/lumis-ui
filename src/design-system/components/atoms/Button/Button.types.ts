import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

export type ButtonVariants = "primary" | "secondary" | "ghost";
export type ButtonSizes = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  loading?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
}

export type ButtonProps = ButtonBaseProps &
  (
    | ({ href: string } & Omit<
        AnchorHTMLAttributes<HTMLAnchorElement>,
        keyof ButtonBaseProps | "href"
      >)
    | ({ href?: never } & Omit<
        ButtonHTMLAttributes<HTMLButtonElement>,
        keyof ButtonBaseProps
      >)
  );

import React, {ReactNode} from "react";
export type ButtonVariants = 'primary' | 'secondary' | 'ghost';
export type ButtonSizes = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariants;
    size?: ButtonSizes;
    loading?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    fullWidth?: boolean;
}
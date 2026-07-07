import { HTMLAttributes, ReactNode } from "react";

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
  options: SelectOption[];
  placeholder?: string;
  fullWidth?: boolean;
}

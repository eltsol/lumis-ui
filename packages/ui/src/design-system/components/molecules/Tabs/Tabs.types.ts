import { HTMLAttributes, ReactNode } from "react";

export interface TabItem {
  label: string;
  value: string;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface TabsProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "onChange"
> {
  tabs: TabItem[];
  value: string;
  onChange: (value: string) => void;
  fullWidth?: boolean;
}

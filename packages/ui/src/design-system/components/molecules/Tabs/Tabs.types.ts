import { HTMLAttributes, ReactNode } from "react";

export interface TabProps {
  label: string;
  value: string;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  tabs: TabProps[];
  value: string;
  onChange: (value: string) => void;
  fullWidth?: boolean;
}

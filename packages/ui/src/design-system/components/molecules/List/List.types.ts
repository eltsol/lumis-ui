import { HTMLAttributes, ReactNode } from "react";

export interface ListItemProps {
  label: string;
  secondary?: string;
  leading?: ReactNode;
  trailing?: ReactNode;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export interface ListProps extends HTMLAttributes<HTMLUListElement> {
  items: ListItemProps[];
  dense?: boolean;
  onItemClick?: (index: number) => void;
}

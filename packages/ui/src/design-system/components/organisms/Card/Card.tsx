import "./Card.scss";
import { CardProps } from "./Card.types";

export const Card = ({
  hoverable = false,
  clickable = false,
  padding = "md",
  children,
  ...props
}: CardProps) => {
  const className = [
    "Card Card__root",
    `Card--${padding}`,
    hoverable ? "Card--hoverable" : "",
    clickable ? "Card--clickable" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

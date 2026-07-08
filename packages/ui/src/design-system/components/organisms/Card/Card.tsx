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
    "card card__root",
    `card--${padding}`,
    hoverable ? "card--hoverable" : "",
    clickable ? "card--clickable" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

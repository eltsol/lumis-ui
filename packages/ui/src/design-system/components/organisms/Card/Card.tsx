import "./Card.scss";
import { CardProps } from "./Card.types";

export const Card = ({
  hoverable = false,
  clickable = false,
  padding = "md",
  children,
  className,
  ...props
}: CardProps) => {
  const cardClassName = [
    "card card__root",
    `card--${padding}`,
    hoverable ? "card--hoverable" : "",
    clickable ? "card--clickable" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cardClassName} {...props}>
      {children}
    </div>
  );
};

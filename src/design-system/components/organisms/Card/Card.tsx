import "./Card.scss";
import { CardProps } from "./Card.types";

export const Card = ({
  hoverable = false,
  clickable = false,
  padding = "md",
  children,
  className,
  onClick,
  onKeyDown,
  role,
  tabIndex,
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
    <div
      className={cardClassName}
      role={clickable ? "button" : role}
      tabIndex={clickable ? (tabIndex ?? 0) : tabIndex}
      onClick={onClick}
      onKeyDown={(event) => {
        onKeyDown?.(event);
        if (
          clickable &&
          !event.defaultPrevented &&
          event.target === event.currentTarget &&
          (event.key === "Enter" || event.key === " ")
        ) {
          event.preventDefault();
          event.currentTarget.click();
        }
      }}
      {...props}
    >
      {children}
    </div>
  );
};

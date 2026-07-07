import styles from "./Card.module.css";
import { CardProps } from "./Card.types";

export const Card = ({
  hoverable = false,
  clickable = false,
  padding = "md",
  children,
  ...props
}: CardProps) => {
  const className = [
    styles.card,
    styles[padding],
    hoverable ? styles.hoverable : "",
    clickable ? styles.clickable : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

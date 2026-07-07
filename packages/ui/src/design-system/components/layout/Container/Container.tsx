import styles from "./Container.module.css";
import { ContainerProps } from "./Container.types";

export const Container = ({
  maxWidth = "xl",
  padding = "md",
  centered = true,
  children,
  className,
  ...props
}: ContainerProps) => {
  const containerClassName = [
    styles.container,
    styles[maxWidth],
    styles[padding],
    centered ? styles.centered : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClassName} {...props}>
      {children}
    </div>
  );
};

import "./Container.scss";
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
    "Container Container__root",
    `Container--${maxWidth}`,
    `Container--${padding}`,
    centered ? "Container--centered" : "",
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

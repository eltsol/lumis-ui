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
    "container container__root",
    `container--${maxWidth}`,
    `container--${padding}`,
    centered ? "container--centered" : "",
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

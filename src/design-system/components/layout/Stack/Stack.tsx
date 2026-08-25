import "./Stack.scss";
import type { StackProps } from "./Stack.types";

export const Stack = ({
  direction = "column",
  gap = "md",
  align = "stretch",
  justify = "start",
  wrap = false,
  className,
  children,
  ...props
}: StackProps) => {
  const stackClassName = [
    "stack stack__root",
    `stack--${direction}`,
    `stack--gap-${gap}`,
    `stack--align-${align}`,
    `stack--justify-${justify}`,
    wrap ? "stack--wrap" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={stackClassName} {...props}>
      {children}
    </div>
  );
};

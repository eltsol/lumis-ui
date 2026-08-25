import "./Grid.scss";
import { GridProps } from "./Grid.types";

export const Grid = ({
  columns,
  direction,
  gap = "md",
  align,
  justify,
  wrap = false,
  children,
  className,
  style,
  ...props
}: GridProps) => {
  const resolvedColumns = columns ?? (direction ? undefined : 1);
  const gridClassName = [
    "grid grid__root",
    `grid--${gap}`,
    typeof resolvedColumns === "number" ? `grid--cols-${resolvedColumns}` : "",
    direction ? "grid--directional" : "",
    direction ? `grid--direction-${direction}` : "",
    align ? `grid--align-${align}` : "",
    justify ? `grid--justify-${justify}` : "",
    wrap ? "grid--wrap" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const customColumns =
    typeof resolvedColumns === "string" ? { gridTemplateColumns: resolvedColumns } : {};

  return (
    <div className={gridClassName} style={{ ...customColumns, ...style }} {...props}>
      {children}
    </div>
  );
};

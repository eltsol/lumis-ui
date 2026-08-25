import "./Grid.scss";
import { GridProps } from "./Grid.types";

export const Grid = ({
  columns = 1,
  gap = "md",
  children,
  className,
  ...props
}: GridProps) => {
  const gridClassName = [
    "grid grid__root",
    `grid--${gap}`,
    typeof columns === "number" ? `grid--cols-${columns}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const customColumns =
    typeof columns === "string" ? { gridTemplateColumns: columns } : {};

  return (
    <div className={gridClassName} style={customColumns} {...props}>
      {children}
    </div>
  );
};

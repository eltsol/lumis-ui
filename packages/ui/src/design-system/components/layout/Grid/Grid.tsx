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
    "Grid Grid__root",
    `Grid--${gap}`,
    typeof columns === "number" ? `Grid--cols-${columns}` : "",
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

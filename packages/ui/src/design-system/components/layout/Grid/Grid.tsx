import styles from "./Grid.module.css";
import { GridProps } from "./Grid.types";

export const Grid = ({
  columns = 1,
  gap = "md",
  children,
  className,
  ...props
}: GridProps) => {
  const gridClassName = [
    styles.grid,
    styles[gap],
    typeof columns === "number" ? styles[`cols-${columns}`] : "",
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

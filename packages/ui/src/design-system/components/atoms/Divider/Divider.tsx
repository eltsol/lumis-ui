import styles from "./Divider.module.css";
import { DividerProps } from "./Divider.types";

export const Divider = ({
  orientation = "horizontal",
  className,
  ...props
}: DividerProps) => {
  const dividerClassName = [styles.divider, styles[orientation], className]
    .filter(Boolean)
    .join(" ");

  return <hr className={dividerClassName} {...props} />;
};

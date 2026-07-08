import "./Divider.scss";
import { DividerProps } from "./Divider.types";

export const Divider = ({
  orientation = "horizontal",
  className,
  ...props
}: DividerProps) => {
  const dividerClassName = [
    "divider divider__root",
    `divider--${orientation}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <hr className={dividerClassName} {...props} />;
};

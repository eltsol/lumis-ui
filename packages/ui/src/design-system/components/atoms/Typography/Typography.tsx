import "./Typography.scss";
import { TypographyProps } from "./Typography.types";

export const Typography = ({
  variant = "body1",
  children,
  ...props
}: TypographyProps) => {
  const getTag = () => {
    switch (variant) {
      case "h1":
        return "h1";
      case "h2":
        return "h2";
      case "h3":
        return "h3";
      case "h4":
        return "h4";
      case "h5":
        return "h5";
      case "h6":
        return "h6";
      default:
        return "p";
    }
  };

  const Tag = getTag();

  return (
    <Tag className={`Typography--${variant}`} {...props}>
      {children}
    </Tag>
  );
};

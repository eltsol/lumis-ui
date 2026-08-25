import "./Typography.scss";
import { TypographyProps } from "./Typography.types";

const variantTags = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "p",
  body2: "p",
  caption: "p",
} as const;

export const Typography = ({
  variant = "body1",
  as,
  children,
  className,
  ...props
}: TypographyProps) => {
  const Tag = as ?? variantTags[variant];

  return (
    <Tag
      className={["typography", `typography--${variant}`, className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </Tag>
  );
};

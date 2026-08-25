import "./Skeleton.scss";
import { SkeletonProps } from "./Skeleton.types";

export const Skeleton = ({
  variant = "text",
  width,
  height,
  className,
  ...props
}: SkeletonProps) => {
  const style: React.CSSProperties = { width, height };

  return (
    <span
      className={`skeleton skeleton__root skeleton--${variant} ${className || ""}`}
      style={style}
      {...props}
    />
  );
};

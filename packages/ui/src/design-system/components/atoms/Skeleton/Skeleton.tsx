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
      className={`Skeleton Skeleton__root Skeleton--${variant} ${className || ""}`}
      style={style}
      {...props}
    />
  );
};

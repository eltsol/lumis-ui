import styles from "./Skeleton.module.css";
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
      className={`${styles.skeleton} ${styles[variant]} ${className || ""}`}
      style={style}
      {...props}
    />
  );
};

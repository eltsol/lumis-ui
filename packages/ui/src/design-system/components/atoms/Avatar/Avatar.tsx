import styles from "./Avatar.module.css";
import { AvatarProps } from "./Avatar.types";

export const Avatar = ({
  src,
  alt,
  name,
  size = "md",
  fallbackIcon,
  className,
  ...props
}: AvatarProps) => {
  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "";

  const avatarClassName = [styles.avatar, styles[size], className]
    .filter(Boolean)
    .join(" ");

  if (src) {
    return (
      <span className={avatarClassName} {...props}>
        <img className={styles.image} src={src} alt={alt} />
      </span>
    );
  }

  return (
    <span className={avatarClassName} {...props}>
      {fallbackIcon || initials}
    </span>
  );
};

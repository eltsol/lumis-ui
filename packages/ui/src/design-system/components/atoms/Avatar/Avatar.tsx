import "./Avatar.scss";
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
  const initials = name ? name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2) : "";
  const avatarClassName = ["avatar avatar__root", `avatar--${size}`, className].filter(Boolean).join(" ");

  if (src) {
    return (
      <span className={avatarClassName} {...props}>
        <img className="avatar__image" src={src} alt={alt} />
      </span>
    );
  }

  return (
    <span className={avatarClassName} {...props}>
      {fallbackIcon || initials}
    </span>
  );
};

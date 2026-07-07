import styles from "./List.module.css";
import { ListProps } from "./List.types";

export const List = ({
  items,
  dense = false,
  onItemClick,
  className,
  ...props
}: ListProps) => {
  const listClassName = [styles.list, dense ? styles.dense : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <ul className={listClassName} {...props}>
      {items.map((item, index) => (
        <li
          key={index}
          className={`${styles.item} ${item.selected ? styles.selected : ""} ${item.disabled ? styles.disabled : ""}`}
          onClick={() =>
            !item.disabled && (item.onClick || onItemClick)?.(index)
          }
        >
          {item.leading && (
            <span className={styles.leading}>{item.leading}</span>
          )}
          <div className={styles.content}>
            <span className={styles.label}>{item.label}</span>
            {item.secondary && (
              <span className={styles.secondary}>{item.secondary}</span>
            )}
          </div>
          {item.trailing && (
            <span className={styles.trailing}>{item.trailing}</span>
          )}
        </li>
      ))}
    </ul>
  );
};

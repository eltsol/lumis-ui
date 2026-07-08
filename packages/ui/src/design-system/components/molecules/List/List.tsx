import "./List.scss";
import { ListProps } from "./List.types";

export const List = ({
  items,
  dense = false,
  onItemClick,
  className,
  ...props
}: ListProps) => {
  const listClassName = [
    "List List__root",
    dense ? "List--dense" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <ul className={listClassName} {...props}>
      {items.map((item, index) => (
        <li
          key={index}
          className={`List__item ${item.selected ? "List__item--selected" : ""} ${item.disabled ? "List__item--disabled" : ""}`}
          onClick={() =>
            !item.disabled && (item.onClick || onItemClick)?.(index)
          }
        >
          {item.leading && (
            <span className="List__leading">{item.leading}</span>
          )}
          <div className="List__content">
            <span className="List__label">{item.label}</span>
            {item.secondary && (
              <span className="List__secondary">{item.secondary}</span>
            )}
          </div>
          {item.trailing && (
            <span className="List__trailing">{item.trailing}</span>
          )}
        </li>
      ))}
    </ul>
  );
};

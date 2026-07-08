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
    "list list__root",
    dense ? "list--dense" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <ul className={listClassName} {...props}>
      {items.map((item, index) => (
        <li
          key={index}
          className={`list__item ${item.selected ? "list__item--selected" : ""} ${item.disabled ? "list__item--disabled" : ""}`}
          onClick={() =>
            !item.disabled && (item.onClick || onItemClick)?.(index)
          }
        >
          {item.leading && (
            <span className="list__leading">{item.leading}</span>
          )}
          <div className="list__content">
            <span className="list__label">{item.label}</span>
            {item.secondary && (
              <span className="list__secondary">{item.secondary}</span>
            )}
          </div>
          {item.trailing && (
            <span className="list__trailing">{item.trailing}</span>
          )}
        </li>
      ))}
    </ul>
  );
};

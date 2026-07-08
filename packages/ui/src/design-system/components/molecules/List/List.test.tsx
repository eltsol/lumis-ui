import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { List } from "./List";

describe("List", () => {
  const items = [
    { label: "Item 1" },
    { label: "Item 2" },
    { label: "Item 3", secondary: "Description" },
  ];

  it("renders list items", () => {
    render(<List items={items} />);
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
  });

  it("renders secondary text", () => {
    render(<List items={items} />);
    expect(screen.getByText("Description")).toBeInTheDocument();
  });

  it("renders leading and trailing elements", () => {
    render(<List items={[{ label: "Item", leading: "📄", trailing: "→" }]} />);
    expect(screen.getByText("📄")).toBeInTheDocument();
    expect(screen.getByText("→")).toBeInTheDocument();
  });

  it("calls onItemClick when item is clicked", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<List items={items} onItemClick={handleClick} />);
    await user.click(screen.getByText("Item 1"));
    expect(handleClick).toHaveBeenCalledWith(0);
  });

  it("calls item onClick when provided", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<List items={[{ label: "Item", onClick: handleClick }]} />);
    await user.click(screen.getByText("Item"));
    expect(handleClick).toHaveBeenCalledWith(0);
  });

  it("does not call onClick when item is disabled", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(
      <List
        items={[{ label: "Item", disabled: true, onClick: handleClick }]}
      />,
    );
    await user.click(screen.getByText("Item"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("applies selected class", () => {
    render(<List items={[{ label: "Item", selected: true }]} />);
    expect(document.querySelector(".list__item--selected")).toBeInTheDocument();
  });

  it("applies disabled class", () => {
    render(<List items={[{ label: "Item", disabled: true }]} />);
    expect(document.querySelector(".list__item--disabled")).toBeInTheDocument();
  });

  it("applies dense class", () => {
    render(<List items={items} dense />);
    expect(document.querySelector(".list__root")).toHaveClass("list--dense");
  });

  it("forwards custom className", () => {
    render(<List items={items} className="custom" />);
    expect(document.querySelector(".list__root")).toHaveClass("custom");
  });
});

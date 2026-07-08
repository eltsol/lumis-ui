import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Chip } from "./Chip";

describe("Chip", () => {
  it("renders chip with label", () => {
    render(<Chip label="Tag" />);
    expect(screen.getByText("Tag")).toBeInTheDocument();
  });

  it("applies default classes", () => {
    render(<Chip label="Tag" />);
    expect(document.querySelector(".chip__root")).toHaveClass(
      "chip",
      "chip__root",
      "chip--default",
      "chip--md",
    );
  });

  it("applies variant classes", () => {
    render(<Chip label="Tag" variant="primary" />);
    expect(document.querySelector(".chip__root")).toHaveClass("chip--primary");
  });

  it("applies size classes", () => {
    render(<Chip label="Tag" size="sm" />);
    expect(document.querySelector(".chip__root")).toHaveClass("chip--sm");
  });

  it("applies selectable class", () => {
    render(<Chip label="Tag" selectable />);
    expect(document.querySelector(".chip__root")).toHaveClass(
      "chip--selectable",
    );
  });

  it("applies selected class", () => {
    render(<Chip label="Tag" selected />);
    expect(document.querySelector(".chip__root")).toHaveClass("chip--selected");
  });

  it("renders icon when provided", () => {
    render(<Chip label="Tag" icon="★" />);
    expect(screen.getByText("★")).toBeInTheDocument();
  });

  it("renders delete button when onDelete is provided", () => {
    render(<Chip label="Tag" onDelete={() => {}} />);
    expect(screen.getByLabelText("Delete")).toBeInTheDocument();
  });

  it("calls onDelete when delete button is clicked", async () => {
    const handleDelete = vi.fn();
    const user = userEvent.setup();
    render(<Chip label="Tag" onDelete={handleDelete} />);
    await user.click(screen.getByLabelText("Delete"));
    expect(handleDelete).toHaveBeenCalled();
  });

  it("calls onClick when chip is clicked", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<Chip label="Tag" onClick={handleClick} />);
    await user.click(document.querySelector(".chip__root")!);
    expect(handleClick).toHaveBeenCalled();
  });

  it("forwards custom className", () => {
    render(<Chip label="Tag" className="custom" />);
    expect(document.querySelector(".chip__root")).toHaveClass("custom");
  });
});

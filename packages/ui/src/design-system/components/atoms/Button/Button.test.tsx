import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renders button with children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies default variant and size classes", () => {
    render(<Button>Test</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass(
      "button",
      "button__root",
      "button--primary",
      "button--md",
    );
  });

  it("applies variant classes", () => {
    const { rerender } = render(<Button variant="secondary">Test</Button>);
    expect(screen.getByRole("button")).toHaveClass("button--secondary");

    rerender(<Button variant="ghost">Test</Button>);
    expect(screen.getByRole("button")).toHaveClass("button--ghost");
  });

  it("applies size classes", () => {
    const { rerender } = render(<Button size="sm">Test</Button>);
    expect(screen.getByRole("button")).toHaveClass("button--sm");

    rerender(<Button size="lg">Test</Button>);
    expect(screen.getByRole("button")).toHaveClass("button--lg");
  });

  it("renders left and right icons", () => {
    render(
      <Button leftIcon="←" rightIcon="→">
        Test
      </Button>,
    );
    expect(screen.getByText("←")).toBeInTheDocument();
    expect(screen.getByText("→")).toBeInTheDocument();
  });

  it("disables button when disabled prop is true", () => {
    render(<Button disabled>Test</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("disables button when loading is true", () => {
    render(<Button loading>Test</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("does not render children when loading", () => {
    render(<Button loading>Click me</Button>);
    expect(screen.queryByText("Click me")).not.toBeInTheDocument();
  });

  it("applies fullWidth class when fullWidth is true", () => {
    render(<Button fullWidth>Test</Button>);
    expect(screen.getByRole("button")).toHaveClass("button--fullwidth");
  });

  it("forwards onClick handler", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Test</Button>);
    screen.getByRole("button").click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick}>
        Test
      </Button>,
    );
    screen.getByRole("button").click();
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("does not call onClick when loading", () => {
    const handleClick = vi.fn();
    render(
      <Button loading onClick={handleClick}>
        Test
      </Button>,
    );
    screen.getByRole("button").click();
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("forwards custom className", () => {
    render(<Button className="custom-class">Test</Button>);
    expect(screen.getByRole("button")).toHaveClass("custom-class");
  });
});

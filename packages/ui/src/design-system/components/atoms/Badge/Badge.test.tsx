import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders badge with children", () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("applies default classes", () => {
    render(<Badge>Test</Badge>);
    expect(screen.getByText("Test")).toHaveClass(
      "badge",
      "badge__root",
      "badge--primary",
      "badge--md",
    );
  });

  it("applies variant classes", () => {
    const { rerender } = render(<Badge variant="success">Test</Badge>);
    expect(screen.getByText("Test")).toHaveClass("badge--success");

    rerender(<Badge variant="error">Test</Badge>);
    expect(screen.getByText("Test")).toHaveClass("badge--error");
  });

  it("applies size classes", () => {
    const { rerender } = render(<Badge size="sm">Test</Badge>);
    expect(screen.getByText("Test")).toHaveClass("badge--sm");

    rerender(<Badge size="md">Test</Badge>);
    expect(screen.getByText("Test")).toHaveClass("badge--md");
  });

  it("applies dot class when dot is true", () => {
    render(<Badge dot>Test</Badge>);
    expect(screen.getByText("Test")).toHaveClass("badge--dot");
  });

  it("does not apply dot class when dot is false", () => {
    render(<Badge dot={false}>Test</Badge>);
    expect(screen.getByText("Test")).not.toHaveClass("badge--dot");
  });

  it("forwards custom className", () => {
    render(<Badge className="custom">Test</Badge>);
    expect(screen.getByText("Test")).toHaveClass("custom");
  });
});

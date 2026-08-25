import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Icon } from "./Icon";

describe("Icon", () => {
  it("renders children", () => {
    render(<Icon>★</Icon>);
    expect(screen.getByText("★")).toBeInTheDocument();
  });

  it("applies default classes", () => {
    render(<Icon>★</Icon>);
    expect(screen.getByText("★")).toHaveClass("icon", "icon__root", "icon--md");
  });

  it("applies size classes", () => {
    const { rerender } = render(<Icon size="sm">★</Icon>);
    expect(screen.getByText("★")).toHaveClass("icon--sm");

    rerender(<Icon size="lg">★</Icon>);
    expect(screen.getByText("★")).toHaveClass("icon--lg");
  });

  it("sets role and aria-label", () => {
    render(<Icon label="Star">★</Icon>);
    expect(screen.getByRole("img")).toHaveAttribute("aria-label", "Star");
  });

  it("forwards custom className", () => {
    render(<Icon className="custom">★</Icon>);
    expect(screen.getByText("★")).toHaveClass("custom");
  });
});

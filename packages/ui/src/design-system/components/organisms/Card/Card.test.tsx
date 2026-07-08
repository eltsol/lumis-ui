import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Card } from "./Card";

describe("Card", () => {
  it("renders children", () => {
    render(<Card>Content</Card>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("applies default padding class", () => {
    render(<Card>Content</Card>);
    expect(document.querySelector(".card__root")).toHaveClass("card--md");
  });

  it("applies padding classes", () => {
    const { rerender } = render(<Card padding="sm">Content</Card>);
    expect(document.querySelector(".card__root")).toHaveClass("card--sm");

    rerender(<Card padding="lg">Content</Card>);
    expect(document.querySelector(".card__root")).toHaveClass("card--lg");
  });

  it("applies hoverable class", () => {
    render(<Card hoverable>Content</Card>);
    expect(document.querySelector(".card__root")).toHaveClass(
      "card--hoverable",
    );
  });

  it("applies clickable class", () => {
    render(<Card clickable>Content</Card>);
    expect(document.querySelector(".card__root")).toHaveClass(
      "card--clickable",
    );
  });

  it("forwards custom props", () => {
    render(<Card data-testid="card">Content</Card>);
    expect(screen.getByTestId("card")).toBeInTheDocument();
  });
});

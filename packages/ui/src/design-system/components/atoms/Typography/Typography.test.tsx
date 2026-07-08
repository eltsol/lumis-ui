import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Typography } from "./Typography";

describe("Typography", () => {
  it("renders with default variant as paragraph", () => {
    render(<Typography>Body text</Typography>);
    expect(screen.getByText("Body text")).toBeInTheDocument();
    expect(screen.getByText("Body text")).toBeInstanceOf(HTMLParagraphElement);
  });

  it.each(["h1", "h2", "h3", "h4", "h5", "h6"] as const)(
    "renders heading variant %s as %s element",
    (variant) => {
      render(<Typography variant={variant}>Heading</Typography>);
      const element = screen.getByText("Heading");
      expect(element.tagName.toLowerCase()).toBe(variant);
    },
  );

  it("applies variant classes", () => {
    const { rerender } = render(<Typography variant="h1">Test</Typography>);
    expect(screen.getByText("Test")).toHaveClass(
      "typography",
      "typography--h1",
    );

    rerender(<Typography variant="body2">Test</Typography>);
    expect(screen.getByText("Test")).toHaveClass(
      "typography",
      "typography--body2",
    );
  });

  it("forwards custom props", () => {
    render(<Typography data-testid="typo">Test</Typography>);
    expect(screen.getByTestId("typo")).toBeInTheDocument();
  });
});

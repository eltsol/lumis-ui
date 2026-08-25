import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Container } from "./Container";

describe("Container", () => {
  it("renders children", () => {
    render(<Container>Content</Container>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("applies default classes", () => {
    render(<Container>Content</Container>);
    expect(document.querySelector(".container__root")).toHaveClass(
      "container--max-xl",
      "container--padding-md",
      "container--centered",
    );
  });

  it("applies maxWidth classes", () => {
    const { rerender } = render(<Container maxWidth="sm">Content</Container>);
    expect(document.querySelector(".container__root")).toHaveClass(
      "container--max-sm",
    );

    rerender(<Container maxWidth="lg">Content</Container>);
    expect(document.querySelector(".container__root")).toHaveClass(
      "container--max-lg",
    );
  });

  it("applies padding classes", () => {
    const { rerender } = render(<Container padding="sm">Content</Container>);
    expect(document.querySelector(".container__root")).toHaveClass(
      "container--padding-sm",
    );

    rerender(<Container padding="lg">Content</Container>);
    expect(document.querySelector(".container__root")).toHaveClass(
      "container--padding-lg",
    );
  });

  it("does not apply centered class when centered is false", () => {
    render(<Container centered={false}>Content</Container>);
    expect(document.querySelector(".container__root")).not.toHaveClass(
      "container--centered",
    );
  });

  it("forwards custom className", () => {
    render(<Container className="custom">Content</Container>);
    expect(document.querySelector(".container__root")).toHaveClass("custom");
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Spinner } from "./Spinner";

describe("Spinner", () => {
  it("renders spinner element", () => {
    render(<Spinner />);
    expect(document.querySelector(".spinner__root")).toBeInTheDocument();
  });

  it("applies default size class", () => {
    render(<Spinner />);
    expect(document.querySelector(".spinner__root")).toHaveClass("spinner--md");
  });

  it("applies size classes", () => {
    const { rerender } = render(<Spinner size="sm" />);
    expect(document.querySelector(".spinner__root")).toHaveClass("spinner--sm");

    rerender(<Spinner size="lg" />);
    expect(document.querySelector(".spinner__root")).toHaveClass("spinner--lg");
  });

  it("renders label when provided", () => {
    render(<Spinner label="Loading data" />);
    expect(screen.getByText("Loading data")).toBeInTheDocument();
  });

  it("sets role and aria-label", () => {
    render(<Spinner />);
    expect(screen.getByRole("status")).toHaveAttribute("aria-label", "Loading");
  });

  it("uses custom label for aria-label", () => {
    render(<Spinner label="Please wait" />);
    expect(screen.getByRole("status")).toHaveAttribute(
      "aria-label",
      "Please wait",
    );
  });

  it("forwards custom className", () => {
    render(<Spinner className="custom" />);
    expect(document.querySelector(".spinner__wrapper")).toHaveClass("custom");
  });
});

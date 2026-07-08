import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Skeleton } from "./Skeleton";

describe("Skeleton", () => {
  it("renders skeleton element", () => {
    render(<Skeleton />);
    expect(document.querySelector(".skeleton__root")).toBeInTheDocument();
  });

  it("applies default variant class", () => {
    render(<Skeleton />);
    expect(document.querySelector(".skeleton__root")).toHaveClass(
      "skeleton--text",
    );
  });

  it("applies variant classes", () => {
    const { rerender } = render(<Skeleton variant="circular" />);
    expect(document.querySelector(".skeleton__root")).toHaveClass(
      "skeleton--circular",
    );

    rerender(<Skeleton variant="rectangular" />);
    expect(document.querySelector(".skeleton__root")).toHaveClass(
      "skeleton--rectangular",
    );
  });

  it("applies custom width and height styles", () => {
    render(<Skeleton width="100px" height="50px" />);
    const skeleton = document.querySelector(".skeleton__root");
    expect(skeleton).toHaveStyle({ width: "100px", height: "50px" });
  });

  it("forwards custom className", () => {
    render(<Skeleton className="custom" />);
    expect(document.querySelector(".skeleton__root")).toHaveClass("custom");
  });
});

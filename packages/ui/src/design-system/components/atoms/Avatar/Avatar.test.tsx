import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("renders with initials from name", () => {
    render(<Avatar name="John Doe" />);
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("renders fallback icon when no name", () => {
    render(<Avatar fallbackIcon="👤" />);
    expect(screen.getByText("👤")).toBeInTheDocument();
  });

  it("renders image when src is provided", () => {
    render(<Avatar src="/photo.jpg" alt="User" />);
    expect(screen.getByAltText("User")).toBeInTheDocument();
    expect(screen.getByAltText("User")).toHaveAttribute("src", "/photo.jpg");
  });

  it("applies size classes", () => {
    const { rerender } = render(<Avatar name="Test" size="sm" />);
    expect(screen.getByText("T")).toHaveClass("avatar--sm");

    rerender(<Avatar name="Test" size="lg" />);
    expect(screen.getByText("T")).toHaveClass("avatar--lg");
  });

  it("does not render image when no src", () => {
    render(<Avatar name="John Doe" />);
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("renders single initial for single name", () => {
    render(<Avatar name="Alice" />);
    expect(screen.getByText("A")).toBeInTheDocument();
  });

  it("forwards custom className", () => {
    render(<Avatar name="Test" className="custom" />);
    expect(screen.getByText("T")).toHaveClass("custom");
  });
});

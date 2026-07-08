import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Divider } from "./Divider";

describe("Divider", () => {
  it("renders horizontal divider by default", () => {
    render(<Divider />);
    expect(document.querySelector("hr")).toBeInTheDocument();
    expect(document.querySelector(".divider__root")).toHaveClass(
      "divider--horizontal",
    );
  });

  it("renders vertical divider", () => {
    render(<Divider orientation="vertical" />);
    expect(document.querySelector(".divider__root")).toHaveClass(
      "divider--vertical",
    );
  });

  it("applies default classes", () => {
    render(<Divider />);
    expect(document.querySelector(".divider__root")).toHaveClass(
      "divider",
      "divider__root",
    );
  });

  it("forwards custom className", () => {
    render(<Divider className="custom" />);
    expect(document.querySelector(".divider__root")).toHaveClass("custom");
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Tooltip } from "./Tooltip";

describe("Tooltip", () => {
  it("renders children", () => {
    render(<Tooltip content="Help">Hover me</Tooltip>);
    expect(screen.getByText("Hover me")).toBeInTheDocument();
  });

  it("renders tooltip content when controlled visible is true", () => {
    render(
      <Tooltip content="Help" visible={true}>
        Hover me
      </Tooltip>,
    );
    expect(screen.getByText("Help")).toBeInTheDocument();
  });

  it("does not render tooltip content when controlled visible is false", () => {
    render(
      <Tooltip content="Help" visible={false}>
        Hover me
      </Tooltip>,
    );
    const tooltipRoot = document.querySelector(".tooltip__root");
    expect(tooltipRoot).not.toHaveClass("tooltip--visible");
  });

  it("applies placement classes", () => {
    const { rerender } = render(
      <Tooltip content="Help" placement="top">
        Hover me
      </Tooltip>,
    );
    expect(document.querySelector(".tooltip__wrapper")).toHaveClass(
      "tooltip--top",
    );

    rerender(
      <Tooltip content="Help" placement="bottom">
        Hover me
      </Tooltip>,
    );
    expect(document.querySelector(".tooltip__wrapper")).toHaveClass(
      "tooltip--bottom",
    );
  });

  it("applies visible class when visible is true", () => {
    render(
      <Tooltip content="Help" visible={true}>
        Hover me
      </Tooltip>,
    );
    expect(document.querySelector(".tooltip__wrapper")).toHaveClass(
      "tooltip--visible",
    );
  });

  it("forwards custom className", () => {
    render(
      <Tooltip content="Help" className="custom">
        Hover me
      </Tooltip>,
    );
    expect(document.querySelector(".tooltip__wrapper")).toHaveClass("custom");
  });
});

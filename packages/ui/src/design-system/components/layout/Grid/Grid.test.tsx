import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Grid } from "./Grid";

describe("Grid", () => {
  it("renders children", () => {
    render(
      <Grid>
        <div>Item</div>
      </Grid>,
    );
    expect(screen.getByText("Item")).toBeInTheDocument();
  });

  it("applies default classes", () => {
    render(
      <Grid>
        <div>Item</div>
      </Grid>,
    );
    expect(document.querySelector(".grid__root")).toHaveClass(
      "grid--md",
      "grid--cols-1",
    );
  });

  it("applies gap classes", () => {
    const { rerender } = render(
      <Grid gap="sm">
        <div>Item</div>
      </Grid>,
    );
    expect(document.querySelector(".grid__root")).toHaveClass("grid--sm");

    rerender(
      <Grid gap="lg">
        <div>Item</div>
      </Grid>,
    );
    expect(document.querySelector(".grid__root")).toHaveClass("grid--lg");
  });

  it("applies column classes for number columns", () => {
    const { rerender } = render(
      <Grid columns={2}>
        <div>Item</div>
      </Grid>,
    );
    expect(document.querySelector(".grid__root")).toHaveClass("grid--cols-2");

    rerender(
      <Grid columns={4}>
        <div>Item</div>
      </Grid>,
    );
    expect(document.querySelector(".grid__root")).toHaveClass("grid--cols-4");
  });

  it("applies custom column style for string columns", () => {
    render(
      <Grid columns="1fr 2fr">
        <div>Item</div>
      </Grid>,
    );
    expect(document.querySelector(".grid__root")).toHaveStyle({
      gridTemplateColumns: "1fr 2fr",
    });
  });

  it("forwards custom className", () => {
    render(
      <Grid className="custom">
        <div>Item</div>
      </Grid>,
    );
    expect(document.querySelector(".grid__root")).toHaveClass("custom");
  });
});

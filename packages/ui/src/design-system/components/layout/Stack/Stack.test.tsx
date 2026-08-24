import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Stack } from "./Stack";

describe("Stack", () => {
  it("renders children with default layout classes", () => {
    render(<Stack><span>Content</span></Stack>);
    expect(screen.getByText("Content").parentElement).toHaveClass(
      "stack--column",
      "stack--gap-md",
      "stack--align-stretch",
      "stack--justify-start",
    );
  });

  it("supports horizontal, wrapped layouts", () => {
    render(<Stack direction="row" wrap className="custom"><span>Content</span></Stack>);
    expect(screen.getByText("Content").parentElement).toHaveClass(
      "stack--row",
      "stack--wrap",
      "custom",
    );
  });
});

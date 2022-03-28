import { render, screen } from "@testing-library/react";

import Header from "../components/Header";
import "@testing-library/jest-dom";

describe("Header", () => {
  it("renders a heading", () => {
    render(<Header />);

    const heading = screen.getByText("Welcome to Photo Gallery");

    expect(heading).toBeInTheDocument();
  });
});

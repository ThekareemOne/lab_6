import { getByTestId, render } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import Header from "./Header";

let container = null;

beforeEach(function () {
  container = render(<Header />).container;
});

it("should show logo", () => {
  expect(getByTestId(container, "logo")).toBeTruthy();
});

afterEach(() => {
  unmountComponentAtNode(container);
});

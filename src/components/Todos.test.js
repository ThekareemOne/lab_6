import {
  act,
  fireEvent,
  getAllByTestId,
  getByTestId,
  render,
} from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import apiClient from "../services/apiClient";
import Todos from "./Todos";

let container = null;

beforeEach(async function () {
  jest.spyOn(apiClient, "getTodos").mockImplementation(() => {
    return Promise.resolve([
      { userId: 1, id: 1, title: "delectus aut autem", completed: false },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false,
      },
      { userId: 1, id: 3, title: "fugiat veniam minus", completed: false },
      { userId: 1, id: 4, title: "et porro tempora", completed: true },
      {
        userId: 1,
        id: 5,
        title:
          "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: false,
      },
      {
        userId: 1,
        id: 6,
        title: "qui ullam ratione quibusdam voluptatem quia omnis",
        completed: false,
      },
      {
        userId: 1,
        id: 7,
        title: "illo expedita consequatur quia in",
        completed: false,
      },
      {
        userId: 1,
        id: 8,
        title: "quo adipisci enim quam ut ab",
        completed: true,
      },
      {
        userId: 1,
        id: 9,
        title: "molestiae perspiciatis ipsa",
        completed: false,
      },
      {
        userId: 1,
        id: 10,
        title: "illo est ratione doloremque quia maiores aut",
        completed: true,
      },
    ]);
  });
  container = render(<Todos />).container;

  await act(async () => {});
});

it("should show todos", () => {
  const todos = getAllByTestId(container, "todo");

  expect(todos.length).toBeGreaterThan(0);
});

it("should show counter", () => {
  fireEvent.click(getByTestId(container, "item-1"));
  fireEvent.click(getByTestId(container, "item-2"));
  fireEvent.click(getByTestId(container, "item-3"));

  fireEvent.click(getByTestId(container, "button"));

  expect(getByTestId(container, "counter").textContent).toBe("3");
});

afterEach(() => {
  unmountComponentAtNode(container);
});

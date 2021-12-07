import React, { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

export default function Todos() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    apiClient.getTodos(todoItems).then((items) => setTodoItems(items));
  }, []);

  return (
    <div>
      <div className="card w-100">
        <div className="card-body">
          <h5 className="card-title">Todos</h5>
          <ul className="list-group list-group-flush">
            {todoItems.map((item) => (
              <li className="list-group-item" data-testid="todo" key={item.id}>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    style={{ marginRight: "10px" }}
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    {item.title}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

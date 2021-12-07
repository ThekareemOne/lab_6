import React, { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

export default function Todos() {
  const [todoItems, setTodoItems] = useState([]);
  const [counter, setCounter] = useState(0);
  const [showCounter, setShowCounter] = useState(false);

  useEffect(() => {
    apiClient.getTodos(todoItems).then((items) => setTodoItems(items));
  }, []);

  const handleChange = (event) => {
    if (event.target.checked) {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <div className="card w-100">
        <div className="card-body">
          <h5 className="card-title">Todos</h5>
          <ul className="list-group list-group-flush">
            {todoItems.map((item) => (
              <li className="list-group-item" key={item.id}>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    style={{ marginRight: "10px" }}
                    onChange={handleChange}
                  />
                  <label className="custom-control-label">{item.title}</label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row justify-content-center px-5 my-5">
        <button
          className="btn btn-primary"
          data-testid="button"
          onClick={() => setShowCounter(true)}
        >
          Count Checked
        </button>
        {showCounter && <p className="text-center">{counter}</p>}
      </div>
    </div>
  );
}

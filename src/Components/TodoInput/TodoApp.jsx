import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import "./TodoApp.scss";
import TodoList from "../TodoList/TodoList";

export default function TodoApp() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [mdate, setMDate] = useState("");

  return (
    <div className="Main">
      <div className="TodoApp">
        <div className="heading">
          <h2>TODO APPLICATION</h2>
        </div>
        <div className="inputComponent">
          <input
            type="text"
            placeholder="Type your title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputComponent">
          <input
            type="text"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="inputComponent">
          <input
            type="date"
            placeholder="Date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="inputComponent">
          <input
            type="date"
            placeholder="Modified"
            onChange={(e) => setMDate(e.target.value)}
          />
        </div>

        <div className="buttonComponent">
          <button>Add</button>
        </div>
      </div>
      <TodoList/>
    </div>
  );
}

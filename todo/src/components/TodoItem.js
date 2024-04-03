import React, { useState } from "react";
//Add API, we ll need it later when we send a delete request
const API_BASE = "http://localhost:4001/todo";

function TodoItem(props) {
  // Pass down props
  // Modify hardcoding content to dynamic content
  // Now it displays the data we created in advance
  const { name, id, setItems } = props;
  return (
    <div className="todo">
      <div className="text">{name}</div>
      <div className="delete-todo">
        <span>X</span>
      </div>
    </div>
  );
}

export default TodoItem;

import React from "react";
import { todoRemoved } from "./todosSlice";
import { useDispatch } from "react-redux";

function Todo({ todo }) {
  const dispatch = useDispatch();

  function handleDeleteClick() {
    dispatch(todoRemoved(todo.id))
  }

  return (
    <li>
      <span>{todo.text}</span>
      <button onClick={handleDeleteClick}>DELETE</button>
    </li>
  );
}

export default Todo;


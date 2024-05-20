import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, settodos }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} settodos={settodos} />
      ))}
    </div>
  );
}

export default TodoList;

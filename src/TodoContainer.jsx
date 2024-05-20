import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoContainer({ todos, setTodos }) {
  return (
    <div>
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default TodoContainer;

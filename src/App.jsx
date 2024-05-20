import React, { useState } from "react";
import TodoContainer from "./TodoContainer";

export default function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <h1>투두리스트 타임어택</h1>
      <TodoContainer todos={todos} setTodos={setTodos} />
    </>
  );
}

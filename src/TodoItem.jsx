import React from "react";

function TodoItem({ todo, setTodos }) {
  console.log("toggleTodo clicked", todo.id); // 디버깅 로그 추가
  const toggleTodo = () => {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === todo.id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const deleteTodo = () => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== todo.id));
  };

  return (
    <div>
      <h3 style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
        {todo.title}
      </h3>
      <p>{todo.contents}</p>
      <button onClick={toggleTodo}>{todo.isDone ? "undone" : "done"}</button>
      <button onClick={deleteTodo}>삭제</button>
    </div>
  );
}

export default TodoItem;

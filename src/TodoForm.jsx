import React, { useState } from "react";

function TodoForm({ setTodos }) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const addTodo = () => {
    if (title.trim() && contents.trim()) {
      setTodos((prevTodos) => [
        ...prevTodos,
        {
          id: Date.now(),
          title,
          contents,
          isDone: false,
        },
      ]);
      setTitle("");
      setContents("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Contents"
        value={contents}
        onChange={(e) => setContents(e.target.value)}
      />
      <button onClick={addTodo}>추가!</button>
    </div>
  );
}

export default TodoForm;

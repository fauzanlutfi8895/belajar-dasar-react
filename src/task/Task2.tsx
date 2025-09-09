import React, { useState } from "react";

export default function WithoutImmer() {
  const [todos, setTodos] = useState<string[]>(["Belajar React", "Ngopi"]);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return; // cegah input kosong
    setTodos([...todos, newTodo]);
    setNewTodo(""); // reset input
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Without Immer</h2>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Tambah task..."
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>
            {t} <button onClick={() => removeTodo(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

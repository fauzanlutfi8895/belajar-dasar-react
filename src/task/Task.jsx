import React from "react";
import { useImmer } from "use-immer";

export default function WithImmer() {
  const [state, setState] = useImmer({
    todos: ["Belajar React", "Ngopi"],
    newTodo: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.newTodo.trim()) return;

    setState((draft) => {
      draft.todos.push(state.newTodo);
      draft.newTodo = "";
    });
  };

  const handleChange = (e) => {
    setState((draft) => {
      draft.newTodo = e.target.value;
    });
  };

  const handleRemove = (index) => {
    setState((draft) => {
      draft.todos.splice(index, 1);
    });
  };

  return (
    <div>
      <h2>Todo List (useImmer)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={state.newTodo}
          onChange={handleChange}
          placeholder="Tambah task..."
        />
        <button type="submit">Tambah</button>
      </form>

      <ul>
        {state.todos.map((t, i) => (
          <li key={i}>
            {t} <button onClick={() => handleRemove(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

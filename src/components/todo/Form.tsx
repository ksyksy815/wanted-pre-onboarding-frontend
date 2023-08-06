import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";

const Form = () => {
  const { createTodo } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setNewTodo("");
      return;
    }
    if (!e.target.value || e.target.value === "") return;

    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(newTodo);
    // createTodo(newTodo)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="newTodo"
        value={newTodo}
        data-testid="new-todo-input"
        onChange={handleInputChange}
      />
      <button type="submit" data-testid="new-todo-add-button">
        추가
      </button>
    </form>
  );
};

export default Form;

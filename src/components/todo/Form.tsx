import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import { StyledTodoForm } from "./Todo.style";

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
    <StyledTodoForm onSubmit={handleSubmit}>
      <input
        type="text"
        name="newTodo"
        value={newTodo}
        placeholder="새로운 투두를 작성하세요"
        data-testid="new-todo-input"
        onChange={handleInputChange}
      />
      <button type="submit" data-testid="new-todo-add-button">
        추가
      </button>
    </StyledTodoForm>
  );
};

export default Form;

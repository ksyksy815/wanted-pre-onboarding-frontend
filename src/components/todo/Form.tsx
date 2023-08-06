import React, { useContext, useState } from "react";
import { TodoContext, useTodoContext } from "../../context/TodoContext";
import { StyledTodoForm } from "./Todo.style";

const Form = () => {
  const { createTodo, getList } = useTodoContext();
  const [newTodo, setNewTodo] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setNewTodo("");
      return;
    }

    setNewTodo(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newTodo || newTodo === "") return;

    console.log(newTodo);

    const result = await createTodo(newTodo);

    if (result) {
      await getList();
      setNewTodo("");
    } else {
      alert("투두 작성이 실패했어요");
    }
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

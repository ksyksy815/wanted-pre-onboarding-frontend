import React from "react";
import { TodoForm, TodoList } from ".";
import { StyledContainer } from "./Todo.style";

const Container = () => {
  return (
    <StyledContainer>
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList />
    </StyledContainer>
  );
};

export default Container;

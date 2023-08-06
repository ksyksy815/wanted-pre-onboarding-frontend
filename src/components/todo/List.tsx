import { useContext, useEffect } from "react";
import { TodoContext } from "../../context/TodoContext";
import { TodoItem } from ".";
import { Todo } from "../../types/todo";
import { StyledTodoList } from "./Todo.style";

const List = () => {
  const { todos, getList } = useContext(TodoContext);

  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <StyledTodoList>
      {todos ? (
        todos.map((todoProps: Todo) => {
          return (
            <TodoItem
              {...todoProps}
              key={`${todoProps.id}+${todoProps.userId}`}
            />
          );
        })
      ) : (
        <span>{`입력된 투두가 없어요`}</span>
      )}
    </StyledTodoList>
  );
};

export default List;

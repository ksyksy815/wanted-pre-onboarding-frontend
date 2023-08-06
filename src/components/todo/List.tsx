import { useContext, useEffect } from "react";
import { TodoContext } from "../../context/TodoContext";
import { TodoItem } from ".";
import { Todo } from "../../types/todo";

const List = () => {
  const { todos, getList } = useContext(TodoContext);

  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <ul>
      {todos &&
        todos.map((todoProps: Todo) => {
          return (
            <TodoItem
              {...todoProps}
              key={`${todoProps.id}+${todoProps.userId}`}
            />
          );
        })}
    </ul>
  );
};

export default List;

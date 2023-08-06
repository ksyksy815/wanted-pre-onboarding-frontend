import { useContext, useEffect } from "react";
import { TodoContainer } from "../../components/todo";
import { TodoContext } from "../../context/TodoContext";

const TodoPage = () => {
  const { getList } = useContext(TodoContext);

  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <div>
      <TodoContainer />
    </div>
  );
};

export default TodoPage;

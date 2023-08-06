import { useContext, useEffect } from "react";
import { TodoContainer } from "../../components/todo";
import { TodoContext } from "../../context/TodoContext";
import Page from "../../components/Page";

const TodoPage = () => {
  const { getList } = useContext(TodoContext);

  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <Page>
      <TodoContainer />
    </Page>
  );
};

export default TodoPage;

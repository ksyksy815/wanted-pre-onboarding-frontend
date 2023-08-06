import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TodoContainer } from "../../components/todo";
import { TodoProvider, TodoContext } from "../../context/TodoContext";
import Page from "../../components/Page";

const TodoPage = () => {
  const { getList } = useContext(TodoContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/signin");
    } else {
      getList();
    }
  }, []);

  return (
    <Page>
      <TodoProvider>
        <TodoContainer />
      </TodoProvider>
    </Page>
  );
};

export default TodoPage;

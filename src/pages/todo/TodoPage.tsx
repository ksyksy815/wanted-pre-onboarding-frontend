import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TodoContainer } from "../../components/todo";
import { TodoProvider } from "../../context/TodoContext";
import Page from "../../components/Page";

const TodoPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("access_token")) navigate("/signin");
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

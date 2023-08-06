import { useContext, createContext, useState, ReactNode } from "react";
import { Todo } from "../types/todo";
import { getTodoList } from "../api/api";

type TodoContextType = {
  todos: Todo[];
  getList: () => Promise<void>;
  createTodo: (todo: string) => Promise<void>;
  editTodo: (id: number, todo: string, isCompleted: boolean) => Promise<void>;
  deleteTodo: (id: number) => Promise<void>;
};

const TodoContext = createContext<TodoContextType>({
  todos: [
    { id: 555, todo: "메롱", isCompleted: false, userId: 233 },
    { id: 5355, todo: "메asdfasd롱", isCompleted: false, userId: 2323 },
  ],
  getList: async () => {},
  createTodo: async () => {},
  editTodo: async () => {},
  deleteTodo: async () => {},
});

export const useTodoContext = () => {
  return useContext(TodoContext);
};

const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getList = async () => {
    const list = await getTodoList();
    setTodos(list);
  };
  const createTodo = async () => {};

  const editTodo = async () => {};

  const deleteTodo = async () => {};

  return (
    <TodoContext.Provider
      value={{ todos, getList, createTodo, editTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };

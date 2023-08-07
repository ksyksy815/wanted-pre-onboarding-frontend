import {
  useEffect,
  useContext,
  createContext,
  useState,
  ReactNode,
} from "react";
import { Todo } from "../types/todo";
import { getTodoList } from "../api/api";
import {
  createTodo as makeNewTodo,
  editTodo as updateTodo,
  deleteTodo as deleteTodoWithId,
} from "../api/api";

type TodoContextType = {
  todos: Todo[];
  getList: () => Promise<void>;
  createTodo: (todo: string) => Promise<any>;
  editTodo: (id: number, todo: string, isCompleted: boolean) => Promise<any>;
  deleteTodo: (id: number) => Promise<any>;
};

const TodoContext = createContext<TodoContextType>({
  todos: [],
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

  useEffect(() => {
    if (localStorage.getItem("access_token")) getList();
  }, []);

  const createTodo = async (todo: string) => {
    return await makeNewTodo(todo);
  };

  const editTodo = async (id: number, todo: string, isCompleted: boolean) => {
    return await updateTodo(id, { todo, isCompleted });
  };

  const deleteTodo = async (id: number) => {
    return await deleteTodoWithId(id);
  };

  return (
    <TodoContext.Provider
      value={{ todos, getList, createTodo, editTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };

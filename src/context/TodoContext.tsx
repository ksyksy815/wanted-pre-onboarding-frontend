import { useContext, createContext, useState, ReactNode } from "react";
import { Todo } from "../types/todo";
import { getTodoList } from "../api/api";
import { createTodo as makeNewTodo } from "../api/api";

type TodoContextType = {
  todos: Todo[];
  getList: () => Promise<any>;
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

  const createTodo = async (todo: string) => {
    console.log("왜안오니");
    return await makeNewTodo(todo);
  };

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

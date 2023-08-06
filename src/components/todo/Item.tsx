import { useContext, useState } from "react";
import { Todo } from "../../types/todo";
import { ItemButtonSet } from "./";
import { TodoContext } from "../../context/TodoContext";

type TodoItemProps = Todo;

const Item = ({ id, todo, isCompleted, userId }: TodoItemProps) => {
  const [mode, setMode] = useState<"view" | "edit">("view");
  const { editTodo } = useContext(TodoContext);

  const handleChecking = () => {
    editTodo(id, todo, isCompleted);
  };

  return (
    <li className="todo_item">
      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleChecking}
        />
        {mode === "view" ? (
          <span>{todo}</span>
        ) : (
          <input type="text" defaultValue={todo} />
        )}
      </label>
      <ItemButtonSet mode={mode} setMode={setMode} />
    </li>
  );
};

export default Item;

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
    <div>
      <li>
        <label>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={handleChecking}
          />
          {mode === "view" ? (
            <span>{todo}</span>
          ) : (
            <input type="text">{todo}</input>
          )}
        </label>
        <ItemButtonSet mode={mode} setMode={setMode} />
      </li>
    </div>
  );
};

export default Item;

import { useContext, useState } from "react";
import { Todo } from "../../types/todo";
import { ItemButtonSet } from "./";
import { TodoContext } from "../../context/TodoContext";

type TodoItemProps = Todo;

const Item = ({ id, todo, isCompleted, userId }: TodoItemProps) => {
  const { todos, editTodo, getList } = useContext(TodoContext);
  const [mode, setMode] = useState<"view" | "edit">("view");

  const [editModeTodo, setEditModeTodo] = useState<string>(todo);
  const [editModeIsCompleted, setEditModeIsCompleted] =
    useState<boolean>(isCompleted);

  const handleChecking = async () => {
    const result = await editTodo(id, todo, !isCompleted);

    if (result) {
      await getList();
    } else {
      alert("에러가 발생했어요");
    }
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

import { useContext, useState } from "react";
import { Todo } from "../../types/todo";
import { ItemButtonSet } from "./";
import { TodoContext } from "../../context/TodoContext";

type TodoItemProps = Todo;

const Item = ({ id, todo, isCompleted, userId }: TodoItemProps) => {
  const {
    editTodo,
    getList,
    deleteTodo: deleteSelectedTodo,
  } = useContext(TodoContext);
  const [mode, setMode] = useState<"view" | "edit">("view");

  const [editModeTodo, setEditModeTodo] = useState<string>(todo);

  const handleChecking = async () => {
    const result = await editTodo(id, todo, !isCompleted);

    if (result) {
      await getList();
    } else {
      alert("에러가 발생했어요");
    }
  };

  const updateTodoString = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditModeTodo(e.target.value);
  };

  const changeToEditMode = () => setMode("edit");

  const deleteTodo = async () => {
    const result = await deleteSelectedTodo(id);

    if (result) await getList();
    else alert("에러가 발생했어요");
  };

  const submitEditedTodo = async () => {
    if (todo === editModeTodo) {
      setMode("view");
      return;
    }

    const result = await editTodo(id, editModeTodo, isCompleted);

    if (result) {
      setMode("view");
      await getList();
    } else {
      alert("투두가 수정되지 않았어요");
    }
  };

  const cancelEditingTodo = () => {
    setMode("view");
    setEditModeTodo(todo);
  };

  const firstBtn = {
    viewModeText: "수정",
    editModeText: "제출",
    viewModeId: "modify-button",
    editModeId: "submit-button",
    viewModeCallback: changeToEditMode,
    editModeCallback: submitEditedTodo,
  };

  const secondBtn = {
    viewModeText: "삭제",
    editModeText: "취소",
    viewModeId: "delete-button",
    editModeId: "cancel-button",
    viewModeCallback: deleteTodo,
    editModeCallback: cancelEditingTodo,
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
          <input type="text" defaultValue={todo} onChange={updateTodoString} />
        )}
      </label>
      <ItemButtonSet mode={mode} firstBtn={firstBtn} secondBtn={secondBtn} />
    </li>
  );
};

export default Item;

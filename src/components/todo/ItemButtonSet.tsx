import { Dispatch, SetStateAction } from "react";

type ItemButtonSetProps = {
  mode: "view" | "edit";
  firstBtn: ButtonConfig;
  secondBtn: ButtonConfig;
};

type ButtonConfig = {
  viewModeText: string;
  editModeText: string;
  viewModeId: string;
  editModeId: string;
  viewModeCallback: () => void | Promise<void>;
  editModeCallback: () => void | Promise<void>;
};

const ItemButtonSet = ({ mode, firstBtn, secondBtn }: ItemButtonSetProps) => {
  const onClickFstBtn = () => {
    const {
      viewModeCallback: changeToEditMode,
      editModeCallback: submitEditedTodo,
    } = firstBtn;

    if (mode === "view") changeToEditMode();
    else submitEditedTodo();
  };

  const onClickSndBtn = () => {
    const {
      viewModeCallback: deleteTodo,
      editModeCallback: cancelEditingTodo,
    } = secondBtn;

    if (mode === "view") deleteTodo();
    else cancelEditingTodo();
  };

  return (
    <>
      <div>
        <button
          type="button"
          data-testid={
            mode === "view" ? firstBtn.viewModeId : firstBtn.editModeId
          }
          onClick={onClickFstBtn}>
          {mode === "view" ? firstBtn.viewModeText : firstBtn.editModeText}
        </button>
        <button
          type="button"
          data-testid={
            mode === "view" ? secondBtn.viewModeId : secondBtn.editModeId
          }
          onClick={onClickSndBtn}>
          {mode === "view" ? secondBtn.viewModeText : secondBtn.editModeText}
        </button>
      </div>
    </>
  );
};

export default ItemButtonSet;

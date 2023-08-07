import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineCheck,
  AiOutlineClose,
} from "react-icons/ai";
import { StyledButtonSet, StyledButton } from "./Todo.style";

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
      <StyledButtonSet>
        <StyledButton
          type="button"
          data-testid={
            mode === "view" ? firstBtn.viewModeId : firstBtn.editModeId
          }
          onClick={onClickFstBtn}>
          {mode === "view" ? <AiOutlineEdit /> : <AiOutlineCheck />}
        </StyledButton>
        <StyledButton
          type="button"
          data-testid={
            mode === "view" ? secondBtn.viewModeId : secondBtn.editModeId
          }
          onClick={onClickSndBtn}>
          {mode === "view" ? <AiOutlineDelete /> : <AiOutlineClose />}
        </StyledButton>
      </StyledButtonSet>
    </>
  );
};

export default ItemButtonSet;

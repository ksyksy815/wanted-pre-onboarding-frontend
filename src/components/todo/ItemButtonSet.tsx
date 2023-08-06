import { Dispatch, SetStateAction } from "react";

type ItemButtonSetProps = {
  mode: "view" | "edit";
  setMode: Dispatch<SetStateAction<"view" | "edit">>;
};

const ItemButtonSet = ({ mode, setMode }: ItemButtonSetProps) => {
  const firstBtnText = mode === "view" ? "수정" : "제출";
  const firstBtnId = mode === "view" ? "modify-input" : "submit-button";
  const secondBtnText = mode === "view" ? "삭제" : "취소";
  const secondBtnId = mode === "view" ? "delete-button" : "cancel-button";

  const handleEdit = () => {
    if (mode === "view") {
      console.log("수정 버튼 누름");
    } else {
      console.log("제출 버튼 누름");
    }

    setMode((prev) => (prev === "view" ? "edit" : "view"));
  };

  const handleDelete = () => {
    if (mode === "view") {
      console.log("delete button");
    } else {
      console.log("cancel button");
    }
  };

  return (
    <>
      <div>
        <button type="button" data-testid={firstBtnId} onClick={handleEdit}>
          {firstBtnText}
        </button>
        <button type="button" data-testid={secondBtnId} onClick={handleDelete}>
          {secondBtnText}
        </button>
      </div>
    </>
  );
};

export default ItemButtonSet;

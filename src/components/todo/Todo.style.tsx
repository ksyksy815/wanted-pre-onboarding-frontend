import styled from "@emotion/styled";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  padding: 2rem;
  min-width: 300px;
  background-color: #24243d;
  border-radius: 15px;
`;

export const StyledTodoForm = styled.form`
  display: flex;
  flex-direction: row;
  column-gap: 3px;
  margin-bottom: 10px;

  input {
    flex: 1 1 auto;
    background: none;
    color: #fff;
    border: none;
    border-bottom: 1px solid #43416f;

    ::placeholder {
      color: #fff;
    }
  }
`;

export const StyledTodoList = styled.ul`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  .todo_item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 3px;
    font-size: 0.8rem;

    label {
      flex: 1 1 auto;
      display: flex;
      flex-direction: row;
      column-gap: 5px;

      &:hover {
        font-weight: bold;
      }

      input[type="checkbox"] {
        cursor: pointer;
      }

      input[type="text"] {
        flex: 1 1 auto;
      }

      span {
        align-self: center;
        cursor: pointer;
      }
    }
  }

  .emptyList {
    display: grid;
    place-content: center;
    font-size: 0.8rem;
    padding: 2rem;
  }
`;

export const StyledButton = styled.button`
  width: 30px;
  height: 30px;
  display: grid;
  place-content: center;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  color: #24243d;
  cursor: pointer;

  &:hover {
    background-color: #ff1493;
    color: #fff;
  }
`;

export const StyledButtonSet = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 2px;
`;

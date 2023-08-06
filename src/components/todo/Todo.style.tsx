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

    label {
      flex: 1 1 auto;
      display: flex;
      flex-direction: row;
      column-gap: 5px;

      input[type="text"] {
        flex: 1 1 auto;
      }

      span {
        align-self: center;
      }
    }
  }
`;

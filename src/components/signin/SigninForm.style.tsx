import styled from "@emotion/styled";

export const StyledForm = styled.form`
  width: 300px;
  padding: 2rem;
  align-self: center;
  background-color: #24243d;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  .formRow {
    display: flex;
    flex-direction: column;
    row-gap: 5px;

    .label_input {
      display: flex;
      flex-direction: column;
      background-color: #44445a;
      padding: 10px;
      border-radius: 5px;

      label {
        font-size: 0.8rem;
      }

      input {
        background: none;
        border: none;
        color: #fff;
      }
    }

    .invalid_message {
      padding-left: 10px;
      font-size: 0.8rem;
      color: salmon;
    }
  }
`;

export const StyledFormButton = styled.button`
  min-width: 120px;
  height: 45px;
  align-self: center;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  color: #43416f;

  &:hover {
    background-color: #ff1493;
    color: #fff;
  }
`;

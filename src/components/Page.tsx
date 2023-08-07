import styled from "@emotion/styled";

const Page = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #43416f;
  color: #fff;

  .white_text_link {
    align-self: center;
    margin-top: 10px;
    font-size: 0.8rem;
    cursor: pointer;

    &:hover {
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;

export default Page;

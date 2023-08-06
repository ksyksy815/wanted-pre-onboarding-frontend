import { Global, css } from "@emotion/react";

const globalStyles = css`
  body {
    margin: 0;
    border: 0;
    box-sizing: border-box;

    ul {
      padding: 0;
    }

    li {
      list-style: none;
    }

    input:focus {
      outline: none;
    }
  }
`;

const GlobalStyles = () => <Global styles={globalStyles} />;

export default GlobalStyles;

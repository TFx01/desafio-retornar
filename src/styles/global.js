import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 10px;
    --main-font: 'Raleway', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #6031d6;
    font-family: var(--main-font);
  }
`;

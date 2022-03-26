import { createGlobalStyle } from "styled-components";

import theme from "./theme";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: ${theme.fonts[0]}, sans-serif;
    font-weight: 500;
    scroll-behavior: smooth;
  }
  body {
    background-color: #111A20;
    color: #fff;
  }
  #root{
    max-width: 100vw;
    overflow: hidden;
  }
`;

export default GlobalStyles;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body, html, ul, h1, h2, h3, p, span, button {
  margin: 0;
  padding: 0;
}
div, header, footer {
  box-sizing: border-box;
}
h1, h2, h3, p, span, input, button {
  font-family: "Lato", sans-serif
}
`;

export default GlobalStyle;

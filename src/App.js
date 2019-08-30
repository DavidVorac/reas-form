import React from "react";
import FormPropertyLocation from "./FormPropertyLocation";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    min-height: 100vh;
    justify-content: center;
    font-family: sans-serif;
    scroll-behavior: smooth;
  }
`;

const Root = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const App = () => {
  return (
    <Root>
      <GlobalStyle />
      <FormPropertyLocation />
    </Root>
  );
};

export default App;

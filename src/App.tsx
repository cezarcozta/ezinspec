import React from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../src/styles/Theme";
import AppProvider from "./contexts/index";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={defaultTheme}>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;

import React from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../src/styles/Theme";
import AppProvider from "./contexts/index";
import Routes from "./routes";

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={defaultTheme}>
        <Routes />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;

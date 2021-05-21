import React from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../src/styles/Theme";
import AppProvider from "./contexts/index";
import Routes from "./routes";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;

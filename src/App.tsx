import { Connector } from "mqtt-react-hooks";
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
        <Connector
          options={{
            port: 38871,
            hostname: "driver.cloudmqtt.com",
            username: "ftbcblmv",
            password: "KAo4Zn70NpYM",
            queueQoSZero: true,
            protocol: "wss",
            keepalive: 0,
            path: "/mqtt",
          }}
        >
          <Routes />
          <GlobalStyle />
        </Connector>
        <GlobalStyle />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;

import { Connector } from "mqtt-react-hooks";
import React from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../src/styles/Theme";
import AppProvider from "./contexts/index";
import Routes from "./routes";

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={defaultTheme}>
        <Connector
          options={{
            // port: 18871,
            // host: "driver-01.cloudmqtt.com",
            // username: "ftbcblmv",
            // password: "KAo4Zn70NpYM",
            // queueQoSZero: true,
            // protocol: "ws",
            keepalive: 0,
            clientId: "front",
          }}
          brokerUrl="ws://ftbcblmv:KAo4Zn70NpYM@driver-01.cloudmqtt.com"
        >
          <Routes />
        </Connector>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;

import { useEffect } from "react";
import { io } from "socket.io-client";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../src/styles/Theme";
import AppProvider from "./contexts/index";
import Routes from "./routes";

function App() {
  useEffect(() => {
    try {
      const socket = io("http//:localhost:5000", { transports: ["websocket"] });
      console.log(socket);
      socket.io.on("reconnect_attempt", () => {
        console.log("aqui");
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <AppProvider>
      <ThemeProvider theme={defaultTheme}>
        <Routes />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;

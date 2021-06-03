import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../src/styles/Theme";
import AppProvider from "./contexts/index";
import Routes from "./routes";
import { io } from "socket.io-client";



function App() {

  useEffect(() => {
    const socket = io("http//:localhost:3001", { transports: ["websocket"] });
    socket.io.on("reconnect_attempt", () => {
      console.log('aqui');
    });
  }, [])


  return (
    <AppProvider>
      <ThemeProvider theme={defaultTheme}>
        <Routes />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;

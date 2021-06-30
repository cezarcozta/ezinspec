import { Connector } from "mqtt-react-hooks";
import React from "react";
import { AuthProvider } from "./Auth";
import { LoaderProvider } from "./Loader";
import { MachinesProvider } from "./Machines";
import { ToastProvider } from "./Toast";
import { UserProvider } from "./User";

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <UserProvider>
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
        <MachinesProvider>
          <LoaderProvider>
            <ToastProvider>{children}</ToastProvider>
          </LoaderProvider>
        </MachinesProvider>
      </Connector>
    </UserProvider>
  </AuthProvider>
);

export default AppProvider;

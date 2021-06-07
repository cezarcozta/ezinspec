import React from "react";
import { AuthProvider } from "./Auth";
import { LoaderProvider } from "./Loader";
import { MachinesProvider } from "./Machines";
import { ToastProvider } from "./Toast";
import { UserProvider } from "./User";

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <UserProvider>
      <MachinesProvider>
        <LoaderProvider>
          <ToastProvider>{children}</ToastProvider>
        </LoaderProvider>
      </MachinesProvider>
    </UserProvider>
  </AuthProvider>
);

export default AppProvider;

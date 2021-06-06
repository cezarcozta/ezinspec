import React from "react";
import { AuthProvider } from "./Auth";
import { LoaderProvider } from "./Loader";
import { MachinesProvider } from "./Machines";
import { ToastProvider } from "./Toast";

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <MachinesProvider>
      <LoaderProvider>
        <ToastProvider>{children}</ToastProvider>
      </LoaderProvider>
    </MachinesProvider>
  </AuthProvider>
);

export default AppProvider;

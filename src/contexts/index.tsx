import React from "react";
import { AuthProvider } from "./Auth";
import { LoaderProvider } from "./Loader";
import { MachinesProvider } from "./Machines";
import { ToastProvider } from "./Toast";

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <LoaderProvider>
      <MachinesProvider>
        <ToastProvider>{children}</ToastProvider>
      </MachinesProvider>
    </LoaderProvider>
  </AuthProvider>
);

export default AppProvider;

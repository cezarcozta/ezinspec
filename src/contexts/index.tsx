import React from "react";
import { AuthProvider } from "./Auth";
import { LoaderProvider } from "./Loader";
import { ToastProvider } from "./Toast";

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <LoaderProvider>
      <ToastProvider>{children}</ToastProvider>
    </LoaderProvider>
  </AuthProvider>
);

export default AppProvider;

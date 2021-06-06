import React from "react";
import { AuthProvider } from "./Auth";
import { LoaderProvider } from "./Loader";
import { ToastProvider } from "./Toast";
import { UserProvider } from "./User";

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <UserProvider>
      <LoaderProvider>
        <ToastProvider>{children}</ToastProvider>
      </LoaderProvider>
    </UserProvider>
  </AuthProvider>
);

export default AppProvider;

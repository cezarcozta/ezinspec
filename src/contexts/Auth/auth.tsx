import React, { createContext, useCallback, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../services/api";

interface User {
  name: string;
  cod: number;
  email: string;
}

interface AuthState {
  access_token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<boolean>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const { push } = useHistory();

  const [data, setData] = useState<AuthState>(() => {
    const access_token = localStorage.getItem("@ezinspec:token");
    const user = localStorage.getItem("@ezinspec:user");

    if (access_token && user) {
      return { access_token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = async ({
    email,
    password,
  }: SignInCredentials): Promise<boolean> => {
    try {
      const { data } = await api.post("/login", {
        email,
        password,
      });

      if (!data) {
        alert("Falhou");
        return false;
      }

      localStorage.setItem("@ezinspec:user", JSON.stringify(data.user));

      localStorage.setItem("@ezinspec:token", JSON.stringify(data.token));

      setData({ access_token: data.token, user: data.user });

      return true;
    } catch (error) {
      alert(error.message);
      console.log(error.message);
      return false;
    }
  };

  const signOut = useCallback(() => {
    try {
      localStorage.removeItem("@ezinspec:token_portal");
      localStorage.removeItem("@ezinspec:user");
      setData({} as AuthState);
      push("/");
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  }, [push]);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };

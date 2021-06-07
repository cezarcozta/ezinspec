import React, { createContext, useCallback, useContext, useState } from "react";
import { api } from "../../services/api";

interface AuthState {
  jwt_access: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  jwt_access: string;
  signIn(credentials: SignInCredentials): Promise<boolean>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const jwt_access = localStorage.getItem("@ezinspec:jwt_access");

    if (jwt_access) {
      api.defaults.headers.authorization = `Bearer ${jwt_access}`;
      return { jwt_access };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(
    async ({ email, password }: SignInCredentials): Promise<boolean> => {
      try {
        const { data } = await api.post("/login", {
          email,
          password,
        });

        if (!data) {
          alert("Falhou");
          return false;
        }

        localStorage.setItem(
          "@ezinspec:jwt_access",
          data.jwt_access
        );

        setData({ jwt_access: data.jwt_access });
        api.defaults.headers.authorization = `Bearer ${data.jwt_access}`;
        return true;
      } catch (error) {
        alert(error.message);
        console.log(error.message);
        return false;
      }
    },
    []
  );

  const signOut = useCallback(() => {
    try {
      localStorage.removeItem("@ezinspec:jwt_access");
      setData({} as AuthState);
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ jwt_access: data.jwt_access, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };

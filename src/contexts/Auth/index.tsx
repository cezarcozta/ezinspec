import React, { createContext, useCallback, useContext, useState } from "react";
import { api } from "../../services/api";

interface IUser {
  level_subscriber: string;
  state: string;
  type: string;
  _id: string;
  name: string;
  email: string;
  type_business: string;
  city: string;
  province: string;
  phone: number;
  createdAt: Date;
  updatedAt: Date;
}

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
        api.defaults.headers.authorization = `Bearer ${data.jwt_access}`;

        localStorage.setItem("@ezinspec:jwt_access", data.jwt_access);

        setData({ jwt_access: data.jwt_access });

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

  // const getUserProfile = useCallback(async () => {
  //   try {
  //     const { data } = await api.get<IUser>("/users/profile");
  //     if (!data) {
  //       return {} as IUser;
  //     }
  //     console.log({ user: data });
  //     const userData = data as IUser;
  //     return userData;
  //   } catch (error) {
  //     const axiosError = error as AxiosError;
  //     console.log(axiosError);
  //     return {} as IUser;
  //   }
  // }, []);

  return (
    <AuthContext.Provider
      value={{
        jwt_access: data.jwt_access,
        signIn,
        signOut,
      }}
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

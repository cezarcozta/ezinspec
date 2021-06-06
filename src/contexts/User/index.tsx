import { AxiosError } from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
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
}

interface UserContextData {
  user: IUser;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser>({} as IUser);

  useEffect(() => {
    async function loadUser() {
      try {
        const { data } = await api.get("/users/profile");
        setUser(data);
      } catch (error) {
        const axiosError = error as AxiosError;
        console.log({
          error: axiosError,
        });
      }
    }

    loadUser();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

function useUser(): UserContextData {
  const context = useContext(UserContext);

  return context;
}

export { UserProvider, useUser };

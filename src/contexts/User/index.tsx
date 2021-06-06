import { AxiosError } from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { IUserProfile } from "../../dtos/User";
import { api } from "../../services/api";

interface UserContextData {
  user: IUserProfile;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUserProfile>({} as IUserProfile);

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

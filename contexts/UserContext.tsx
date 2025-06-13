import { createContext, useState } from "react";
import { Props } from "../types/Props.type";
import { account } from "../lib/appwrite";
import { ID, Models } from "react-native-appwrite";

type TypeUserContext = {
  user: Models.Preferences | undefined;
  login: (email: string, password: string) => {};
  register: (email: string, password: string) => {};
  logout: () => {};
};

export const userContext = createContext<TypeUserContext | undefined>(
  undefined
);

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<Models.User<Models.Preferences> | undefined>(
    undefined
  );

  async function login(email: string, password: string) {
    try {
      await account.createEmailPasswordSession(email, password);
      const response = await account.get();
      setUser(response);
      console.log(response);
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  async function register(email: string, password: string) {
    try {
      await account.create(ID.unique(), email, password);
      await login(email, password);
    } catch (error) {
      console.log((error as Error).message);
    }
  }
  async function logout() {
    await account.deleteSession("current");
    setUser(undefined);
  }

  return (
    <userContext.Provider value={{ user, login, logout, register }}>
      {children}
    </userContext.Provider>
  );
};

import { createContext, useState, useEffect, ReactNode } from "react";
import api from "../api";

interface TData {
  access_token: string;
  name: string;
}

interface TSignInCredentials {
  email: string;
  password: string;
}

interface TCreateAccount extends TSignInCredentials {
  name: string;
}

interface TAuthContextData {
  signIn(credentials: TSignInCredentials): Promise<void>;
  signOut(): void;
  createAccount(credentials: TCreateAccount): Promise<void>;
  data: TData | undefined;
}

interface TAuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as TAuthContextData);

export const TOKEN_KEY = "Token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export function AuthContextProvider(props: TAuthContextProviderProps) {
  const [data, setData] = useState<TData>();


  async function signIn({ email, password }: TSignInCredentials) {
    try {
      const response = await api.post("users/login", {
        email: email,
        password: password,
      });

      setData({
        name: response.data.user.name,
        access_token: response.data.access_token,
      });

      localStorage.setItem(TOKEN_KEY, response.data.access_token);
    } catch (error) {
      console.error(error.message);
    }
  }

  function signOut() {
      setData(undefined);
      localStorage.removeItem(TOKEN_KEY);
  }

  async function createAccount({ name, email, password }: TCreateAccount) {
    try {
      const response = await api.post("users", {
        name: name,
        email: email,
        password: password,
      });

      setData({
        name: response.data.user.name,
        access_token: response.data.access_token,
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, createAccount, data }}>
      {props.children}
    </AuthContext.Provider>
  );
}

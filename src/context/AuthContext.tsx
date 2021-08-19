import { createContext, useState, useEffect, ReactNode } from 'react';
import {api} from "../api";

type TData = {
  access_token: string;
  name: string;
}

type TSignInCredentials = {
  email: string;
  password: string;
};

type TAuthContextData = {
  signIn( credentials: TSignInCredentials): Promise<void>;
};

type TAuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as TAuthContextData);

export function AuthContextProvider(props: TAuthContextProviderProps){
  const [data, setData] = useStete<TData>()
  async function signIn({ email, password }: TSignInCredentials) {
    try {
      const response = await api.post('users/login', {
        email: email,
        password: password,
      })

      console.log(response)
      
      
    } catch (error) {
        console.error(error.message);
    }
    
  }

  return (
    <AuthContext.Provider value={{ signIn }}>
      {props.children}
    </AuthContext.Provider>
  )
}
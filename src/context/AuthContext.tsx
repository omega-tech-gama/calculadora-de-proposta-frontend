import { createContext, useState, useEffect, ReactNode } from 'react';
import {api} from "../api";

type TSignInCredentials = {
  email: string;
  password: string;
};

type TAuthContextData = {
  signIn( credentials: TSignInCredentials): Promise<void>;
  access_token: string;
  name: string;
};

type TAuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as TAuthContextData);

export function AuthContextProvider(props: TAuthContextProviderProps){
  const access_token = '1'; 
  const name = '2';

  async function signIn({ email, password }: TSignInCredentials) {
    try {
      const config =  {
        data: {
          email: email,
          password: password,
        },
      }

      console.log(email, password)

      const response = await api.post('login', config)

      
      
    } catch (error) {
        console.error(error.message);
    }
    
  }

  return (
    <AuthContext.Provider value={{ signIn, access_token, name }}>
      {props.children}
    </AuthContext.Provider>
  )
}
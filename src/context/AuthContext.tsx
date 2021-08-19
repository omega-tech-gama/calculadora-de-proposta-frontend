import { createContext, useState, useEffect, ReactNode } from 'react'
import { api } from '../api'

type TData = {
  access_token: string;
  name: string;
};

type TSignInCredentials = {
  email: string
  password: string
}

type TAuthContextData = {
  signIn(credentials: TSignInCredentials): Promise<void>
  data: TData | undefined
}

type TAuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as TAuthContextData)

export function AuthContextProvider(props: TAuthContextProviderProps) {
  const [data, setData] = useState<TData>()

<<<<<<< HEAD
export function AuthContextProvider(props: TAuthContextProviderProps){
  const [data, setData] = useState<TData>()
=======
>>>>>>> 37102974d6a51d877dca1001a12cb3451f05e6d3
  async function signIn({ email, password }: TSignInCredentials) {
    try {
      const response = await api.post('users/login', {
        email: email,
        password: password,
      })

      setData({
        name: response.data.user.name,
        access_token: response.data.access_token,
      })
<<<<<<< HEAD

      
    } catch (error) {
      console.error(error.message);
    } 
=======
      console.log(response)
    } catch (error) {
      console.error(error.message)
    }
  }
>>>>>>> 37102974d6a51d877dca1001a12cb3451f05e6d3

    console.log(data);
  }
  
  return (
    <AuthContext.Provider value={{ signIn, data }}>
      {props.children}
    </AuthContext.Provider>
  )
<<<<<<< HEAD
};
=======
}
>>>>>>> 37102974d6a51d877dca1001a12cb3451f05e6d3

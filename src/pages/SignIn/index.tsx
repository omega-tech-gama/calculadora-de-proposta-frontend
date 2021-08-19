import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from '../../components/Form/Input'
import { SideLeft } from '../../components/SideLeft'
import { useHistory } from 'react-router-dom'

interface ILoginProps {
  email: string
  password: string
}

const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .required(`Email necessita ser informado!`)
    .email(`Oh guri isso não é um email!`),
  password: yup
    .string()
    .min(8, `Senha de 8 caracteres ou mais!`)
    .required(`Senha não informada!`),
})

export const SignIn = () => {
  const { signIn, data } = useContext(AuthContext)
  const history = useHistory()

  const { register, handleSubmit, formState } = useForm<ILoginProps>({
    resolver: yupResolver(loginFormSchema),
  })

  const { errors } = formState

  const handleLogin: SubmitHandler<ILoginProps> = async (
    userData: ILoginProps,
  ) => {
    await signIn(userData)
  }

  if (!!data?.access_token) {
    history.push('/simple')
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto">
        <SideLeft />
        <div className="flex flex-col mx-auto items-center justify-center w-1/2">
          <h1 className=" py-10 text-base sm:text-2xl lg:text-3xl font-semibold text-color-letter">
            Acesse sua conta
          </h1>
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="space-y-4 w-full"
          >
            <Input
              className={errors.email ? 'input err' : 'input'}
              type="email"
              label="E-mail"
              placeholder="jane@doe.com"
              {...register('email')}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <Input
              className={errors.password ? 'input err' : 'input'}
              type="password"
              label="Senha"
              placeholder="1234"
              {...register('password')}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}!</p>
            )}
            <button type="submit" className="btn btn-blue">
              Entrar
            </button>
          </form>
          <a href="/create" className="links font-basic text-blue-omega pt-8">
            Criar uma conta
          </a>
        </div>
      </div>
    </>
  )
}

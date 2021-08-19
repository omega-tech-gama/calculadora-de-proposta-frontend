import {useContext} from 'react';
import { AuthContext } from '../../context/AuthContext';

import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../../components/Form/Input";
import { SideLeft } from "../../components/SideLeft";

interface ILoginProps {
  email: 'teste@teste.com';
  senha: '12345678';
}

const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .required(`Email necessita ser informado!`)
    .email(`Oh guri isso não é um email!`),
  senha: yup
    .string()
    .min(8, `Senha de 8 caracteres ou mais!`)
    .required(`Senha não informada!`),
});

const data = {
  email: 'oioio@gmi.com',
  password: '1234dsfsfssf9'
}

export const SignIn = () => {
  const {signIn} = useContext(AuthContext)
  
  const { register, handleSubmit, formState } = useForm<ILoginProps>({
    resolver: yupResolver(loginFormSchema),
  });

  const { errors } = formState;

  const handleLogin: SubmitHandler<ILoginProps> = async (dados) => {
    const a = await signIn(data)
    await console.log(a);
  };
  console.log(errors);

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
              className={errors.email ? "input err" : "input"}
              type="email"
              label="E-mail"
              placeholder="jane@doe.com"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <Input
              className={errors.senha ? "input err" : "input"}
              type="password"
              label="Senha"
              placeholder="1234"
              {...register("senha")}
            />
            {errors.senha && (
              <p className="text-red-500">{errors.senha.message}!</p>
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
  );
};

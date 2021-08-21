import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../../components/Input";
import { SideLeft } from "../../components/SideLeft";
import { Link, useHistory } from "react-router-dom";

interface ILoginProps {
  email: string;
  password: string;
}

export const SignIn = () => {
  const { signIn, data } = useContext(AuthContext);
  const history = useHistory();

  const Schema = yup.object().shape({
    email: yup
      .string()
      .required(`Insira seu e-mail`)
      .email(`E-mail inválido`),

    password: yup
      .string()
      .min(8, `Mínimo 8 caracteres`)
      .required(`Insira sua senha`),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(Schema),
  });

  const { errors } = formState;

  const handleLogin: SubmitHandler<ILoginProps> = async (values) => {
    signIn(values);
  };

  if (data) {
    history.push("/propostas");
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto">
        <SideLeft />
        <div className="flex flex-col items-center justify-center max-w-2x1 md:bg-white">
          <h1 className="title1 py-6">
            Acesse sua conta
          </h1>
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="w-full max-w-xs"
          >
            <Input
              className={errors.email ? "input err" : "input"}
              type="email"
              labelName="E-mail"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <Input
              className={errors.password ? "input err" : "input"}
              type="password"
              labelName="Senha"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}!</p>
            )}
            <button type="submit" className="btn btn-primary w-full mt-6">
              Entrar
            </button>
          </form>
          <Link to="/signup" className="links font-basic text-blue-omega mt-8">
            Criar uma conta
          </Link>
        </div>
      </div>
    </>
  );
};

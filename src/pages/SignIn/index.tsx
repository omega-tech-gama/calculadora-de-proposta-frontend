import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../../components/Form/Input";
import { SideLeft } from "../../components/SideLeft";
import { useHistory } from "react-router-dom";

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
      .required(`Email necessita ser informado!`)
      .email(`Coloque um email válido.`),

    password: yup
      .string()
      .min(8, `Senha de 8 caracteres ou mais!`)
      .required(`Senha não informada!`),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(Schema),
  });

  const { errors } = formState;

  const handleLogin: SubmitHandler<ILoginProps> = async (values) => {
    console.log(values);
    signIn(values);
  };

  if (!!data) {
    console.log(data);
    history.push("/propostas");
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
              className={errors.password ? "input err" : "input"}
              type="password"
              label="Senha"
              placeholder="1234"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}!</p>
            )}
            <button type="submit" className="btn btn-primary w-full">
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

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../../components/Form/Input";
import { SideLeft } from "../../components/SideLeft";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

interface ICreateUserFormData {
  name: string;
  email: string;
  password: string;
}

export const SignUp = () => {
  const { createAccount, data } = useContext(AuthContext);
  const history = useHistory();

  const Schema = yup.object().shape({
    name: yup
      .string()
      .min(3, `Mínimo 3 caracteres`)
      .required(`Insira seu nome`),

    email: yup
      .string()
      .required(`Insira seu e-mail`)
      .email(`E-mail inválido`),

    password: yup
      .string()
      .min(8, `Mínimo 8 caracteres`)
      .required(`Insira uma senha`),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(Schema),
  });

  const { errors } = formState;

  const handleCreateUserForm: SubmitHandler<ICreateUserFormData> = async (
    values
  ) => {
    createAccount(values);
  };

  if (!!data) {
    history.push("/proposal");
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto">
        <SideLeft />
        <div className="flex flex-col items-center justify-center max-w-2x1 md:bg-white">
          <h1 className="title1 py-4">
            Criar conta
          </h1>
          <form
            onSubmit={handleSubmit(handleCreateUserForm)}
            className="w-full max-w-xs"
          >
            <Input
              className={errors.name ? "input err" : "input"}
              label="Nome"
              type="text"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
            <Input
              className={errors.email ? "input err" : "input"}
              label="E-mail"
              type="email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <Input
              className={errors.password ? "input err" : "input"}
              label="Senha"
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <button type="submit" className="btn btn-primary w-full mt-6">
              Criar conta
            </button>
          </form>
          <Link to="/" className="links font-basic text-blue-omega mt-8">
            Acessar sua conta
          </Link>
        </div>
      </div>
    </>
  );
};

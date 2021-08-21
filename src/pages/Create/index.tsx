import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../../components/Form/Input";
import { SideLeft } from "../../components/SideLeft";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useEffect } from "react";

interface ICreateUserFormData {
  name: string;
  email: string;
  password: string;
}

export const Create = () => {
  const { createAccount, data } = useContext(AuthContext);
  const history = useHistory();

  const Schema = yup.object().shape({
    name: yup
      .string()
      .min(3, `O usuário precisa ter mais de 3 caracteres.`)
      .required(`Necessário que esse campo seja preenchido.`),

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
        <div className="flex flex-col mx-auto items-center justify-center w-1/2">
          <h1 className=" py-10 text-2xl lg:text-3xl font-semibold  text-color-letter">
            Criar conta
          </h1>
          <form
            onSubmit={handleSubmit(handleCreateUserForm)}
            className="space-y-4 w-full"
          >
            <Input
              className={errors.name ? "input err" : "input"}
              labelName="Nome"
              placeholder="Jane Doe"
              type="text"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
            <Input
              className={errors.email ? "input err" : "input"}
              labelName="E-mail"
              placeholder="jane@doe.com"
              type="email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <Input
              className={errors.password ? "input err" : "input"}
              labelName="Senha"
              placeholder="Digite uma senha segura"
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <button type="submit" className="btn btn-primary w-full">
              Criar conta
            </button>
          </form>
          <a href="/" className="links font-basic text-blue-omega py-8">
            Acessar sua conta
          </a>
        </div>
      </div>
    </>
  );
};

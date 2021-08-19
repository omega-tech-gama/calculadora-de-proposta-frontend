import  { Input }  from "../../components/Form/Input";
import { SideLeft } from "../../components/SideLeft";

export const Create = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto">
        <SideLeft />
        <div className="flex flex-col mx-auto items-center justify-center w-1/2">
          <h1 className=" py-10 text-2xl lg:text-3xl font-semibold  text-color-letter">
            Criar conta
          </h1>
          <form action="" className="space-y-4 w-full">
            <Input  label="Nome" placeholder="Jane Doe" type="text" />
            <Input  label="E-mail" placeholder="jane@doe.com" type="email" />
            <Input
              label="Senha"
              placeholder="Digite uma senha segura"
              type="password"
            />
            <button className="btn btn-blue">Criar conta</button>
          </form>
          <a href="/" className="links font-basic text-blue-omega py-8">
            Acessar sua conta
          </a>
        </div>
      </div>
    </>
  );
};

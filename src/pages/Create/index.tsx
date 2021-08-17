import { Input } from "../../components/Form/Input"
import { SideLeft } from "../../components/SideLeft"

export const Create = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto">
        <SideLeft />
        <div className="flex flex-col mx-auto items-center justify-center w-1/2">
          <h1 className=" py-10 text-2xl lg:text-3xl font-semibold  text-color-letter">Criar conta</h1>
          <form action="" className="space-y-4 w-full">
            <Input label="Nome" name="nome" placeholder="Jane Doe" type="text"/>
            <Input label="E-mail" name="email" placeholder="jane@doe.com" type="email"/>
            <Input label="Senha" name="nome" placeholder="Digite uma senha segura" type="text"/>
            
            <button className="btn btn-blue">Criar conta</button>
            <button className="btn font-basic text-blue-omega pb-20">Acessar sua conta</button>
          </form>
        </div>
      </div>
    </>
  )
}
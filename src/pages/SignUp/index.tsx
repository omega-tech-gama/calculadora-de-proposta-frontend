import { Input } from "../../components/Form/Input"
import { SideLeft } from "../../components/SideLeft"


export const SignUp = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto">
        <SideLeft />  
        <div className="flex flex-col mx-auto items-center justify-center w-1/2">
          <h1 className=" py-10 text-base sm:text-2xl lg:text-3xl font-semibold  text-color-letter">Acesse sua conta</h1>
          <form action="" className="space-y-4 w-full">
            <Input type="text" name="email" label="E-mail" placeholder="jane@doe.com"/>
            <Input type="password" name="email" label="Senha" placeholder="1234"/>
            <button className="btn btn-blue">Entrar</button>
            <button className="btn font-basic text-blue-omega">Criar uma conta</button>
          </form>
        </div>
      </div>
    </>
  )
}

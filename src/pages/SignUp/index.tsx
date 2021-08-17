import logoCompleto from '../../assets/logo_completo.svg'
import logoMobile from '../../assets/favicon.svg'

export const SignUp = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto">
        <div className="flex md:min-h-screen md:bg-gray-background">
          <img className="hidden md:flex mx-auto"src={logoCompleto} alt="Logo empresa"/>
          <img src={logoMobile} className="md:hidden mt-10 mx-auto w-16" alt="Logo empresa"  />
        </div>
        <div className="flex flex-col mx-auto items-center justify-center w-1/2">
          <h1 className=" pb-10 text-2xl sm:text-3xl md:text-4xl font-semibold  text-color-letter">Acesse sua conta</h1>
          <form action="" className="space-y-4 w-full">
            <div>
              <label className="block font-bold text-gray-500">E-mail</label>
              <input type="text" className="input" placeholder="janedoe@gmail.com"/>
            </div>
            <div>
              <label className="block font-bold text-gray-500">Senha</label>
              <input type="password" className="input" placeholder="Não me diga que é 1234"/>
            </div>
            <button className="btn btn-blue">Entrar</button>
            <button className="btn font-basic text-blue-omega">Criar uma conta</button>
          </form>
        </div>
      </div>
    </>
  )
}

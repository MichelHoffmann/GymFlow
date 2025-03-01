import gymIcon from "../assets/Barbell.svg";
import googleIcon from "../assets/Google.png";
import facebookIcon from "../assets/Facebook.png";

export default function FormCadastroLogin({ type }) {
  if (type === "cadastro") {
    return (
      <div className="bg-black w-full h-screen">
        <div className="bg-custom-image w-full h-screen">
          <header className="w-full h-screen flex gap-5 flex-col items-center justify-center text-white">
            <div className="flex items-center gap-2">
              <img src={gymIcon} alt="Icone de um halter" />
              <h1 className="font-bold text-3xl">GymFlow</h1>
            </div>
            <h2 className="font-light text-xl opacity-60">Crie a sua conta</h2>
            <form
              className="w-full flex flex-col items-center justify-center gap-3"
              action=""
            >
              <input
                className="w-[302px] h-[48px] bg-gray-02 text-gray-04 pl-5 rounded-sm outline-purple"
                id="nome"
                type="text"
                placeholder="Nome"
              />
              <input
                className="w-[302px] h-[48px] bg-gray-02 text-gray-04 pl-5 rounded-sm outline-purple"
                type="email"
                placeholder="Email"
              />
              <input
                className="w-[302px] h-[48px] bg-gray-02 text-gray-04 pl-5 rounded-sm outline-purple"
                type="password"
                placeholder="Senha"
              />
              <input
                className="w-[302px] h-[48px] bg-gray-02 text-gray-04 pl-5 rounded-sm outline-purple"
                type="password"
                placeholder="Confirme sua senha"
              />
              <button
                className="w-[302px] h-[48px] bg-purple rounded-sm text-white font-bold"
                type="submit"
              >
                Cadastrar
              </button>
            </form>
            <p className="text-blue-400 -translate-y-4 ml-35">
              Já tem uma conta?
            </p>
            <p>Ou</p>
            <div className="flex gap-5">
              <img
                className="border-purple border-2 rounded-3xl p-0.5"
                src={googleIcon}
                alt=""
              />
              <img
                className="border-purple border-2 rounded-3xl p-0.5"
                src={facebookIcon}
                alt=""
              />
            </div>
          </header>
        </div>
      </div>
    );
  }

  if (type === "login") {
    return (
      <div className="bg-black w-full h-screen">
        <div className="bg-custom-image w-full h-screen">
          <header className="w-full h-screen flex gap-5 flex-col items-center justify-center text-white">
            <div className="flex items-center gap-2 mb-5">
              <img src={gymIcon} alt="Icone de um halter" />
              <h1 className="font-bold text-3xl">GymFlow</h1>
            </div>
            <h2 className="font-light text-xl opacity-60">
              Acesse a sua conta
            </h2>
            <form
              className="w-full flex flex-col items-center justify-center gap-3"
              action=""
            >
              <input
                className="w-[302px] h-[48px] bg-gray-02 text-gray-04 pl-5 rounded-sm outline-purple"
                type="email"
                placeholder="Email"
              />
              <input
                className="w-[302px] h-[48px] bg-gray-02 text-gray-04 pl-5 rounded-sm outline-purple"
                type="password"
                placeholder="Senha"
              />
              <button
                className="w-[302px] h-[48px] bg-purple rounded-sm text-white font-bold"
                type="submit"
              >
                Entrar
              </button>
            </form>
            <p className="text-blue-400 -translate-y-4 ml-28">
              Esqueceu a sua senha?
            </p>
            <div className="flex gap-5">
              <img
                className="border-purple border-2 rounded-3xl p-0.5"
                src={googleIcon}
                alt=""
              />
              <img
                className="border-purple border-2 rounded-3xl p-0.5"
                src={facebookIcon}
                alt=""
              />
            </div>
          </header>
        </div>
      </div>
    );
  }
  /*
  if (type === 'recuperar') {
    return()
  }

  if (type === 'recuperar2') {
    return()
  }
*/
}

import gymIcon from "../assets/Barbell.svg";

export function AppName() {
  return (
    <div className="bg-black w-full h-screen">
      <div className="bg-custom-image w-full h-screen">
        <header className="w-full h-screen flex gap-5 flex-col items-center justify-center text-white">
          <div className="flex items-center gap-2">
            <img src={gymIcon} alt="Icone de um halter" />
            <h1 className="font-bold text-3xl">GymFlow</h1>
          </div>
          <h2 className="font-light text-xl opacity-60">Crie a sua conta</h2>
          <form className="w-full flex flex-col items-center justify-center gap-3" action="">
            <input
              className="w-[302px] h-[48px] bg-mint-500 pl-5 rounded-sm"
              id="nome"
              type="text"
              placeholder="Nome"
            />
            <input
              className="w-[302px] h-[48px] bg-gray-950 pl-5 rounded-sm"
              type="email"
              placeholder="Email"
            />
            <input
              className="w-[302px] h-[48px] bg-gray-950 pl-5 rounded-sm"
              type="password"
              placeholder="Senha"
            />
          </form>
        </header>
      </div>
    </div>
  );
}

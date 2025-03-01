import userImg from "../assets/userImg.png";
import userIcon from "../assets/userIcon.svg";
import exitIcon from "../assets/exitIcon.svg";
import Training from "../components/Training.jsx";
import { Barbell, ForkKnife } from "@phosphor-icons/react";

export default function Home() {
  let page = "trainnig";
  return (
    <>
      <header className="w-full h-[120px] bg-gray-02 flex justify-between items-center px-7">
        <div className="flex items-center justify-center gap-3">
          <img
            src={userImg}
            alt="Imagem do usuario"
            className="border-2 rounded-4xl border-gray-03"
          />
          <p className="font-bold text-xl text-purple">Olá, Michel</p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <img src={userIcon} alt="Icone de acesso ao perfil do usuario" />
          <img src={exitIcon} alt="Icone para sair da conta" />
        </div>
      </header>
      <main className="w-full h-[calc(100vh-120px)] flex px-6 flex-col items-center bg-gray-01">
        <div className="w-full flex justify-center items-center gap-7 my-5">
          <Barbell
            size={60}
            color={page === "trainnig" ? "#7C7C8A" : "#FFFD54"}
            weight="regular"
          />
          <div className="bg-purple w-1 h-17"></div>
          <ForkKnife
            size={60}
            color={page === "nutrition" ? "#7C7C8A" : "#FFFD54"}
            weight="regular"
          />
        </div>
        {page === "trainnig" ? <Training /> : null}
      </main>
    </>
  );
}

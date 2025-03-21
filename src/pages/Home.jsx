import userImg from "../assets/userImg.png";
import userIcon from "../assets/userIcon.svg";
import exitIcon from "../assets/exitIcon.svg";
import Training from "../components/Training.jsx";
import { Barbell, ForkKnife } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router";
import { verifyToken } from "../services/authServices";

export default function Home() {
  const [editClass, setEditClass] = useState('')
  const [user, setUser] = useState({});
  const [showPage, setShowPage] = useState(false);
  let page = "trainnig";

  useEffect(() => {
    verifyTokenStorage()
  }, []);

  function editTrainningHome() {
    if (editClass === "") {
      setEditClass("hidden");
    } else {
      setEditClass("");
    }
  }

  function handleUserPage(response) {
    setUser(response)
    setShowPage(true)
  }

  async function verifyTokenStorage() {
    const token = localStorage.getItem("token");
    if (!token) {
      return <Navigate to="/login" />;
    }
    const response = await verifyToken(token)

    handleUserPage(response)
  }

  {
    if (!showPage) {
      return (
        <div className="w-full h-screen flex justify-center items-center bg-gray-01">
          <p className="font-bold text-2xl text-purple">Carregando...</p>
        </div>
      );
    } else {
      return (
        <div className="relative w-full h-screen flex flex-col">
          <header className="w-full h-[120px] bg-gray-02 flex justify-between items-center px-7">
            <div className="flex items-center justify-center gap-3">
              <img
                src={userImg}
                alt="Imagem do usuario"
                className="border-2 rounded-4xl border-gray-03"
              />
              <p className="font-bold text-xl text-purple">Olá, {user.name.split(" ")[0]}</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <img src={userIcon} alt="Icone de acesso ao perfil do usuario" />
              <img src={exitIcon} alt="Icone para sair da conta" />
            </div>
          </header>
          <main
            className={`w-full h-[calc(100vh-120px)] flex px-6 flex-col items-center ${editClass !== '' ? 'justify-center' : ''} bg-gray-01`}
          >
            <div
              className={`${editClass} w-full flex justify-center items-center gap-7 my-5`}
            >
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
            {page === "trainnig" ? (
              <Training editTrainningHome={editTrainningHome} />
            ) : null}
          </main>
          <div className="w-[340px] h-[125px] bg-gray-02 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md flex flex-col justify-center items-center gap-3">
            <h1 className="font-bold text-white text-2xl">Tem certeza?</h1>
            <div className="w-full flex justify-center items-center gap-3">
              <button className="w-[130px] h-[30px] rounded-md text-[20px] text-white font-bold bg-purple">Não</button>
              <button className="w-[130px] h-[30px] rounded-md text-[20px] text-white font-bold bg-gray-03">Sim</button>
            </div>
          </div>
        </div >
      );
    }
  }
}

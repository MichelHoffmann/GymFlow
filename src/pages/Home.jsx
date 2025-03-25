import userImg from "../assets/userImg.png";
import userIcon from "../assets/userIcon.svg";
import exitIcon from "../assets/exitIcon.svg";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { verifyToken } from "../services/authServices";
import { motion } from "motion/react";

export default function Home() {
  const [user, setUser] = useState({});
  const [showPage, setShowPage] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const userHasMeta = useCallback(
    (user) => {
      if (!user.meta) {
        console.log("Não tem meta");
        setShowPage(false);
        navigate("/meta");
      }
      setShowPage(true);
    },
    [navigate]
  );

  const handleUserPage = useCallback(
    (response) => {
      setUser(response);
      userHasMeta(response);
    },
    [userHasMeta]
  );

  const verifyTokenStorage = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }

    const response = await verifyToken(token);
    if (!response) {
      localStorage.removeItem("token");
      navigate("/login");
    }

    handleUserPage(response);
  }, [navigate, handleUserPage]);

  function handleCloseModal() {
    setOpenModal(false);
  }

  function handleOpenModal() {
    setOpenModal(!openModal);
  }

  function handleLogout() {
    localStorage.removeItem("token");
    setShowPage(false);
    navigate("/login");
  }

  

  useEffect(() => {
    verifyTokenStorage();
  }, [showPage, verifyTokenStorage]);

    if (!showPage) {
      return (
        <div className="w-full h-screen flex justify-center items-center bg-gray-01">
          <p className="font-bold text-2xl text-purple">Carregando...</p>
        </div>
      );
    } else {
      return (
        <motion.div>
          {/* <div className="w-full h-screen bg-black fixed inset-0 z-1"></div> */}
          <div
            className={`relative w-full h-dvh flex flex-col z-2 ${
              openModal ? "opacity-20" : "opacity-100"
            }`}
          >
            <header className="w-full h-[120px] bg-gray-02 flex justify-between items-center px-7">
              <div className="flex items-center justify-center gap-3">
                <img
                  src={userImg}
                  alt="Imagem do usuario"
                  className="border-2 rounded-4xl border-gray-03"
                />
                <p className="font-bold text-xl text-purple">
                  Olá, {user.name.split(" ")[0]}
                </p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <img
                  src={userIcon}
                  alt="Icone de acesso ao perfil do usuario"
                  className="cursor-pointer"
                />
                <img
                  src={exitIcon}
                  alt="Icone para sair da conta"
                  className="cursor-pointer"
                  onClick={handleOpenModal}
                />
              </div>
            </header>
            <main>
            </main>
          </div>
          <div
            className={
              !openModal
                ? "hidden"
                : "w-[340px] h-[125px] bg-gray-02 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md flex flex-col justify-center items-center gap-3 z-3"
            }
          >
            <h1 className="font-bold text-white text-2xl">Tem certeza?</h1>
            <div className="w-full flex justify-center items-center gap-3">
              <button
                onClick={handleCloseModal}
                className="w-[130px] h-[30px] rounded-md text-[20px] text-white font-bold bg-purple hover:cursor-pointer"
              >
                Não
              </button>
              <button
                onClick={handleLogout}
                className="w-[130px] h-[30px] rounded-md text-[20px] text-white font-bold bg-gray-03 hover:cursor-pointer"
              >
                Sim
              </button>
            </div>
          </div>
        </motion.div>
      );
    }
}
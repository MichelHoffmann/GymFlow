import userImg from "../assets/userImg.png";
import exitIcon from "../assets/exitIcon.svg";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { verifyToken } from "../services/authServices";
import { CaretRight, Fire, Path } from "@phosphor-icons/react";

export default function Home() {
  const [user, setUser] = useState({});
  const [showPageHome, setShowPageHome] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const userHasMeta = useCallback(
    (user) => {
      if (user.meta === null || user.meta === undefined || user.meta === 0) {
        setShowPageHome(false);
        navigate("/meta", { state: { email: user.email } });
      }
      setShowPageHome(true);
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
    setShowPageHome(false);
    navigate("/login");
  }

  useEffect(() => {
    verifyTokenStorage();
  }, [verifyTokenStorage]);

  if (!showPageHome) {
    return (
      <div className="w-full h-dvh flex justify-center items-center bg-gray-semi-dark">
        <h1 className="text-2xl text-purple-medium font-bold">
          Carregando ...
        </h1>
      </div>
    );
  }

  return (
    <>
      <header className="w-full h-[170px] bg-gray-semi-dark px-7 pt-8 rounded-b-3xl">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center justify-center gap-3">
            <img
              src={userImg}
              alt="Imagem do usuario"
              className="border-2 rounded-4xl border-gray-medium"
            />
            <p className="font-bold text-xl text-white">
              Olá, {user.name.split(" ")[0]}
            </p>
          </div>
          <img
            src={exitIcon}
            alt="Icone para sair da conta"
            className="cursor-pointer"
            onClick={handleOpenModal}
          />
        </div>
      </header>
      <main
        className={`relative w-full h-dvh flex flex-col items-center gap-6 px-6 z-2  -translate-y-10 ${
          openModal ? "opacity-20" : "opacity-100"
        }`}
      >
        <section className="w-full bg-white rounded-3xl px-4 py-3 flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <h1 className="text-black font-semibold">
              Meta semanal de{" "}
              <span className="text-purple-medium">{user.meta} km</span>
            </h1>
            <CaretRight />
          </div>
          <div id="Kilometros">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-light">17 km concluidos</p>
              <p className="text-sm text-gray-light">faltam 8km</p>
            </div>
            <div className="flex">
              <div className="bg-purple-medium grow h-2 rounded-l-sm"></div>
              <div className="bg-gray-light grow h-2 rounded-r-sm"></div>
            </div>
          </div>
        </section>
        <section className="w-full bg-white rounded-3xl px-4 py-3 flex justify-center items-center">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-gray-medium">Calorias totais</h1>
            <p className="flex items-center gap-2">
              <Fire size={27} weight="bold"/> <span className="text-black text-xl font-extrabold">546 kcal</span>
            </p>
          </div>
          <div className="w-[2px] h-15 bg-gray-dark rounded-2xl mx-6"></div>
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-gray-medium">Melhor distância</h1>
            <p className="flex items-center gap-2">
              <Path size={27} weight="bold"/> <span className="text-black text-xl font-extrabold">5,7 Km</span>
            </p>
          </div>
        </section>
        <section>
          
        </section>
      </main>
      {/* MODAL */}
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
    </>
  );
}

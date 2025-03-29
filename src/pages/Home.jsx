import userImg from "../assets/userImg.png";
import exitIcon from "../assets/exitIcon.svg";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { verifyToken } from "../services/authServices";
import { motion } from "motion/react";

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
    console.log('RESPONSE HOME:')
    console.log(response);
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
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, y: -1000 }}
        className="w-full h-dvh flex justify-center items-center bg-purple"
      >
        <motion.div
          className="bg-gray-02 w-[5px]"
          initial={{ height: 30 }}
          animate={{
            height: [0, 100, 250, 210, 500, 460, 1000],
            width: ['5px', '100vw']
          }}
          transition={{
            height: { duration: 3, times: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3] },
            width: { duration: 1, delay: 1.1, times: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3] },
          }}
          exit={{ opacity: 0 }}
        ></motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 20 }}>
      <div
        className={`relative w-full h-dvh flex flex-col items-center z-2 ${openModal ? "opacity-20" : "opacity-100"
          }`}
      >
        <header className="w-full h-[150px] bg-gray-03 px-7 pt-8 rounded-b-3xl">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center justify-center gap-3">
              <img
                src={userImg}
                alt="Imagem do usuario"
                className="border-2 rounded-4xl border-gray-03"
              />
              <p className="font-bold text-xl text-white">Olá, {user.name.split(' ')[0]}</p>
            </div>
            <img
              src={exitIcon}
              alt="Icone para sair da conta"
              className="cursor-pointer"
              onClick={handleOpenModal}
            />
          </div>
        </header>
        <section className="w-[340px] h-[100px] -translate-y-7 bg-white rounded-3xl px-4 py-2">
          <h1 className="text-black font-medium">Meta semanal de <span className="text-purple">{user.meta} km</span></h1>
        </section>
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

import { useNavigate } from "react-router";
import bgImage from "../assets/bgStart.png";
import { useCallback, useEffect } from "react";

export default function Start() {
  const navigate = useNavigate();

  function handleNavigate() {
    localStorage.setItem("showStartPage", JSON.stringify(true));
    navigate("/cadastro");
  }

  const verifyPageStart = useCallback(() => {
    const showStartPage = JSON.parse(
      localStorage.getItem("showStartPage") || "false"
    );
    if (showStartPage) {
      navigate("/cadastro");
    }
  }, [navigate]);

  useEffect(() => {
    verifyPageStart();
  }, [verifyPageStart]);

  return (
    <div
      className="w-full h-dvh bg-bottom bg-no-repeat flex items-end"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full flex flex-col items-center justify-center gap-5 mb-[70px]">
        <h1 className="text-4xl font-semibold text-white">RunFlow</h1>
        <p className="text-white text-center font-extralight">
          Seu progresso começa com o <br /> primeiro passo. Corra e evolua!
        </p>
        <button
          className="w-[300px] h-[56px] bg-purple-medium rounded-2xl font-semibold text-white text-2xl"
          onClick={handleNavigate}
        >
          Começar
        </button>
      </div>
    </div>
  );
}

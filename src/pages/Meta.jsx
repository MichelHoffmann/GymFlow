import { useState } from "react";
import bgImage from "../assets/bgMeta.png";
import loadingIcon from "../assets/loadingIcon.svg";
import { addMeta } from "../services/authServices";
import { useLocation, useNavigate } from "react-router";
import { WarningCircle } from "@phosphor-icons/react";

export default function Meta() {
  const [meta, setMeta] = useState("");
  const [ isLoading, setIsLoading ] = useState(false);
  const [error, setError] = useState();
  const location = useLocation()
  const navigate = useNavigate();
  
  async function handleAddMeta() {
    setError('')
    setIsLoading(true);
    const email = location.state.email
    const response = await addMeta({ email, meta });

    if (response.success) {
      console.log('SUCCESS')
      navigate("/home");
    } else {
      setError(response.message);
    }
    setIsLoading(false);
  }

  function handleChange(e) {
    const inputValue = Number(e.target.value);
    setMeta(inputValue);
  }

  return (
    <div
      className="w-full h-dvh bg-bottom bg-no-repeat flex flex-col gap-5 justify-center items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {error && (
        <div className="w-[290px] bg-red-two opacity-70 rounded-sm flex items-center justify-self-start gap-3 px-5 py-2">
          <WarningCircle size={37} color="white" />
          <p className="text-white font-medium">{error.replace("🔥", "")}</p>
        </div>
      )}
      <div className="w-[290px] border-2 border-purple-three bg-purple-three/20 rounded-2xl px-[25px] py-[20px] flex flex-col justify-center items-center gap-5">
        <h1 className="text-xl font-extrabold text-white">
          Defina uma meta <br /> semanal de Km:
        </h1>
        <div className="relative">
          <input
            autoFocus
            className="flex-grow h-10 bg-gray-02 rounded-2xl border-1 border-purple-two font-extrabold text-white text-center focus:outline-none"
            type="number"
            name="meta"
            id=""
            value={meta}
            onChange={handleChange}
          />
          <button
            disabled
            className="absolute right-6 top-2 font-extrabold text-purple"
          >
            KM
          </button>
        </div>
        <button
          className="rounded-2xl font-extrabold text-purple bg-gray-02 w-47 h-10 py-[4px] border-1 border-purple hover:cursor-pointer"
          onClick={handleAddMeta}
        >
          {isLoading ? (
            <span className="flex justify-center items-center gap-2">
              <img src={loadingIcon} className="w-7" />
              Carregando
            </span>
          ) : (
            <span>Confirmar</span>
          )}
        </button>
      </div>
    </div>
  );
}

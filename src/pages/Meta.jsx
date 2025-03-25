import { motion } from "motion/react";
import { useCallback, useEffect } from "react";
import bgImage from "../assets/bgMeta.png";

export default function Meta() {
  const fetchUserData = useCallback(async () => {
    console.log("fetchUserData");
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);
  return (
    <motion.div
      initial={{ y: 1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 1000 }}
      className="w-full h-screen bg-bottom bg-no-repeat flex justify-center items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="border-2 border-purple-three rounded-2xl px-[25px] py-[20px] flex flex-col justify-center items-center gap-5">
        <h1 className="text-xl font-extrabold text-white">
          Defina uma meta <br /> semanal de Km:
        </h1>
        <div className="relative">
          <input
            className="flex-grow h-10 bg-gray-02 rounded-2xl border-1 border-purple-two font-extrabold text-white text-center focus:outline-none"
            type="number"
            name="meta"
            id=""
          />
          <button className="absolute right-6 top-2 font-extrabold text-purple">
            KM
          </button>
        </div>
        <button className="rounded-2xl font-extrabold text-purple bg-gray-02 w-40 py-[4px] border-1 border-purple">
          Confirmar
        </button>
      </div>
    </motion.div>
  );
}

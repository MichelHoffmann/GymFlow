import Exercises from "./Exercises";

export default function Training() {
    let trainning = "A";
    let nameOfTrainning = "Peito, Ombro e Tríceps";
    return (
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-center items-center gap-7">
          <p
            className={`font-bold ${
              trainning === "A" ? "text-purple" : "text-white"
            } text-2xl`}
          >
            A
          </p>
          <p
            className={`font-bold ${
              trainning === "B" ? "text-purple" : "text-white"
            } text-2xl`}
          >
            B
          </p>
          <p
            className={`font-bold ${
              trainning === "C" ? "text-purple" : "text-white"
            } text-2xl`}
          >
            C
          </p>
        </div>
        <h2 className="my-3 font-semibold text-white text-xl  text-center">
          {nameOfTrainning}
        </h2>
        <Exercises />
      </div>
    );
}
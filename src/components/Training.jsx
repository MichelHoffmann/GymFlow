import ExerciseComponent from "./Exercise";
import exImg from "../assets/exImg.png";
import { useState } from "react";

export default function Training() {
  const [exercises, setExercises] = useState([
    {
      name: "Puxada frontal",
      series: "3 series x 12 repetições",
      done: false,
    },
    {
      name: "Remada curvada",
      series: "3 series x 12 repetições",
      done: true,
    },
    {
      name: "Remada unilateral",
      series: "3 series x 12 repetições",
      done: false,
    },
    {
      name: "Levantamento terra",
      series: "3 series x 12 repetições",
      done: true,
    },
  ]);
  let trainning = "A";
  let nameOfTrainning = "Peito, Ombro e Tríceps";

  function markExerciseAsDone(name) {
    setExercises((prevExercises) =>
      prevExercises.map((exercise) =>
        exercise.name === name
          ? { ...exercise, done: !exercise.done }
          : exercise
      )
    );
  }

  function editTrainning() {
    return(
      <div>
        <h1>Editando...</h1>
      </div>
    )
  }

  return (
    <div className={`w-full flex flex-col`}>
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
      <div className="w-full flex justify-between items-center my-3">
        <p className="text-gray-04 font-semibold text-xl">Exercicios</p>
        <p className="text-gray-04 font-semibold text-xl">{exercises.length}</p>
      </div>
      <div className="min-w-full flex overflow-auto flex-col gap-3">
        {exercises.map((exercise) => {
          return (
            <ExerciseComponent
              key={exercise.name}
              exerciseImg={exImg}
              exercise={exercise}
              markExerciseAsDone={markExerciseAsDone}
            />
          );
        })}
      </div>
      <button
        className="w-[110px] h-10 bg-purple text-white text-2xl font-bold rounded-lg mt-4"
        onClick={editTrainning}
      >
        Editar
      </button>
    </div>
  );
}

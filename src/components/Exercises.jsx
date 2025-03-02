import { CheckSquare } from "@phosphor-icons/react";
import exImg from "../assets/exImg.png";
import { useState } from "react";

// const exercises = [
//   {
//     name: "Puxada frontal",
//     series: "3 series x 12 repetições",
//     done: false,
//   },
//   {
//     name: "Remada curvada",
//     series: "3 series x 12 repetições",
//     done: true,
//   },
//   {
//     name: "Remada unilateral",
//     series: "3 series x 12 repetições",
//     done: false,
//   },
//   {
//     name: "Levantamento terra",
//     series: "3 series x 12 repetições",
//     done: true,
//   },
// ];

export default function Exercises() {
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

  function markExerciseAsDone(name) {
    setExercises((prevExercises) =>
      prevExercises.map((exercise) =>
        exercise.name === name
          ? { ...exercise, done: !exercise.done }
          : exercise
      )
    );
  }

  function editExercises() {
    console.log("editando");
  }

  return (
    <div className="flex grow flex-col pb-5  items-end">
      <div className="w-full flex justify-between items-center my-3">
        <p className="text-gray-04 font-semibold text-xl">Exercicios</p>
        <p className="text-gray-04 font-semibold text-xl">{exercises.length}</p>
      </div>
      <div className="min-w-full flex overflow-auto flex-col gap-3">
        {exercises.map((exercise) => {
          return (
            <div
              key={exercise.name}
              className={`w-full flex justify-between items-center bg-gray-03 rounded-lg px-5 py-3 ${
                exercise.done ? "opacity-20" : ""
              } duration-200`}
            >
              <img className="w-15" src={exImg} alt="" />
              <div>
                <p className="text-white font-semibold text-xl">
                  {exercise.name}
                </p>
                <p className="text-white font-normal">{exercise.series}</p>
              </div>
              <CheckSquare
                size={25}
                color={exercise.done ? "#75F94C" : "#7C7C8A"}
                weight={exercise.done ? "fill" : "regular"}
                onClick={() => markExerciseAsDone(exercise.name)}
              />
            </div>
          );
        })}
      </div>
      <button
        className="w-[110px] h-10 bg-purple text-white text-2xl font-bold rounded-lg mt-4"
        onClick={() => {
          editExercises();
        }}
      >
        Editar
      </button>
    </div>
  );
}

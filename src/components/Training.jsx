import ExerciseComponent from "./Exercise";
import exImg from "../assets/exImg.png";
import { useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";

export default function Training({ editTrainningHome }) {
  const [classEdit, setClassEdit] = useState("");
  const [searchExerciseClass, setSearchExerciseClass] = useState("");
  const [exercises, setExercises] = useState([
    {
      name: "Puxada frontal",
      series: "3 series x 12 repetições",
      done: false,
    },
    {
      name: "Remada curvada",
      series: "3 series x 12 repetições",
      done: false,
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
    if (classEdit === "") {
      setClassEdit("hidden");
    } else {
      setClassEdit("");
    }
    editTrainningHome();
  }

  function deleteExercise(name) {
    setExercises((prevExercises) =>
      prevExercises.filter((exercise) => exercise.name !== name)
    );
  }

  function searchExercises() {
    if (searchExerciseClass === "") {
      setSearchExerciseClass("hidden");
    } else {
      setSearchExerciseClass("");
    }
  }

  if (searchExerciseClass === "hidden") {
    return (
      <div className="flex flex-col w-full h-full">
        <div
          id="input"
          className="flex justify-center items-center bg-gray-03 rounded-lg px-5 py-3 mt-5"
        >
          <input
            type="search"
            name=""
            id=""
            placeholder="Pesquisar exercício"
            className="placeholder-purple text-white font-bold rounded-lg px-5 py-3"
          />
          <MagnifyingGlass size={24} color="#8C78DB" weight="bold" />
        </div>
      </div>
    );
  }

  if (classEdit === "hidden") {
    return (
      <div className={`flex flex-col items-end gap-20 ${searchExerciseClass}`}>
        <div className="min-w-full flex overflow-auto flex-col gap-3">
          {exercises.map((exercise) => {
            return (
              <ExerciseComponent
                key={exercise.name}
                exerciseImg={exImg}
                exercise={exercise}
                type="edit"
                deleteExercise={deleteExercise}
              />
            );
          })}
          <button
            className="border-2 border-purple text-purple font-bold rounded-lg px-5 py-3"
            onClick={() => {
              searchExercises();
            }}
          >
            Adicionar exercicio
          </button>
        </div>
        <div>
          <button
            className="w-[110px] h-10 bg-purple text-white text-2xl font-bold rounded-lg mt-4"
            onClick={editTrainning}
          >
            Salvar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full flex flex-col ${classEdit}`}>
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
      <div className="flex justify-end">
        <button
          className="w-[110px] h-10 bg-purple text-white text-2xl font-bold rounded-lg mt-4"
          onClick={editTrainning}
        >
          Editar
        </button>
      </div>
    </div>
  );
}

import { CheckSquare } from "@phosphor-icons/react";

export default function Exercises({exercise, exerciseImg, markExerciseAsDone}) {
  return (
    (
      <div
        className={`w-full flex justify-between items-center bg-gray-03 rounded-lg px-5 py-3 ${
          exercise.done ? "opacity-20" : ""
        } duration-200`}
      >
        <img className="w-15" src={exerciseImg} alt="" />
        <div>
          <p className="text-white font-semibold text-xl">{exercise.name}</p>
          <p className="text-white font-normal">{exercise.series}</p>
        </div>
        <CheckSquare
          size={25}
          color={exercise.done ? "#75F94C" : "#7C7C8A"}
          weight={exercise.done ? "fill" : "regular"}
          onClick={() => markExerciseAsDone(exercise.name)}
        />
      </div>
    )
  );
}

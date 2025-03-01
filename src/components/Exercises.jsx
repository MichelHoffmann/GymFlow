import { CheckSquare } from "@phosphor-icons/react";
import exImg from "../assets/exImg.png";

const exercises = [
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
];

export default function Exercises() {
    return (
      <div className="flex grow flex-col pb-5">
        <div className="w-full flex justify-between items-center my-3">
          <p className="text-gray-04 font-semibold text-xl">Exercicios</p>
          <p className="text-gray-04 font-semibold text-xl">{exercises.length}</p>
        </div>
        <div className="flex grow overflow-auto flex-col gap-3">
            {exercises.map((exercise) => {
                return (
                  <div
                    key={exercise.name}
                    className="w-full flex justify-between items-center bg-gray-03 rounded-lg px-5 py-3"
                  >
                    <img className="w-15" src={exImg} alt="" />
                    <div>
                      <p className="text-white font-semibold text-xl">
                        {exercise.name}
                      </p>
                      <p className="text-white font-normal">
                        {exercise.series}
                      </p>
                    </div>
                    <CheckSquare
                      size={25}
                      color="#75F94C"
                      weight={exercise.done ? "fill" : "regular"}
                    />
                  </div>
                );
            })}
          {/* <div className="w-full flex justify-between items-center bg-gray-03 rounded-lg px-5 py-3">
            <img className="w-15" src={exImg} alt="" />
            <div>
              <p className="text-white font-semibold text-xl">Puxada frontal</p>
              <p className="text-white font-normal">3 series x 12 repetições</p>
            </div>
            <CheckSquare size={25} color="#75F94C" weight="fill" />
          </div> */}
        </div>
      </div>
    );
}
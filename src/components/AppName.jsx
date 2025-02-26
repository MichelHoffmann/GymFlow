import gymIcon from "../assets/Barbell.svg";

export function AppName() {
  return (
    <div className="bg-amber-500 w-full h-44">
      <img src={gymIcon} alt="Icone de um halter" />
      <h1>GymFlow</h1>
    </div>
  );
}

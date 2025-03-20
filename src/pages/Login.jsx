import gymIcon from "../assets/Barbell.svg";
import googleIcon from "../assets/Google.png";
import { LockSimple, SignIn, User, WarningCircle } from "@phosphor-icons/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router";
import { useState } from "react";
import { loginUser } from "../services/authServices";

const userSchema = z.object({
  email: z.string().email({ message: "Digite um email válido" }),
  password: z
    .string()
    .min(6, { message: "A senha precisa de pelo menos 6 caracteres" }),
});

export default function Login() {
  const [error, setError] = useState(
    "Esse é um erro de exemplo exemplo esse é"
  );
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(userSchema),
  });

  function handleLoginResponse(response) {
    if (!response.success) {
      setError(response.message.message.replace("🔥", ""));
    }
  }

  const handleLoginUser = async (data) => {
    const response = await loginUser(data);
    handleLoginResponse(response);
  };

  return (
    <div className="bg-black w-full h-screen">
      <div className="bg-custom-image w-full h-screen">
        <header className="w-full h-screen flex gap-5 flex-col items-center justify-center text-white">
          <div className="flex items-center gap-2 mb-5">
            <img src={gymIcon} alt="Icone de um halter" />
            <h1 className="font-bold text-3xl">GymFlow</h1>
          </div>
          <h2 className="font-light text-xl opacity-60">Acesse a sua conta</h2>
          {error && (
            <div className="w-[302px] bg-red-two opacity-70 rounded-sm flex items-center justify-self-start gap-3 px-5 py-2">
              <WarningCircle size={25} />
              <p className="text-white font-medium">{error}</p>
            </div>
          )}
          <form
            className="w-full flex flex-col items-center justify-center gap-4"
            onSubmit={handleSubmit(handleLoginUser)}
          >
            <div>
              <label htmlFor="Email" className="font-light">
                Email
              </label>
              <div className="relative">
                <User
                  className="absolute inset-y-2 left-0 pl-3.5 flex items-center pointer-events-none"
                  size={35}
                  color={"#7c7c8a"}
                />
                <input
                  className="w-[302px] h-[48px] bg-gray-02 text-gray-04 pl-11 rounded-sm outline-none focus:border-purple focus:border-2"
                  placeholder="seu@email.com"
                  id="Email"
                  {...register("email")}
                />
              </div>
            </div>
            <div>
              <label htmlFor="Email" className="font-light">
                Senha
              </label>
              <div className="relative">
                <LockSimple
                  className="absolute inset-y-2 left-0 pl-3.5 flex items-center pointer-events-none"
                  size={35}
                  color={"#7c7c8a"}
                />
                <input
                  className="w-[302px] h-[48px] bg-gray-02 text-gray-04 pl-11 rounded-sm outline-none focus:border-purple focus:border-2"
                  type="password"
                  placeholder="Senha"
                  {...register("password")}
                />
              </div>
            </div>
            <div>
              <button
                className="w-[302px] h-[48px] bg-purple rounded-sm text-white font-medium flex justify-center items-center gap-2 mt-3"
                type="submit"
              >
                <SignIn size={25} color={"#fff"} />
                Entrar
              </button>
              <button className="w-[302px] h-[48px] bg-gray-05 border-1 outline-none rounded-sm text-white font-medium flex justify-center items-center gap-2 mt-3">
                <img className="w-7" src={googleIcon} alt="" />
                Google
              </button>
            </div>
          </form>
          <p className="text-blue-500">Esqueceu a sua senha?</p>
          <p>
            Não tem uma conta?
            <Link to={"/cadastro"}>
              <span className="text-blue-500"> Registre-se</span>
            </Link>
          </p>
        </header>
      </div>
    </div>
  );
}

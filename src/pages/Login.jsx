import gymIcon from "../assets/Barbell.svg";
import googleIcon from "../assets/Google.png";
import loadingIcon from "../assets/loadingIcon.svg";
import { LockSimple, SignIn, User, WarningCircle } from "@phosphor-icons/react";
import { set, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { loginUser } from "../services/authServices";
import { ErrorMessage } from "@hookform/error-message";

const userSchema = z.object({
  email: z.string().email({ message: "Digite um email válido" }),
  password: z
    .string()
    .min(6, { message: "A senha precisa de pelo menos 6 caracteres" }),
});

export default function Login() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: zodResolver(userSchema),
  });
  const navigate = useNavigate()

  function handleLoginResponse(response) {
    setIsLoading(false);
    if (response.success) {
      console.log(response)
      navigate("/home");
    } else {
      setError(response.message.message.replace("🔥", ""));
    }
  }

  async function handleLoginUser (data) {
    setError("");
    setIsLoading(true);
    const response = await loginUser(data);
    handleLoginResponse(response);
  };

  return (
    <div className="bg-black w-full h-screen">
      <div className="bg-custom-image w-full h-screen">
        <header className="w-full h-screen flex gap-5 flex-col items-center justify-center text-white">
          <div className="flex items-center gap-2 mb-5 mr-9">
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
            className="w-full flex flex-col items-center justify-center gap-3"
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
            <ErrorMessage errors={errors}
              name="email"
              as={
                <p className="text-red-500 text-xs w-[302px] text-center font-medium" />
              } />
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
                  id="Senha"
                  {...register("password")}
                />
              </div>
            </div>
            <ErrorMessage errors={errors}
              name="password"
              as={
                <p className="text-red-500 text-xs w-[302px] text-center font-medium" />
              } />
            <div>
              <button
                className="w-[302px] h-[48px] bg-purple rounded-sm text-white font-medium flex justify-center items-center gap-2 mt-3"
                type="submit"
              >
                {isLoading ? ( <img src={loadingIcon} className="w-9" />) : (<SignIn size={25} color={"#fff"} />)}
                {isLoading ? (<span>Carregando</span>) : (<span>Entrar</span>)}
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

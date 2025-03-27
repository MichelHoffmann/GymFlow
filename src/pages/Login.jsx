import googleIcon from "../assets/Google.png";
import loadingIcon from "../assets/loadingIcon.svg";
import {
  LockSimple,
  SignIn,
  User,
  WarningCircle,
  Eye,
  EyeSlash,
} from "@phosphor-icons/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { loginUser } from "../services/authServices";
import { ErrorMessage } from "@hookform/error-message";
import { motion } from "motion/react";

const userSchema = z.object({
  email: z.string().email({ message: "Digite um email válido" }),
  password: z
    .string()
    .min(6, { message: "A senha precisa de pelo menos 6 caracteres" }),
});

export default function Login() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });
  const navigate = useNavigate();

  function handleLoginResponse(response) {
    setIsLoading(false);
    if (response.success) {
      navigate("/home");
    } else {
      setError(response.message.message.replace("🔥", ""));
    }
  }

  async function handleLoginUser(data) {
    setError("");
    setIsLoading(true);
    const response = await loginUser(data);
    handleLoginResponse(response);
  }

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <motion.div
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      exit={{ y: 1000 }}
      className="bg-custom-image bg-cover w-full h-screen"
    >
      <div className="w-full h-screen flex flex-col gap-5 items-center justify-center text-white">
        <h1 className="font-bold text-3xl text-purple-two">RunFlow</h1>
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
          <ErrorMessage
            errors={errors}
            name="email"
            as={
              <p className="text-red-500 text-xs w-[302px] text-center font-medium" />
            }
          />
          <div className="relative">
            <div className="relative">
              <LockSimple
                className="absolute inset-y-2 left-0 pl-3.5 flex items-center pointer-events-none"
                size={35}
                color={"#7c7c8a"}
              />
              <input
                className="w-[302px] h-[48px] bg-gray-02 text-gray-04 pl-11 rounded-sm outline-none focus:border-purple focus:border-2"
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                id="Senha"
                {...register("password")}
              />
              <button
              tabIndex={-1}
                type="button"
                className="absolute inset-y-2 right-0 pr-3.5 flex items-center"
              >
                {showPassword ? (
                  <Eye
                    size={22}
                    color={"#7c7c8a"}
                    onClick={handleShowPassword}
                  />
                ) : (
                  <EyeSlash
                    size={22}
                    color={"#7c7c8a"}
                    onClick={handleShowPassword}
                  />
                )}
              </button>
            </div>
            <p className="absolute text-sm text-blue-500 z-10 top-12 right-0">
              Esqueceu a sua senha?
            </p>
          </div>
          <ErrorMessage
            errors={errors}
            name="password"
            as={
              <p className="text-red-500 text-xs w-[302px] text-center font-medium" />
            }
          />
          <button
            className="w-[302px] h-[48px] bg-purple rounded-sm text-white font-medium flex justify-center items-center gap-2 mt-3"
            type="submit"
          >
            {isLoading ? (
              <img src={loadingIcon} className="w-9" />
            ) : (
              <SignIn size={25} color={"#fff"} />
            )}
            {isLoading ? <span>Carregando</span> : <span>Entrar</span>}
          </button>
          <div className="flex items-center w-[302px]">
            <div className="border-t flex-grow"></div>
            <p className="mx-4 text-center">Ou continue com</p>
            <div className="border-t flex-grow"></div>
          </div>
          <button className="w-[302px] h-[48px] bg-gray-03 rounded-xl border-3 border-gray-04 flex justify-center items-center">
            <img src={googleIcon} alt="" />
          </button>
        </form>
        <p>
          Não tem uma conta?
          <Link to={"/cadastro"}>
            <span className="text-blue-500"> Registre-se</span>
          </Link>
        </p>
      </div>
    </motion.div>
  );
}

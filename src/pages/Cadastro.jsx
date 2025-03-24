import gymIcon from "../assets/Barbell.svg";
import googleIcon from "../assets/Google.png";
import loadingIcon from "../assets/loadingIcon.svg";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "../services/authServices";
import { Link, useNavigate } from "react-router";
import {
  At,
  Eye,
  EyeSlash,
  LockSimple,
  SignIn,
  User,
  WarningCircle,
} from "@phosphor-icons/react";
import { useState } from "react";
import { motion } from "motion/react"

const userSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "O nome precisa de pelo menos 3 caracteres" }),
    email: z.string().email({ message: "Digite um email válido" }),
    password: z
      .string()
      .min(6, { message: "A senha precisa de pelo menos 6 caracteres" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas precisam ser iguais",
    path: ["confirmPassword"],
  });

export default function Cadastro() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });
  const navigate = useNavigate();

  async function handleRegisterResponse(response) {
    setIsLoading(false);
    if (response.success) {
      navigate("/login");
    } else {
      setError(response.message.replace("🔥", ""));
    }
  }

  async function handleRegisterUser(data) {
    setIsLoading(true);
    setError("");
    const response = await registerUser(data);
    handleRegisterResponse(response);
  }

  function handleShowPassword1() {
    setShowPassword1(!showPassword1);
  }

  function handleShowPassword2() {
    setShowPassword2(!showPassword2);
  }

  return (
    <motion.div initial={{width: 0}} animate={{width: '100%'}} exit={{opacity: 0}} className="bg-black w-full h-screen">
      <div className="bg-custom-image w-full h-screen">
        <header className="w-full h-screen flex gap-5 flex-col items-center justify-center text-white">
          <div className="flex items-center gap-2 mr-9">
            <img src={gymIcon} alt="Icone de um halter" />
            <h1 className="font-bold text-3xl">GymFlow</h1>
          </div>
          <h2 className="font-light text-xl opacity-60">Crie a sua conta</h2>
          {error && (
            <div className="w-[302px] bg-red-two opacity-70 rounded-sm flex items-center justify-self-start gap-3 px-5 py-2">
              <WarningCircle size={25} />
              <p className="text-white font-medium">{error}</p>
            </div>
          )}
          <form
            className="w-full flex flex-col items-center justify-center gap-3"
            action=""
            id="form"
            onSubmit={handleSubmit(handleRegisterUser)}
          >
            <div>
              <label htmlFor="name" className="font-light">
                Nome
              </label>
              <div className="relative">
                <User
                  className="absolute inset-y-2 left-0 pl-3.5 flex items-center pointer-events-none"
                  size={35}
                  color={"#7c7c8a"}
                />
                <input
                  className="w-[302px] h-[48px] bg-gray-02 text-gray-04 pl-11 rounded-sm outline-none focus:border-purple focus:border-2"
                  type="text"
                  placeholder="seu nome"
                  id="name"
                  {...register("name")}
                />
              </div>
            </div>
            <ErrorMessage
              errors={errors}
              name="name"
              as={
                <p className="text-red-500 text-xs w-[302px] text-center font-medium" />
              }
            />
            <div>
              <label htmlFor="email" className="font-light">
                Email
              </label>
              <div className="relative">
                <At
                  className="absolute inset-y-2 left-0 pl-3.5 flex items-center pointer-events-none"
                  size={35}
                  color={"#7c7c8a"}
                />
                <input
                  className="w-[302px] h-[48px] bg-gray-02 text-gray-04 pl-11 rounded-sm outline-none focus:border-purple focus:border-2"
                  placeholder="seu@email.com"
                  id="email"
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
            <div>
              <label htmlFor="password" className="font-light">
                Senha
              </label>
              <div className="relative">
                <LockSimple
                  className="absolute inset-y-2 left-0 pl-3.5 flex items-center pointer-events-none"
                  size={35}
                  color={"#7c7c8a"}
                />
                <input
                  className="w-[302px] h-[48px] bg-gray-02 text-gray-04 pl-11 pr-11 rounded-sm outline-none focus:border-purple focus:border-2"
                  type={showPassword1 ? "text" : "password"}
                  placeholder="Senha"
                  id="password"
                  {...register("password")}
                />
                <button
                  type="button"
                  className="absolute inset-y-2 right-0 pr-3.5 flex items-center"
                >
                  {showPassword1 ? (
                    <Eye
                      size={22}
                      color={"#7c7c8a"}
                      onClick={handleShowPassword1}
                    />
                  ) : (
                    <EyeSlash
                      size={22}
                      color={"#7c7c8a"}
                      onClick={handleShowPassword1}
                    />
                  )}
                </button>
              </div>
            </div>
            <ErrorMessage
              errors={errors}
              name="password"
              as={
                <p className="text-red-500 text-xs w-[302px] text-center font-medium" />
              }
            />
            <div>
              <label htmlFor="confirmPassword" className="font-light">
                Confirmar a senha
              </label>
              <div className="relative">
                <LockSimple
                  className="absolute inset-y-2 left-0 pl-3.5 flex items-center pointer-events-none"
                  size={35}
                  color={"#7c7c8a"}
                />
                <input
                  className="w-[302px] h-[48px] bg-gray-02 text-gray-04 pl-11 rounded-sm outline-none focus:border-purple focus:border-2"
                  type={showPassword2 ? "text" : "password"}
                  placeholder="Confirme sua senha"
                  id="confirmPassword"
                  {...register("confirmPassword")}
                />
                <button
                  type="button"
                  className="absolute inset-y-2 right-0 pr-3.5 flex items-center"
                >
                  {showPassword2 ? (
                    <Eye size={22} onClick={handleShowPassword2} />
                  ) : (
                    <EyeSlash size={22} onClick={handleShowPassword2} />
                  )}
                </button>
              </div>
            </div>
            <ErrorMessage
              errors={errors}
              name="confirmPassword"
              as={
                <p className="text-red-500 text-xs w-[302px] text-center font-medium" />
              }
            />
            <div>
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
              <button className="w-[302px] h-[48px] bg-gray-05 border-1 outline-none rounded-sm text-white font-medium flex justify-center items-center gap-2 mt-3">
                <img className="w-7" src={googleIcon} alt="" />
                Cadastrar com Google
              </button>
            </div>
          </form>
          <Link to={"/login"}>
            <p className="text-blue-400 -translate-y-4 ml-35">
              Já tem uma conta?
            </p>
          </Link>
        </header>
      </div>
    </motion.div>
  );
}

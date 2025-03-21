import gymIcon from "../assets/Barbell.svg";
import googleIcon from "../assets/Google.png";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "../services/authServices";
import { Link } from "react-router";
import { At, LockSimple, SignIn, User } from "@phosphor-icons/react";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  function handleRegisterUser(data) {
    return registerUser(data);
  }

  return (
    <div className="bg-black w-full h-screen">
      <div className="bg-custom-image w-full h-screen">
        <header className="w-full h-screen flex gap-5 flex-col items-center justify-center text-white">
          <div className="flex items-center gap-2 mr-9">
            <img src={gymIcon} alt="Icone de um halter" />
            <h1 className="font-bold text-3xl">GymFlow</h1>
          </div>
          <h2 className="font-light text-xl opacity-60">Crie a sua conta</h2>
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
                  className="w-[302px] h-[48px] bg-gray-02 text-gray-04 pl-11 rounded-sm outline-none focus:border-purple focus:border-2"
                  type="password"
                  placeholder="Senha"
                  id="password"
                  {...register("password")}
                />
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
                  type="password"
                  placeholder="Confirme sua senha"
                  id="confirmPassword"
                  {...register("confirmPassword")}
                />
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
                <SignIn size={25} color={"#fff"} />
                Cadastrar
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
    </div>
  );

  /*
  if (type === 'recuperar') {
    return()
  }

  if (type === 'recuperar2') {
    return()
  }
*/
}

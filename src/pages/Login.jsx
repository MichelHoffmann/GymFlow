import gymIcon from '../assets/Barbell.svg'
import googleIcon from '../assets/Google.png'
import facebookIcon from '../assets/Facebook.png'
import { z } from "zod";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message'
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser } from "../services/authServices";

const userSchema = z.object({
  email: z.string().email({ message: "Digite um email válido" }),
  password: z.string().min(6, { message: "A senha precisa de pelo menos 6 caracteres" }),
})

export default function Login() {
  const { register, handleSubmit, formState: {errors}} = useForm({
    resolver: zodResolver(userSchema)
  })

  function handleLoginUser(data) {
    loginUser(data)
  }

  return (
    <div className="bg-black w-full h-screen">
      <div className="bg-custom-image w-full h-screen">
        <header className="w-full h-screen flex gap-5 flex-col items-center justify-center text-white">
          <div className="flex items-center gap-2 mb-5">
            <img src={gymIcon} alt="Icone de um halter" />
            <h1 className="font-bold text-3xl">GymFlow</h1>
          </div>
          <h2 className="font-light text-xl opacity-60">
            Acesse a sua conta
          </h2>
          <form
            className="w-full flex flex-col items-center justify-center gap-3"
            onSubmit={handleSubmit(handleLoginUser)}
          >
            <input
              className="w-[302px] h-[48px] bg-gray-02 text-gray-04 pl-5 rounded-sm outline-purple"
              placeholder="Email"
              {...register("email")}
            />
            <ErrorMessage errors={errors} name="email" as={<p className="text-cool-red text-xs w-[302px] text-center font-bold" />} />
            <input
              className="w-[302px] h-[48px] bg-gray-02 text-gray-04 pl-5 rounded-sm outline-purple"
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
            <ErrorMessage errors={errors} name="password" as={<p className="text-cool-red text-xs w-[302px] text-center font-bold" />} />
            <button
              className="w-[302px] h-[48px] bg-purple rounded-sm text-white font-bold"
              type="submit"
            >
              Entrar
            </button>
          </form>
          <p className="text-blue-400 -translate-y-4 ml-28">
            Esqueceu a sua senha?
          </p>
          <div className="flex gap-5">
            <img
              className="border-purple border-2 rounded-3xl p-0.5"
              src={googleIcon}
              alt=""
            />
            <img
              className="border-purple border-2 rounded-3xl p-0.5"
              src={facebookIcon}
              alt=""
            />
          </div>
        </header>
      </div>
    </div>
  );
}
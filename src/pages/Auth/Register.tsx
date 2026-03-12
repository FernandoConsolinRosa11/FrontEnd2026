<<<<<<< Updated upstream
import "../Auth/css/Register.css"

export default function Register() {
    return (
            <div className="flex justify-center items-center register-bg min-h-screen">
                <form className="flex-col gap-8 flex w-full glass-form">
                    <input
                        className="p-2 bg-white form-redondo"
                        type="text"
                        name="nome"
                        placeholder="Nome completo"
                    />
                    <input
                        className="p-2 bg-white form-redondo"
                        type="text"
                        name="cpf"
                        placeholder="CPF"
                    />
                    <input
                        className="p-2 bg-white form-redondo"
                        type="email"
                        name="email"
                        placeholder="Email"
                    />
                    <input
                        className="p-2 bg-white form-redondo"
                        type="password"
                        name="senha"
                        placeholder="Senha"
                    />
                    <button type="submit">
                        Cadastrar
                    </button>
                </form>
            </div>
        
    );
}
=======
import "../Auth/css/auth.css";
import Button from "../../components/Button.tsx";
import { useNavigate } from "react-router-dom";
<<<<<<< Updated upstream
=======
import Checkbox from "../../components/checkbox.tsx";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
>>>>>>> Stashed changes

export default function Register() {
  const navigate = useNavigate();

  const registerSchema = z.object({
  nome: z
    .string()
    .min(3, "Nome deve ter pelo menos 3 caracteres"),

  cpf: z
    .string()
    .regex(/^\d{11}$/, "CPF deve conter 11 números"),

  email: z
    .string()
    .email("Email inválido"),

  senha: z
    .string()
    .min(6, "Senha precisa ter no mínimo 6 caracteres")
});

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(registerSchema)
  });

  function onSubmit(data: any) {
    console.log(data);
  }

  return (
<<<<<<< Updated upstream
    <div className="min-h-screen w-full bg-[#121212] flex justify-end   relative overflow-hidden">
  
      <div className="absolute inset-0 register-bg opacity-50" />
      <form className="flex-col gap-9 flex w-full glass-form m-5 scale-90 py-6 my-auto">
        <h3 className="text-center text-white">Crie seu perfil</h3>
        <input
          className="p-3 bg-white rounded"
          type="text"
          name="nome"
          placeholder="Nome completo"
        />
        <input
          className="p-3 bg-white rounded"
          type="text"
          name="cpf"
          placeholder="CPF"
        />
        <input
          className="p-3 bg-white rounded"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="p-3 bg-white rounded mb-2"
          type="password"
          name="senha"
          placeholder="Senha"
        />
        <div className="grid grid-cols-3 items-center w-full">
          <Button
            texto=" ← "
            className="text-white justify-self-start  gap-2 text-[20px]  rounded-3xl "
            onClick={() => navigate("/")}
          />
          <Button
            texto="Confirmar"
            className="text-white justify-self-center items-center gap-3 text-[20px] m-auto"
          />
        </div>
      </form>
    </div>
  );
}
>>>>>>> Stashed changes
=======
    <div className="min-h-screen w-full bg-[#121212] flex justify-end items-center overflow-hidden ">
      <div className="absolute inset-0 register-bg py-10!" />
      {Object.keys(errors).length > 0 && (
  <div className="flex flex-col gap-4 ml-6 text-red-400 text-sm min-w-[220px] bg-black/40 p-4 rounded-md backdrop-blur-sm">

  {errors.nome && <p className="text-red-400 text-base drop-shadow-md">{errors.nome.message}</p>}
  {errors.cpf && <p className="text-red-400 text-base drop-shadow-md">{errors.cpf.message}</p>}
  {errors.email && <p className="text-red-400 text-base drop-shadow-md">{errors.email.message}</p>}
  {errors.senha && <p className="text-red-400 text-base drop-shadow-md">{errors.senha.message}</p>}

</div>
)}

      <div className="flex items-start">

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-col gap-12 flex w-full glass-form m-6! scale-80 backdrop-blur-xl! border border-white/10! "
        >
          <h3 className="m-auto text-white">
            Associe-se à <span className="text-[#C59958]">Prime Motors</span>
          </h3>

          <input
            className="p-2 bg-white rounded-sm placeholder-gray-700 text-black "
            type="text"
            placeholder="Nome completo"
            {...register("nome")}
          />

          <input
            className="p-2 bg-white rounded-sm placeholder-gray-700 text-black"
            type="text"
            placeholder="CPF"
            {...register("cpf")}
          />

          <input
            className="p-2 bg-white rounded-sm placeholder-gray-700 text-black"
            type="email"
            placeholder="Email"
            {...register("email")}
          />

          <input
            className="p-2 bg-white rounded-sm mb-2 placeholder-gray-700 text-black"
            type="password"
            placeholder="Senha"
            {...register("senha")}
          />

          <Checkbox texto="Aceito os Termos de Uso e a Política de Privacidade." />

          <div className="grid grid-cols-3 items-center w-full">
            <Button
              texto=" ← "
              className="text-white justify-self-start gap-2 text-[20px] "
              onClick={() => navigate("/")}
            />

            <Button
              texto="Confirmar"
              type="submit"
              className="text-white justify-self-center items-center gap-2 text-[20px] m-auto "
            />
          </div>
        </form>
      </div>
    </div>
  );
}
>>>>>>> Stashed changes

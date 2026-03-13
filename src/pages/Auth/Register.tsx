import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Imports de Componentes e Estilos
import "../Auth/css/auth.css";
import Button from "../../components/Button.tsx";
import Checkbox from "../../components/checkbox.tsx";
import { cpfMask, zipCodeMask, phoneMask } from '../Auth/masks/masks.ts';

// 1. Definição do Schema de Validação com Zod
const registerSchema = z.object({
  nome: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  cpf: z.string().min(14, "CPF incompleto"), // 14 caracteres com a máscara
  phone: z.string().min(14, "Telefone incompleto"),
  cep: z.string().min(9, "CEP incompleto"),
  senha: z.string().min(6, "Senha precisa ter no mínimo 6 caracteres")
});

// Inferindo o tipo do formulário a partir do schema
type RegisterFormData = z.infer<typeof registerSchema>;

export default function Register() {
  const navigate = useNavigate();

  // 2. Inicialização do React Hook Form
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema)
  });

  // Observa os valores para que o input mostre a máscara em tempo real
  const values = watch();

  const onSubmit = (data: RegisterFormData) => {
    console.log("Formulário enviado com sucesso:", data);
    // Aqui você faz o seu fetch/axios para o backend
  };

  return (
    <div className="min-h-screen w-full bg-[#121212] flex justify-end items-center overflow-hidden">
      <div className="absolute inset-0 register-bg py-10!" />
      
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className="flex-col gap-4 flex w-full glass-form m-6! scale-80 backdrop-blur-xl! border border-white/10!"
      >
        <h3 className="m-auto text-white">
          Associe-se à <span className="text-[#C59958]">Prime Motors</span>
        </h3>

        {/* Nome */}
        <div className="flex flex-col gap-1">
          <input
            {...register("nome")}
            className="p-2 bg-white rounded-sm placeholder-gray-700 text-black"
            placeholder="Nome completo"
          />
          {errors.nome && <span className="text-red-500 text-xs">{errors.nome.message}</span>}
        </div>

        {/* CPF com Máscara Dinâmica */}
        <div className="flex flex-col gap-1">
          <input
            {...register("cpf")}
            value={values.cpf || ""}
            onChange={(e) => setValue("cpf", cpfMask(e.target.value))}
            className="p-2 bg-white rounded-sm placeholder-gray-700 text-black"
            placeholder="000.000.000-00"
          />
          {errors.cpf && <span className="text-red-500 text-xs">{errors.cpf.message}</span>}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <input
            {...register("email")}
            type="email"
            className="p-2 bg-white rounded-sm placeholder-gray-700 text-black"
            placeholder="Email"
          />
          {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
        </div>

        {/* Senha */}
        <div className="flex flex-col gap-1">
          <input
            {...register("senha")}
            type="password"
            className="p-2 bg-white rounded-sm mb-2 placeholder-gray-700 text-black"
            placeholder="Senha"
          />
          {errors.senha && <span className="text-red-500 text-xs">{errors.senha.message}</span>}
        </div>

        {/* Grid Telefone e CEP */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <input
              {...register("phone")}
              value={values.phone || ""}
              onChange={(e) => setValue("phone", phoneMask(e.target.value))}
              className="w-full p-2 bg-white border border-gray-300 rounded-sm placeholder-gray-700 text-black focus:outline-blue-500"
              placeholder="Telefone"
            />
            {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <input
              {...register("cep")}
              value={values.cep || ""}
              onChange={(e) => setValue("cep", zipCodeMask(e.target.value))}
              className="w-full p-2 bg-white border border-gray-300 rounded-sm placeholder-gray-700 text-black focus:outline-blue-500"
              placeholder="CEP"
            />
            {errors.cep && <span className="text-red-500 text-xs">{errors.cep.message}</span>}
          </div>
        </div>

        <Checkbox texto="Aceito os Termos de Uso e a Política de Privacidade." />

        <div className="grid grid-cols-3 items-center w-full">
          <Button
            texto=" ← "
            type="button" // Importante para não disparar o submit
            className="text-white justify-self-start gap-2 text-[20px]"
            onClick={() => navigate("/")}
          />
          <Button
            texto="Confirmar"
            type="submit"
            className="text-white justify-self-center items-center gap-2 text-[20px] m-auto"
          />
        </div>
      </form>
    </div>
  );
}
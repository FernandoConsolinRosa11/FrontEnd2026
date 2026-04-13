import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "../Auth/css/auth.css";
import Button from "../../components/Button.tsx";
import Checkbox from "../../components/checkbox.tsx";
import Notification from "../../components/Notification";
import { cpfMask, zipCodeMask, phoneMask } from "../Auth/masks/masks.ts";
import { registerSchema } from "../Auth/masks/validationRegister.ts";
import type { RegisterFormData } from "../Auth/masks/validationRegister.ts";
import { authStorage } from "../../utils/userLocalStorage.ts";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const [notification, setNotification] = useState<{
    message: string;
    variant: "success" | "error";
  } | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const values = watch();

  useEffect(() => {
    if (!notification) return;
    const timer = setTimeout(() => setNotification(null), 3200);
    return () => clearTimeout(timer);
  }, [notification]);

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const cleanData = {
        ...data,
        cpf: data.cpf.replace(/\D/g, ""),
        number: data.number.replace(/\D/g, ""),
        cep: data.cep.replace(/\D/g, ""),
      };

      const response = await axios.post(
        "http://localhost:3000/auth/users",
        cleanData,
      );

      if (response.status === 201) {
        authStorage.saveUser(response.data.user);
        setNotification({
          message: "Cadastro realizado com sucesso.",
          variant: "success",
        });
        navigate("/Login");
        window.location.reload();
      }
    } catch (error: any) {
      const errormessage =
        error.response?.data?.message || "Erro ao conectar com o servidor";
      setNotification({ message: errormessage, variant: "error" });
      console.log(`Erro no cadastro:`, error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#121212] flex justify-end items-center overflow-hidden">
      <div className="absolute inset-0 register-bg py-10!" />
      {notification ? (
        <Notification
          message={notification.message}
          variant={notification.variant}
          onClose={() => setNotification(null)}
        />
      ) : null}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-col gap-4 flex w-full glass-form m-6! scale-80 backdrop-blur-xl! border border-white/10!"
      >
        <h3 className="m-auto text-white">
          Associe-se à <span className="text-[#C59958]">Prime Motors</span>
        </h3>

        <div className="flex flex-col gap-1">
          <input
            {...register("name")}
            className="p-2 bg-white rounded-sm placeholder-gray-700 text-black"
            placeholder="Nome completo"
          />
          {errors.name && (
            <span className="text-red-500 text-xs">{errors.name.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <input
            {...register("cpf")}
            value={values.cpf || ""}
            onChange={(e) => setValue("cpf", cpfMask(e.target.value))}
            className="p-2 bg-white rounded-sm placeholder-gray-700 text-black"
            placeholder="CPF"
          />
          {errors.cpf && (
            <span className="text-red-500 text-xs">{errors.cpf.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <input
            {...register("email")}
            type="email"
            className="p-2 bg-white rounded-sm placeholder-gray-700 text-black"
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <input
            {...register("password")}
            type="password"
            className="p-2 bg-white rounded-sm mb-2 placeholder-gray-700 text-black"
            placeholder="password"
          />
          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <input
              {...register("number")}
              value={values.number || ""}
              onChange={(e) => setValue("number", phoneMask(e.target.value))}
              className="w-full p-2 bg-white border border-gray-300 rounded-sm placeholder-gray-700 text-black focus:outline-blue-500"
              placeholder="Telefone"
            />
            {errors.number && (
              <span className="text-red-500 text-xs">
                {errors.number.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              {...register("cep")}
              value={values.cep || ""}
              onChange={(e) => setValue("cep", zipCodeMask(e.target.value))}
              className="w-full p-2 bg-white border border-gray-300 rounded-sm placeholder-gray-700 text-black focus:outline-blue-500"
              placeholder="CEP"
            />
            {errors.cep && (
              <span className="text-red-500 text-xs">{errors.cep.message}</span>
            )}
          </div>
        </div>

        <Checkbox texto="Aceito os Termos de Uso e a Política de Privacidade." />

        <div className="grid grid-cols-3 items-center w-full">
          <Button
            texto=" ← "
            type="button"
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

import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  cpf: z.string().min(14, "CPF incompleto"),
  number: z.string().min(14, "Telefone incompleto"),
  cep: z.string().min(9, "CEP incompleto"),
  password: z.string().min(6, "Senha precisa ter no mínimo 6 caracteres")
});

export type RegisterFormData = z.infer<typeof registerSchema>;
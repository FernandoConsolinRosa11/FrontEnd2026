import "../Auth/css/Register.css";
import Button from "../../components/Button.tsx";
import { useNavigate } from "react-router-dom";
import Checkbox from "../../components/checkbox.tsx";


export default function Register() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full bg-[#121212] flex justify-end items-center  overflow-hidden ">
      <div className="absolute inset-0 register-bg py-10!" />
      <form className="flex-col gap-7 flex w-full glass-form m-6! scale-80  backdrop-blur-xl! border border-white/10! ">
        <h3 className="m-auto text-white">Associe-se à  <span className="text-[#C59958]">Prime Motors</span></h3>
        <input
          className="p-2 bg-white rounded-sm  placeholder-gray-700 text-black "
          type="text"
          name="nome"
          placeholder="Nome completo"
        />
        <input
          className="p-2 bg-white rounded-sm placeholder-gray-700 text-black"
          type="text"
          name="cpf"
          placeholder="CPF"
        />
        <input
          className="p-2 bg-white rounded-sm placeholder-gray-700 text-black"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="p-2 bg-white rounded-sm mb-2 placeholder-gray-700 text-black"
          type="password"
          name="senha"
          placeholder="Senha"
        />
        <Checkbox texto="Aceito os Termos de Uso e a Política de Privacidade."/>
        
        <div className="grid grid-cols-3 items-center w-full">
          <Button
            texto=" ← "
            className="text-white justify-self-start  gap-2 text-[20px] "
            onClick={() => navigate("/")}
          />
          <Button
            texto="Confirmar"
            className="text-white justify-self-center items-center gap-2 text-[20px] m-auto "
          />
          
        </div>
      </form>
    </div>
  );
}

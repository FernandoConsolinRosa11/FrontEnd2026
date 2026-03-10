import "../Auth/css/Register.css";
import Button from "../../components/Button.tsx";
import Checkbox from "../../components/checkbox.tsx";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full bg-[#121212] flex justify-end items-center  overflow-hidden ">
      <div className="absolute inset-0  bg-login-screen opacity-75  py-10!" />
      <form className="flex-col gap-9 flex w-full glass-form m-6! scale-80  backdrop-blur-xl! border border-white/10!">
        <h3 className="m-auto text-white">
          Acesse sua conta <span className="text-[#C59958]">Prime</span>
        </h3>
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
        <div className="flex items-center gap-2"></div>
        <span className="flex items-center">
            <Checkbox texto="Manter-me Conectado"/>
        </span>
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

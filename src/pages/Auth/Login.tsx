import "../Auth/css/auth.css";
import Button from "../../components/Button.tsx";
import { useNavigate } from "react-router-dom";

export default function Login() {
<<<<<<< Updated upstream
    return (
        <div className="flex justify-center items-center register-bg min-h-screen">
                <form className="flex-col gap-8 flex w-full glass-form">
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
                    <button type="submit"
                        className="cursor-pointer mx-auto">
                        Entrar
                    </button>
                </form>
            </div>
    );
}
=======
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full bg-[#121212] flex justify-end   relative overflow-hidden">
  
      <div className="absolute inset-0 login-bg opacity-50" />
      <form className="flex-col gap-9 flex w-full glass-form m-5 scale-90 py-6 my-auto">
        <h3 className="text-center text-white">Crie seu perfil</h3>
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
            className="text-white justify-self-center items-center gap-2 text-[20px] m-auto "
          />
        </div>
      </form>
    </div>
  );
}
>>>>>>> Stashed changes

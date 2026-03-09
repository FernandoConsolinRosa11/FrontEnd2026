import "../Auth/css/Register.css";
import Button from "../../components/Button.tsx";

export default function Register() {
  return (
    <div className="flex justify-center items-center bg-[#121212] min-h-screen">
      <form className="flex-col gap-8 flex w-full glass-form">
        <h3 className="m-auto text-white">Crie seu perfil</h3>
        <input
          className="p-2 bg-white rounded"
          type="text"
          name="nome"
          placeholder="Nome completo"
        />
        <input
          className="p-2 bg-white rounded"
          type="text"
          name="cpf"
          placeholder="CPF"
        />
        <input
          className="p-2 bg-white rounded"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="p-2 bg-white rounded"
          type="password"
          name="senha"
          placeholder="Senha"
        />
        <Button
          texto="Confirmar"
          className="text-white flex items-center gap-2 text-[20px] m-auto"
        />
      </form>
    </div>
  );
}

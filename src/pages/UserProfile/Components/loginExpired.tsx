import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

export default function LoginExpired() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#121212] min-h-screen flex items-center justify-center text-gray-500 tracking-widest uppercase">
      <div className="">Tempo de login Expirado!</div>
      <Button
        texto="Refazer Login"
        onClick={() => {
          navigate("/login");
        }}
      />
    </div>
  );
}

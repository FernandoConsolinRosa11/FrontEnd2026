import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../contexts/authContext"; 
import Logo from "../assets/icons/logo.png";
import Menu from "./Menu";
import Button from "../components/Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { user, logout } = useContext(AuthContext); 
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="font-medium bg-[#121212] shadow-2xl py-3  top-0 z-50 border-t border-b border-zinc-800">
      <div className="container-fluid flex items-center justify-between">
        
        <div className="flex-1 flex justify-start mx-2 relative">
          <Button
            texto="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white flex items-center gap-2 text-[20px] bi bi-list"
          />
        </div>

        <div className="flex-1 flex justify-center m-0">
          <Link to="/">
            <img src={Logo} alt="logo" className="size-22 w-full" />
          </Link>
        </div>

        <div className="flex-1 flex justify-end gap-6 text-sm uppercase tracking-widest mx-2">
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-white normal-case font-bold">
                <Link to={`/Perfil/${user.id}`}>Olá, {user.name}</Link>
              </span>
              <button
                onClick={handleLogout}
                className="text-red-600 text-xs hover:underline"
              >
                Sair
              </button>
            </div>
          ) : (
            <div className="flex gap-4 text-white">
              <Button
                texto="Login"
                onClick={() => navigate("/Login")}
              />
              <Button
                texto="Cadastro"
                onClick={() => navigate("/Register")}
              />
            </div>
          )}
        </div>
      </div>

      {menuOpen && (
        <div className="mt-2 px-2">
          <Menu />
        </div>
      )}
    </nav>
  );
}
import { Link } from "react-router-dom";
import Logo from "../assets/icons/logo.png";
import Menu from "./Menu";
import Button from "../components/Button";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="font-medium bg-[#121212] shadow-2xl py-3">
      <div className="container-fluid flex items-center justify-between">
        <div className="flex-1 flex justify-start mx-2 relative">
          <Button
            texto="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white flex items-center gap-2 text-[20px]"
          />
          {menuOpen && <Menu />}
        </div>

        <div className="flex-1 flex justify-center">
          <img src={Logo} alt="logo" className="text-center w-25" />
        </div>

        <div className="flex-1 flex justify-end gap-6 text-sm uppercase tracking-widest mx-2">
          <Link to="/Login" className="text-white text-decoration-none">
            Login
          </Link>
          <Link to="/Register" className="text-white text-decoration-none">
            Cadastro
          </Link>
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
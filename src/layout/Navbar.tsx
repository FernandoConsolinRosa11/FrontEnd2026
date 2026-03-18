import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/icons/logo.png";
import Menu from "./Menu";
import Button from "../components/Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="font-medium bg-[#121212] shadow-2xl py-3 sticky!  border-t!  border-zinc-800!">
      <div className="container-fluid flex items-center justify-between ">
        <div className="flex-1 flex justify-start mx-2 relative">
          <Button
            texto="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white flex items-center gap-2 text-[20px] bi bi-list"
          />
        </div>

        <div className="flex-1 flex justify-center m-0">
          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              className="text-center w-full size-22 m-auto "
            />
          </Link>
        </div>

        <div className="flex-1 flex justify-end gap-6 text-sm uppercase tracking-widest mx-2">
          <Button
            texto="Login"
            className="text-white flex items-center gap-2 text-[20px] "
            onClick={() => navigate("/Login")}
          />
          <Button
            texto="Cadastro"
            className="text-white flex items-center gap-2 text-[20px] "
            onClick={() => navigate("/Register")}
          />
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

import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./menu.css";

export default function Menu() {
  return (
    <div className="h-[30vh] bg-fundo w-full absolute z-40 left-0 top-full">
      <div className="container mx-auto px-6 h-[20vh]">
        <div className="grid grid-cols-3 gap-5 py-4 w-full content-center h-full">

          <div className="flex justify-between items-center animation me-4">
            <span>MODELO</span>
            <FaChevronRight />
          </div>

          <div className="flex justify-between items-center animation me-4">
            <span>EXPLORAR</span>
            <FaChevronRight />
          </div>

          <div className="flex justify-between items-center animation me-4">
            <span>CARROS</span>
            <FaChevronRight />
          </div>

          <div className="flex justify-between items-center animation me-4">
            <span>CATEGORIAS</span>
            <FaChevronRight />
          </div>

          <Link to={"/Catalogo"} className="flex justify-between items-center animation me-4">
            <span>CATÁLOGO</span>
            <FaChevronRight />
          </Link>

          <div className="flex justify-between items-center animation me-4">
            <span>TESTE</span>
            <FaChevronRight />
          </div>

        </div>
      </div>
    </div>
  );
}
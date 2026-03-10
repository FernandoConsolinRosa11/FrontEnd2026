<<<<<<< Updated upstream
export default function Menu() {
  return (
    <div>
      
=======
import { FaChevronRight } from "react-icons/fa";
import "./menu.css";

export default function Menu() {
  return (
    <div className="h-[30vh] bg-fundo w-full absolute z-40 left-0 top-full">
      <div className="container mx-auto px-6 h-[20vh]">
        <div className="grid grid-cols-3 gap-5 py-4 w-full content-center h-full">

          <div className="flex justify-between items-center animation me-4">
            <span>MODELOS</span>
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

          <div className="flex justify-between items-center animation me-4">
            <span>MAE DO HIAGO</span>
            <FaChevronRight />
          </div>

          <div className="flex justify-between items-center animation me-4">
            <span>seis coisa</span>
            <FaChevronRight />
          </div>

        </div>
      </div>
>>>>>>> Stashed changes
    </div>
  );
}
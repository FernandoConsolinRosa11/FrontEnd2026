import { FaChevronRight } from "react-icons/fa";
import "./menu.css";

export default function Menu() {
  return (
    <div className="h-[30vh] bg-fundo w-full absolute z-40 left-0 top-full">
      <div className="container mx-auto px-6 h-[20vh]">
        <div className="grid grid-cols-3 gap-5 py-4 w-full content-center h-full">

          <div className="flex justify-between items-center animation me-4">
            <span>Modelos</span>
            <FaChevronRight />
          </div>

          <div className="flex justify-between items-center animation me-4">
            <span>Explorar</span>
            <FaChevronRight />
          </div>

          <div className="flex justify-between items-center animation me-4">
            <span>Garagem</span>
            <FaChevronRight />
          </div>

        </div>
      </div>
    </div>
  );
}

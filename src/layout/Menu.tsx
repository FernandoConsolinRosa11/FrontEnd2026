import { FaChevronRight } from "react-icons/fa";
import "./menu.css";

export default function Menu() {
  return (
    <div className="h-[25vh] bg-fundo w-full absolute z-40 left-0 top-full  border-t border-zinc-800">
      <div className="container mx-auto px-6 h-[20vh]">
        <div className="grid grid-cols-3 gap-5 py-4 w-full content-center h-full">
          <div className="flex justify-between items-center animation me-4 border-b-2 p-1">
            <span>Modelos</span>
            <FaChevronRight />
          </div>

          <div className="flex justify-between items-center animation me-4 border-b-2 p-1">
            <span>Explorar</span>
            <FaChevronRight />
          </div>

          <div className="flex justify-between items-center animation me-4 border-b-2 p-1">
            <span>Garagem</span>
            <FaChevronRight />
          </div>

        </div>
      </div>
    </div>
  );
}

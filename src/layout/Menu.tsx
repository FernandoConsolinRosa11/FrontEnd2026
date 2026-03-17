import { FaChevronRight } from "react-icons/fa";
import "./menu.css";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="h-[25vh] bg-fundo w-full absolute z-40 left-0 top-full  border-t border-zinc-800">
      <div className="container mx-auto px-6 h-[20vh] ">
        <div className="grid grid-cols-2  gap-5 py-4 w-full content-center!  h-full   ">
          <Link to={"/Explorar"} className="flex justify-between items-center animation me-4 border-b-2 p-1 no-underline">
            <span>Explorar</span>
            <FaChevronRight />
          </Link>

          <Link to={'/Garagem'}  className="flex justify-between items-center animation me-4 border-b-2 p-1">
            <span>Garagem</span>
            <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

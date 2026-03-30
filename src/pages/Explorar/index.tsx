import Carrossel from "./components/CarroselMarca";
import CardCarro from "./components/CardCarros";
import SideBar from "./components/SideBar";

export default function Explorar() {
  return (
    <div>
      <div className="w-full">
        <Carrossel />
      </div>

      <div className="w-full flex ">
       <SideBar/>

        <div className="w-full px-8">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 sm:grid-cols-3  justify-items-center">
            <CardCarro />
          </div>
        </div>
      </div>
    </div>
  );
}

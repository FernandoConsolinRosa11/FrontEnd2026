import { useEffect, useState } from "react";
import Carrossel from "./components/CarroselMarca";
import CardCarro from "./components/CardCarros";
import SideBar from "./components/SideBar";
import type { CardCarProps } from "../../types/types";

export default function Explorar() {
  const [cars, setCars] = useState<CardCarProps[]>([]);
  const [marcaSelecionada, setMarcaSelecionada] = useState("Todos");

  useEffect(() => {
    async function fetchCars() {
      try {
        const res = await fetch("http://localhost:3000/cars");
        const data = await res.json();

        setCars(data);
      } catch (err) {
        console.error("Erro ao buscar carros:", err);
      }
    }

    fetchCars();
  }, []);

  const carsFiltrados =
    marcaSelecionada === "Todos"
      ? cars
      : cars.filter((carro) => carro.brand === marcaSelecionada);

  return (
    <div>
      <div className="w-full">
        <Carrossel onChangeMarca={setMarcaSelecionada} />
      </div>

      <div className="w-full flex">
        <SideBar />

        <div className="w-full px-8">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 sm:grid-cols-3 justify-items-center gap-4">

            {carsFiltrados.map((carro, index) => (
              <CardCarro key={index} carro={carro} />
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}
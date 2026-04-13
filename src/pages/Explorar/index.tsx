import { useEffect, useState } from "react";
import Carrossel from "./components/CarroselMarca";
import CardCarro from "./components/CardCarros";
import SideBar from "./components/SideBar";
import type { CardCarProps } from "../../types/types";

export default function Explorar() {
  const [cars, setCars] = useState<CardCarProps[]>([]);
  const [marcaSelecionada, setMarcaSelecionada] = useState("Todos");
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState<string[]>([]);

  const handleCategoryToggle = (category: string) => {
    console.log("Categoria clicada:", category); 
    setCategoriasSelecionadas((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category) 
        : [...prev, category]                
    );
  };
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

  const carsFiltrados = cars.filter((carro) => {
  // 1. Filtro de Marcas
  const matchesMarca = marcaSelecionada === "Todos" || carro.brand === marcaSelecionada;

  // 2. Filtro de Categorias
  // Convertemos as categorias selecionadas para minúsculo para comparar sem erro
  const categoriasLower = categoriasSelecionadas.map(c => c.toLowerCase());

  const matchesCategoria =
    categoriasSelecionadas.length === 0 ||
    (carro.category?.name && categoriasLower.includes(carro.category.name.toLowerCase()));

  return matchesMarca && matchesCategoria;
});

  return (
    <div>
      <div className="w-full">
        <Carrossel onChangeMarca={setMarcaSelecionada} />
      </div>

      <div className="w-full flex">
        <SideBar
          onCategoryChange={handleCategoryToggle}   
          selectedCategories={categoriasSelecionadas} 
        />

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
import { useState } from "react";
import  useFavorites  from "./hooks/useFavorites"; 
import type { CardGarageProps } from "../../types/types";
import GarageCard from "./components/garageCard"; 

export default function Garagem() {
  const userId = "id-do-user";
  
  const { favorites, loading, handleToggleFavorite } = useFavorites(userId);

  const [garageCars, setGarageCars] = useState<CardGarageProps[]>([]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center text-[#C59958] tracking-[0.2em] uppercase font-light">
        Carregando sua coleção...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white p-10 pt-2">
      
      {favorites.length > 0 && (
        <section className="mb-16 animate-fade-in ml-10!">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 bg-[#C59958] rotate-45"></div>
            <h2 className="text-xl font-light tracking-[0.3em] uppercase text-[#C59958]">
              Favoritos da Coleção
            </h2>
          </div>

          <div className="flex flex-wrap gap-8">
            {favorites.map((car) => (
              <GarageCard
                key={`fav-${car.id}`} 
                car={car}
                isFavorite={true}
                onFavorite={() => handleToggleFavorite(car.id)}
              />
            ))}
          </div>
        </section>
      )}


      <div className="ml-10!">
        <h2 className="text-3xl font-light tracking-[0.4em] uppercase mb-12 border-l-[5px] border-[#C59958] pl-6!">
          Sua Garagem
        </h2>

        <div className="flex flex-wrap gap-8">
          {garageCars.length > 0 ? (
            garageCars.map((car) => (
              <GarageCard
                key={`garage-${car.id}`}
                car={car}
                isFavorite={favorites.some(f => f.id === car.id)}
                onFavorite={() => handleToggleFavorite(car.id)}
              />
            ))
          ) : (
            <p className="text-zinc-500 font-light italic pl-2">
              Nenhum veículo em sua garagem no momento.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
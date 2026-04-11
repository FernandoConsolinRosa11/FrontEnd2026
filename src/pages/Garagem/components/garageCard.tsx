// src/pages/Garagem/components/garageCard.tsx
import type { CardGarageProps } from "../../../types/types";

interface GarageCardComponentProps {
  car: CardGarageProps;
}

export default function GarageCard({ car }: GarageCardComponentProps) {
  return (
    <div className="bg-[#1c1c1c] border border-white/10 w-80 overflow-hidden hover:border-[#C59958] transition-colors">
      <div className="h-48 overflow-hidden">
        <img 
          src={car.imgUrl || "/placeholder-car.png"} 
          alt={car.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-2 space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="text-white uppercase tracking-tighter font-bold text-lg">
            {car.name}
          </h3>
          <span className="text-[10px] bg-[#C59958] text-black px-2 py-1 font-bold rounded">
            {car.status}
          </span>
        </div>
        
        <p className="text-zinc-500 text-xs uppercase tracking-widest">
          Valor Ofertado: 
          <span className="text-white ml-2">
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(car.offeredValue)}
          </span>
        </p>
        
        {car.message && (
          <p className="text-zinc-400 text-xs italic border-t border-white/5 pt-2">
            "{car.message}"
          </p>
        )}
      </div>
    </div>
  );
}
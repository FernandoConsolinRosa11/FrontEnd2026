import { Button } from "../../UserProfile/Components";

export default function GarageCard({ car, isFavorite, onFavorite }: { car: any, isFavorite: boolean, onFavorite: () => void }) {
  return (
    <div className="group relative w-[320px] bg-[#1A1A1A] border border-white/5 overflow-hidden transition-all duration-500 hover:border-[#C59958]/30">
      {/* Imagem com Overlay */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-60"></div>
        <Button onClick={onFavorite} className="absolute top-4 right-4 z-10 transition-colors duration-300" >
          <i className={`bi ${isFavorite ? 'bi-heart-fill text-[#C59958]' : 'bi-heart text-white/50'} text-xl`}></i>
        </Button>


      </div>

      <div className="p-6">
        <span className="text-[10px] tracking-[3px] text-[#C59958] uppercase font-medium">
          {car.brand || 'Premium'}
        </span>
        <h3 className="text-lg font-light tracking-widest uppercase mt-1 mb-4 leading-tight">
          {car.name}
        </h3>

        <div className="flex justify-between items-center pt-4 border-t border-white/5">
          <div className="flex flex-col">
            <span className="text-[9px] text-white/30 uppercase tracking-widest">Ano</span>
            <span className="text-xs font-light tracking-wider text-white/80">{car.year}</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-[9px] text-white/30 uppercase tracking-widest">Status</span>
            <span className="text-xs font-light tracking-wider text-[#C59958]">Disponível</span>
          </div>
        </div>
      </div>

      {/* Barra de destaque inferior no hover */}
      <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C59958] transition-all duration-500 group-hover:w-full"></div>
    </div>
  );
}
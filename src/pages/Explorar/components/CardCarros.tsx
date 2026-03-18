import Image from "./cardimage.jpg";
import Button from "../../../components/Button"

export default function CardCarro() {
  return (
    <div className="w-full max-w-[325px] bg-[#ffff] text-black shadow-md overflow-hidden mt-5  border border-zinc-800 ">
      {/* Imagem responsiva */}
      <img
        src={Image}
        alt="Logo"
        className="w-full h-48 md:h-56 lg:h-64 object-cover"
      />

      {/* Conteúdo do card */}
      <div className="p-4">
        <h6 className="text-xl! font-bold! mb-2">Porsche</h6>
        <p className="text-gray-700 text-sm mb-2">
          4.0 litros V8 Biturbo 4x4 Flex Automático 
        </p>
        <div className="flex gap-4">
          <p className="text-gray-700 text-sm flex items-center gap-1">
            <i className="bi bi-calendar" /> 2026/2026
          </p>
          <p className="text-gray-700 text-sm flex items-center gap-1">
            <i className="bi bi-speedometer2" /> 123.000 Km
          </p>
        </div>
        <div>
          <p className="text-gray-700 text-sm flex items-center gap-1">
            <i className="bi bi-geo-alt"></i> São Paulo (SP)
          </p>
        </div>
        <h6 className="text-xl! font-bold! mb-2">USD$ 686.700</h6>
        <Button texto='Ver Parcelas' className="bg-[#121212] text-white w-full"/>
      </div>
    </div>
  );
}
